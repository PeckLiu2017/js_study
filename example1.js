// 这里有3个作用域
// 整个全局作用域，其中只有一个标识符:foo。
//  foo 所创建的作用域，其中有三个标识符:a、bar 和 b。
//  bar 所创建的作用域，其中只有一个标识符:c。

function foo(a) {
  var b = a * 2;

  function bar(c) {
    console.log(a, b, c);
  }
  bar(b * 3);
}
foo(2); // 2, 4, 12
