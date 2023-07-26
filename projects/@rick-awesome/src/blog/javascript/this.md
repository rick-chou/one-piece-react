> <a href="https://mp.weixin.qq.com/s?__biz=MzI3ODU4MzQ1MA==&mid=2247484019&idx=1&sn=3f6d9e748ac218b5034c04dce0f25891&chksm=eb558386dc220a901ca63d526cc553c570d736948ed77493465b2836b6a02fc2b181acbe31e0&sessionid=0&scene=126&clicktime=1590037450&enterid=1590037450&ascene=3&devicetype=android-29&version=27000e37&nettype=cmnet&abtest_cookie=AAACAA%3D%3D&lang=en&exportkey=AcdbQZbZYKbgZjM7wKvVQrc%3D&pass_ticket=e%2FyqnqqHU1eUmuswJPT7GF7T%2FJt3o7TJrRQj5vH7ccCzfKKMKCaPKxAZ7Sj26Vr6&wx_header=1">
> 40道题搞定 JavaScript 的 this
> </a>

## this 的五种绑定方式

- 默认绑定(非严格模式下 this 指向全局对象, 严格模式下 this 会绑定到 undefined)

- 隐式绑定(当函数引用有上下文对象时, 如 obj.foo()的调用方式, foo 内的 this 指向 obj)

- 显示绑定(通过 call()或者 apply()方法直接指定 this 的绑定对象, 如 foo.call(obj))

- new 绑定

- 箭头函数绑定(this 的指向由外层作用域决定的)

## 默认绑定

非严格模式下 var 声明的变量会变成 window 的属性 function 会变成 window 的方法
所以 function 内部的 this 指向 window

```js
var a = 10;
function foo() {
  console.log(this.a);
}
foo(); // 10
window.a; //10
window.foo; // foo(){}
```

但是严格模式下 全局的 this 会指向 undefined

## 隐式绑定

this 永远指向最后调用它的那个对象

```js
var a = 2;
function foo() {
  console.log(this.a);
}
var bar = {
  a: 1,
  foo,
};

bar.foo(); // 1
```

## new 绑定

```js
function Person(name) {
  this.name = name;
}
var name = 'window';
var person1 = new Person('chou');
console.log(person1.name); // chou
```

## 显示绑定

注意 apply 和 call 会执行方法 但是 bind 不会

**总结一下这部分的知识点好了：**

- `this` 永远指向最后调用它的那个对象

- 匿名函数的`this`永远指向`window`

- 使用`.call()`或者`.apply()`的函数是会直接执行的

- `bind()`是创建一个新的函数，需要手动调用才会执行

- 如果`call、apply、bind`接收到的第一个参数是空或者`null、undefined`的话，则会忽略这个参数

- `forEach、map、filter`函数的第二个参数也是能显式绑定`this`的

## 箭头函数

- 箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined

- 不受 apply 等方法修改

箭头函数的`this`无法通过`bind、call、apply`来**直接**修改，

但是可以通过改变作用域中`this`的指向来间接修改。

```js
var name = 'window';
var obj1 = {
  name: 'obj1',
  foo1: function () {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  },
  foo2: () => {
    console.log(this.name);
    return function () {
      console.log(this.name);
    };
  },
};
var obj2 = {
  name: 'obj2',
};
obj1.foo1.call(obj2)();
obj1.foo1().call(obj2);
obj1.foo2.call(obj2)();
obj1.foo2().call(obj2);
```

- obj1.foo1.call(obj2)()第一层为普通函数，并且通过.call 改变了 this 指向为 obj2，所以会打印出 obj2，第二层为箭头函数，它的 this 和外层作用域中的 this 相同，因此也是 obj2。

- obj1.foo().call(obj2)第一层打印出 obj1，第二层为箭头函数，使用了.call 想要修改 this 的指向，但是并不能成功，因此.call(obj2)对箭头函数无效，还是打印出 obj1。

- obj1.foo2.call(obj2)()第一层为箭头函数，并且想要通过.call(obj2)改变 this 指向，但是无效，且它的外层作用域是 window，所以会打印出 window，第二层为普通函数，this 是最后调用者 window，所以也会打印出 window。

- obj1.foo2().call(obj2)第一层为箭头函数，外层作用域是 window，打印出 window，第二层为普通函数，且使用了.call(obj2)来改变 this 指向，所以打印出了 obj2。

**总结**

- **普通或匿名函数内的 this，就是调用函数的那个对象**，且绝大多数匿名函数均被实现为 this 指向 window。

- **箭头函数内的 this，就是箭头函数被定义时所在作用域的 this**

- js 的 this 只会在**函数作用域**或**全局作用域**，不要与块级作用域混淆
