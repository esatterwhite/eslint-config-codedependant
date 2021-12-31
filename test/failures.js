'use strict'

const path = require('path')
const fs = require('fs')
const {test, threw} = require('tap')
const {ESLint} = require('eslint')
const EOL_CODE = path.join(__dirname, 'fixtures', 'no-eol-fixture')

const readFile = fs.promises.readFile
test('invalid config', async (t) => {
  const code = await readFile(EOL_CODE, 'utf8')
  const linter = new ESLint({
    useEslintrc: false
  , overrideConfigFile: '.eslintrc.json'
  })

  const [result] = await linter.lintText(code)
  t.equal(result.errorCount, 1, 'new line missing')
  t.equal(result.messages[0].ruleId, 'eol-last', 'missing newline')
}).catch(threw)
