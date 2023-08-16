import{u as t,j as n,a as c,F as i}from"./index-39a0289f.js";import"./antd-e9e8fd35.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const s={title:"JavaScript - prototype"};function r(o){const e=Object.assign({p:"p",blockquote:"blockquote",code:"code",strong:"strong",ul:"ul",li:"li"},t(),o.components);return c(i,{children:[n(e.p,{children:"在 ES2019 中 对于 prototype 的定义为"}),`
`,c(e.blockquote,{children:[`
`,n(e.p,{children:"给其它对象提供共享属性的对象"}),`
`]}),`
`,n(e.p,{children:"看完后 突然想到了一句话 Vue 中一切组件继承自 Vue 的原型"}),`
`,n(e.p,{children:"这也解释了为什么在每个组件中都可以直接使用 Vue 的一些方法 因为这些方法被写在了 Vue 的原型上"}),`
`,c(e.p,{children:["原型对象被创建时，会自动生成一个 ",n(e.code,{children:"constructor"})," 属性，指向创建它的构造函数"]}),`
`,c(e.p,{children:["构造函数的",n(e.code,{children:"prototype"}),"指向原型对象"]}),`
`,c(e.p,{children:["实例对象的",n(e.code,{children:"__proto__"}),"指向原型对象"]}),`
`,c(e.p,{children:["（注）如果在 MDN 上查阅",n(e.code,{children:"__proto__"}),"这一属性 你可以看到"]}),`
`,c(e.blockquote,{children:[`
`,n(e.p,{children:"已废弃 该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。"}),`
`,c(e.p,{children:["警告: 通过现代浏览器的操作属性的便利性，可以改变一个对象的 [[Prototype]] 属性, 这种行为在每一个 JavaScript 引擎和浏览器中都是一个非常慢且影响性能的操作，使用这种方式来改变和继承属性是对性能影响非常严重的，并且性能消耗的时间也不是简单的花费在 obj.",n(e.strong,{children:"proto"})," = ... 语句上, 它还会影响到所有继承来自该 [[Prototype]] 的对象，如果你关心性能，你就不应该在一个对象中修改它的 [[Prototype]]。相反, 创建一个新的且可以继承 [[Prototype]] 的对象，推荐使用 Object.create()。"]}),`
`,c(e.p,{children:["警告: 当 Object.prototype.",n(e.strong,{children:"proto"})," 已被大多数浏览器厂商所支持的今天，其存在和确切行为仅在 ECMAScript 2015 规范中被标准化为传统功能，以确保 Web 浏览器的兼容性。为了更好的支持，建议只使用 Object.getPrototypeOf()。"]}),`
`]}),`
`,n(e.p,{children:"官网说的很明白 如果还不理解 看完下面原型链的作用 你应该就明白了"}),`
`,n(e.p,{children:"这一部分 看着比较绕 但是理解后 对我们还是很有帮助的 比如原型链的作用"}),`
`,c(e.p,{children:[n(e.strong,{children:"原型链的作用："})," 原型链如此的重要的原因就在于它决定了 ",n(e.code,{children:"JavaScript"})," 中继承的实现方式。"]}),`
`,n(e.p,{children:"当我们访问一个属性时，查找机制如下："}),`
`,c(e.ul,{children:[`
`,c(e.li,{children:[`
`,c(e.p,{children:["访问对象实例属性，有则返回，没有就通过 ",n(e.code,{children:"__proto__"})," 去它的原型对象查找。"]}),`
`]}),`
`,c(e.li,{children:[`
`,c(e.p,{children:["原型对象上找到即返回，找不到，继续通过原型对象的 ",n(e.code,{children:"__proto__"})," 查找。"]}),`
`]}),`
`,c(e.li,{children:[`
`,c(e.p,{children:["一层一层一直找到 ",n(e.code,{children:"Object.prototype"})," ，如果找到目标属性即返回，"]}),`
`,c(e.p,{children:["找不到就返回 ",n(e.code,{children:"undefined"}),"，不会再往下找，因为在往下找 ",n(e.code,{children:"__proto__"})," 就是 ",n(e.code,{children:"null"})," 了。"]}),`
`]}),`
`]}),`
`,c(e.p,{children:["所以 如果我们用",n(e.code,{children:"Object.prototype"}),"去操作了 Object 的原型对象 那么所有的对象都会受到影响 因为 Object 是对象的顶级父类 所有的对象都继承自它们的顶级父类 Object"]})]})}function a(o={}){const{wrapper:e}=Object.assign({},t(),o.components);return e?n(e,Object.assign({},o,{children:n(r,o)})):r(o)}export{a as default,s as frontmatter};
