import ora from 'ora'

const spinner = ora('hello')
spinner.start()
console.log(spinner.isSpinning)