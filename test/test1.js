/* 每次调用 carlike 都会创建新的函数 move
 * 这会消耗很多内存
 * 但也拥有 move 的访问权限
 * 所以不再需要 this
 */
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
        this.loc++;
    };
    return obj;
};

var amy = carlike({}, 1);
amy.move();
console.log(amy);
var ben = carlike({}, 9);
ben.move();
console.log(ben);
