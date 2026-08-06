/*
function min(x, y) {
  if (x < y) return x;
  else return y;
}
*/

const min = (x, y) => (x < y ? x : y);

console.log(min(0, 10));
console.log(min(0, -10));
