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
const num=10;
(num===50)? console.log("Ok"):console.log("error");
const num=50;
switch (num){
    case 49:console.log('Неверно');
    break;
    case 100:console.log("Неверно")
    break;
    case 50:console.log("В точку");
    break;
    default:console.log("не в этот раз")
}
let cirt=50;
while(cirt<55){
    console.log(cirt);
    cirt++;
}
let cirt=50;
do{
    console.log(cirt);
    cirt++;
}
while (cirt<55);
for (let i=1;i<10;i++){
    if(i===6){
        continue;
    }
console.log(i);
}