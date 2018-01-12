// To create a symbol, you write Symbol() with an optional string as its description.
const sym1 = Symbol('apple');
console.log(sym1);

// As for how you how Symbol works, if you compare two symbols with the same description…
const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3);

// Instead of adding another banana to the bowl, our previous banana is overwritten by the new banana being added to the bowl
const bowl1 = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.151 },
  'orange': { color: 'orange', weight: 170.097 },
  'banana': { color: 'yellow', weight: 176.845 }
};
console.log(bowl1);
// { apple: { color: 'red', weight: 136.078 },
//   banana: { color: 'yellow', weight: 176.845 },
//   orange: { color: 'orange', weight: 170.097 } }

//  To fix this problem, we can use symbols.
const bowl2 = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl2);

// { apple: { color: 'red', weight: 136.078 },
//   banana: { color: 'yellow', weight: 176.845 },
//   orange: { color: 'orange', weight: 170.097 }
// }
// { [Symbol(apple)]: { color: 'red', weight: 136.078 },
//   [Symbol(banana)]: { color: 'yellow', weight: 183.15 },
//   [Symbol(orange)]: { color: 'orange', weight: 170.097 },
//   [Symbol(banana)]: { color: 'yellow', weight: 176.845 }
// }
