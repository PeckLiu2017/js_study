// 在严格模式的程序中，eval(..) 在运行时有其自己的词法作用域，意味着其 中的声明无法修改所在的作用域
function foo(str) {
  "use strict";
  eval(str);
  console.log(a); // ReferenceError: a is not de ned
}
foo("var a = 2");
