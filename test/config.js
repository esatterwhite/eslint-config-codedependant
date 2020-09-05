'use strict'

const path = require('path')
const fs = require('fs')
const {promisify} = require('util')
const {test, threw} = require('tap')
const {CLIEngine} = require('eslint')
const CODE = path.join(__dirname, 'fixture')

const readFile = promisify(fs.readFile)
test('valid config', async (t) => {
  const code = await readFile(CODE, 'utf8')
  const cli = new CLIEngine({
    useEslintrc: false
  , configFile: 'eslintrc.json'
  })

  const result = cli.executeOnText(code)
  t.equal(result.errorCount, 0, 'error count')
}).catch(threw)
