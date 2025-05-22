import { z } from "zod";

const schema1 = z.object({
    name: z.string(),
    age: z.number().max(100).min(1)
})

const schema2 = schema1.omit({age: true})

console.log(schema2.passthrough().safeParse({name: "tom", age: 20}))

