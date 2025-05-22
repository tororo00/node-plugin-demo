import { z } from "zod";

const emailSchema = z.string().email();
console.log(emailSchema.safeParse("1198572499@qq.com"))

const urlSchema = z.string().url();
console.log(urlSchema.safeParse("http://loclalhost:4000"))

const minSchema = z.string().min(4, {message: "长度不够"})
console.log(minSchema.safeParse("00").error)

const emojiSchema = z.string().emoji();

const schema1 = z.string().endsWith("1");
console.log(schema1.safeParse("999"))
