// The spread operator, written with three consecutive dots ( ... ),
// is new in ES6 and gives you the ability to expand, or spread, iterable objects into multiple elements.
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books); // Don Quixote The Hobbit Alice in Wonderland Tale of Two Cities


const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes); // 2 3 5 7 11 13 17 19 23 29

// One example of when the spread operator can be useful is when combining arrays.
// If you’ve ever needed to combine multiple arrays, prior to the spread operator, you were forced to use the Array’s concat() method.
// const fruits = ["apples", "bananas", "pears"];
// const vegetables = ["corn", "potatoes", "carrots"];
// // const produce = fruits.concat(vegetables);
// // console.log(produce); // ["apples", "bananas", "pears", "corn", "potatoes", "carrots"]
//
// const produce = [fruits, vegetables];
// console.log(produce); // [ [ 'apples', 'bananas', 'pears' ], [ 'corn', 'potatoes', 'carrots' ] ]  doesn't work


/*
 * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

console.log(produce);
