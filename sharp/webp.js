const sharp = require("sharp")
const path = require("path")

sharp(path.join(__dirname, "./1.png")).webp({
    quality: 90,
}).toFile("output.webp", (error, info) => {
    console.log(info)
})