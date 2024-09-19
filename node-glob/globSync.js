const { globSync } = require("glob")
const path = require("path")
console.log(globSync)
console.log(globSync(`${path.resolve(__dirname)}/dir/*.js`))