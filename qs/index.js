const qs = require('qs')

console.log(qs.parse('a=c&d=100'))

console.log(qs.stringify({a:100}))

console.log(qs.parse('a=b;c=d', {
    delimiter: ';'
}))