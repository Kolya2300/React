'use strict'
function showFirstMessage (text) {
    console.log('Hello World')
    console.log(text)
}
showFirstMessage('Yes')

    let num = 20
console.log(calculateNumbers(2,3))
function calculateNumbers(first, second) {
  return first + second;
}


function ret() {
    let num = 50
    return num
}
const another = ret()
console.log(another)

const logger = function (){
    console.log('Kolya')
};
logger()

const arrowFn = (first, second) => first + second

const usdCurr = 28
const eurCurr = 30
const discount = 0.9;
const convert = (amount, curr) =>{
    let result = curr * amount
    return result
}
function promotion (result){
    console.log(result * discount)
    return function hello(){
        console.log('fsdfsd')
    }
}

console.log(convert(500, usdCurr))
const res = convert(500, usdCurr)
promotion(res)

function test (){
    for (let i = 0; i < 10; i++) {
        console.log(i)
        if(i === 3) return
    }
    console.log('finish')
}
test()


function doNothing() {}

console.log(doNothing() === undefined)