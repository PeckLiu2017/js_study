// How to Create a Map
const employees1 = new Map();
console.log(employees1);  // Map {}

// Modifying Maps
// Unlike Sets, you can’t create Maps from a list of values; instead, you add key-values by using the Map’s .set() method.
const employees2 = new Map();

employees2.set('james.parkes@udacity.com', {
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer'
});
employees2.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees2.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees2);

employees2.delete('julia@udacity.com');
employees2.delete('richard@udacity.com');
console.log(employees2);

// Again, similar to Sets, you can use the .clear() method to remove all key-value pairs from the Map.
// Also, if you try to .delete() a key-value that is not in a Map, you won’t receive an error, and the Map will remain unchanged.
// The .delete() method returns true if a key-value pair is successfully deleted from the Map object,
// and false if unsuccessful. The return value of .set() is the Map object itself if successful.
employees2.clear()
console.log(employees2);
