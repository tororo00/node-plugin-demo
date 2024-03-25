import { addBusinessDays,format } from "date-fns";

console.log(format(addBusinessDays(new Date(),2),'yyyy-MM-dd'))