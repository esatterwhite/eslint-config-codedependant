'use strict'

const path = require('path')
const fs = require('fs')
const {promisify} = require('util')
const {test, threw} = require('tap')
const {ESLint} = require('eslint')
const CODE = path.join(__dirname, 'fixtures', 'valid-code')

const readFile = promisify(fs.readFile)
test('valid config', async (t) => {
  const code = await readFile(CODE, 'utf8')
  const linter = new ESLint({
    useEslintrc: false
  , overrideConfigFile: '.eslintrc.json'
  })

  const [result] = await linter.lintText(code)
  t.equal(result.errorCount, 0, 'error count')
}).catch(threw)
