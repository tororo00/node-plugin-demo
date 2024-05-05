const { default: Schema } = require('async-validator')

const descriptor = {
    name: {
        type: 'number',
        len: 10
    },
    arr: {
        type: 'array',
        len: 3
    }
}

const validator = new Schema(descriptor)

validator.validate({
    name: 10,
    arr: [1,2,3]
},(errors,fields) => {
    console.log('errors',errors)
    console.log('fields',fields)
})