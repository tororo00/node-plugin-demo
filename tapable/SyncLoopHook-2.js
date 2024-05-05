const { SyncLoopHook } = require('tapable')

const hook = SyncLoopHook(['a'])

hook.tap('1',(arg) => {
    console.log('1',arg)
})

hook.tap('2',(arg) => {
    console.log('2',arg)
})

hook.call('a')