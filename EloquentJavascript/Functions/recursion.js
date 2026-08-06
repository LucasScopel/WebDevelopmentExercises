//My solution
/*
function isEven(n) {
  if (n < 0) n *= -1;

  if (n % 1 !== 0 || n === 1) {
    return false;
  } else if (n === 0) {
    return true;
  } else {
    return isEven(n - 2);
  }
}
*/

//Provided one with some modifications
function isEven(n) {
  if (n % 1 !== 0 || n === 1) {
    return false;
  } else if (n === 0) {
    return true;
  } else if (n < 0) {
    return isEven(-n);
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-50));
