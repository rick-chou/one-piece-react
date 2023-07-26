Directive 用来修饰 DOM 给它添加额外的行为

> Angular 内置指令 https://angular.cn/guide/built-in-directives

例如 开发中常用的 `*ngFor` 就是一个指令 用来遍历渲染 DOM 元素

可以参考下面的 Link 我为这些指令都编写了用例

> https://rick-chou.github.io/angular-tutorial/basic-syntax/directive

这里我主要介绍一下如何自定义一个自己的指令

举个例子 我们希望鼠标移入/移出的时候 DOM 背景色有切换

```html
<!-- 默认 鼠标移入时背景变成黄色 -->
<p highlight>Highlight me!</p>
<!-- 指定颜色 鼠标移入时背景变成红色 -->
<p highlight="red">Highlight me!</p>
```

下面 我们来实现这个例子

```ts
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// Directive装饰器 可以接收一个对象参数 但是现在我们还不需要
@Directive()
export class HighlightDirective {
  // 给这个指定定义一个 highlight 属性
  @Input() highlight = 'yellow';

  // 这里的 el 就是被我们的指令直接修饰的那个dom
  constructor(private el: ElementRef) {
    // 你可以在这里直接操作 dom
  }

  // 给这个dom定义一个mouseenter的监听器 后面的名字可以自定定义
  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.highlight);
  }

  // 添加鼠标移出的监听器 绑定对应的事件逻辑
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```
