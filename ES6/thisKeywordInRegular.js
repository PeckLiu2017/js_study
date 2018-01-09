// 1. A new object
// If the function is called with new:

const mySundae = new Sundae('Chocolate', ['Sprinkles', 'Hot Fudge']);
// In the code above, the value of this inside the Sundae constructor function is a new object because it was called with new.

// 2. A specified object
// If the function is invoked with call/apply:

const result = obj1.printName.call(obj2);
// In the code above, the value of this inside printName() will refer to obj2 since the first parameter of call() is to explicitly set what this refers to.

// 3. A context object
// If the function is a method of an object:

data.teleport();
// In the code above, the value of this inside teleport() will refer to data.

// 4. The global object or undefined
// If the function is called with no context:

teleport();
// In the code above, the value of this inside teleport() is either the global object or, if in strict mode, it's undefined.
