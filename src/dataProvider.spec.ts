import nock from 'nock';
import { DataProvider } from '.';
import { DatacenterHostnames } from './dataProvider';
import { RateLimitError, BadRequestError } from './errors';


describe('DataProvider Class', () => {
    const DEFAULT_URL = 'https://use-data.adsrvr.org';
    const ROUTE = "/data/thirdparty"
    const EMPTY_ITEMS_PAYLOAD = { DataProviderId: '123', Items: [] }

    beforeAll(() => {
        nock.disableNetConnect()
    });

    afterAll(() => {
        nock.enableNetConnect();
    });

    afterEach(() => {
        nock.cleanAll();
    })

    it('should create an instance with default options set', () => {
        const instance = new DataProvider("abc");

        expect(instance.options).toEqual({
            apiUrl: DEFAULT_URL,
            maxRetries: 3,
            maxRetryDelay: 60,
            retryDelay: 5,
        });
    });

    it('should create signature from body and secret', () => {
        const instance = new DataProvider("xyz");
        expect(instance.createSignature('{"DataProviderId":"123"}'))
            .toBe('nXJLsNJ+CXasuFPFiChWX323QFY=')
    })

    it('[post]', async () => {
        const postScope = nock(DEFAULT_URL)
            .matchHeader('Content-Type', 'application/json')
            .matchHeader('TtdSignature', 'qKJM6iH3Co0Ym1DUm/FcP1JDdPg=')
            .post(ROUTE, JSON.stringify(EMPTY_ITEMS_PAYLOAD))
            .reply(200, {a: 'pass-through-result'});

        const instance = new DataProvider("xyz");

        const result = await instance.post(ROUTE, EMPTY_ITEMS_PAYLOAD);

        expect(result.status).toBe(200)
        expect(await result.json()).toEqual({a: 'pass-through-result'})

        expect(postScope.isDone()).toBe(true);
    });

    describe('error responses', () => {
        it('should rate limit with no retries', async () => {
            const postScope = nock(DEFAULT_URL)
                .post(ROUTE)
                .reply(429, JSON.stringify('Try again'), {
                    'retry-after': '0.1',
                });

            const instance = new DataProvider("xyz", {
                maxRetries: 0
            });

            await expect(instance.post(ROUTE, EMPTY_ITEMS_PAYLOAD)).rejects.toBeInstanceOf(RateLimitError);

            expect(postScope.isDone()).toBe(true);
        });

        it('should rate limit with 1 retries', async () => {
            const postScope = nock(DEFAULT_URL)
                .post(ROUTE)
                .reply(429, JSON.stringify('Try again'), {
                    'retry-after': '0.01',
                })
                .post(ROUTE)
                .reply(429, JSON.stringify('Try again'), {
                    'retry-after': '0.01',
                });

            const instance = new DataProvider("xyz", {
                maxRetries: 1
            });

            await expect(instance.post(ROUTE, EMPTY_ITEMS_PAYLOAD)).rejects.toBeInstanceOf(RateLimitError);

            expect(postScope.isDone()).toBe(true);
        });

        it('should reply with a bad request', async () => {
            const postScope = nock(DEFAULT_URL)
                .post(ROUTE)
                .reply(400, {});

            const instance = new DataProvider("xyz")

            await expect(instance.post(ROUTE, EMPTY_ITEMS_PAYLOAD)).rejects.toBeInstanceOf(BadRequestError);
            expect(postScope.isDone()).toBe(true);
        });

        it('should set apiUrl by DatacenterHostnames', () => {
            const instance = new DataProvider("abc");
            instance.setApiUrl(DatacenterHostnames.USWestCoast)

            expect(instance.options.apiUrl).toEqual('https://usw-data.adsrvr.org');
        });


        it('should set apiUrl by string', () => {
            const uri = "http://www.google.com"
            const instance = new DataProvider("abc");
            instance.setApiUrl(uri)

            expect(instance.options.apiUrl).toEqual(uri);
        });

    })
})
