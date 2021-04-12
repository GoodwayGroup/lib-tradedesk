[@goodwaygroup/lib-tradedesk - v1.2.1](../README.md) / RateLimitError

# Class: RateLimitError

## Hierarchy

* *Error*

  ↳ **RateLimitError**

## Table of contents

### Constructors

- [constructor](ratelimiterror.md#constructor)

### Properties

- [attempts](ratelimiterror.md#attempts)
- [message](ratelimiterror.md#message)
- [name](ratelimiterror.md#name)
- [response](ratelimiterror.md#response)
- [stack](ratelimiterror.md#stack)
- [prepareStackTrace](ratelimiterror.md#preparestacktrace)
- [stackTraceLimit](ratelimiterror.md#stacktracelimit)

### Methods

- [captureStackTrace](ratelimiterror.md#capturestacktrace)

## Constructors

### constructor

\+ **new RateLimitError**(`message`: *string*, `attempts`: *number*, `response`: [*Response*](response.md)): [*RateLimitError*](ratelimiterror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`attempts` | *number* |
`response` | [*Response*](response.md) |

**Returns:** [*RateLimitError*](ratelimiterror.md)

Defined in: [src/errors.ts:8](https://github.com/GoodwayGroup/lib-tradedesk/blob/00b7558/src/errors.ts#L8)

## Properties

### attempts

• **attempts**: *number*

Defined in: [src/errors.ts:6](https://github.com/GoodwayGroup/lib-tradedesk/blob/00b7558/src/errors.ts#L6)

___

### message

• **message**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*= 'RateLimitError'

Defined in: [src/errors.ts:4](https://github.com/GoodwayGroup/lib-tradedesk/blob/00b7558/src/errors.ts#L4)

___

### response

• **response**: [*Response*](response.md)

Defined in: [src/errors.ts:8](https://github.com/GoodwayGroup/lib-tradedesk/blob/00b7558/src/errors.ts#L8)

___

### stack

• `Optional` **stack**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Optional` `Static` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

#### Type declaration:

▸ (`err`: Error, `stackTraces`: CallSite[]): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | Error |
`stackTraces` | CallSite[] |

**Returns:** *any*

Defined in: node_modules/@types/node/globals.d.ts:11

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
:------ | :------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:4
