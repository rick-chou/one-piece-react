---
title: Angular Quick Start - Pipe
---

Pipe 作用于 html template 用来格式化/预处理你的 html template

Angular 内置的 pipe 有下列

> https://angular.cn/guide/pipes-overview#built-in-pipes

- DatePipe：根据本地环境中的规则格式化日期值。

- UpperCasePipe：把文本全部转换成大写。

- LowerCasePipe ：把文本全部转换成小写。

- CurrencyPipe ：把数字转换成货币字符串，根据本地环境中的规则进行格式化。

- DecimalPipe：把数字转换成带小数点的字符串，根据本地环境中的规则进行格式化。

- PercentPipe ：把数字转换成百分比字符串，根据本地环境中的规则进行格式化。

- JsonPipe : 把一个值转换成 JSON 字符串格式。在调试时很有用。

### 基本用法

举个例子 下面的代码 最终呈现出来的就是大写的 `RICK`

你不必关心这里的 `standalone` 这是 angular14 中的新特性 我会在后面的篇幅中介绍

在这里 我只想告诉你 Angular 内置的 Pipes 都导出自 `CommonModule` 如果你需要使用这些内置 Pipe 的话 记得导入这个模块

```ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'pipe',
  standalone: true,
  imports: [CommonModule],
  template: `<div>{{ title | uppercase }}</div>`,
})
export class PipeComponent {
  title = 'rick';
}
```

上面演示了 Pipe 的基本用法 当然 Pipe 还可以接收参数

拿`DatePipe`举个例子 下面的代码 Pipe 接收了一个 short 参数 你可以参照下面的 link

你的日期将被 渲染成 `M/d/yy, h:mm a` 的格式

> https://angular.cn/api/common/DatePipe#pre-defined-format-options

```ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'pipe',
  standalone: true,
  imports: [CommonModule],
  template: `<div>{{ time | date : 'short' }}</div>`,
})
export class PipeComponent {
  time = new Date();
}
```

> tips: 如果有多个参数 那么用`:`分割

### 自定义一个 pipe

假定我们需要判断一个对象(例如可能是后端接口返回的数据)是否为空来展示一个 DOM

由于对象比较特殊 你可能需要额外的判断 例如

```html
<div *ngIf="(obj | json) != ({} | json)"></div>
<div *ngIf="(obj | json) != '{}'"></div>
```

或者 你需要在 ts 中自定义一个 method 当然这都不是本章的重点

在这里 我将介绍自定义 Pipe 去实现这个需求

自定义的 Pipe 需要实现 `PipeTransform` 接口 然后实现它的 `transform` 方法

被 Pipe 修饰的 变量会作为 `transform` 方法的第一个参数 然后用:分割的多个 Pipe 参数将会作为其余的参数传递给这个方法

例如上面的例子 我们就可以写出下面的自定义 Pipe

```ts
import { Pipe, PipeTransform } from '@angular/core';
import { isEmpty } from 'lodash-es';

@Pipe({
  name: 'objIsEmpty',
})
export class ObjIsEmptyPipe implements PipeTransform {
  transform(value: any, ...arg: any) {
    return !isEmpty(value);
  }
}
```

然后在业务中你就可以这样来判断啦

```html
<div *ngIf="obj | objIsEmpty"></div>
```
