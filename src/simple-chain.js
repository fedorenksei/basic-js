const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  _chain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    return this._chain.length
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    if (value === undefined) value = ''
    this._chain.push(String(value))
    // console.log(this)
    return this
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    const index = position - 1
    if (!this._chain.hasOwnProperty(index)) {
      throw new Error("You can't remove incorrect link!")
    }
    this._chain.splice(index, 1)
    return this
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    this._chain.reverse()
    return this
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    const result = this._chain.map(el => `( ${el} )`).join('~~')
    this._chain = []
    return result
  }
};

// const log = chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0)
// console.log(log)

module.exports = {
  chainMaker
};
