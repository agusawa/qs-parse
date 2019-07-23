# QS-Parser

## Description

QS-Parser merupakan sebuah library javascript yang bisa mengubah data object menjadi sebuah query pada URL. QS-Parser juga bisa mengubah query pada URL menjadi object.

## Installation

```bash
npm i qs-parser
# OR
yarn add qs-parser
```

## Usage

```javascript
const qs = require('qs-parser');

// Example data
const data = {
    first_name: 'Foo',
    last_name: 'Bar',
    full_name: 'Foo Bar',
};

qs.encode(data);
// ?first_name=Foo&last_name=Bar&full_name=Foo%20Bar

qs.encode('http://http://yourwebsite.com', data);
// http://yourwebsite.com?first_name=Foo&last_name=Bar&full_name=Foo%20Bar

qs.decode('first_name=Foo&last_name=Bar&full_name=Foo%20Bar')
qs.decode('http://yourwebsite.com?first_name=Foo&last_name=Bar&full_name=Foo%20Bar')
// Object { first_name: 'Foo', last_name: 'Bar', full_name: 'Foo Bar' }

```

## License

Unless stated elsewhere, file headers or otherwise, the license as stated in the LICENSE file.
