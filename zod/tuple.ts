import { z } from "zod";

const schema = z.tuple([z.number(), z.string()]);

console.log(schema.safeParse([100, "h"]))