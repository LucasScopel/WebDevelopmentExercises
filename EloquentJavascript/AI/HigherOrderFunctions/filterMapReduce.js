/*
Exercise 1: Warm-up (Filter & Map)
Given an array of product objects, write a function that returns 
an array containing only the names of products that are currently in stock.
*/
/*
const inStock = (array) => array.filter((a) => a.inStock).map((a) => a.name);

const inventory = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Headphones", price: 150, inStock: true },
  { name: "Monitor", price: 300, inStock: false },
];

console.log(inStock(inventory));
*/

/*
Write a function that calculates the total value of all items in a shopping cart, 
taking into account the quantity of each item.

I'll also write a function that returns the total value of each item.
*/
/*
const totalItemValue = (item) => item.price * item.quantity;

const totalItemsValue = (cart) =>
  cart.map((obj) => ({ item: obj.item, total: totalItemValue(obj) }));

const cartValue = (cart) => cart.reduce((a, b) => a + b.price * b.quantity, 0);

const cart = [
  { item: "Apple", price: 1.5, quantity: 4 },
  { item: "Banana", price: 0.5, quantity: 6 },
  { item: "Milk", price: 3.0, quantity: 2 },
];

console.log(totalItemsValue(cart));
console.log(cartValue(cart));
console.log(cart);
*/

/*
Exercise 3: The Pipeline Challenge (Filter + Map + Reduce)
You have a list of student records. 
Write a function using method chaining to find the average grade 
of passing students (a passing grade is 60 or higher).
*/
/*
const hasPassed = (students) =>
  students.filter((student) => student.grade >= 60);

const averageGrade = (students) =>
  students.reduce((a, b) => a + b.grade / students.length, 0);

const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 45 },
  { name: "Charlie", grade: 90 },
  { name: "David", grade: 55 },
  { name: "Eva", grade: 70 },
];

console.log(averageGrade(hasPassed(students)));
*/

/*
Exercise 4: Grouping Data (Advanced Reduce)
Write a function using .reduce() that takes 
an array of user objects and groups them by their role.
*/
/*
const usersByRole = (users) => {
  return users.reduce((current, next) => {
    if (!current[next.role]) {
      current[next.role] = [];
    }

    current[next.role].push(next.name);
    return current;
  }, {});
};

const users = [
  { name: "Sarah", role: "admin" },
  { name: "Tom", role: "user" },
  { name: "Julia", role: "admin" },
  { name: "Mark", role: "guest" },
];

console.log(usersByRole(users));
*/
