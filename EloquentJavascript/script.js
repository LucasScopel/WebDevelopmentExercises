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
