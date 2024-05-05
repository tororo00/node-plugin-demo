const { default: Schema } = require('async-validator')

const descriptor = {
    val: {
        type: 'email',
    }
}

const validator = new Schema(descriptor)

validator.validate({
    val: '119857299@qq.com'
},(errors,fields) => {
    console.log(errors,fields)
})