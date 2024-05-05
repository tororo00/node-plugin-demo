const { AsyncSeriesHook } = require('tapable')

const hook = AsyncSeriesHook(['arg'])

console.time('timer')

hook.tapAsync('1', (arg,callBack) => {
    setTimeout(() => {
        console.log('1',arg)
        callBack()
    },3000)
})

hook.tapAsync('2',(arg,callBack) => {
    setTimeout(() => {
        console.log('2',arg)
        callBack()
    },2000)
})

hook.callAsync(1,() => {
    console.timeEnd('timer')
})