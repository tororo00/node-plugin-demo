const chalk = require('chalk')

const http = require('http')

const server = http.createServer((req,res) => {
    res.end()
})

server.listen(4000,() => {
    console.log('project is running at 4000')
})

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'))

console.log(chalk.blue.bgRed.bold('hello world!'))

console.log(chalk.blue('Hello','World!','Foo','bar','biz','baz'))

// 嵌套样式
console.log(chalk.red('hello',chalk.underline.bgBlue('world') + '!'))

console.log(chalk.dim('hello'))

console.log(chalk.hex('#DEADED').bold('hello'))

console.log(chalk.italic.red('hello'))

console.dir(chalk)

console.log(`
    CPU:${chalk.red('90%')}
    RAM:${chalk.green('10%')}
    DISK:${chalk.blue('30%')}
`)

console.log(chalk.red.bold('hello world'))