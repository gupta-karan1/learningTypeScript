// named function
function add(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

// use the ? marker with the variable to make it optional otherwise passing two arguments where 3 parameters are required will create an error'
// here num3 is the optional parameter

console.log(add(2, 3));
console.log(add(2, 3, 5));

// arrow function
const sub = (num1: number, num2: number, num3: number = 10): number =>
  num1 - num2 - num3;
// you can define a default value to a variable where the argument won't be passed
// num3 is the required parameter

console.log(sub(9, 5));
// if num3 argument is passed, that value will be used
console.log(sub(9, 5, 3));

// another way to write function
const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};
console.log(mult(2, 3));

// rest parameters

function add2(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1, 2, 3, 4, 5];

console.log(add2(2, 3, ...numbers));

// generic function

function getItems<Type>(items: Type[], item2: Type[]): Type[] {
  return new Array<Type>().concat(items, item2);
}

let concatNumbers = getItems<number>([1, 2, 3, 4, 5], [1, 2, 3]);
console.log(concatNumbers);

let concatStrings = getItems<string>(["A", "B", "C"], ["E", "F"]);
console.log(concatStrings);
