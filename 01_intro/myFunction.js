"use strict";
exports.__esModule = true;
function addNum(num) {
    //   return "hello";
    return num + 4;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
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
var getHello = function (s) {
    return "";
};
// const heroes = ["thor", "ironMan", "spiderMan"]
var heroes = [1, 2, 3];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
    // return 2
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
