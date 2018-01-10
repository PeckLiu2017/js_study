// For...of loop is the most concise version of all the for loops.
// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// for (const digit of digits) {
//   console.log(digit);
// }

// You can stop or break a for...of loop at anytime.
// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// for (const digit of digits) {
//   if (digit % 2 === 0) {
//     continue;
//   }
//   console.log(digit);
// }

// And you don’t have to worry about adding new properties to objects.
// The for...of loop will only loop over the values in the object.
Array.prototype.decimalfy = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}

// Prints:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
