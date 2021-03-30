"use strict";
const arr=[10, 6, 0, 3, 1, 2];
arr.sort(compareNum);

function compareNum(a, b){
  return a - b;
}
console.log(arr);
