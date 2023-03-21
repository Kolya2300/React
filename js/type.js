'use strict'
/*
const str = 'Hello world'
const arr = [1,2,3]
console.log(str.length)
console.log(arr.length)
const fruit = 'Some fruit'
console.log(fruit.indexOf('g', 0))
console.log(str.substr(6, 5))

const num = 12.2
console.log(Math.floor(num))
const numToStr = '12.2px'
console.log(parseFloat(numToStr).toFixed(1))*/
const personalMovieDB = {
    count: 1,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
function showMyDB(obj) {
    if(obj.privat === false){
        console.log(obj)
    }else{
        console.log('Bich')
    }
}
showMyDB(personalMovieDB)
