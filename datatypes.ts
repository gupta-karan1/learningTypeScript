let lname: string = "Gupta";
lname = "Singh";
let newName = lname.toUpperCase();
// console.log(newName);

let age: number = 30;
age = 27;
age = 27.5;

let dob = "28";

// let result = parseInt(dob);
// typescript knows the data type from the value which is called type inference
// console.log(result);

let isValid: boolean = true;
// console.log(isValid);

// Arrays

let empList: string[] = [];
empList = ["Raj", "Ravi", "Ramesh"];

let depList: Array<string> = [];

let numList: Array<number>;
numList = [1, 2, 3, 4, 5];

// let result = numList.filter((num) => num > 2);
let result = numList.find((num) => num === 2);

let sum = numList.reduce((acc, num) => acc + num);
// console.log(sum);

let emp = empList.find((emp) => emp === "Ravi");
// console.log(emp);

// console.log(result);

// enum datatype

const enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue;

// tuples
let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNumbs: swapNumbers(10, 20);

// any datatype
let department: any;
department = 23;
department = "IT";
// do not use any until necessary
