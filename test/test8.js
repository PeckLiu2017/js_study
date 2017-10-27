/* 原型委托提升性能
 * create 方法的作用
 * 当实例中属性查找失败时
 * 我们可以继续在 Car.methods 中查找
 */
var Car = function(loc) {
  var obj = {loc: loc};
  obj.move = function() {
    obj.loc++;
  };
  return obj;
};

var Van = function(loc) {
  var obj = Car(loc);
  obj.grab = function() {
    /**/
  };
  return obj;
}

var Cop = function(loc) {
  var obj = Car(loc);
  obj.call = function() {
    /**/
  };
  return obj;
}

var amy = Van(1);
amy.move();
console.log(amy); // { loc: 2 }
var ben = Van(9);
ben.move();
console.log(ben); // { loc: 10 }
var cal = Cop(2);
cal.move();
cal.call();
console.log(cal); // { loc: 10 }
