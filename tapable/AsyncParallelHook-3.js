const { AsyncParallelHook } = require('tapable')

const hook = AsyncParallelHook(['arg1','arg2','arg3'])

console.time('timer')

hook.tapPromise('1',(arg1,arg2,arg3) => {
    console.log(arg1,arg2,arg3)
    return new Promise((resolve,reject) => {
        // resolve('1')
    })
})

hook.tapPromise('2',(arg1,arg2,arg3) => {
    console.log(arg1,arg2,arg3)
    return new Promise((resole,reject) => {
        resolve('2')
    })
})

hook.promise('a','b','c',() => {
    console.log('start')
    console.timeEnd('timer')
})