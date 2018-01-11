// const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function (name) {
//   return name.toUpperCase();
// })

// const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
//   name => name.toUpperCase()
// );
// 上述代码的唯一变化是 map() 方法内的代码。它将普通函数换成了箭头函数。
// 它是 Array 原型上的方法。向其传递一个函数，它会对数组中的每个元素调用该函数。然后从每个函数调用中收集返回的值，并生成新的数组。
// console.log(upperizedNames);

// In fact, Arrow functions' full name is "arrow function expressions", so they can only be used where an expression is valid. This includes being:
// stored in a variable,
// passed as an argument to a function,
// and stored in an object's property.
const greet = name => `Hello ${name}!`;
// console.log(greet('Asser'));

// quantities of parameters
// If you recall, the parameter list appears before the arrow function's arrow (i.e. =>).
// If there's only one parameter in the list, then you can write it just like the example above.
// But, if there are two or more items in the parameter list, or if there are zero items in the list,
// then you need to wrap the list in parentheses:

// empty parameter list requires parentheses
const sayHi = () => console.log('Hello Udacity Student!');
// console.log(sayHi());

// multiple parameters requires parentheses
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
console.log(orderIceCream('chocolate', 'waffle'));

// If you need more than just a single line of code in your arrow function's body, then you can use the "block body syntax".
// Since the arrow function uses curly braces, there has to be a return in there somewhere for something to actually be returned.
// If not, there shouldn't be a 'return' in there.
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});

console.log(upperizedNames);

// Important things to keep in mind with the block syntax:
// it uses curly braces to wrap the function body
// and a return statement needs to be used to actually return something from the function.
