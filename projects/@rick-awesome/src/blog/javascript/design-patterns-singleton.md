单例模式的定义是： 保证一个类有且仅有一个实例，并提供一个访问它的全局访问点。

思路： 用闭包返回一个实例 对这个实例做条件判断 有就返回 没有就初始化 这样我们在每次 new 的时候就只能得到一个实例

例如 全局的蒙层 全局的变量都适合用单例模式来创建 因为我们谁也不希望存在两个蒙层

```js
const Singleton = (function () {
  let instance = null;

  return function (name, age) {
    if (instance) {
      return instance;
    }

    this.name = name;
    this.age = age;

    return (instance = this);
  };
})();

// test
const a = new Singleton('rick', 18);
const b = new Singleton('rick', 18);

console.log(a === b); // true
console.log(a); // { name: 'rick', age: 18 }
```
