// named function
function add(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));
console.log(add(2, 3, 5));

// arrow function
const sub = (num1: number, num2: number): number => num1 - num2;
console.log(sub(9, 5));

// another way to write function
const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};
console.log(mult(2, 3));
