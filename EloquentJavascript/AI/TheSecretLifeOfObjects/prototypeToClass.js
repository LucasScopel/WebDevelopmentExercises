/*
Exercise 1: Convert Prototype Notation to Modern class Syntax
Below is a constructor defined using the pre-2015 prototype syntax. 
Convert it into ES6 class syntax.

function BankAccount(owner, initialBalance) {
  this.owner = owner;
  this.balance = initialBalance;
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
  console.log(`${this.owner} deposited $${amount}. New balance: $${this.balance}`);
};

BankAccount.prototype.withdraw = function(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
    console.log(`${this.owner} withdrew $${amount}. Remaining balance: $${this.balance}`);
  } else {
    console.log("Insufficient funds!");
  }
};

Task:
Rewrite BankAccount using the modern class keyword.

Define a default property accountType = "Checking" 
directly inside the class body (instance field).

Instantiate a new account using new BankAccount("Alex", 100) and call both methods.
*/

class BankAccount {
  constructor(owner, initialBalance) {
    this.owner = owner;
    this.balance = initialBalance;
  }

  accountType = "Checking";

  deposit(amount) {
    this.balance += amount;
    console.log(
      `${this.owner} deposited ${amount}. New balance: $${this.balance}`,
    );
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `${this.owner} withdrew ${amount}. Remaining balance: $${this.balance}`,
      );
    } else {
      console.log("Insuficient funds");
    }
  }
}

let myAccount = new BankAccount("Alex", 100);
myAccount.deposit(100);
myAccount.withdraw(50);
