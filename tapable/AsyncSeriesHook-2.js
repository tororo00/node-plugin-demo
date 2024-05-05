const { AsyncSeriesHook } = require('tapable')

const hook = AsyncSeriesHook(['arg1'])

console.time('timer')

hook.tapAsync('1',(arg1,callBack) => {
    console.log('1',arg1)
    // 如果callback传入参数，则下一个注册函数不会执行
    callBack()
})

hook.tapAsync('2',(arg1,callBack) => {
    console.log('2',arg1)
    callBack()
})

hook.callAsync(1,() => {
    console.timeEnd('timer')
})