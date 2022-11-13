var fs = require("readline-sync");
var row = fs.question("enter the number of rows:");
for (let i = 1; i <= row; i++) {
  for (let j = row; j > i; j--) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= i; k++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}
