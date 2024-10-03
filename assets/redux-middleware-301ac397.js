import{u as r,j as a,a as n,F as h}from"./index-1a6446d7.js";import"./antd-4d5318cf.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const m={title:"React Quick Start - Redux Middleware"};function c(e){const s=Object.assign({p:"p",blockquote:"blockquote",h2:"h2",pre:"pre",code:"code",span:"span",strong:"strong",a:"a"},r(),e.components),{Codesandbox:l}=s;return l||i("Codesandbox",!0),n(h,{children:[a(s.p,{children:"本文参考如下文档"}),`
`,n(s.blockquote,{children:[`
`,a("a",{href:"https://github.com/reduxjs/redux-thunk",children:"redux-thunk"}),`
`]}),`
`,n(s.blockquote,{children:[`
`,a("a",{href:"https://redux-saga.js.org/",children:"redux-sage"}),`
`]}),`
`,n(s.blockquote,{children:[`
`,a("a",{href:"https://rematchjs.org/",children:"rematch"}),`
`]}),`
`,a(s.h2,{children:"中间件"}),`
`,a(s.p,{children:"上文中 我们介绍了 Redux 的基本用法 但是我们在 Reducer 中都是同步代码"}),`
`,a(s.p,{children:"承接上文计数器的 🌰 如果我们想在 Reducer 中将用定时器将每个操作延迟 1s"}),`
`,a(s.p,{children:"代码如下"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-comment",children:"// 创建Reducer 用于管理 View 派发过来的 Action"}),`
`,a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title function_",children:"reducer"})," = (",a(s.span,{className:"hljs-params",children:"store = initStore, action: IAction"}),`) => {
  `,a(s.span,{className:"hljs-keyword",children:"switch"})," (action.",a(s.span,{className:"hljs-property",children:"type"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"case"})," ",a(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",a(s.span,{className:"hljs-property",children:"ADD_COUNTER"}),`: {
      `,a(s.span,{className:"hljs-keyword",children:"let"}),` { count } = store;
      `,a(s.span,{className:"hljs-built_in",children:"setTimeout"}),"(",a(s.span,{className:"hljs-function",children:"() =>"}),` {
        count = count + action.`,a(s.span,{className:"hljs-property",children:"payload"}),`;
      });
      `,a(s.span,{className:"hljs-keyword",children:"return"}),` { ...store, count };
    }
    `,a(s.span,{className:"hljs-keyword",children:"case"})," ",a(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",a(s.span,{className:"hljs-property",children:"SUB_COUNTER"}),`:
      `,a(s.span,{className:"hljs-keyword",children:"return"})," { ...store, ",a(s.span,{className:"hljs-attr",children:"count"}),": store.",a(s.span,{className:"hljs-property",children:"count"})," - action.",a(s.span,{className:"hljs-property",children:"payload"}),` };
    `,a(s.span,{className:"hljs-attr",children:"default"}),`:
      `,a(s.span,{className:"hljs-keyword",children:"return"}),` store;
  }
};
`]})}),`
`,a(s.p,{children:"我们用定时器来模拟 真实场景下的一些 api 操作"}),`
`,a(s.p,{children:"上文中 我们提到 Redux 有三大原则 它们都只为做一件事"}),`
`,n(s.p,{children:["让 Redux 的每一步操作都变得",a(s.code,{children:"可预测"})]}),`
`,a(s.p,{children:"但是我们无法确定 我们在 Reducer 中书写的异步操作会在什么时候触发 从而改变 Store"}),`
`,a(s.p,{children:"这将会是 Redux 的 Store 变得难以预测"}),`
`,a(s.p,{children:"我们再来回顾一下 Redux 中的数据流"}),`
`,n(s.blockquote,{children:[`
`,a(s.p,{children:"UI —————> action（plain）—————> reducer —————> state —————> UI"}),`
`]}),`
`,a(s.p,{children:a(s.strong,{children:"其实 action 是一个原始 js 对象（plain object）且 reducer 是一个纯函数"})}),`
`,a(s.p,{children:"所以 如果想要实现异步操作 这些具有副作用的行为时"}),`
`,a(s.p,{children:"就需要在 action 和 reducer 中间再架设一层处理异步逻辑的中间层"}),`
`,a(s.p,{children:"这就是中间件 加入中间件后 Redux 数据流如下"}),`
`,n(s.blockquote,{children:[`
`,a(s.p,{children:"UI —————> action(side function) —————> middleware —————> action(plain) —————> reducer —————> state —————> UI"}),`
`]}),`
`,a(s.p,{children:"既然 知道了数据流 我们就可以手动来实现一个中间层"}),`
`,a(s.h2,{children:"diy middleware"}),`
`,a(s.p,{children:"我们可以 dispatch(中间件函数) 然后在中间件函数中处理数据 最后 return 一个干净的纯函数"}),`
`,a(s.p,{children:"举个 🌰 以下是我新建的一个 middleware.ts"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { addCounter } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'./store'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { wait } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@/utils'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title function_",children:"addCounterAsync"})," = (",n(s.span,{className:"hljs-params",children:["payload: ",a(s.span,{className:"hljs-built_in",children:"number"})]}),`) => {
  `,a(s.span,{className:"hljs-title function_",children:"wait"}),"(",a(s.span,{className:"hljs-number",children:"1000"}),`);
  `,a(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"hljs-title function_",children:"addCounter"}),`(payload);
};
`]})}),`
`,a(s.p,{children:"wait 是我写的一个工具函数 用来暂停程序 模拟异步请求"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title function_",children:"wait"})," = (",n(s.span,{className:"hljs-params",children:["delay: ",a(s.span,{className:"hljs-built_in",children:"number"})]}),`) => {
  `,a(s.span,{className:"hljs-keyword",children:"var"})," start = ",a(s.span,{className:"hljs-keyword",children:"new"})," ",a(s.span,{className:"hljs-title class_",children:"Date"}),"().",a(s.span,{className:"hljs-title function_",children:"getTime"}),`();
  `,a(s.span,{className:"hljs-keyword",children:"while"})," (",a(s.span,{className:"hljs-keyword",children:"new"})," ",a(s.span,{className:"hljs-title class_",children:"Date"}),"().",a(s.span,{className:"hljs-title function_",children:"getTime"}),`() - start < delay) {
    `,a(s.span,{className:"hljs-keyword",children:"continue"}),`;
  }
};
`]})}),`
`,n(s.p,{children:["然后在组件中 我们就可以用 ",a(s.code,{children:"addCounterAsync"})," 代替 ",a(s.code,{children:"addCounter"})," 即可"]}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:["<",a(s.span,{className:"hljs-title class_",children:"Button"})," onClick={",a(s.span,{className:"hljs-function",children:"() =>"})," ",a(s.span,{className:"hljs-title function_",children:"dispatch"}),"(",a(s.span,{className:"hljs-title function_",children:"addCounterAsync"}),"(payload))}>+</",a(s.span,{className:"hljs-title class_",children:"Button"}),`>
`]})}),`
`,a(s.p,{children:"当然 社区上早已有了很多处理异步 action 的库"}),`
`,n(s.p,{children:["下面主要介绍两种中间件 ",a(s.strong,{children:"redux-thunk"})," 和 ",a(s.strong,{children:"redux-saga"})," 然后安利一下",a(s.strong,{children:"rematch"})]}),`
`,a(s.h2,{children:"redux-thunk"}),`
`,a(s.p,{children:"改造后的代码如下 省去无关代码"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-comment",children:"// 导入核心API 创建Store"}),`
`,a(s.span,{className:"hljs-keyword",children:"import"})," { createStore, applyMiddleware, compose } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'redux'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," thunkMiddleware ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'redux-thunk'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title function_",children:"_subCounter"})," = (",n(s.span,{className:"hljs-params",children:["payload: ",a(s.span,{className:"hljs-built_in",children:"number"})]}),`) => ({
  `,a(s.span,{className:"hljs-attr",children:"type"}),": ",a(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",a(s.span,{className:"hljs-property",children:"SUB_COUNTER"}),`,
  payload,
});

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title function_",children:"subCounter"})," = (",n(s.span,{className:"hljs-params",children:["payload: ",a(s.span,{className:"hljs-built_in",children:"number"})]}),`) => {
  `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:["dispatch: ",a(s.span,{className:"hljs-built_in",children:"any"}),", getState: ",a(s.span,{className:"hljs-built_in",children:"any"})]}),") =>"]}),`
    `,a(s.span,{className:"hljs-built_in",children:"setTimeout"}),"(",a(s.span,{className:"hljs-function",children:"() =>"}),` {
      `,a(s.span,{className:"hljs-keyword",children:"let"})," { count } = ",a(s.span,{className:"hljs-title function_",children:"getState"}),`();
      count = count + payload;
      `,a(s.span,{className:"hljs-title function_",children:"dispatch"}),"(",a(s.span,{className:"hljs-title function_",children:"_subCounter"}),`(count));
    }, `,a(s.span,{className:"hljs-number",children:"1000"}),`);
};

`,a(s.span,{className:"hljs-comment",children:"// 创建一个初始化的Store"}),`
`,a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-attr",children:"initStore"}),": ",a(s.span,{className:"hljs-title class_",children:"IStore"}),` = {
  `,a(s.span,{className:"hljs-attr",children:"count"}),": ",a(s.span,{className:"hljs-number",children:"0"}),`,
};

`,a(s.span,{className:"hljs-comment",children:"// 创建Reducer 用于管理 View 派发过来的 Action"}),`
`,a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title function_",children:"reducer"})," = (",a(s.span,{className:"hljs-params",children:"store = initStore, action: IAction"}),`) => {
  `,a(s.span,{className:"hljs-keyword",children:"switch"})," (action.",a(s.span,{className:"hljs-property",children:"type"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"case"})," ",a(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",a(s.span,{className:"hljs-property",children:"SUB_COUNTER"}),`:
      `,a(s.span,{className:"hljs-keyword",children:"return"})," { ...store, ",a(s.span,{className:"hljs-attr",children:"count"}),": action.",a(s.span,{className:"hljs-property",children:"payload"}),` };
    `,a(s.span,{className:"hljs-attr",children:"default"}),`:
      `,a(s.span,{className:"hljs-keyword",children:"return"}),` store;
  }
};

`,a(s.span,{className:"hljs-keyword",children:"const"}),` composeEnhancers =
  (`,a(s.span,{className:"hljs-variable language_",children:"window"})," ",a(s.span,{className:"hljs-keyword",children:"as"})," ",a(s.span,{className:"hljs-built_in",children:"any"}),").",a(s.span,{className:"hljs-property",children:"__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"}),` || compose;

`,a(s.span,{className:"hljs-keyword",children:"const"})," enhancer = ",a(s.span,{className:"hljs-title function_",children:"composeEnhancers"}),"(",a(s.span,{className:"hljs-title function_",children:"applyMiddleware"}),`(thunkMiddleware));

`,a(s.span,{className:"hljs-comment",children:"// 创建 Store 这里我们还开启了 Redux DEVTools"}),`
`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"const"})," store = ",a(s.span,{className:"hljs-title function_",children:"createStore"}),`(reducer, enhancer);
`]})}),`
`,a(s.p,{children:"其他地方正常使用即可"}),`
`,a(l,{id:"redux-thunk-sypr27"}),`
`,a(s.p,{children:"通过 thunk 我们可以在 dispatch 前拦截 action"}),`
`,a(s.p,{children:"然后进行网络请求等异步操作 最后让 action 带上我们需要的数据 变成原始的 action(plain object) 再 dispatch 出去"}),`
`,a(s.p,{children:"但是这种方法的缺点也很明显 就是将异步请求的操作和 actionCreator 杂糅在了一起"}),`
`,a(s.p,{children:"对于每一个需要异步操作的 action 我们都需要在 actionCreator 中写一个对应的函数 这样会使 actionCreator 变的越来越大 不易于管理"}),`
`,n(s.p,{children:["所以对应的 又有一种中间件 ",a(s.strong,{children:"saga"})]}),`
`,a(s.h2,{children:"redux-saga"}),`
`,a(s.p,{children:"在 saga 中 side effect 都移到了 saga.js 文件中 不再和 actionCreator 杂糅在一起"}),`
`,a(s.p,{children:"saga 的体系庞大完整 但是也相对复杂 还是用一个计数器的 🌰 来康康 saga 的使用"}),`
`,a(s.p,{children:"首先是我们的 store 文件"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { createStore, applyMiddleware, compose } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'redux'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," createSagaMiddleware ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'redux-saga'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," mySaga ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'./saga'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IStore"}),` {
  `,a(s.span,{className:"hljs-attr",children:"count"}),": ",a(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IAction"}),` {
  `,a(s.span,{className:"hljs-attr",children:"type"}),": ",a(s.span,{className:"hljs-built_in",children:"string"}),`;
  [`,a(s.span,{className:"hljs-attr",children:"key"}),": ",a(s.span,{className:"hljs-built_in",children:"string"}),"]: ",a(s.span,{className:"hljs-built_in",children:"any"}),`;
}

`,a(s.span,{className:"hljs-comment",children:"// 定义我们的 Action Type"}),`
`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"enum"})," ",a(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),` {
  `,a(s.span,{className:"hljs-variable constant_",children:"ADD_COUNTER"})," = ",a(s.span,{className:"hljs-string",children:"'ADD_COUNTER'"}),`,
  `,a(s.span,{className:"hljs-variable constant_",children:"SUB_COUNTER"})," = ",a(s.span,{className:"hljs-string",children:"'SUB_COUNTER'"}),`,
  `,a(s.span,{className:"hljs-variable constant_",children:"ADD_COUNTER_ASYNC"})," = ",a(s.span,{className:"hljs-string",children:"'ADD_COUNTER_ASYNC'"}),`,
  `,a(s.span,{className:"hljs-variable constant_",children:"SUB_COUNTER_ASYNC"})," = ",a(s.span,{className:"hljs-string",children:"'SUB_COUNTER_ASYNC'"}),`,
}

`,a(s.span,{className:"hljs-comment",children:"// 注意这边的type类型 和saga文件中takeEvery函数中的类型一致"}),`
`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title function_",children:"increment"})," = (",n(s.span,{className:"hljs-params",children:["payload: ",a(s.span,{className:"hljs-built_in",children:"number"})]}),`) => ({
  `,a(s.span,{className:"hljs-attr",children:"type"}),": ",a(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",a(s.span,{className:"hljs-property",children:"ADD_COUNTER_ASYNC"}),`,
  payload,
});

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title function_",children:"decrement"})," = (",n(s.span,{className:"hljs-params",children:["payload: ",a(s.span,{className:"hljs-built_in",children:"number"})]}),`) => ({
  `,a(s.span,{className:"hljs-attr",children:"type"}),": ",a(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",a(s.span,{className:"hljs-property",children:"SUB_COUNTER_ASYNC"}),`,
  payload,
});

`,a(s.span,{className:"hljs-comment",children:"// 创建一个初始化的Store"}),`
`,a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-attr",children:"initStore"}),": ",a(s.span,{className:"hljs-title class_",children:"IStore"}),` = {
  `,a(s.span,{className:"hljs-attr",children:"count"}),": ",a(s.span,{className:"hljs-number",children:"0"}),`,
};

`,a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title function_",children:"reducer"})," = (",a(s.span,{className:"hljs-params",children:"store = initStore, action: IAction"}),`) => {
  `,a(s.span,{className:"hljs-keyword",children:"switch"})," (action.",a(s.span,{className:"hljs-property",children:"type"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"case"})," ",a(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",a(s.span,{className:"hljs-property",children:"ADD_COUNTER"}),`:
      `,a(s.span,{className:"hljs-keyword",children:"return"})," { ...store, ",a(s.span,{className:"hljs-attr",children:"count"}),": store.",a(s.span,{className:"hljs-property",children:"count"})," + action.",a(s.span,{className:"hljs-property",children:"payload"}),` };
    `,a(s.span,{className:"hljs-keyword",children:"case"})," ",a(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",a(s.span,{className:"hljs-property",children:"SUB_COUNTER"}),`:
      `,a(s.span,{className:"hljs-keyword",children:"return"})," { ...store, ",a(s.span,{className:"hljs-attr",children:"count"}),": store.",a(s.span,{className:"hljs-property",children:"count"})," - action.",a(s.span,{className:"hljs-property",children:"payload"}),` };
    `,a(s.span,{className:"hljs-attr",children:"default"}),`:
      `,a(s.span,{className:"hljs-keyword",children:"return"}),` store;
  }
};

`,a(s.span,{className:"hljs-comment",children:"// 启用redux devtools"}),`
`,a(s.span,{className:"hljs-keyword",children:"const"}),` composeEnhancers =
  (`,a(s.span,{className:"hljs-variable language_",children:"window"})," ",a(s.span,{className:"hljs-keyword",children:"as"})," ",a(s.span,{className:"hljs-built_in",children:"any"}),").",a(s.span,{className:"hljs-property",children:"__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"}),` || compose;

`,a(s.span,{className:"hljs-comment",children:"// 创建saga中间件对象"}),`
`,a(s.span,{className:"hljs-keyword",children:"const"})," sagaMiddleware = ",a(s.span,{className:"hljs-title function_",children:"createSagaMiddleware"}),`();

`,a(s.span,{className:"hljs-comment",children:"// 注册中间件"}),`
`,a(s.span,{className:"hljs-keyword",children:"const"})," enhancer = ",a(s.span,{className:"hljs-title function_",children:"composeEnhancers"}),"(",a(s.span,{className:"hljs-title function_",children:"applyMiddleware"}),`(sagaMiddleware));

`,a(s.span,{className:"hljs-comment",children:"// 创建 Store 这里我们还开启了 Redux DEVTools"}),`
`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"const"})," store = ",a(s.span,{className:"hljs-title function_",children:"createStore"}),`(reducer, enhancer);

`,a(s.span,{className:"hljs-comment",children:"// 必须放在createStore后 再启动saga"}),`
sagaMiddleware.`,a(s.span,{className:"hljs-title function_",children:"run"}),`(mySaga);
`]})}),`
`,a(s.p,{children:"然后是 saga 文件"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { takeEvery, put, delay } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'redux-saga/effects'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'./store'"}),`;

`,a(s.span,{className:"hljs-comment",children:"// 执行副作用的函数"}),`
`,a(s.span,{className:"hljs-keyword",children:"function"}),"* ",a(s.span,{className:"hljs-title function_",children:"increment"}),"(",n(s.span,{className:"hljs-params",children:["action: ",a(s.span,{className:"hljs-built_in",children:"any"})]}),`) {
  `,a(s.span,{className:"hljs-comment",children:"// 延迟一秒 模拟异步 可以在这里用try catch语法块返回成功/失败的action"}),`
  `,a(s.span,{className:"hljs-keyword",children:"yield"})," ",a(s.span,{className:"hljs-title function_",children:"delay"}),"(",a(s.span,{className:"hljs-number",children:"1000"}),`);
  `,a(s.span,{className:"hljs-keyword",children:"yield"})," ",a(s.span,{className:"hljs-title function_",children:"put"}),`({
    `,a(s.span,{className:"hljs-attr",children:"type"}),": ",a(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",a(s.span,{className:"hljs-property",children:"ADD_COUNTER"}),`,
    `,a(s.span,{className:"hljs-attr",children:"payload"}),": action.",a(s.span,{className:"hljs-property",children:"payload"}),`,
  });
}

`,a(s.span,{className:"hljs-keyword",children:"function"}),"* ",a(s.span,{className:"hljs-title function_",children:"decrement"}),"(",n(s.span,{className:"hljs-params",children:["action: ",a(s.span,{className:"hljs-built_in",children:"any"})]}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"yield"})," ",a(s.span,{className:"hljs-title function_",children:"delay"}),"(",a(s.span,{className:"hljs-number",children:"1000"}),`);
  `,a(s.span,{className:"hljs-keyword",children:"yield"})," ",a(s.span,{className:"hljs-title function_",children:"put"}),`({
    `,a(s.span,{className:"hljs-attr",children:"type"}),": ",a(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",a(s.span,{className:"hljs-property",children:"SUB_COUNTER"}),`,
    `,a(s.span,{className:"hljs-attr",children:"payload"}),": action.",a(s.span,{className:"hljs-property",children:"payload"}),`,
  });
}

`,a(s.span,{className:"hljs-keyword",children:"function"}),"* ",a(s.span,{className:"hljs-title function_",children:"mySaga"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-comment",children:"// 组件中发起action的type应该和这里的一致"}),`
  `,a(s.span,{className:"hljs-keyword",children:"yield"})," ",a(s.span,{className:"hljs-title function_",children:"takeEvery"}),"(",a(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",a(s.span,{className:"hljs-property",children:"ADD_COUNTER_ASYNC"}),`, increment);
  `,a(s.span,{className:"hljs-keyword",children:"yield"})," ",a(s.span,{className:"hljs-title function_",children:"takeEvery"}),"(",a(s.span,{className:"hljs-variable constant_",children:"ACTION_TYPE"}),".",a(s.span,{className:"hljs-property",children:"SUB_COUNTER_ASYNC"}),`, decrement);
}

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"}),` mySaga;
`]})}),`
`,a(l,{id:"redux-saga-qnvh7h"}),`
`,a(s.h2,{children:"rematch"}),`
`,n(s.p,{children:["关于 rematch 的介绍 可以参考",a(s.a,{href:"https://rematch.gitbook.io/handbook/mu-de",children:"传送门"})]}),`
`,a(s.p,{children:"rematch 可以简化传统的 redux 使我们免去写 actionType actionCreator"}),`
`,a(s.p,{children:"我们用 rematch 来实现计数器的 🌰"}),`
`,a(s.p,{children:"首先是 store"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-js",children:[a(s.span,{className:"hljs-keyword",children:"const"}),` count = {
  `,a(s.span,{className:"hljs-attr",children:"state"}),`: {
    `,a(s.span,{className:"hljs-attr",children:"count"}),": ",a(s.span,{className:"hljs-number",children:"0"}),`,
  },
  `,a(s.span,{className:"hljs-attr",children:"reducers"}),`: {
    `,a(s.span,{className:"hljs-title function_",children:"setCount"}),"(",a(s.span,{className:"hljs-params",children:"state, count"}),`) {
      `,a(s.span,{className:"hljs-keyword",children:"return"}),` { ...state, count };
    },
  },
  `,a(s.span,{className:"hljs-comment",children:"// 可以在这里处理副作用 例如发起网络请求"}),`
  `,a(s.span,{className:"hljs-attr",children:"effects"}),": ",n(s.span,{className:"hljs-function",children:[a(s.span,{className:"hljs-params",children:"dispatch"})," =>"]}),` ({
    `,a(s.span,{className:"hljs-keyword",children:"async"})," ",a(s.span,{className:"hljs-title function_",children:"increment"}),"(",a(s.span,{className:"hljs-params",children:"payload, rootState"}),`) {
      `,a(s.span,{className:"hljs-keyword",children:"let"})," { count } = rootState.",a(s.span,{className:"hljs-property",children:"count"}),`;
      count += payload;
      dispatch.`,a(s.span,{className:"hljs-property",children:"count"}),".",a(s.span,{className:"hljs-title function_",children:"setCount"}),`(count);
    },
  }),
};

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"}),` count;
`]})}),`
`,a(s.p,{children:"如果我们有多个 store 我们就可以在一个文件中统一管理我们的 store"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-javascript",children:[a(s.span,{className:"hljs-keyword",children:"export"})," { ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-keyword",children:"as"})," count } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'./count'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"export"})," { ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-keyword",children:"as"})," total } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'./total'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"export"}),` ...
`]})}),`
`,a(s.p,{children:"init 函数会帮助我们创建一个 store 同时它会帮助我们自动开启 redux devtools 调试工具"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-javascript",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { init } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@rematch/core'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," * ",a(s.span,{className:"hljs-keyword",children:"as"})," models ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'./model'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"const"})," store = ",a(s.span,{className:"hljs-title function_",children:"init"}),`({ models });
`]})}),`
`,a(s.p,{children:"业务组件"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-jsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," ",a(s.span,{className:"hljs-title class_",children:"React"})," ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Provider"}),", useSelector, useDispatch } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react-redux'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { store } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'./models'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title function_",children:"Counter"})," = (",a(s.span,{className:"hljs-params"}),`) => {
  `,a(s.span,{className:"hljs-keyword",children:"const"})," counter = ",a(s.span,{className:"hljs-title function_",children:"useSelector"}),"(",n(s.span,{className:"hljs-function",children:[a(s.span,{className:"hljs-params",children:"state"})," =>"]})," state.",a(s.span,{className:"hljs-property",children:"count"}),`);
  `,a(s.span,{className:"hljs-keyword",children:"const"})," dispatch = ",a(s.span,{className:"hljs-title function_",children:"useDispatch"}),`();
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:"<>"}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"}),">"]}),"{counter.num}",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"button"})," ",a(s.span,{className:"hljs-attr",children:"onClick"}),"=",a(s.span,{className:"hljs-string",children:"{()"})," =>"]})," dispatch.count.increment(1)}>+1",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"button"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"button"})," ",a(s.span,{className:"hljs-attr",children:"onClick"}),"=",a(s.span,{className:"hljs-string",children:"{()"})," =>"]})," dispatch.count.increment(10)}>+10",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"button"}),">"]}),`
    `,a(s.span,{className:"hljs-tag",children:"</>"})]}),`
  );
};

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"View"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Provider"})," ",a(s.span,{className:"hljs-attr",children:"store"}),"=",a(s.span,{className:"hljs-string",children:"{store}"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Counter"})," />"]}),`
    `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Provider"}),">"]})]}),`
  );
}
`]})})]})}function N(e={}){const{wrapper:s}=Object.assign({},r(),e.components);return s?a(s,Object.assign({},e,{children:a(c,e)})):c(e)}function i(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{N as default,m as frontmatter};
