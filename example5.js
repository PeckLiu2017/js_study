// 重构第一段代码为第二段
function doSomething(a) {
  b = a + doSomethingElse(a * 2);
  console.log(b * 3);
}

function doSomethingElse(a) {
  return a - 1;
}
var b;
doSomething(2); // 15

// 最小暴露原则重构
function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1;
  }
  var b;
  b = a + doSomethingElse(a * 2);
  console.log(b * 3);
}
doSomething(2); // 15
