import ora from 'ora'

const spinner = ora('hello')
spinner.prefixText = '😄'
spinner.start()