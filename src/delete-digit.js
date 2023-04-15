const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString()
  let toRemove
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] > str[i]) {
      toRemove = i
      break
    }
  }
  toRemove ??= str.length - 1
  const res = str.slice(0, toRemove) + str.slice(toRemove + 1)
  return parseInt(res)
}
deleteDigit(10)

module.exports = {
  deleteDigit
};
