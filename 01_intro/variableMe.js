"use strict";
// syntax for declaring variable in typescript
// let variableName: type = value;
Object.defineProperty(exports, "__esModule", { value: true });
let greetings = "Hello, Karan Gupta";
let myNum = 6;
console.log(greetings);
// number
let userId = 13234214;
userId.toFixed(2);
// there is no need to define type above for the number which is obvious
// boolean
let isLoggedIn = true;
isLoggedIn.valueOf();
// any
let hero;
function getHero() {
    return "thor";
}
hero = getHero();
