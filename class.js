"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    // class methods
    getNameWithAddress() {
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
