const sharp = require("sharp")

sharp("./1.png").png({
    quality: 80,
}).toFile("./output2.png", (error, info) => {
    console.log(info)
})