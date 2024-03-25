import ora from "ora";

const spinner = ora('😊')

console.log(spinner.text)
spinner.text = '🍉'
spinner.start()