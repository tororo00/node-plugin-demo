import { z } from 'zod'

console.log(z.string())

const mySchema = z.string()
const mySchema1 = z.number()
const mySchema2 = z.bigint()

type s = z.infer<typeof mySchema>

const str: s = '1'

type n = z.infer<typeof mySchema1>

type b = z.infer<typeof mySchema2>

const mySchema3 = z.string().email({ message: "Invalid email address" });

console.log(mySchema3.safeParse('119857299@qq.com'))

const mySchema4 = z.object({
    name: z.string(),
    age: z.number()
})

console.log(mySchema4.safeParse({
    name: 'tom',
    age: '20'
}))

const mySchema5 = z.object({
    name: z.string(),
    age: z.number()
})

const partialMySchema5 = mySchema5.partial()

type p = z.infer<typeof partialMySchema5>

console.log(partialMySchema5.safeParse({
    name: 'tom',
    age: 20
}))