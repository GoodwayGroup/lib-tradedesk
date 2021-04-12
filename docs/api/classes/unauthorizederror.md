[@goodwaygroup/lib-tradedesk - v1.2.1](../README.md) / UnauthorizedError

# Class: UnauthorizedError

## Hierarchy

* *Error*

  ↳ **UnauthorizedError**

## Table of contents

### Constructors

- [constructor](unauthorizederror.md#constructor)

### Properties

- [message](unauthorizederror.md#message)
- [name](unauthorizederror.md#name)
- [prepareStackTrace](unauthorizederror.md#preparestacktrace)
- [response](unauthorizederror.md#response)
- [stack](unauthorizederror.md#stack)
- [stackTraceLimit](unauthorizederror.md#stacktracelimit)

### Methods

- [captureStackTrace](unauthorizederror.md#capturestacktrace)

## Constructors

### constructor

\+ **new UnauthorizedError**(`message`: *string*, `response`: [*Response*](response.md)): [*UnauthorizedError*](unauthorizederror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`response` | [*Response*](response.md) |

**Returns:** [*UnauthorizedError*](unauthorizederror.md)

Defined in: [src/errors.ts:53](https://github.com/GoodwayGroup/lib-tradedesk/blob/00b7558/src/errors.ts#L53)

## Properties

### message

• **message**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*= 'UnauthorizedError'

Defined in: [src/errors.ts:51](https://github.com/GoodwayGroup/lib-tradedesk/blob/00b7558/src/errors.ts#L51)

___

### prepareStackTrace

• `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

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

### response

• **response**: [*Response*](response.md)

Defined in: [src/errors.ts:53](https://github.com/GoodwayGroup/lib-tradedesk/blob/00b7558/src/errors.ts#L53)

___

### stack

• `Optional` **stack**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

• **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
:------ | :------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:4
