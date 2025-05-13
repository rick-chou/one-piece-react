import{u as i,j as l,a as e,F as r}from"./index-CjkvZd7K.js";import"./antd-DBIoRdLU.js";import"./lodash-BU0pYqsL.js";import"./prettier-DJQX7j1f.js";import"./chance-DnaHbaGl.js";const j={title:"React Quick Start - JSX"};function c(s){const n=Object.assign({p:"p",img:"img",h2:"h2",blockquote:"blockquote",a:"a",h3:"h3",code:"code",pre:"pre",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",ul:"ul",li:"li"},i(),s.components),{Codesandbox:a}=n;return a||h("Codesandbox"),e(r,{children:[l(n.p,{children:l(n.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/25c073ccd5104845b6b053727e2e4f48~tplv-k3u1fbpfcp-zoom-1.image",alt:"mindmap"})}),`
`,l(n.h2,{children:"你可能需要知道的一丢丢 JS 语法"}),`
`,l(n.p,{children:"安利大家看完 阮一峰老师的 ES6"}),`
`,e(n.blockquote,{children:[`
`,l(n.p,{children:l(n.a,{href:"https://es6.ruanyifeng.com/",children:"https://es6.ruanyifeng.com/"})}),`
`]}),`
`,l(n.p,{children:"这里只摘出两个最常用的"}),`
`,l(n.h3,{children:"箭头函数"}),`
`,l(n.p,{children:"箭头函数表达式的语法比函数表达式更简洁，并且没有自己的 this 🥳"}),`
`,e(n.p,{children:["当我们需要返回一个对象时 可以用",l(n.code,{children:"()"}),"包裹对象 从而省略 return"]}),`
`,l(n.pre,{children:e(n.code,{className:"hljs language-js",children:[l(n.span,{className:"hljs-keyword",children:"const"})," ",l(n.span,{className:"hljs-title function_",children:"setUsername"})," = (",l(n.span,{className:"hljs-params",children:"username: string"}),`) => ({
  `,l(n.span,{className:"hljs-attr",children:"type"}),": ",l(n.span,{className:"hljs-string",children:"'SET_USER_NAME'"}),`,
  username,
});
`]})}),`
`,l(n.h3,{children:"ESM"}),`
`,e(n.table,{children:[l(n.thead,{children:e(n.tr,{children:[l(n.th,{align:"left",children:"描述"}),l(n.th,{align:"left",children:"语法"}),l(n.th,{align:"left",children:"说明"})]})}),e(n.tbody,{children:[e(n.tr,{children:[l(n.td,{align:"left",children:"模块导出"}),l(n.td,{align:"left",children:l(n.code,{children:"export xxx"})}),l(n.td,{align:"left"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"默认导出"}),l(n.td,{align:"left",children:l(n.code,{children:"export default xxx"})}),l(n.td,{align:"left",children:"一个模块只能有一个默认导出"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"重新导出"}),l(n.td,{align:"left",children:l(n.code,{children:"export \\* from xxx"})}),l(n.td,{align:"left",children:"常作为聚合导出 统一管理模块入口"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"重命名导出"}),l(n.td,{align:"left",children:l(n.code,{children:"export {xxx as xxx} from xxx"})}),l(n.td,{align:"left"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"默认导入"}),l(n.td,{align:"left",children:l(n.code,{children:"import xxx from xxx"})}),l(n.td,{align:"left",children:"一个模块只能有一个默认导入"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"解构导入"}),l(n.td,{align:"left",children:l(n.code,{children:"import {xxx} from xxx"})}),l(n.td,{align:"left"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"重命名导入"}),l(n.td,{align:"left",children:l(n.code,{children:"import {xxx as xxx} from xxx"})}),l(n.td,{align:"left"})]})]})]}),`
`,l(n.h2,{children:"起步"}),`
`,l(n.h3,{children:"在 html 中使用 React"}),`
`,l(n.p,{children:"在 html 使用 React 我们需要引入如下 script"}),`
`,l(n.pre,{children:e(n.code,{className:"hljs language-html",children:[e(n.span,{className:"hljs-tag",children:["<",l(n.span,{className:"hljs-name",children:"script"}),`
  `,l(n.span,{className:"hljs-attr",children:"crossorigin"}),`
  `,l(n.span,{className:"hljs-attr",children:"src"}),"=",l(n.span,{className:"hljs-string",children:'"https://unpkg.com/react@17/umd/react.development.js"'}),">"]}),e(n.span,{className:"hljs-tag",children:["</",l(n.span,{className:"hljs-name",children:"script"}),">"]}),`

`,e(n.span,{className:"hljs-tag",children:["<",l(n.span,{className:"hljs-name",children:"script"}),`
  `,l(n.span,{className:"hljs-attr",children:"crossorigin"}),`
  `,l(n.span,{className:"hljs-attr",children:"src"}),"=",l(n.span,{className:"hljs-string",children:'"https://unpkg.com/react-dom@17/umd/react-dom.development.js"'}),">"]}),e(n.span,{className:"hljs-tag",children:["</",l(n.span,{className:"hljs-name",children:"script"}),">"]}),`

`,e(n.span,{className:"hljs-tag",children:["<",l(n.span,{className:"hljs-name",children:"script"})," ",l(n.span,{className:"hljs-attr",children:"src"}),"=",l(n.span,{className:"hljs-string",children:'"https://unpkg.com/babel-standalone@6/babel.min.js"'}),">"]}),e(n.span,{className:"hljs-tag",children:["</",l(n.span,{className:"hljs-name",children:"script"}),">"]}),`
`]})}),`
`,e(n.blockquote,{children:[`
`,l(n.p,{children:l(n.strong,{children:'注意：在任何你使用到 JSX 语法的 script 内 加上 type="text/babel" 否则它将不会生效'})}),`
`]}),`
`,l(n.p,{children:"例如如下代码 你就可以在页面上看到 Hello React"}),`
`,l(n.pre,{children:e(n.code,{className:"hljs language-html",children:[e(n.span,{className:"hljs-tag",children:["<",l(n.span,{className:"hljs-name",children:"body"}),">"]}),`
  `,e(n.span,{className:"hljs-tag",children:["<",l(n.span,{className:"hljs-name",children:"div"})," ",l(n.span,{className:"hljs-attr",children:"id"}),"=",l(n.span,{className:"hljs-string",children:'"root"'}),">"]}),e(n.span,{className:"hljs-tag",children:["</",l(n.span,{className:"hljs-name",children:"div"}),">"]}),`
  `,e(n.span,{className:"hljs-tag",children:["<",l(n.span,{className:"hljs-name",children:"script"}),`
    `,l(n.span,{className:"hljs-attr",children:"crossorigin"}),`
    `,l(n.span,{className:"hljs-attr",children:"src"}),"=",l(n.span,{className:"hljs-string",children:'"https://unpkg.com/react@18/umd/react.development.js"'}),">"]}),e(n.span,{className:"hljs-tag",children:["</",l(n.span,{className:"hljs-name",children:"script"}),">"]}),`
  `,e(n.span,{className:"hljs-tag",children:["<",l(n.span,{className:"hljs-name",children:"script"}),`
    `,l(n.span,{className:"hljs-attr",children:"crossorigin"}),`
    `,l(n.span,{className:"hljs-attr",children:"src"}),"=",l(n.span,{className:"hljs-string",children:'"https://unpkg.com/react-dom@18/umd/react-dom.development.js"'}),">"]}),e(n.span,{className:"hljs-tag",children:["</",l(n.span,{className:"hljs-name",children:"script"}),">"]}),`
  `,e(n.span,{className:"hljs-tag",children:["<",l(n.span,{className:"hljs-name",children:"script"})," ",l(n.span,{className:"hljs-attr",children:"src"}),"=",l(n.span,{className:"hljs-string",children:'"https://unpkg.com/babel-standalone@6/babel.min.js"'}),">"]}),e(n.span,{className:"hljs-tag",children:["</",l(n.span,{className:"hljs-name",children:"script"}),">"]}),`

  `,e(n.span,{className:"hljs-tag",children:["<",l(n.span,{className:"hljs-name",children:"script"})," ",l(n.span,{className:"hljs-attr",children:"type"}),"=",l(n.span,{className:"hljs-string",children:'"text/babel"'}),">"]}),e(n.span,{className:"javascript",children:[`
    `,l(n.span,{className:"hljs-keyword",children:"const"})," ",l(n.span,{className:"hljs-title function_",children:"App"})," = (",l(n.span,{className:"hljs-params"}),") => ",e(n.span,{className:"xml",children:[e(n.span,{className:"hljs-tag",children:["<",l(n.span,{className:"hljs-name",children:"h1"}),">"]}),"Hello React",e(n.span,{className:"hljs-tag",children:["</",l(n.span,{className:"hljs-name",children:"h1"}),">"]})]}),`;
    `,l(n.span,{className:"hljs-title class_",children:"ReactDOM"}),".",l(n.span,{className:"hljs-title function_",children:"createRoot"}),"(",l(n.span,{className:"hljs-variable language_",children:"document"}),".",l(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",l(n.span,{className:"hljs-string",children:"'root'"}),")).",l(n.span,{className:"hljs-title function_",children:"render"}),"(",l(n.span,{className:"xml",children:e(n.span,{className:"hljs-tag",children:["<",l(n.span,{className:"hljs-name",children:"App"})," />"]})}),`);
  `]}),e(n.span,{className:"hljs-tag",children:["</",l(n.span,{className:"hljs-name",children:"script"}),">"]}),`
`,e(n.span,{className:"hljs-tag",children:["</",l(n.span,{className:"hljs-name",children:"body"}),">"]}),`
`]})}),`
`,l(a,{id:"react-in-browser-ctjkpt"}),`
`,l(n.h2,{children:"JSX"}),`
`,l(n.h3,{children:"JSX 语法本质"}),`
`,l(n.p,{children:"JSX 是 JS 的语法扩展 不能被浏览器直接执行 需要使用 babel 编译后 才可以在浏览器中正常执行"}),`
`,l(n.p,{children:"JSX 在 React 中用来描述用户界面 最终被 babel 编译为"}),`
`,l(n.p,{children:l(n.code,{children:"React.createElement(type,attrs,children)"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,l(n.p,{children:"type：用于标识节点的类型。它可以是类似“h1”“div”这样的标准 HTML 标签字符串，也可以是 React 组件类型或 React fragment 类型。"}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"config：以对象形式传入，组件所有的属性都会以键值对的形式存储在 config 对象中。"}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"children：以对象形式传入，它记录的是组件标签之间嵌套的内容，也就是所谓的“子节点”“子元素”。"}),`
`]}),`
`]}),`
`,e(n.p,{children:["所以 JSX 本质是只是一种语法糖 最终还是被转化为了",l(n.code,{children:"React.createElement"})]}),`
`,e(n.p,{children:["我们可以在",l(n.a,{href:"https://www.babeljs.cn/",children:"babel"}),"官网中 查看 JSX 最终被编译成了什么"]}),`
`,l(n.pre,{children:e(n.code,{className:"hljs language-js",children:["<div ",l(n.span,{className:"hljs-keyword",children:"class"}),"=",l(n.span,{className:"hljs-string",children:'"header"'}),`>
  `,e(n.span,{className:"xml",children:[e(n.span,{className:"hljs-tag",children:["<",l(n.span,{className:"hljs-name",children:"div"}),`
    `,l(n.span,{className:"hljs-attr",children:"class"}),"=",l(n.span,{className:"hljs-string",children:'"title"'}),`
    `,l(n.span,{className:"hljs-attr",children:"onClick"}),"=",l(n.span,{className:"hljs-string",children:"{()"})," =>"]}),` {
      console.log('hello');
    }}>
    Title
  `,e(n.span,{className:"hljs-tag",children:["</",l(n.span,{className:"hljs-name",children:"div"}),">"]})]}),`
</div>;

`,l(n.span,{className:"hljs-comment",children:"// 经babel转换后"}),`
(`,l(n.span,{className:"hljs-string",children:"'use strict'"}),`);

`,l(n.span,{className:"hljs-comment",children:"/*#__PURE__*/"}),`
`,l(n.span,{className:"hljs-title class_",children:"React"}),".",l(n.span,{className:"hljs-title function_",children:"createElement"}),`(
  `,l(n.span,{className:"hljs-string",children:"'div'"}),`,
  {
    `,l(n.span,{className:"hljs-attr",children:"class"}),": ",l(n.span,{className:"hljs-string",children:"'header'"}),`,
  },
  `,l(n.span,{className:"hljs-comment",children:"/*#__PURE__*/"})," ",l(n.span,{className:"hljs-title class_",children:"React"}),".",l(n.span,{className:"hljs-title function_",children:"createElement"}),`(
    `,l(n.span,{className:"hljs-string",children:"'div'"}),`,
    {
      `,l(n.span,{className:"hljs-attr",children:"class"}),": ",l(n.span,{className:"hljs-string",children:"'title'"}),`,
      `,l(n.span,{className:"hljs-attr",children:"onClick"}),": ",l(n.span,{className:"hljs-function",children:"() =>"}),` {
        `,l(n.span,{className:"hljs-variable language_",children:"console"}),".",l(n.span,{className:"hljs-title function_",children:"log"}),"(",l(n.span,{className:"hljs-string",children:"'hello'"}),`);
      },
    },
    `,l(n.span,{className:"hljs-string",children:"'Title'"}),`,
  ),
);
`]})}),`
`,l(n.p,{children:"createElement 中并没有十分复杂的涉及算法或真实 DOM 的逻辑，它的每一个步骤几乎都是在格式化数据"}),`
`,e(n.p,{children:["也就是处理成我们耳熟能详的",l(n.code,{children:"虚拟DOM"}),"，关于",l(n.code,{children:"虚拟DOM"})," 我们都知道它解决了大量 DOM 操作带来的性能问题"]}),`
`,e(n.p,{children:["但是 时至今日 浏览器的性能已经完成可以忽视这方面的消耗 ",l(n.code,{children:"虚拟DOM"})," 在我看来更是一种一统大前端的野心"]}),`
`,e(n.p,{children:["因为",l(n.code,{children:"虚拟DOM"}),"中包含着描述 UI 的信息 如果有一套规则可以将这些信息转换成每个平台支持的语言"]}),`
`,l(n.p,{children:"那么 React 就可以屏蔽每个平台的差异 做到跨段开发"}),`
`,e(n.p,{children:["React 在早期的时候 ",l(n.code,{children:"react"})," 和 ",l(n.code,{children:"react-dom"})," 这两个包是在一起的 从 React15 开始 才开始分离 各司其职"]}),`
`,e(n.p,{children:["这也是 RN 诞生的时候 这也可见一斑 ",l(n.code,{children:"react-dom"})," 的作用"]}),`
`,e(n.p,{children:["至此 ",l(n.code,{children:"createElement"})," 便完成了它的任务 那就是格式化数据"]}),`
`,e(n.p,{children:["接下来 将由",l(n.code,{children:"ReactDOM.render"})," 接入处理好的数据 然后将它挂在真正的 dom 节点上"]}),`
`,l(n.pre,{children:e(n.code,{className:"hljs language-js",children:[l(n.span,{className:"hljs-title class_",children:"ReactDOM"}),".",l(n.span,{className:"hljs-title function_",children:"createRoot"}),`(
  `,l(n.span,{className:"hljs-comment",children:"// 元素挂载的目标容器（一个真实DOM）"}),`
  container,
).`,l(n.span,{className:"hljs-title function_",children:"render"}),`(
  `,l(n.span,{className:"hljs-comment",children:"// 需要渲染的元素（ReactElement）"}),`
  element,
);
`]})}),`
`,l(n.p,{children:"至此 你的页面便出现了"}),`
`,l(n.h3,{children:"JSX 表达式"}),`
`,e(n.p,{children:["JSX 允许 在",l(n.code,{children:"{}"}),"中使用我们的 JS 表达式"]}),`
`,l(n.p,{children:"在里面 我们可以使用变量 进行运算符的操作 调用方法 等等"}),`
`,l(n.pre,{children:e(n.code,{className:"hljs language-jsx",children:["<h1>{",l(n.span,{className:"hljs-keyword",children:"new"})," ",l(n.span,{className:"hljs-title class_",children:"Date"}),"().",l(n.span,{className:"hljs-title function_",children:"toString"}),`()}</h1>
`]})}),`
`,l(n.h3,{children:"JSX 注释"}),`
`,l(n.p,{children:"JSX 有特殊的注释方法"}),`
`,l(n.pre,{children:e(n.code,{className:"hljs language-js",children:[`{
  `,l(n.span,{className:"hljs-comment",children:"/* 我是注释  这里是一个头部信息*/"}),`
}
<div className=`,l(n.span,{className:"hljs-string",children:'"header"'}),`>我是头部</div>;
`]})}),`
`,l(n.h3,{children:"特殊点"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,l(n.p,{children:"由于 JSX 是 JS 的语法扩展 但是在里面我们又可以书写类似 HTML 的东西 所以为了避免冲突"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:["HTML 中 class 在 JS 中表示类 在 JSX 中 我们用",l(n.strong,{children:"className"}),"来代替"]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:["HTML 中 label 标签的 for 在 JS 中表示循环 在 JSX 中用",l(n.strong,{children:"htmlFor"}),"来代替"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,l(n.pre,{children:e(n.code,{className:"hljs language-jsx",children:["<div className=",l(n.span,{className:"hljs-string",children:'"main"'}),`>
  `,e(n.span,{className:"xml",children:[e(n.span,{className:"hljs-tag",children:["<",l(n.span,{className:"hljs-name",children:"h1"}),">"]}),"{new Date().toString()}",e(n.span,{className:"hljs-tag",children:["</",l(n.span,{className:"hljs-name",children:"h1"}),">"]})]}),`
  {`,l(n.span,{className:"hljs-comment",children:"/* label 标签的for 用 htmlFor 代替 */"}),`}
  <label htmlFor=`,l(n.span,{className:"hljs-string",children:'"password"'}),`>
    password
    <input type=`,l(n.span,{className:"hljs-string",children:'"text"'})," id=",l(n.span,{className:"hljs-string",children:'"password"'}),` />
  </label>
</div>
`]})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,l(n.p,{children:"undefined / boolean / null"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,l(n.p,{children:"对于以上几种数据类型 JSX 不会将其渲染到页面上"}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"利用这个特性 我们可以实现条件渲染"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,l(n.pre,{children:e(n.code,{className:"hljs language-javascript",children:[l(n.span,{className:"hljs-keyword",children:"let"})," flag = ",l(n.span,{className:"hljs-literal",children:"true"}),`
<div>{flag && `,l(n.span,{className:"hljs-string",children:'"欢迎回来~~~"'}),`}</div>
`]})}),`
`,l(n.h3,{children:"JSX 列表渲染"}),`
`,l(n.p,{children:"这一块主要使用到了数组的高阶函数 map"}),`
`,l(n.pre,{children:e(n.code,{className:"hljs language-jsx",children:[l(n.span,{className:"hljs-keyword",children:"const"})," gameList = [",l(n.span,{className:"hljs-string",children:"'剑盾'"}),", ",l(n.span,{className:"hljs-string",children:"'塞尔达'"}),", ",l(n.span,{className:"hljs-string",children:"'马里奥制造'"}),", ",l(n.span,{className:"hljs-string",children:"'风花雪月'"}),`];
`,l(n.span,{className:"hljs-keyword",children:"const"})," gamesUI = gameList.",l(n.span,{className:"hljs-title function_",children:"map"}),"(",e(n.span,{className:"hljs-function",children:["(",l(n.span,{className:"hljs-params",children:"item, index"}),") =>"]}),` {
  `,l(n.span,{className:"hljs-comment",children:"// 🙅‍♂️ 避免使用index作为唯一的key去使用 一般后端返回的数据都有唯一的key值"}),`
  `,l(n.span,{className:"hljs-keyword",children:"return"})," ",e(n.span,{className:"xml",children:[e(n.span,{className:"hljs-tag",children:["<",l(n.span,{className:"hljs-name",children:"div"})," ",l(n.span,{className:"hljs-attr",children:"key"}),"=",l(n.span,{className:"hljs-string",children:"{index}"}),">"]}),"{item}",e(n.span,{className:"hljs-tag",children:["</",l(n.span,{className:"hljs-name",children:"div"}),">"]})]}),`;
});
`]})}),`
`,l(n.h3,{children:"JSX 事件绑定"}),`
`,l(n.p,{children:"例如 我们为如下的 dom 节点绑定一个点击事件"}),`
`,l(n.pre,{children:e(n.code,{className:"hljs language-jsx",children:["<h1 onClick={",l(n.span,{className:"hljs-function",children:"() =>"})," ",l(n.span,{className:"hljs-title function_",children:"alert"}),"(",l(n.span,{className:"hljs-string",children:"'hello'"}),`)}>sayHello</h1>
`]})}),`
`,l(n.p,{children:"如果在类组件中 你可能就需要考虑到 this 的绑定问题了"}),`
`,l(n.p,{children:"记得使用 bind 或者 箭头函数 😛 😛 😛"}),`
`,l(a,{id:"jsx-nrt5fn"}),`
`,l(n.h2,{children:"开发规范"}),`
`,l(n.p,{children:"这里是作者的一些命名习惯"}),`
`,l(n.h3,{children:"文件目录"}),`
`,e(n.table,{children:[l(n.thead,{children:e(n.tr,{children:[l(n.th,{align:"left",children:"内容"}),l(n.th,{align:"left",children:"路径"}),l(n.th,{align:"left",children:"说明"})]})}),e(n.tbody,{children:[e(n.tr,{children:[l(n.td,{align:"left",children:"存放静态资源，例如图片"}),l(n.td,{align:"left",children:"src/assets"}),l(n.td,{align:"left",children:"根据模块可以在 assets 下再新建文件夹"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"业务页面"}),l(n.td,{align:"left",children:"src/pages"}),l(n.td,{align:"left",children:"对应需求事实际页面"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"业务组件"}),l(n.td,{align:"left",children:"src/components"}),l(n.td,{align:"left",children:"业务公共组件，有些组件在封装的时候可以考虑后期的可扩展性，及通用性"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"页面路径"}),l(n.td,{align:"left",children:"src/routes"}),l(n.td,{align:"left",children:"页面路径"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"业务公共样式"}),l(n.td,{align:"left",children:"src/styles"}),l(n.td,{align:"left",children:"全局公共样式，可以在其他地方引用"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"实用公共函数"}),l(n.td,{align:"left",children:"src/utils"}),l(n.td,{align:"left",children:"例如网络请求 request，公共函数等"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"redux 状态"}),l(n.td,{align:"left",children:"src/store"}),l(n.td,{align:"left",children:"根据模块在划分文件"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"业务封装的钩子函数"}),l(n.td,{align:"left",children:"src/hooks"}),l(n.td,{align:"left",children:"与 components 思路类似，有些组件如果业务中多个地方在用，可以考虑后期抽离出来"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"服务端接口"}),l(n.td,{align:"left",children:"src/api"}),l(n.td,{align:"left",children:"存放所有的服务端接口"})]}),e(n.tr,{children:[l(n.td,{align:"left",children:"mock 数据"}),l(n.td,{align:"left",children:"src/mock"}),l(n.td,{align:"left",children:"存放一些 mock 数据"})]})]})]})]})}function g(s={}){const{wrapper:n}=Object.assign({},i(),s.components);return n?l(n,Object.assign({},s,{children:l(c,s)})):c(s)}function h(s,n){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{g as default,j as frontmatter};
