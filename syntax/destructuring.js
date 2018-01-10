/* step 2:assign value easily */

// In ES6, you can extract data from arrays and objects into distinct variables using destructuring.
// The example shows extracting values from an array.
const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);

// And this example shows extracting values from an object.
const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};

const type = gemstone.type;
const color = gemstone.color;
const karat = gemstone.karat;

console.log(type, color, karat);


// Destructuring
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);

// Destructuring values from an array
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);

// Destructuring values from an object
const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};

const {type, color, karat} = gemstone;

console.log(type, color, karat);


// Calling getArea() will return NaN.
// When you destructure the object and store the getArea() method into the getArea variable,
// it no longer has access to this in the circle object which results in an area that is NaN.
const circle = {
  radius: 10,
  color: 'orange',
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

let {radius, getArea, getCircumference} = circle;

getArea(); // NaN
