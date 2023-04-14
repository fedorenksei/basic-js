const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  
  const copy = [...arr]
  copy.forEach((value, index, arr) => {
    if (typeof value !== 'string') return

    const delta = value.endsWith('-next') ? 1 : -1

    if (value.startsWith('--discard')) {
      delete arr[index + delta]
      delete arr[index]
    }

    if (value.startsWith('--double')) {
      if (index + delta in arr) {
        arr[index] = arr[index + delta]
      } else {
        delete arr[index]
      }
    }
  })

  return copy.filter(x => true)
}

module.exports = {
  transform
};
