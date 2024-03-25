const DotEnv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

console.log(dotenvExpand.expand({
    parsed: {
        address: 'sz'
    }
}))

const env = DotEnv.config({
    path: ['.env.test','.env'],
    // 用.env文件中的值覆盖计算机上已经设置的任何环境变量。
    override: true
})

console.log(env)
console.log(process.env.address)