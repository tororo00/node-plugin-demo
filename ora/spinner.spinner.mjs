import ora from 'ora'

const spinner = ora('hello')
console.log(spinner.spinner)
// 自定义spinner
spinner.spinner = {
    interval: 2000,
    frames: [
        '😀',
        '😁',
        '😶‍🌫️',
        '😘'
    ]
}
spinner.start()