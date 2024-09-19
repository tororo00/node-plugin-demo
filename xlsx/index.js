const xlsx = require('xlsx')

/* 
    创建一个新的工作薄

    语法：xlsx.utils.book_new([worksheet],[worksheetName])

    参数：
    worksheet 工作表数据 可选
    worksheetName 工作表名字 可选

    返回值： workbook 一个工作薄
*/
const workbook = xlsx.utils.book_new()
console.log(workbook)
console.log(workbook.SheetNames,'ppp')

/* 
    将工作表附加到工作簿

    语法：
    xlsx.utils.book_append_sheet(workbook, worksheet, sheet_name, roll);

    参数：
    workbook: 工作薄

    worksheet 工作表

    sheet_name 工作表名字

    如果第四个参数roll是 true，该函数将从指定的工作表名称开始。如果工作簿中存在工作表名称，则将通过查找名称主干并递增计数器来选择新的工作表名称。

    返回值：一个字符串，工作表的名字，worksheetName
*/
const ws = xlsx.utils.aoa_to_sheet([[1,2]])
const  worksheetName = xlsx.utils.book_append_sheet(workbook,ws,'excel-')
console.log(worksheetName)

var fmla_arr = xlsx.utils.sheet_to_formulae(ws);
console.log(fmla_arr)

console.log(ws['!cols'])