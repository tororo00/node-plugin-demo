import { z } from "zod";


// 创建一个字符串类型的验证器
const schema1 = z.string()

// 创建一个数字类型的验证器
const schema2 = z.number();

// 
const schema3 = schema1.or(schema2);

console.log(schema3.safeParse("1111"));
console.log(schema3.safeParse(11))