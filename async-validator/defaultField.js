const { default: Schema } = require('async-validator')

const descriptor = {
    val: {
        type: 'object',
        required: true,
        defaultField: {
            type: 'string'
        }
    }
}

const validator = new Schema(descriptor)

validator.validate({
    val: {
        age: 10
    }
},(errors,fields) => {
    console.log(errors,fields)
})