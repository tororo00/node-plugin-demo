const sharp = require("sharp");
const path = require("path")

sharp(path.join(__dirname, "./1.png")).tint("skyblue").toFile("./output4.png", (error, info) => {
    console.log(info)
})