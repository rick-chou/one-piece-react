import{u as c,j as e,a as n,F as i}from"./index-109c6b2d.js";import"./antd-3342c5aa.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const p={title:"Angular Quick Start - Directive"};function l(a){const s=Object.assign({p:"p",blockquote:"blockquote",a:"a",code:"code",pre:"pre",span:"span"},c(),a.components);return n(i,{children:[e(s.p,{children:"Directive 用来修饰 DOM 给它添加额外的行为"}),`
`,n(s.blockquote,{children:[`
`,n(s.p,{children:["Angular 内置指令 ",e(s.a,{href:"https://angular.cn/guide/built-in-directives",children:"https://angular.cn/guide/built-in-directives"})]}),`
`]}),`
`,n(s.p,{children:["例如 开发中常用的 ",e(s.code,{children:"*ngFor"})," 就是一个指令 用来遍历渲染 DOM 元素"]}),`
`,e(s.p,{children:"可以参考下面的 Link 我为这些指令都编写了用例"}),`
`,n(s.blockquote,{children:[`
`,e(s.p,{children:e(s.a,{href:"https://rick-chou.github.io/angular-tutorial/basic-syntax/directive",children:"https://rick-chou.github.io/angular-tutorial/basic-syntax/directive"})}),`
`]}),`
`,e(s.p,{children:"这里我主要介绍一下如何自定义一个自己的指令"}),`
`,e(s.p,{children:"举个例子 我们希望鼠标移入/移出的时候 DOM 背景色有切换"}),`
`,e(s.pre,{children:n(s.code,{className:"hljs language-html",children:[e(s.span,{className:"hljs-comment",children:"<!-- 默认 鼠标移入时背景变成黄色 -->"}),`
`,n(s.span,{className:"hljs-tag",children:["<",e(s.span,{className:"hljs-name",children:"p"})," ",e(s.span,{className:"hljs-attr",children:"highlight"}),">"]}),"Highlight me!",n(s.span,{className:"hljs-tag",children:["</",e(s.span,{className:"hljs-name",children:"p"}),">"]}),`
`,e(s.span,{className:"hljs-comment",children:"<!-- 指定颜色 鼠标移入时背景变成红色 -->"}),`
`,n(s.span,{className:"hljs-tag",children:["<",e(s.span,{className:"hljs-name",children:"p"})," ",e(s.span,{className:"hljs-attr",children:"highlight"}),"=",e(s.span,{className:"hljs-string",children:'"red"'}),">"]}),"Highlight me!",n(s.span,{className:"hljs-tag",children:["</",e(s.span,{className:"hljs-name",children:"p"}),">"]}),`
`]})}),`
`,e(s.p,{children:"下面 我们来实现这个例子"}),`
`,e(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Directive"}),", ",e(s.span,{className:"hljs-title class_",children:"ElementRef"}),", ",e(s.span,{className:"hljs-title class_",children:"HostListener"}),", ",e(s.span,{className:"hljs-title class_",children:"Input"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;

`,e(s.span,{className:"hljs-comment",children:"// Directive装饰器 可以接收一个对象参数 但是现在我们还不需要"}),`
`,e(s.span,{className:"hljs-meta",children:"@Directive"}),`()
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"HighlightDirective"}),` {
  `,e(s.span,{className:"hljs-comment",children:"// 给这个指定定义一个 highlight 属性"}),`
  `,e(s.span,{className:"hljs-meta",children:"@Input"}),"() highlight = ",e(s.span,{className:"hljs-string",children:"'yellow'"}),`;

  `,e(s.span,{className:"hljs-comment",children:"// 这里的 el 就是被我们的指令直接修饰的那个dom"}),`
  `,e(s.span,{className:"hljs-title function_",children:"constructor"}),"(",n(s.span,{className:"hljs-params",children:[e(s.span,{className:"hljs-keyword",children:"private"})," el: ElementRef"]}),`) {
    `,e(s.span,{className:"hljs-comment",children:"// 你可以在这里直接操作 dom"}),`
  }

  `,e(s.span,{className:"hljs-comment",children:"// 给这个dom定义一个mouseenter的监听器 后面的名字可以自定定义"}),`
  `,e(s.span,{className:"hljs-meta",children:"@HostListener"}),"(",e(s.span,{className:"hljs-string",children:"'mouseenter'"}),`)
  `,e(s.span,{className:"hljs-title function_",children:"onMouseEnter"}),"(",e(s.span,{className:"hljs-params"}),`) {
    `,e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-title function_",children:"highlight"}),"(",e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"highlight"}),`);
  }

  `,e(s.span,{className:"hljs-comment",children:"// 添加鼠标移出的监听器 绑定对应的事件逻辑"}),`
  `,e(s.span,{className:"hljs-meta",children:"@HostListener"}),"(",e(s.span,{className:"hljs-string",children:"'mouseleave'"}),`)
  `,e(s.span,{className:"hljs-title function_",children:"onMouseLeave"}),"(",e(s.span,{className:"hljs-params"}),`) {
    `,e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-title function_",children:"highlight"}),"(",e(s.span,{className:"hljs-string",children:"''"}),`);
  }

  `,e(s.span,{className:"hljs-keyword",children:"private"})," ",e(s.span,{className:"hljs-title function_",children:"highlight"}),"(",n(s.span,{className:"hljs-params",children:["color: ",e(s.span,{className:"hljs-built_in",children:"string"})]}),`) {
    `,e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"el"}),".",e(s.span,{className:"hljs-property",children:"nativeElement"}),".",e(s.span,{className:"hljs-property",children:"style"}),".",e(s.span,{className:"hljs-property",children:"backgroundColor"}),` = color;
  }
}
`]})})]})}function d(a={}){const{wrapper:s}=Object.assign({},c(),a.components);return s?e(s,Object.assign({},a,{children:e(l,a)})):l(a)}export{d as default,p as frontmatter};
