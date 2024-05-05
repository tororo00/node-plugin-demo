const { default: Schema } = require('async-validator')

const descriptor = {
    val1: {
        type: 'string',
        required: true,
        whitespace: true,
        message: '不可以包含空格'
    },
    val2: {
        type: 'string',
        required: true,
        whitespace: false
    }
}

const validator = new Schema(descriptor)

// val1和val2都只包含空格的情况下val2可以通过验证，val1不能通过验证。
validator.validate({
    val1: ' ',
    val2: ' '
},(errors,fields) => {
    console.log(errors,fields)
})