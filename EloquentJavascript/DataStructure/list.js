const prepend = (value, list) => ({ value, rest: list });

//Non recursive version
/*
const nth = (list, index) => {
  if (index < 0) return undefined;

  let currentList = list;
  let indexCounter = 0;

  while (indexCounter < index && currentList.rest != null) {
    currentList = currentList.rest;
    indexCounter++;
  }

  return indexCounter === index ? currentList.value : undefined;
};
*/

//Recursive version
const nth = (list, index) => {
  if (index === 0) return list.value;
  else if (index < 0 || list.rest === null) return undefined;

  return nth(list.rest, index - 1);
};

const arrayToList = (array) => {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = prepend(array[i], list);
  }

  return list;
};

const listToArray = (list) => {
  let array = [];

  for (let currentList = list; currentList; currentList = currentList.rest) {
    array.push(currentList.value);
  }

  return array;
};

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
