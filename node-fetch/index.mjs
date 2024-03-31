import fetch from 'node-fetch'

async function request(){
    const res = await fetch('https://www.51houniao.com/product/product/guessYouLike')
    const data = await res.json()
    console.log(data)
}

request()