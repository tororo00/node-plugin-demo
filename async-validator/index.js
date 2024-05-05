const { default: Schema } = require('async-validator')
// import Schema from 'async-validator'

// console.log(typeof Schema.default)
console.log(Schema)

const descriptor = {
    name: {
        type: 'string',
        required: true,
    }
}

const validator = new Schema(descriptor)

// console.log(validator)

validator.validate({
    name: '100'
},(errors,fields) => {
    console.log('errors',errors)
    console.log('fields',fields)
})