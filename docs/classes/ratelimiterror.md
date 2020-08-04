[@goodwaygroup/lib-tradedesk - v0.0.0](../README.md) › [Globals](../globals.md) › [RateLimitError](ratelimiterror.md)

# Class: RateLimitError

## Hierarchy

* [Error](ratelimiterror.md#static-error)

  ↳ **RateLimitError**

## Index

### Constructors

* [constructor](ratelimiterror.md#constructor)

### Properties

* [attempts](ratelimiterror.md#attempts)
* [message](ratelimiterror.md#message)
* [name](ratelimiterror.md#name)
* [response](ratelimiterror.md#response)
* [stack](ratelimiterror.md#optional-stack)
* [Error](ratelimiterror.md#static-error)

## Constructors

###  constructor

\+ **new RateLimitError**(`message`: string, `attempts`: number, `response`: Response): *[RateLimitError](ratelimiterror.md)*

*Defined in [src/errors.ts:8](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/errors.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`attempts` | number |
`response` | Response |

**Returns:** *[RateLimitError](ratelimiterror.md)*

## Properties

###  attempts

• **attempts**: *number*

*Defined in [src/errors.ts:6](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/errors.ts#L6)*

___

###  message

• **message**: *string*

*Inherited from [RateLimitError](ratelimiterror.md).[message](ratelimiterror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string* = "RateLimitError"

*Overrides void*

*Defined in [src/errors.ts:4](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/errors.ts#L4)*

___

###  response

• **response**: *Response*

*Defined in [src/errors.ts:8](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/errors.ts#L8)*

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [RateLimitError](ratelimiterror.md).[stack](ratelimiterror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
