/*
Exercise 1: Bank Account Guard (Basic Get/Set + Private State)
Goal: Create a BankAccount class that safely manages a balance using private fields and validation.

Requirements:

Define a private field #balance initialized in the constructor.

Implement a getter balance that returns the formatted string: "$<amount>".

Implement a setter balance that only updates #balance if the incoming value 
is a number greater than or equal to 0. If negative, print "Error: Deposit or balance cannot be negative".
*/
/*
class BankAccount {
  #balance;

  constructor(initialAmount) {
    this.#balance = initialAmount;
  }

  get balance() {
    return `$${this.#balance}`;
  }

  set balance(value) {
    if (typeof value !== "number" || value < 0) {
      console.log("Error: Deposit or balance cannot be negative");
      return;
    }
    this.#balance = value;
  }

  transaction(value) {
    if (this.#balance + value >= 0) {
      this.#balance = this.#balance + value;
    } else {
      console.log("Error: Insuficient cash");
    }
  }
}

const myAccount = new BankAccount(0);
console.log(myAccount.balance);

myAccount.balance = 100;
console.log(myAccount.balance);

myAccount.transaction(100);
console.log(myAccount.balance);

myAccount.transaction(-150);
console.log(myAccount.balance);

myAccount.transaction(-150);
console.log(myAccount.balance);
*/

/*
Exercise 2: Static Factory & Unit Converter (Getters + Static)
Goal: Build a Distance class that internally stores distance in meters 
but allows reading in kilometers via a getter, and uses static factory methods for alternate creation.

Requirements:

Define a private field #meters.

The constructor takes meters as an argument and stores it in #meters.

Implement a getter kilometers that returns #meters / 1000.

Implement a static factory method fromKilometers(km) that returns a new Distance instance initialized with meters (km * 1000).
*/
/*
class Distance {
  #meters = 0;

  constructor(meters) {
    this.#meters = meters;
  }

  static fromKilometers(km) {
    return new Distance(km * 1000);
  }

  get meters() {
    return this.#meters;
  }

  get kilometers() {
    return this.#meters / 1000;
  }
}

let houseToCatedral = Distance.fromKilometers(5);
console.log(houseToCatedral.meters);
console.log(houseToCatedral.kilometers);
*/

/*
Exercise 3: User Registry & ID Generator (Private Static + Get/Set)
Goal: Create a User class that automatically generates unique IDs 
using a private static counter and enforces username constraints.

Requirements:

Create a private static field #nextId initialized to 1.

Create private instance fields #id and #username.

In the constructor, assign #id using #nextId, then increment #nextId for the next instance.

Implement a getter id (read-only, no setter).

Implement a getter and setter for username. The setter must verify the input is a non-empty string of at least 3 characters.

Implement a static method resetRegistry() that resets #nextId back to 1.
*/

class User {
  static #nextId = 1;
  #id;
  #username;

  constructor(username) {
    this.#username = username;
    this.#id = User.#nextId;
    User.#nextId++;
  }

  static resetRegistry() {
    User.#nextId = 1;
  }

  get id() {
    return this.#id;
  }

  get username() {
    return this.#username;
  }

  set username(newName) {
    if (newName.trim().length <= 3) {
      console.log("Error: The new name is not valid");
      return;
    }

    this.#username = newName;
  }
}

const u1 = new User("Alice");
const u2 = new User("Bob");

console.log(u1.id, u1.username); // Should output: 1 "Alice"
console.log(u2.id, u2.username); // Should output: 2 "Bob"

u1.username = "Al"; // Invalid (< 3 chars)
console.log(u1.username); // Should still output: "Alice"

User.resetRegistry();
const u3 = new User("Charlie");
console.log(u3.id); // Should output: 1
