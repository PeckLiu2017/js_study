// 用函数声明来包装作用域
var a = 2;

function foo() { // <-- 添加这一行
  var a = 3;
  console.log(a); // 3
} // <-- 以及这一行
foo(); // <-- 以及这一行
console.log(a); // 2

// 用函数表达式来包装作用域
// 下面的第二行到第五行表达式中
// 第一个 ( ) 将函数变成表 达式，第二个 ( ) 执行了这个函数
var a = 2;
(function foo() { // <-- 添加这一行
  var a = 3;
  console.log(a); // 3
})(); // <-- 以及这一行
console.log(a); // 2
