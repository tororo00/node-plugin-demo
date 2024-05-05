const { SyncHook } = require('tapable')

const hook = SyncHook(['arg'])

hook.tap('1',(arg) => {
    console.log(arg)
})

hook.tap('2',(arg) => {
    console.log(arg)
})

hook.call(1)