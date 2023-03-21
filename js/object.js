'use strict'
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function (){
        console.log('function')
    }
}
options.makeTest()
console.log(Object.keys(options))

const {border, bg} = options.colors
console.log(border)


/*
let counter = 0
for (const key in options) {
    if (typeof options[key] === 'object') {
        for (const i in options[key]) {
            console.log(` ${i} : ${options[key][i]}`)
        }
    }else{
        console.log(` ${key} : ${options[key]}`)
        counter++
    }
}


console.log(counter)*/

