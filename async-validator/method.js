const {default: Schema } = require('async-validator')

const descriptor = {
    val: {
        type: 'method'
    },
    url: {
        type: 'url'
    }
}

const validator = new Schema(descriptor)

validator.validate({
    val: () => {},
    url: 'http://localhost:3000'
},(errors,fields) => {
    console.log(errors,fields)
})