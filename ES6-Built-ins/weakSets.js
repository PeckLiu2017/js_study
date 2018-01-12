const student1 = { name: 'James', age: 26, gender: 'male' };
const student2 = { name: 'Julia', age: 27, gender: 'female' };
const student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster1 = new WeakSet([student1, student2, student3]);
console.log(roster1); // Output WeakSet {} in terminal but works well in chrome browser

// roster1.add('Amanda'); // Uncaught TypeError: Invalid value used in weak set(…)

// If you set an object to null, then you’re essentially deleting the object.
// And when JavaScript’s garbage collector runs,
// the memory that object previously occupied will be freed up to be used later in your program.
let student4 = { name: 'James', age: 26, gender: 'male' };
const roster2 = new WeakSet([student4]);
console.log(roster2);

const uniqueFlavors = new WeakSet();
const flavor1 = { flavor: 'chocolate' };
const flavor2 = { flavor: 'orange' };
uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);
uniqueFlavors.add(flavor1);
console.log(uniqueFlavors);  // Output WeakSet {} in terminal but works well in chrome browser
