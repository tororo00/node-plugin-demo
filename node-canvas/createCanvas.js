// const { Canvas, createCanvas } = require('canvas')
import http from "node:http"
import { Canvas, createCanvas } from "canvas"

console.log(Canvas)

const canvas1 = new Canvas()
console.log(canvas1)

console.log(createCanvas)
const canvas2 = createCanvas(100,200)
console.log(canvas2)
console.dir(canvas2)
// console.log(canvas2.height)
// console.log(canvas2.width)
// console.log(canvas2.type)
// console.log(canvas2.stride)
console.log(canvas2.createPNGStream)

console.log(Object.getOwnPropertyNames(canvas2))

const server = http.createServer((req, res) => {
    res.end("end")
})

server.listen(4000, () => {
    console.log("project is running at 5000")
})

/* 
    导入
    type: "commonjs"
    const { createCanvas } = require("canvas")
    type: "module"
    import { createCanvas } from "canvas"

    语法：
    const canvas = createCanvas(width, height, type)

    参数：
    width： 可选，canvas的宽度，默认值为0
    height： 可选，canvas的高度，默认值为0
    type: 'PDF'|'SVG'

    返回值： 一个canvas实例对象，自身属性上包含height、width、type、stride
*/