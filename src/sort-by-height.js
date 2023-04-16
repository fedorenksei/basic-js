const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const emptySlots = []
  for (let i = currLength = currStart = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      currStart = i + 1
      continue
    }

    currLength++
    if (arr[i + 1] !== -1) {
      emptySlots.push({start: currStart, length: currLength})
      currLength = 0
    }
  }

  const res = arr.filter(e => e !== -1).sort((a, b) => a - b)

  for (const emptySlot of emptySlots) {
    res.splice(emptySlot.start, 0, ...Array(emptySlot.length).fill(-1))
  }

  return res
}

module.exports = {
  sortByHeight
};
