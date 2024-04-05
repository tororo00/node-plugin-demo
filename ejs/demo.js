const ejs = require('ejs')

ejs.renderFile('./demo.html', { 
    show: false, 
    len: 10, 
    arr: [{ name: 'tom' }, { name: 'jack' }],
    obj: {
        a: 'a',
        b: 'b'
    },
    name: 'tom',
    p: '<p>{{name}}</p>',
    flag :1,
    span: '<span>8888</span>'
}, null, (error, data) => {
    console.log(error)
    console.log(data)
})