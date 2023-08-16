import{u as c,j as l,a as s,F as i}from"./index-8ee1bc25.js";import"./antd-e9e8fd35.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const t={title:"JavaScript - this"};function a(e){const n=Object.assign({blockquote:"blockquote",h2:"h2",ul:"ul",li:"li",p:"p",pre:"pre",code:"code",span:"span",strong:"strong"},c(),e.components);return s(i,{children:[s(n.blockquote,{children:[`
`,`
`]}),`
`,l(n.h2,{children:"this 的五种绑定方式"}),`
`,s(n.ul,{children:[`
`,s(n.li,{children:[`
`,l(n.p,{children:"默认绑定(非严格模式下 this 指向全局对象, 严格模式下 this 会绑定到 undefined)"}),`
`]}),`
`,s(n.li,{children:[`
`,l(n.p,{children:"隐式绑定(当函数引用有上下文对象时, 如 obj.foo()的调用方式, foo 内的 this 指向 obj)"}),`
`]}),`
`,s(n.li,{children:[`
`,l(n.p,{children:"显示绑定(通过 call()或者 apply()方法直接指定 this 的绑定对象, 如 foo.call(obj))"}),`
`]}),`
`,s(n.li,{children:[`
`,l(n.p,{children:"new 绑定"}),`
`]}),`
`,s(n.li,{children:[`
`,l(n.p,{children:"箭头函数绑定(this 的指向由外层作用域决定的)"}),`
`]}),`
`]}),`
`,l(n.h2,{children:"默认绑定"}),`
`,l(n.p,{children:`非严格模式下 var 声明的变量会变成 window 的属性 function 会变成 window 的方法
所以 function 内部的 this 指向 window`}),`
`,l(n.pre,{children:s(n.code,{className:"hljs language-js",children:[l(n.span,{className:"hljs-keyword",children:"var"})," a = ",l(n.span,{className:"hljs-number",children:"10"}),`;
`,l(n.span,{className:"hljs-keyword",children:"function"})," ",l(n.span,{className:"hljs-title function_",children:"foo"}),"(",l(n.span,{className:"hljs-params"}),`) {
  `,l(n.span,{className:"hljs-variable language_",children:"console"}),".",l(n.span,{className:"hljs-title function_",children:"log"}),"(",l(n.span,{className:"hljs-variable language_",children:"this"}),".",l(n.span,{className:"hljs-property",children:"a"}),`);
}
`,l(n.span,{className:"hljs-title function_",children:"foo"}),"(); ",l(n.span,{className:"hljs-comment",children:"// 10"}),`
`,l(n.span,{className:"hljs-variable language_",children:"window"}),".",l(n.span,{className:"hljs-property",children:"a"}),"; ",l(n.span,{className:"hljs-comment",children:"//10"}),`
`,l(n.span,{className:"hljs-variable language_",children:"window"}),".",l(n.span,{className:"hljs-property",children:"foo"}),"; ",l(n.span,{className:"hljs-comment",children:"// foo(){}"}),`
`]})}),`
`,l(n.p,{children:"但是严格模式下 全局的 this 会指向 undefined"}),`
`,l(n.h2,{children:"隐式绑定"}),`
`,l(n.p,{children:"this 永远指向最后调用它的那个对象"}),`
`,l(n.pre,{children:s(n.code,{className:"hljs language-js",children:[l(n.span,{className:"hljs-keyword",children:"var"})," a = ",l(n.span,{className:"hljs-number",children:"2"}),`;
`,l(n.span,{className:"hljs-keyword",children:"function"})," ",l(n.span,{className:"hljs-title function_",children:"foo"}),"(",l(n.span,{className:"hljs-params"}),`) {
  `,l(n.span,{className:"hljs-variable language_",children:"console"}),".",l(n.span,{className:"hljs-title function_",children:"log"}),"(",l(n.span,{className:"hljs-variable language_",children:"this"}),".",l(n.span,{className:"hljs-property",children:"a"}),`);
}
`,l(n.span,{className:"hljs-keyword",children:"var"}),` bar = {
  `,l(n.span,{className:"hljs-attr",children:"a"}),": ",l(n.span,{className:"hljs-number",children:"1"}),`,
  foo,
};

bar.`,l(n.span,{className:"hljs-title function_",children:"foo"}),"(); ",l(n.span,{className:"hljs-comment",children:"// 1"}),`
`]})}),`
`,l(n.h2,{children:"new 绑定"}),`
`,l(n.pre,{children:s(n.code,{className:"hljs language-js",children:[l(n.span,{className:"hljs-keyword",children:"function"})," ",l(n.span,{className:"hljs-title function_",children:"Person"}),"(",l(n.span,{className:"hljs-params",children:"name"}),`) {
  `,l(n.span,{className:"hljs-variable language_",children:"this"}),".",l(n.span,{className:"hljs-property",children:"name"}),` = name;
}
`,l(n.span,{className:"hljs-keyword",children:"var"})," name = ",l(n.span,{className:"hljs-string",children:"'window'"}),`;
`,l(n.span,{className:"hljs-keyword",children:"var"})," person1 = ",l(n.span,{className:"hljs-keyword",children:"new"})," ",l(n.span,{className:"hljs-title class_",children:"Person"}),"(",l(n.span,{className:"hljs-string",children:"'chou'"}),`);
`,l(n.span,{className:"hljs-variable language_",children:"console"}),".",l(n.span,{className:"hljs-title function_",children:"log"}),"(person1.",l(n.span,{className:"hljs-property",children:"name"}),"); ",l(n.span,{className:"hljs-comment",children:"// chou"}),`
`]})}),`
`,l(n.h2,{children:"显示绑定"}),`
`,l(n.p,{children:"注意 apply 和 call 会执行方法 但是 bind 不会"}),`
`,l(n.p,{children:l(n.strong,{children:"总结一下这部分的知识点好了："})}),`
`,s(n.ul,{children:[`
`,s(n.li,{children:[`
`,s(n.p,{children:[l(n.code,{children:"this"})," 永远指向最后调用它的那个对象"]}),`
`]}),`
`,s(n.li,{children:[`
`,s(n.p,{children:["匿名函数的",l(n.code,{children:"this"}),"永远指向",l(n.code,{children:"window"})]}),`
`]}),`
`,s(n.li,{children:[`
`,s(n.p,{children:["使用",l(n.code,{children:".call()"}),"或者",l(n.code,{children:".apply()"}),"的函数是会直接执行的"]}),`
`]}),`
`,s(n.li,{children:[`
`,s(n.p,{children:[l(n.code,{children:"bind()"}),"是创建一个新的函数，需要手动调用才会执行"]}),`
`]}),`
`,s(n.li,{children:[`
`,s(n.p,{children:["如果",l(n.code,{children:"call、apply、bind"}),"接收到的第一个参数是空或者",l(n.code,{children:"null、undefined"}),"的话，则会忽略这个参数"]}),`
`]}),`
`,s(n.li,{children:[`
`,s(n.p,{children:[l(n.code,{children:"forEach、map、filter"}),"函数的第二个参数也是能显式绑定",l(n.code,{children:"this"}),"的"]}),`
`]}),`
`]}),`
`,l(n.h2,{children:"箭头函数"}),`
`,s(n.ul,{children:[`
`,s(n.li,{children:[`
`,l(n.p,{children:"箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined"}),`
`]}),`
`,s(n.li,{children:[`
`,l(n.p,{children:"不受 apply 等方法修改"}),`
`]}),`
`]}),`
`,s(n.p,{children:["箭头函数的",l(n.code,{children:"this"}),"无法通过",l(n.code,{children:"bind、call、apply"}),"来",l(n.strong,{children:"直接"}),"修改，"]}),`
`,s(n.p,{children:["但是可以通过改变作用域中",l(n.code,{children:"this"}),"的指向来间接修改。"]}),`
`,l(n.pre,{children:s(n.code,{className:"hljs language-js",children:[l(n.span,{className:"hljs-keyword",children:"var"})," name = ",l(n.span,{className:"hljs-string",children:"'window'"}),`;
`,l(n.span,{className:"hljs-keyword",children:"var"}),` obj1 = {
  `,l(n.span,{className:"hljs-attr",children:"name"}),": ",l(n.span,{className:"hljs-string",children:"'obj1'"}),`,
  `,l(n.span,{className:"hljs-attr",children:"foo1"}),": ",l(n.span,{className:"hljs-keyword",children:"function"})," (",l(n.span,{className:"hljs-params"}),`) {
    `,l(n.span,{className:"hljs-variable language_",children:"console"}),".",l(n.span,{className:"hljs-title function_",children:"log"}),"(",l(n.span,{className:"hljs-variable language_",children:"this"}),".",l(n.span,{className:"hljs-property",children:"name"}),`);
    `,l(n.span,{className:"hljs-keyword",children:"return"})," ",l(n.span,{className:"hljs-function",children:"() =>"}),` {
      `,l(n.span,{className:"hljs-variable language_",children:"console"}),".",l(n.span,{className:"hljs-title function_",children:"log"}),"(",l(n.span,{className:"hljs-variable language_",children:"this"}),".",l(n.span,{className:"hljs-property",children:"name"}),`);
    };
  },
  `,l(n.span,{className:"hljs-attr",children:"foo2"}),": ",l(n.span,{className:"hljs-function",children:"() =>"}),` {
    `,l(n.span,{className:"hljs-variable language_",children:"console"}),".",l(n.span,{className:"hljs-title function_",children:"log"}),"(",l(n.span,{className:"hljs-variable language_",children:"this"}),".",l(n.span,{className:"hljs-property",children:"name"}),`);
    `,l(n.span,{className:"hljs-keyword",children:"return"})," ",l(n.span,{className:"hljs-keyword",children:"function"})," (",l(n.span,{className:"hljs-params"}),`) {
      `,l(n.span,{className:"hljs-variable language_",children:"console"}),".",l(n.span,{className:"hljs-title function_",children:"log"}),"(",l(n.span,{className:"hljs-variable language_",children:"this"}),".",l(n.span,{className:"hljs-property",children:"name"}),`);
    };
  },
};
`,l(n.span,{className:"hljs-keyword",children:"var"}),` obj2 = {
  `,l(n.span,{className:"hljs-attr",children:"name"}),": ",l(n.span,{className:"hljs-string",children:"'obj2'"}),`,
};
obj1.`,l(n.span,{className:"hljs-property",children:"foo1"}),".",l(n.span,{className:"hljs-title function_",children:"call"}),`(obj2)();
obj1.`,l(n.span,{className:"hljs-title function_",children:"foo1"}),"().",l(n.span,{className:"hljs-title function_",children:"call"}),`(obj2);
obj1.`,l(n.span,{className:"hljs-property",children:"foo2"}),".",l(n.span,{className:"hljs-title function_",children:"call"}),`(obj2)();
obj1.`,l(n.span,{className:"hljs-title function_",children:"foo2"}),"().",l(n.span,{className:"hljs-title function_",children:"call"}),`(obj2);
`]})}),`
`,s(n.ul,{children:[`
`,s(n.li,{children:[`
`,l(n.p,{children:"obj1.foo1.call(obj2)()第一层为普通函数，并且通过.call 改变了 this 指向为 obj2，所以会打印出 obj2，第二层为箭头函数，它的 this 和外层作用域中的 this 相同，因此也是 obj2。"}),`
`]}),`
`,s(n.li,{children:[`
`,l(n.p,{children:"obj1.foo().call(obj2)第一层打印出 obj1，第二层为箭头函数，使用了.call 想要修改 this 的指向，但是并不能成功，因此.call(obj2)对箭头函数无效，还是打印出 obj1。"}),`
`]}),`
`,s(n.li,{children:[`
`,l(n.p,{children:"obj1.foo2.call(obj2)()第一层为箭头函数，并且想要通过.call(obj2)改变 this 指向，但是无效，且它的外层作用域是 window，所以会打印出 window，第二层为普通函数，this 是最后调用者 window，所以也会打印出 window。"}),`
`]}),`
`,s(n.li,{children:[`
`,l(n.p,{children:"obj1.foo2().call(obj2)第一层为箭头函数，外层作用域是 window，打印出 window，第二层为普通函数，且使用了.call(obj2)来改变 this 指向，所以打印出了 obj2。"}),`
`]}),`
`]}),`
`,l(n.p,{children:l(n.strong,{children:"总结"})}),`
`,s(n.ul,{children:[`
`,s(n.li,{children:[`
`,s(n.p,{children:[l(n.strong,{children:"普通或匿名函数内的 this，就是调用函数的那个对象"}),"，且绝大多数匿名函数均被实现为 this 指向 window。"]}),`
`]}),`
`,s(n.li,{children:[`
`,l(n.p,{children:l(n.strong,{children:"箭头函数内的 this，就是箭头函数被定义时所在作用域的 this"})}),`
`]}),`
`,s(n.li,{children:[`
`,s(n.p,{children:["js 的 this 只会在",l(n.strong,{children:"函数作用域"}),"或",l(n.strong,{children:"全局作用域"}),"，不要与块级作用域混淆"]}),`
`]}),`
`]})]})}function p(e={}){const{wrapper:n}=Object.assign({},c(),e.components);return n?l(n,Object.assign({},e,{children:l(a,e)})):a(e)}export{p as default,t as frontmatter};
