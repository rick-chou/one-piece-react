import{u as c,j as n,a,F as h}from"./index-CjkvZd7K.js";import"./antd-DBIoRdLU.js";import"./lodash-BU0pYqsL.js";import"./prettier-DJQX7j1f.js";import"./chance-DnaHbaGl.js";const p={title:"React Quick Start - Hooks"};function e(l){const s=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",strong:"strong",blockquote:"blockquote",ol:"ol"},c(),l.components);return a(h,{children:[n(s.h2,{children:"背景"}),`
`,n(s.p,{children:"在 React 16.8 之前 函数式组件又被称为无状态组件"}),`
`,n(s.p,{children:"因为函数在每次执行执行的时候 都会重新执行内部的代码 导致函数无法维护自身内部的状态 例如"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"add"}),"(",n(s.span,{className:"hljs-params",children:"n"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," result = ",n(s.span,{className:"hljs-number",children:"0"}),`;
  `,n(s.span,{className:"hljs-keyword",children:"return"})," result + ",n(s.span,{className:"hljs-number",children:"1"}),`;
}

`,n(s.span,{className:"hljs-title function_",children:"add"}),"(",n(s.span,{className:"hljs-number",children:"1"}),"); ",n(s.span,{className:"hljs-comment",children:"// --> 1"}),`
`,n(s.span,{className:"hljs-title function_",children:"add"}),"(",n(s.span,{className:"hljs-number",children:"1"}),"); ",n(s.span,{className:"hljs-comment",children:"// --> 1"}),`
`]})}),`
`,n(s.p,{children:"我们无法在函数中保存 result 的状态 因为每一次执行函数时 都会重新初始化 result"}),`
`,n(s.p,{children:"我们来看看 16.8 之前 类组件和函数式组件有哪些差别"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,a(s.p,{children:["类组件需要继承 class ",n(s.code,{children:"React.Component"}),"，函数组件不需要"]}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"类组件可以访问生命周期方法，控制组件不同阶段的状态，函数组件不能"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"类组件中可以获取到实例化后的 this，并基于这个 this 做各种各样的事情，而函数组件不可以"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"类组件中可以定义并维护 state（状态），而函数组件不可以"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"......"}),`
`]}),`
`]}),`
`,n(s.p,{children:"而类组件的状态 一般由组件内部维护 这样就会造成组件的复用性很差"}),`
`,n(s.p,{children:"前几章中 我提到了 HOC 和 Render Props"}),`
`,n(s.p,{children:"究其根本 它们都是尽可能的为了优雅的实现代码的复用"}),`
`,n(s.p,{children:"但是 这些名词的背后无疑是繁重的学习成本"}),`
`,n(s.p,{children:"而函数式组件 又无法保存状态"}),`
`,n(s.p,{children:"这个时候 hooks 就横空出世了 它想要解决的问题就是"}),`
`,n(s.p,{children:"让函数式组件拥有类似类组件的功能"}),`
`,n(s.p,{children:"我们来看一个简单的 demo"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-jsx",children:[n(s.span,{className:"hljs-keyword",children:"import"})," ",n(s.span,{className:"hljs-title class_",children:"React"}),", { ",n(s.span,{className:"hljs-title class_",children:"Component"})," } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'react'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"ProfilePageClassComponent"})," ",n(s.span,{className:"hljs-keyword",children:"extends"})," ",n(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),` {
  showMessage = `,n(s.span,{className:"hljs-function",children:"() =>"}),` {
    `,n(s.span,{className:"hljs-title function_",children:"alert"}),"(",n(s.span,{className:"hljs-string",children:"'Followed '"})," + ",n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"props"}),".",n(s.span,{className:"hljs-property",children:"user"}),`);
  };

  handleClick = `,n(s.span,{className:"hljs-function",children:"() =>"}),` {
    `,n(s.span,{className:"hljs-built_in",children:"setTimeout"}),"(",n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"showMessage"}),", ",n(s.span,{className:"hljs-number",children:"3000"}),`);
  };

  `,n(s.span,{className:"hljs-title function_",children:"render"}),"(",n(s.span,{className:"hljs-params"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"button"})," ",n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{this.handleClick}"}),">"]}),"Follow",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"button"}),">"]})]}),`;
  }
}

`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"ProfilePageFunComponent"}),"(",n(s.span,{className:"hljs-params",children:"props"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"showMessage"})," = (",n(s.span,{className:"hljs-params"}),`) => {
    `,n(s.span,{className:"hljs-title function_",children:"alert"}),"(",n(s.span,{className:"hljs-string",children:"'Followed '"})," + props.",n(s.span,{className:"hljs-property",children:"user"}),`);
  };

  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"handleClick"})," = (",n(s.span,{className:"hljs-params"}),`) => {
    `,n(s.span,{className:"hljs-built_in",children:"setTimeout"}),"(showMessage, ",n(s.span,{className:"hljs-number",children:"3000"}),`);
  };

  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"button"})," ",n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{handleClick}"}),">"]}),"Follow",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"button"}),">"]})]}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"})," ",n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"App"})," ",n(s.span,{className:"hljs-keyword",children:"extends"})," ",n(s.span,{className:"hljs-title class_ inherited__",children:"React.Component"}),` {
  state = {
    `,n(s.span,{className:"hljs-attr",children:"user"}),": ",n(s.span,{className:"hljs-string",children:"'nanshu'"}),`,
  };
  `,n(s.span,{className:"hljs-title function_",children:"render"}),"(",n(s.span,{className:"hljs-params"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
      `,a(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:"<>"}),`
        `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"label"}),">"]}),`
          `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"b"}),">"]}),"Choose profile to view: ",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"b"}),">"]}),`
          `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"select"}),`
            `,n(s.span,{className:"hljs-attr",children:"value"}),"=",n(s.span,{className:"hljs-string",children:"{this.state.user}"}),`
            `,n(s.span,{className:"hljs-attr",children:"onChange"}),"=",n(s.span,{className:"hljs-string",children:"{e"})," =>"]}),` this.setState({ user: e.target.value })}>
            `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"option"})," ",n(s.span,{className:"hljs-attr",children:"value"}),"=",n(s.span,{className:"hljs-string",children:'"nanshu"'}),">"]}),"nanshu",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"option"}),">"]}),`
            `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"option"})," ",n(s.span,{className:"hljs-attr",children:"value"}),"=",n(s.span,{className:"hljs-string",children:'"chou"'}),">"]}),"chou",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"option"}),">"]}),`
          `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"select"}),">"]}),`
        `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"label"}),">"]}),`
        `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Welcome to {this.state.user}’s profile!",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"h1"}),">"]}),`
        `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"p"}),">"]}),`
          `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"ProfilePageFunComponent"})," ",n(s.span,{className:"hljs-attr",children:"user"}),"=",n(s.span,{className:"hljs-string",children:"{this.state.user}"})," />"]}),`
          `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"b"}),">"]})," (function)",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"b"}),">"]}),`
        `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"p"}),">"]}),`
        `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"p"}),">"]}),`
          `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"ProfilePageClassComponent"})," ",n(s.span,{className:"hljs-attr",children:"user"}),"=",n(s.span,{className:"hljs-string",children:"{this.state.user}"})," />"]}),`
          `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"b"}),">"]})," (class)",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"b"}),">"]}),`
        `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"p"}),">"]}),`
        `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"p"}),">"]}),"Can you spot the difference in the behavior?",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"p"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:"</>"})]}),`
    );
  }
}
`]})}),`
`,n(s.p,{children:"代码有点长 但是它做的事情很简单"}),`
`,n(s.p,{children:"不管是类组件还是函数式组件都只是输出父组件给它的 props"}),`
`,n(s.p,{children:"但是我们通过 setTimeout 将预期中的渲染推迟了 3s，打破了 this.props 和渲染动作之间的这种时机上的关联"}),`
`,n(s.p,{children:"进而导致类组件在渲染时捕获到的是一个错误的、修改后的 this.props"}),`
`,n(s.p,{children:n(s.strong,{children:"因为虽然 props 本身是不可变的，但 this 却是可变的，this 上的数据是可以被修改的"})}),`
`,n(s.p,{children:"this.props 的调用每次都会获取最新的 props 确保数据实时性"}),`
`,n(s.p,{children:n(s.strong,{children:"而函数式组件可以确保在任何时机下读取到的 props，都是最初捕获到的那个 props"})}),`
`,n(s.p,{children:"所以函数组件是一个更加匹配其设计理念、也更有利于逻辑拆分与重用的组件表达形式"}),`
`,n(s.p,{children:"了解了为什么需要 hook 后 我们来看看 👀 有哪些 React 已经帮我们封装好的 hooks 吧"}),`
`,`
`,n(s.h2,{children:"useState"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"useState 填补了函数式组件内部不能保存状态的空白"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"更新 useState 中保存的状态时 都是走的异步更新 对同一个属性的多次更新 会被合并 只取最新的一次"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"使用回调函数更新状态时 可以拿到最新的 state"}),`
`]}),`
`]}),`
`,n(s.p,{children:"我们来对比一下类组件中的 setState"}),`
`,n(s.p,{children:"假如我们执行了一次 this.setState 那么组件大概会走如下流程"}),`
`,a(s.blockquote,{children:[`
`,n(s.p,{children:"setState --> shouldComponentUpdate --> componentWillUpdate --> render --> componentDidUpdate"}),`
`]}),`
`,n(s.p,{children:"设想一下 如果我们每次执行 this.setState React 都要做出上述响应"}),`
`,n(s.p,{children:"那么 大概没有几次 你的页面就会出现卡顿了"}),`
`,n(s.p,{children:"所以 React 做了批量更新 也就是多个 setState 会被合并"}),`
`,n(s.p,{children:"请记住 React 中所有更新状态的操作都是异步的"}),`
`,n(s.p,{children:"然而在 类组件中 如果你使用 setTimeout / Promise 这些异步的方法包裹 setState 的话"}),`
`,n(s.p,{children:"它会让这些更新摆脱 React 的控制 从而看上去表现出了同步的样子"}),`
`,n(s.p,{children:n(s.strong,{children:"但是请注意 ⚠️ 无论是在函数式组件还是类组件中 更新状态永远是异步的"})}),`
`,n(s.p,{children:n(s.strong,{children:"这意味着你无法马上获取到最新的状态 如果需要的话 请使用回调函数的方式"})}),`
`,a(s.p,{children:["关于批量更新 可以参考 github 上的","📝 discussions"]}),`
`,n(s.p,{children:"文中提到了在即将到来的 React18 中将会默认开始批量更新"}),`
`,n(s.p,{children:"包括在类组件中 如果我们使用 setTimeout / Promise 的这些情况"}),`
`,n(s.p,{children:"现在 React 也都能对它们进行控制 从而使类组件和函数式组件的表现趋于一致"}),`
`,n(s.p,{children:"具体有关 setState 和 useState 的介绍可以移步 Sticky Note（TODO）"}),`
`,a(s.p,{children:["👇 下面是 ",n(s.code,{children:"useState"})," 的基础用法"]}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-tsx",children:[n(s.span,{className:"hljs-keyword",children:"import"})," ",n(s.span,{className:"hljs-title class_",children:"React"}),", { useState } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'react'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"Button"})," } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'antd'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"Counter"}),": ",n(s.span,{className:"hljs-title class_",children:"React"}),".",n(s.span,{className:"hljs-property",children:"FC"})," = ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," [count, setCount] = useState<",n(s.span,{className:"hljs-built_in",children:"number"}),">(",n(s.span,{className:"hljs-number",children:"0"}),`);

  `,n(s.span,{className:"hljs-comment",children:"// 普通调用"}),`
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"addCount"})," = (",n(s.span,{className:"hljs-params"}),`) => {
    `,n(s.span,{className:"hljs-title function_",children:"setCount"}),"(count + ",n(s.span,{className:"hljs-number",children:"1"}),`);
    `,n(s.span,{className:"hljs-title function_",children:"setCount"}),"(count + ",n(s.span,{className:"hljs-number",children:"1"}),`);
  };

  `,n(s.span,{className:"hljs-comment",children:"// 回调函数"}),`
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"addCountWithCallback"})," = (",n(s.span,{className:"hljs-params"}),`) => {
    `,n(s.span,{className:"hljs-title function_",children:"setCount"}),"(",a(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"preState"})," =>"]})," preState + ",n(s.span,{className:"hljs-number",children:"1"}),`);
    `,n(s.span,{className:"hljs-title function_",children:"setCount"}),"(",a(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"preState"})," =>"]})," preState + ",n(s.span,{className:"hljs-number",children:"1"}),`);
  };

  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,a(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:"<>"}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"h1"}),">"]}),"{`count:${count}`}",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"h1"}),">"]}),`

      {/* 会合并成一个 每次只 +1 */}
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Button"})," ",n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{addCount}"}),">"]}),"我要打两个",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),`

      {/* 每次都会取到最新的值 每次 +2  */}
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Button"})," ",n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{addCountWithCallback}"}),">"]}),"我也要打两个",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),`
    `,n(s.span,{className:"hljs-tag",children:"</>"})]}),`
  );
};

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"})," ",n(s.span,{className:"hljs-title class_",children:"Counter"}),`;
`]})}),`
`,n(s.h2,{children:"useReducer"}),`
`,n(s.p,{children:"说完 useState 再来看看 useReducer"}),`
`,n(s.p,{children:"两者都是函数式组件中对状态管理的手段"}),`
`,n(s.p,{children:"前者可看成是后者的一种实现"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"和 redux 没有关系 组件之间不共享数据"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"是 useState 的一种替代方案"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"对于复杂的业务 使用 useReducer 比 useState 会有更好的可读性"}),`
`]}),`
`]}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-tsx",children:[n(s.span,{className:"hljs-keyword",children:"import"})," { useReducer } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'react'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"Button"})," } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'antd'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"enum"})," ",n(s.span,{className:"hljs-title class_",children:"Actions"}),` {
  `,n(s.span,{className:"hljs-variable constant_",children:"ADD_COUNT_VALUE"})," = ",n(s.span,{className:"hljs-string",children:"'ADD_COUNT_VALUE'"}),`,
  `,n(s.span,{className:"hljs-variable constant_",children:"SUB_COUNT_VALUE"})," = ",n(s.span,{className:"hljs-string",children:"'SUB_COUNT_VALUE'"}),`,
}

`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"IState"}),` {
  `,n(s.span,{className:"hljs-attr",children:"count"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"IAction"}),` {
  `,n(s.span,{className:"hljs-attr",children:"type"}),": ",n(s.span,{className:"hljs-title class_",children:"Actions"}),`;
  payload?: `,n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"myReducers"})," = (",n(s.span,{className:"hljs-params",children:"state: IState, action: IAction"}),`) => {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," { payload = ",n(s.span,{className:"hljs-number",children:"1"}),` } = action;
  `,n(s.span,{className:"hljs-keyword",children:"switch"})," (action.",n(s.span,{className:"hljs-property",children:"type"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"case"})," ",n(s.span,{className:"hljs-title class_",children:"Actions"}),".",n(s.span,{className:"hljs-property",children:"ADD_COUNT_VALUE"}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` {
        ...state,
        `,n(s.span,{className:"hljs-attr",children:"count"}),": state.",n(s.span,{className:"hljs-property",children:"count"}),` + payload,
      };
    `,n(s.span,{className:"hljs-keyword",children:"case"})," ",n(s.span,{className:"hljs-title class_",children:"Actions"}),".",n(s.span,{className:"hljs-property",children:"SUB_COUNT_VALUE"}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` {
        ...state,
        `,n(s.span,{className:"hljs-attr",children:"count"}),": state.",n(s.span,{className:"hljs-property",children:"count"}),` - payload,
      };
    `,n(s.span,{className:"hljs-attr",children:"default"}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` state;
  }
};

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"Count"})," = (",n(s.span,{className:"hljs-params"}),`) => {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," [state, dispatch] = ",n(s.span,{className:"hljs-title function_",children:"useReducer"}),"(myReducers, { ",n(s.span,{className:"hljs-attr",children:"count"}),": ",n(s.span,{className:"hljs-number",children:"0"}),` });

  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"h1"}),">"]}),"当前计数：{state.count}",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"h1"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Button"}),`
        `,n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{()"})," =>"]}),` dispatch({ type: Actions.ADD_COUNT_VALUE, payload: 2 })}>
        +2
      `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Button"})," ",n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{()"})," =>"]}),` dispatch({ type: Actions.SUB_COUNT_VALUE })}>
        -1
      `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),`
    `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
  );
};

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"})," ",n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"App"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,a(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:"<>"}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Count"})," />"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Count"})," />"]}),`
    `,n(s.span,{className:"hljs-tag",children:"</>"})]}),`
  );
}
`]})}),`
`,n(s.p,{children:"执行代码后 你会发现 不同组件之间的 state 互不影响"}),`
`,n(s.p,{children:"两个 Count 组件各自维护一份自己的 count"}),`
`,n(s.h2,{children:"useEffect"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"允许函数组件执行副作用操作 在一定程度上弥补了没有生命周期的缺陷"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"可以模拟类似 componentDidMount / shouldComponentUpdate / componentWillUnmount 的作用"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"可以接收两个参数，分别是回调函数与依赖数组 useEffect(callBack, [])"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"第一个参数 是一个回调函数 它可以返回一个函数用来消除副作用 类似 componentWillUnmount 可以做一些事件的解绑 定时器的关闭等"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"第二个参数 是一个数组 表示依赖项 当其中的某个值更新时 会重新执行 callback"}),`
`]}),`
`]}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-tsx",children:[n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-variable constant_",children:"FC"}),", useEffect, useState } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'react'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"Button"}),", message } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'antd'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"Even"})," = (",n(s.span,{className:"hljs-params"}),`) => {
  `,n(s.span,{className:"hljs-title function_",children:"useEffect"}),"(",n(s.span,{className:"hljs-function",children:"() =>"}),` {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
      message.`,n(s.span,{className:"hljs-title function_",children:"info"}),"(",n(s.span,{className:"hljs-string",children:"'奇数'"}),`);
    };
  }, []);
  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),"偶数",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Button"}),">"]})]}),`;
};

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"Odd"})," = (",n(s.span,{className:"hljs-params"}),`) => {
  `,n(s.span,{className:"hljs-title function_",children:"useEffect"}),"(",n(s.span,{className:"hljs-function",children:"() =>"}),` {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
      message.`,n(s.span,{className:"hljs-title function_",children:"info"}),"(",n(s.span,{className:"hljs-string",children:"'偶数'"}),`);
    };
  }, []);
  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),"奇数",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Button"}),">"]})]}),`;
};

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"App"}),": ",n(s.span,{className:"hljs-variable constant_",children:"FC"})," = ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," [state, setState] = useState<",n(s.span,{className:"hljs-built_in",children:"number"}),">(",n(s.span,{className:"hljs-number",children:"0"}),`);

  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,a(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:"<>"}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Button"})," ",n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{()"})," =>"]})," setState(state + 1)}>{state}",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),`
      {state % 2 === 0 ? `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Even"})," />"]})," : ",a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Odd"})," />"]}),`}
    `,n(s.span,{className:"hljs-tag",children:"</>"})]}),`
  );
};

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"})," ",n(s.span,{className:"hljs-title class_",children:"App"}),`;
`]})}),`
`,n(s.h2,{children:"useContext"}),`
`,a(s.ul,{children:[`
`,n(s.li,{children:"可以在子组件之间共享数据"}),`
`]}),`
`,a(s.ol,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"在组件外创建 context 对象 const AppContext = React.createContext({})"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"父组件内使用 context 对象下的 Provider 并赋值"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"在子组件内使用 context 对象 React.useContext(AppContext)"}),`
`]}),`
`]}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-tsx",children:[n(s.span,{className:"hljs-keyword",children:"import"})," ",n(s.span,{className:"hljs-title class_",children:"React"})," ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'react'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"ITheme"}),` {
  `,n(s.span,{className:"hljs-attr",children:"theme"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"AppContext"})," = ",n(s.span,{className:"hljs-title class_",children:"React"}),".",n(s.span,{className:"hljs-property",children:"createContext"}),"<",n(s.span,{className:"hljs-title class_",children:"ITheme"}),`>({
  `,n(s.span,{className:"hljs-attr",children:"theme"}),": ",n(s.span,{className:"hljs-string",children:"'red'"}),`,
});

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"NavBar"})," = (",n(s.span,{className:"hljs-params"}),`) => {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," { theme } = ",n(s.span,{className:"hljs-title class_",children:"React"}),".",n(s.span,{className:"hljs-title function_",children:"useContext"}),"(",n(s.span,{className:"hljs-title class_",children:"AppContext"}),`);
  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"h2"})," ",n(s.span,{className:"hljs-attr",children:"style"}),"=",n(s.span,{className:"hljs-string",children:"{{"})," ",n(s.span,{className:"hljs-attr",children:"color:"})," ",n(s.span,{className:"hljs-attr",children:"theme"})," }}>"]}),"NavBar",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"h2"}),">"]})]}),`;
};

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"Message"})," = (",n(s.span,{className:"hljs-params"}),`) => {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," { theme } = ",n(s.span,{className:"hljs-title class_",children:"React"}),".",n(s.span,{className:"hljs-title function_",children:"useContext"}),"(",n(s.span,{className:"hljs-title class_",children:"AppContext"}),`);
  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"h2"})," ",n(s.span,{className:"hljs-attr",children:"style"}),"=",n(s.span,{className:"hljs-string",children:"{{"})," ",n(s.span,{className:"hljs-attr",children:"color:"})," ",n(s.span,{className:"hljs-attr",children:"theme"})," }}>"]}),"Message",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"h2"}),">"]})]}),`;
};

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"})," ",n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"App"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"AppContext.Provider"})," ",n(s.span,{className:"hljs-attr",children:"value"}),"=",n(s.span,{className:"hljs-string",children:"{{"})," ",n(s.span,{className:"hljs-attr",children:"theme:"})," '",n(s.span,{className:"hljs-attr",children:"red"}),"' }}>"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"NavBar"})," />"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Message"})," />"]}),`
    `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"AppContext.Provider"}),">"]})]}),`
  );
}
`]})}),`
`,n(s.h2,{children:"useRef"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"获取元素结点"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"保存数据 （永远指向最初的那个值）"}),`
`]}),`
`]}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-tsx",children:[n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-variable constant_",children:"FC"}),", useRef, useState } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'react'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"Button"})," } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'antd'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"App"}),": ",n(s.span,{className:"hljs-variable constant_",children:"FC"})," = ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," [count, setCount] = useState<",n(s.span,{className:"hljs-built_in",children:"number"}),">(",n(s.span,{className:"hljs-number",children:"0"}),`);
  `,n(s.span,{className:"hljs-keyword",children:"const"})," numRef = useRef<",n(s.span,{className:"hljs-built_in",children:"number"}),`>(count);
  `,n(s.span,{className:"hljs-keyword",children:"const"})," domRef = useRef<",n(s.span,{className:"hljs-title class_",children:"HTMLInputElement"})," | ",n(s.span,{className:"hljs-literal",children:"null"}),">(",n(s.span,{className:"hljs-literal",children:"null"}),`);

  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"input"})," ",n(s.span,{className:"hljs-attr",children:"defaultValue"}),"=",n(s.span,{className:"hljs-string",children:'"useRef"'})," ",n(s.span,{className:"hljs-attr",children:"ref"}),"=",n(s.span,{className:"hljs-string",children:"{domRef}"})," />"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"p"}),">"]}),"count : {count}",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"p"}),">"]}),`
      {/* numRef的值始终引用最初的那个count 不会随着count的变化而变化*/}
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"p"}),">"]}),"numRef : {numRef.current}",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"p"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Button"})," ",n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{()"})," =>"]})," setCount(count + 1)}>count+1",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),`
    `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
  );
};

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"})," ",n(s.span,{className:"hljs-title class_",children:"App"}),`;
`]})}),`
`,n(s.h2,{children:"useCallback && useMemo"}),`
`,n(s.p,{children:"在函数式组件中使用 memo 包裹我们的组件 可以帮助我们对前后的 props 进行一个浅比较"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-jsx",children:[n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"App"})," = ",n(s.span,{className:"hljs-title function_",children:"memo"}),"(",a(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"props"})," =>"]}),` {
  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-string",children:"'UI'"}),`;
});
`]})}),`
`,n(s.p,{children:"但是如果 props 是引用类型 那么此时 memo 就会失效"}),`
`,n(s.p,{children:"我们可以使用 useCallBack 和下面提到 useMemo 来使我们的引用类型变成可记忆的"}),`
`,n(s.p,{children:"两者的关系如下 useMemo 的能力边界大于 useCallBack 但是两者在某些情况下可以相互转换"}),`
`,a(s.blockquote,{children:[`
`,n(s.p,{children:"useCallback(fn, deps) is equivalent to useMemo(() => fn, deps) -- React 官网"}),`
`]}),`
`,n(s.p,{children:n(s.code,{children:"useCallback(() => {}, [])"})}),`
`,n(s.p,{children:"useCallback 接受两个如参"}),`
`,n(s.p,{children:"第一个参数 是一个函数"}),`
`,n(s.p,{children:"第二个参数 是一个数组 是这个函数的依赖项 只有依赖项更新 函数才会重新执行"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-tsx",children:[n(s.span,{className:"hljs-keyword",children:"import"})," { useState, useCallback, useEffect } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'react'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"Button"}),", message } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'antd'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"IProps"}),` {
  `,n(s.span,{className:"hljs-attr",children:"getSum"}),": ",n(s.span,{className:"hljs-function",children:"() =>"})," ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"ComponentWithoutUseCallback"})," = (",n(s.span,{className:"hljs-params",children:"{ getSum }: IProps"}),`) => {
  `,n(s.span,{className:"hljs-title function_",children:"useEffect"}),"(",n(s.span,{className:"hljs-function",children:"() =>"}),` {
    message.`,n(s.span,{className:"hljs-title function_",children:"info"}),"(",n(s.span,{className:"hljs-string",children:"'ComponentWithoutUseCallback'"}),`);
  }, [getSum]);

  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-literal",children:"null"}),`;
};

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"ComponentWithUseCallback"})," = (",n(s.span,{className:"hljs-params",children:"{ getSum }: IProps"}),`) => {
  `,n(s.span,{className:"hljs-title function_",children:"useEffect"}),"(",n(s.span,{className:"hljs-function",children:"() =>"}),` {
    message.`,n(s.span,{className:"hljs-title function_",children:"info"}),"(",n(s.span,{className:"hljs-string",children:"'ComponentWithUseCallback'"}),`);
  }, [getSum]);

  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-literal",children:"null"}),`;
};

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"Parent"})," = (",n(s.span,{className:"hljs-params"}),`) => {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," [num, setNum] = ",n(s.span,{className:"hljs-title function_",children:"useState"}),"(",n(s.span,{className:"hljs-number",children:"0"}),`);
  `,n(s.span,{className:"hljs-keyword",children:"const"})," [max, setMax] = ",n(s.span,{className:"hljs-title function_",children:"useState"}),"(",n(s.span,{className:"hljs-number",children:"100"}),`);

  `,n(s.span,{className:"hljs-comment",children:"// 只要父组件更新 子组件就会更新"}),`
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"methodsWithoutUseCallback"})," = (",n(s.span,{className:"hljs-params"}),`) => {
    message.`,n(s.span,{className:"hljs-title function_",children:"info"}),"(",n(s.span,{className:"hljs-string",children:"'methodsWithoutUseCallback'"}),`);
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` max;
  };

  `,n(s.span,{className:"hljs-comment",children:"// 只有当max更新时 函数才会重新执行 子组件才会更新"}),`
  `,n(s.span,{className:"hljs-keyword",children:"const"})," methodsWithUseCallback = ",n(s.span,{className:"hljs-title function_",children:"useCallback"}),"(",n(s.span,{className:"hljs-function",children:"() =>"}),` {
    message.`,n(s.span,{className:"hljs-title function_",children:"info"}),"(",n(s.span,{className:"hljs-string",children:"'methodsWithUseCallback'"}),`);
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` max;
  }, [max]);

  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"p"}),">"]}),"num : {num}",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"p"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Button"})," ",n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{()"})," =>"]})," setNum(num + 1)}>change num",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Button"})," ",n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{()"})," =>"]})," setMax(pre => pre * 2)}>change max",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"ComponentWithoutUseCallback"})," ",n(s.span,{className:"hljs-attr",children:"getSum"}),"=",n(s.span,{className:"hljs-string",children:"{methodsWithoutUseCallback}"})," />"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"ComponentWithUseCallback"})," ",n(s.span,{className:"hljs-attr",children:"getSum"}),"=",n(s.span,{className:"hljs-string",children:"{methodsWithUseCallback}"})," />"]}),`
    `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
  );
};

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"})," ",n(s.span,{className:"hljs-title class_",children:"Parent"}),`;
`]})}),`
`,n(s.h2,{children:"自定义 hook"}),`
`,n(s.p,{children:"自定义 hook 的函数名 必须以 use 开头 比如下面是一个打印组件创建/销毁的 useLogger hook"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-tsx",children:[n(s.span,{className:"hljs-keyword",children:"import"})," { useEffect, useState } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'react'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"useLogger"})," = (",a(s.span,{className:"hljs-params",children:["componentName: ",n(s.span,{className:"hljs-built_in",children:"string"})]}),`) => {
  `,n(s.span,{className:"hljs-title function_",children:"useEffect"}),"(",n(s.span,{className:"hljs-function",children:"() =>"}),` {
    `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-string",children:["`",n(s.span,{className:"hljs-subst",children:"${componentName}"}),"组件被创建了`"]}),`);

    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
      `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-string",children:["`",n(s.span,{className:"hljs-subst",children:"${componentName}"}),"组件被销毁了`"]}),`);
    };
  }, []);
};

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"Header"})," = (",n(s.span,{className:"hljs-params"}),`) => {
  `,n(s.span,{className:"hljs-title function_",children:"useLogger"}),"(",n(s.span,{className:"hljs-string",children:"'Header'"}),`);

  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"h2"}),">"]}),"Header",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"h2"}),">"]})]}),`;
};

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"Footer"})," = (",n(s.span,{className:"hljs-params"}),`) => {
  `,n(s.span,{className:"hljs-title function_",children:"useLogger"}),"(",n(s.span,{className:"hljs-string",children:"'Footer'"}),`);

  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"h2"}),">"]}),"Footer",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"h2"}),">"]})]}),`;
};

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"})," ",n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"App"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," [show, setShow] = ",n(s.span,{className:"hljs-title function_",children:"useState"}),"(",n(s.span,{className:"hljs-literal",children:"true"}),`);
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"button"})," ",n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{()"})," =>"]})," setShow(!show)}>{show ? 'hidden' : 'show'}",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"button"}),">"]}),`
      {show && `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Header"})," />"]}),`}
      {show && `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Footer"})," />"]}),`}
    `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
  );
}
`]})}),`
`,n(s.h2,{children:"Hooks 使用注意点"}),`
`,n(s.p,{children:"hook 的本质是链表 React 在执行 hook 的时候 是按顺序执行的"}),`
`,n(s.p,{children:"如果将 hook 放在条件/判断语句中 那么就会打破它的执行顺序 产生意想不到的结果"}),`
`,n(s.p,{children:"所以 请将你的 hook 放在最顶层进行使用"}),`
`,n(s.p,{children:"但是 一般项目中都继承了 eslint 如果你非要这样的话 大概率是会被 ⚠️ 一番"}),`
`,n(s.h2,{children:"总结"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"告别难以理解的 Class"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"this"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"生命周期"}),`
`]}),`
`]}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"解决业务逻辑难以拆分的问题"}),`
`,a(s.ul,{children:[`
`,n(s.li,{children:"逻辑一度与生命周期耦合在一起"}),`
`]}),`
`]}),`
`]}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-jsx",children:[n(s.span,{className:"hljs-title function_",children:"componentDidMount"}),"(",n(s.span,{className:"hljs-params"}),`) {
`,n(s.span,{className:"hljs-comment",children:"// 1. 这里发起异步调用"}),`
`,n(s.span,{className:"hljs-comment",children:"// 2. 这里从 props 里获取某个数据，根据这个数据更新 DOM"}),`
`,n(s.span,{className:"hljs-comment",children:"// 3. 这里设置一个订阅"}),`
`,n(s.span,{className:"hljs-comment",children:"// 4. 这里随便干点别的什么"}),`
`,n(s.span,{className:"hljs-comment",children:"// ..."}),`
}
`,n(s.span,{className:"hljs-title function_",children:"componentWillUnMount"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-comment",children:"// 在这里卸载订阅"}),`
}
`,n(s.span,{className:"hljs-title function_",children:"componentDidUpdate"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-comment",children:"// 1. 在这里根据 DidMount 获取到的异步数据更新 DOM"}),`
  `,n(s.span,{className:"hljs-comment",children:"// 2. 这里从 props 里获取某个数据，根据这个数据更新 DOM（和 DidMount 的第2步一样）"}),`
}
`]})}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"使状态逻辑复用变得简单可行"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"HOC（高阶组件）"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"Render Props"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,`
`,n(s.p,{children:"最后补充一下 无论是函数式还是类组件 都没有谁优谁劣之分"}),`
`,n(s.p,{children:"两者是思维模式上的转变"}),`
`,n(s.p,{children:"类组件是面向对象的模式"}),`
`,n(s.p,{children:"而函数式组件是函数式编程的模式"}),`
`,n(s.p,{children:"还记得那个著名的公式吗"}),`
`,a(s.blockquote,{children:[`
`,n(s.p,{children:"React = render(UI)"}),`
`]}),`
`,n(s.p,{children:"React 就是一个吃进数据 吐出 UI 的函数"}),`
`,n(s.p,{children:"所以函数组件从设计思想上来看，更加契合 React 的理念"}),`
`,n(s.p,{children:"但是目前来看 类组件的能力边界还是强于函数组件的"}),`
`,a(s.p,{children:["例如 在上一讲提到的处理错误边界的 ",n(s.code,{children:"componentDidCatch"})," 就强依赖于类组件"]})]})}function o(l={}){const{wrapper:s}=Object.assign({},c(),l.components);return s?n(s,Object.assign({},l,{children:n(e,l)})):e(l)}export{o as default,p as frontmatter};
