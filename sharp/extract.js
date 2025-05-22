const sharp = require("sharp");

sharp("./1.png").extract({
    left: 10,
    top: 10,
    width: 100,
    height: 100,
}).toFile("output1.png", (error, info) => {
    console.log(info)
})