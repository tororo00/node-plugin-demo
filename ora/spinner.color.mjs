import ora from 'ora'
import type { Color } from 'ora'

const spinner = ora('hello')
console.log(spinner.color)
spinner.color = 'red'
spinner.start()