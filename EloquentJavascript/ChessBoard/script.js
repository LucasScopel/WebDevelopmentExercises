let evenLine = "";
let oddLine = "";
let chessBoard = "";
let grid = 7;
let counter = 0;

while (counter < grid) {
  evenLine.length % 2 == 0 ? (evenLine += " ") : (evenLine += "#");
  oddLine.length % 2 == 0 ? (oddLine += "#") : (oddLine += " ");
  counter++;
}
evenLine += "\n";
oddLine += "\n";

counter = 0;
while (counter < grid) {
  counter % 2 == 0 ? (chessBoard += evenLine) : (chessBoard += oddLine);
  counter++;
}

console.log(chessBoard);

//come back later to do a nested loop solution
