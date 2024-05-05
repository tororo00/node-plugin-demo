const { default: Schema } = require('async-validator')

const descriptor = {
    val: {
        type: 'integer',
        required: true
    }
}

const validator = new Schema(descriptor)

validator.validate({
    val: 100.1
},(errors,fields) => {
    console.log(errors,fields)
})

validator.validate({
    val: 100
},(errors,fields) => {
    console.log(errors,fields)
})