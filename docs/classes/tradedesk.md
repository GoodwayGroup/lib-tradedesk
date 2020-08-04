[@goodwaygroup/lib-tradedesk - v0.0.0](../README.md) › [Globals](../globals.md) › [TradeDesk](tradedesk.md)

# Class: TradeDesk

## Hierarchy

* **TradeDesk**

## Index

### Constructors

* [constructor](tradedesk.md#constructor)

### Properties

* [options](tradedesk.md#options)
* [token](tradedesk.md#token)
* [tokenTime](tradedesk.md#tokentime)

### Methods

* [canLogin](tradedesk.md#private-canlogin)
* [delete](tradedesk.md#delete)
* [get](tradedesk.md#get)
* [login](tradedesk.md#login)
* [makeUrl](tradedesk.md#private-makeurl)
* [post](tradedesk.md#post)
* [put](tradedesk.md#put)
* [request](tradedesk.md#private-request)
* [setApiUrl](tradedesk.md#setapiurl)
* [setToken](tradedesk.md#settoken)

## Constructors

###  constructor

\+ **new TradeDesk**(`options`: [TradeDeskOptions](../interfaces/tradedeskoptions.md)): *[TradeDesk](tradedesk.md)*

*Defined in [src/tradedesk.ts:69](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L69)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [TradeDeskOptions](../interfaces/tradedeskoptions.md) | {} |

**Returns:** *[TradeDesk](tradedesk.md)*

## Properties

###  options

• **options**: *[TradeDeskOptions](../interfaces/tradedeskoptions.md)*

*Defined in [src/tradedesk.ts:69](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L69)*

Options used to make requests

___

###  token

• **token**: *string* = ""

*Defined in [src/tradedesk.ts:59](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L59)*

The authentication token

___

###  tokenTime

• **tokenTime**: *number*

*Defined in [src/tradedesk.ts:64](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L64)*

The time when the token was last set. This works to refresh a token before trying request with an expired token

## Methods

### `Private` canLogin

▸ **canLogin**(): *boolean*

*Defined in [src/tradedesk.ts:188](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L188)*

Does this instance have enough data to attempt a login

**Returns:** *boolean*

___

###  delete

▸ **delete**(`uri`: string, `options`: RequestInit): *Promise‹Response›*

*Defined in [src/tradedesk.ts:331](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L331)*

Create a DELETE request

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`uri` | string | - |
`options` | RequestInit | {} |

**Returns:** *Promise‹Response›*

___

###  get

▸ **get**(`uri`: string, `options`: RequestInit): *Promise‹Response›*

*Defined in [src/tradedesk.ts:280](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L280)*

Create a GET request

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`uri` | string | - |
`options` | RequestInit | {} |

**Returns:** *Promise‹Response›*

___

###  login

▸ **login**(): *Promise‹[TradeDesk](tradedesk.md)›*

*Defined in [src/tradedesk.ts:119](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L119)*

Login to TradeDesk API and grab an authentication token

**Returns:** *Promise‹[TradeDesk](tradedesk.md)›*

▸ **login**(`username`: string, `password`: string, `tokenExpiration?`: number): *Promise‹[TradeDesk](tradedesk.md)›*

*Defined in [src/tradedesk.ts:128](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L128)*

Login to TradeDesk API and grab an authentication token

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`username` | string | The login of the user requesting the authentication token. |
`password` | string | The login of the user requesting the authentication token. |
`tokenExpiration?` | number | The number of minutes until the token expires. If this parameter is not set or set to zero, the token will not expire  |

**Returns:** *Promise‹[TradeDesk](tradedesk.md)›*

___

### `Private` makeUrl

▸ **makeUrl**(`uri`: string): *string*

*Defined in [src/tradedesk.ts:181](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L181)*

Make URL by combining the apiUrl and the given uri

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *string*

___

###  post

▸ **post**(`uri`: string, `payload`: Record‹string, unknown›, `options`: RequestInit): *Promise‹Response›*

*Defined in [src/tradedesk.ts:293](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L293)*

Create a POST request

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`uri` | string | - |
`payload` | Record‹string, unknown› | - |
`options` | RequestInit | {} |

**Returns:** *Promise‹Response›*

___

###  put

▸ **put**(`uri`: string, `payload`: Record‹string, unknown›, `options`: RequestInit): *Promise‹Response›*

*Defined in [src/tradedesk.ts:312](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L312)*

Create a PUT request

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`uri` | string | - |
`payload` | Record‹string, unknown› | - |
`options` | RequestInit | {} |

**Returns:** *Promise‹Response›*

___

### `Private` request

▸ **request**(`uri`: string, `options`: RequestInit, `attempts`: number, `tryLogin`: boolean): *Promise‹Response›*

*Defined in [src/tradedesk.ts:195](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L195)*

Make a http request with node-fetch with builtin retries and automatic login

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`uri` | string | - |
`options` | RequestInit | - |
`attempts` | number | 0 |
`tryLogin` | boolean | true |

**Returns:** *Promise‹Response›*

___

###  setApiUrl

▸ **setApiUrl**(`environment`: [ApiUrlEnvironments](../enums/apiurlenvironments.md)): *[TradeDesk](tradedesk.md)*

*Defined in [src/tradedesk.ts:97](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L97)*

Set the API url based on an enumerated list

**Parameters:**

Name | Type |
------ | ------ |
`environment` | [ApiUrlEnvironments](../enums/apiurlenvironments.md) |

**Returns:** *[TradeDesk](tradedesk.md)*

▸ **setApiUrl**(`url`: string): *[TradeDesk](tradedesk.md)*

*Defined in [src/tradedesk.ts:102](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L102)*

Set the API Url to an explicit url

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *[TradeDesk](tradedesk.md)*

___

###  setToken

▸ **setToken**(`token`: string): *[TradeDesk](tradedesk.md)*

*Defined in [src/tradedesk.ts:81](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/tradedesk.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *[TradeDesk](tradedesk.md)*
