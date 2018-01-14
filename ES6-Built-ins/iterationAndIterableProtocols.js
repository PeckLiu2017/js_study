// Here’s the example from earlier, but instead we are using the array’s default iterator to step through the each value in the array.
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());

// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }

// iterator for Object
const james = {
    name: 'James',
    height: `5'10"`,
    weight: 185,
};

james[Symbol.iterator] = function() {
  const keys = Object.keys(this);
  return { // this is the iterator object, returning elements
    next: function() {
      if (this._index <= keys.length-2) {
        this._index += 1;
        // console.log(`this._index: ${this._index},key: ${keys[this._index-1]}, value: ${james[keys[this._index-1]]}`);
        return { key: keys[this._index-1], value: james[keys[this._index-1]], done: false };
      } else {
        return { key: keys[this._index], value: james[keys[this._index]], done: true };
      }
    },
    _index: 0
  };
};

const iterator = james[Symbol.iterator]();
console.log(iterator.next()); // 'James'
console.log(iterator.next()); // `5'10`
console.log(iterator.next()); // 185
