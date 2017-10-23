// for 循环头部的 let 不仅将 i 绑定到了 for 循环的块中
// 事实上它将其重新绑定到了循环 的每一个迭代中
// 确保使用上一个循环迭代结束时的值重新进行赋值
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i); // ReferenceError

// {
//   let j;
//   for (j = 0; j < 10; j++) {
//     let i = j; // 每个迭代重新绑定!
//     console.log(i);
//   }
// }


var foo = true,
  baz = 10;
if (foo) {
  var bar = 3;
  // 为什么这里的 var 下面可以用呢？
}
if (baz > bar) {
  console.log(baz);
}


var foo = true,
  baz = 10;
if (foo) {}

{
  let bar = 3;
  if (baz > bar) { // <-- 移动代码时不要忘了 bar!
    console.log(baz);
  }
}
