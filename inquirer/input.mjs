import input from '@inquirer/input'

const answer = input({
    message: '请输入',
    default: 'hello',
    transformer: function(value){
        console.log(value)
        return '--' +value + '--'
    },
    validate: function(value){
        if(value === 'y'){
            return true
        }else{
            return false
        }
    }
}).then(res => {
    console.log(res)
}) 

console.log(answer)