import{u as c,j as n,a,F as r}from"./index-109c6b2d.js";import"./antd-3342c5aa.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const m={title:"TypeScript - advanced type"};function l(e){const s=Object.assign({h2:"h2",pre:"pre",code:"code",span:"span",p:"p"},c(),e.components);return a(r,{children:[n(s.h2,{children:"联合类型"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-comment",children:[`/**
 * `,n(s.span,{className:"hljs-doctag",children:"@tutorial"}),` 联合类型
 * `,n(s.span,{className:"hljs-doctag",children:"@description"}),` 用 | 隔开每一个类型
 * `,n(s.span,{className:"hljs-doctag",children:"@description"}),` 当访问属性或调用方法时 ts不确定该变量最后什么类型 所以只能是公共的类型或方法
 * `,n(s.span,{className:"hljs-doctag",children:"@description"}),` 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
 */`]}),`

`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"showNumber"}),"(",a(s.span,{className:"hljs-params",children:["myNumber: ",n(s.span,{className:"hljs-built_in",children:"string"})," | ",n(s.span,{className:"hljs-built_in",children:"number"})]}),"): ",n(s.span,{className:"hljs-built_in",children:"string"})," | ",n(s.span,{className:"hljs-built_in",children:"number"}),` {
  `,n(s.span,{className:"hljs-comment",children:"// 访问只有number拥有的属性 就会被ts⚠️"}),`
  `,n(s.span,{className:"hljs-comment",children:"// Property 'toFixed' does not exist on type 'string | number'."}),`
  `,n(s.span,{className:"hljs-comment",children:"// Property 'toFixed' does not exist on type 'string'"}),`
  `,n(s.span,{className:"hljs-comment",children:"// myNumber.toFixed(3);"}),`

  `,n(s.span,{className:"hljs-keyword",children:"return"})," myNumber.",n(s.span,{className:"hljs-title function_",children:"toString"}),"(); ",n(s.span,{className:"hljs-comment",children:"// 只能使用string和number共有的类型"}),`
}

`,n(s.span,{className:"hljs-comment",children:"// 下面的例子是为我们为value设置一个左边的空格填充"}),`
`,n(s.span,{className:"hljs-comment",children:"// eg"}),`
`,n(s.span,{className:"hljs-comment",children:"// padLeft('hello', 2) -->   hello"}),`
`,n(s.span,{className:"hljs-comment",children:"// padLeft('hello', 'world) --> worldhello"}),`
`,n(s.span,{className:"hljs-comment",children:"// 我们对入参分别是string和number的情景进行判断"}),`
`,n(s.span,{className:"hljs-comment",children:"// 所以在这里我们使用string和number的联合类型"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"padLeft"}),"(",a(s.span,{className:"hljs-params",children:["value: ",n(s.span,{className:"hljs-built_in",children:"string"}),", padding: ",n(s.span,{className:"hljs-built_in",children:"string"})," | ",n(s.span,{className:"hljs-built_in",children:"number"})]}),`) {
  `,n(s.span,{className:"hljs-comment",children:"// 如果是number 就填充 ' '"}),`
  `,n(s.span,{className:"hljs-keyword",children:"if"})," (",n(s.span,{className:"hljs-keyword",children:"typeof"})," padding === ",n(s.span,{className:"hljs-string",children:"'number'"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-title class_",children:"Array"}),"(padding + ",n(s.span,{className:"hljs-number",children:"1"}),").",n(s.span,{className:"hljs-title function_",children:"join"}),"(",n(s.span,{className:"hljs-string",children:"' '"}),`) + value;
  }
  `,n(s.span,{className:"hljs-comment",children:"// 如果是string 就填充对应的参数"}),`
  `,n(s.span,{className:"hljs-keyword",children:"if"})," (",n(s.span,{className:"hljs-keyword",children:"typeof"})," padding === ",n(s.span,{className:"hljs-string",children:"'string'"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` padding + value;
  }
  `,n(s.span,{className:"hljs-keyword",children:"throw"})," ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"Error"}),"(",a(s.span,{className:"hljs-string",children:["`Expected string or number, got '",n(s.span,{className:"hljs-subst",children:"${padding}"}),"'.`"]}),`);
}
`]})}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-comment",children:[`/**
 * `,n(s.span,{className:"hljs-doctag",children:"@tutorial"}),` 可辨识联合
 * `,n(s.span,{className:"hljs-doctag",children:"@description"}),` 联合类型中的每个元素都含有一个单例类型属性
 */`]}),`
`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"Square"}),` {
  `,n(s.span,{className:"hljs-attr",children:"kind"}),": ",n(s.span,{className:"hljs-string",children:"'square'"}),`;
  `,n(s.span,{className:"hljs-attr",children:"size"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}
`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"Rectangle"}),` {
  `,n(s.span,{className:"hljs-attr",children:"kind"}),": ",n(s.span,{className:"hljs-string",children:"'rectangle'"}),`;
  `,n(s.span,{className:"hljs-attr",children:"width"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
  `,n(s.span,{className:"hljs-attr",children:"height"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}
`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"Circle"}),` {
  `,n(s.span,{className:"hljs-attr",children:"kind"}),": ",n(s.span,{className:"hljs-string",children:"'circle'"}),`;
  `,n(s.span,{className:"hljs-attr",children:"radius"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"Shape"})," = ",n(s.span,{className:"hljs-title class_",children:"Square"})," | ",n(s.span,{className:"hljs-title class_",children:"Rectangle"})," | ",n(s.span,{className:"hljs-title class_",children:"Circle"}),`;

`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"area"}),"(",n(s.span,{className:"hljs-params",children:"s: Shape"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"switch"})," (s.",n(s.span,{className:"hljs-property",children:"kind"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"case"})," ",n(s.span,{className:"hljs-string",children:"'square'"}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"})," s.",n(s.span,{className:"hljs-property",children:"size"})," * s.",n(s.span,{className:"hljs-property",children:"size"}),`;
    `,n(s.span,{className:"hljs-keyword",children:"case"})," ",n(s.span,{className:"hljs-string",children:"'rectangle'"}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"})," s.",n(s.span,{className:"hljs-property",children:"height"})," * s.",n(s.span,{className:"hljs-property",children:"width"}),`;
    `,n(s.span,{className:"hljs-keyword",children:"case"})," ",n(s.span,{className:"hljs-string",children:"'circle'"}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-title class_",children:"Math"}),".",n(s.span,{className:"hljs-property",children:"PI"})," * s.",n(s.span,{className:"hljs-property",children:"radius"})," * ",n(s.span,{className:"hljs-number",children:"2"}),`;
  }
}
`]})}),`
`,n(s.h2,{children:"交叉类型"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-comment",children:[`/**
 * `,n(s.span,{className:"hljs-doctag",children:"@tutorial"}),` 交叉类型
 * `,n(s.span,{className:"hljs-doctag",children:"@description"}),` 可以把现有的多种类型叠加到一起成为一种类型
 * `,n(s.span,{className:"hljs-doctag",children:"@description"}),` 它包含了所需的所有类型的特性
 */`]}),`
`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"Props1"}),` {
  `,n(s.span,{className:"hljs-attr",children:"className"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"Props2"}),` {
  `,n(s.span,{className:"hljs-attr",children:"onClick"}),": ",n(s.span,{className:"hljs-function",children:"() =>"})," ",n(s.span,{className:"hljs-built_in",children:"void"}),`;
}

`,n(s.span,{className:"hljs-comment",children:"// 两者的属性都要给到 不然会报错"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"combin"}),": ",n(s.span,{className:"hljs-title class_",children:"Props1"})," & ",n(s.span,{className:"hljs-title class_",children:"Props2"}),` = {
  `,n(s.span,{className:"hljs-attr",children:"onClick"}),": ",n(s.span,{className:"hljs-function",children:"() =>"}),` {},
  `,n(s.span,{className:"hljs-attr",children:"className"}),": ",n(s.span,{className:"hljs-string",children:"'nanshu-btn'"}),`,
};

`,n(s.span,{className:"hljs-comment",children:"// 泛型也可以使用 &"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," mixin<T, U>(",n(s.span,{className:"hljs-attr",children:"first"}),": T, ",n(s.span,{className:"hljs-attr",children:"second"}),`: U): T & U {
  `,n(s.span,{className:"hljs-keyword",children:"let"}),` result = <T & U>{};
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}
`]})}),`
`,n(s.h2,{children:"总结"}),`
`,n(s.p,{children:"联合类型 是 交集"}),`
`,n(s.p,{children:"交叉类型 是 并集"})]})}function p(e={}){const{wrapper:s}=Object.assign({},c(),e.components);return s?n(s,Object.assign({},e,{children:n(l,e)})):l(e)}export{p as default,m as frontmatter};
