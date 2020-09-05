'use strict'

const path = require('path')
const fs = require('fs')
const {test, threw} = require('tap')
const {CLIEngine} = require('eslint')
const EOL_CODE = path.join(__dirname, 'fixtures', 'no-eol-fixture')

const readFile = fs.promises.readFile
test('invalid config', async (t) => {
  const code = await readFile(EOL_CODE, 'utf8')
  const cli = new CLIEngine({
    useEslintrc: false
  , configFile: 'eslintrc.json'
  })

  const result = cli.executeOnText(code)
  t.equal(result.errorCount, 1, 'new line missing')
  t.equal(result.results[0].messages[0].ruleId, 'eol-last', 'missing newline')
}).catch(threw)
