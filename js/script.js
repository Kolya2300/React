'use strict'
/*cycle*/
//let num = 50
/*
do {
    console.log('Hello')
}
while (num < 15){
    num++
}*/

/*for (let i = 1; i < 10; i++) {
    if(i===6){
        console.log('trim')
        continue;
    }
    console.log(i)
}*/

/*nested cycle */
/*for (let i = 0; i < 3; i++) {
    console.log(i)
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}*/
let result = ''
let test = '*'
const length = 8
for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*'
    }
    result += '\n'
}
console.log(result)
test: for (let i = 0; i < 3; i++) {
    console.log(`First level ${i}`)
    for (let j = 0; j < 3; j++) {
        console.log(`Second level ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break test;
            console.log(`Third level ${k}`)
        }
    }
}