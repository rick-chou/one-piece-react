import{u as c,j as e,a as n,F as r}from"./index-75676da6.js";import"./antd-4d5318cf.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const o={title:"Angular Quick Start - Module"};function a(l){const s=Object.assign({p:"p",code:"code",pre:"pre",span:"span",h3:"h3",blockquote:"blockquote",ul:"ul",li:"li"},c(),l.components);return n(r,{children:[n(s.p,{children:[e(s.code,{children:"NgModule"})," 是 ",e(s.code,{children:"Angular"})," 用来组织内部模块的一种方式"]}),`
`,e(s.p,{children:"例如我们的根模块 如下"}),`
`,e(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"NgModule"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"BrowserModule"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/platform-browser'"}),`;
`,e(s.span,{className:"hljs-meta",children:"@NgModule"}),`({
  `,e(s.span,{className:"hljs-comment",children:"// 引入其他 NgModule"}),`
  `,e(s.span,{className:"hljs-attr",children:"imports"}),": [",e(s.span,{className:"hljs-title class_",children:"BrowserModule"}),`],
  `,e(s.span,{className:"hljs-comment",children:"// 在全局服务中生效的一些Provider"}),`
  `,e(s.span,{className:"hljs-attr",children:"providers"}),": [",e(s.span,{className:"hljs-title class_",children:"Logger"}),`],
  `,e(s.span,{className:"hljs-comment",children:"// 引入组件 / 指令 / 管道"}),`
  `,e(s.span,{className:"hljs-attr",children:"declarations"}),": [",e(s.span,{className:"hljs-title class_",children:"AppComponent"}),`],
  `,e(s.span,{className:"hljs-comment",children:"// 导入组件 / 指令 / 管道  在declarations引入的模版中就可以使用这些"}),`
  `,e(s.span,{className:"hljs-attr",children:"exports"}),": [",e(s.span,{className:"hljs-title class_",children:"AppComponent"}),`],
  `,e(s.span,{className:"hljs-comment",children:"// 应用的主视图 只有根模块才可以使用"}),`
  `,e(s.span,{className:"hljs-attr",children:"bootstrap"}),": [",e(s.span,{className:"hljs-title class_",children:"AppComponent"}),`],
})
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"AppModule"}),` {}
`]})}),`
`,e(s.h3,{children:"路由模块"}),`
`,e(s.p,{children:"我们可以把功能相近的一组路由声明在一起 例如"}),`
`,e(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-variable constant_",children:"HTTP_INTERCEPTORS"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/common/http'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"NgModule"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"RouterModule"}),", ",e(s.span,{className:"hljs-title class_",children:"Routes"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/router'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"HttpInterceptorService"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'./http/http-interceptor'"}),`;

`,e(s.span,{className:"hljs-keyword",children:"const"})," ",e(s.span,{className:"hljs-attr",children:"routes"}),": ",e(s.span,{className:"hljs-title class_",children:"Routes"}),` = [
  {
    `,e(s.span,{className:"hljs-attr",children:"path"}),": ",e(s.span,{className:"hljs-string",children:"'basic-syntax'"}),`,
    `,e(s.span,{className:"hljs-attr",children:"loadComponent"}),": ",e(s.span,{className:"hljs-function",children:"() =>"}),`
      `,e(s.span,{className:"hljs-keyword",children:"import"}),"(",e(s.span,{className:"hljs-string",children:"'@basic-syntax/index.component'"}),").",e(s.span,{className:"hljs-title function_",children:"then"}),`(
        `,n(s.span,{className:"hljs-function",children:[e(s.span,{className:"hljs-params",children:"mod"})," =>"]})," mod.",e(s.span,{className:"hljs-property",children:"BasicSyntaxComponent"}),`,
      ),
    `,e(s.span,{className:"hljs-attr",children:"children"}),`: [
      {
        `,e(s.span,{className:"hljs-attr",children:"path"}),": ",e(s.span,{className:"hljs-string",children:"'directive'"}),`,
        `,e(s.span,{className:"hljs-attr",children:"loadComponent"}),": ",e(s.span,{className:"hljs-function",children:"() =>"}),`
          `,e(s.span,{className:"hljs-keyword",children:"import"}),"(",e(s.span,{className:"hljs-string",children:"'@basic-syntax/directive.component'"}),").",e(s.span,{className:"hljs-title function_",children:"then"}),`(
            `,n(s.span,{className:"hljs-function",children:[e(s.span,{className:"hljs-params",children:"mod"})," =>"]})," mod.",e(s.span,{className:"hljs-property",children:"DirectiveComponent"}),`,
          ),
      },
      {
        `,e(s.span,{className:"hljs-attr",children:"path"}),": ",e(s.span,{className:"hljs-string",children:"'pipe'"}),`,
        `,e(s.span,{className:"hljs-attr",children:"loadComponent"}),": ",e(s.span,{className:"hljs-function",children:"() =>"}),`
          `,e(s.span,{className:"hljs-keyword",children:"import"}),"(",e(s.span,{className:"hljs-string",children:"'@basic-syntax/pipe.component'"}),").",e(s.span,{className:"hljs-title function_",children:"then"}),"(",n(s.span,{className:"hljs-function",children:[e(s.span,{className:"hljs-params",children:"mod"})," =>"]})," mod.",e(s.span,{className:"hljs-property",children:"PipeComponent"}),`),
      },
    ],
  },
];

`,e(s.span,{className:"hljs-meta",children:"@NgModule"}),`({
  `,e(s.span,{className:"hljs-comment",children:"// 只有在根组件中 才用 `forRoot`"}),`
  `,e(s.span,{className:"hljs-attr",children:"imports"}),": [",e(s.span,{className:"hljs-title class_",children:"RouterModule"}),".",e(s.span,{className:"hljs-title function_",children:"forChild"}),`(routes)],
  `,e(s.span,{className:"hljs-attr",children:"exports"}),": [",e(s.span,{className:"hljs-title class_",children:"RouterModule"}),`],
  `,e(s.span,{className:"hljs-comment",children:"// 路由的拦截器"}),`
  `,e(s.span,{className:"hljs-attr",children:"providers"}),`: [
    {
      `,e(s.span,{className:"hljs-attr",children:"provide"}),": ",e(s.span,{className:"hljs-variable constant_",children:"HTTP_INTERCEPTORS"}),`,
      `,e(s.span,{className:"hljs-attr",children:"useClass"}),": ",e(s.span,{className:"hljs-title class_",children:"HttpInterceptorService"}),`,
      `,e(s.span,{className:"hljs-attr",children:"multi"}),": ",e(s.span,{className:"hljs-literal",children:"true"}),`,
    },
  ],
})
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"BasicSyntaxModule"}),` {}
`]})}),`
`,e(s.p,{children:"上面演示了一个简单的路由模块"}),`
`,n(s.p,{children:["然后在你的 ",e(s.code,{children:"AppModule"})," 中的 ",e(s.code,{children:"imports"})," 字段中引入这个模块 这段路由就会生效了"]}),`
`,e(s.h3,{children:"共享模块 ( Sharing modules )"}),`
`,e(s.p,{children:"举个例子 如果"}),`
`,n(s.p,{children:["A 模块用到了 ",e(s.code,{children:"HeaderComponent"})]}),`
`,n(s.p,{children:["B 模块也用到了 ",e(s.code,{children:"HeaderComponent"})]}),`
`,n(s.p,{children:["那么如果在 A 模块 B 模块 的 declarations 字段都引入 ",e(s.code,{children:"HeaderComponent"})," 的话"]}),`
`,n(s.p,{children:["程序就会报错说 ",e(s.code,{children:"HeaderComponent"})," 在多处被引入了"]}),`
`,n(s.p,{children:["这个时候可以 新建一个 ",e(s.code,{children:"ShareModuleModule"})]}),`
`,e(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"NgModule"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"CommonModule"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/common'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"HeaderComponent"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'src/component/header.component'"}),`;

`,e(s.span,{className:"hljs-meta",children:"@NgModule"}),`({
  `,e(s.span,{className:"hljs-attr",children:"declarations"}),": [",e(s.span,{className:"hljs-title class_",children:"HeaderComponent"}),`],
  `,e(s.span,{className:"hljs-attr",children:"exports"}),": [",e(s.span,{className:"hljs-title class_",children:"HeaderComponent"}),`],
  `,e(s.span,{className:"hljs-attr",children:"imports"}),": [",e(s.span,{className:"hljs-title class_",children:"CommonModule"}),`],
})
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"ShareModuleModule"}),` {}
`]})}),`
`,n(s.p,{children:["然后在 A / B 模块中 不引入 ",e(s.code,{children:"HeaderComponent"})," 改成引入 ",e(s.code,{children:"ShareModuleModule"})," 就好了"]}),`
`,n(s.blockquote,{children:[`
`,e(s.p,{children:"PS: 好吧 感觉确实有点套娃 🪆 但是一切都运行起来了 Fine ～"}),`
`]}),`
`,e(s.h3,{children:"Tips"}),`
`,e(s.p,{children:"我们在使用 Angular 的一些功能的时候 需要引入对应的 Module"}),`
`,e(s.p,{children:"最最最常用的例如"}),`
`,n(s.ul,{children:[`
`,n(s.li,{children:["一些指令 ",e(s.code,{children:"*ngIf"})," 这些 来自 ",e(s.code,{children:"CommonModule"})]}),`
`,n(s.li,{children:[e(s.code,{children:"ngModal"})," 双向绑定 来自 ",e(s.code,{children:"FormsModule"})]}),`
`,n(s.li,{children:["路由 来自 ",e(s.code,{children:"RouterModule"})]}),`
`,n(s.li,{children:["http 来自 ",e(s.code,{children:"HttpClientModule"})]}),`
`]})]})}function p(l={}){const{wrapper:s}=Object.assign({},c(),l.components);return s?e(s,Object.assign({},l,{children:e(a,l)})):a(l)}export{p as default,o as frontmatter};
