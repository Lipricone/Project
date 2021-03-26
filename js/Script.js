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
options.makeTest();
console.log(Object.keys(options).length);
