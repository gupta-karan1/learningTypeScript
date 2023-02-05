// syntax for declaring variable in typescript
// let variableName: type = value;

let greetings: string = "Hello, Karan Gupta";
let myNum = 6;
console.log(greetings);

// number
let userId: number = 13234214;
userId.toFixed(2);

// there is no need to define type above for the number which is obvious

// boolean
let isLoggedIn: boolean = true;
isLoggedIn.valueOf();

// any
let hero: string;
function getHero() {
  return "thor";
}

hero = getHero();

export {};
