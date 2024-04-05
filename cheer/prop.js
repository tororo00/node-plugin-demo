const { load } = require('cheerio')

const $ = load('<input checked/>')

console.log($('input').prop('checked'))