[@goodwaygroup/lib-tradedesk - v1.0.0](../README.md) › [ForbiddenError](forbiddenerror.md)

# Class: ForbiddenError

## Hierarchy

* [Error](ratelimiterror.md#static-error)

  ↳ **ForbiddenError**

## Index

### Constructors

* [constructor](forbiddenerror.md#constructor)

### Properties

* [message](forbiddenerror.md#message)
* [name](forbiddenerror.md#name)
* [response](forbiddenerror.md#response)
* [stack](forbiddenerror.md#optional-stack)
* [Error](forbiddenerror.md#static-error)

## Constructors

###  constructor

\+ **new ForbiddenError**(`message`: string, `response`: Response): *[ForbiddenError](forbiddenerror.md)*

*Defined in [src/errors.ts:31](https://github.com/GoodwayGroup/lib-tradedesk/blob/d40b7d2/src/errors.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`response` | Response |

**Returns:** *[ForbiddenError](forbiddenerror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from [RateLimitError](ratelimiterror.md).[message](ratelimiterror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string* = "ForbiddenError"

*Overrides void*

*Defined in [src/errors.ts:29](https://github.com/GoodwayGroup/lib-tradedesk/blob/d40b7d2/src/errors.ts#L29)*

___

###  response

• **response**: *Response*

*Defined in [src/errors.ts:31](https://github.com/GoodwayGroup/lib-tradedesk/blob/d40b7d2/src/errors.ts#L31)*

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [RateLimitError](ratelimiterror.md).[stack](ratelimiterror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
