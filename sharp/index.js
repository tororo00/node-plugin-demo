const sharp = require('sharp')

async function getMetadata() {
    const metadata = await sharp("./1.png").metadata();
    console.log(metadata);
}

sharp('./1.png').png({quality: 0}).toFile('./2.png',(error,info) => {
    console.log(info)
})

getMetadata()