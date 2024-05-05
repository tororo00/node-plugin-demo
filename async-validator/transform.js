const { default: Schema } = require('async-validator')

const descriptor = {
    val: {
        type: 'string',
        required: true,
        transform: (value) => {
            console.log(value)
            return value.trim()
        }
    }
}

const validator = new Schema(descriptor)

validator.validate({
    val: '11  '
},(errors,fields) => {
    console.log(errors,fields)
})