本文记录 TS 一些工具类型的实现 

源码约在 `typescript/lib/lib.es5.d.ts` 1468 行处开始

在阅读这些工具类型的实现时 需要先了解一些 TS 中的关键字

## 关键字

### keyof

keyof 与 Object.keys 相似 不过 keyof 是用来获取对象类型的键的

举个 🌰

```ts
interface Person {
  age: number;
  name: string;
}

type Player = {
  age: number;
  name: string;
};

type PersonKeys = keyof Person; //  --> "age" | "name"
type PlayerKey = keyof Player; //  --> "age" | "name"
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7886d7da666b424cbbc5603391d79720~tplv-k3u1fbpfcp-zoom-1.image)

### typeof

typeof 用来返回一个值的 type

举个 🌰

```ts
const s = 'hello';
const n: typeof s; // --> const n: string
```

例如 当我们想把多个工具合成一个的时候 就可以用`typeof`帮我们减少重复定义

```ts
import logger from './logger';
import utils from './utils';

interface Context extends KoaContext {
  logger: typeof logger;
  utils: typeof utils;
}
```

### extends

extends 用来继承

注意 只有 interface 和 class 才可以继承

type 关键字声明的类型别名无法继承

举个 🌰

```ts
interface Person {
  name: string;
  age: number;
}

interface Player extends Person {
  item: 'ball' | 'swing';
}

const p1: Player = {
  name: 'nanshu',
  age: 18,
  item: 'ball',
};
```

### in

in 关键字可以帮助我们生成映射类型

举个 🌰

```ts
enum Letter {
  A = 'a',
  B = 'b',
  C = 'c',
}

type LetterMap = {
  [key in Letter]: string;
};

// 等价于
type _LetterMap = {
  a: string;
  b: string;
  c: string;
};

type Keys = 'name' | 'sex';

type PersonMap = {
  [key in Keys]: string;
};

// 等价于
type _PersonMap = {
  name: string;
  sex: string;
};
```

### is

is 用作类型保护

举个 🌰

```ts
function isString1(test: any): test is string {
  return typeof test === 'string';
}

function isString2(test: any): boolean {
  return typeof test === 'string';
}

const a = isString1('string'); // --> true
const b = isString2('string'); // --> true
```

这样来看 似乎两者没有差别 都能正确判断 string 类型

但是如果场景复杂一点 如下

```ts
function doSomething(params: any) {
  if (isString1(params)) {
    params.toLowerCase();
    // params.xxx(); // --> Property 'xxx' does not exist on type 'string'
  }
  if (isString2(params)) {
    params.xxx();
  }
}

doSomething('string'); // TypeError: params.xxx is not a function
```

isString1 判断后的结果会返回一个 string 的保护类型

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b5e8ec46a8e40649e9278dcb68589e4~tplv-k3u1fbpfcp-zoom-1.image)

而 isString2 因为 params 是 any 会绕过 ts 的检查

所以就算调用了一个 string 类型上不存在的属性 也不会在编码阶段有任何问题 只有在运行时候才会报错

### infer

infer 可以帮助我们推断出函数的返回值

举个例子

```ts
type a<T> = T extends (...args: any) => infer R ? R : any;

type b = a<() => string>; // type b = string
```

好了 了解这些关键字后 就可以去看 TS 内置的工具类型的实现了

## 工具类型

### Partial

让 T 中所有属性都变成可选

先用 keyof 遍历 T 中所有属性

然后 用 in 生成映射类型

```ts
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

### Required

`-?` 表示移除所有可选的属性

```ts
type Required<T> = {
  [P in keyof T]-?: T[P];
};
```

### Readonly

```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

### Pick

从 T 中筛选属性为 K 的集合

```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

举个 🌰

```ts
interface A {
  name: string;
}

interface B {
  name: string;
  age: number;
}

type C = Pick<B, keyof A>;

// 等价于
type C = {
  name: string;
};
```

### Record

它用来生成一个属性为 K，类型为 T 的类型集合

```ts
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

举个 🌰

```ts
type A = 'name' | 'sex';

type B = Record<A, string>;

// 等价于
type B = {
  name: string;
  sex: string;
};
```

如果 K 中是类型 不是值 则会生成对应类型的索引签名 但只能是 string ｜ number ｜ symbol

举个 🌰

```ts
type A = string | number | symbol;

type B = Record<A, string>;

// 等价于
type B = {
  [x: string]: string;
  [x: number]: string;
  [x: symbol]: string;
};
```

### Exclude

```ts
type Exclude<T, U> = T extends U ? never : T;
```

### Extract

```ts
type Extract<T, U> = T extends U ? T : never;
```

上述两个类型 刚好相反 实现的原理也很简单

举个 🌰 吧

```ts
export interface A {
  name: string;
  age: number;
}

export interface B {
  age: number;
}

type C = Extract<A, B>; // --> type C = A
type D = Extract<B, A>; // --> type D = never

type E = Exclude<A, B>; // --> type E = never
type F = Exclude<B, A>; // --> type F = B
```

### Omit

构建一个新类型 T 排除 T 中的 K 属性

如果 T 为值 则排除对应的属性名

如果 T 为类型 则排除对应类型的属性

```ts
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

举个 🌰

```ts
interface A {
  name: string;
  age: number;
}

type B = Omit<A, string>; // --> 排除了 A 中所有 string 类型的属性 所以 B 为{}
```

```ts
interface A {
  name: string;
  age: number;
}

type B = Omit<A, 'name'>; // --> 排除了 A 中 name 属性 所有 B 为 { age: number }
```

### NonNullable

约束类型不能为 null 和 undefined

```ts
type NonNullable<T> = T extends null | undefined ? never : T;
```

### Parameters

获取一个函数的参数类型，返回的是一组包含类型的数组

```ts
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
```

举个 🌰

```ts
function foo(p1: string, p2: number) {}

type params = Parameters<typeof foo>; // --> type params = [p1: string, p2: number]
```

### ConstructorParameters

获取构造函数中的参数类型

```ts
type ConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;
```

举个 🌰

```ts
class A {
  private name;
  private age;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

type B = ConstructorParameters<typeof A>;
```

### ReturnType

获取函数的返回值

```ts
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
```

举个 🌰

```ts
function returnSomething() {
  return 'string';
}

function* task() {
  // 这里的 result 在TS中是没有拿到正确的函数返回类型的，大家可以试一下
  const result = yield returnSomething();
}
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f423faa024ff42d7bc02a78fd72dd228~tplv-k3u1fbpfcp-zoom-1.image)

这时 我们就可以使用 `ReturnType`

```ts
function returnSomething() {
  return 'string';
}

function* task() {
  // 这里的 result 就可以拿到正确的返回值
  const result: ReturnType<typeof returnSomething> = yield returnSomething();
}
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4d408548e02149a19725a80992b16366~tplv-k3u1fbpfcp-zoom-1.image)

### InstanceType

获取类的实例类型 和用类直接去约束类型一样

```ts
type InstanceType<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer R ? R : any;
```

举个 🌰

```ts
class A {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

type B = InstanceType<typeof A>; // --> type B = A

const obj: B = {
  name: 'nanshu',
  age: 18,
};
```

此外还有一些限制 string 形式的工具类型

- Uppercase 约束 小写

- Lowercase 约束 大写

- Capitalize 约束 首字母大写

- Uncapitalize 约束 首字母小写

举个 🌰

```ts
const _uppercase: Uppercase<'hello'> = 'HELLO';
const _lowercase: Lowercase<'hello'> = 'hello';
const _capitalize: Capitalize<'hello'> = 'Hello';
const _uncapitalize: Uncapitalize<'Hello'> = 'hello';
```
