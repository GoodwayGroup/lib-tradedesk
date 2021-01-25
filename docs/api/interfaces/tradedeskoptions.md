**[@goodwaygroup/lib-tradedesk - v1.1.0](../README.md)**

> [Globals](../README.md) / TradeDeskOptions

# Interface: TradeDeskOptions

## Hierarchy

* **TradeDeskOptions**

## Index

### Properties

* [agent](tradedeskoptions.md#agent)
* [apiUrl](tradedeskoptions.md#apiurl)
* [maxRetries](tradedeskoptions.md#maxretries)
* [maxRetryDelay](tradedeskoptions.md#maxretrydelay)
* [password](tradedeskoptions.md#password)
* [retryDelay](tradedeskoptions.md#retrydelay)
* [tokenExpiration](tradedeskoptions.md#tokenexpiration)
* [username](tradedeskoptions.md#username)

## Properties

### agent

• `Optional` **agent**: Agent \| (parsedUrl: URL) => Agent

*Defined in [src/tradedesk.ts:22](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/tradedesk.ts#L22)*

HTTP(s) Agent to use when making requests

___

### apiUrl

• `Optional` **apiUrl**: string

*Defined in [src/tradedesk.ts:17](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/tradedesk.ts#L17)*

The url of the Tradedesk API

___

### maxRetries

• `Optional` **maxRetries**: number

*Defined in [src/tradedesk.ts:42](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/tradedesk.ts#L42)*

Max number of retires to try a request when getting rate limited

___

### maxRetryDelay

• `Optional` **maxRetryDelay**: number

*Defined in [src/tradedesk.ts:47](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/tradedesk.ts#L47)*

Max delay for an exponential back off policy for when retrying requests. Time is in seconds.

___

### password

• `Optional` **password**: string

*Defined in [src/tradedesk.ts:32](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/tradedesk.ts#L32)*

The login of the user requesting the authentication token.

___

### retryDelay

• `Optional` **retryDelay**: number

*Defined in [src/tradedesk.ts:52](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/tradedesk.ts#L52)*

Base delay for an exponential back off policy for when retrying requests. Time is in seconds.

___

### tokenExpiration

• `Optional` **tokenExpiration**: number

*Defined in [src/tradedesk.ts:37](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/tradedesk.ts#L37)*

The number of minutes until the token expires. If this parameter is not set or set to zero, the token will not expire

___

### username

• `Optional` **username**: string

*Defined in [src/tradedesk.ts:27](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/tradedesk.ts#L27)*

The login of the user requesting the authentication token.
