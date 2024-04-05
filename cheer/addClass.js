const { load } = require('cheerio')

const $ = load('<div></div>',null,false)

console.log($('div').addClass('box'))
console.log($('div').addClass('container'))

console.log($.html())