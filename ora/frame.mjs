import ora from 'ora'

const spinner = ora('hello')
console.log(spinner.frame())
spinner.start()