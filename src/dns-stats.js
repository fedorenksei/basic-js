const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  domains = domains.map(el => el.split('.'))
  const data = {}
  for (const arr of domains) {
    arr.reverse()
    for (let i = 0; i < arr.length; i++) {
      const dns = '.' + arr.slice(0, i + 1).join('.')
      data[dns] ||= 0
      data[dns]++
    }
  }
  return data
}

module.exports = {
  getDNSStats
};
