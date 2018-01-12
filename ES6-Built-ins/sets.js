// The biggest differences between a set and an array are:
//
// Sets are not indexed-based - you do not refer to items in a set based on their position in the set
// items in a Set can’t be accessed individually

// How to Create a Set
const games1 = new Set();
console.log(games1);

const games2 = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games2); // Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}
// Notice the example above automatically removes the duplicate entry "Super Mario Bros." when the Set is created. Pretty neat!
