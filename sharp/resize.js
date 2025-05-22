const sharp = require("sharp")

sharp("./1.png").resize(100).extend({
    bottom: 10,
    background: "red"
}).toFile("output.jpeg", (error, info) => {
    console.log(info)
})