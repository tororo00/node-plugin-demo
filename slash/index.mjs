import slash from 'slash'
import path from 'node:path'

console.log(__filename)
console.log(import.meta.dirname)
console.log('windows',path.join(import.meta.dirname))
console.log('slash=>',slash(path.join(import.meta.dirname)))