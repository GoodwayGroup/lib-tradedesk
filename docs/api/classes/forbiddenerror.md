[@goodwaygroup/lib-tradedesk - v1.1.1](../README.md) / ForbiddenError

# Class: ForbiddenError

## Hierarchy

* *Error*

  ↳ **ForbiddenError**

## Table of contents

### Constructors

- [constructor](forbiddenerror.md#constructor)

### Properties

- [message](forbiddenerror.md#message)
- [name](forbiddenerror.md#name)
- [prepareStackTrace](forbiddenerror.md#preparestacktrace)
- [response](forbiddenerror.md#response)
- [stack](forbiddenerror.md#stack)
- [stackTraceLimit](forbiddenerror.md#stacktracelimit)

### Methods

- [captureStackTrace](forbiddenerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new ForbiddenError**(`message`: *string*, `response`: [*Response*](response.md)): [*ForbiddenError*](forbiddenerror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`response` | [*Response*](response.md) |

**Returns:** [*ForbiddenError*](forbiddenerror.md)

Defined in: [src/errors.ts:31](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/errors.ts#L31)

## Properties

### message

• **message**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*= 'ForbiddenError'

Defined in: [src/errors.ts:29](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/errors.ts#L29)

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

Defined in: [src/errors.ts:31](https://github.com/GoodwayGroup/lib-tradedesk/blob/0a7142d/src/errors.ts#L31)

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
