const { SyncBailHook } = require('tapable')

const hook = SyncBailHook(['arg'])

hook.tap('1',(arg) => {
    console.log('1',arg)
    return arg
})

hook.tap('2',(arg) => {
    console.log('2',arg)
})

hook.call('😀')