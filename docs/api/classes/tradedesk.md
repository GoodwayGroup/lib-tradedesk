[@goodwaygroup/lib-tradedesk - v1.1.1](../README.md) / TradeDesk

# Class: TradeDesk

## Table of contents

### Constructors

- [constructor](tradedesk.md#constructor)

### Properties

- [options](tradedesk.md#options)
- [token](tradedesk.md#token)
- [tokenTime](tradedesk.md#tokentime)

### Methods

- [canLogin](tradedesk.md#canlogin)
- [delete](tradedesk.md#delete)
- [get](tradedesk.md#get)
- [login](tradedesk.md#login)
- [makeUrl](tradedesk.md#makeurl)
- [post](tradedesk.md#post)
- [put](tradedesk.md#put)
- [request](tradedesk.md#request)
- [setApiUrl](tradedesk.md#setapiurl)
- [setToken](tradedesk.md#settoken)

## Constructors

### constructor

\+ **new TradeDesk**(`options?`: TradeDeskOptions): [*TradeDesk*](tradedesk.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | TradeDeskOptions |

**Returns:** [*TradeDesk*](tradedesk.md)

Defined in: [src/tradedesk.ts:69](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L69)

## Properties

### options

• **options**: TradeDeskOptions

Options used to make requests

Defined in: [src/tradedesk.ts:69](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L69)

___

### token

• **token**: *string*= ''

The authentication token

Defined in: [src/tradedesk.ts:59](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L59)

___

### tokenTime

• **tokenTime**: *number*

The time when the token was last set. This works to refresh a token before trying request with an expired token

Defined in: [src/tradedesk.ts:64](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L64)

## Methods

### canLogin

▸ `Private`**canLogin**(): *boolean*

Does this instance have enough data to attempt a login

**Returns:** *boolean*

Defined in: [src/tradedesk.ts:195](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L195)

___

### delete

▸ **delete**(`uri`: *string*, `options?`: RequestInit): *Promise*<[*Response*](response.md)\>

Create a DELETE request

#### Parameters:

Name | Type |
:------ | :------ |
`uri` | *string* |
`options` | RequestInit |

**Returns:** *Promise*<[*Response*](response.md)\>

Defined in: [src/tradedesk.ts:338](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L338)

___

### get

▸ **get**(`uri`: *string*, `options?`: RequestInit): *Promise*<[*Response*](response.md)\>

Create a GET request

#### Parameters:

Name | Type |
:------ | :------ |
`uri` | *string* |
`options` | RequestInit |

**Returns:** *Promise*<[*Response*](response.md)\>

Defined in: [src/tradedesk.ts:287](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L287)

___

### login

▸ **login**(): *Promise*<[*TradeDesk*](tradedesk.md)\>

Login to TradeDesk API and grab an authentication token

**Returns:** *Promise*<[*TradeDesk*](tradedesk.md)\>

Defined in: [src/tradedesk.ts:119](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L119)

▸ **login**(`username`: *string*, `password`: *string*, `tokenExpiration?`: *number*): *Promise*<[*TradeDesk*](tradedesk.md)\>

Login to TradeDesk API and grab an authentication token

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`username` | *string* | The login of the user requesting the authentication token.   |
`password` | *string* | The login of the user requesting the authentication token.   |
`tokenExpiration?` | *number* | The number of minutes until the token expires. If this parameter is not set or set to zero, the token will not expire    |

**Returns:** *Promise*<[*TradeDesk*](tradedesk.md)\>

Defined in: [src/tradedesk.ts:128](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L128)

___

### makeUrl

▸ `Private`**makeUrl**(`uri`: *string*): *string*

Make URL by combining the apiUrl and the given uri

#### Parameters:

Name | Type |
:------ | :------ |
`uri` | *string* |

**Returns:** *string*

Defined in: [src/tradedesk.ts:188](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L188)

___

### post

▸ **post**(`uri`: *string*, `payload`: *Record*<string, unknown\>, `options?`: RequestInit): *Promise*<[*Response*](response.md)\>

Create a POST request

#### Parameters:

Name | Type |
:------ | :------ |
`uri` | *string* |
`payload` | *Record*<string, unknown\> |
`options` | RequestInit |

**Returns:** *Promise*<[*Response*](response.md)\>

Defined in: [src/tradedesk.ts:300](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L300)

___

### put

▸ **put**(`uri`: *string*, `payload`: *Record*<string, unknown\>, `options?`: RequestInit): *Promise*<[*Response*](response.md)\>

Create a PUT request

#### Parameters:

Name | Type |
:------ | :------ |
`uri` | *string* |
`payload` | *Record*<string, unknown\> |
`options` | RequestInit |

**Returns:** *Promise*<[*Response*](response.md)\>

Defined in: [src/tradedesk.ts:319](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L319)

___

### request

▸ `Private`**request**(`uri`: *string*, `options`: RequestInit, `attempts?`: *number*, `tryLogin?`: *boolean*): *Promise*<[*Response*](response.md)\>

Make a http request with node-fetch with builtin retries and automatic login

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`uri` | *string* | - |
`options` | RequestInit | - |
`attempts` | *number* | 0 |
`tryLogin` | *boolean* | true |

**Returns:** *Promise*<[*Response*](response.md)\>

Defined in: [src/tradedesk.ts:202](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L202)

___

### setApiUrl

▸ **setApiUrl**(`environment`: [*ApiUrlEnvironments*](../enums/apiurlenvironments.md)): [*TradeDesk*](tradedesk.md)

Set the API url based on an enumerated list

#### Parameters:

Name | Type |
:------ | :------ |
`environment` | [*ApiUrlEnvironments*](../enums/apiurlenvironments.md) |

**Returns:** [*TradeDesk*](tradedesk.md)

Defined in: [src/tradedesk.ts:97](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L97)

▸ **setApiUrl**(`url`: *string*): [*TradeDesk*](tradedesk.md)

Set the API Url to an explicit url

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |

**Returns:** [*TradeDesk*](tradedesk.md)

Defined in: [src/tradedesk.ts:102](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L102)

___

### setToken

▸ **setToken**(`token`: *string*): [*TradeDesk*](tradedesk.md)

#### Parameters:

Name | Type |
:------ | :------ |
`token` | *string* |

**Returns:** [*TradeDesk*](tradedesk.md)

Defined in: [src/tradedesk.ts:81](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/tradedesk.ts#L81)
