[![Build Status](https://travis-ci.org/andersem/urlconcat.svg?branch=master)](https://travis-ci.org/andersem/urlconcat)

# urlconcat
Concats paths in an url, places slashes where necessary.

## Installation

```bash
npm install urlconcat --save
```

## Usage

### Importing
All these methods work:
```javascript
var urlconcat = require('urlconcat');
var concat = urlconcat.concat;
```

```javacript
import urlconcat from 'urlconcat';
const concat = urlconcat.concat;
```

```javascript
import { concat } from 'urlconcat';
```

### Using

It will place slashes between url parts, but not before query parameters:
```javascript
concat('http://localhost:8080/', 'api/search', 'something', '?a=b&b=c'); 
// 'http://localhost:8080/api/search/something?a=b&b=c'
```

It will remove double slashes:
```javascript
concat('http://localhost:8080/', '/search')
// 'http://localhost:8080/search
```

It will leave trailing slashes:
```javascript
concat('http://localhost:8080/', 'search/')
// 'http://localhost:8080/search
```