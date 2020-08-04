import * as http from 'http';
import * as https from 'https';
import fetch, { RequestInit, Response, HeadersInit, RequestInfo } from 'node-fetch';
import { RateLimitError, BadRequestError, GoneError, UnauthorizedError, InternalServerError, ForbiddenError } from './errors';
import { LoginResponse } from './responses';
import delay from './delay';
import { LoginRequestBody } from './requests';
import { NoTokenError } from '.';

export enum ApiUrlEnvironments {
    production = 'production',
    sandbox = 'sandbox'
}

interface TradeDeskOptions {
    /**
     * The url of the Tradedesk API
     * 
     * @type {number}
     * @memberof TradeDeskOptions
     */
    apiUrl?: string;

    /**
     * HTTP(s) Agent to use when making requests
     *
     * `undefined` (default): use `http.globalAgent` for this host and port.
     * `Agent` object: explicitly use the passed in `Agent`.
     * `false`: causes a new `Agent` with default values to be used.
     *
     * @type {http.Agent | boolean}
     * @memberof TradeDeskOptions
     */
    agent?: http.Agent | https.Agent | boolean;

    /**
     * The login of the user requesting the authentication token.
     * 
     * @type {number}
     * @memberof TradeDeskOptions
     */
    username?: string;

    /**
     * The login of the user requesting the authentication token.
     * 
     * @type {number}
     * @memberof TradeDeskOptions
     */
    password?: string;

    /**
     * The number of minutes until the token expires. If this parameter is not set or set to zero, the token will not expire
     * 
     * @type {number}
     * @memberof TradeDeskOptions
     */
    tokenExpiration?: number;

    /**
     * Max number of retires to try a request when getting rate limited
     *
     * @type {number}
     * @memberof TradeDeskOptions
     */
    maxRetries?: number
    
    /**
     * Max delay for an exponential back off policy for when retrying requests. Time is in seconds.
     *
     * @type {number}
     * @memberof TradeDeskOptions
     */
    maxRetryDelay?: number

    /**
     * Base delay for an exponential back off policy for when retrying requests. Time is in seconds.
     *
     * @type {number}
     * @memberof TradeDeskOptions
     */
    retryDelay?: number
}

class TradeDesk {
    /**
     * The authentication token
     *
     * @memberof TradeDesk
     */
    public token = '';

    /**
     * The time when the token was last set. This works to refresh a token before trying request with an expired token
     *
     * @type {number}
     * @memberof TradeDesk
     */
    public tokenTime: number;

    /**
     * Options used to make requests
     *
     * @type {TradeDeskOptions}
     * @memberof TradeDesk
     */
    public options: TradeDeskOptions;

    constructor(options: TradeDeskOptions = {}) {
        this.options = {
            apiUrl: 'https://api.thetradedesk.com/v3',
            maxRetries: 3,
            maxRetryDelay: 60,
            retryDelay: 5,
            ...options,
        };
    }

    setToken(token: string): TradeDesk {
        this.token = token;
        this.tokenTime = Date.now();

        return this;
    }

    /**
     * Set the API url based on an enumerated list
     *
     * @param {ApiUrlEnvironments} environment
     * @returns {TradeDesk}
     * @memberof TradeDesk
     */
    setApiUrl(environment: ApiUrlEnvironments): TradeDesk;

    /**
     * Set the API Url to an explicit url
     *
     * @param {string} url
     * @returns {TradeDesk}
     * @memberof TradeDesk
     */
    setApiUrl(url: string): TradeDesk;

    setApiUrl(environment: ApiUrlEnvironments | string): TradeDesk {
        if (environment === ApiUrlEnvironments.production) {
            this.options.apiUrl = 'https://api.thetradedesk.com/v3';
        } else if (environment === ApiUrlEnvironments.sandbox) {
            this.options.apiUrl = 'https://apisb.thetradedesk.com/v3';
        } else {
            this.options.apiUrl = environment;
        }

        return this;
    }

    /**
     * Login to TradeDesk API and grab an authentication token
     *
     * @returns {Promise<TradeDesk>}
     * @memberof TradeDesk
     */
    async login(): Promise<TradeDesk>;

    /**
     * Login to TradeDesk API and grab an authentication token
     *
     * @param {string} username The login of the user requesting the authentication token.
     * @param {string} password The login of the user requesting the authentication token.
     * @param {number} [tokenExpiration=0] The number of minutes until the token expires. If this parameter is not set or set to zero, the token will not expire
     * @returns {Promise<TradeDesk>}
     * @memberof TradeDesk
     */
    async login(
        username: string,
        password: string,
        tokenExpiration?: number
    ): Promise<TradeDesk>;

    async login(
        username?: string,
        password?: string,
        tokenExpiration?: number
    ): Promise<TradeDesk> {
        if (username) {
            this.options.username = username;
        }

        if (password) {
            this.options.password = password;
        }

        const requestBody: LoginRequestBody = {
            Login: this.options.username,
            Password: this.options.password,
        };

        if (tokenExpiration) {
            this.options.tokenExpiration = tokenExpiration;
        }

        if (this.options.tokenExpiration) {
            requestBody.TokenExpirationInMinutes = this.options.tokenExpiration;
        }

        const tokenResponse = await this.request(
            this.makeUrl('/authentication'),
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody),
            },
            0,
            false
        );

        const { Token: token } = (await tokenResponse.json()) as LoginResponse;

        this.setToken(token);

        return this;
    }

    /**
     * Make URL by combining the apiUrl and the given uri
     *
     * @private
     * @param {string} uri
     * @returns {string}
     * @memberof TradeDesk
     */
    private makeUrl(uri: string): string {
        return `${this.options.apiUrl}${uri}`;
    }

    /**
     * Does this instance have enough data to attempt a login
     *
     * @private
     * @returns {boolean}
     * @memberof TradeDesk
     */
    private canLogin(): boolean {
        return Boolean(this.options.username && this.options.password);
    }

    /**
     * Make a http request with node-fetch with builtin retries and automatic login
     *
     * @private
     * @param {string} uri
     * @param {RequestInit} options
     * @param {number} [attempts=0]
     * @param {boolean} [tryLogin=true]
     * @returns {Promise<Response>}
     * @memberof TradeDesk
     */
    private async request(
        uri: string,
        options: RequestInit,
        attempts = 0,
        tryLogin = true
    ): Promise<Response> {
        // If no token is set and can login, attempt a login
        if (!this.token && this.canLogin() && tryLogin) {
            return this.login().then(() => this.request(uri, options, attempts + 1, tryLogin));
        }

        // If tokenTime has expired
        if (this.token && this.tokenTime && this.tokenTime < Date.now() && this.canLogin() && tryLogin) {
            return this.login().then(() => this.request(uri, options, attempts + 1, tryLogin));
        }

        // Apply token header
        const mergedOptions: RequestInit = {
            ...options,
            headers: {
                ...(options.headers || ({} as HeadersInit)),
                'TTD-Auth': this.token,
            },
        };

        return fetch(uri, mergedOptions).then((res) => {
            if (res.ok) {
                return res;
            } else if (res.status === 429) {
                // Hit a Rate Limit, retry if we can
                if (attempts < this.options.maxRetries) {
                    // Attempt to use header to set delay before retry
                    let delayMilliSeconds =
                        Number(res.headers.get('retry-after')) * 1000;

                    // If no header, attempt a exponential backoff up to `maxRetryDelay`
                    if (!delayMilliSeconds) {
                        delayMilliSeconds = Math.min(
                            this.options.maxRetryDelay * 1000,
                            (this.options.retryDelay * 1000 * 2) ^
                                (attempts + 1)
                        );
                    }

                    // Execute delay and retry the request
                    return delay(delayMilliSeconds).then(() =>
                        this.request(uri, options, attempts + 1, tryLogin)
                    );
                }

                // We've exceeded our retry limit and must throw now
                throw new RateLimitError(res.statusText, attempts, res);
            } else if (res.status === 400) {
                // Bad request response, must throw
                throw new BadRequestError(res.statusText, res);
            } else if (res.status === 401) {
                // Only on initial request, attempt login if unauthorized
                if (attempts === 0 && this.canLogin() && tryLogin) {
                    return this.login().then(() =>
                        this.request(uri, options, attempts + 1, tryLogin)
                    );
                }

                throw new UnauthorizedError(res.statusText, res);
            } else if (res.status === 403) {
                // Only on initial request, attempt login for forbidden
                if (attempts === 0 && this.canLogin() && tryLogin) {
                    return this.login().then(() =>
                        this.request(uri, options, attempts + 1, tryLogin)
                    );
                }

                throw new ForbiddenError(res.statusText, res);
            } else if (res.status === 410) {
                throw new GoneError(res.statusText, res);
            }

            throw new InternalServerError(res.statusText, res);
        });
    }

    /**
     * Create a GET request
     *
     * @param {string} uri
     * @param {RequestInit} [options={}]
     * @returns {Promise<Response>}
     * @memberof TradeDesk
     */
    get(
        uri: string,
        options: RequestInit = {}
    ): Promise<Response> {
        return this.request(this.makeUrl(uri), {
            ...options,
            method: 'get',
        });
    }

    /**
     * Create a POST request
     *
     * @param {string} uri
     * @param {Record<string, unknown>} payload
     * @param {RequestInit} [options={}]
     * @returns {Promise<Response>}
     * @memberof TradeDesk
     */
    post(
        uri: string,
        payload: Record<string, unknown>,
        options: RequestInit = {}
    ): Promise<Response> {
        return this.request(this.makeUrl(uri), {
            ...options,
            method: 'post',
            body: JSON.stringify(payload),
            headers: {
                ...(options.headers || ({} as HeadersInit)),
                'Content-Type': 'application/json',
            },
        });
    }

    /**
     * Create a PUT request
     *
     * @param {string} uri
     * @param {Record<string, unknown>} payload
     * @param {RequestInit} [options={}]
     * @returns {Promise<Response>}
     * @memberof TradeDesk
     */
    put(
        uri: string,
        payload: Record<string, unknown>,
        options: RequestInit = {}
    ): Promise<Response> {
        return this.request(this.makeUrl(uri), {
            ...options,
            method: 'put',
            body: JSON.stringify(payload),
            headers: {
                ...(options.headers || ({} as HeadersInit)),
                'Content-Type': 'application/json',
            },
        });
    }

    /**
     * Create a DELETE request
     *
     * @param {string} uri
     * @param {RequestInit} [options={}]
     * @returns {Promise<Response>}
     * @memberof TradeDesk
     */
    delete(
        uri: string,
        options: RequestInit = {}
    ): Promise<Response> {
        return this.request(this.makeUrl(uri), {
            ...options,
            method: 'delete',
        });
    }
}

export default TradeDesk;
