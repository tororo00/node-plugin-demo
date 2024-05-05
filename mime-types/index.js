// https://www.yuque.com/u28777606/ncn6g7/fguz3lb1fq9syy9w/edit
const mime = require('mime-types')
const fs = require('fs')

console.log(mime.types)

console.log(mime.lookup('json'))
console.log(mime.lookup('js'))
console.log(mime.lookup('webp'))
console.log(mime.lookup('html'))
console.log(mime.lookup('png'))
console.log(mime.lookup('.md'))
console.log(mime.charset('text/markdown'))

// fs.writeFile('mime.json',JSON.stringify(mime.types),(err,data) => {
//     console.log(data)
// })