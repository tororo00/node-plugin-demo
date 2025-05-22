const sharp = require("sharp");
const path = require("path");

sharp(path.join(__dirname, "./1.png")).ensureAlpha(0.1).toFile("output6.png", (error, info) => {
    console.log(info)
})