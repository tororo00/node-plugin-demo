import select from '@inquirer/select'

const answer = select({
    message: '请选择',
    choices: [
        {
            name: 1,
            value: 1,
            description: '这是选项1'
        },
        {
            name: 2,
            value: 2,
            description: '这是选项2'
        },
        {
            name: 3,
            value: 3,
            description: '这是选项3'
        },
        {
            name: 4,
            value: 4,
            description: '这是选项4'
        },
        {
            name: 5,
            value: 5,
            description: '这是选项5'
        },
        {
            name: 6,
            value: 6,
            description: '这是选项6'
        },
        {
            name: 7,
            value: 7,
            description: '这是选项7'
        },
        {
            name: 8,
            value: 8,
            description: '这是选项8'
        }
    ],
    default: 2,
    pageSize: 8,
    loop: true
}).then(res => {
    console.log(res)
})