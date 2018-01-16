function getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
    }

    console.log('the function has ended');
}

getEmployee();

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

// But what if you want to print out the first 3 employee names then stop for a bit,
// then, at some later point, you want to continue where you left off and print out more employee names.
// Pausable Functions:
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log( name );
    }

    console.log('the function has ended');
}
// Notice the asterisk (i.e. *) right after the function keyword? That asterisk indicates that this function is actually a generator!
getEmployee();

// this is the response I get in Chrome:
// getEmployee {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}
