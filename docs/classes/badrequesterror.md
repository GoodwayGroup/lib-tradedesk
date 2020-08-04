[@goodwaygroup/lib-tradedesk - v0.0.0](../README.md) › [Globals](../globals.md) › [BadRequestError](badrequesterror.md)

# Class: BadRequestError

## Hierarchy

* [Error](ratelimiterror.md#static-error)

  ↳ **BadRequestError**

## Index

### Constructors

* [constructor](badrequesterror.md#constructor)

### Properties

* [message](badrequesterror.md#message)
* [name](badrequesterror.md#name)
* [response](badrequesterror.md#response)
* [stack](badrequesterror.md#optional-stack)
* [Error](badrequesterror.md#static-error)

## Constructors

###  constructor

\+ **new BadRequestError**(`message`: string, `response`: Response): *[BadRequestError](badrequesterror.md)*

*Defined in [src/errors.ts:20](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/errors.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`response` | Response |

**Returns:** *[BadRequestError](badrequesterror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from [RateLimitError](ratelimiterror.md).[message](ratelimiterror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string* = "BadRequestError"

*Overrides void*

*Defined in [src/errors.ts:18](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/errors.ts#L18)*

___

###  response

• **response**: *Response*

*Defined in [src/errors.ts:20](https://github.com/GoodwayGroup/lib-tradedesk/blob/169b7f2/src/errors.ts#L20)*

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [RateLimitError](ratelimiterror.md).[stack](ratelimiterror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
