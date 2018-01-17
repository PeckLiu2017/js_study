// function* getEmployee() {
//     console.log('the function has started');
//
//     const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
//
//     for (const name of names) {
//         console.log( name );
//     }
//
//     console.log('the function has ended');
// }
//
// const generatorIterator = getEmployee();
// generatorIterator.next();

// Output on chrome terminal:
// the function has started
// Amanda
// Diego
// Farrin
// James
// Kagure
// Kavita
// Orit
// Richard
// the function has ended
// {value: undefined, done: true}

// The Yield Keyword
// The yield keyword is new and was introduced with ES6. It can only be used inside generator functions.
//  yield is what causes the generator to pause. Let's add yield to our generator and give it a try:
// function* getEmployee() {
//     console.log('the function has started');
//
//     const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
//
//     for (const name of names) {
//         console.log(name);
//         yield;
//     }
//
//     console.log('the function has ended');
// }
//
// const generatorIterator = getEmployee();
// generatorIterator.next();

// Output:
// the function has started
// Amanda

// generatorIterator.next();
// Diego

// Yielding Data to the "Outside" World
// Instead of logging the names to the console and then pausing, let's have the code "return" the name and then pause.
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        yield name;
    }

    console.log('the function has ended');
}

const generatorIterator = getEmployee();
let result = generatorIterator.next();
result.value // is "Amanda"

generatorIterator.next().value // is "Diego"
generatorIterator.next().value // is "Farrin"

// It will be called one more time than there are yield expressions in the generator function.
// So, .next() method need to be called 3 times to fully complete the udacity generator function below:
function* udacity() {
    yield 'Richard';
    yield 'James'
}
