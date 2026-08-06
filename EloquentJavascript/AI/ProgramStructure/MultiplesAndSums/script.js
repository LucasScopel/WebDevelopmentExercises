let accumulator = 0;

for (let counter = 1; counter <= 100; counter++) {
  let message = "";

  if (counter % 4 === 0) message += "Foo";
  if (counter % 6 === 0) message += "Bar";

  if (message) {
    console.log(message);
  } else {
    accumulator += counter;
    console.log(counter);
  }
}

console.log(`\nSum of Printed Numbers: ${accumulator}`);
