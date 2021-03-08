[@goodwaygroup/lib-tradedesk - v1.1.1](../README.md) / GoneError

# Class: GoneError

## Hierarchy

* *Error*

  ↳ **GoneError**

## Table of contents

### Constructors

- [constructor](goneerror.md#constructor)

### Properties

- [message](goneerror.md#message)
- [name](goneerror.md#name)
- [prepareStackTrace](goneerror.md#preparestacktrace)
- [response](goneerror.md#response)
- [stack](goneerror.md#stack)
- [stackTraceLimit](goneerror.md#stacktracelimit)

### Methods

- [captureStackTrace](goneerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new GoneError**(`message`: *string*, `response`: [*Response*](response.md)): [*GoneError*](goneerror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`response` | [*Response*](response.md) |

**Returns:** [*GoneError*](goneerror.md)

Defined in: [src/errors.ts:42](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/errors.ts#L42)

## Properties

### message

• **message**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*= 'GoneError'

Defined in: [src/errors.ts:40](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/errors.ts#L40)

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

Defined in: [src/errors.ts:42](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/errors.ts#L42)

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
