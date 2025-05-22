const sharp = require("sharp");
const path = require("path");

sharp(path.join(__dirname, "./1.png")).extractChannel("green").toFile("output7.png",(error, info) => {
    console.log(info)
})