"use strict";
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello")
    }
};
const john = { 
    health: 100
};

john.__proto__ = soldier;
john.sayHello();
console.log(john.sayHello);