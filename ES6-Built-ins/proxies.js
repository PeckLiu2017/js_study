// A Pass Through Proxy
// The simplest way to create a proxy is to provide an object and then an empty handler object.
var richard1 = {status: 'looking for work'};
var agent1 = new Proxy(richard1, {});

console.log(agent1.status); // returns 'looking for work'
console.log('-----------');

const richard2 = {status: 'looking for work'};
const handler2 = {
    get(target, propName) {
        console.log(target); // the `richard` object, not `handler` and not `agent` -- { status: 'looking for work' }
        console.log(propName); // the name of the property the proxy (`agent` in this case) is checking -- status
        console.log('-----------');
    }
};
const agent2 = new Proxy(richard2, handler2);
agent2.status; // When the code is run on the last line,it will logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)

// Accessing the Target object from inside the proxy
// If we wanted to actually provide the real result, we would need to return the property on the target object:
const richard3 = {status: 'looking for work'};
const handler3 = {
    get(target, propName) {
        console.log(target);
        console.log(propName);
        console.log('-----------');
        return target[propName];
    }
};
const agent3 = new Proxy(richard3, handler3);
agent3.status; // (1)logs the richard object, (2)logs the property being accessed, (3)returns the text in richard.status

// Having the proxy return info, directly
// Alternatively, we could use the proxy to provide direct feedback:
const richard4 = {status: 'looking for work'};
const handler4 = {
    get(target, propName) {
      console.log('-----------');
      return `He's following many leads, so you should offer a contract as soon as possible!`;
    }
};
const agent4 = new Proxy(richard4, handler4);
agent4.status; // returns the text `He's following many leads, so you should offer a contract as soon as possible!` in chrome browser, but will output nothing in ZSH terminal

// With this code, the Proxy doesn't even check the target object, it just directly responds to the calling code.


// The set trap is used for intercepting code that will change a property. The set trap receives: the object it proxies the property that is being set the new value for the proxy
const richard5 = {status: 'looking for work'};
const handler5 = {
    set(target, propName, value) {
        if (propName === 'payRate') { // if the pay is being set, take 15% as commission
            value = value * 0.85;
        }
        target[propName] = value;
    }
};
const agent5 = new Proxy(richard5, handler5);
agent5.payRate = 1000; // set the actor's pay to $1,000
console.log(agent5.payRate); // $850 the actor's actual pay -- 850
