const BigNumber = require('bignumber.js')

const n = new BigNumber(0.1)
console.log(n)
const m = n.plus(0.2)
console.log(m.toNumber())

console.log(new BigNumber(0.1 + 0.7).toString())
console.log(new BigNumber('0.8').toString())
console.log(new BigNumber(0.7).plus(0.1).toString())