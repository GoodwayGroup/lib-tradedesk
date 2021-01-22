**[@goodwaygroup/lib-tradedesk - v1.1.0](../README.md)**

> [Globals](../README.md) / ForbiddenError

# Class: ForbiddenError

## Hierarchy

* [Error](ratelimiterror.md#error)

  ↳ **ForbiddenError**

## Index

### Constructors

* [constructor](forbiddenerror.md#constructor)

### Properties

* [message](forbiddenerror.md#message)
* [name](forbiddenerror.md#name)
* [response](forbiddenerror.md#response)
* [stack](forbiddenerror.md#stack)
* [Error](forbiddenerror.md#error)

## Constructors

### constructor

\+ **new ForbiddenError**(`message`: string, `response`: Response): [ForbiddenError](forbiddenerror.md)

*Defined in [src/errors.ts:31](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/errors.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`response` | Response |

**Returns:** [ForbiddenError](forbiddenerror.md)

## Properties

### message

•  **message**: string

*Inherited from [RateLimitError](ratelimiterror.md).[message](ratelimiterror.md#message)*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:974*

___

### name

•  **name**: string = "ForbiddenError"

*Overrides void*

*Defined in [src/errors.ts:29](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/errors.ts#L29)*

___

### response

•  **response**: Response

*Defined in [src/errors.ts:31](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/errors.ts#L31)*

___

### stack

• `Optional` **stack**: string

*Inherited from [RateLimitError](ratelimiterror.md).[stack](ratelimiterror.md#stack)*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:975*

___

### Error

▪ `Static` **Error**: ErrorConstructor

*Defined in node_modules/typescript/lib/lib.es5.d.ts:984*
