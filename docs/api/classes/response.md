[@goodwaygroup/lib-tradedesk - v1.3.1](../README.md) / Response

# Class: Response

## Hierarchy

- *Body*

  ↳ **Response**

## Table of contents

### Constructors

- [constructor](response.md#constructor)

### Properties

- [body](response.md#body)
- [bodyUsed](response.md#bodyused)
- [headers](response.md#headers)
- [ok](response.md#ok)
- [redirected](response.md#redirected)
- [size](response.md#size)
- [status](response.md#status)
- [statusText](response.md#statustext)
- [timeout](response.md#timeout)
- [type](response.md#type)
- [url](response.md#url)

### Methods

- [arrayBuffer](response.md#arraybuffer)
- [blob](response.md#blob)
- [buffer](response.md#buffer)
- [clone](response.md#clone)
- [json](response.md#json)
- [text](response.md#text)
- [textConverted](response.md#textconverted)
- [error](response.md#error)
- [redirect](response.md#redirect)

## Constructors

### constructor

\+ **new Response**(`body?`: BodyInit, `init?`: ResponseInit): [*Response*](response.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | BodyInit |
| `init?` | ResponseInit |

**Returns:** [*Response*](response.md)

Defined in: node_modules/@types/node-fetch/index.d.ts:167

## Properties

### body

• **body**: *ReadableStream*

Defined in: node_modules/@types/node-fetch/index.d.ts:145

___

### bodyUsed

• **bodyUsed**: *boolean*

Defined in: node_modules/@types/node-fetch/index.d.ts:146

___

### headers

• **headers**: *Headers*

Defined in: node_modules/@types/node-fetch/index.d.ts:172

___

### ok

• **ok**: *boolean*

Defined in: node_modules/@types/node-fetch/index.d.ts:173

___

### redirected

• **redirected**: *boolean*

Defined in: node_modules/@types/node-fetch/index.d.ts:174

___

### size

• **size**: *number*

Defined in: node_modules/@types/node-fetch/index.d.ts:149

___

### status

• **status**: *number*

Defined in: node_modules/@types/node-fetch/index.d.ts:175

___

### statusText

• **statusText**: *string*

Defined in: node_modules/@types/node-fetch/index.d.ts:176

___

### timeout

• **timeout**: *number*

Defined in: node_modules/@types/node-fetch/index.d.ts:152

___

### type

• **type**: ResponseType

Defined in: node_modules/@types/node-fetch/index.d.ts:177

___

### url

• **url**: *string*

Defined in: node_modules/@types/node-fetch/index.d.ts:178

## Methods

### arrayBuffer

▸ **arrayBuffer**(): *Promise*<ArrayBuffer\>

**Returns:** *Promise*<ArrayBuffer\>

Defined in: node_modules/@types/node-fetch/index.d.ts:143

___

### blob

▸ **blob**(): *Promise*<Blob\>

**Returns:** *Promise*<Blob\>

Defined in: node_modules/@types/node-fetch/index.d.ts:144

___

### buffer

▸ **buffer**(): *Promise*<Buffer\>

**Returns:** *Promise*<Buffer\>

Defined in: node_modules/@types/node-fetch/index.d.ts:147

___

### clone

▸ **clone**(): [*Response*](response.md)

**Returns:** [*Response*](response.md)

Defined in: node_modules/@types/node-fetch/index.d.ts:171

___

### json

▸ **json**(): *Promise*<any\>

**Returns:** *Promise*<any\>

Defined in: node_modules/@types/node-fetch/index.d.ts:148

___

### text

▸ **text**(): *Promise*<string\>

**Returns:** *Promise*<string\>

Defined in: node_modules/@types/node-fetch/index.d.ts:150

___

### textConverted

▸ **textConverted**(): *Promise*<string\>

**Returns:** *Promise*<string\>

Defined in: node_modules/@types/node-fetch/index.d.ts:151

___

### error

▸ `Static` **error**(): [*Response*](response.md)

**Returns:** [*Response*](response.md)

Defined in: node_modules/@types/node-fetch/index.d.ts:169

___

### redirect

▸ `Static` **redirect**(`url`: *string*, `status`: *number*): [*Response*](response.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `status` | *number* |

**Returns:** [*Response*](response.md)

Defined in: node_modules/@types/node-fetch/index.d.ts:170
