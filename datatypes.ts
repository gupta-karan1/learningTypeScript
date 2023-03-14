let lname: string = "Gupta";
lname = "Singh";
let newName = lname.toUpperCase();
console.log(newName);

let age: number = 30;
age = 27;
age = 27.5;

let dob = "28";

let result = parseInt(dob);
// typescript knows the data type from the value which is called type inference
console.log(result);

let isValid: boolean = true;
console.log(isValid);
