# express-qs-dotobj

Nodejs express middleware for parsing query string parameters delimited by dot into an object.

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install express-qs-dotobj
```

## Usage

```javascript
const express = require('express')
const dotobj = require('express-qs-dotobj')

const app = express()

let options = {}
app.use(dotobj(options))
```

`GET /?param.group=1&param.tag=2`
```javascript

console.log(req.query)
{
  param: {
    group: '1',
    tag: '2',
  }
}
```

## Options
#### keepOrig
* **default**: `false`

Keep original parameter in `query` object (by default its deleted).

