// 传递一个对象到 IIFE 中
var window = {
  a: 2
};
(function IIFE(global) {
  var a = 3;
  console.log(a); // 3
  console.log(global.a); // 2
})(window);
console.log(window.a); // 2

console.log("============");

undefined = true; // 给其他代码挖了一个大坑!绝对不要这样做!
(function IIFE(undefined) {
  var a;
  if (a === undefined) {
    console.log("Undefined is safe here!");
  }
})();

console.log("------------");
// 倒置函数运行顺序
// 也类似于 ruby 中传入了块
(function IIFE(def) {
  def(window);
})(function def(global) {
  var a = 3;
  console.log(a); // 3
  console.log( global.a ); // 2
});
