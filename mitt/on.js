const mitt = require('mitt')

const emitter = mitt()

emitter.on('event1', () => {
    console.log('event1')
})

emitter.emit('event1')