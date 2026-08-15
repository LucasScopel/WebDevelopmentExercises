const reverseArray = (array) => {
  let reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  /*
  for (element of array) {
    reversedArray.unshift(element);
  }
  */

  return reversedArray;
};

const reverseArrayInPlace = (array) => {
  let value;

  for (let i = 0; i < (array.length - 1) / 2; i++) {
    value = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = value;
  }
};

let myArray = [1, 2, 3];
console.log(myArray);
reverseArrayInPlace(myArray);
console.log(myArray);

console.log(reverseArray([1, 2, 3]));
