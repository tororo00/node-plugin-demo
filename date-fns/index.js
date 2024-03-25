import { format,isBefore } from "date-fns";

console.log(format(new Date(),'yyyy-MM-dd'))
console.log(format(new Date(),'yyyy/MM/dd'))
console.log(format(new Date(),'MM/yyyy'))
console.log(format(new Date,'MMM'))
console.log(format(new Date(),'MMMM'))
console.log(format(new Date(),'M'))
console.log(format(new Date(),'MM'))
console.log(format(new Date(),'Mo'))
console.log(format(new Date(),'MMMMM'))

console.log(format(new Date(),'L'))

console.log(format(new Date(),'d'))

console.log(format(new Date(),'E..EEE'))

console.log(format(new Date(),'EEEE'))

console.log(isBefore(new Date('2023/02/01'),new Date('2023/03/01')))
console.log(isBefore(new Date('2023/02/01').getTime(),new Date('2023/03/01').getTime()))