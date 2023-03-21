/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания





/*
    //first method
    let lastOfFilms
    let reviewOfFilms
question: for (let i = 0; i < numberOfFilms; i++) {

    do {
        lastOfFilms = prompt('Какой последний фильм ты смотрел?', '')
    }while(lastOfFilms.length > 50 && !lastOfFilms && lastOfFilms === null || lastOfFilms === '')

    while (!reviewOfFilms){
        reviewOfFilms = +prompt('На сколько оцените его?', '')
    }

    personalMovieDB.movies[`Films: ${lastOfFilms}`] = `reviews: ${reviewOfFilms}`
    if(personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов')
    }else if(personalMovieDB.count > 10 && personalMovieDB.count <= 30){
        console.log('Вы классический зритель')
    }else if(personalMovieDB.count < 30){
        console.log('Вы киноман')
    }else{
        console.log('Error')
    }

}
console.log(personalMovieDB)*/
/*
//second method
for (let i = 0; i < 2; i++) {
    const lastOfMovies = prompt('Какой последний фильм')
    const reviewOfMovies = +prompt('Review')

    if(lastOfMovies != null && reviewOfMovies != null && reviewOfMovies != '' && lastOfMovies.length < 50){
        personalMovieDB.movies[lastOfMovies] = reviewOfMovies
        alert(`Films: ${personalMovieDB.movies[lastOfMovies]} \nreviews:${reviewOfMovies}`)
    }else{
        i--;
    }
}

if(personalMovieDB.count <= 10){
    alert('Просмотрено довольно мало фильмов')
}else if(personalMovieDB.count > 10 && personalMovieDB.count <=30){
    alert('Вы классический зритель')
}else if(personalMovieDB.count > 30){
    alert('Вы киноман')
}else {
    alert('Error, sorry')
}*/
/*
for (let i = 0; i < 2; i++) {
    const lastOfMovies = prompt('Какой последний фильм')
    const reviewOfMovies = +prompt('Review')
    do{
        personalMovieDB.movies[lastOfMovies] = reviewOfMovies
    } while(lastOfMovies != null && reviewOfMovies != null  && lastOfMovies.length > 50)
}
console.log(personalMovieDB.movies)


if(personalMovieDB.count <= 10){
    alert('Просмотрено довольно мало фильмов')
}else if(personalMovieDB.count > 10 && personalMovieDB.count <=30){
    alert('Вы классический зритель')
}else if(personalMovieDB.count > 30){
    alert('Вы киноман')
}else {
    alert('Error, sorry')
}*/


let numberOfFilms;
function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
     while (!numberOfFilms || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
     }
}
start()
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const lastOfMovies = prompt('Какой последний фильм').trim()
        const reviewOfMovies = +prompt('Review')

        if(lastOfMovies != null && reviewOfMovies != null && reviewOfMovies != '' && lastOfMovies.length < 50){
            personalMovieDB.movies[lastOfMovies] = reviewOfMovies
            console.log('done')
        }else{
            i--;
            console.log('error')
        }
    }
}
    console.log(personalMovieDB)

rememberMyFilms()


function detectPersonLevel (){
    if(personalMovieDB.count <= 10){
        alert('Просмотрено довольно мало фильмов')
    }else if(personalMovieDB.count > 10 && personalMovieDB.count <=30){
        alert('Вы классический зритель')
    }else if(personalMovieDB.count > 30){
        alert('Вы киноман')
    }else {
        alert('Error, sorry')
    }
}
detectPersonLevel()

function showMyDB(obj) {
    if(obj.privat === false){
        console.log(obj)
    }
}
showMyDB(personalMovieDB)



const genres = () =>{
    for (let i = 1; i < 5; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Enter your favorite movies in order ${i}`)
    }
}
genres()


