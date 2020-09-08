[@goodwaygroup/lib-tradedesk - v0.0.0](../README.md) › [UnauthorizedError](unauthorizederror.md)

# Class: UnauthorizedError

## Hierarchy

* [Error](ratelimiterror.md#static-error)

  ↳ **UnauthorizedError**

## Index

### Constructors

* [constructor](unauthorizederror.md#constructor)

### Properties

* [message](unauthorizederror.md#message)
* [name](unauthorizederror.md#name)
* [response](unauthorizederror.md#response)
* [stack](unauthorizederror.md#optional-stack)
* [Error](unauthorizederror.md#static-error)

## Constructors

###  constructor

\+ **new UnauthorizedError**(`message`: string, `response`: Response): *[UnauthorizedError](unauthorizederror.md)*

*Defined in [src/errors.ts:53](https://github.com/GoodwayGroup/lib-tradedesk/blob/d81b4c3/src/errors.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`response` | Response |

**Returns:** *[UnauthorizedError](unauthorizederror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from [RateLimitError](ratelimiterror.md).[message](ratelimiterror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string* = "UnauthorizedError"

*Overrides void*

*Defined in [src/errors.ts:51](https://github.com/GoodwayGroup/lib-tradedesk/blob/d81b4c3/src/errors.ts#L51)*

___

###  response

• **response**: *Response*

*Defined in [src/errors.ts:53](https://github.com/GoodwayGroup/lib-tradedesk/blob/d81b4c3/src/errors.ts#L53)*

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [RateLimitError](ratelimiterror.md).[stack](ratelimiterror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
