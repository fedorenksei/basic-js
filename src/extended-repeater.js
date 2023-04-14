const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  const addition = repeatAndSeparate(options.addition, options.additionRepeatTimes, options.additionSeparator || '|')
  const result = repeatAndSeparate(str + addition, options.repeatTimes, options.separator || '+')
  function repeatAndSeparate(str, times, sep) {
    if (str === undefined) return ''
    return Array(times).fill(String(str)).join(sep)
  }
  return result
}

module.exports = {
  repeater
};
