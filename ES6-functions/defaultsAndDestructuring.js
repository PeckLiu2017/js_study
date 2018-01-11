// /* destruct arrays */
// function createGrid([width = 5, height = 5]) {
//   return `Generates a ${width} x ${height} grid`;
// }
//
// createGrid([]); // Generates a 5 x 5 grid
// createGrid([2]); // Generates a 2 x 5 grid
// createGrid([2, 3]); // Generates a 2 x 3 grid
// createGrid([undefined, 3]); // Generates a 5 x 3 grid
//
// createGrid(); // throws an error
//
// // Fix the problem of running createGrid()
// // since the array is empty, there's nothing to destructure into width and height,
// // so their default values will apply! So by adding = [] to give the entire parameter a default,
// // the following code will now work:
// function createGrid([width = 5, height = 5] = []) {
//   return `Generates a ${width} x ${height} grid`;
// }
// createGrid(); // Generates a 5 x 5 grid
//
// // Since arrays are positionally based,
// // we have to pass undefined to "skip" over the first argument (and accept the default) to get to the second argument.
// // so, look at object defaults with object destructuring:
//
// // Either default values or assigned values will be used,
// // you can call function with parameter omitted
// function houseDescriptor([houseColor = 'green', shutterColors = ['red']]) {
//   return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
// }
// console.log(houseDescriptor(['green',['white','gray','pink']]));

/* destruct objects */
function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

console.log(createSundae()); // Your sundae has 1 scoop with Hot Fudge toppings.
console.log(createSundae({}));  // Your sundae has 1 scoop with Hot Fudge toppings.
console.log(createSundae({scoops: 2}));  // Your sundae has 2 scoops with Hot Fudge toppings.
console.log(createSundae({scoops: 2, toppings: ['Sprinkles']}));  // Your sundae has 2 scoops with Sprinkles toppings.
console.log(createSundae({toppings: ['Cookie Dough']}));  // Your sundae has 1 scoop with Cookie Dough toppings.
