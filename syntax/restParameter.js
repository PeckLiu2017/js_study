//  Rest parameter, a way to bundle multiple elements back into an array
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
// The values of the items will be enclosed in brackets
console.log(total, subtotal, tax, items); // 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]

// Variadic functions
// Another use case for the rest parameter is when you’re working with variadic functions.
// Variadic functions are functions that take an indefinite number of arguments.
function sum(...nums) {
  let total = 0;
  for(const num of nums) {
    total += num;
  }
  return total;
}

console.log(sum(10, 36)); // 46
