const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!'
  if (date.constructor.name !== 'Date') throw new Error('Invalid date!')
  if (Object.keys(date).length) throw new Error('Invalid date!')

  const month = date.getMonth() + 1
  if (month <= 2 || month == 12) return 'winter';
  if (month <= 5) return 'spring'
  if (month <= 8) return 'summer'
  return 'fall'
}

module.exports = {
  getSeason
};
