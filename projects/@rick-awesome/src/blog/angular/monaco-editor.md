> 本篇文章主要记录下最近的一次业务中用到的 monaco-editor 在 angular 中的使用

### 安装依赖

在 angular12 及之前你可以选择

- monaco-editor
- ngx-monaco-editor

这是没有问题的 但是如果你使用了更高版本的 angular 在使用 npm 安装 ngx-monaco-editor 时 会报错

因为原作者似乎已经停止了对这个库的维护 最终的支持停留在了 angular12 版本

![html-in-service](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/317294a3b1b44b98b327524019632d3e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

当然 你选择可以选择正如提示那样 用 --force 或者 --legacy-peer-deps 来解决问题

但是为了 消除/避免 隐藏的一些问题 我在原作者的基础上将框架的 angular 支持提升到了 14 并且会一直更新

> `@rickzhou/ngx-monaco-editor`

> github https://github.com/rick-chou/ngx-monaco-editor

> npm https://www.npmjs.com/package/@rickzhou/ngx-monaco-editor

当然 你也可以选择将作者的源代码移入自己的本地代码中 这也是完全没有问题的

- base-editor.ts 引入 monaco-editor
- config.ts
- diff-editor.component.ts
- editor.component.ts
- editor.module.ts
- types.ts

![html-in-service](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9bd35580573e4ed2a0a8dbce49102250~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

> https://github.com/rick-chou/ngx-monaco-editor/tree/main/projects/editor/src/lib

你只需要移动 lib 目录下的六个文件 然后把它们当成自己项目中的一个 module 去使用就好了

### 使用

其实所有的 api 都可以在 `editor.api.d.ts` 这个文件中找到

```
// 在这个editor下就可以找到所有TS类型
import { editor } from 'monaco-editor';
```

下面记录一下常用的

1. 设置

```ts
// eg
export const READ_EDITOR_OPTIONS: editor.IEditorOptions = {
  readOnly: true,
  automaticLayout: false,
  minimap: {
    enabled: false,
  },
  renderFinalNewline: false,
  scrollbar: {
    vertical: 'visible',
  },
  mouseWheelZoom: true,
  contextmenu: false,
  fontSize: 16,
  scrollBeyondLastLine: false,
  smoothScrolling: true,
  cursorWidth: 0,
  renderValidationDecorations: 'off',
  colorDecorators: false,
  hideCursorInOverviewRuler: true,
  overviewRulerLanes: 0,
  overviewRulerBorder: false,
};
```

2. 获取 editor 实例

```ts
<ngx-monaco-editor
  [options]="readEditorOptions"
  [(ngModel)]="originLogVal"
  (onInit)="initViewEditor($event, false)">
</ngx-monaco-editor>

public initViewEditor(editor: editor.ICodeEditor): void {
  // 这个editor就是实例
  // 下面方法中的editor就是这里的editor
  this.editor = editor
}
```

3. 获取当前光标位置

```ts
editor.getPosition();
```

3. 获取当前鼠标选中的文本

```ts
editor.getModel().getValueInRange(editor.getSelection());
```

4. 修改光标位置

```ts
editor.setPosition({
  column: 1,
  lineNumber: 1,
});
```

5. 滚动指定行到可视区中间

```ts
editor.revealLineInCenter(1);
```

6. 绑定事件

```ts
editor.onMouseDown((event) => {
  // do something
});
editor.onKeyDown((event) => {
  // do something
});
```

7. 保存/恢复快照

```ts
const snapshot = editor.saveViewState();
editor.restoreViewState(snapshot);
```

8. 阻止某个事件

```ts
// eg 组件默认的搜索快捷键
function isMac() {
  return /macintosh|mac os x/i.test(navigator.userAgent);
}
editor.onKeyDown((event) => {
  if (
    (isMac() && event.browserEvent.key === 'f' && event.metaKey) ||
    (!isMac() && event.browserEvent.key === 'f' && event.ctrlKey)
  ) {
    event.preventDefault();
    event.stopPropagation();
  }
});
```
