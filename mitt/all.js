const mitt = require('mitt')
const chalk = require('chalk')

const handleEvent1_1 = () => {
    console.log(chalk.green('event1-1'))
}

const handleEvenet1_2 = () => {
    console.log(chalk.green('event1-2'))
}

const handleEvenet2_1 = () => {
    console.log(chalk.green('event2-1'))
}

const handleEvent2_2 = () => {
    console.log(chalk.green('event2-2'))
}

const map = new Map([
    ['event1', [handleEvent1_1, handleEvenet1_2]],
    ['event2', [handleEvenet2_1, handleEvent2_2]]
])

const emitter = mitt(map)

emitter.emit('event1')
emitter.emit('event2')

