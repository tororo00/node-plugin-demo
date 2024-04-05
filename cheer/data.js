const { load } = require('cheerio')

const $ = load('<div data-index="10"></div>')

console.log($('div').data('index'))