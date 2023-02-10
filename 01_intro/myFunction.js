"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNum(num) {
    //   return "hello";
    return num + 4;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
let loginUser = (name, email, isPaid = false) => { };
addNum(5);
getUpper("california");
signUpUser("karan", "karang6@gmail.com", false);
loginUser("k", "k@k.com");
// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
const getHello = (s) => {
    return "";
};
// const heroes = ["thor", "ironMan", "spiderMan"]
const heroes = [1, 2, 3];
heroes.map((hero) => {
    return `hero is ${hero}`;
    // return 2
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
