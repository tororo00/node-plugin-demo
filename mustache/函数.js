const mustache = require('mustache')
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'./函数.html'),'utf-8',(error,data) => {
    const html = mustache.render(data,{
        name: 'tom',
        wrapped: function(){
            return function(text,render){
                console.log(text,render)
                return render(text).toUpperCase()
            }
        }
    })
    console.log(html)
})