import{u as c,j as n,a as e,F as r}from"./index-Dt7Lsx6p.js";import"./antd-DGkp10QV.js";import"./lodash-BVSlK2Pl.js";import"./prettier-DJQX7j1f.js";import"./chance-DnaHbaGl.js";const m={title:"Angular Quick Start - Pipe"};function a(l){const s=Object.assign({p:"p",blockquote:"blockquote",a:"a",ul:"ul",li:"li",h3:"h3",code:"code",pre:"pre",span:"span"},c(),l.components);return e(r,{children:[n(s.p,{children:"Pipe 作用于 html template 用来格式化/预处理你的 html template"}),`
`,n(s.p,{children:"Angular 内置的 pipe 有下列"}),`
`,e(s.blockquote,{children:[`
`,n(s.p,{children:n(s.a,{href:"https://angular.cn/guide/pipes-overview#built-in-pipes",children:"https://angular.cn/guide/pipes-overview#built-in-pipes"})}),`
`]}),`
`,e(s.ul,{children:[`
`,e(s.li,{children:[`
`,n(s.p,{children:"DatePipe：根据本地环境中的规则格式化日期值。"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"UpperCasePipe：把文本全部转换成大写。"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"LowerCasePipe ：把文本全部转换成小写。"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"CurrencyPipe ：把数字转换成货币字符串，根据本地环境中的规则进行格式化。"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"DecimalPipe：把数字转换成带小数点的字符串，根据本地环境中的规则进行格式化。"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"PercentPipe ：把数字转换成百分比字符串，根据本地环境中的规则进行格式化。"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"JsonPipe : 把一个值转换成 JSON 字符串格式。在调试时很有用。"}),`
`]}),`
`]}),`
`,n(s.h3,{children:"基本用法"}),`
`,e(s.p,{children:["举个例子 下面的代码 最终呈现出来的就是大写的 ",n(s.code,{children:"RICK"})]}),`
`,e(s.p,{children:["你不必关心这里的 ",n(s.code,{children:"standalone"})," 这是 angular14 中的新特性 我会在后面的篇幅中介绍"]}),`
`,e(s.p,{children:["在这里 我只想告诉你 Angular 内置的 Pipes 都导出自 ",n(s.code,{children:"CommonModule"})," 如果你需要使用这些内置 Pipe 的话 记得导入这个模块"]}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"CommonModule"})," } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'@angular/common'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"Component"})," } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;

`,n(s.span,{className:"hljs-meta",children:"@Component"}),`({
  `,n(s.span,{className:"hljs-attr",children:"selector"}),": ",n(s.span,{className:"hljs-string",children:"'pipe'"}),`,
  `,n(s.span,{className:"hljs-attr",children:"standalone"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),`,
  `,n(s.span,{className:"hljs-attr",children:"imports"}),": [",n(s.span,{className:"hljs-title class_",children:"CommonModule"}),`],
  `,n(s.span,{className:"hljs-attr",children:"template"}),": ",n(s.span,{className:"hljs-string",children:"`<div>{{ title | uppercase }}</div>`"}),`,
})
`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"PipeComponent"}),` {
  title = `,n(s.span,{className:"hljs-string",children:"'rick'"}),`;
}
`]})}),`
`,n(s.p,{children:"上面演示了 Pipe 的基本用法 当然 Pipe 还可以接收参数"}),`
`,e(s.p,{children:["拿",n(s.code,{children:"DatePipe"}),"举个例子 下面的代码 Pipe 接收了一个 short 参数 你可以参照下面的 link"]}),`
`,e(s.p,{children:["你的日期将被 渲染成 ",n(s.code,{children:"M/d/yy, h:mm a"})," 的格式"]}),`
`,e(s.blockquote,{children:[`
`,n(s.p,{children:n(s.a,{href:"https://angular.cn/api/common/DatePipe#pre-defined-format-options",children:"https://angular.cn/api/common/DatePipe#pre-defined-format-options"})}),`
`]}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"CommonModule"})," } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'@angular/common'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"Component"})," } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;

`,n(s.span,{className:"hljs-meta",children:"@Component"}),`({
  `,n(s.span,{className:"hljs-attr",children:"selector"}),": ",n(s.span,{className:"hljs-string",children:"'pipe'"}),`,
  `,n(s.span,{className:"hljs-attr",children:"standalone"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),`,
  `,n(s.span,{className:"hljs-attr",children:"imports"}),": [",n(s.span,{className:"hljs-title class_",children:"CommonModule"}),`],
  `,n(s.span,{className:"hljs-attr",children:"template"}),": ",n(s.span,{className:"hljs-string",children:"`<div>{{ time | date : 'short' }}</div>`"}),`,
})
`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"PipeComponent"}),` {
  time = `,n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"Date"}),`();
}
`]})}),`
`,e(s.blockquote,{children:[`
`,e(s.p,{children:["tips: 如果有多个参数 那么用",n(s.code,{children:":"}),"分割"]}),`
`]}),`
`,n(s.h3,{children:"自定义一个 pipe"}),`
`,n(s.p,{children:"假定我们需要判断一个对象(例如可能是后端接口返回的数据)是否为空来展示一个 DOM"}),`
`,n(s.p,{children:"由于对象比较特殊 你可能需要额外的判断 例如"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-html",children:[e(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"div"})," *",n(s.span,{className:"hljs-attr",children:"ngIf"}),"=",n(s.span,{className:"hljs-string",children:'"(obj | json) != ({} | json)"'}),">"]}),e(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"div"}),">"]}),`
`,e(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"div"})," *",n(s.span,{className:"hljs-attr",children:"ngIf"}),"=",n(s.span,{className:"hljs-string",children:`"(obj | json) != '{}'"`}),">"]}),e(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,n(s.p,{children:"或者 你需要在 ts 中自定义一个 method 当然这都不是本章的重点"}),`
`,n(s.p,{children:"在这里 我将介绍自定义 Pipe 去实现这个需求"}),`
`,e(s.p,{children:["自定义的 Pipe 需要实现 ",n(s.code,{children:"PipeTransform"})," 接口 然后实现它的 ",n(s.code,{children:"transform"})," 方法"]}),`
`,e(s.p,{children:["被 Pipe 修饰的 变量会作为 ",n(s.code,{children:"transform"})," 方法的第一个参数 然后用:分割的多个 Pipe 参数将会作为其余的参数传递给这个方法"]}),`
`,n(s.p,{children:"例如上面的例子 我们就可以写出下面的自定义 Pipe"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"Pipe"}),", ",n(s.span,{className:"hljs-title class_",children:"PipeTransform"})," } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"import"})," { isEmpty } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'lodash-es'"}),`;

`,n(s.span,{className:"hljs-meta",children:"@Pipe"}),`({
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-string",children:"'objIsEmpty'"}),`,
})
`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"ObjIsEmptyPipe"})," ",n(s.span,{className:"hljs-keyword",children:"implements"})," ",n(s.span,{className:"hljs-title class_",children:"PipeTransform"}),` {
  `,n(s.span,{className:"hljs-title function_",children:"transform"}),"(",e(s.span,{className:"hljs-params",children:["value: ",n(s.span,{className:"hljs-built_in",children:"any"}),", ...arg: ",n(s.span,{className:"hljs-built_in",children:"any"})]}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," !",n(s.span,{className:"hljs-title function_",children:"isEmpty"}),`(value);
  }
}
`]})}),`
`,n(s.p,{children:"然后在业务中你就可以这样来判断啦"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-html",children:[e(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"div"})," *",n(s.span,{className:"hljs-attr",children:"ngIf"}),"=",n(s.span,{className:"hljs-string",children:'"obj | objIsEmpty"'}),">"]}),e(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})})]})}function o(l={}){const{wrapper:s}=Object.assign({},c(),l.components);return s?n(s,Object.assign({},l,{children:n(a,l)})):a(l)}export{o as default,m as frontmatter};
