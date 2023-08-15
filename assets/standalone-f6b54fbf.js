import{u as c,j as e,a as n,F as r}from"./index-cd28c823.js";import"./antd-e9e8fd35.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const d={title:"Angular Quick Start - Standalone Component 🔥"};function l(a){const s=Object.assign({h3:"h3",blockquote:"blockquote",p:"p",a:"a",code:"code",pre:"pre",span:"span"},c(),a.components);return n(r,{children:[e(s.h3,{children:"基本使用"}),`
`,n(s.blockquote,{children:[`
`,e(s.p,{children:e(s.a,{href:"https://angular.io/guide/standalone-components",children:"https://angular.io/guide/standalone-components"})}),`
`]}),`
`,e(s.p,{children:"standalone 是 Angular14 推出的新特性"}),`
`,e(s.p,{children:"它可以让你的 根模块 AppModule 不至于那么臃肿"}),`
`,e(s.p,{children:"所有的 component / pipe / directive 都在被使用的时候 在对应的组件引入就好了"}),`
`,n(s.p,{children:["举个例子 这是之前的写法 我们声明一个 ",e(s.code,{children:"Footer"})," 组件"]}),`
`,n(s.p,{children:["然后在使用的 ",e(s.code,{children:"Module"})," 中导入这个组件"]}),`
`,e(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Component"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;

`,e(s.span,{className:"hljs-meta",children:"@Component"}),`({
  `,e(s.span,{className:"hljs-attr",children:"selector"}),": ",e(s.span,{className:"hljs-string",children:"'app-footer'"}),`,
  `,e(s.span,{className:"hljs-attr",children:"template"}),": ",e(s.span,{className:"hljs-string",children:'`\n    <footer class="dark:bg-gray-800 dark:text-gray-50">Footer</footer>\n  `'}),`,
})
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"FooterComponent"}),` {}
`]})}),`
`,e(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"NgModule"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"CommonModule"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/common'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"FooterComponent"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'./footer.component'"}),`;

`,e(s.span,{className:"hljs-meta",children:"@NgModule"}),`({
  `,e(s.span,{className:"hljs-attr",children:"declarations"}),": [",e(s.span,{className:"hljs-title class_",children:"HomeComponent"}),", ",e(s.span,{className:"hljs-title class_",children:"FooterComponent"}),`],
  `,e(s.span,{className:"hljs-attr",children:"exports"}),`: [],
  `,e(s.span,{className:"hljs-attr",children:"imports"}),": [",e(s.span,{className:"hljs-title class_",children:"CommonModule"}),`],
})
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"AppModuleModule"}),` {}
`]})}),`
`,n(s.p,{children:["这种写法导致我们始终无法摆脱 ",e(s.code,{children:"NgModule"})]}),`
`,n(s.p,{children:["但其实我们的意图就是在 ",e(s.code,{children:"AppComponent"})," 中使用 ",e(s.code,{children:"FooterComponent"})]}),`
`,n(s.p,{children:["换成 ",e(s.code,{children:"React"})," 中的写法 其实会更便于管理和理解"]}),`
`,n(s.p,{children:["用上我们的新特性 ",e(s.code,{children:"standalone"})]}),`
`,e(s.p,{children:"Footer 组件就改造成这样"}),`
`,e(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Component"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;

`,e(s.span,{className:"hljs-meta",children:"@Component"}),`({
  `,e(s.span,{className:"hljs-attr",children:"selector"}),": ",e(s.span,{className:"hljs-string",children:"'app-footer'"}),`,
  `,e(s.span,{className:"hljs-comment",children:"// 将该组件声明成独立组件"}),`
  `,e(s.span,{className:"hljs-attr",children:"standalone"}),": ",e(s.span,{className:"hljs-literal",children:"true"}),`,
  `,e(s.span,{className:"hljs-attr",children:"template"}),": ",e(s.span,{className:"hljs-string",children:'`\n    <footer class="dark:bg-gray-800 dark:text-gray-50">Footer</footer>\n  `'}),`,
})
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"FooterComponent"}),` {}
`]})}),`
`,e(s.p,{children:"然后比如在 Home 页面 我们就可以这样使用"}),`
`,e(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Component"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;

`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"FooterComponent"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@components/footer/footer.component'"}),`;

`,e(s.span,{className:"hljs-meta",children:"@Component"}),`({
  `,e(s.span,{className:"hljs-attr",children:"selector"}),": ",e(s.span,{className:"hljs-string",children:"'app-home'"}),`,
  `,e(s.span,{className:"hljs-attr",children:"standalone"}),": ",e(s.span,{className:"hljs-literal",children:"true"}),`,
  `,e(s.span,{className:"hljs-comment",children:"// 声明需要使用的 component / pipe / directive 但是它们也必须都是独立组件"}),`
  `,e(s.span,{className:"hljs-attr",children:"imports"}),": [",e(s.span,{className:"hljs-title class_",children:"FooterComponent"}),`],
  `,e(s.span,{className:"hljs-attr",children:"template"}),": ",e(s.span,{className:"hljs-string",children:"`<app-footer></app-footer>`"}),`,
})
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"WelcomeComponent"}),` {}
`]})}),`
`,e(s.p,{children:"独立组件可以直接用于懒加载 本来我们必须借助 NgModule 来实现"}),`
`,e(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"NgModule"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"RouterModule"}),", ",e(s.span,{className:"hljs-title class_",children:"Routes"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/router'"}),`;

`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"CustomPreloadingStrategy"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@views/basic-syntax/router/customPreloadingStrategy'"}),`;

`,e(s.span,{className:"hljs-keyword",children:"const"})," ",e(s.span,{className:"hljs-attr",children:"routes"}),": ",e(s.span,{className:"hljs-title class_",children:"Routes"}),` = [
  {
    `,e(s.span,{className:"hljs-attr",children:"path"}),": ",e(s.span,{className:"hljs-string",children:"'home'"}),`,
    `,e(s.span,{className:"hljs-comment",children:"// 之前想要实现懒加载 这里必须是一个NgModule 现在使用独立组件也可以 并且更加简洁"}),`
    `,e(s.span,{className:"hljs-attr",children:"loadComponent"}),": ",e(s.span,{className:"hljs-function",children:"() =>"}),`
      `,e(s.span,{className:"hljs-keyword",children:"import"}),"(",e(s.span,{className:"hljs-string",children:"'@views/home/home.component'"}),").",e(s.span,{className:"hljs-title function_",children:"then"}),"(",n(s.span,{className:"hljs-function",children:[e(s.span,{className:"hljs-params",children:"mod"})," =>"]})," mod.",e(s.span,{className:"hljs-property",children:"HomeComponent"}),`),
  },
];

`,e(s.span,{className:"hljs-meta",children:"@NgModule"}),`({
  `,e(s.span,{className:"hljs-attr",children:"imports"}),`: [
    `,e(s.span,{className:"hljs-title class_",children:"RouterModule"}),".",e(s.span,{className:"hljs-title function_",children:"forRoot"}),`(routes, {
      `,e(s.span,{className:"hljs-attr",children:"preloadingStrategy"}),": ",e(s.span,{className:"hljs-title class_",children:"CustomPreloadingStrategy"}),`,
    }),
  ],
  `,e(s.span,{className:"hljs-attr",children:"exports"}),": [",e(s.span,{className:"hljs-title class_",children:"RouterModule"}),`],
})
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"AppRoutingModule"}),` {}
`]})})]})}function p(a={}){const{wrapper:s}=Object.assign({},c(),a.components);return s?e(s,Object.assign({},a,{children:e(l,a)})):l(a)}export{p as default,d as frontmatter};
