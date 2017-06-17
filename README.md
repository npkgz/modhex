[![Build Status](https://travis-ci.org/AndiDittrich/Node.modhex.svg?branch=master)](https://travis-ci.org/AndiDittrich/Node.modhex)

modhex
=========================

[modhex](https://developers.yubico.com/yubico-c/Manuals/modhex.1.html) encoding/decoding used by [Yubico-OTP Authentication](https://developers.yubico.com/OTP/)

```
yarn add modhex --save
```

Features
------------------------------

* Encode Data to modhex
* Decode modhex Strings 

API
------------------------------

 * [encode](#encode) - Encode Data to modhex
 * [decode](#decode) - Decode modhex Strings 


encode
------------------------------

**Description:** Encode Data to modhex

**Syntax:** `data:ModhexString = encode(data:HexString|Buffer)`

**Arguments:**

 * data:HexString|Buffer - Input data as hex-String or Buffer

**Example:**

```js
const _modex = require('modhex');

// encode hex data
const data0 = _modex.encode('5834b135dc124d38c');

// encode buffer
const mybuffer = Buffer.from('5834b135dc124d38c', 'hex');
const data1 = _modhex.encode(mybuffer);
```

decode
------------------------------

**Description:** Decode modhex Strings 

**Syntax:** `data:HexString|Buffer = decode(data:ModhexString, [encoding:String])`

**Arguments:**

 * data:ModhexString - Input data as modhex
 * encoding:String(optional) - Output encoding {**hex**, **buffer**} default: hex

**Example:**

```js
const _modex = require('modhex');

// decode modhex data to hex
const data0 = _modex.encode('iijbeetrkrtlghuddhdhhjdej');

// decode modhex to buffer
const data1 = _modhex.encode('iijbeetrkrtlghuddhdhhjdej', 'buffer');
```

Any Questions ? Report a Bug ? Enhancements ?
---------------------------------------------
Please open a new issue on [GitHub](https://github.com/AndiDittrich/Node.modhex/issues)

License
-------
modhex is OpenSource and licensed under the Terms of [The MIT License](LICENSE.md)
