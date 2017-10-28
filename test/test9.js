/*
 * 不是 Car(loc) 在全局作用域中执行
 * 也不是分别创建 Car 和 Van 的两个实例
 * 指定函数的执行环境 修改 this
 * this 的意思就是指定当前作用域
 * Car 的参数 this 被绑定到 Van 的实例上
 */
var Car = function(loc){
  this.loc = loc;
}

Car.prototype.move = function () {
  this.loc++;
}

var Van = function (loc) {
  Car.call(this, loc);
}

/* 当你把一个变量或者属性赋值给另一个时
 * javascript 不会做任何拷贝
 * 因为它们是同一个对象
 * 因此在 Var.prototype 增加的方法会被添加到 Car.prototype
 * 所以用 Object.create(Car.prototype) 来实现复制委托
 */
Van.prototype = Object.create(Car.prototype)
Van.prototype.constructor = Van;
Van.prototype.grab = function () {
  /*...*/
}

var zed = new Car(3);
zed.move();
console.log(zed);

var amy = new Van(9);
console.log(amy.loc);
amy.move();
amy.grab();
console.log(amy.constructor);
