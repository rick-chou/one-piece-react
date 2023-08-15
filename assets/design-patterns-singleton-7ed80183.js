import{u as c,j as n,a as e,F as r}from"./index-84428b21.js";import"./antd-e9e8fd35.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const d={title:"JavaScript - design-patterns-singleton"};function l(a){const s=Object.assign({p:"p",pre:"pre",code:"code",span:"span"},c(),a.components);return e(r,{children:[n(s.p,{children:"单例模式的定义是： 保证一个类有且仅有一个实例，并提供一个访问它的全局访问点。"}),`
`,n(s.p,{children:"思路： 用闭包返回一个实例 对这个实例做条件判断 有就返回 没有就初始化 这样我们在每次 new 的时候就只能得到一个实例"}),`
`,n(s.p,{children:"例如 全局的蒙层 全局的变量都适合用单例模式来创建 因为我们谁也不希望存在两个蒙层"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"Singleton"})," = (",n(s.span,{className:"hljs-keyword",children:"function"})," (",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"let"})," instance = ",n(s.span,{className:"hljs-literal",children:"null"}),`;

  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-keyword",children:"function"})," (",n(s.span,{className:"hljs-params",children:"name, age"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"if"}),` (instance) {
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` instance;
    }

    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"name"}),` = name;
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"age"}),` = age;

    `,n(s.span,{className:"hljs-keyword",children:"return"})," (instance = ",n(s.span,{className:"hljs-variable language_",children:"this"}),`);
  };
})();

`,n(s.span,{className:"hljs-comment",children:"// test"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," a = ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"Singleton"}),"(",n(s.span,{className:"hljs-string",children:"'rick'"}),", ",n(s.span,{className:"hljs-number",children:"18"}),`);
`,n(s.span,{className:"hljs-keyword",children:"const"})," b = ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"Singleton"}),"(",n(s.span,{className:"hljs-string",children:"'rick'"}),", ",n(s.span,{className:"hljs-number",children:"18"}),`);

`,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(a === b); ",n(s.span,{className:"hljs-comment",children:"// true"}),`
`,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(a); ",n(s.span,{className:"hljs-comment",children:"// { name: 'rick', age: 18 }"}),`
`]})})]})}function o(a={}){const{wrapper:s}=Object.assign({},c(),a.components);return s?n(s,Object.assign({},a,{children:n(l,a)})):l(a)}export{o as default,d as frontmatter};
