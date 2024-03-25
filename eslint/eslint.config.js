const standard = require('eslint-config-standard')
const promise = require('eslint-plugin-promise')
const js = require('@eslint/js')
const react = require('eslint-plugin-react')
const reactRecommended = require('eslint-plugin-react/configs/recommended');

console.log(standard)
// console.log(promise)
// console.log(js)
// console.log(react)
console.log(reactRecommended)

module.exports = [
    reactRecommended,
    {
        rules: {
            'no-var': 'warn'
            // 'no-console': 'warn',
            // 'semi': 'error'
        },
        plugins: {
            
        },
        // languageOptions: {
        //     globals: {
        //         // ...standard.globals
        //     }
        // }
    }
]