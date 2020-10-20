**[@goodwaygroup/lib-tradedesk - v1.0.2](../README.md)**

> [Globals](../README.md) / GoneError

# Class: GoneError

## Hierarchy

* [Error](ratelimiterror.md#error)

  ↳ **GoneError**

## Index

### Constructors

* [constructor](goneerror.md#constructor)

### Properties

* [message](goneerror.md#message)
* [name](goneerror.md#name)
* [response](goneerror.md#response)
* [stack](goneerror.md#stack)
* [Error](goneerror.md#error)

## Constructors

### constructor

\+ **new GoneError**(`message`: string, `response`: Response): [GoneError](goneerror.md)

*Defined in [src/errors.ts:42](https://github.com/GoodwayGroup/lib-tradedesk/blob/2a77e3f/src/errors.ts#L42)*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`response` | Response |

**Returns:** [GoneError](goneerror.md)

## Properties

### message

•  **message**: string

*Inherited from [RateLimitError](ratelimiterror.md).[message](ratelimiterror.md#message)*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:974*

___

### name

•  **name**: string = "GoneError"

*Overrides void*

*Defined in [src/errors.ts:40](https://github.com/GoodwayGroup/lib-tradedesk/blob/2a77e3f/src/errors.ts#L40)*

___

### response

•  **response**: Response

*Defined in [src/errors.ts:42](https://github.com/GoodwayGroup/lib-tradedesk/blob/2a77e3f/src/errors.ts#L42)*

___

### stack

• `Optional` **stack**: string

*Inherited from [RateLimitError](ratelimiterror.md).[stack](ratelimiterror.md#stack)*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:975*

___

### Error

▪ `Static` **Error**: ErrorConstructor

*Defined in node_modules/typescript/lib/lib.es5.d.ts:984*
