"use strict";

let obj = {
    first: 1,
    second: 2,
    third: 3,
    4: "fourth"
};

function propCheck(str, obj) {
    return Object.keys(obj).includes(str.toString(), 0);
};

console.log(propCheck('third', obj));   //true
console.log(propCheck('dgdfgd', obj));  //false
console.log(propCheck(5, obj));         //false
console.log(propCheck(4, obj));         //true