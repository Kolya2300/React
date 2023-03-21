'use strict'
/*function first(){
    setTimeout(()=>{
        console.log('Hello')
    }, 1000)
}
first()
function second(){
    console.log('world')
}
second()*/

function learnJS(lang, callback){
    console.log(`I learn ${lang}`)
    callback()
}
let done = () =>{
    console.log('done')
}
learnJS('JS', done)