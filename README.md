# lib-tradedesk

[![Coverage Status](https://coveralls.io/repos/github/GoodwayGroup/lib-tradedesk/badge.svg?branch=master)](https://coveralls.io/github/GoodwayGroup/lib-tradedesk?branch=master) [![CircleCI](https://circleci.com/gh/GoodwayGroup/lib-tradedesk.svg?style=svg)](https://circleci.com/gh/GoodwayGroup/lib-tradedesk)

## Usage

This plugin will interact with The Trade Desk's API. 

View the API's documentation at https://apis.thetradedesk.com/v3/doc

> NOTE: This module uses the [`debug`](https://www.npmjs.com/package/debug) logging tool. Use `DEBUG=tradedesk*` to view debug logging.

```
$ npm install -S @goodwaygroup/lib-tradedesk
```

```js
const { TradeDesk } = require('@goodwaygroup/lib-tradedesk');

const ttd = new TradeDesk({
    username: 'testuser@example.com',
    password: 'apasswordthatwontwork'
});

// Promises
ttd.get('/campaign/query/facets')
    .then((res) => res.json())
    .then((body) => console.log(body))
    .catch((err) => {
        console.log(err.stack);
        if (err.response) {
            return err.response.json().then((body) => console.log(body))
        }
    });

// Async/Await
try {
    const res = await ttd.get('/campaign/query/facets');
    console.log(await res.json());
} catch (err) {
    console.log(err.stack);
    if (err.response) {
        console.log(await err.response.json())
    }
}
```


## Configuration Options

> When passing a configuration option, it will overwrite the defaults.

- `traceUUIDHeader`: defaults to `x-gg-trace-uuid`. The header that is used for the Trace ID
- `traceDepthHeader`: defaults to `x-gg-trace-depth`. The header that is used for the Depth ID
- `enableStatsRoute`: defaults to `false`. Publish a route to `/good-tracer/stats` that exposes the current metrics for [`node-cache` statistics](https://github.com/node-cache/node-cache#statistics-stats).
- `baseRoute`: defaults to `''`. Prepends to the `/good-tracer/stats` route.
    - Example: `baseRoute = /serivce-awesome` results in `/serivce-awesome/good-tracer/stats`
- `postResponseCleanup: (Boolean | Object)`: defaults to `true`. If set to anything, the feature is enabled. 
    - `delay: Number`: defaults to `1` second. The amount of time to wait after reponse to delete a key from the cache. You can pass decimal values for sub-second times.
- `axios`: Configured axios instances provided to each request
    - `[key: string]: (Boolean | Object)`: if given, defaults to `{}`. Pass in any valid `axios` config options.
- `cache`: internal memory cache settings. See [node-cache configuration](https://github.com/node-cache/node-cache#options)
    - `stdTTL`: default `3600` seconds (1 hour)
    - `checkperiod`: default `60` seconds
    - `maxKeys`: default `-1` (no limit)
    - `useClones`: default `false`
    - `extendTTLOnGet`: This feature will reset the TTL to the global TTL when a successful `get` occurs. This will extend the life of an item in the cache as a result. default `true`

## Route Configuration Options

> Route level plugin configuration overwrites the options passed to the plugin.

- `axios`: Configured axios instances provided to each request
    - `[key: string]: (Boolean | Object)`: if given, defaults to `{}`. Pass in any valid `axios` config options.

## Running Tests

To run tests, just run the following:

```
npm test
```

All commits are tested on [CircleCI](https://circleci.com/gh/GoodwayGroup/workflows/lib-tradedesk)

## Linting

To run `eslint`:

```
npm run lint
```

To auto-resolve:

```
npm run lint:fix
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use milestones and `npm` version to bump versions. We also employ [git-chglog](https://github.com/git-chglog/git-chglog) to manage the [CHANGELOG.md](CHANGELOG.md). For the versions available, see the [tags on this repository](https://github.com/GoodwayGroup/lib-tradedesk/tags).

To initiate a version change:

```
npm version minor
```

## Authors

* **Derek Smith** - *Initial work* - [@clok](https://github.com/clok)

See also the list of [contributors](https://github.com/GoodwayGroup/lib-tradedesk/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

## Sponsors

[![goodwaygroup][goodwaygroup]](https://goodwaygroup.com)

[goodwaygroup]: https://s3.amazonaws.com/gw-crs-assets/goodwaygroup/logos/ggLogo_sm.png "Goodway Group"
