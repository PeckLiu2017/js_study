/* step 4:remove unnecessary repetition in your code */
// let type = 'quartz';
// let color = 'rose';
// let carat = 21.29;
//
// const gemstone = {
//   type: type,
//   color: color,
//   carat: carat
// };
//
// console.log(gemstone);

// Another way
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = { type, color, carat };

console.log(gemstone);

// add a method to the object
const gemstone = { type, color, carat, calculateWorth() { console.log('Costs is here...'); } };
