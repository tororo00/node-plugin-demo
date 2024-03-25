import { addDays,format } from 'date-fns'

console.log(format(addDays(new Date(),10),'yyyy-MM-dd'))

console.log(format(addDays(new Date().getTime(),10),'yyyy-MM-dd'))