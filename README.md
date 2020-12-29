# eslint-config-codedependant

eslint config with reasonable comma first settings for node.js projects

### Features

* accurate alignment of commas w/ comma first style
* validation of error handling in callbacks
* Require validation (required packages must be in package.js)

### Installation

```bash
> npm install eslint-config-codedependant
```

### Config Installation

Add a `eslintConfig` block to you package.json

```javascript
{
  "eslintConfig": {
    "root": true,
    "extends": "eslint-config-codedependant",
    "ignorePatterns": [
      "node_modules/"
    ]
  }
}
```

### Example

```javascript
'use strict'

const path = require('path')
const fs = require('fs')
const {promisify} = require('util')
const crypto = require('crypto')

const readFile = promisify(fs.readFile)
const EXP = /\d+/
const SLEEP_MS = 150

const LONG_STRING = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
  + 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
  + 'abcdefghijklmnopqrstuvwxyz'

const OPTIONS = {
  FOO: 1
, BAR: 2
, TEST: 'fake'
, LONG: LONG_STRING
}

const isFoo = OPTIONS.FOO
  ? OPTIONS.BAR
  : OPTIONS.TEST

function getOptions() {
  return isFoo ? OPTIONS : null
}

function rand(bytes = 10, cb) {
  crypto.randomBytes(bytes, (err, buffer) => {
    if (err) return cb(err)
    cb(null, buffer.toString('hex'))
  })
}

async function doWork(opts) {
  const {x, y} = opts
  try {
    const file = await readFile(path.join(x, y))
    return file
  } catch (err) {
    console.error(err)
    return null
  }
}

;(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, SLEEP_MS)
  })
  console.log('ready', 11 + 33)
})()

function plugin(opts) {
  if (this.is_new) {
    this.id = Date.now()
  } else {
    this.updated = new Date()
  }
}

module.exports = {
  ...OPTIONS
, EXP
, rand
, getOptions
, doWork
, plugin
}
```
