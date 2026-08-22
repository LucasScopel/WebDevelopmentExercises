class List {
  constructor(value, rest) {
    this.value = value;
    this.rest = rest;
  }

  static constructFromArray(array) {
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
      list = new this(array[i], list);
    }

    return list;
  }
}

class ListIterator {
  constructor(list) {
    this.list = list;
  }

  next() {
    if (this.list == null) {
      return { done: true };
    }
    let value = this.list.value;
    this.list = this.list.rest;
    return { value, done: false };
  }
}

let myList = List.constructFromArray([1, 2, 3]);
let myIterator = new ListIterator(myList);

console.log(myList);
myIterator.next();
console.log(myList);
