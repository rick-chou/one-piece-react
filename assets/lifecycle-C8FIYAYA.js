import{u as a,j as e,a as l,F as t}from"./index-Dt7Lsx6p.js";import"./antd-DGkp10QV.js";import"./lodash-BVSlK2Pl.js";import"./prettier-DJQX7j1f.js";import"./chance-DnaHbaGl.js";const p={title:"React Quick Start - Lifecycle"};function r(c){const n=Object.assign({h2:"h2",h3:"h3",ul:"ul",li:"li",p:"p",blockquote:"blockquote",a:"a",pre:"pre",code:"code",span:"span"},a(),c.components);return l(t,{children:[e(n.h2,{children:"React 15"}),`
`,`
`,e(n.h3,{children:"constructor(props)"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"组件初始化时触发"}),`
`]}),`
`,e(n.h3,{children:"componentWillReceiveProps(nextProps) -- 过时"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"由父组件的更新触发"}),`
`]}),`
`,e(n.h3,{children:"shouldComponentUpdate(nextProps, nextState)"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"返回一个 boolean 来控制组件是否更新"}),`
`]}),`
`,e(n.h3,{children:"componentWillMount() -- 过时"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"组件即将挂载前触发"}),`
`]}),`
`,e(n.h3,{children:"componentWillUpdate(nextProps, nextState) -- 过时"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"组件即将更新前触发"}),`
`]}),`
`,e(n.h3,{children:"componentDidUpdate()"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"组件更新后触发"}),`
`]}),`
`,e(n.h3,{children:"componentDidMount()"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"组件挂载完成后触发"}),`
`]}),`
`,e(n.h3,{children:"render()"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"React 的灵魂 用于绘制 UI"}),`
`]}),`
`,e(n.h3,{children:"componentWillUnmount()"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"组件卸载前触发"}),`
`]}),`
`,e(n.p,{children:"再早些，还有 getDefaultProps 和 getInitState 这两个方法"}),`
`,e(n.p,{children:"它们都是 React.createClass() 模式下初始化数据的方法"}),`
`,e(n.p,{children:"由于这种写法在 ES6 普及后已经不常见，这里不再详细展开"}),`
`,l(n.blockquote,{children:[`
`,l(n.p,{children:["如果你对这一块感兴趣 可以查看官网的","React Without ES6"]}),`
`]}),`
`,e(n.h2,{children:"React 16"}),`
`,l(n.p,{children:["社区的 React 生命周期图谱 👉",e(n.a,{href:"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",children:"React16 生命周期图谱"})]}),`
`,`
`,e(n.h3,{children:"getDerivedStateFromProps"}),`
`,e(n.p,{children:"React 为了填补 componentWillMount 的空白 便有了新的生命周期函数 getDerivedStateFromProps"}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-js",children:[e(n.span,{className:"hljs-keyword",children:"static"})," ",e(n.span,{className:"hljs-title function_",children:"getDerivedStateFromProps"}),`(props, state)
`]})}),`
`,e(n.p,{children:"该生命周期的唯一用途就是使用 props 来派生/更新 state"}),`
`,e(n.p,{children:"getDerivedStateFromProps 需要一个对象格式的返回值 来更新（派生）组件的 state"}),`
`,e(n.p,{children:"并且把新增的 getDerivedStateFromProps 用 static 修饰，目的也是阻止用户在其内部使用 this"}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-js",children:[e(n.span,{className:"hljs-comment",children:"// 初始化/更新时调用"}),`
`,e(n.span,{className:"hljs-keyword",children:"static"})," ",e(n.span,{className:"hljs-title function_",children:"getDerivedStateFromProps"}),"(",e(n.span,{className:"hljs-params",children:"props, state"}),`) {

  `,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),"(",e(n.span,{className:"hljs-string",children:'"getDerivedStateFromProps方法执行"'}),`);

  `,e(n.span,{className:"hljs-keyword",children:"return"}),` {

    `,e(n.span,{className:"hljs-attr",children:"fatherText"}),": props.",e(n.span,{className:"hljs-property",children:"text"}),`

  }

}
`]})}),`
`,e(n.h3,{children:"getSnapshotBeforeUpdate"}),`
`,e(n.p,{children:"此外 还有消失的 componentWillUpdate 与新增的 getSnapshotBeforeUpdate"}),`
`,e(n.p,{children:"它与 componentDidUpdate 组合使用如下"}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-js",children:[e(n.span,{className:"hljs-comment",children:"// 组件更新时调用"}),`
`,e(n.span,{className:"hljs-title function_",children:"getSnapshotBeforeUpdate"}),"(",e(n.span,{className:"hljs-params",children:"prevProps, prevState"}),`) {

  `,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),"(",e(n.span,{className:"hljs-string",children:'"getSnapshotBeforeUpdate方法执行"'}),`);

  `,e(n.span,{className:"hljs-keyword",children:"return"})," ",e(n.span,{className:"hljs-string",children:'"nanshu"'}),`;

}


`,e(n.span,{className:"hljs-comment",children:"// 组件更新后调用"}),`
`,e(n.span,{className:"hljs-title function_",children:"componentDidUpdate"}),"(",e(n.span,{className:"hljs-params",children:"prevProps, prevState, valueFromSnapshot"}),`) {

  `,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),"(",e(n.span,{className:"hljs-string",children:'"componentDidUpdate方法执行"'}),`);

  `,e(n.span,{className:"hljs-variable language_",children:"console"}),".",e(n.span,{className:"hljs-title function_",children:"log"}),"(",e(n.span,{className:"hljs-string",children:'"从 getSnapshotBeforeUpdate 获取到的值是"'}),`, valueFromSnapshot);

}

`]})}),`
`,l(n.p,{children:["在 ",e(n.code,{children:"React16"})," 前 React 采用",e(n.code,{children:"同步渲染"}),"的方式"]}),`
`,e(n.p,{children:"每次组件更新 都会构建一颗新的 dom 树 然后进行 diff 实现对 dom 的定向更新"}),`
`,e(n.p,{children:"但是这个过程 是一个十分耗时的递归过程"}),`
`,e(n.p,{children:"有可能在这个期间 用户都无法进行任何的操作 因为这个过程抢占了主线程 浏览器无法响应其他任何操作"}),`
`,l(n.p,{children:["而 ",e(n.code,{children:"React16"})," 用 Fiber 架构重写了核心算法"]}),`
`,l(n.p,{children:["将同步渲染改为了",e(n.code,{children:"异步渲染"})]}),`
`,e(n.p,{children:"查看上图生命周期图谱左侧 可以看到生命周期又被分为了三个阶段"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:[`
`,e(n.p,{children:"render 阶段：纯净且没有副作用，可能会被 React 暂停、终止或重新启动"}),`
`]}),`
`,l(n.li,{children:[`
`,e(n.p,{children:"pre-commit 阶段：可以读取 DOM"}),`
`]}),`
`,l(n.li,{children:[`
`,e(n.p,{children:"commit 阶段：可以使用 DOM，运行副作用，安排更新"}),`
`]}),`
`]}),`
`,e(n.p,{children:"用户感知到是 commit 阶段 所以这个阶段始终使用同步渲染 避免任何异步渲染带来的风险"}),`
`,e(n.p,{children:"而 render 阶段则会将一个大的更新任务拆解为许多个小任务"}),`
`,e(n.p,{children:"每当执行完一个小任务时，渲染线程都会把主线程交回去，看看有没有优先级更高的工作要处理，"}),`
`,e(n.p,{children:"确保不会出现其他任务被“饿死”的情况，进而避免同步渲染带来的卡顿"}),`
`,e(n.p,{children:"因为 render 阶段的生命周期有可能被打断重新执行"}),`
`,e(n.p,{children:"所以在 render 阶段的生命周期就变得不那么”安全“了"}),`
`,e(n.p,{children:"举个 🌰 如果你在这些 unsafe 的生命周期内调用付款接口的话 emmmmmmmmmm"}),`
`,e(n.p,{children:"回过头来 看看 react15 有哪些生命周期位于 render 阶段"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:[`
`,e(n.p,{children:"componentWillMount"}),`
`]}),`
`,l(n.li,{children:[`
`,e(n.p,{children:"componentWillUpdate"}),`
`]}),`
`,l(n.li,{children:[`
`,e(n.p,{children:"componentWillReceiveProps"}),`
`]}),`
`]}),`
`,e(n.p,{children:"因为它们阻碍了 Fiber 架构 所以在 React16 中将其弃用"})]})}function m(c={}){const{wrapper:n}=Object.assign({},a(),c.components);return n?e(n,Object.assign({},c,{children:e(r,c)})):r(c)}export{m as default,p as frontmatter};
