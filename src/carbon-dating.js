const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  
  if (typeof sampleActivity !== 'string' 
    && !(sampleActivity instanceof String)
    // || !/^\d+$/.test(sampleActivity)
  ) return false

  sampleActivity = parseInt(sampleActivity)
  if (!sampleActivity) return false

  const k = 0.693 / HALF_LIFE_PERIOD
  let result = Math.log(MODERN_ACTIVITY / k) / sampleActivity
  result = Math.ceil(result)
  return result
}

module.exports = {
  dateSample
};
