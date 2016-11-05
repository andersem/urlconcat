[![Build Status](https://travis-ci.org/andersem/urlconcat.svg?branch=master)](https://travis-ci.org/andersem/urlconcat)

# urlconcat
Concats paths in an url, places slashes where necessary.

## Installation

```bash
npm install urlconcat --save
```

## Usage

### CommonJS
```javascript
var urlconcat = require('urlconcat');
urlconcat.concat('http://localhost:8080/', 'search', 'something'); // 'http://localhost:8080/search/something'
```

### ES2015

```javascript
import urlconcat from 'urlconcat';
urlconcat.concat('http://localhost:8080/', 'search', 'something'); // 'http://localhost:8080/search/something'
```

or 

```javascript
import { concat } from 'urlconcat';
concat('http://localhost:8080/', 'search', 'something'); // 'http://localhost:8080/search/something'
```

