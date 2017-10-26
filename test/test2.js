var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
        obj.loc++;
    };
    return obj;
};

var amy = carlike({}, 1);
amy.move();
console.log(amy);
var ben = carlike({}, 9);
ben.move();
console.log(ben);
