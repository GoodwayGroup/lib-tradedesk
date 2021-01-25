**[@goodwaygroup/lib-tradedesk - v1.1.0](../README.md)**

> [Globals](../README.md) / DataProvider

# Class: DataProvider

## Hierarchy

* **DataProvider**

## Index

### Constructors

* [constructor](dataprovider.md#constructor)

### Properties

* [options](dataprovider.md#options)
* [secretKey](dataprovider.md#secretkey)

### Methods

* [createSignature](dataprovider.md#createsignature)
* [makeUrl](dataprovider.md#makeurl)
* [post](dataprovider.md#post)
* [request](dataprovider.md#request)
* [setApiUrl](dataprovider.md#setapiurl)

## Constructors

### constructor

\+ **new DataProvider**(`secretKey`: string, `options?`: [DataProviderOptions](../interfaces/dataprovideroptions.md)): [DataProvider](dataprovider.md)

*Defined in [src/dataProvider.ts:54](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/dataProvider.ts#L54)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`secretKey` | string | - |
`options` | [DataProviderOptions](../interfaces/dataprovideroptions.md) | {} |

**Returns:** [DataProvider](dataprovider.md)

## Properties

### options

•  **options**: [DataProviderOptions](../interfaces/dataprovideroptions.md)

*Defined in [src/dataProvider.ts:49](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/dataProvider.ts#L49)*

Options used to make requests

___

### secretKey

• `Private` **secretKey**: string

*Defined in [src/dataProvider.ts:54](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/dataProvider.ts#L54)*

Provider Provisioned Secret Key

## Methods

### createSignature

▸ **createSignature**(`body`: string): string

*Defined in [src/dataProvider.ts:80](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/dataProvider.ts#L80)*

Creates a HMAC SHA1 Signature

#### Parameters:

Name | Type |
------ | ------ |
`body` | string |

**Returns:** string

___

### makeUrl

▸ `Private`**makeUrl**(`uri`: string): string

*Defined in [src/dataProvider.ts:89](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/dataProvider.ts#L89)*

Make URL by combining the apiUrl and the given uri

#### Parameters:

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** string

___

### post

▸ **post**(`uri`: string, `payload`: Record\<string, unknown>, `options?`: RequestInit): Promise\<Response>

*Defined in [src/dataProvider.ts:153](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/dataProvider.ts#L153)*

Create a POST request

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`uri` | string | - |
`payload` | Record\<string, unknown> | - |
`options` | RequestInit | {} |

**Returns:** Promise\<Response>

___

### request

▸ `Private`**request**(`uri`: string, `options`: RequestInit, `attempts?`: number): Promise\<Response>

*Defined in [src/dataProvider.ts:96](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/dataProvider.ts#L96)*

Make a http request with node-fetch with builtin retries

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`uri` | string | - |
`options` | RequestInit | - |
`attempts` | number | 0 |

**Returns:** Promise\<Response>

___

### setApiUrl

▸ **setApiUrl**(`url`: [DatacenterHostnames](../enums/datacenterhostnames.md) \| string): [DataProvider](dataprovider.md)

*Defined in [src/dataProvider.ts:70](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/dataProvider.ts#L70)*

Set the API Url to an explicit url

#### Parameters:

Name | Type |
------ | ------ |
`url` | [DatacenterHostnames](../enums/datacenterhostnames.md) \| string |

**Returns:** [DataProvider](dataprovider.md)
