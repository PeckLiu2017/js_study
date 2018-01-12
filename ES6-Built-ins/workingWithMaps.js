// Working with Maps means konw how to add , delete , update and look up items with Map.
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

// After you’ve built your Map, you can use the .has() method to check if a key-value pair exists in your Map by passing it a key.
console.log(members.has('Xavier')); // false
console.log(members.has('Marcus')); // true

// And you can also retrieve values from a Map, by passing a key to the .get() method.
console.log(members.get('Evelyn')); // 75.68
