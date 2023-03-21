'use strict'
/*let a = 5
let b = a
b += 5
console.log(b)*/
/*
const obj = {
    a: 5,
    b: 1,
    c: {
        c1: {
            b1: 'test'
        }
    }
}
const copy = JSON.parse(JSON.stringify(obj))
const copy2 = structuredClone(obj)
copy.a = 10
copy.c.c1.b1 = 'test2'
copy2.c.c1.b1 = 'test3'
console.log(obj)
console.log(copy)
console.log(copy2)*/
/*
const blog = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...blog, ...blogs, 'test']
console.log(internet)*/

const log = (a, b, c) =>{
    console.log(a)
    console.log(b)
    console.log(c)
}
const num = ['Author','Second book','Year 2019']
log(...num)
const arr = [1,2,3,4,5,6,7,8]
const copyArr = [...arr]
console.log(copyArr)
const newObj = {
    one: 1,
    two: 2,
    three: 3
}
const newObjCopy = {...newObj}
console.log(newObjCopy)