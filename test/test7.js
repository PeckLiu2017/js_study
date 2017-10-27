/* 原型委托提升性能
 * create 方法的作用
 * 当实例中属性查找失败时
 * 我们可以继续在 Car.methods 中查找
 */
var Car = function (loc) {
  // this = Object.create(Car.prototype); // 使用 new 关键字之后，程序自动完成这一行
  this.loc = loc;
  // return this; // 使用 new 关键字之后，程序自动完成这一行
};

Car.prototype.move = function () {
  this.loc++;
};

var amy = new Car(1);
amy.move();
console.log(amy); // { loc: 2 }
var ben = new Car(9);
ben.move();
console.log(ben); // { loc: 10 }
