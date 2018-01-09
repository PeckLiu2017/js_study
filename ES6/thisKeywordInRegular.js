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




// this in regular case
// // constructor
// function IceCream() {
//   this.scoops = 0;
// }
//
// // adds scoop to ice cream
// IceCream.prototype.addScoop = function() {
//   setTimeout(function() {
//     this.scoops++;
//     console.log('scoop added!');
//   }, 500);
// };
//
// const dessert = new IceCream();
// dessert.addScoop();
// // The function passed to setTimeout() is called without new, without call(), without apply(), and without a context object.
// console.log(dessert.scoops); // 0
// // That means the value of this inside the function is the global object and NOT the dessert object.
// // So what actually happened was that a new scoops variable was created (with a default value of undefined)
// // and was then incremented (undefined + 1 results in NaN):
// console.log(scoops); // NaN

// One way around this is to use closure:
// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  const cone = this; // sets `this` to the `cone` variable
  setTimeout(function() {
    cone.scoops++; // references the `cone` variable
    console.log(dessert.scoops); // 1
    console.log('scoop added!');
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();
