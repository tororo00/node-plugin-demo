const figlet = require('figlet')
const chalk  = require('chalk')


figlet('Hello World !',(error,data) => {
    if(error){
        console.log(error)
    }else{
        console.log(chalk.green(data))
    }
})