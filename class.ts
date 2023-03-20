class Employee {
  id: number;

  // #id:number
  // private variables not accessible outside of the class

  name: string;

  address: string;

  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  // class methods
  getNameWithAddress(): string {
    // return this.name + " " + this.address;
    return `${this.name} stays at ${this.address}`;
  }
}

let john = new Employee(1, "John", "Highway 71");
let address = john.getNameWithAddress();

// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";

console.log(john);
console.log(address);

// constructors are used to create instances of classes
// default constructors or parameter constructors
