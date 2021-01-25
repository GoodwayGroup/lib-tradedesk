**[@goodwaygroup/lib-tradedesk - v1.1.0](../README.md)**

> [Globals](../README.md) / BadRequestError

# Class: BadRequestError

## Hierarchy

* [Error](ratelimiterror.md#error)

  ↳ **BadRequestError**

## Index

### Constructors

* [constructor](badrequesterror.md#constructor)

### Properties

* [message](badrequesterror.md#message)
* [name](badrequesterror.md#name)
* [response](badrequesterror.md#response)
* [stack](badrequesterror.md#stack)
* [Error](badrequesterror.md#error)

## Constructors

### constructor

\+ **new BadRequestError**(`message`: string, `response`: Response): [BadRequestError](badrequesterror.md)

*Defined in [src/errors.ts:20](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/errors.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`response` | Response |

**Returns:** [BadRequestError](badrequesterror.md)

## Properties

### message

•  **message**: string

*Inherited from [RateLimitError](ratelimiterror.md).[message](ratelimiterror.md#message)*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:974*

___

### name

•  **name**: string = "BadRequestError"

*Overrides void*

*Defined in [src/errors.ts:18](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/errors.ts#L18)*

___

### response

•  **response**: Response

*Defined in [src/errors.ts:20](https://github.com/GoodwayGroup/lib-tradedesk/blob/cc0625a/src/errors.ts#L20)*

___

### stack

• `Optional` **stack**: string

*Inherited from [RateLimitError](ratelimiterror.md).[stack](ratelimiterror.md#stack)*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:975*

___

### Error

▪ `Static` **Error**: ErrorConstructor

*Defined in node_modules/typescript/lib/lib.es5.d.ts:984*
