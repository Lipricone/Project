"use strict";
const options={
    name:'test',
    width:1024,
    height:102,
    colors:{
        border: 'Black',
        bg: 'red'
    }
};
console.log(options.width);
delete options.name;

console.log(options);

for (let key in options){
console.log (`Свойство ${key} имеет значение ${options[key]}`);
}