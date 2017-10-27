/* 函数共享
 * 同时将方法封装到 methods 中
 * 维护方法时只需在 methods 一处修改
 */
// var Car = function(loc) {
//     var obj = { loc:loc };
//     extend(obj,methods);
//     return obj;
// };
//
// var methods = {
//   move : function() {
//       this.loc++;
//   }
// }
//
// function extend(obj,methods) {
//   for (var i in methods) {
//     obj[i] = methods[i]
//   }
// }

var Car = function(loc) {
    var obj = { loc:loc };
    extend(obj,Car.methods);
    return obj;
};

/* Car.methods 只是简单的属性访问，
 * 既不用为每个实例都消耗内存，
 * 也能精简代码
 */
Car.methods = {
  move : function() {
      this.loc++;
  }
}

function extend(obj,methods) {
  for (var i in methods) {
    obj[i] = methods[i]
  }
}


var amy = Car(1);
amy.move();
console.log(amy);
var ben = Car(9);
ben.move();
console.log(ben);
