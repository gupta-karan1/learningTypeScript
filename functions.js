"use strict";
// named function
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));
console.log(add(2, 3, 5));
// arrow function
const sub = (num1, num2) => num1 - num2;
console.log(sub(9, 5));
// another way to write function
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(2, 3));
