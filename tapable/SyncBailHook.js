const { SyncBailHook } = require('tapable')

// 同步串行，当注册事件无返回值，或者返回undefined时继续执行之后的注册事件，否则中断执行。
const hook = new SyncBailHook(['arg1','arg2','arg3'])

hook.tap('vue',(arg1) => {
    console.log(arg1)
    return arg1
})

hook.tap('react',(arg1) => {
    console.log(arg1)
})

hook.call(1)