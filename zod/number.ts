import { z } from "zod";

const schema = z.number().min(10)
console.log(schema)