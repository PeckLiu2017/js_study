const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);
library.set('The Grapes of Wrath', false); // Uncaught TypeError: Invalid value used as weak map key(…)

// If you set an object to null, then you’re essentially deleting the object.
book1 = null;
console.log(library);
