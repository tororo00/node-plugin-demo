const { default: Schema } = require('async-validator')

const descriptor = {
    name: {
        type: 'string',
        pattern: /[a-z]+/
    }
}

const validator = new Schema(descriptor)

validator.validate({
    name: 'as1'
},(errors,fields) => {
    console.log(errors,fields)
})