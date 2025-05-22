const sharp = require("sharp")

sharp("./1.png").toBuffer((error, info) => {
    console.log(info)
})