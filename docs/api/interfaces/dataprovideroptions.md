**[@goodwaygroup/lib-tradedesk - v1.1.0](../README.md)**

> [Globals](../README.md) / DataProviderOptions

# Interface: DataProviderOptions

## Hierarchy

* **DataProviderOptions**

## Index

### Properties

* [agent](dataprovideroptions.md#agent)
* [apiUrl](dataprovideroptions.md#apiurl)
* [maxRetries](dataprovideroptions.md#maxretries)
* [maxRetryDelay](dataprovideroptions.md#maxretrydelay)
* [retryDelay](dataprovideroptions.md#retrydelay)

## Properties

### agent

• `Optional` **agent**: Agent \| (parsedUrl: URL) => Agent

*Defined in [src/dataProvider.ts:26](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/dataProvider.ts#L26)*

HTTP(s) Agent to use when making requests

___

### apiUrl

• `Optional` **apiUrl**: string

*Defined in [src/dataProvider.ts:21](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/dataProvider.ts#L21)*

The url of the Tradedesk Data API

___

### maxRetries

• `Optional` **maxRetries**: number

*Defined in [src/dataProvider.ts:31](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/dataProvider.ts#L31)*

Max number of retires to try a request when getting rate limited

___

### maxRetryDelay

• `Optional` **maxRetryDelay**: number

*Defined in [src/dataProvider.ts:36](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/dataProvider.ts#L36)*

Max delay for an exponential back off policy for when retrying requests. Time is in seconds.

___

### retryDelay

• `Optional` **retryDelay**: number

*Defined in [src/dataProvider.ts:41](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/dataProvider.ts#L41)*

Base delay for an exponential back off policy for when retrying requests. Time is in seconds.
