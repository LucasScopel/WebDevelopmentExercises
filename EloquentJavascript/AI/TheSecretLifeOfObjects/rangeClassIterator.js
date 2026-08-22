/*
Create a class named Range that represents a sequence of numbers 
from a starting point to an ending point.

Requirements:
Constructor: Takes two numbers, start and end 
(inclusive of start, exclusive of end).

Iterable Protocol: Implement [Symbol.iterator] on the class so instances 
can be looped over with a for...of loop or spread into an array using [...].

Iterator Protocol: The next() method must return an object 
with the standard { value, done } structure. 
*/

class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  [Symbol.iterator] = () => {
    let current = this.start;
    const end = this.end;

    return {
      next() {
        if (current < end) {
          return { value: current++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  };
}

const myRange = new Range(1, 4);

for (const num of myRange) {
  console.log(num); // Output: 1, then 2, then 3
}

console.log([...myRange]); // Output: [1, 2, 3]
