// So we can get data out of a generator by using the yield keyword.
// We can also send data back into the generator, too. We do this using the .next() method:
function* displayResponse() {
    const response = yield;
    console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();

iterator.next(); // starts running the generator function
iterator.next('Hello Udacity Student'); // send data into the generator
// the line above logs to the console: Your response is "Hello Udacity Student"!

function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];

    for (const name of names) {
        // yield *out* each name AND store the returned data into the facts array
        facts.push(yield name);
    }

    return facts;
}

const generatorIterator = getEmployee();

// get the first name out of the generator
let name = generatorIterator.next().value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value;

// The content '${name} is ...' will "replace" the yield keyword with the data that you provided and be pushed into facts array.
name = generatorIterator.next(`${name} is rad!`).value;
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value;

// displays each name with description on its own line
console.log(positions.join('\n'));
// Your response is "Hello Udacity Student"!
// Amanda is cool!
// Diego is awesome!
// Farrin is stupendous!
// James is rad!
// Kagure is impressive!
// Kavita is stunning!
// Orit is awe-inspiring!
// Richard is magnificent!

// Because the first call to .next() passes in some data.
// But that data doesn't get stored anywhere.
// The last call to .next() should have some data since it's being yielded into the last call to toppings.push().
function* createSundae() {
    const toppings = [];

    toppings.push(yield);
    toppings.push(yield);
    toppings.push(yield);

    return toppings;
}

var it = createSundae();
it.next('hot fudge');
it.next('sprinkles');
it.next('whipped cream');
it.next();
// {value: Array(3), done: true}
// done:true
// value:Array(3)
// 0:"sprinkles"
// 1:"whipped cream"
// 2:undefined
// length:3
