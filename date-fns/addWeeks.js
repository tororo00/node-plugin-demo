import { addWeeks,format } from 'date-fns'

console.log(format(addWeeks(new Date(),1),'yyyy-MM-dd'))