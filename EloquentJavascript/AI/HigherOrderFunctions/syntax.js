/*
function myFilter(array, test) {
  let newArray = [];

  for (let element of array) {
    if (test(element)) {
      newArray.push(element);
    }
  }

  return newArray;
}

console.log(myFilter([12, 5, 8, 130, 44, 3, 9, 10], (n) => n > 10));

console.log(
  myFilter(["apple", "cat", "banana", "dog", "elephant"], (n) => n.length > 4),
);

console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], (n) => !(n % 2)));
*/

/*
function myArrayMap(array, transform) {
  let newArray = [];

  for (let element of array) {
    newArray.push(transform(element));
  }

  return newArray;
}

console.log(myMap([10, 20, 30], (n) => n * 1.15));
*/

/*
function myMap(object, transform) {
  let array = [];

  for (let key in object) {
    if (typeof object[key] === "object" && object[key] !== null) {
      array = array.concat(myMap(object[key], transform));
    } else if (transform(key)) {
      array.push(object[key]);
    }
  }

  return array;
}



let obj = { obj1: { name: "Alice", age: 25 }, obj2: { name: "Bob", age: 30 } };

console.log(myMap(obj, (n) => n === "name"));
*/
