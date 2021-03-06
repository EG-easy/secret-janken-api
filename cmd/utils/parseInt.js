'use strict'
const commander = require('commander')

/**
 * myParseInt
 * @param {String} value
 */
function myParseInt (value) {
  // parseInt takes a string and a radix
  const parsedValue = parseInt(value, 10)
  if (isNaN(parsedValue)) {
    throw new commander.InvalidArgumentError('Not a number.')
  }
  return parsedValue
}

module.exports = myParseInt
