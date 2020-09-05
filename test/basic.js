'use strict'

const config = require('../index.js')
const {test, threw} = require('tap')

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

test('basic properties', async (t) => {
  t.ok(isObject(config.parserOptions), 'parserOptions is object')
  t.ok(isObject(config.env), 'env is object')
  t.ok(isObject(config.globals), 'globals is object')
  t.ok(isObject(config.rules), 'rules is object')
}).catch(threw)
