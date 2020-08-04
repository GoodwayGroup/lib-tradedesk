[@goodwaygroup/lib-tradedesk - v0.0.0](../README.md) › [Globals](../globals.md) › [InternalServerError](internalservererror.md)

# Class: InternalServerError

## Hierarchy

* [Error](ratelimiterror.md#static-error)

  ↳ **InternalServerError**

## Index

### Constructors

* [constructor](internalservererror.md#constructor)

### Properties

* [message](internalservererror.md#message)
* [name](internalservererror.md#name)
* [response](internalservererror.md#response)
* [stack](internalservererror.md#optional-stack)
* [Error](internalservererror.md#static-error)

## Constructors

###  constructor

\+ **new InternalServerError**(`message`: string, `response`: Response): *[InternalServerError](internalservererror.md)*

*Defined in [src/errors.ts:64](https://github.com/GoodwayGroup/lib-tradedesk/blob/270f1e7/src/errors.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`response` | Response |

**Returns:** *[InternalServerError](internalservererror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from [RateLimitError](ratelimiterror.md).[message](ratelimiterror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string* = "InternalServerError"

*Overrides void*

*Defined in [src/errors.ts:62](https://github.com/GoodwayGroup/lib-tradedesk/blob/270f1e7/src/errors.ts#L62)*

___

###  response

• **response**: *Response*

*Defined in [src/errors.ts:64](https://github.com/GoodwayGroup/lib-tradedesk/blob/270f1e7/src/errors.ts#L64)*

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [RateLimitError](ratelimiterror.md).[stack](ratelimiterror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
