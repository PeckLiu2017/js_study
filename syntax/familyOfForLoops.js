// Really the biggest downside of a for loop is having to keep track of the counter and exit condition.
// we’re using the variable i as a counter to keep track of the loop and to access values in the array.
// We’re also using digits.length to determine the exit condition for the loop
// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// for (let i = 0; i < digits.length; i++) {
//   console.log(digits[i]);
// }

// The for...in loop improves upon the weaknesses of the for loop by eliminating the counting logic and exit condition.
// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// for (const index in digits) {
//   console.log(digits[index]);
// }

//  If you add any additional properties to the array's prototype, then those properties will also appear in the loop.
Array.prototype.decimalfy = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}

// prints:
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
// function() {
//  for (let i = 0; i < this.length; i++) {
//   this[i] = this[i].toFixed(2);
//  }
// }

// The forEach loop is another type of for array looping in JavaScript
