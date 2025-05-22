const sharp = require("sharp");
const path = require("path");

sharp(path.join(__dirname, "./1.png")).removeAlpha().toFile("output5.png", (error, info) => {
    console.log(info)
})