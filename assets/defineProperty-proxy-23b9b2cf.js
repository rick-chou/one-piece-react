import{u as c,j as n,a as e,F as r}from"./index-54e45a6e.js";import"./antd-4d5318cf.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const d={title:"JavaScript - defineProperty & proxy"};function a(l){const s=Object.assign({p:"p",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",span:"span"},c(),l.components);return e(r,{children:[n(s.p,{children:"我们可以对一个对象进行赋值和取值"}),`
`,n(s.p,{children:"但是如果我们在赋值或取值的时候 需要进行一些操作"}),`
`,n(s.p,{children:"此时 我们该如何监听到数据的改变呢 实现数据监听呢"}),`
`,n(s.h2,{children:"defineProperty"}),`
`,e(s.blockquote,{children:[`
`,n(s.p,{children:"Object.defineProperty(obj, prop, descriptor)"}),`
`]}),`
`,e(s.ul,{children:[`
`,e(s.li,{children:[`
`,n(s.p,{children:"obj: 要在其上定义属性的对象。"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"prop: 要定义或修改的属性的名称。"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"descriptor: 将被定义或修改的属性的描述符。"}),`
`,e(s.ul,{children:[`
`,e(s.li,{children:[`
`,n(s.p,{children:"value: 直接给这个属性赋值"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"writable: 是否可修改 默认 false"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"enumerable: 是否可枚举(遍历拿值) 默认 false"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"configurable: 是否可删除 默认 false"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"set"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"get"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n(s.p,{children:n(s.strong,{children:"注意：value/writable 和 set/get 不能同时出现"})}),`
`,n(s.p,{children:n(s.strong,{children:"可理解为既然可以手动修改 则 value 必定会有值 且是可读写的"})}),`
`,n(s.p,{children:n(s.strong,{children:"直接使用对象字面量则默认 descriptor 都为 true 若只指定 value 则默认 descriptor 都为 false"})}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"var"}),` o = {};

o.`,n(s.span,{className:"hljs-property",children:"a"})," = ",n(s.span,{className:"hljs-number",children:"1"}),`;
`,n(s.span,{className:"hljs-comment",children:"// 等同于："}),`
`,n(s.span,{className:"hljs-title class_",children:"Object"}),".",n(s.span,{className:"hljs-title function_",children:"defineProperty"}),"(o, ",n(s.span,{className:"hljs-string",children:"'a'"}),`, {
  `,n(s.span,{className:"hljs-attr",children:"value"}),": ",n(s.span,{className:"hljs-number",children:"1"}),`,
  `,n(s.span,{className:"hljs-attr",children:"writable"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),`,
  `,n(s.span,{className:"hljs-attr",children:"configurable"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),`,
  `,n(s.span,{className:"hljs-attr",children:"enumerable"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),`,
});

`,n(s.span,{className:"hljs-comment",children:"// 另一方面，"}),`
`,n(s.span,{className:"hljs-title class_",children:"Object"}),".",n(s.span,{className:"hljs-title function_",children:"defineProperty"}),"(o, ",n(s.span,{className:"hljs-string",children:"'a'"}),", { ",n(s.span,{className:"hljs-attr",children:"value"}),": ",n(s.span,{className:"hljs-number",children:"1"}),` });
`,n(s.span,{className:"hljs-comment",children:"// 等同于："}),`
`,n(s.span,{className:"hljs-title class_",children:"Object"}),".",n(s.span,{className:"hljs-title function_",children:"defineProperty"}),"(o, ",n(s.span,{className:"hljs-string",children:"'a'"}),`, {
  `,n(s.span,{className:"hljs-attr",children:"value"}),": ",n(s.span,{className:"hljs-number",children:"1"}),`,
  `,n(s.span,{className:"hljs-attr",children:"writable"}),": ",n(s.span,{className:"hljs-literal",children:"false"}),`,
  `,n(s.span,{className:"hljs-attr",children:"configurable"}),": ",n(s.span,{className:"hljs-literal",children:"false"}),`,
  `,n(s.span,{className:"hljs-attr",children:"enumerable"}),": ",n(s.span,{className:"hljs-literal",children:"false"}),`,
});
`]})}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"var"}),` obj = {};

`,n(s.span,{className:"hljs-title class_",children:"Object"}),".",n(s.span,{className:"hljs-title function_",children:"defineProperty"}),"(obj, ",n(s.span,{className:"hljs-string",children:"'name'"}),`, {
  `,n(s.span,{className:"hljs-comment",children:"// value: 'chou',"}),`
  `,n(s.span,{className:"hljs-comment",children:"// writable: true,"}),`
  `,n(s.span,{className:"hljs-attr",children:"enumerable"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),`,
  `,n(s.span,{className:"hljs-attr",children:"configurable"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),`,
  `,n(s.span,{className:"hljs-title function_",children:"set"}),"(",n(s.span,{className:"hljs-params",children:"newValue"}),`) {
    value = newValue;
    `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'set方法执行了'"}),`);
  },
  `,n(s.span,{className:"hljs-title function_",children:"get"}),"(",n(s.span,{className:"hljs-params"}),`) {
    `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'get方法执行了'"}),`);
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` value;
  },
});

obj.`,n(s.span,{className:"hljs-property",children:"name"})," = ",n(s.span,{className:"hljs-string",children:"'chou'"}),`;

`,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(obj.",n(s.span,{className:"hljs-property",children:"name"}),`);

`,n(s.span,{className:"hljs-comment",children:"// output"}),`
`,n(s.span,{className:"hljs-comment",children:"// set方法执行了"}),`
`,n(s.span,{className:"hljs-comment",children:"// get方法执行了"}),`
`,n(s.span,{className:"hljs-comment",children:"// chou"}),`
`]})}),`
`,e(s.p,{children:["如果我们需要一次定义多个属性 则可以使用",n(s.code,{children:"Object.defineProperties(obj, props)"})]}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"var"}),` obj = {};
`,n(s.span,{className:"hljs-title class_",children:"Object"}),".",n(s.span,{className:"hljs-title function_",children:"defineProperties"}),`(obj, {
  `,n(s.span,{className:"hljs-attr",children:"property1"}),`: {
    `,n(s.span,{className:"hljs-attr",children:"value"}),": ",n(s.span,{className:"hljs-string",children:"'Hello'"}),`,
    `,n(s.span,{className:"hljs-attr",children:"writable"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),`,
  },
  `,n(s.span,{className:"hljs-attr",children:"property2"}),`: {
    `,n(s.span,{className:"hljs-attr",children:"value"}),": ",n(s.span,{className:"hljs-string",children:"'Chou'"}),`,
    `,n(s.span,{className:"hljs-attr",children:"writable"}),": ",n(s.span,{className:"hljs-literal",children:"false"}),`,
  },
  `,n(s.span,{className:"hljs-comment",children:"// etc. etc."}),`
});
`]})}),`
`,n(s.p,{children:"Vue2 就是使用了这个 Api 来实现了数据监听 从而实现了它的响应式体系"}),`
`,n(s.h2,{children:"proxy"}),`
`,n(s.p,{children:"Vue3 开始 将用 proxy 代替 defineProperty 那么它对比 defineProperty 有什么优势呢"}),`
`,n(s.p,{children:"proxy 对比 defineProperty 它的优势在于 defineProperty 只能截取到 set 和 get"}),`
`,e(s.p,{children:["而 proxy 有 13 种 拦截器可供选择 具体的每种拦截器","可参考"]}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"}),` handler = {
  `,n(s.span,{className:"hljs-title function_",children:"set"}),"(",n(s.span,{className:"hljs-params",children:"obj, prop, value"}),`) {
    obj[prop] = value;
    `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",e(s.span,{className:"hljs-string",children:["`",n(s.span,{className:"hljs-subst",children:"${prop}"}),"属性的set方法执行了`"]}),`);
  },
  `,n(s.span,{className:"hljs-title function_",children:"get"}),"(",n(s.span,{className:"hljs-params",children:"obj, prop"}),`) {
    `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",e(s.span,{className:"hljs-string",children:["`",n(s.span,{className:"hljs-subst",children:"${prop}"}),"属性的get方法执行了`"]}),`);
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` obj[prop];
  },
  `,n(s.span,{className:"hljs-title function_",children:"has"}),"(",n(s.span,{className:"hljs-params",children:"obj, key"}),`) {
    `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'has方法执行了'"}),`);
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (key ",n(s.span,{className:"hljs-keyword",children:"in"}),` obj) {
      `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-literal",children:"true"}),`;
    } `,n(s.span,{className:"hljs-keyword",children:"else"}),` {
      `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-literal",children:"false"}),`;
    }
  },
};

`,n(s.span,{className:"hljs-keyword",children:"var"})," obj = ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"Proxy"}),`({}, handler);

obj.`,n(s.span,{className:"hljs-property",children:"name"})," = ",n(s.span,{className:"hljs-string",children:"'chou'"}),`;
obj.`,n(s.span,{className:"hljs-property",children:"age"})," = ",n(s.span,{className:"hljs-number",children:"18"}),`;

`,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(obj.",n(s.span,{className:"hljs-property",children:"name"}),`);
`,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'name'"})," ",n(s.span,{className:"hljs-keyword",children:"in"}),` obj);

`,n(s.span,{className:"hljs-comment",children:"// output"}),`
`,n(s.span,{className:"hljs-comment",children:"// name属性的set方法执行了"}),`
`,n(s.span,{className:"hljs-comment",children:"// age属性的set方法执行了"}),`
`,n(s.span,{className:"hljs-comment",children:"// name属性的get方法执行了"}),`
`,n(s.span,{className:"hljs-comment",children:"// chou"}),`
`,n(s.span,{className:"hljs-comment",children:"// has方法执行了"}),`
`,n(s.span,{className:"hljs-comment",children:"// true"}),`
`]})})]})}function m(l={}){const{wrapper:s}=Object.assign({},c(),l.components);return s?n(s,Object.assign({},l,{children:n(a,l)})):a(l)}export{m as default,d as frontmatter};
