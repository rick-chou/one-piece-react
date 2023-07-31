---
title: JavaScript - defineProperty & proxy
---

我们可以对一个对象进行赋值和取值

但是如果我们在赋值或取值的时候 需要进行一些操作

此时 我们该如何监听到数据的改变呢 实现数据监听呢

## defineProperty

> Object.defineProperty(obj, prop, descriptor)

- obj: 要在其上定义属性的对象。

- prop: 要定义或修改的属性的名称。

- descriptor: 将被定义或修改的属性的描述符。

  - value: 直接给这个属性赋值

  - writable: 是否可修改 默认 false

  - enumerable: 是否可枚举(遍历拿值) 默认 false

  - configurable: 是否可删除 默认 false

  - set

  - get

**注意：value/writable 和 set/get 不能同时出现**

**可理解为既然可以手动修改 则 value 必定会有值 且是可读写的**

**直接使用对象字面量则默认 descriptor 都为 true 若只指定 value 则默认 descriptor 都为 false**

```js
var o = {};

o.a = 1;
// 等同于：
Object.defineProperty(o, 'a', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// 另一方面，
Object.defineProperty(o, 'a', { value: 1 });
// 等同于：
Object.defineProperty(o, 'a', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
```

```js
var obj = {};

Object.defineProperty(obj, 'name', {
  // value: 'chou',
  // writable: true,
  enumerable: true,
  configurable: true,
  set(newValue) {
    value = newValue;
    console.log('set方法执行了');
  },
  get() {
    console.log('get方法执行了');
    return value;
  },
});

obj.name = 'chou';

console.log(obj.name);

// output
// set方法执行了
// get方法执行了
// chou
```

如果我们需要一次定义多个属性 则可以使用`Object.defineProperties(obj, props)`

```js
var obj = {};
Object.defineProperties(obj, {
  property1: {
    value: 'Hello',
    writable: true,
  },
  property2: {
    value: 'Chou',
    writable: false,
  },
  // etc. etc.
});
```

Vue2 就是使用了这个 Api 来实现了数据监听 从而实现了它的响应式体系

## proxy

Vue3 开始 将用 proxy 代替 defineProperty 那么它对比 defineProperty 有什么优势呢

proxy 对比 defineProperty 它的优势在于 defineProperty 只能截取到 set 和 get

而 proxy 有 13 种 拦截器可供选择 具体的每种拦截器<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy">可参考</a>

```js
const handler = {
  set(obj, prop, value) {
    obj[prop] = value;
    console.log(`${prop}属性的set方法执行了`);
  },
  get(obj, prop) {
    console.log(`${prop}属性的get方法执行了`);
    return obj[prop];
  },
  has(obj, key) {
    console.log('has方法执行了');
    if (key in obj) {
      return true;
    } else {
      return false;
    }
  },
};

var obj = new Proxy({}, handler);

obj.name = 'chou';
obj.age = 18;

console.log(obj.name);
console.log('name' in obj);

// output
// name属性的set方法执行了
// age属性的set方法执行了
// name属性的get方法执行了
// chou
// has方法执行了
// true
```
