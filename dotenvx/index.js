const dotenvx = require('@dotenvx/dotenvx')

const env = dotenvx.config()
console.log(env)

console.log(process.env.foo)