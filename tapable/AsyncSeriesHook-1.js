const { AsyncSeriesHook } = require('tapable')

const hook = AsyncSeriesHook(['arg1'])

console.time('timer')

hook.tap('1',(arg1) => {
    console.log(arg1)
})

hook.tap('2',(arg1,callBack) => {
    console.log(arg1)
    callBack()
})

hook.callAsync(1,() => {
     console.timeEnd('timer')
})