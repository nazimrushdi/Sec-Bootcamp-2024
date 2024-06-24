let n = 10;
let string = "";

// upper side of diamond
for (i = 1; i <= n; i++) {
  // printing space
  for (j = n; j > i; j = j - 1) {
    string += " ";
  }
  // printing star
  for (k = 0; k < i * 2 - 1; k++) {
    string += "9";
  }
  string += "\n";
}

console.log(string);
console.log(i <= n);

// const poem =
//   "Roses are red,\nViolets are blue,\nJavaScript is awesome,\nAnd so are you!";
// console.log(poem);

// let number = 5;
// number += 3; // Equivalent to number = number + 3;

// console.log(number); // Output: 8
