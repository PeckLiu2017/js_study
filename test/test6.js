/* 原型委托提升性能
 * create 方法的作用
 * 当实例中属性查找失败时
 * 我们可以继续在 Car.methods 中查找
 */
var Car = function (loc) {
  var obj = Object.create(Car.prototype);
  obj.loc = loc;
  return obj;
};

Car.prototype.move = function () {
  this.loc++;
};

var amy = Car(1);
amy.move();
console.log(amy); // { loc: 2 }
var ben = Car(9);
ben.move();
console.log(ben); // { loc: 10 }
console.log(amy.constructor);
console.log(Car.prototype.constructor);
