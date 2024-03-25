import ora from 'ora'

const spinner = ora({
    text: 'hello',
    spinner: 'binary',
    prefixText: '😀',
    suffixText: '🍎'
}).start()