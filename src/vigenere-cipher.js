const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const letterA = 'A'.charCodeAt()
const letterZ = 'Z'.charCodeAt()
const ABC = (() => {
  let result = ''
  for (let i = letterA; i < letterZ + 1; i++) {
    result += String.fromCharCode(i)
  }
  return result
})()

class VigenereCipheringMachine {
  constructor(type) {
    if (type === false) {
      this.revert = true
    }
  }

  encrypt(...args) {
    return this._doOperation('encrypt', ...args)
  }
  decrypt(...args) {
    return this._doOperation('decrypt', ...args)
  }

  _doOperation(type, input, keyword) {
    if (!input || !keyword || typeof input !== 'string' || typeof keyword !== 'string') {
      throw new Error('Incorrect arguments!')
    }

    const [inputCharCodes, keywordCharCodes] = [input, keyword].map(str => 
      str.toUpperCase().split('').map(l => l.charCodeAt() - letterA)
    )

    let res = []
    for (
      let commonIndex = 0, lettersIndex = 0; 
      commonIndex < input.length; 
      commonIndex++
    ) {
      const inputLtrCode = inputCharCodes[commonIndex]
      if (inputLtrCode < 0 || inputLtrCode > ABC.length - 1) {
        res.push(inputLtrCode)
        continue
      }
      const keywordLtrCode = keywordCharCodes[lettersIndex++ % keyword.length]

      let operationResult = inputLtrCode + keywordLtrCode * (type === 'decrypt' ? -1 : 1)
      if (operationResult < 0) operationResult += ABC.length;
      operationResult %= ABC.length
      
      res.push(operationResult)
    }
    res = res.map(ltr => String.fromCharCode(ltr + letterA))

    if (this.revert) res.reverse();
    res = res.join('')
    return res
  }
}

module.exports = {
  VigenereCipheringMachine
};
