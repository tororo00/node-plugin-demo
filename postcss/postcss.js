const postcss = require("postcss")
const autoprefixer = require("autoprefixer")

const processor = postcss(autoprefixer)

processor.process(`.box {width: 100px; height: 100px}`).then((res) => {
    console.log(res.css)
})