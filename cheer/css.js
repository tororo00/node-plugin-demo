const cheerio = require('cheerio')

const $ = cheerio.load('<div style="width:400px;height:400px"></div>')

console.log($('div').css('width'))