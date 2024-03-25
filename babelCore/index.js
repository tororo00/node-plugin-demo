const { transformSync } = require('@babel/core')

console.log(transformSync)
transformSync('const a = 1',{
    configFile: './babelrc.js'
})