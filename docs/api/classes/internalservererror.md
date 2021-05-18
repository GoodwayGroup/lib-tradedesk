[@goodwaygroup/lib-tradedesk - v1.3.0](../README.md) / InternalServerError

# Class: InternalServerError

## Hierarchy

- *Error*

  ↳ **InternalServerError**

## Table of contents

### Constructors

- [constructor](internalservererror.md#constructor)

### Properties

- [message](internalservererror.md#message)
- [name](internalservererror.md#name)
- [prepareStackTrace](internalservererror.md#preparestacktrace)
- [response](internalservererror.md#response)
- [stack](internalservererror.md#stack)
- [stackTraceLimit](internalservererror.md#stacktracelimit)

### Methods

- [captureStackTrace](internalservererror.md#capturestacktrace)

## Constructors

### constructor

\+ **new InternalServerError**(`message`: *string*, `response`: [*Response*](response.md)): [*InternalServerError*](internalservererror.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | *string* |
| `response` | [*Response*](response.md) |

**Returns:** [*InternalServerError*](internalservererror.md)

Defined in: [src/errors.ts:64](https://github.com/GoodwayGroup/lib-tradedesk/blob/4f7584e/src/errors.ts#L64)

## Properties

### message

• **message**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*= 'InternalServerError'

Defined in: [src/errors.ts:62](https://github.com/GoodwayGroup/lib-tradedesk/blob/4f7584e/src/errors.ts#L62)

___

### prepareStackTrace

• `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

#### Type declaration

▸ (`err`: Error, `stackTraces`: CallSite[]): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `stackTraces` | CallSite[] |

**Returns:** *any*

Defined in: node_modules/@types/node/globals.d.ts:11

___

### response

• **response**: [*Response*](response.md)

Defined in: [src/errors.ts:64](https://github.com/GoodwayGroup/lib-tradedesk/blob/4f7584e/src/errors.ts#L64)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | *object* |
| `constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:4
