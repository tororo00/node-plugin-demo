import { z } from "zod";

const fn = (x: string) => { return x.length > 0 }

const schema = z.function().args(z.string()).returns(z.boolean()).implement(fn)

// type A = z.infer<typeof schema>

// console.log(schema.safeParse("pp"))

console.log(schema("pp"))
console.log(schema("pp", "22"))

