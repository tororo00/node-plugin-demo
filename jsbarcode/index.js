const jsBarcode = require("jsbarcode")
const { createCanvas } = require("canvas")
const http = require("http")

const canvas1 = createCanvas(100, 100)
console.log(jsBarcode(canvas1, "hello"))
console.log(canvas1.toDataURL())

/* 
    JsBarcode()在指定的元素上创建一个条形码，条形码的内容是传递的字符串
    
    语法：JsBarcode(element, text, options)

    参数：
        element
        text
        options

    返回值：
*/