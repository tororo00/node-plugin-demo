const { SyncWaterfallHook } = require('tapable')

const hook = SyncWaterfallHook(['arg'])

hook.tap('1',(arg) => {
    console.log('1',arg)
    return 'a'
})

hook.tap('2',(arg) => {
    console.log('2',arg)
    return 'b'
})

hook.tap('3',(arg) => {
    console.log('3',arg)
    return 'c'
})

hook.call('😀')