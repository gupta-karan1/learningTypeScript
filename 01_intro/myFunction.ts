function addNum(num: number): number {
  //   return "hello";
  return num + 4;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

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

const getHello = (s: string): string => {
  return "";
};

// const heroes = ["thor", "ironMan", "spiderMan"]
const heroes = [1, 2, 3];

heroes.map((hero): string => {
  return `hero is ${hero}`;
  // return 2
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
