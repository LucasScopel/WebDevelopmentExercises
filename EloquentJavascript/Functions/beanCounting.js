// Solution according to the instructions
/*
function countChar(string, letter) {
  let counter = 0;

  for (let position = 0; position < string.length; position++) {
    if (string[position] === letter) counter++;
  }

  return counter;
}

  function countBs(string) {
  return countChar(string, "B");
}
*/

// Addapted version to apply closure property tahught previously on this chapter
function countChar(letter) {
  return (string) => {
    let counter = 0;

    for (let position = 0; position < string.length; position++) {
      if (string[position] === letter) counter++;
    }

    return counter;
  };
}

const countBs = countChar("B");
const countKs = countChar("k");

console.log(countBs("BBBs"));
console.log(countKs("kakkerlak"));
