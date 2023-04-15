const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  _chain: [],
  getLength() {
    return this._chain.length
  },
  addLink(value) {
    if (value === undefined) value = ''
    this._chain.push(String(value))
    return this
  },
  removeLink(position) {
    const index = position - 1
    if (!this._chain.hasOwnProperty(index)) {
      this._chain = []
      throw new Error("You can't remove incorrect link!")
    }
    this._chain.splice(index, 1)
    return this
  },
  reverseChain() {
    this._chain.reverse()
    return this
  },
  finishChain() {
    const result = this._chain.map(el => `( ${el} )`).join('~~')
    this._chain = []
    return result
  }
};

module.exports = {
  chainMaker
};
