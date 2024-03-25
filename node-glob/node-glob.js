const { glob, globSync, globStream, hasMagic, escape, unescape, Glob, globIterateSync } = require('glob')
const path = require('path')

// import { type GlobOptions } from "glob"

async function fn(){
    const res = await glob("**/*.js",{ignore:['node_modules/**','date-fns/**']})
    console.log(res)
}

// fn()

// console.log(13,globSync('./node-glob/dir/**'))

// console.log(globSync('./dir/?index.js',{
//     dot: true
// }))

// console.log(globSync('./dir/*(a|a1|b1).js'))

// console.log(globSync('./dir/!(a|b|b1).js'))

// console.log(globSync('./dir/?(a|a1|b|b1).js'))

// console.log(globSync('./dir/a[0-3].js'))


// console.log(globSync('/@(a1|b1).js',{
//     // cwd: path.join(__dirname,'/dir')
//     root: path.join(__dirname,'dir')
// }))

// console.log(globSync('./dir/*(a|a1|b1).js',{
//     absolute: true,
//     posix: true
// }))

// console.log(globSync('./dir/*.{js,ts}'))

// console.log(globSync('./dir/?(a|b|c).js',{
//     cwd: path.join(__dirname,'../../node')
// }))

// console.log(globSync('./dir/*(a|b|c).js'))

// console.log(globSync('../dir/*.js'))

// console.log(globSync('../dir/?.js'))

// console.log(globSync('../dir/[ab].js'))
// console.log(globSync('../dir/[0-3].js'))

// console.log(globSync('../dir/*(a|b|c).js'))

// console.log(globSync('../dir/!(a|b).js'))

// console.log(globSync('../dir/?(a|b).js'))

// console.log(globSync('../dir/{a,b}.js'))

// console.log(globStream('../dir/*(a|b|c).js'))

// console.log(globSync('**/*'))

// console.log(hasMagic('**/*'))

// console.log(hasMagic('abc'))

// console.log(escape('./dir/**',{
//     windowsPathsNoEscape: true
// }))

// console.log(unescape(escape('./dir/**',{
//     windowsPathsNoEscape: true
// })))

// console.log(unescape(escape('./dir/**')))

const g = new Glob('./node-glob/**',{
    cwd: process.cwd()
})
// console.log(g)
// console.log(g.stream())
// console.log(g.iterate())
// console.log(g.iterate().next())
async function fn(){
    console.log(g)
    for await (const item of g){
        console.log('pp',item)
    }
}
// fn()

// console.log(process.cwd())
// console.log(path.resolve(process.cwd(),'..'))
// console.log(path.resolve(process.cwd(),'../node-glob/dir/**'))
// console.log(path.join(process.cwd(),'../node-glob/dir/**'))
// console.log(path.resolve())
// console.log(path.resolve('/foo','/bar','baz'))
// console.log(0,path.resolve('a/..'))
// console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile'))
// console.log(path.join())
// console.log(path.sep)

console.log(globIterateSync('./node-glob/dir/**'))
for(const item of globIterateSync('./node-glob/dir/**')){
    console.log(item)
}