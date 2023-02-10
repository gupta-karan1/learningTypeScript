const User = {
  name: "karan",
  email: "karan@akr.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "karan", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "react", price: 399 };
}

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createNewUser(user: User): User {
  return { name: "", email: "", isActive: true };
}
createNewUser({ name: "", email: "", isActive: true });
export {};
