#! /usr/bin/env node

'use strict'
const meow = require('meow')
const colors = require('colors')
const loadingSpinner = require('loading-spinner')

const cli = meow(`
  Usage
	  $ tba compile
`)

function printDot () {
  console.log(colors.green('.'))
  setTimeout(printDot, 5000)
}

if (cli.input[0] === 'compile') {
  console.log(colors.blue('compiling code, please wait...'))
  loadingSpinner.start()
  setTimeout(printDot, 5000)
} else {
  console.log(colors.red.underline('please use `tba compile`'))
}
