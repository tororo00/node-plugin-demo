import ora from 'ora'

const spinner = ora('hello')
spinner.start()
setTimeout(() => {
    spinner.info('结束了')
},2000)