[@goodwaygroup/lib-tradedesk - v0.0.0](../README.md) › [TradeDeskOptions](tradedeskoptions.md)

# Interface: TradeDeskOptions

## Hierarchy

* **TradeDeskOptions**

## Index

### Properties

* [agent](tradedeskoptions.md#optional-agent)
* [apiUrl](tradedeskoptions.md#optional-apiurl)
* [maxRetries](tradedeskoptions.md#optional-maxretries)
* [maxRetryDelay](tradedeskoptions.md#optional-maxretrydelay)
* [password](tradedeskoptions.md#optional-password)
* [retryDelay](tradedeskoptions.md#optional-retrydelay)
* [tokenExpiration](tradedeskoptions.md#optional-tokenexpiration)
* [username](tradedeskoptions.md#optional-username)

## Properties

### `Optional` agent

• **agent**? : *Agent | function*

*Defined in [src/tradedesk.ts:22](https://github.com/GoodwayGroup/lib-tradedesk/blob/3309eed/src/tradedesk.ts#L22)*

HTTP(s) Agent to use when making requests

___

### `Optional` apiUrl

• **apiUrl**? : *string*

*Defined in [src/tradedesk.ts:17](https://github.com/GoodwayGroup/lib-tradedesk/blob/3309eed/src/tradedesk.ts#L17)*

The url of the Tradedesk API

___

### `Optional` maxRetries

• **maxRetries**? : *number*

*Defined in [src/tradedesk.ts:42](https://github.com/GoodwayGroup/lib-tradedesk/blob/3309eed/src/tradedesk.ts#L42)*

Max number of retires to try a request when getting rate limited

___

### `Optional` maxRetryDelay

• **maxRetryDelay**? : *number*

*Defined in [src/tradedesk.ts:47](https://github.com/GoodwayGroup/lib-tradedesk/blob/3309eed/src/tradedesk.ts#L47)*

Max delay for an exponential back off policy for when retrying requests. Time is in seconds.

___

### `Optional` password

• **password**? : *string*

*Defined in [src/tradedesk.ts:32](https://github.com/GoodwayGroup/lib-tradedesk/blob/3309eed/src/tradedesk.ts#L32)*

The login of the user requesting the authentication token.

___

### `Optional` retryDelay

• **retryDelay**? : *number*

*Defined in [src/tradedesk.ts:52](https://github.com/GoodwayGroup/lib-tradedesk/blob/3309eed/src/tradedesk.ts#L52)*

Base delay for an exponential back off policy for when retrying requests. Time is in seconds.

___

### `Optional` tokenExpiration

• **tokenExpiration**? : *number*

*Defined in [src/tradedesk.ts:37](https://github.com/GoodwayGroup/lib-tradedesk/blob/3309eed/src/tradedesk.ts#L37)*

The number of minutes until the token expires. If this parameter is not set or set to zero, the token will not expire

___

### `Optional` username

• **username**? : *string*

*Defined in [src/tradedesk.ts:27](https://github.com/GoodwayGroup/lib-tradedesk/blob/3309eed/src/tradedesk.ts#L27)*

The login of the user requesting the authentication token.
