---
title: JavaScript - decorate
---

## 配置装饰器环境

```json
{
  "name": "decorator",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "@babel/cli": "^7.13.16",
    "@babel/core": "^7.13.16",
    "@babel/plugin-proposal-class-properties": "^7.13.0",
    "@babel/plugin-proposal-decorators": "^7.13.15",
    "@babel/preset-env": "^7.13.15"
  },
  "scripts": {
    "start": "npx babel src/index.js --out-dir dist && node dist/index.js"
  }
}
```

新建 `package.json` 文件 复制如上内容 然后安装依赖

然后在根目录 创建文件`.babelrc` 配置如下内容

因为最新版的 babel 插件是可拔插的 仅仅安装是不会生效的 还需配置

```json
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    ["@babel/plugin-proposal-class-properties"]
  ]
}
```

最后创建 `jsconfig.json` 文件 写下如下配置来开启装饰器 不然编译器会给我们警告

```json
{
  "compilerOptions": {
    "target": "es6",
    "experimentalDecorators": true
  }
}
```

然后新建 src 目录 在里面创建 `index.js` 文件 随后我们就在这个文件内书写我们的代码

## 修饰类

参数就是被装饰器修饰的类

## 修饰成员变量

有三个参数

- target 对于静态成员来说是构造函数 对于实例成员来说是原型对象

- name 被修饰成员的名字

- descriptor 被修饰成员的属性描述符

具体代码如下

```js
@logClassSelf
class Programmer {
  constructor(nickname) {
    this.nickname = nickname;
  }
  @logClassMember
  static department = 'FE';

  @logClassMember
  coding() {
    console.log('bug fix......');
  }
}

/**
 *
 * @param {*} target 被修饰的类
 */
function logClassSelf(target) {
  console.log('target', target); // target [Function: Programmer]
  target.prototype.logger = () => console.log(`我是${target.name}类`);
}

/**
 *
 * @param {*} target 对于静态成员来说是构造函数 对于实例成员来说是原型对象
 * @param {*} name 被修饰成员的名字
 * @param {*} descriptor 被修饰成员的属性描述符 enumerable & configurable & writable | initializer
 */
function logClassMember(target, name, descriptor) {
  console.log('target:', target);
  console.log('name:', name);
  console.log('descriptor:', descriptor);
}
```

借助装饰器 我们就有能力改变类内部的方法和变量
