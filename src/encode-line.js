const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return ''

  let res = []
  for (let i = 0, count = 0; i < str.length; i++) {
    count++
    if (str[i + 1] !== str[i]) {
      res.push([count, str[i]])
      count = 0
    }
  }

  res = res.map(([count, currChar]) => (count > 1 ? count.toString() : '') + currChar).join('')
  return res
}

module.exports = {
  encodeLine
};
