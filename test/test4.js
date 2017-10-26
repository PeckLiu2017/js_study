/* 类实例的创建也可能导致内存消耗的问题
 * 这时可以把重复用到的代码提取出来
 * 并用this 获取访问权限
 */
var Car = function(loc) {
    var obj = { loc:loc };
    extend(obj,methods);
    return obj;
};

var methods = {
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
