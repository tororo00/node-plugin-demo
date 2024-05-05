// const { default: Schema } = require('async-validator')
import Schema from "async-validator"

const descriptor =　{
    name: {
        type: 'enum',
        enum: ['tom','jack','lucy']
    }
}

const validator = new Schema(descriptor)

validator.validate({
    name: 'tom'
},(errors,fields) => {
    console.log(errors,fields)
})