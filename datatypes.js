"use strict";
let lname = "Gupta";
lname = "Singh";
let newName = lname.toUpperCase();
// console.log(newName);
let age = 30;
age = 27;
age = 27.5;
let dob = "28";
// let result = parseInt(dob);
// typescript knows the data type from the value which is called type inference
// console.log(result);
let isValid = true;
// console.log(isValid);
// Arrays
let empList = [];
empList = ["Raj", "Ravi", "Ramesh"];
let depList = [];
let numList;
numList = [1, 2, 3, 4, 5];
// let result = numList.filter((num) => num > 2);
let result = numList.find((num) => num === 2);
let sum = numList.reduce((acc, num) => acc + num);
// console.log(sum);
let emp = empList.find((emp) => emp === "Ravi");
let c = 2 /* Color.Blue */;
// tuples
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs: swapNumbers(10, 20);
// any datatype
let department;
department = 23;
department = "IT";
// do not use any until necessary
