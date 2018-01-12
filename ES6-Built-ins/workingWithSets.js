// Sets can’t be accessed by their index like an array,
// so you use the .size property instead of .length property to get the size of the Set.
const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
console.log(months.size);

// Use the .has() method to check if an item exists in a Set.
console.log(months.has('September'));

// Retrieving All Values
// Finally, use the .values() method to return the values in a Set. The return value of the .values() method is a SetIterator object.
console.log(months.values());
