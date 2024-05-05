const { AsyncParallelHook } = require('tapable')

const hook = AsyncParallelHook(['arg1','arg2','arg3'])

console.time('timer')

hook.tap('1',(arg1,arg2,arg3) => {
    console.log(arg1,arg2,arg3)
})

hook.tap('2',(arg1,arg2,arg3) => {
    console.log(arg1,arg2,arg3)
})

hook.callAsync(1,2,3,() => {
    console.timeEnd('timer')
})