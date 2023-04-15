const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const ROWS = matrix.length
  const COLS = matrix[0].length
  const aroundCoordinates = (() => {
    const range = [-1, 0, 1]
    const res = []
    for (const i of range) {
      for (const j of range) {
        if (i === 0 && j === 0) continue
        res.push([i, j])
      }
    }
    return res
  })()

  const result = Array(ROWS).fill().map(() => Array(COLS).fill(0))

  for (let row = 0; row < ROWS; row++) {
    for (let column = 0; column < COLS; column++) {
      if (!matrix[row][column]) continue
      addOnes(row, column)
    }
  }

  function addOnes(row, column) {
    for (const pos of aroundCoordinates) {
      const targetRow = row + pos[0]
      const targetColumn = column + pos[1]
      if (targetRow < 0 || targetColumn < 0 || targetRow >= ROWS || targetColumn >= COLS) continue
      result[targetRow][targetColumn]++
    }
  }

  return result
}

module.exports = {
  minesweeper
};
