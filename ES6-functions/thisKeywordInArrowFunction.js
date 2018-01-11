// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(() => { // an arrow function is passed to setTimeout
    this.scoops++;
    console.log('scoop added!');
    console.log(dessert.scoops); // 1
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();

// a case which 'arrow function' doesn't work
// constructor
function IceCream() {
    this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = () => { // addScoop is now an arrow function
  setTimeout(() => {
    this.scoops++;
    console.log('scoop added!');
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();

// - arrow functions inherit their this value from their surrounding context.
// Outside of the addScoop() method, the value of this is the global object.
// So if addScoop() is an arrow function, the value of this inside addScoop() is the global object.
// Which then makes the value of this in the function passed to setTimeout() also set to the global object!
