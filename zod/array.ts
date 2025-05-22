import { z } from "zod";

const zArray = z.string().array();
console.log(zArray.safeParse([1]))
console.log(zArray.safeParse(["1"]))

const zArray1 = z.boolean().array();
console.log(zArray1.safeParse([true]));

const zArray2 = z.boolean().or(z.number()).or(z.string()).array();
console.log(zArray2.safeParse([true, 1, "2"]));