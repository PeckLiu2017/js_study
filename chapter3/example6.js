
var foo = true;

if (foo) {
  console.log("===");
  var bar = foo * 2;
  bar = something(bar);
  console.log("000");
  console.log(bar);
}


function something(bar) {
  // var bar = 3;
  console.log("---");
  console.log(bar);
}

var foo = true;

if (foo) {
  console.log("===");
  var bar = foo * 2;
  bar = something(bar);
  console.log("000");
  console.log(bar);
}


function anothing(bar) {
  {
    let bar = 3;
    console.log("---");
    console.log(bar);
  }
}

try {
  undefined(); // 执行一个非法操作来强制制造一个异常
} catch (err) {
  console.log(err); // 能够正常执行!
}
  console.log(err); // ReferenceError: err not found
