import{u as o,j as n,a as t,F as i}from"./index-1d7c24d6.js";import"./antd-3342c5aa.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const m={title:"JavaScript - equality operator"};function c(r){const e=Object.assign({p:"p",code:"code"},o(),r.components);return t(i,{children:[n(e.p,{children:"首先，== 的定义是："}),`
`,`
`,n(e.p,{children:"GetValue 会获取一个子表达式的值（消除掉左值引用），在表达式 [] == ![] 中，[] 的结果就是一个空数组的引用，而 ![] 就有意思了，它会按照 11.4.9 和 9.2 节的要求得到 false。比较的行为在 11.9.3 节里，所以翻到 11.9.3："}),`
`,`
`,t(e.p,{children:["在这段算法里，和 ",n(e.code,{children:"[] == ![]"}),"匹配的是条件 7，所以会递归地调用 ",n(e.code,{children:"[] == ToNumber(false)"})," 进行比较。"]}),`
`,t(e.p,{children:["在 9.3 节中定义了 ToNumber 原语，ToNumber(false) 等于 0，于是比较变为 ",n(e.code,{children:"[] == 0"}),"。"]}),`
`,t(e.p,{children:["在此处因为 [] 是对象，比较过程走分支 9，依 ",n(e.code,{children:"ToPrimitive([]) == 0"})," 比较。"]}),`
`,n(e.p,{children:"ToPrimitive 默认是调用 toString 方法的（依 8.2.8），于是 ToPrimitice([]) 等于空字符串。"}),`
`,t(e.p,{children:["结果，",n(e.code,{children:"[] == ![]"})," 的比较最后落到了 ",n(e.code,{children:"''==false"})," 上，"]}),`
`,t(e.p,{children:["按照 11.9.3 中的定义会依分支 5 比较 ",n(e.code,{children:"ToNumber('')==0"})," ToNumber('') 依 9.3.1 等于 0，所以结果为 true。"]})]})}function h(r={}){const{wrapper:e}=Object.assign({},o(),r.components);return e?n(e,Object.assign({},r,{children:n(c,r)})):c(r)}export{h as default,m as frontmatter};
