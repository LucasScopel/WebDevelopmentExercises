let height = 5;

for (let x = height; x > 0; x--) {
  let str = "";
  for (let y = 1; y <= x + (height - x); y++) {
    if (y === x || y === x + (height - x)) str += "#";
    else str += " ";
  }
  console.log(str);
}
