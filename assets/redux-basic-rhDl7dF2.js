import{u as r,j as n,a as e,F as h}from"./index-Dt7Lsx6p.js";import"./antd-DGkp10QV.js";import"./lodash-BVSlK2Pl.js";import"./prettier-DJQX7j1f.js";import"./chance-DnaHbaGl.js";const j={title:"React Quick Start - Redux Basics"};function c(a){const s=Object.assign({p:"p",blockquote:"blockquote",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",h4:"h4",pre:"pre",span:"span"},r(),a.components),{Codesandbox:l}=s;return l||i("Codesandbox"),e(h,{children:[n(s.p,{children:"本文参考如下文档"}),`
`,e(s.blockquote,{children:[`
`,n("a",{href:"https://redux.js.org/",children:"Redux 官方文档"}),`
`]}),`
`,e(s.blockquote,{children:[`
`,n("a",{href:"https://www.redux.org.cn/",children:"Redux 中文文档"}),`
`]}),`
`,n(s.h2,{children:"Redux 简介"}),`
`,n("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7445498d73ca4f749894fba79f3ac6d3~tplv-k3u1fbpfcp-zoom-1.image"}),`
`,n(s.p,{children:"Redux 由 Flux 演变而来 是一套管理公共状态的第三方工具"}),`
`,e(s.blockquote,{children:[`
`,e(s.p,{children:["关于 Flux 思想 可参考 ",n("a",{href:"http://www.ruanyifeng.com/blog/2016/01/flux.html",children:"阮一峰的网络日志"})]}),`
`]}),`
`,n(s.p,{children:"虽然不是 React 官方开发 但已经成为 React 管理状态事实上的标准"}),`
`,n(s.h3,{children:"Redux 工作流程"}),`
`,n("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d762c4fc4ff4fa3bcc50885566d62a9~tplv-k3u1fbpfcp-zoom-1.image"}),`
`,e(s.ul,{children:[`
`,e(s.li,{children:[`
`,e(s.p,{children:["View 视图层内派发 action ",n(s.code,{children:"(dispatch(action))"})]}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"Reducer 接收到 action 进行分发和处理 返回一个新的 state 给 store"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"Store 接收到新的 state 数据发生改变"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"View 视图层 通过 store.subscribe 订阅 store 更新页面"}),`
`]}),`
`]}),`
`,n(s.p,{children:"具体流程可见下图"}),`
`,n("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35aaef12c7694057a0c2c5a67f0dbfa5~tplv-k3u1fbpfcp-zoom-1.image"}),`
`,n("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/053ae7c3512a413e90ddd13a4d5ac3fb~tplv-k3u1fbpfcp-zoom-1.image"}),`
`,n(s.h3,{children:"三大原则"}),`
`,n(s.h4,{children:"单一数据源"}),`
`,n(s.p,{children:"虽然 Redux 源于 Flux 架构 但是它并不是完全按照 Flux 架构去设计的"}),`
`,n(s.p,{children:"例如 Flux 架构中 允许有多个 store 但是 Redux 中只允许有一个 store 存在"}),`
`,n(s.p,{children:"所有的 state 都被存在了唯一的一个 store 中"}),`
`,e(s.p,{children:["这也就确保了数据的",n(s.code,{children:"可追踪"}),"和",n(s.code,{children:"可预测"})]}),`
`,n(s.h4,{children:"不可变数据"}),`
`,n(s.p,{children:"不要尝试直接修改 store 中的数据 这将会使你的应用发生不可预测的结果"}),`
`,n(s.p,{children:"唯一改变 state 的方法就是触发 action"}),`
`,n(s.p,{children:"这样 每次你的修改都会返回一个新的 store"}),`
`,n(s.p,{children:"Redux 就可以记录每一次 store 的变化 从而实现调试等功能"}),`
`,n(s.h4,{children:"使用纯函数"}),`
`,e(s.blockquote,{children:[`
`,n(s.p,{children:`此函数在相同的输入值时，需产生相同的输出。函数的输出和输入值以外的其他隐藏信息或状态无关，也和由 I/O 设备产生的外部输出无关。
该函数不能有语义上可观察的函数副作用，诸如“触发事件”，使输出设备输出，或更改输出值以外物件的内容等。 ------ 维基百科`}),`
`]}),`
`,n(s.p,{children:"Reducer 只是一些纯函数 这意味着 Reducer 的结果将只受 Action 控制"}),`
`,n(s.p,{children:"再回过头来看 Redux 的官方定义"}),`
`,e(s.blockquote,{children:[`
`,n(s.p,{children:"A Predictable State Container for JS Apps ----- Redux 官方"}),`
`]}),`
`,n(s.p,{children:"我们会发现 这三大原则其实都只在一件事 就是 Predictable 可预测的"}),`
`,n(s.h2,{children:"Store: 它是一个单一的数据源，而且是只读的"}),`
`,n("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c9c5b41a2b847c2972d5a3b678912bd~tplv-k3u1fbpfcp-zoom-1.image"}),`
`,n(s.h2,{children:"Action: 是“动作”的意思，它是对变化的描述"}),`
`,n("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4eb5bd6d834f4f64869f8313b7c43890~tplv-k3u1fbpfcp-zoom-1.image"}),`
`,n(s.h2,{children:"Reducer: 它负责对变化进行分发和处理，最终将新的数据返回给 Store"}),`
`,n("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b400f11cea6485288f3a5dcca1c1d18~tplv-k3u1fbpfcp-zoom-1.image"}),`
`,n(s.h2,{children:"API"}),`
`,n(s.h3,{children:"creatorStore"}),`
`,n(s.p,{children:"创建 store 对象"}),`
`,n(s.h3,{children:"appleMiddleware"}),`
`,n(s.p,{children:"使用中间件 在下一讲中间件中会提到"}),`
`,n(s.h3,{children:"bindActionCreators"}),`
`,n(s.p,{children:"该 Api 用于将 action 和 dispatch 绑定 从而使组件可以无感知 Redux 的存在"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," { dispatch } = ",n(s.span,{className:"hljs-title function_",children:"useDispatch"}),`();
`,n(s.span,{className:"hljs-keyword",children:"const"})," _bindActionCreators = ",n(s.span,{className:"hljs-title function_",children:"bindActionCreators"}),`(
  {
    `,n(s.span,{className:"hljs-comment",children:"// 定义好的一些actionCreators"}),`
    addCounter,
    subCounter,
  },
  dispatch,
);

`,n(s.span,{className:"hljs-comment",children:"// 这样就可以派发一个action了"}),`
_bindActionCreators.`,n(s.span,{className:"hljs-title function_",children:"addCounter"}),`();
`]})}),`
`,n(s.h3,{children:"combineReducers"}),`
`,n(s.p,{children:"当我们的页面变得越来越复杂的时候 可能我们需要针对模块拆分不同的 Store"}),`
`,n(s.p,{children:"这个 Api 就可以帮我们重新组合这些 Store 变成一个 Store"}),`
`,n("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56c63afe59dd44798b3f1f8f61eafacc~tplv-k3u1fbpfcp-zoom-1.image"}),`
`,n(s.h3,{children:"connect"}),`
`,n(s.p,{children:"用于将 Store 和 Action 映射到组件的 props 上"}),`
`,n("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9aead73d371b4df6ae18e9028dc0c624~tplv-k3u1fbpfcp-zoom-1.image"}),`
`,n(s.h3,{children:"compose"}),`
`,n(s.p,{children:"compose 是函数式编程中的方法 用来从右到左来组合多个函数"}),`
`,n(s.p,{children:"本文只做 Redux 的入门 所以 compose 这个函数可以在函数式编程中深究"}),`
`,n(s.h2,{children:"Redux DevTools"}),`
`,n(s.p,{children:"这是一个 Chrome 的插件 可以让我们更好的调试我们的 Redux"}),`
`,n("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11f100b78b3441c8adbf311582af1290~tplv-k3u1fbpfcp-zoom-1.image"}),`
`,n(s.h2,{children:"react-redux"}),`
`,n(s.p,{children:"这是一个用于将你的组件和 Redux 更方便连接的组件库"}),`
`,n(s.p,{children:"使用 如下"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-tsx",children:[n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"Provider"}),", useDispatch, useSelector } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'react-redux'"}),`;

`,e(s.span,{className:"xml",children:[e(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Provider"})," ",n(s.span,{className:"hljs-attr",children:"store"}),"=",n(s.span,{className:"hljs-string",children:"{store}"}),">"]}),`
  `,e(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"A"})," />"]}),`
  `,e(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"B"})," />"]}),`
  `,e(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"C"})," />"]}),`
`,e(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Provider"}),">"]})]}),`;
`]})}),`
`,n(s.p,{children:"如此一来 A B C 组件便都有能力获取到 Store 中的数据了"}),`
`,n(s.p,{children:"具体的用法 可以看接下来的 Demo"}),`
`,n(s.h2,{children:"🌰"}),`
`,n(s.p,{children:"这里我用一个计数器的 🌰 来快速过一遍 Redux"}),`
`,n(s.p,{children:"首先 创建我们的 store"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-comment",children:"// 导入核心API 创建Store"}),`
`,n(s.span,{className:"hljs-keyword",children:"import"})," { createStore } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'redux'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"IStore"}),` {
  `,n(s.span,{className:"hljs-attr",children:"count"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"IAction"}),` {
  `,n(s.span,{className:"hljs-attr",children:"type"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  [`,n(s.span,{className:"hljs-attr",children:"key"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),"]: ",n(s.span,{className:"hljs-built_in",children:"any"}),`;
}

`,n(s.span,{className:"hljs-comment",children:"// 定义我们的 Action Type"}),`
`,n(s.span,{className:"hljs-keyword",children:"enum"})," ",n(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),` {
  `,n(s.span,{className:"hljs-variable constant_",children:"ADD_COUNTER"})," = ",n(s.span,{className:"hljs-string",children:"'ADD_COUNTER'"}),`,
  `,n(s.span,{className:"hljs-variable constant_",children:"SUB_COUNTER"})," = ",n(s.span,{className:"hljs-string",children:"'SUB_COUNTER'"}),`,
}

`,n(s.span,{className:"hljs-comment",children:"// 对外暴露 Action Creators 用于组件调用"}),`
`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"addCounter"})," = (",e(s.span,{className:"hljs-params",children:["payload: ",n(s.span,{className:"hljs-built_in",children:"number"})]}),`) => ({
  `,n(s.span,{className:"hljs-attr",children:"type"}),": ",n(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",n(s.span,{className:"hljs-property",children:"ADD_COUNTER"}),`,
  payload,
});

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"subCounter"})," = (",e(s.span,{className:"hljs-params",children:["payload: ",n(s.span,{className:"hljs-built_in",children:"number"})]}),`) => ({
  `,n(s.span,{className:"hljs-attr",children:"type"}),": ",n(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",n(s.span,{className:"hljs-property",children:"SUB_COUNTER"}),`,
  payload,
});

`,n(s.span,{className:"hljs-comment",children:"// 创建一个初始化的Store"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"initStore"}),": ",n(s.span,{className:"hljs-title class_",children:"IStore"}),` = {
  `,n(s.span,{className:"hljs-attr",children:"count"}),": ",n(s.span,{className:"hljs-number",children:"0"}),`,
};

`,n(s.span,{className:"hljs-comment",children:"// 创建Reducer 用于管理 View 派发过来的 Action"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"reducer"})," = (",n(s.span,{className:"hljs-params",children:"store = initStore, action: IAction"}),`) => {
  `,n(s.span,{className:"hljs-keyword",children:"switch"})," (action.",n(s.span,{className:"hljs-property",children:"type"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"case"})," ",n(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",n(s.span,{className:"hljs-property",children:"ADD_COUNTER"}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"})," { ...store, ",n(s.span,{className:"hljs-attr",children:"count"}),": store.",n(s.span,{className:"hljs-property",children:"count"})," + action.",n(s.span,{className:"hljs-property",children:"payload"}),` };
    `,n(s.span,{className:"hljs-keyword",children:"case"})," ",n(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",n(s.span,{className:"hljs-property",children:"SUB_COUNTER"}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"})," { ...store, ",n(s.span,{className:"hljs-attr",children:"count"}),": store.",n(s.span,{className:"hljs-property",children:"count"})," - action.",n(s.span,{className:"hljs-property",children:"payload"}),` };
    `,n(s.span,{className:"hljs-attr",children:"default"}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` store;
  }
};

`,n(s.span,{className:"hljs-comment",children:"// 创建 Store 这里我们还开启了 Redux DEVTools"}),`
`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"const"})," store = ",n(s.span,{className:"hljs-title function_",children:"createStore"}),`(
  reducer,
  (`,n(s.span,{className:"hljs-variable language_",children:"window"})," ",n(s.span,{className:"hljs-keyword",children:"as"})," ",n(s.span,{className:"hljs-built_in",children:"any"}),").",n(s.span,{className:"hljs-title function_",children:"__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"}),`(),
);
`]})}),`
`,n(s.p,{children:"视图层的代码如下"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-tsx",children:[n(s.span,{className:"hljs-keyword",children:"import"})," { useState } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'react'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"Button"}),", ",n(s.span,{className:"hljs-title class_",children:"Input"})," } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'antd'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"Provider"}),", useDispatch, useSelector } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'react-redux'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"import"})," { store, addCounter, subCounter, ",n(s.span,{className:"hljs-title class_",children:"IStore"})," } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'./store'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"Counter"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-comment",children:"// 获取 Store 中的数据"}),`
  `,n(s.span,{className:"hljs-keyword",children:"const"})," { count } = ",n(s.span,{className:"hljs-title function_",children:"useSelector"}),"(",e(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"store: IStore"}),") =>"]}),` store);
  `,n(s.span,{className:"hljs-keyword",children:"const"})," dispatch = ",n(s.span,{className:"hljs-title function_",children:"useDispatch"}),`();
  `,n(s.span,{className:"hljs-keyword",children:"const"})," [payload, setPayload] = useState<",n(s.span,{className:"hljs-built_in",children:"number"}),">(",n(s.span,{className:"hljs-number",children:"1"}),`);

  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,e(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:"<>"}),`
      `,e(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Input"}),`
        `,n(s.span,{className:"hljs-attr",children:"value"}),"=",n(s.span,{className:"hljs-string",children:"{payload}"}),`
        `,n(s.span,{className:"hljs-attr",children:"onChange"}),"=",n(s.span,{className:"hljs-string",children:"{v"})," =>"]}),` setPayload(parseInt(v.target.value))}
      />
      `,e(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Button"})," ",n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{()"})," =>"]})," dispatch(addCounter(payload))}>+",e(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),`
      `,e(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),"{count}",e(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),`
      `,e(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Button"})," ",n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{()"})," =>"]})," dispatch(subCounter(payload))}>-",e(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),`
    `,n(s.span,{className:"hljs-tag",children:"</>"})]}),`
  );
}

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"})," ",n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"Root"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,e(s.span,{className:"xml",children:[e(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Provider"})," ",n(s.span,{className:"hljs-attr",children:"store"}),"=",n(s.span,{className:"hljs-string",children:"{store}"}),">"]}),`
      `,e(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Counter"})," />"]}),`
    `,e(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Provider"}),">"]})]}),`
  );
}
`]})}),`
`,n(l,{id:"redux-basic-usage-c62hr9"}),`
`,n(s.h2,{children:"思考"}),`
`,n(s.p,{children:"本文中的 reducers 都是同步代码 如果我们在发送 action 的时候 需要执行一些异步操作 这个时候应该怎么办呢"}),`
`,n(s.p,{children:"reducer 中是否可以处理异步操作呢 ？？？"})]})}function N(a={}){const{wrapper:s}=Object.assign({},r(),a.components);return s?n(s,Object.assign({},a,{children:n(c,a)})):c(a)}function i(a,s){throw new Error("Expected component `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}export{N as default,j as frontmatter};
