const { SyncLoopHook } = require('tapable')

const hook = SyncLoopHook(['arg'])

hook.tap('1',(arg) => {
    console.log('1',arg)
    return 1
})

hook.tap('2',(arg) => {
    console.log('2',arg)
})

hook.call('a')