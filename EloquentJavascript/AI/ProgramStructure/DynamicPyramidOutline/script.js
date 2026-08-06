//I did it trying to use the least amount of variables possible

let height = 5;

//For further operations, it's better to decrease x
for (let x = height; x > 0; x--) {
  let y = "";

  // We can get the last position of a # by adding to the height
  // the height itself decreased the value that represents that line
  while (y.length < height + (height - x)) {
    //We subtract by one to avoid adding one position further of what we actually intend
    if (y.length === x - 1 || y.length === height + (height - x) - 1 || x === 1)
      y += "#";
    else y += " ";
  }

  console.log(y);
}
