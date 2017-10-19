// 代码 foo("var b = 3;", 1)实际上在 foo(..) 内部创建了一个变量 b
// 并遮蔽了外部(全局)作用域中的同名变量
function foo(str, a) {
  eval(str); // 欺骗! console.log( a, b );
}
var b = 2;
foo("var b = 3;", 1); // 1, 3
