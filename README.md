# urlconcat
Concats paths in an url, places slashes where necessary.

## Installation

```bash
npm install urlconcat --save
```

## Usage

```javascript
var urlconcat = require('urlconcat');
urlconcat.concat('http://localhost:8080/', 'search', 'something'); // 'http://localhost:8080/search/something'
```
