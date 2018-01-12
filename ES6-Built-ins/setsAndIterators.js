// You can use the Set’s default iterator to step through each item in a Set, one by one.
// You can use the new for...of loop to loop through each item in a Set.
const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
const iterator = months.values();

console.log(iterator.next()); // {value: 'January', done: false}
console.log(iterator.next()); // {value: 'February', done: false}

// An easier method to loop through the items in a Set is the for...of loop.
for (const month of months) {
  console.log(month);
}
