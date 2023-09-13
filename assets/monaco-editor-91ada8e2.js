import{u as c,j as e,a as s,F as r}from"./index-3486abdc.js";import"./antd-3342c5aa.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const d={title:"Angular Quick Start - Monaco-Editor"};function a(l){const n=Object.assign({blockquote:"blockquote",p:"p",h3:"h3",ul:"ul",li:"li",img:"img",code:"code",a:"a",pre:"pre",ol:"ol",span:"span"},c(),l.components);return s(r,{children:[s(n.blockquote,{children:[`
`,e(n.p,{children:"本篇文章主要记录下最近的一次业务中用到的 monaco-editor 在 angular 中的使用"}),`
`]}),`
`,e(n.h3,{children:"安装依赖"}),`
`,e(n.p,{children:"在 angular12 及之前你可以选择"}),`
`,s(n.ul,{children:[`
`,e(n.li,{children:"monaco-editor"}),`
`,e(n.li,{children:"ngx-monaco-editor"}),`
`]}),`
`,e(n.p,{children:"这是没有问题的 但是如果你使用了更高版本的 angular 在使用 npm 安装 ngx-monaco-editor 时 会报错"}),`
`,e(n.p,{children:"因为原作者似乎已经停止了对这个库的维护 最终的支持停留在了 angular12 版本"}),`
`,e(n.p,{children:e(n.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/317294a3b1b44b98b327524019632d3e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"html-in-service"})}),`
`,e(n.p,{children:"当然 你选择可以选择正如提示那样 用 --force 或者 --legacy-peer-deps 来解决问题"}),`
`,e(n.p,{children:"但是为了 消除/避免 隐藏的一些问题 我在原作者的基础上将框架的 angular 支持提升到了 14 并且会一直更新"}),`
`,s(n.blockquote,{children:[`
`,e(n.p,{children:e(n.code,{children:"@rickzhou/ngx-monaco-editor"})}),`
`]}),`
`,s(n.blockquote,{children:[`
`,s(n.p,{children:["github ",e(n.a,{href:"https://github.com/rick-chou/ngx-monaco-editor",children:"https://github.com/rick-chou/ngx-monaco-editor"})]}),`
`]}),`
`,s(n.blockquote,{children:[`
`,s(n.p,{children:["npm ",e(n.a,{href:"https://www.npmjs.com/package/@rickzhou/ngx-monaco-editor",children:"https://www.npmjs.com/package/@rickzhou/ngx-monaco-editor"})]}),`
`]}),`
`,e(n.p,{children:"当然 你也可以选择将作者的源代码移入自己的本地代码中 这也是完全没有问题的"}),`
`,s(n.ul,{children:[`
`,e(n.li,{children:"base-editor.ts 引入 monaco-editor"}),`
`,e(n.li,{children:"config.ts"}),`
`,e(n.li,{children:"diff-editor.component.ts"}),`
`,e(n.li,{children:"editor.component.ts"}),`
`,e(n.li,{children:"editor.module.ts"}),`
`,e(n.li,{children:"types.ts"}),`
`]}),`
`,e(n.p,{children:e(n.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9bd35580573e4ed2a0a8dbce49102250~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"html-in-service"})}),`
`,s(n.blockquote,{children:[`
`,e(n.p,{children:e(n.a,{href:"https://github.com/rick-chou/ngx-monaco-editor/tree/main/projects/editor/src/lib",children:"https://github.com/rick-chou/ngx-monaco-editor/tree/main/projects/editor/src/lib"})}),`
`]}),`
`,e(n.p,{children:"你只需要移动 lib 目录下的六个文件 然后把它们当成自己项目中的一个 module 去使用就好了"}),`
`,e(n.h3,{children:"使用"}),`
`,s(n.p,{children:["其实所有的 api 都可以在 ",e(n.code,{children:"editor.api.d.ts"})," 这个文件中找到"]}),`
`,e(n.pre,{children:e(n.code,{children:`// 在这个editor下就可以找到所有TS类型
import { editor } from 'monaco-editor';
`})}),`
`,e(n.p,{children:"下面记录一下常用的"}),`
`,s(n.ol,{children:[`
`,e(n.li,{children:"设置"}),`
`]}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-ts",children:[e(n.span,{className:"hljs-comment",children:"// eg"}),`
`,e(n.span,{className:"hljs-keyword",children:"export"})," ",e(n.span,{className:"hljs-keyword",children:"const"})," ",e(n.span,{className:"hljs-attr",children:"READ_EDITOR_OPTIONS"}),": editor.",e(n.span,{className:"hljs-property",children:"IEditorOptions"}),` = {
  `,e(n.span,{className:"hljs-attr",children:"readOnly"}),": ",e(n.span,{className:"hljs-literal",children:"true"}),`,
  `,e(n.span,{className:"hljs-attr",children:"automaticLayout"}),": ",e(n.span,{className:"hljs-literal",children:"false"}),`,
  `,e(n.span,{className:"hljs-attr",children:"minimap"}),`: {
    `,e(n.span,{className:"hljs-attr",children:"enabled"}),": ",e(n.span,{className:"hljs-literal",children:"false"}),`,
  },
  `,e(n.span,{className:"hljs-attr",children:"renderFinalNewline"}),": ",e(n.span,{className:"hljs-literal",children:"false"}),`,
  `,e(n.span,{className:"hljs-attr",children:"scrollbar"}),`: {
    `,e(n.span,{className:"hljs-attr",children:"vertical"}),": ",e(n.span,{className:"hljs-string",children:"'visible'"}),`,
  },
  `,e(n.span,{className:"hljs-attr",children:"mouseWheelZoom"}),": ",e(n.span,{className:"hljs-literal",children:"true"}),`,
  `,e(n.span,{className:"hljs-attr",children:"contextmenu"}),": ",e(n.span,{className:"hljs-literal",children:"false"}),`,
  `,e(n.span,{className:"hljs-attr",children:"fontSize"}),": ",e(n.span,{className:"hljs-number",children:"16"}),`,
  `,e(n.span,{className:"hljs-attr",children:"scrollBeyondLastLine"}),": ",e(n.span,{className:"hljs-literal",children:"false"}),`,
  `,e(n.span,{className:"hljs-attr",children:"smoothScrolling"}),": ",e(n.span,{className:"hljs-literal",children:"true"}),`,
  `,e(n.span,{className:"hljs-attr",children:"cursorWidth"}),": ",e(n.span,{className:"hljs-number",children:"0"}),`,
  `,e(n.span,{className:"hljs-attr",children:"renderValidationDecorations"}),": ",e(n.span,{className:"hljs-string",children:"'off'"}),`,
  `,e(n.span,{className:"hljs-attr",children:"colorDecorators"}),": ",e(n.span,{className:"hljs-literal",children:"false"}),`,
  `,e(n.span,{className:"hljs-attr",children:"hideCursorInOverviewRuler"}),": ",e(n.span,{className:"hljs-literal",children:"true"}),`,
  `,e(n.span,{className:"hljs-attr",children:"overviewRulerLanes"}),": ",e(n.span,{className:"hljs-number",children:"0"}),`,
  `,e(n.span,{className:"hljs-attr",children:"overviewRulerBorder"}),": ",e(n.span,{className:"hljs-literal",children:"false"}),`,
};
`]})}),`
`,s(n.ol,{start:"2",children:[`
`,e(n.li,{children:"获取 editor 实例"}),`
`]}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-ts",children:[`<ngx-monaco-editor
  [options]=`,e(n.span,{className:"hljs-string",children:'"readEditorOptions"'}),`
  [(ngModel)]=`,e(n.span,{className:"hljs-string",children:'"originLogVal"'}),`
  (onInit)=`,e(n.span,{className:"hljs-string",children:'"initViewEditor($event, false)"'}),`>
</ngx-monaco-editor>

`,e(n.span,{className:"hljs-keyword",children:"public"})," ",e(n.span,{className:"hljs-title function_",children:"initViewEditor"}),"(",e(n.span,{className:"hljs-attr",children:"editor"}),": editor.",e(n.span,{className:"hljs-property",children:"ICodeEditor"}),"): ",e(n.span,{className:"hljs-built_in",children:"void"}),` {
  `,e(n.span,{className:"hljs-comment",children:"// 这个editor就是实例"}),`
  `,e(n.span,{className:"hljs-comment",children:"// 下面方法中的editor就是这里的editor"}),`
  `,e(n.span,{className:"hljs-variable language_",children:"this"}),".",e(n.span,{className:"hljs-property",children:"editor"}),` = editor
}
`]})}),`
`,s(n.ol,{start:"3",children:[`
`,e(n.li,{children:"获取当前光标位置"}),`
`]}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-ts",children:["editor.",e(n.span,{className:"hljs-title function_",children:"getPosition"}),`();
`]})}),`
`,s(n.ol,{start:"3",children:[`
`,e(n.li,{children:"获取当前鼠标选中的文本"}),`
`]}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-ts",children:["editor.",e(n.span,{className:"hljs-title function_",children:"getModel"}),"().",e(n.span,{className:"hljs-title function_",children:"getValueInRange"}),"(editor.",e(n.span,{className:"hljs-title function_",children:"getSelection"}),`());
`]})}),`
`,s(n.ol,{start:"4",children:[`
`,e(n.li,{children:"修改光标位置"}),`
`]}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-ts",children:["editor.",e(n.span,{className:"hljs-title function_",children:"setPosition"}),`({
  `,e(n.span,{className:"hljs-attr",children:"column"}),": ",e(n.span,{className:"hljs-number",children:"1"}),`,
  `,e(n.span,{className:"hljs-attr",children:"lineNumber"}),": ",e(n.span,{className:"hljs-number",children:"1"}),`,
});
`]})}),`
`,s(n.ol,{start:"5",children:[`
`,e(n.li,{children:"滚动指定行到可视区中间"}),`
`]}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-ts",children:["editor.",e(n.span,{className:"hljs-title function_",children:"revealLineInCenter"}),"(",e(n.span,{className:"hljs-number",children:"1"}),`);
`]})}),`
`,s(n.ol,{start:"6",children:[`
`,e(n.li,{children:"绑定事件"}),`
`]}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-ts",children:["editor.",e(n.span,{className:"hljs-title function_",children:"onMouseDown"}),"(",s(n.span,{className:"hljs-function",children:[e(n.span,{className:"hljs-params",children:"event"})," =>"]}),` {
  `,e(n.span,{className:"hljs-comment",children:"// do something"}),`
});
editor.`,e(n.span,{className:"hljs-title function_",children:"onKeyDown"}),"(",s(n.span,{className:"hljs-function",children:[e(n.span,{className:"hljs-params",children:"event"})," =>"]}),` {
  `,e(n.span,{className:"hljs-comment",children:"// do something"}),`
});
`]})}),`
`,s(n.ol,{start:"7",children:[`
`,e(n.li,{children:"保存/恢复快照"}),`
`]}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-ts",children:[e(n.span,{className:"hljs-keyword",children:"const"})," snapshot = editor.",e(n.span,{className:"hljs-title function_",children:"saveViewState"}),`();
editor.`,e(n.span,{className:"hljs-title function_",children:"restoreViewState"}),`(snapshot);
`]})}),`
`,s(n.ol,{start:"8",children:[`
`,e(n.li,{children:"阻止某个事件"}),`
`]}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-ts",children:[e(n.span,{className:"hljs-comment",children:"// eg 组件默认的搜索快捷键"}),`
`,e(n.span,{className:"hljs-keyword",children:"function"})," ",e(n.span,{className:"hljs-title function_",children:"isMac"}),"(",e(n.span,{className:"hljs-params"}),`) {
  `,e(n.span,{className:"hljs-keyword",children:"return"})," ",e(n.span,{className:"hljs-regexp",children:"/macintosh|mac os x/i"}),".",e(n.span,{className:"hljs-title function_",children:"test"}),"(navigator.",e(n.span,{className:"hljs-property",children:"userAgent"}),`);
}
editor.`,e(n.span,{className:"hljs-title function_",children:"onKeyDown"}),"(",s(n.span,{className:"hljs-function",children:[e(n.span,{className:"hljs-params",children:"event"})," =>"]}),` {
  `,e(n.span,{className:"hljs-keyword",children:"if"}),` (
    (`,e(n.span,{className:"hljs-title function_",children:"isMac"}),"() && event.",e(n.span,{className:"hljs-property",children:"browserEvent"}),".",e(n.span,{className:"hljs-property",children:"key"})," === ",e(n.span,{className:"hljs-string",children:"'f'"})," && event.",e(n.span,{className:"hljs-property",children:"metaKey"}),`) ||
    (!`,e(n.span,{className:"hljs-title function_",children:"isMac"}),"() && event.",e(n.span,{className:"hljs-property",children:"browserEvent"}),".",e(n.span,{className:"hljs-property",children:"key"})," === ",e(n.span,{className:"hljs-string",children:"'f'"})," && event.",e(n.span,{className:"hljs-property",children:"ctrlKey"}),`)
  ) {
    event.`,e(n.span,{className:"hljs-title function_",children:"preventDefault"}),`();
    event.`,e(n.span,{className:"hljs-title function_",children:"stopPropagation"}),`();
  }
});
`]})})]})}function p(l={}){const{wrapper:n}=Object.assign({},c(),l.components);return n?e(n,Object.assign({},l,{children:e(a,l)})):a(l)}export{p as default,d as frontmatter};
