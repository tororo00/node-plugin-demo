const delegate = require('delegates')

const proto = {
    
}

proto.request = Object.create({
    name: 'tom'
})

console.log(proto)

const a = delegate(proto, 'request').getter('name')

console.log(a)
console.log(proto.request.name)
console.log(proto.name)
