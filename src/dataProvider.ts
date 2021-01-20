import * as http from 'http';
import fetch, { RequestInit, Response, HeadersInit } from 'node-fetch';
import { RateLimitError, BadRequestError, InternalServerError } from './errors';
import delay from './delay';
import crypto from 'crypto';


export enum DatacenterHostnames {
    USEastCoast = 'use-data.adsrvr.org', // US East Coast
    UKEU = 'euw-data.adsrvr.org', // UK/EU
    APAC = 'sin-data.adsrvr.org', // APAC
    USWestCoast = 'usw-data.adsrvr.org', // US West Coast
    Tokyo = 'tok-data.adsrvr.org', // Tokyo
    China = 'data-cn2.adsrvr.cn' // China
}

interface DataProviderOptions {
    /**
     * The url of the Tradedesk Data API
     */
    apiUrl?: string;

    /**
     * HTTP(s) Agent to use when making requests
     */
    agent?: http.Agent | ((parsedUrl: URL) => http.Agent);

    /**
     * Max number of retires to try a request when getting rate limited
     */
    maxRetries?: number

    /**
     * Max delay for an exponential back off policy for when retrying requests. Time is in seconds.
     */
    maxRetryDelay?: number

    /**
     * Base delay for an exponential back off policy for when retrying requests. Time is in seconds.
     */
    retryDelay?: number
}

class DataProvider {

     /**
     * Options used to make requests
     */
    public options: DataProviderOptions;

    /**
     * Provider Provisioned Secret Key
     */
    private secretKey: string;

    constructor(secretKey: string, options: DataProviderOptions = {}) {
        this.secretKey = secretKey
        this.options = {
            apiUrl: `https://${DatacenterHostnames.USEastCoast}`,
            maxRetries: 3,
            maxRetryDelay: 60,
            retryDelay: 5,
            ...options,
        };
    }

    /**
     * Set the API Url to an explicit url
     */
    setApiUrl(arg: DatacenterHostnames | string): DataProvider {
        const values = Object.values(DatacenterHostnames) as Array<string>;
        if (values.includes(arg)) {
            this.options.apiUrl = `https://${arg}`;
        } else {
            this.options.apiUrl = arg;
        }

        return this;
    }


    /**
     * Creates a HMAC SHA1 Signature
     */
    createSignature(body: string): string {
        return crypto.createHmac('sha1', this.secretKey)
            .update( body )
            .digest('base64');
    }

    /**
     * Make URL by combining the apiUrl and the given uri
     */
    private makeUrl(uri: string): string {
        return `${this.options.apiUrl}${uri}`;
    }

    /**
     * Make a http request with node-fetch with builtin retries
     */
    private async request(
        uri: string,
        options: RequestInit,
        attempts = 0,
    ): Promise<Response> {
        const ttdSignature = this.createSignature(options.body as string);

        // Apply token header
        const mergedOptions: RequestInit = {
            agent: this.options.agent,
            ...options,
            headers: {
                ...(options.headers || ({} as HeadersInit)),
                'TtdSignature': ttdSignature,
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
                        this.request(uri, options, attempts + 1)
                    );
                }

                // We've exceeded our retry limit and must throw now
                throw new RateLimitError(res.statusText, attempts, res);
            } else if (res.status === 400) {
                // Bad request response, must throw
                throw new BadRequestError(res.statusText, res);
            }

            throw new InternalServerError(res.statusText, res);
        });
    }


    /**
     * Create a POST request
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

}

export default DataProvider;
