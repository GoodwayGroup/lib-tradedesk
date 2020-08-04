import nock from 'nock';
import TradeDesk, { ApiUrlEnvironments, InternalServerError } from './';
import { UnauthorizedError, BadRequestError, RateLimitError, ForbiddenError, GoneError } from './errors';

describe('TradeDesk Class', () => {
    beforeAll(() => {
        nock.disableNetConnect()
    });

    afterAll(() => {
        nock.enableNetConnect();
    });

    afterEach(() => {
        nock.cleanAll();
    })

    it('should create an instance with options set', () => {
        const instance = new TradeDesk({
            username: 'test',
            password: 'apassword'
        });

        expect(instance.options).toEqual({
            username: 'test',
            password: 'apassword',
            apiUrl: 'https://api.thetradedesk.com/v3',
            maxRetries: 3,
            maxRetryDelay: 60,
            retryDelay: 5
        });
    });

    it('should set a token', () => {
        const instance = new TradeDesk();

        const returnedInstance = instance.setToken('atoken');

        expect(returnedInstance).toBe(instance);
        expect(instance.token).toEqual('atoken');
        expect(instance.tokenTime / 1000).toBeCloseTo(Date.now() / 1000, 1);
    });

    it.each([
        ['an enum', ApiUrlEnvironments.production, 'https://api.thetradedesk.com/v3'],
        ['an enum', ApiUrlEnvironments.sandbox, 'https://apisb.thetradedesk.com/v3'],
        ['a string', 'http://aurl.com/v1337', 'http://aurl.com/v1337']
    ])('should set an apiUrl with %s \'%s\' as input', (_: string, input: ApiUrlEnvironments | string, expectation: string) => {
        const instance = new TradeDesk();

        const returnedInstance = instance.setApiUrl(input);

        expect(returnedInstance).toBe(instance);
        expect(instance.options.apiUrl).toEqual(expectation);
    });

    it('should login and get a token', async () => {
        const loginScope = nock('https://api.thetradedesk.com/v3')
            .post('/authentication', {
                Login: 'auser',
                Password: 'apassword'
            })
            .reply(200, {
                Token: 'atoken'
            });

        const instance = new TradeDesk({
            username: 'auser',
            password: 'apassword'
        });

        const result = await instance.login();

        expect(loginScope.isDone()).toBe(true);
        expect(result).toBe(instance);
        expect(instance.token).toEqual('atoken');
    });

    it('should fail to login', async () => {
        const loginScope = nock('https://api.thetradedesk.com/v3')
            .post('/authentication', {
                Login: 'auser',
                Password: 'apassword',
            })
            .reply(
                401,
                JSON.stringify(
                    'Invalid credentials. Please check them and try again.'
                )
            );

        const instance = new TradeDesk();

        await expect(
            instance.login('auser', 'apassword')
        ).rejects.toBeInstanceOf(UnauthorizedError);
        expect(loginScope.isDone()).toBe(true);
        expect(instance.token).toEqual('');
    });

    it('should login after being rate limited', async () => {
        const loginScope = nock('https://api.thetradedesk.com/v3')
            .post('/authentication', {
                Login: 'auser',
                Password: 'apassword',
            })
            .reply(429, JSON.stringify('Try again'), {
                'retry-after': '0.1',
            })
            .post('/authentication', {
                Login: 'auser',
                Password: 'apassword',
            })
            .reply(200, {
                Token: 'atoken',
            });

        const instance = new TradeDesk();

        const result = await instance.login('auser', 'apassword');

        expect(loginScope.isDone()).toBe(true);
        expect(result).toBe(instance);
        expect(instance.token).toEqual('atoken');
    });

    describe('error responses', () => {
        it('should rate limit with no retries', async () => {
            const loginScope = nock('https://api.thetradedesk.com/v3')
                .get('/advertiser')
                .reply(429, JSON.stringify('Try again'), {
                    'retry-after': '0.1',
                });
            
            const instance = new TradeDesk({
                maxRetries: 0
            });
            instance.setToken('atoken');

            await expect(instance.get('/advertiser')).rejects.toBeInstanceOf(RateLimitError);

            expect(loginScope.isDone()).toBe(true);
        });

        it('should rate limit with 1 retries', async () => {
            const loginScope = nock('https://api.thetradedesk.com/v3')
                .get('/advertiser')
                .reply(429, JSON.stringify('Try again'), {
                    'retry-after': '0.01',
                })
                .get('/advertiser')
                .reply(429, JSON.stringify('Try again'), {
                    'retry-after': '0.01',
                });

            const instance = new TradeDesk({
                maxRetries: 1
            });
            instance.setToken('atoken');

            await expect(instance.get('/advertiser')).rejects.toBeInstanceOf(RateLimitError);

            expect(loginScope.isDone()).toBe(true);
        });

        it('should reply with a bad request', async () => {
            const loginScope = nock('https://api.thetradedesk.com/v3')
                .post('/advertiser', {})
                .reply(400, {
                    Message:
                        'The request failed validation. Please check your request and try again.',
                    ErrorDetails: [
                        {
                            Property: 'AdvertiserName',
                            Reasons: ['This property is required when creating.'],
                        }
                    ],
                });

            const instance = new TradeDesk();
            instance.setToken('atoken');

            await expect(instance.post('/advertiser', {})).rejects.toBeInstanceOf(BadRequestError);
            expect(loginScope.isDone()).toBe(true);
        });

        it('should reply with a forbidden error and no login attempt', async () => {
            const loginScope = nock('https://api.thetradedesk.com/v3')
                .post('/advertiser', {})
                .reply(403, {
                    Message:
                        'The supplied auth token is not valid or has expired. Please obtain a new token via the Authentication API.'
                });

            const instance = new TradeDesk();
            instance.setToken('atoken');

            await expect(instance.post('/advertiser', {})).rejects.toBeInstanceOf(ForbiddenError);
            expect(loginScope.isDone()).toBe(true);
        });

        it('should reply with a forbidden error with a login attempt', async () => {
            const loginScope = nock('https://api.thetradedesk.com/v3')
                .post('/advertiser', {})
                .reply(403, {
                    Message:
                        'The supplied auth token is not valid or has expired. Please obtain a new token via the Authentication API.'
                })
                .post('/authentication', {
                    Login: 'auser',
                    Password: 'apassword',
                })
                .reply(200, {
                    Token: 'newtoken'
                })
                .post('/advertiser', {})
                .reply(403, {
                    Message:
                        'The supplied auth token is not valid or has expired. Please obtain a new token via the Authentication API.'
                });

            const instance = new TradeDesk({
                username: 'auser',
                password: 'apassword',
            });
            instance.setToken('atoken');

            await expect(instance.post('/advertiser', {})).rejects.toBeInstanceOf(ForbiddenError);
            expect(loginScope.isDone()).toBe(true);
            expect(instance.token).toEqual('newtoken');
        });

        it('should reply with a unauthorized error and no login attempt', async () => {
            const loginScope = nock('https://api.thetradedesk.com/v3')
                .post('/advertiser', {})
                .reply(401, {
                    Message:
                        'Not authorized'
                });

            const instance = new TradeDesk();
            instance.setToken('atoken');

            await expect(instance.post('/advertiser', {})).rejects.toBeInstanceOf(UnauthorizedError);
            expect(loginScope.isDone()).toBe(true);
        });

        it('should reply with a unauthorized error with a login attempt', async () => {
            const loginScope = nock('https://api.thetradedesk.com/v3')
                .post('/advertiser', {})
                .reply(401, {
                    Message:
                        'Not allowed.'
                })
                .post('/authentication', {
                    Login: 'auser',
                    Password: 'apassword',
                })
                .reply(200, {
                    Token: 'newtoken'
                })
                .post('/advertiser', {})
                .reply(401, {
                    Message:
                        'Again not allowed'
                });

            const instance = new TradeDesk({
                username: 'auser',
                password: 'apassword',
            });
            instance.setToken('atoken');

            await expect(instance.post('/advertiser', {})).rejects.toBeInstanceOf(UnauthorizedError);
            expect(loginScope.isDone()).toBe(true);
            expect(instance.token).toEqual('newtoken');
        });

        it('should reply with a gone error', async () => {
            const loginScope = nock('https://api.thetradedesk.com/v3')
                .post('/advertiser', {})
                .reply(410, {
                    Message:
                        'It be gone, yo'
                });

            const instance = new TradeDesk();
            instance.setToken('atoken');

            await expect(instance.post('/advertiser', {})).rejects.toBeInstanceOf(GoneError);
            expect(loginScope.isDone()).toBe(true);
        });

        it('should reply with an internal server error', async () => {
            const loginScope = nock('https://api.thetradedesk.com/v3')
                .post('/advertiser', {})
                .reply(500, {
                    Message:
                        'Internal server error'
                });

            const instance = new TradeDesk();
            instance.setToken('atoken');

            await expect(instance.post('/advertiser', {})).rejects.toBeInstanceOf(InternalServerError);
            expect(loginScope.isDone()).toBe(true);
        });
    });

    // it('should retry login if token has expired')
})