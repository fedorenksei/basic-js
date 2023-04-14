const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  function getStrData(str) {
    const data = {}
    for (const ltr of str) {
      data[ltr] ||= 0
      data[ltr]++
    }
    return data
  }
  const [data1, data2] = [str1, str2].map(getStrData)

  let count = 0
  for (const ltr in data1) {
    count += Math.min(data1[ltr], data2[ltr]) || 0
  }

  return count
}

module.exports = {
  getCommonCharacterCount
};
