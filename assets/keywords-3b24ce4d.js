import{u as c,j as n,a as l,F as r}from"./index-84428b21.js";import"./antd-e9e8fd35.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const p={title:"TypeScript - keywords"};function a(e){const s=Object.assign({p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre",span:"span",img:"img",ul:"ul",li:"li"},c(),e.components);return l(r,{children:[n(s.p,{children:"本文记录 TS 一些工具类型的实现"}),`
`,l(s.p,{children:["源码约在 ",n(s.code,{children:"typescript/lib/lib.es5.d.ts"})," 1468 行处开始"]}),`
`,n(s.p,{children:"在阅读这些工具类型的实现时 需要先了解一些 TS 中的关键字"}),`
`,n(s.h2,{children:"关键字"}),`
`,n(s.h3,{children:"keyof"}),`
`,n(s.p,{children:"keyof 与 Object.keys 相似 不过 keyof 是用来获取对象类型的键的"}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"Person"}),` {
  `,n(s.span,{className:"hljs-attr",children:"age"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"Player"}),` = {
  `,n(s.span,{className:"hljs-attr",children:"age"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
};

`,n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"PersonKeys"})," = keyof ",n(s.span,{className:"hljs-title class_",children:"Person"}),"; ",n(s.span,{className:"hljs-comment",children:'//  --> "age" | "name"'}),`
`,n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"PlayerKey"})," = keyof ",n(s.span,{className:"hljs-title class_",children:"Player"}),"; ",n(s.span,{className:"hljs-comment",children:'//  --> "age" | "name"'}),`
`]})}),`
`,n(s.p,{children:n(s.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7886d7da666b424cbbc5603391d79720~tplv-k3u1fbpfcp-zoom-1.image",alt:""})}),`
`,n(s.h3,{children:"typeof"}),`
`,n(s.p,{children:"typeof 用来返回一个值的 type"}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"const"})," s = ",n(s.span,{className:"hljs-string",children:"'hello'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"n"}),": ",n(s.span,{className:"hljs-keyword",children:"typeof"})," s; ",n(s.span,{className:"hljs-comment",children:"// --> const n: string"}),`
`]})}),`
`,l(s.p,{children:["例如 当我们想把多个工具合成一个的时候 就可以用",n(s.code,{children:"typeof"}),"帮我们减少重复定义"]}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"import"})," logger ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'./logger'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"import"})," utils ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'./utils'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"Context"})," ",n(s.span,{className:"hljs-keyword",children:"extends"})," ",n(s.span,{className:"hljs-title class_",children:"KoaContext"}),` {
  `,n(s.span,{className:"hljs-attr",children:"logger"}),": ",n(s.span,{className:"hljs-keyword",children:"typeof"}),` logger;
  `,n(s.span,{className:"hljs-attr",children:"utils"}),": ",n(s.span,{className:"hljs-keyword",children:"typeof"}),` utils;
}
`]})}),`
`,n(s.h3,{children:"extends"}),`
`,n(s.p,{children:"extends 用来继承"}),`
`,n(s.p,{children:"注意 只有 interface 和 class 才可以继承"}),`
`,n(s.p,{children:"type 关键字声明的类型别名无法继承"}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"Person"}),` {
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-attr",children:"age"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"Player"})," ",n(s.span,{className:"hljs-keyword",children:"extends"})," ",n(s.span,{className:"hljs-title class_",children:"Person"}),` {
  `,n(s.span,{className:"hljs-attr",children:"item"}),": ",n(s.span,{className:"hljs-string",children:"'ball'"})," | ",n(s.span,{className:"hljs-string",children:"'swing'"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"p1"}),": ",n(s.span,{className:"hljs-title class_",children:"Player"}),` = {
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-string",children:"'nanshu'"}),`,
  `,n(s.span,{className:"hljs-attr",children:"age"}),": ",n(s.span,{className:"hljs-number",children:"18"}),`,
  `,n(s.span,{className:"hljs-attr",children:"item"}),": ",n(s.span,{className:"hljs-string",children:"'ball'"}),`,
};
`]})}),`
`,n(s.h3,{children:"in"}),`
`,n(s.p,{children:"in 关键字可以帮助我们生成映射类型"}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"enum"})," ",n(s.span,{className:"hljs-title class_",children:"Letter"}),` {
  A = `,n(s.span,{className:"hljs-string",children:"'a'"}),`,
  B = `,n(s.span,{className:"hljs-string",children:"'b'"}),`,
  C = `,n(s.span,{className:"hljs-string",children:"'c'"}),`,
}

`,n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"LetterMap"}),` = {
  [key `,n(s.span,{className:"hljs-keyword",children:"in"})," ",n(s.span,{className:"hljs-title class_",children:"Letter"}),"]: ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
};

`,n(s.span,{className:"hljs-comment",children:"// 等价于"}),`
`,n(s.span,{className:"hljs-keyword",children:"type"}),` _LetterMap = {
  `,n(s.span,{className:"hljs-attr",children:"a"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-attr",children:"b"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-attr",children:"c"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
};

`,n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"Keys"})," = ",n(s.span,{className:"hljs-string",children:"'name'"})," | ",n(s.span,{className:"hljs-string",children:"'sex'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"PersonMap"}),` = {
  [key `,n(s.span,{className:"hljs-keyword",children:"in"})," ",n(s.span,{className:"hljs-title class_",children:"Keys"}),"]: ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
};

`,n(s.span,{className:"hljs-comment",children:"// 等价于"}),`
`,n(s.span,{className:"hljs-keyword",children:"type"}),` _PersonMap = {
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-attr",children:"sex"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
};
`]})}),`
`,n(s.h3,{children:"is"}),`
`,n(s.p,{children:"is 用作类型保护"}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"isString1"}),"(",l(s.span,{className:"hljs-params",children:["test: ",n(s.span,{className:"hljs-built_in",children:"any"})]}),"): test is ",n(s.span,{className:"hljs-built_in",children:"string"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-keyword",children:"typeof"})," test === ",n(s.span,{className:"hljs-string",children:"'string'"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"isString2"}),"(",l(s.span,{className:"hljs-params",children:["test: ",n(s.span,{className:"hljs-built_in",children:"any"})]}),"): ",n(s.span,{className:"hljs-built_in",children:"boolean"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-keyword",children:"typeof"})," test === ",n(s.span,{className:"hljs-string",children:"'string'"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"const"})," a = ",n(s.span,{className:"hljs-title function_",children:"isString1"}),"(",n(s.span,{className:"hljs-string",children:"'string'"}),"); ",n(s.span,{className:"hljs-comment",children:"// --> true"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," b = ",n(s.span,{className:"hljs-title function_",children:"isString2"}),"(",n(s.span,{className:"hljs-string",children:"'string'"}),"); ",n(s.span,{className:"hljs-comment",children:"// --> true"}),`
`]})}),`
`,n(s.p,{children:"这样来看 似乎两者没有差别 都能正确判断 string 类型"}),`
`,n(s.p,{children:"但是如果场景复杂一点 如下"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"doSomething"}),"(",l(s.span,{className:"hljs-params",children:["params: ",n(s.span,{className:"hljs-built_in",children:"any"})]}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"if"})," (",n(s.span,{className:"hljs-title function_",children:"isString1"}),`(params)) {
    params.`,n(s.span,{className:"hljs-title function_",children:"toLowerCase"}),`();
    `,n(s.span,{className:"hljs-comment",children:"// params.xxx(); // --> Property 'xxx' does not exist on type 'string'"}),`
  }
  `,n(s.span,{className:"hljs-keyword",children:"if"})," (",n(s.span,{className:"hljs-title function_",children:"isString2"}),`(params)) {
    params.`,n(s.span,{className:"hljs-title function_",children:"xxx"}),`();
  }
}

`,n(s.span,{className:"hljs-title function_",children:"doSomething"}),"(",n(s.span,{className:"hljs-string",children:"'string'"}),"); ",n(s.span,{className:"hljs-comment",children:"// TypeError: params.xxx is not a function"}),`
`]})}),`
`,n(s.p,{children:"isString1 判断后的结果会返回一个 string 的保护类型"}),`
`,n(s.p,{children:n(s.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b5e8ec46a8e40649e9278dcb68589e4~tplv-k3u1fbpfcp-zoom-1.image",alt:""})}),`
`,n(s.p,{children:"而 isString2 因为 params 是 any 会绕过 ts 的检查"}),`
`,n(s.p,{children:"所以就算调用了一个 string 类型上不存在的属性 也不会在编码阶段有任何问题 只有在运行时候才会报错"}),`
`,n(s.h3,{children:"infer"}),`
`,n(s.p,{children:"infer 可以帮助我们推断出函数的返回值"}),`
`,n(s.p,{children:"举个例子"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," a<T> = T ",n(s.span,{className:"hljs-keyword",children:"extends"})," (...",n(s.span,{className:"hljs-attr",children:"args"}),": ",n(s.span,{className:"hljs-built_in",children:"any"}),") => infer R ? R : ",n(s.span,{className:"hljs-built_in",children:"any"}),`;

`,n(s.span,{className:"hljs-keyword",children:"type"})," b = a<",n(s.span,{className:"hljs-function",children:"() =>"})," ",n(s.span,{className:"hljs-built_in",children:"string"}),">; ",n(s.span,{className:"hljs-comment",children:"// type b = string"}),`
`]})}),`
`,n(s.p,{children:"好了 了解这些关键字后 就可以去看 TS 内置的工具类型的实现了"}),`
`,n(s.h2,{children:"工具类型"}),`
`,n(s.h3,{children:"Partial"}),`
`,n(s.p,{children:"让 T 中所有属性都变成可选"}),`
`,n(s.p,{children:"先用 keyof 遍历 T 中所有属性"}),`
`,n(s.p,{children:"然后 用 in 生成映射类型"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"Partial"}),`<T> = {
  [P `,n(s.span,{className:"hljs-keyword",children:"in"}),` keyof T]?: T[P];
};
`]})}),`
`,n(s.h3,{children:"Required"}),`
`,l(s.p,{children:[n(s.code,{children:"-?"})," 表示移除所有可选的属性"]}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"Required"}),`<T> = {
  [P `,n(s.span,{className:"hljs-keyword",children:"in"}),` keyof T]-?: T[P];
};
`]})}),`
`,n(s.h3,{children:"Readonly"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"Readonly"}),`<T> = {
  `,n(s.span,{className:"hljs-keyword",children:"readonly"})," [P ",n(s.span,{className:"hljs-keyword",children:"in"}),` keyof T]: T[P];
};
`]})}),`
`,n(s.h3,{children:"Pick"}),`
`,n(s.p,{children:"从 T 中筛选属性为 K 的集合"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"Pick"}),"<T, K ",n(s.span,{className:"hljs-keyword",children:"extends"}),` keyof T> = {
  [P `,n(s.span,{className:"hljs-keyword",children:"in"}),` K]: T[P];
};
`]})}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"interface"}),` A {
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"interface"}),` B {
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-attr",children:"age"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"type"})," C = ",n(s.span,{className:"hljs-title class_",children:"Pick"}),`<B, keyof A>;

`,n(s.span,{className:"hljs-comment",children:"// 等价于"}),`
`,n(s.span,{className:"hljs-keyword",children:"type"}),` C = {
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
};
`]})}),`
`,n(s.h3,{children:"Record"}),`
`,n(s.p,{children:"它用来生成一个属性为 K，类型为 T 的类型集合"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"Record"}),"<K ",n(s.span,{className:"hljs-keyword",children:"extends"})," keyof ",n(s.span,{className:"hljs-built_in",children:"any"}),`, T> = {
  [P `,n(s.span,{className:"hljs-keyword",children:"in"}),` K]: T;
};
`]})}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," A = ",n(s.span,{className:"hljs-string",children:"'name'"})," | ",n(s.span,{className:"hljs-string",children:"'sex'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"type"})," B = ",n(s.span,{className:"hljs-title class_",children:"Record"}),"<A, ",n(s.span,{className:"hljs-built_in",children:"string"}),`>;

`,n(s.span,{className:"hljs-comment",children:"// 等价于"}),`
`,n(s.span,{className:"hljs-keyword",children:"type"}),` B = {
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-attr",children:"sex"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
};
`]})}),`
`,n(s.p,{children:"如果 K 中是类型 不是值 则会生成对应类型的索引签名 但只能是 string ｜ number ｜ symbol"}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," A = ",n(s.span,{className:"hljs-built_in",children:"string"})," | ",n(s.span,{className:"hljs-built_in",children:"number"})," | ",n(s.span,{className:"hljs-built_in",children:"symbol"}),`;

`,n(s.span,{className:"hljs-keyword",children:"type"})," B = ",n(s.span,{className:"hljs-title class_",children:"Record"}),"<A, ",n(s.span,{className:"hljs-built_in",children:"string"}),`>;

`,n(s.span,{className:"hljs-comment",children:"// 等价于"}),`
`,n(s.span,{className:"hljs-keyword",children:"type"}),` B = {
  [`,n(s.span,{className:"hljs-attr",children:"x"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),"]: ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  [`,n(s.span,{className:"hljs-attr",children:"x"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),"]: ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  [`,n(s.span,{className:"hljs-attr",children:"x"}),": ",n(s.span,{className:"hljs-built_in",children:"symbol"}),"]: ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
};
`]})}),`
`,n(s.h3,{children:"Exclude"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"Exclude"}),"<T, U> = T ",n(s.span,{className:"hljs-keyword",children:"extends"})," U ? ",n(s.span,{className:"hljs-built_in",children:"never"}),` : T;
`]})}),`
`,n(s.h3,{children:"Extract"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"Extract"}),"<T, U> = T ",n(s.span,{className:"hljs-keyword",children:"extends"})," U ? T : ",n(s.span,{className:"hljs-built_in",children:"never"}),`;
`]})}),`
`,n(s.p,{children:"上述两个类型 刚好相反 实现的原理也很简单"}),`
`,n(s.p,{children:"举个 🌰 吧"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"interface"}),` A {
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-attr",children:"age"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"interface"}),` B {
  `,n(s.span,{className:"hljs-attr",children:"age"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"type"})," C = ",n(s.span,{className:"hljs-title class_",children:"Extract"}),"<A, B>; ",n(s.span,{className:"hljs-comment",children:"// --> type C = A"}),`
`,n(s.span,{className:"hljs-keyword",children:"type"})," D = ",n(s.span,{className:"hljs-title class_",children:"Extract"}),"<B, A>; ",n(s.span,{className:"hljs-comment",children:"// --> type D = never"}),`

`,n(s.span,{className:"hljs-keyword",children:"type"})," E = ",n(s.span,{className:"hljs-title class_",children:"Exclude"}),"<A, B>; ",n(s.span,{className:"hljs-comment",children:"// --> type E = never"}),`
`,n(s.span,{className:"hljs-keyword",children:"type"})," F = ",n(s.span,{className:"hljs-title class_",children:"Exclude"}),"<B, A>; ",n(s.span,{className:"hljs-comment",children:"// --> type F = B"}),`
`]})}),`
`,n(s.h3,{children:"Omit"}),`
`,n(s.p,{children:"构建一个新类型 T 排除 T 中的 K 属性"}),`
`,n(s.p,{children:"如果 T 为值 则排除对应的属性名"}),`
`,n(s.p,{children:"如果 T 为类型 则排除对应类型的属性"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"Omit"}),"<T, K ",n(s.span,{className:"hljs-keyword",children:"extends"})," keyof ",n(s.span,{className:"hljs-built_in",children:"any"}),"> = ",n(s.span,{className:"hljs-title class_",children:"Pick"}),"<T, ",n(s.span,{className:"hljs-title class_",children:"Exclude"}),`<keyof T, K>>;
`]})}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"interface"}),` A {
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-attr",children:"age"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"type"})," B = ",n(s.span,{className:"hljs-title class_",children:"Omit"}),"<A, ",n(s.span,{className:"hljs-built_in",children:"string"}),">; ",n(s.span,{className:"hljs-comment",children:"// --> 排除了 A 中所有 string 类型的属性 所以 B 为{}"}),`
`]})}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"interface"}),` A {
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-attr",children:"age"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"type"})," B = ",n(s.span,{className:"hljs-title class_",children:"Omit"}),"<A, ",n(s.span,{className:"hljs-string",children:"'name'"}),">; ",n(s.span,{className:"hljs-comment",children:"// --> 排除了 A 中 name 属性 所有 B 为 { age: number }"}),`
`]})}),`
`,n(s.h3,{children:"NonNullable"}),`
`,n(s.p,{children:"约束类型不能为 null 和 undefined"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"NonNullable"}),"<T> = T ",n(s.span,{className:"hljs-keyword",children:"extends"})," ",n(s.span,{className:"hljs-literal",children:"null"})," | ",n(s.span,{className:"hljs-literal",children:"undefined"})," ? ",n(s.span,{className:"hljs-built_in",children:"never"}),` : T;
`]})}),`
`,n(s.h3,{children:"Parameters"}),`
`,n(s.p,{children:"获取一个函数的参数类型，返回的是一组包含类型的数组"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"Parameters"}),"<T ",n(s.span,{className:"hljs-keyword",children:"extends"})," (...",n(s.span,{className:"hljs-attr",children:"args"}),": ",n(s.span,{className:"hljs-built_in",children:"any"}),") => ",n(s.span,{className:"hljs-built_in",children:"any"}),"> = T ",n(s.span,{className:"hljs-keyword",children:"extends"}),` (
  ...`,n(s.span,{className:"hljs-attr",children:"args"}),`: infer P
) => `,n(s.span,{className:"hljs-built_in",children:"any"}),`
  ? P
  : `,n(s.span,{className:"hljs-built_in",children:"never"}),`;
`]})}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"foo"}),"(",l(s.span,{className:"hljs-params",children:["p1: ",n(s.span,{className:"hljs-built_in",children:"string"}),", p2: ",n(s.span,{className:"hljs-built_in",children:"number"})]}),`) {}

`,n(s.span,{className:"hljs-keyword",children:"type"})," params = ",n(s.span,{className:"hljs-title class_",children:"Parameters"}),"<",n(s.span,{className:"hljs-keyword",children:"typeof"})," foo>; ",n(s.span,{className:"hljs-comment",children:"// --> type params = [p1: string, p2: number]"}),`
`]})}),`
`,n(s.h3,{children:"ConstructorParameters"}),`
`,n(s.p,{children:"获取构造函数中的参数类型"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"ConstructorParameters"}),"<T ",n(s.span,{className:"hljs-keyword",children:"extends"})," ",n(s.span,{className:"hljs-keyword",children:"abstract"})," ",n(s.span,{className:"hljs-keyword",children:"new"})," (...",n(s.span,{className:"hljs-attr",children:"args"}),": ",n(s.span,{className:"hljs-built_in",children:"any"}),") => ",n(s.span,{className:"hljs-built_in",children:"any"}),`> =
  T `,n(s.span,{className:"hljs-keyword",children:"extends"})," ",n(s.span,{className:"hljs-keyword",children:"abstract"})," ",n(s.span,{className:"hljs-keyword",children:"new"})," (...",n(s.span,{className:"hljs-attr",children:"args"}),": infer P) => ",n(s.span,{className:"hljs-built_in",children:"any"})," ? P : ",n(s.span,{className:"hljs-built_in",children:"never"}),`;
`]})}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"A"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"private"}),` name;
  `,n(s.span,{className:"hljs-keyword",children:"private"}),` age;
  `,n(s.span,{className:"hljs-title function_",children:"constructor"}),"(",l(s.span,{className:"hljs-params",children:["name: ",n(s.span,{className:"hljs-built_in",children:"string"}),", age: ",n(s.span,{className:"hljs-built_in",children:"number"})]}),`) {
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"age"}),` = age;
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"name"}),` = name;
  }
}

`,n(s.span,{className:"hljs-keyword",children:"type"})," B = ",n(s.span,{className:"hljs-title class_",children:"ConstructorParameters"}),"<",n(s.span,{className:"hljs-keyword",children:"typeof"}),` A>;
`]})}),`
`,n(s.h3,{children:"ReturnType"}),`
`,n(s.p,{children:"获取函数的返回值"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"ReturnType"}),"<T ",n(s.span,{className:"hljs-keyword",children:"extends"})," (...",n(s.span,{className:"hljs-attr",children:"args"}),": ",n(s.span,{className:"hljs-built_in",children:"any"}),") => ",n(s.span,{className:"hljs-built_in",children:"any"}),"> = T ",n(s.span,{className:"hljs-keyword",children:"extends"}),` (
  ...`,n(s.span,{className:"hljs-attr",children:"args"}),": ",n(s.span,{className:"hljs-built_in",children:"any"}),`
) => infer R
  ? R
  : `,n(s.span,{className:"hljs-built_in",children:"any"}),`;
`]})}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"returnSomething"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-string",children:"'string'"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"function"}),"* ",n(s.span,{className:"hljs-title function_",children:"task"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-comment",children:"// 这里的 result 在TS中是没有拿到正确的函数返回类型的，大家可以试一下"}),`
  `,n(s.span,{className:"hljs-keyword",children:"const"})," result = ",n(s.span,{className:"hljs-keyword",children:"yield"})," ",n(s.span,{className:"hljs-title function_",children:"returnSomething"}),`();
}
`]})}),`
`,n(s.p,{children:n(s.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f423faa024ff42d7bc02a78fd72dd228~tplv-k3u1fbpfcp-zoom-1.image",alt:""})}),`
`,l(s.p,{children:["这时 我们就可以使用 ",n(s.code,{children:"ReturnType"})]}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"returnSomething"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-string",children:"'string'"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"function"}),"* ",n(s.span,{className:"hljs-title function_",children:"task"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-comment",children:"// 这里的 result 就可以拿到正确的返回值"}),`
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"result"}),": ",n(s.span,{className:"hljs-title class_",children:"ReturnType"}),"<",n(s.span,{className:"hljs-keyword",children:"typeof"})," returnSomething> = ",n(s.span,{className:"hljs-keyword",children:"yield"})," ",n(s.span,{className:"hljs-title function_",children:"returnSomething"}),`();
}
`]})}),`
`,n(s.p,{children:n(s.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4d408548e02149a19725a80992b16366~tplv-k3u1fbpfcp-zoom-1.image",alt:""})}),`
`,n(s.h3,{children:"InstanceType"}),`
`,n(s.p,{children:"获取类的实例类型 和用类直接去约束类型一样"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"InstanceType"}),"<T ",n(s.span,{className:"hljs-keyword",children:"extends"})," ",n(s.span,{className:"hljs-keyword",children:"abstract"})," ",n(s.span,{className:"hljs-keyword",children:"new"})," (...",n(s.span,{className:"hljs-attr",children:"args"}),": ",n(s.span,{className:"hljs-built_in",children:"any"}),") => ",n(s.span,{className:"hljs-built_in",children:"any"}),`> =
  T `,n(s.span,{className:"hljs-keyword",children:"extends"})," ",n(s.span,{className:"hljs-keyword",children:"abstract"})," ",n(s.span,{className:"hljs-keyword",children:"new"})," (...",n(s.span,{className:"hljs-attr",children:"args"}),": ",n(s.span,{className:"hljs-built_in",children:"any"}),") => infer R ? R : ",n(s.span,{className:"hljs-built_in",children:"any"}),`;
`]})}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"A"}),` {
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-attr",children:"age"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
  `,n(s.span,{className:"hljs-title function_",children:"constructor"}),"(",l(s.span,{className:"hljs-params",children:["name: ",n(s.span,{className:"hljs-built_in",children:"string"}),", age: ",n(s.span,{className:"hljs-built_in",children:"number"})]}),`) {
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"age"}),` = age;
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"name"}),` = name;
  }
}

`,n(s.span,{className:"hljs-keyword",children:"type"})," B = ",n(s.span,{className:"hljs-title class_",children:"InstanceType"}),"<",n(s.span,{className:"hljs-keyword",children:"typeof"})," A>; ",n(s.span,{className:"hljs-comment",children:"// --> type B = A"}),`

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"obj"}),`: B = {
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-string",children:"'nanshu'"}),`,
  `,n(s.span,{className:"hljs-attr",children:"age"}),": ",n(s.span,{className:"hljs-number",children:"18"}),`,
};
`]})}),`
`,n(s.p,{children:"此外还有一些限制 string 形式的工具类型"}),`
`,l(s.ul,{children:[`
`,l(s.li,{children:[`
`,n(s.p,{children:"Uppercase 约束 小写"}),`
`]}),`
`,l(s.li,{children:[`
`,n(s.p,{children:"Lowercase 约束 大写"}),`
`]}),`
`,l(s.li,{children:[`
`,n(s.p,{children:"Capitalize 约束 首字母大写"}),`
`]}),`
`,l(s.li,{children:[`
`,n(s.p,{children:"Uncapitalize 约束 首字母小写"}),`
`]}),`
`]}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"_uppercase"}),": ",n(s.span,{className:"hljs-title class_",children:"Uppercase"}),"<",n(s.span,{className:"hljs-string",children:"'hello'"}),"> = ",n(s.span,{className:"hljs-string",children:"'HELLO'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"_lowercase"}),": ",n(s.span,{className:"hljs-title class_",children:"Lowercase"}),"<",n(s.span,{className:"hljs-string",children:"'hello'"}),"> = ",n(s.span,{className:"hljs-string",children:"'hello'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"_capitalize"}),": ",n(s.span,{className:"hljs-title class_",children:"Capitalize"}),"<",n(s.span,{className:"hljs-string",children:"'hello'"}),"> = ",n(s.span,{className:"hljs-string",children:"'Hello'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"_uncapitalize"}),": ",n(s.span,{className:"hljs-title class_",children:"Uncapitalize"}),"<",n(s.span,{className:"hljs-string",children:"'Hello'"}),"> = ",n(s.span,{className:"hljs-string",children:"'hello'"}),`;
`]})})]})}function m(e={}){const{wrapper:s}=Object.assign({},c(),e.components);return s?n(s,Object.assign({},e,{children:n(a,e)})):a(e)}export{m as default,p as frontmatter};
