/*当程序中加载了多个第三方库时,这些库通常会在全局作用域中声明一个名字足够独特的变量，通常是一个对象。
 * 这个对象被用作库的命名空间，所有需要暴露给外界的功能都会成为这个对象(命名空间)的属性，
 * 而不是将自己的标识符暴漏在顶级的词法作用域中。
*/

var MyReallyCoolLibrary = {
  awesome: "stuff",
  doSomething: function() {
    // ...
  },
  doAnotherThing: function() {
    // ...
  }
};
