const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let prevZeros = [], res = 0
  for (const row of matrix) {
    res += row
      .filter((v, index) => !prevZeros.includes(index))
      .reduce((prev, curr) => prev + curr, 0)
    
      prevZeros = row
      .map((value, index) => value === 0 ? index : false)
      .filter(v => v !== false)
  }
  return res
}

module.exports = {
  getMatrixElementsSum
};
