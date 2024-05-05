const { default: Schema } = require('async-validator')

const descriptor = {
    val: {
        type: 'float',
        required: true
    }
}

const validator = new Schema(descriptor)

validator.validate({
    val: 10.1
},(errors,fields) => {
    console.log(errors,fields)
})