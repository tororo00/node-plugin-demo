const { load } = require('cheerio')

const $ = load('<div class="box"></div>',null,false)

console.log($('div').hasClass('box'))