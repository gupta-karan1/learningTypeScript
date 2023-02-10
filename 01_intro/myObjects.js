"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "karan",
    email: "karan@akr.com",
    isActive: true,
};
function createUser({ name: string, isPaid: boolean }) { }
createUser({ name: "karan", isPaid: false });
function createCourse() {
    return { name: "react", price: 399 };
}
function createNewUser(user) {
    return { name: "", email: "", isActive: true };
}
createNewUser({ name: "", email: "", isActive: true });
