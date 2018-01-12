// Working with Maps means konw how to add , delete , update and look up items with Map.
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier')); // false
console.log(members.has('Marcus')); // true

console.log(members.get('Evelyn')); // 75.68
