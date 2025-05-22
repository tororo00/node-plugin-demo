import pLimit from "p-limit";

const limit = pLimit(1)

const fetchSomething = async (params) => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1")
            resolve(params)
        }, 2000)
    })
}

const doSomething = async () => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2")
            resolve("done")
        }, 2000)
    })
}

const arr = [
    limit(() => fetchSomething("foo")),
    limit(() => fetchSomething("bar")),
    limit(() => doSomething()),
]

const res = await Promise.all(arr)
console.log(res)