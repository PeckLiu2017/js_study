// A JavaScript Promise is created with the new Promise constructor function - new Promise().
// But once that's all done, how does JavaScript notify us that it's finished and ready for us to pick back up?
// It does that by passing two functions into our initial function. Typically we call these resolve and reject.
new Promise(function () {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        
        // So the reject method is used when the request could not be completed.
        // Notice that even though the request fails,
        // we can still return data - in this case we're just returning text that says we don't have the desired ice cream flavor.
        if ( /* iceCreamConeIsEmpty(flavor) */ ) {
            reject(`Sorry, we're out of that flavor :-(`);
        }
        // typically the word "resolve" is used to indicate that this function should be called when the request completes successfully.
        resolve(sundae);
    }, Math.random() * 2000);
});

// Promises Return Immediately
// The first thing to understand is that a Promise will immediately return an object.
const myPromiseObj = new Promise(function (resolve, reject) {
    // sundae creation code
});
// That object has a .then() method on it that we can use to have it notify us if the request we made in the promise was either successful or failed.
mySundae.then(function(sundae) {
    console.log(`Time to eat my delicious ${sundae}`);
}, function(msg) {
    console.log(msg);
    self.goCry(); // not a real method
});
