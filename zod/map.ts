import { z } from "zod";

const zMap = z.map(z.string(), z.number())
console.log(zMap.safeParse(new Map([["1", 1]])))