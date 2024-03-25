import ora from 'ora'

const spinner = ora('hello')
spinner.start()
setTimeout(() => {
    spinner.stopAndPersist({
        symbol: '🌏'
    })
},2000)