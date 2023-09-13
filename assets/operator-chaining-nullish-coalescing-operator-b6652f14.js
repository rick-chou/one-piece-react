import{u as c,j as e,a as l,F as r}from"./index-109c6b2d.js";import"./antd-3342c5aa.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const t={title:"JavaScript - operator-chaining & nullish-coalescing-operator"};function a(s){const n=Object.assign({h2:"h2",p:"p",blockquote:"blockquote",pre:"pre",code:"code",span:"span",h3:"h3",h4:"h4",ul:"ul",li:"li"},c(),s.components);return l(r,{children:[e(n.h2,{children:"可选链操作符"}),`
`,e(n.p,{children:"这里我引用一段 MDN 上的解释"}),`
`,l(n.blockquote,{children:[`
`,e(n.p,{children:"可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish ) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。"}),`
`]}),`
`,e(n.p,{children:"看个 🌰"}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-js",children:[e(n.span,{className:"hljs-keyword",children:"const"}),` adventurer = {
  `,e(n.span,{className:"hljs-attr",children:"name"}),": ",e(n.span,{className:"hljs-string",children:"'林克'"}),`,
  `,e(n.span,{className:"hljs-attr",children:"weapon"}),`: {
    `,e(n.span,{className:"hljs-attr",children:"name"}),": ",e(n.span,{className:"hljs-string",children:"'大师剑'"}),`,
  },
};

`,e(n.span,{className:"hljs-keyword",children:"const"})," weaponName = adventurer.",e(n.span,{className:"hljs-property",children:"weapon"}),"?.",e(n.span,{className:"hljs-property",children:"name"}),`;
`,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),`(weaponName);
`,e(n.span,{className:"hljs-comment",children:"// expected output: 大师剑"}),`

`,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),"(adventurer.",e(n.span,{className:"hljs-property",children:"savePrincess"}),`?.());
`,e(n.span,{className:"hljs-comment",children:"// expected output: undefined"}),`

`,e(n.span,{className:"hljs-keyword",children:"const"})," shieldName = adventurer.",e(n.span,{className:"hljs-property",children:"shield"}),"?.",e(n.span,{className:"hljs-property",children:"name"}),`;
`,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),`(shieldName);
`,e(n.span,{className:"hljs-comment",children:"// expected output: undefined"}),`
`]})}),`
`,l(n.p,{children:["上述例子",e(n.code,{children:"adventurer.weapon?.name"})]}),`
`,e(n.p,{children:"我们试图去寻找 adventurer 对象下的 weapon 属性下的 name 属性"}),`
`,e(n.p,{children:"adventurer 对象有 weapon 属性 所以返回大师剑"}),`
`,l(n.p,{children:["然后是",e(n.code,{children:"adventurer.savePrincess?.()"})]}),`
`,e(n.p,{children:"显然 adventurer 下没有 savePrincess 这个方法 所以救公主 ？😬 返回 undefined"}),`
`,l(n.p,{children:["最后是",e(n.code,{children:"adventurer.shield?.name"})]}),`
`,e(n.p,{children:"同样的 我们发现 adventurer 对象下也没有 shield 属性 所以直接返回 undefined"}),`
`,e(n.p,{children:"好啦 至此 我们大概理解了可选链是怎么一回事"}),`
`,e(n.p,{children:"接下来 我们来看看 可选链有什么需要注意的地方"}),`
`,e(n.h3,{children:"注意点"}),`
`,e(n.h4,{children:"可选链不能用于赋值"}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-js",children:[e(n.span,{className:"hljs-keyword",children:"let"}),` object = {};
object?.`,e(n.span,{className:"hljs-property",children:"property"})," = ",e(n.span,{className:"hljs-number",children:"1"}),"; ",e(n.span,{className:"hljs-comment",children:"// Uncaught SyntaxError: Invalid left-hand side in assignment"}),`
`]})}),`
`,e(n.h4,{children:"短路计算"}),`
`,e(n.p,{children:"当在表达式中使用可选链时，如果左操作数是 null 或 undefined，表达式将不会被计算，例如："}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-js",children:[e(n.span,{className:"hljs-keyword",children:"let"})," potentiallyNullObj = ",e(n.span,{className:"hljs-literal",children:"null"}),`;
`,e(n.span,{className:"hljs-keyword",children:"let"})," x = ",e(n.span,{className:"hljs-number",children:"0"}),`;
`,e(n.span,{className:"hljs-keyword",children:"let"}),` prop = potentiallyNullObj?.[x++];

`,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),"(x); ",e(n.span,{className:"hljs-comment",children:"// x 将不会被递增，依旧输出 0"}),`
`]})}),`
`,e(n.h2,{children:"空值合并操作符"}),`
`,e(n.p,{children:"还是引用一段 MDN 上解释"}),`
`,l(n.blockquote,{children:[`
`,e(n.p,{children:"空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。"}),`
`]}),`
`,e(n.h3,{children:"对比 ||"}),`
`,e(n.p,{children:"我们知道 || 逻辑或运算符 也具有相似的功能"}),`
`,e(n.p,{children:"也就是在 || 左侧操作数为假值时 会返回右侧 操作数"}),`
`,e(n.p,{children:"JS 中的假值有"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:[`
`,e(n.p,{children:"0"}),`
`]}),`
`,l(n.li,{children:[`
`,e(n.p,{children:"''"}),`
`]}),`
`,l(n.li,{children:[`
`,e(n.p,{children:"NaN"}),`
`]}),`
`,l(n.li,{children:[`
`,e(n.p,{children:"null"}),`
`]}),`
`,l(n.li,{children:[`
`,e(n.p,{children:"undefined"}),`
`]}),`
`]}),`
`,e(n.p,{children:"所以设想一个场景 我们对一个 function 中的参数使用 || 运算符 来判断用户是否输入"}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-js",children:[e(n.span,{className:"hljs-keyword",children:"function"})," ",e(n.span,{className:"hljs-title function_",children:"addNum"}),"(",e(n.span,{className:"hljs-params",children:"a, b"}),`) {
  `,e(n.span,{className:"hljs-keyword",children:"var"})," a = a || ",e(n.span,{className:"hljs-number",children:"0"}),`;
  `,e(n.span,{className:"hljs-keyword",children:"var"})," b = b || ",e(n.span,{className:"hljs-number",children:"0"}),`;
  `,e(n.span,{className:"hljs-keyword",children:"return"}),` a + b;
}
`]})}),`
`,e(n.p,{children:"上述代码我们用 || 运算符来判断用户 用户输入的合法性"}),`
`,e(n.p,{children:"但是这样我们就无法排除 0 这种情况"}),`
`,e(n.p,{children:"如果用户就是输入了 0 但是 0 依旧是一个假值 所以还是会返回 || 操作符右侧是操作数"}),`
`,e(n.p,{children:"这就与我们的预期不一致了"}),`
`,e(n.p,{children:"而 ?? 空值合并操作符就只是检验了 null 和 undefined"}),`
`,e(n.h3,{children:"注意点"}),`
`,e(n.h4,{children:"短路计算"}),`
`,e(n.p,{children:"与 OR 和 AND 逻辑操作符相似，当左表达式不为 null 或 undefined 时，不会对右表达式进行求值"}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-js",children:[e(n.span,{className:"hljs-keyword",children:"var"})," a = ",e(n.span,{className:"hljs-number",children:"1"}),`;
`,e(n.span,{className:"hljs-literal",children:"undefined"}),` ?? a++;
`,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),"(a); ",e(n.span,{className:"hljs-comment",children:"// 1"}),`

`,e(n.span,{className:"hljs-keyword",children:"var"})," b = ",e(n.span,{className:"hljs-number",children:"1"}),`;
`,e(n.span,{className:"hljs-literal",children:"true"}),` ?? b++;
`,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),"(b); ",e(n.span,{className:"hljs-comment",children:"// 2"}),`
`]})}),`
`,e(n.h4,{children:"不能与 AND 或 OR 操作符共用"}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-js",children:[e(n.span,{className:"hljs-literal",children:"null"})," || ",e(n.span,{className:"hljs-literal",children:"undefined"})," ?? ",e(n.span,{className:"hljs-string",children:'"foo"'}),"; ",e(n.span,{className:"hljs-comment",children:"// 抛出 SyntaxError"}),`
`,e(n.span,{className:"hljs-literal",children:"true"})," || ",e(n.span,{className:"hljs-literal",children:"undefined"})," ?? ",e(n.span,{className:"hljs-string",children:'"foo"'}),"; ",e(n.span,{className:"hljs-comment",children:"// 抛出 SyntaxError"}),`
`]})}),`
`,e(n.h4,{children:"与可选链操作符连用"}),`
`,e(n.p,{children:"两个操作符都是针对 undefined 和 null 两个值"}),`
`,e(n.p,{children:"所以我们可以结合这两个操作符"}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-js",children:[e(n.span,{className:"hljs-keyword",children:"let"}),` customer = {
  `,e(n.span,{className:"hljs-attr",children:"name"}),": ",e(n.span,{className:"hljs-string",children:"'chou'"}),`,
  `,e(n.span,{className:"hljs-attr",children:"details"}),": { ",e(n.span,{className:"hljs-attr",children:"age"}),": ",e(n.span,{className:"hljs-number",children:"100"}),` },
};
`,e(n.span,{className:"hljs-keyword",children:"let"})," customerCity = customer?.",e(n.span,{className:"hljs-property",children:"city"})," ?? ",e(n.span,{className:"hljs-string",children:"'荒野之息'"}),`;
`,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),"(customerCity); ",e(n.span,{className:"hljs-comment",children:"// 荒野之息"}),`
`]})})]})}function o(s={}){const{wrapper:n}=Object.assign({},c(),s.components);return n?e(n,Object.assign({},s,{children:e(a,s)})):a(s)}export{o as default,t as frontmatter};
