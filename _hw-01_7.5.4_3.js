"use strict";

function objCreation() {
    return Object.create(null);
}

let animals = objCreation();

console.log(animals)    //[object Object] { ... }                
console.log(Object.getPrototypeOf(animals)); //null
