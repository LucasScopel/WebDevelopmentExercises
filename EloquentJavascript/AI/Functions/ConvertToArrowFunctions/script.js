/*
function add(a, b) {
  return a + b;
}
*/

const add = (a, b) => a + b;

/*
const double = function(num) {
  return num * 2;
};
*/

const double = (num) => num * 2;

/*
function greet() {
  return "Hello, world!";
}
*/

const greet = () => "Hello, world!";

/*
const calculateGrade = function(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else {
    return "C";
  }
};
*/

const calculateGrade = (score) => {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else {
    return "C";
  }
};

/*
const numbers = [1, 2, 3, 4, 5];

const tripled = numbers.map(function(n) {
  return n * 3;
});
*/

const numbers = [1, 2, 3, 4, 5];
const tripled = numbers.map((n) => n * 3);

/*
const createUser = function(id, name) {
  return { id: id, name: name };
};
*/

const createUser = (id, name) => ({ id: id, name: name });
