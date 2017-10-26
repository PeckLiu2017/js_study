// 这个过程就好像变量和函数声明从它们在代码中出现的位置被“移动” 到了最上面
// 这个过程就叫作提升
a = 2;
var a;
console.log(a); // 2

console.log(b); // undefined
var b = 2;

foo();

function foo() {
  console.log(a); // undefined var a = 2;
}

// 函数声明会被提升，但是函数表达式却不会被提升
foo(); // 不是 ReferenceError, 而是 TypeError: foo is not a function
var foo = function bar() {
  // ...
};

// 上面这段代码被提升之后会被这样理解
var foo;
foo(); // TypeError
bar(); // ReferenceError
foo = function() {
  var bar = ...self... // ...
}
