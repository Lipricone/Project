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
// console.log(options.width);
// delete options.name;

// console.log(options);

for (let key in options){
    if (typeof(options[key]==='object')){ 
        for(let i in options[key]){
            console.log (`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {

            console.log (`Свойство ${key} имеет значение ${options[key]}`);
    }
}
