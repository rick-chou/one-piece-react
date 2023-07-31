---
title: JavaScript - equality operator
---

首先，== 的定义是：

<img src="https://pic1.zhimg.com/cf1e9188f66186ecd77fb31ac0c5400f_r.jpg?source=1940ef5c" />

GetValue 会获取一个子表达式的值（消除掉左值引用），在表达式 [] == ![] 中，[] 的结果就是一个空数组的引用，而 ![] 就有意思了，它会按照 11.4.9 和 9.2 节的要求得到 false。比较的行为在 11.9.3 节里，所以翻到 11.9.3：

<img src="https://pic4.zhimg.com/2d0d90f2d9549f5f13ad53be3f75ace8_r.jpg?source=1940ef5c" />

在这段算法里，和 `[] == ![]`匹配的是条件 7，所以会递归地调用 `[] == ToNumber(false)` 进行比较。

在 9.3 节中定义了 ToNumber 原语，ToNumber(false) 等于 0，于是比较变为 `[] == 0`。

在此处因为 [] 是对象，比较过程走分支 9，依 `ToPrimitive([]) == 0` 比较。

ToPrimitive 默认是调用 toString 方法的（依 8.2.8），于是 ToPrimitice([]) 等于空字符串。

结果，`[] == ![]` 的比较最后落到了 `''==false` 上，

按照 11.9.3 中的定义会依分支 5 比较 `ToNumber('')==0` ToNumber('') 依 9.3.1 等于 0，所以结果为 true。
