"use strict";
alert('Hello');
let numberOffilms=prompt ('Сколько фильмов вы посмотрели?','');
console.log(numberOffilms);
let personalMovieDB={
     count:numberOffilms,
     movies:{},
     actors:{},
     genres:{},
     private:false
};

let pervyi=prompt("Один из последних просмотренных фильмов?", ''),
    vtoroi=prompt("На сколько его оцените?", ''),
    q=prompt("Один из последних просмотренных фильмов?", ''),
    w=prompt("На сколько его оцените?", '')
personalMovieDB.movies[q]=w;  
personalMovieDB.movies[pervyi]=vtoroi;  
console.log(personalMovieDB);