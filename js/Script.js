"use strict";
const options={
    name:'test',
    width:1024,
    height:102,
    colors:{
        border: 'Black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Test");
    }
};
const {border, bg}=options.colors;
console.log(border);
