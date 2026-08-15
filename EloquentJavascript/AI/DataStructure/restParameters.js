/*
1. Sum All Numbers
Goal: Practice using a single rest parameter in a function.
Write a function sum(...numbers) that takes any number of numerical arguments 
and returns their total sum. If no arguments are passed, it should return 0.
*/
/*
function sum(...numbers) {
  let addition = 0;
  for (let number of numbers) addition += number;

  return addition;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(5));
console.log(sum());
*/

/*
2. Format Words with Prefix and Suffix
Goal: Practice combining multiple positional parameters with a rest parameter.
Write a function wordWithPrefix(prefix, sufix, ...strings) that takes a prefix string as its first parameter, 
a suffix string as its second parameter, and any number of root word strings after them. 
It should return a new array containing each root word formatted 
with the prefix attached to the front and the suffix attached to the end.
*/
/*
function wordFormation(prefix, sufix, ...radicals) {
  let words = [];

  for (let radical of radicals) words.push(prefix + radical + sufix);

  return words;
}

console.log(wordFormation("a", "ecer", "manh", "noit", "do"));
*/

/*
3. Merging and Extending Shopping Lists
Goal: Practice array spreading within new arrays and function calls.
Given two arrays of items, write a function mergeLists(primaryList, secondaryList, ...extraItems) 
that combines both arrays and any extra individual items into a single new array.
*/
/*
function mergeLists(primaryList, secondaryList, ...extraItems) {
  return [...primaryList, ...secondaryList, ...extraItems]; 
}

let dairy = ["milk", "cheese"];
let produce = ["apples", "bananas"];

let fullList = mergeLists(dairy, produce, "bread", "eggs");
console.log(fullList);
*/

/*
4. Updating User Profiles
Goal: Practice object spread syntax and property overrides.
Write a function updateProfile(defaultSettings, userOverrides) that takes a default 
user object and merges it with a second object containing user preferences. 
Then add an updatedAt property with the value "2026-08-07". Remember that properties added later take precedence.
*/

/*
function updateProfile(defaultSettings, userOverrides) {
  return {...defaultSettings, ...userOverrides, updatedAt: "2026-08-07"}; 
}

let defaults = { theme: "light", notifications: true, fontSize: 14 };
let userCustom = { theme: "dark", fontSize: 16 };

console.log(updateProfile(defaults, userCustom));
*/

/*
5. Find the Minimum in Mixed Inputs
Goal: Combine rest parameters and array spreading in function calls.
Write a function findMin(firstNum, ...restNums) that accepts at least one number directly, 
but can also take additional numbers. Inside findMin, 
use Math.min along with the spread operator to find and return the smallest number among all passed values.
*/
/*
function findMin(firstNum, ...restNums) {
  return Math.min(firstNum, ...restNums);
}

let dynamicScores = [12, 45, 3, 88];

console.log(findMin(100, ...dynamicScores, 8));
*/
