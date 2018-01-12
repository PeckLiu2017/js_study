// Here’s the example from earlier, but instead we are using the array’s default iterator to step through the each value in the array.
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
