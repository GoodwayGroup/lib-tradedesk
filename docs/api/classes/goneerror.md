[@goodwaygroup/lib-tradedesk - v0.0.0](../README.md) › [GoneError](goneerror.md)

# Class: GoneError

## Hierarchy

* [Error](ratelimiterror.md#static-error)

  ↳ **GoneError**

## Index

### Constructors

* [constructor](goneerror.md#constructor)

### Properties

* [message](goneerror.md#message)
* [name](goneerror.md#name)
* [response](goneerror.md#response)
* [stack](goneerror.md#optional-stack)
* [Error](goneerror.md#static-error)

## Constructors

###  constructor

\+ **new GoneError**(`message`: string, `response`: Response): *[GoneError](goneerror.md)*

*Defined in [src/errors.ts:42](https://github.com/GoodwayGroup/lib-tradedesk/blob/46687fa/src/errors.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`response` | Response |

**Returns:** *[GoneError](goneerror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from [RateLimitError](ratelimiterror.md).[message](ratelimiterror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string* = "GoneError"

*Overrides void*

*Defined in [src/errors.ts:40](https://github.com/GoodwayGroup/lib-tradedesk/blob/46687fa/src/errors.ts#L40)*

___

###  response

• **response**: *Response*

*Defined in [src/errors.ts:42](https://github.com/GoodwayGroup/lib-tradedesk/blob/46687fa/src/errors.ts#L42)*

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [RateLimitError](ratelimiterror.md).[stack](ratelimiterror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
