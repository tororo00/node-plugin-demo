import Schema from "async-validator"
import type { Rules } from 'async-validator'

const descriptor: Rules = {
    val: {
        type: 'string',
        required: true,
    }
}

const validator = new Schema(descriptor)

validator.validate({
    val: 10
}, (errors: any, fields: any) => {
    console.log(errors,fields)
})