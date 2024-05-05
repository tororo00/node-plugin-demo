const { AsyncParallelHook } = require('tapable')

const hook = AsyncParallelHook(['arg1','arg2','arg3'])

console.time('timer')

hook.tapAsync('1',(arg1,arg2,arg3,callback) => {
    console.log('1',arg1,arg2,arg3)
    callback()
})

hook.tapAsync('2',(arg1,arg2,arg3,callback) => {
    console.log('2',arg1,arg2,arg3)
    callback()
})

hook.callAsync('a','b','c',() => {
    console.timeEnd('timer')
})