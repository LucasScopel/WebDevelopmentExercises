function everyWithLoop(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }

  return true;
}

function everyWithSome(array, test) {
  return !array.some((n) => !test(n));
}

console.log(everyWithSome([2, 4, 5], (n) => n < 10));
