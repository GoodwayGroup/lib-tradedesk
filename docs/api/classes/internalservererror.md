**[@goodwaygroup/lib-tradedesk - v1.0.2](../README.md)**

> [Globals](../README.md) / InternalServerError

# Class: InternalServerError

## Hierarchy

* [Error](ratelimiterror.md#error)

  ↳ **InternalServerError**

## Index

### Constructors

* [constructor](internalservererror.md#constructor)

### Properties

* [message](internalservererror.md#message)
* [name](internalservererror.md#name)
* [response](internalservererror.md#response)
* [stack](internalservererror.md#stack)
* [Error](internalservererror.md#error)

## Constructors

### constructor

\+ **new InternalServerError**(`message`: string, `response`: Response): [InternalServerError](internalservererror.md)

*Defined in [src/errors.ts:64](https://github.com/GoodwayGroup/lib-tradedesk/blob/2a77e3f/src/errors.ts#L64)*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`response` | Response |

**Returns:** [InternalServerError](internalservererror.md)

## Properties

### message

•  **message**: string

*Inherited from [RateLimitError](ratelimiterror.md).[message](ratelimiterror.md#message)*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:974*

___

### name

•  **name**: string = "InternalServerError"

*Overrides void*

*Defined in [src/errors.ts:62](https://github.com/GoodwayGroup/lib-tradedesk/blob/2a77e3f/src/errors.ts#L62)*

___

### response

•  **response**: Response

*Defined in [src/errors.ts:64](https://github.com/GoodwayGroup/lib-tradedesk/blob/2a77e3f/src/errors.ts#L64)*

___

### stack

• `Optional` **stack**: string

*Inherited from [RateLimitError](ratelimiterror.md).[stack](ratelimiterror.md#stack)*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:975*

___

### Error

▪ `Static` **Error**: ErrorConstructor

*Defined in node_modules/typescript/lib/lib.es5.d.ts:984*
