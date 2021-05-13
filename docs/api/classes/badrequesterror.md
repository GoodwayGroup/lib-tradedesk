[@goodwaygroup/lib-tradedesk - v1.2.2](../README.md) / BadRequestError

# Class: BadRequestError

## Hierarchy

- *Error*

  ↳ **BadRequestError**

## Table of contents

### Constructors

- [constructor](badrequesterror.md#constructor)

### Properties

- [message](badrequesterror.md#message)
- [name](badrequesterror.md#name)
- [prepareStackTrace](badrequesterror.md#preparestacktrace)
- [response](badrequesterror.md#response)
- [stack](badrequesterror.md#stack)
- [stackTraceLimit](badrequesterror.md#stacktracelimit)

### Methods

- [captureStackTrace](badrequesterror.md#capturestacktrace)

## Constructors

### constructor

\+ **new BadRequestError**(`message`: *string*, `response`: [*Response*](response.md)): [*BadRequestError*](badrequesterror.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | *string* |
| `response` | [*Response*](response.md) |

**Returns:** [*BadRequestError*](badrequesterror.md)

Defined in: [src/errors.ts:20](https://github.com/GoodwayGroup/lib-tradedesk/blob/5e552af/src/errors.ts#L20)

## Properties

### message

• **message**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*= 'BadRequestError'

Defined in: [src/errors.ts:18](https://github.com/GoodwayGroup/lib-tradedesk/blob/5e552af/src/errors.ts#L18)

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

Defined in: [src/errors.ts:20](https://github.com/GoodwayGroup/lib-tradedesk/blob/5e552af/src/errors.ts#L20)

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
