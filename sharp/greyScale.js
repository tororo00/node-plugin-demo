const sharp = require("sharp")
const path = require("path")
const { info } = require("console")

sharp(path.join(__dirname, "./1.png")).greyscale().toFile("output5.png", (error, info) => {
    console.log(info)
})