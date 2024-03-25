import checkbox from "@inquirer/checkbox"
import chalk from 'chalk'

const answer = checkbox({
  message: "请选择",
  choices: [
    {
      name: 1,
      value: 1,
    },
    {
        name: 2,
        value: 2
    },
    {
        name: 3,
        value: 3
    },
    {
        name: 4,
        value: 4
    },
    {
        name: 5,
        value: 5
    },
    {
        name: 6,
        value: 6
    },
    {
        name: 7,
        value: 7
    },
    {
        name: 8,
        value: 8
    }
  ],
  loop: false
}).then(res => {
    console.log(chalk.green(res))
})
