// click 函数形成 了一个覆盖整个作用域的闭包
// 即使点击回收
// JavaScript 引擎极有可能依然保存着这个结构(取决于具体实现)
function process(data) {
  // 在这里做点有趣的事情
}
var someReallyBigData = {
  //...
};
process(someReallyBigData);
var btn = document.getElementById("my_button");
btn.addEventListener("click", function click(evt) {
  console.log("button clicked");
}, /*capturingPhase=*/ false);


function process(data) {
  // 在这里做点有趣的事情
}
// 在这个块中定义的内容可以销毁了! {
let someReallyBigData = {
  //..
};
process(someReallyBigData);
}
var btn = document.getElementById("my_button");
btn.addEventListener("click", function click(evt) {
  console.log("button clicked");
}, /*capturingPhase=*/ false);
