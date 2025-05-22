const postcss = require("postcss")

// 插件工厂函数
const myPlugin = (options) => {
    console.log(options)
    return {
        // 插件名字必须定义
        postcssPlugin: 'myPlugin',
        Declaration(decl){
            console.log(decl)
        }
    }
}

// 标记为postcss插件
myPlugin.postcss = true

const css = `.box {width: 100px; height: 100px}`

postcss(myPlugin({})).process(css).then((res) => {
    console.log(res.css)
})

/* 
    options　插件的选项
    const pluginName = (options) => {
        return {
            postcssPlugin: 插件的名字
            生命周期函数
        }
    }
*/