const { AsyncSeriesHook } = require('tapable')

const hook = AsyncSeriesHook(['arg'])

console.time('timer')

hook.tapPromise('1',(arg) => {
    return new Promise((resolve,reject) => {
        console.log('1')
        reject('1')
    })
})

hook.tapPromise('2',(arg) => {
    return new Promise((resolve,reject) => {
        console.log('2')
        resolve('2')
    })
})

hook.callAsync(1,() => {
    console.timeEnd('timer')
})