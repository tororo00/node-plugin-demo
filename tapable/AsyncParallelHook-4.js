const { AsyncParallelHook } = require('tapable')

const hook = AsyncParallelHook(['arg1','arg2','arg3'])

console.time('timer')

hook.tapAsync('1',(arg1,arg2,arg3) => {
    console.log(arg1,arg2,arg3)
})

hook.tapPromise('2',(arg1,arg2,arg3) => {
    console.log(arg1,arg2,arg3)
    return new Promise((resolve,reject) => {
        resolve('1')
    })
})

hook.callAsync('a','b','c',() => {
    console.timeEnd('timer')
})