const Sharp = require("sharp");
const path = require("path");

const sharp = new Sharp(path.join(__dirname, "./1.png"))


sharp.resize({
    width: 200,
    height: 200
}).toFile("output8.png", (error, info) => {
    console.log(info)
})
