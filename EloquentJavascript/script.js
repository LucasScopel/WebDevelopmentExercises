/*
let string;
let counter;

//for loop
console.log("=== FOR LOOP ===");

string = "";
counter = 0;

for (counter; counter < 7; counter++) {
  string += "#";
  console.log(string);
}

console.log();

//while loop
console.log("=== WHILE LOOP ===");

string = "";
counter = 0;

while (counter < 7) {
  string += "#";
  console.log(string);
  counter++;
}

console.log();

//do while loop
console.log("=== DO WHILE LOOP ===");

string = "";
counter = 0;

do {
  string += "#";
  console.log(string);
  counter++;
} while (counter < 7);
*/

//optimized version
let optimizedString = "";

//for loop
console.log("=== FOR LOOP ===");
for (
  optimizedString = "#";
  optimizedString.length <= 7;
  optimizedString += "#"
) {
  console.log(optimizedString);
}

console.log();

//while loop
console.log("=== WHILE LOOP ===");

optimizedString = "#";

while (optimizedString.length <= 7) {
  console.log(optimizedString);
  optimizedString += "#";
}

console.log();

//do while loop
console.log("=== DO WHILE LOOP ===");

optimizedString = "#";

do {
  console.log(optimizedString);
  optimizedString += "#";
} while (optimizedString.length <= 7);
