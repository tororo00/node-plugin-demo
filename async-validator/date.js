const { default: Schema } = require('async-validator')

const descriptor = {
    val: {
        type: 'date',
        required: true
    }
}

const validator = new Schema(descriptor)

validator.validate({
    val: new Date()
},(errors,fields) => {
    console.log(errors,fields)
})