const { default: Schema } = require('async-validator')

// 定义描述符
const descriptor = {
    parent: {
        type: 'object',
        fields: {
            children: {
                type: 'array',
                required: true,
                len: 3,
                message: '长度为3'
            },
            name: {
                type: 'string'
            }
        }
    },
    val: {
        type: 'any',
        required: true
    }
}

// 
const validator = new Schema(descriptor)

// 
validator.validate({
    parent: {
        name: 'tom',
        children: ['1','2']
    },
    // val: () => {}
},(errors,fields) => {
    console.log(errors,fields)
})