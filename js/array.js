'use strict'
let arr = [1,20,3,4,6]
arr.sort((a,b)=>a-b)
console.log(arr)
/*
arr.pop()
arr.push(10)
console.log(arr)
for (const number of arr) {
    console.log(number)
    if(number == 4) break
}

arr.forEach((item, i, arr)=>{
    console.log(`${i}: ${item} in arr ${arr}`)
})*/
// const str = prompt('', '')
// const products  = str.split(', ')
// console.log(products.join('; '))

let str = ['a', 'ac', 'b', 'a']

str.sort((a,b) => {
    return a.localeCompare(b)
} )
console.log(str)