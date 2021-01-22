**[@goodwaygroup/lib-tradedesk - v1.1.0](../README.md)**

> [Globals](../README.md) / UnauthorizedError

# Class: UnauthorizedError

## Hierarchy

* [Error](ratelimiterror.md#error)

  ↳ **UnauthorizedError**

## Index

### Constructors

* [constructor](unauthorizederror.md#constructor)

### Properties

* [message](unauthorizederror.md#message)
* [name](unauthorizederror.md#name)
* [response](unauthorizederror.md#response)
* [stack](unauthorizederror.md#stack)
* [Error](unauthorizederror.md#error)

## Constructors

### constructor

\+ **new UnauthorizedError**(`message`: string, `response`: Response): [UnauthorizedError](unauthorizederror.md)

*Defined in [src/errors.ts:53](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/errors.ts#L53)*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`response` | Response |

**Returns:** [UnauthorizedError](unauthorizederror.md)

## Properties

### message

•  **message**: string

*Inherited from [RateLimitError](ratelimiterror.md).[message](ratelimiterror.md#message)*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:974*

___

### name

•  **name**: string = "UnauthorizedError"

*Overrides void*

*Defined in [src/errors.ts:51](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/errors.ts#L51)*

___

### response

•  **response**: Response

*Defined in [src/errors.ts:53](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/errors.ts#L53)*

___

### stack

• `Optional` **stack**: string

*Inherited from [RateLimitError](ratelimiterror.md).[stack](ratelimiterror.md#stack)*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:975*

___

### Error

▪ `Static` **Error**: ErrorConstructor

*Defined in node_modules/typescript/lib/lib.es5.d.ts:984*
