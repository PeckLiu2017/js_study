var foo = true;
if (foo) {
  var a = 2;
  const b = 3; // 包含在 if 中的块作用域常量
  a = 3; // 正常!
  b = 4; // 错误! TypeError: Assignment to constant variable.
}
console.log(a); // 3
console.log(b); // ReferenceError!
