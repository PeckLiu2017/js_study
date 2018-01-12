// 1. Using the MapIterator
// Using both the .keys() and .values() methods on a Map will return a new iterator object called MapIterator.
// You can store that iterator object in a new variable and use .next() to loop through each key or value.
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

let iteratorObjForKeys = members.keys();
console.log(iteratorObjForKeys.next());
let iteratorObjForValues = members.values();
console.log(iteratorObjForValues.next());

// 2. Using a for...of Loop
// Your second option for looping through a Map is with a for...of loop.
for (const member of members) {
  console.log(member);
}
// However, when you use a for...of loop with a Map,
// you don’t exactly get back a key or a value. Instead,
// the key-value pair is split up into an array where the first element is the key and the second element is the value.
// If only there were a way to fix this?
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

for (const member of members) {
    const [key, value] = member;
    console.log(key, value);
}

// 3. Using a forEach Loop
// Your last option for looping through a Map is with the .forEach() method.
members.forEach((key, value) => console.log(key, value));
// 'Evelyn' 75.68
// 'Liam' 20.16
// 'Sophia' 0
// 'Marcus' 10.25
