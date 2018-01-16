var obj = {
    _age: 5,
    _height: 4,
    get age() {
        console.log(`getting the "age" property`);
        console.log(this._age);
    },
    get height() {
        console.log(`getting the "height" property`);
        console.log(this._height);
    }
};

obj.age; // logs 'getting the "age" property' & 5
obj.height; // logs 'getting the "height" property' & 4

// But look what happens when we now add a new property to the object:
// Notice that a getting the "weight" property message wasn't displayed like the age and height properties produced.
obj.weight = 120; // set a new property on the object
obj.weight; // logs just 120

// output:
// getting the "age" property
// 5
// getting the "height" property
// 4
// 120

// With ES6 Proxies, we do not need to know the properties beforehand:
const proxyObj = new Proxy({age: 5, height: 4}, {
    get(targetObj, property) {
        console.log(`getting the ${property} property`);
        console.log(targetObj[property]);
    }
});

proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4

// All well and good, just like the ES5 code, but look what happens when we add a new property:
proxyObj.weight = 120; // set a new property on the object
proxyObj.weight; // logs 'getting the weight property' & 120

// all output:
// getting the "age" property
// 5
// getting the "height" property
// 4
// getting the weight property
// 120
