import{u as r,j as a,a as n,F as h}from"./index-84428b21.js";import"./antd-e9e8fd35.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const o={title:"React Quick Start - Basic Syntax"};function c(e){const s=Object.assign({blockquote:"blockquote",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",span:"span",h3:"h3",ol:"ol",li:"li",strong:"strong",ul:"ul"},r(),e.components),{Codesandbox:l}=s;return l||i("Codesandbox",!0),n(h,{children:[n(s.blockquote,{children:[`
`,n(s.p,{children:["注：本章节的 demo 都以",a(s.code,{children:"类组件 + TS"}),"为例 等下一章 hook 章节后都为函数式组件"]}),`
`]}),`
`,n(s.blockquote,{children:[`
`,a(s.p,{children:"注：在写本章节的时候 React 已经更新到 17 版本 不必在代码中手动导入 React 了"}),`
`]}),`
`,n(s.blockquote,{children:[`
`,n(s.p,{children:["UI 库 统一使用 ",a(s.code,{children:"antd"})," ",a(s.a,{href:"https://ant.design/components/overview-cn/",children:"https://ant.design/components/overview-cn/"})]}),`
`]}),`
`,a(s.h2,{children:"初始化项目"}),`
`,a(s.p,{children:"使用 webpack"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-sh",children:[`npx create-react-app my-app --template typescript

`,a(s.span,{className:"hljs-comment",children:"# or"}),`

yarn create react-app my-app --template typescript
`]})}),`
`,a(s.p,{children:"使用 vite"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-sh",children:[`npm init vite@latest my-vue-app -- --template react-ts

`,a(s.span,{className:"hljs-comment",children:"# or"}),`

yarn create vite my-vue-app --template react-ts
`]})}),`
`,a(s.p,{children:"如果你暂时还不需要集成 typescript 的话 可以去掉 --template typescript"}),`
`,a(s.h2,{children:"父子组件通信"}),`
`,a(s.h3,{children:"父组件 --> 子组件"}),`
`,a(s.p,{children:"父 --> 子 比较简单"}),`
`,a(s.p,{children:"父组件直接通过 props 来传递属性"}),`
`,n(s.p,{children:["类组件用",a(s.code,{children:"this.props.[属性名]"}),"即可拿到对应的属性"]}),`
`,n(s.p,{children:["函数式组件直接使用",a(s.code,{children:"props.[属性名]"}),"即可"]}),`
`,a(s.h3,{children:"子组件 --> 父组件"}),`
`,a(s.p,{children:"原理和 父 --> 子 类似"}),`
`,a(s.p,{children:"在父组件用 props 向子组件传递一个函数"}),`
`,n(s.p,{children:["然后在子组件用",a(s.code,{children:"this.props.<函数名>"}),"触发这个函数"]}),`
`,a(s.p,{children:"以下是一个计数器累加的 🌰"}),`
`,a(s.p,{children:"父组件负责管理数据和方法"}),`
`,a(s.p,{children:"下面是组件间的通信"}),`
`,a(s.p,{children:"父组件向子组件传递 count 变量"}),`
`,a(s.p,{children:"子组件触发父组件 累加方法"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Component"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Button"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'antd'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IProps"}),` {
  count?: `,a(s.span,{className:"hljs-built_in",children:"number"}),`;
  onClick?: `,a(s.span,{className:"hljs-function",children:"() =>"})," ",a(s.span,{className:"hljs-built_in",children:"void"}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IState"}),` {
  `,a(s.span,{className:"hljs-attr",children:"count"}),": ",a(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"ChildComponent"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IState"}),`> {
  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"const"})," { count, onClick } = ",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"props"}),`;
    `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Button"})," ",a(s.span,{className:"hljs-attr",children:"onClick"}),"=",a(s.span,{className:"hljs-string",children:"{onClick}"}),">"]}),"{count}",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Button"}),">"]})]}),`;
  }
}

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"ParentComponent"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IState"}),`> {
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),` = {
      `,a(s.span,{className:"hljs-attr",children:"count"}),": ",a(s.span,{className:"hljs-number",children:"0"}),`,
    };
  }
  `,a(s.span,{className:"hljs-title function_",children:"handleClick"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-title function_",children:"setState"}),`({
      `,a(s.span,{className:"hljs-attr",children:"count"}),": ",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"count"})," + ",a(s.span,{className:"hljs-number",children:"1"}),`,
    });
  }
  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
      `,a(s.span,{className:"xml",children:n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"ChildComponent"})," ",a(s.span,{className:"hljs-attr",children:"count"}),"=",a(s.span,{className:"hljs-string",children:"{this.state.count}"})," ",a(s.span,{className:"hljs-attr",children:"onClick"}),"=",a(s.span,{className:"hljs-string",children:"{this.handleClick}"})," />"]})}),`
    );
  }
}

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-title class_",children:"ParentComponent"}),`;
`]})}),`
`,a(s.p,{children:"如果你执行上述代码的话 你会发现数据可以正常显示 这说明父组件的数据正确的传递给了子组件"}),`
`,a(s.p,{children:"但是一旦点击了按钮 页面就会报错 你会看到如下报错信息"}),`
`,n(s.blockquote,{children:[`
`,a(s.p,{children:"TypeError: Cannot read property 'setState' of undefined"}),`
`]}),`
`,a(s.p,{children:"也就是 this 是 undefined"}),`
`,a(s.p,{children:"在上一讲我们就说到 在类组件中绑定事件时要注意 this 的绑定"}),`
`,a(s.p,{children:"React 并没有帮我们绑定 this 如果我们没有手动绑定 那么它就是 undefined"}),`
`,n(s.p,{children:["关于 React 为什么没有帮我们绑定 this 你可以戳 👉",a("a",{href:"https://www.zhihu.com/question/300850914",children:"这篇文章"})]}),`
`,a(s.p,{children:"解决的方法有两种"}),`
`,n(s.ol,{children:[`
`,a(s.li,{children:"手动绑定 this 在父组件的构造函数处 手动绑定为方法 绑定 this"}),`
`]}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
  `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
  `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),` = {
    `,a(s.span,{className:"hljs-attr",children:"count"}),": ",a(s.span,{className:"hljs-number",children:"0"}),`,
  };
  `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"handleClick"})," = ",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"handleClick"}),".",a(s.span,{className:"hljs-title function_",children:"bind"}),"(",a(s.span,{className:"hljs-variable language_",children:"this"}),`);
}
`]})}),`
`,n(s.ol,{start:"2",children:[`
`,a(s.li,{children:"使用箭头函数"}),`
`]}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:["<",a(s.span,{className:"hljs-title class_",children:"ChildComponent"})," count={",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"count"}),"} onClick={",a(s.span,{className:"hljs-function",children:"() =>"})," ",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-title function_",children:"handleClick"}),`()} />
`]})}),`
`,a(l,{id:"fu-zi-zu-jian-tong-xin-dwzcv3"}),`
`,a(s.p,{children:"这里再补充一个单项数据流的概念"}),`
`,n(s.p,{children:["所谓单向数据流，指的就是当前组件的 state 以 props 的形式流动时，",a(s.strong,{children:"只能流向组件树中比自己层级更低的组件。"}),"   比如在父-子组件这种嵌套关系中，只能由父组件传 props 给子组件，而不能反过来。"]}),`
`,a(s.p,{children:"所以子组件只能通过调用父组件的函数 用函数传参的形式将数据传递给父组件"}),`
`,a(s.h2,{children:"生命周期函数"}),`
`,n(s.p,{children:["主要参考官方的",a(s.a,{href:"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",children:"生命周期图谱"})]}),`
`,a(s.p,{children:"具体有关生命周期的内容 我会在下几章中更新"}),`
`,a(s.p,{children:"这里 我只提最常用的几个生命周期函数以及它们的用途"}),`
`,n(s.ul,{children:[`
`,n(s.li,{children:[`
`,a(s.p,{children:"constructor"}),`
`,n(s.ul,{children:[`
`,n(s.li,{children:[`
`,a(s.p,{children:"初始化内部的 state"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"为事件绑定 this"}),`
`]}),`
`]}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"render"}),`
`,n(s.ul,{children:[`
`,n(s.li,{children:[`
`,a(s.p,{children:"React 的灵魂 用于描述 UI 和交互"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"props / state / forceUpdate 都会重新调用该生命周期 从而使页面更新"}),`
`]}),`
`]}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"shouldComponentUpdate"}),`
`,n(s.ul,{children:[`
`,a(s.li,{children:"对比更新前后数据 优化性能"}),`
`]}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"componentDidMount"}),`
`,n(s.ul,{children:[`
`,a(s.li,{children:"网络请求"}),`
`]}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"componentWillUnmount"}),`
`,n(s.ul,{children:[`
`,a(s.li,{children:"清除定时器等 优化性能"}),`
`]}),`
`]}),`
`]}),`
`,a(s.h2,{children:"状态提升"}),`
`,a(s.p,{children:"状态提升是一个概念性的东西"}),`
`,a(s.p,{children:"状态指 组件间共享的一些数据"}),`
`,a(s.p,{children:"提升指 将这些状态保存在离它们最近的父组件"}),`
`,a(s.p,{children:"比如更改主题 我们就需要将主题这个状态存放在根组件下 然后通过 props 一层一层往下传递"}),`
`,a(s.h2,{children:"ref"}),`
`,a(s.p,{children:"我们实现一个简单的 input 读取用户输入内容的功能"}),`
`,a(s.p,{children:"我们很容易想到用 state 来维护 input 内部数据"}),`
`,a(s.p,{children:"当 input 的内容发生变化时 更新这个 state 的数据"}),`
`,a(s.p,{children:"代码如下"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Component"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IProps"}),` {}

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IState"}),` {
  `,a(s.span,{className:"hljs-attr",children:"inputVal"}),": ",a(s.span,{className:"hljs-built_in",children:"string"}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"App"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IState"}),`> {
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),` = {
      `,a(s.span,{className:"hljs-attr",children:"inputVal"}),": ",a(s.span,{className:"hljs-string",children:"''"}),`,
    };
  }
  `,a(s.span,{className:"hljs-title function_",children:"handleInputChange"}),"(",n(s.span,{className:"hljs-params",children:["e: ",a(s.span,{className:"hljs-built_in",children:"any"})]}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-title function_",children:"setState"}),`({
      `,a(s.span,{className:"hljs-attr",children:"inputVal"}),": (e.",a(s.span,{className:"hljs-property",children:"target"})," ",a(s.span,{className:"hljs-keyword",children:"as"})," ",a(s.span,{className:"hljs-title class_",children:"HTMLInputElement"}),").",a(s.span,{className:"hljs-property",children:"value"}),`,
    });
  }
  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
      `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"input"}),`
        `,a(s.span,{className:"hljs-attr",children:"value"}),"=",a(s.span,{className:"hljs-string",children:"{this.state.inputVal}"}),`
        `,a(s.span,{className:"hljs-attr",children:"onChange"}),"=",a(s.span,{className:"hljs-string",children:"{e"})," =>"]}),` this.handleInputChange(e)}
      />`]}),`
    );
  }
}

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-title class_",children:"App"}),`;
`]})}),`
`,a(s.p,{children:"现在我们想直接通过 dom 去获取 input 的值 该如何实现呢"}),`
`,a(s.p,{children:"React 给我们提供了 ref 属性 通过这个属性 我们可以获取到元素的实例"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," ",a(s.span,{className:"hljs-title class_",children:"React"}),", { ",a(s.span,{className:"hljs-title class_",children:"Component"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IProps"}),` {}

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IState"}),` {}

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"App"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IState"}),`> {
  `,a(s.span,{className:"hljs-keyword",children:"private"})," ",a(s.span,{className:"hljs-attr",children:"inputRef"}),": ",a(s.span,{className:"hljs-title class_",children:"React"}),".",a(s.span,{className:"hljs-property",children:"RefObject"}),"<",a(s.span,{className:"hljs-title class_",children:"HTMLInputElement"}),`>;

  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"inputRef"})," = ",a(s.span,{className:"hljs-title class_",children:"React"}),".",a(s.span,{className:"hljs-title function_",children:"createRef"}),`();
  }

  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
      `,n(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:"<>"}),`
        {/* 方式一 dom在current属性里 */}
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"input"}),`
          `,a(s.span,{className:"hljs-attr",children:"ref"}),"=",a(s.span,{className:"hljs-string",children:"{this.inputRef}"}),`
          `,a(s.span,{className:"hljs-attr",children:"onChange"}),"=",a(s.span,{className:"hljs-string",children:"{()"})," =>"]}),` console.log(this.inputRef.current)}
        />

        {/* 方式二 dom直接在创建的ref里 */}
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"input"}),`
          `,a(s.span,{className:"hljs-attr",children:"ref"}),"=",a(s.span,{className:"hljs-string",children:"{inputRef"})," =>"]}),` (this.inputRef = inputRef as any)}
          onChange={() => console.log(this.inputRef)}
        />
      `,a(s.span,{className:"hljs-tag",children:"</>"})]}),`
    );
  }
}

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-title class_",children:"App"}),`;
`]})}),`
`,a(l,{id:"class-ref-usage-slzdmq"}),`
`,a(s.p,{children:"两者的区别是"}),`
`,n(s.ul,{children:[`
`,n(s.li,{children:[`
`,a(s.p,{children:"前者 其实例在 current 属性下"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"而通过函数创建 其实例就是我们所命名的那个属性"}),`
`]}),`
`]}),`
`,a(s.p,{children:a(s.strong,{children:"写在最后 在生产环境中 千万不要这样去操作 dom"})}),`
`,a(s.p,{children:a(s.strong,{children:"所有可以使用声明式完成的功能都不要使用命令式"})}),`
`,a(s.p,{children:a(s.strong,{children:"除非我们需要实现 聚焦 / 动画 等 必须要获取到 dom 的操作"})}),`
`,a(s.h2,{children:"受控组件 / 非受控组件"}),`
`,a(s.p,{children:"受控组件和非受控组件一般都是针对表单元素来说的 因为它们有自己的 value 属性 可以管理自己的状态"}),`
`,a(s.p,{children:"受控的意思是指元素的状态由外部数据来维护 可理解为数据驱动视图 就是上述例子中的前者"}),`
`,a(s.p,{children:"非受控的意思是指元素的状态由自己来维护 可理解为 jq 操作 dom 来拿数据 就是上述例子中通过 ref 来操作"}),`
`,a(s.h2,{children:"context"}),`
`,a(s.p,{children:"假设 我们有一个 App 组件"}),`
`,a(s.p,{children:"然后 App 组件下有一个 HeaderWrapper 组件"}),`
`,a(s.p,{children:"HeaderWrapper 组件内部 又有一个 Header 组件"}),`
`,a(s.p,{children:"那么 如果我们想把 App 组件中的数据 到 Header 组件"}),`
`,a(s.p,{children:"数据流就要经过 HeaderWrapper 这个组件"}),`
`,a(s.p,{children:"数据流如下"}),`
`,a(s.pre,{children:a(s.code,{className:"hljs language-text",children:`App --> HeaderWrapper --> Header
`})}),`
`,a(s.p,{children:"但是 HeaderWrapper 这个组件是不需要 Header 组件需要的那个 props 的"}),`
`,a(s.p,{children:"尤其是当你使用了类型约束时 你会需要为传递数据的中间组件 编写它们不需要的 props 约束 😳"}),`
`,a(s.p,{children:"如果我们层层传递 那么代码如下"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Component"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IProps"}),` {
  header?: `,a(s.span,{className:"hljs-built_in",children:"string"}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IState"}),` {
  header?: `,a(s.span,{className:"hljs-built_in",children:"string"}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"App"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IState"}),`> {
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),` = {
      `,a(s.span,{className:"hljs-attr",children:"header"}),": ",a(s.span,{className:"hljs-string",children:"'这是Header组件需要的内容'"}),`,
    };
  }
  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"HeaderWrapper"})," ",a(s.span,{className:"hljs-attr",children:"header"}),"=",a(s.span,{className:"hljs-string",children:"{this.state.header}"})," />"]})}),`;
  }
}

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"HeaderWrapper"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IState"}),`> {
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),` = {};
  }
  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Header"})," {",a(s.span,{className:"hljs-attr",children:"...this.props"}),"} />"]})}),`;
  }
}

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"Header"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IState"}),`> {
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),` = {};
  }
  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"{this.props.header}",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]})]}),`;
  }
}

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-title class_",children:"App"}),`;
`]})}),`
`,a(s.p,{children:"好吧 这只是经过了一层 我们已经感觉到了麻烦 如果是 🤔"}),`
`,n(s.p,{children:["这时 React 给我们提供了一个属性 ",a(s.strong,{children:"context"})," 用来解决跨组件通信的问题"]}),`
`,a("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ea0321a715d492f8075fdde42619e90~tplv-k3u1fbpfcp-zoom-1.image",width:"500"}),`
`,a(s.p,{children:"常用 API 有"}),`
`,n(s.ul,{children:[`
`,n(s.li,{children:[`
`,a(s.p,{children:"React.createContext(defaultValue)"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"contextType"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"Provider"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"Consumer"}),`
`]}),`
`]}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," ",a(s.span,{className:"hljs-title class_",children:"React"}),", { ",a(s.span,{className:"hljs-title class_",children:"Component"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IProps"}),` {}

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IState"}),` {}

`,a(s.span,{className:"hljs-comment",children:"// step1 创建一个context 可以创建多个"}),`
`,a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title class_",children:"HeaderContext"})," = ",a(s.span,{className:"hljs-title class_",children:"React"}),".",a(s.span,{className:"hljs-title function_",children:"createContext"}),`({
  `,a(s.span,{className:"hljs-attr",children:"header"}),": ",a(s.span,{className:"hljs-string",children:"'这是Header组件需要的内容'"}),`,
});

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"App"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IState"}),`> {
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),` = {};
  }
  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
      `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"HeaderContext.Provider"})," ",a(s.span,{className:"hljs-attr",children:"value"}),"=",a(s.span,{className:"hljs-string",children:"{{"})," ",a(s.span,{className:"hljs-attr",children:"header:"})," '",a(s.span,{className:"hljs-attr",children:"这是Header组件需要的内容"}),"' }}>"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"HeaderWrapper"})," />"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"FunHeader"})," />"]}),`
      `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"HeaderContext.Provider"}),">"]})]}),`
    );
  }
}

`,a(s.span,{className:"hljs-comment",children:"// 此时 我们的HeaderWrapper组件就是干净的 不再需要传递它不需要的props"}),`
`,a(s.span,{className:"hljs-comment",children:"// 但是 如果需要 该组件也可以在context中拿到值"}),`
`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"HeaderWrapper"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IState"}),`> {
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),` = {};
  }
  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Header"})," {",a(s.span,{className:"hljs-attr",children:"...this.props"}),"} />"]})}),`;
  }
}

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"Header"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IState"}),`> {
  `,a(s.span,{className:"hljs-comment",children:"// step3 在需要使用的地方 将contentType赋值成我们需要的那个context"}),`
  `,a(s.span,{className:"hljs-keyword",children:"static"})," contextType = ",a(s.span,{className:"hljs-title class_",children:"HeaderContext"}),`;
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),` = {};
  }
  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-comment",children:"// step 4 使用 🥰"}),`
    `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"{this.context.header}",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]})]}),`;
  }
}

`,a(s.span,{className:"hljs-comment",children:"// 如果是函数式组件 需要使用下述写法"}),`
`,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"FunHeader"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"HeaderContext.Consumer"}),">"]}),`
      {value => `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"{value.header}",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),`}
    `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"HeaderContext.Consumer"}),">"]})]}),`
  );
}

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-title class_",children:"App"}),`;
`]})}),`
`,a(s.p,{children:"但是 在实际开发中 我们一般不会使用 context"}),`
`,a(s.p,{children:"在生成环境下 我们一般会使用 redux / mobx"}),`
`,a(s.p,{children:"在 React 16.3 之前，Context API 由于存在种种局限性， 并没有被 React 官方推广"}),`
`,a(s.p,{children:"主要有如下问题"}),`
`,n(s.blockquote,{children:[`
`,n(s.p,{children:["如果组件提供的一个 Context 发生了变化，而中间父组件的 shouldComponentUpdate 返回 false，",a(s.strong,{children:"那么使用到该值的后代组件不会进行更新"}),"。使用了 Context 的组件则完全失控，所以基本上没有办法能够可靠的更新 Context。",a(s.a,{href:"https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076",children:"这篇博客文章"}),"很好地解释了为何会出现此类问题，以及你该如何规避它。  ——React 官方"]}),`
`]}),`
`,n(s.p,{children:["有关 context 的发展历程 你可以看 👉",a("a",{href:"https://react.docschina.org/docs/legacy-context.html#updating-context",children:"这里"})]}),`
`,a(s.h2,{children:"合成事件"}),`
`,a(s.p,{children:"React 中的绑定事件 onClick 等等 是 React 中的合成事件"}),`
`,a(s.p,{children:"它和原生的 onclick 事件 不同 主要是用于抹平各浏览器之间的差异"}),`
`,a(s.p,{children:"因为 React 不只是期望运行在 Web 环境 也期望运行在客户端 ios Android 等"}),`
`,a(s.p,{children:"在绑定事件时 传入的第一个参数默认就是 React 中的 event 对象"}),`
`,a(s.p,{children:"同样的 React 也封装了这个对象 为了适合所有开发场景下的使用"}),`
`,a(s.h2,{children:"dangerouslySetInnerHTML"}),`
`,a(s.p,{children:"假设有以下代码 我们想要渲染出 tag 中的 dom 元素"}),`
`,a(s.p,{children:"直接渲染的话 它会被当成字符串 渲染在页面上"}),`
`,a(s.p,{children:"我们需要使用 dangerouslySetInnerHTML 告诉 React 这是一个 dom 元素"}),`
`,a(s.p,{children:"但是也存在副作用 正如它的名字 dangerously 一样"}),`
`,a(s.p,{children:"不合时宜的使用 可能会你的页面遭受 XSS 攻击"}),`
`,a(s.p,{children:"所以忘掉这个属性吧 😛"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Component"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IProps"}),` {}

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IState"}),` {
  `,a(s.span,{className:"hljs-attr",children:"tag"}),": ",a(s.span,{className:"hljs-built_in",children:"string"}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"App"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IState"}),`> {
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),` = {
      `,a(s.span,{className:"hljs-attr",children:"tag"}),": ",a(s.span,{className:"hljs-string",children:"'<h2>HELLO REACT</h2>'"}),`,
    };
  }
  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
      `,n(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:"<>"}),`
        {/* 页面中显示 `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h2"}),">"]}),"HELLO REACT",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h2"}),">"]}),` */}
        {this.state.tag}

        {/* 页面正确解析h2标签 */}
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"})," ",a(s.span,{className:"hljs-attr",children:"dangerouslySetInnerHTML"}),"=",a(s.span,{className:"hljs-string",children:"{{"})," ",a(s.span,{className:"hljs-attr",children:"__html:"})," ",a(s.span,{className:"hljs-attr",children:"this.state.tag"})," }}>"]}),n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:"</>"})]}),`
    );
  }
}

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-title class_",children:"App"}),`;
`]})}),`
`,a(s.h2,{children:"Fragments"}),`
`,a(s.p,{children:"所有的 JSX 必须要有一个根元素包裹"}),`
`,a(s.p,{children:"如果你不想创建额外的元素 那么你就可以使用 Fragments 来包裹它们"}),`
`,a(s.p,{children:"该元素不会创建任何额外的 dom 节点 所以你对该组件的任何操作都会失效"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-jsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Fragment"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title function_",children:"App"})," = (",a(s.span,{className:"hljs-params"}),`) => {
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Fragment"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"}),">"]}),n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"}),">"]}),n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
    `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Fragment"}),">"]})]}),`
  );
};

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-title class_",children:"App"}),`;
`]})}),`
`,a(s.p,{children:"你也可以使用简写"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-jsx",children:[a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title function_",children:"App"})," = (",a(s.span,{className:"hljs-params"}),`) => {
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:"<>"}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"}),">"]}),n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"}),">"]}),n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
    `,a(s.span,{className:"hljs-tag",children:"</>"})]}),`
  );
};

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-title class_",children:"App"}),`;
`]})}),`
`,a(s.h2,{children:"StrictMode"}),`
`,n(s.p,{children:["使用脚手架创建项目时 默认会在跟标签外面包裹",a(s.code,{children:"StrictMode"})]}),`
`,n(s.p,{children:["和",a(s.code,{children:"Fragment"}),"一样 ",a(s.code,{children:"StrictMode"}),"不会创建任何 UI 元素 正如字面意思一样 它主要用于"]}),`
`,n(s.ul,{children:[`
`,n(s.li,{children:[`
`,a(s.p,{children:"识别不安全的生命周期"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"使用过时的 ref 的 API"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"检查意外的副作用"}),`
`,n(s.ul,{children:[`
`,a(s.li,{children:"开发环境下会调用两次 constructor"}),`
`]}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"识别废弃的 findDOMNode 方法"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"检测过时的 context API"}),`
`]}),`
`]}),`
`,a(s.h2,{children:"错误边界"}),`
`,n(s.p,{children:["错误边界依赖 ",a(s.code,{children:"componentDidCatch"})," 这个生命周期函数 所以目前只有类组件能够实现错误边界"]}),`
`,a(s.p,{children:"错误边界能够帮助我们在页面出错的情况下 降级 UI 而不至于页面崩溃"}),`
`,n("details",{children:[a("summary",{children:"下面贴一段官网的 demo 戳我展开👇"}),a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," ",a(s.span,{className:"hljs-title class_",children:"React"})," ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IProps"}),` {}

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IErrorState"}),` {
  `,a(s.span,{className:"hljs-attr",children:"error"}),": ",a(s.span,{className:"hljs-built_in",children:"any"}),`;
  `,a(s.span,{className:"hljs-attr",children:"errorInfo"}),": ",a(s.span,{className:"hljs-built_in",children:"any"}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"ICountState"}),` {
  `,a(s.span,{className:"hljs-attr",children:"counter"}),": ",a(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"ErrorBoundary"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"React.Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IErrorState"}),`> {
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"})," = { ",a(s.span,{className:"hljs-attr",children:"error"}),": ",a(s.span,{className:"hljs-literal",children:"null"}),", ",a(s.span,{className:"hljs-attr",children:"errorInfo"}),": ",a(s.span,{className:"hljs-literal",children:"null"}),` };
  }

  `,a(s.span,{className:"hljs-title function_",children:"componentDidCatch"}),"(",n(s.span,{className:"hljs-params",children:["error: ",a(s.span,{className:"hljs-built_in",children:"any"}),", errorInfo: ",a(s.span,{className:"hljs-built_in",children:"any"})]}),`) {
    `,a(s.span,{className:"hljs-comment",children:"// Catch errors in any components below and re-render with error message"}),`
    `,a(s.span,{className:"hljs-variable language_",children:"console"}),".",a(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-string",children:"'error:'"}),`, error);
    `,a(s.span,{className:"hljs-variable language_",children:"console"}),".",a(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-string",children:"'errorInfo:'"}),`, errorInfo);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-title function_",children:"setState"}),`({
      `,a(s.span,{className:"hljs-attr",children:"error"}),`: error,
      `,a(s.span,{className:"hljs-attr",children:"errorInfo"}),`: errorInfo,
    });
    `,a(s.span,{className:"hljs-comment",children:"// You can also log error messages to an error reporting service here"}),`
  }

  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"if"})," (",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"errorInfo"}),`) {
      `,a(s.span,{className:"hljs-comment",children:"// Error path"}),`
      `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
        `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
          `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h2"}),">"]}),"Something went wrong.",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h2"}),">"]}),`
          `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"details"})," ",a(s.span,{className:"hljs-attr",children:"style"}),"=",a(s.span,{className:"hljs-string",children:"{{"})," ",a(s.span,{className:"hljs-attr",children:"whiteSpace:"})," '",a(s.span,{className:"hljs-attr",children:"pre-wrap"}),"' }}>"]}),`
            {this.state.error && this.state.error.toString()}
            `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"br"})," />"]}),`
            {this.state.errorInfo.componentStack}
          `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"details"}),">"]}),`
        `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
      );
    }
    `,a(s.span,{className:"hljs-comment",children:"// Normally, just render children"}),`
    `,a(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"props"}),".",a(s.span,{className:"hljs-property",children:"children"}),`;
  }
}

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"BuggyCounter"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"React.Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"ICountState"}),`> {
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"})," = { ",a(s.span,{className:"hljs-attr",children:"counter"}),": ",a(s.span,{className:"hljs-number",children:"0"}),` };
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"handleClick"})," = ",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"handleClick"}),".",a(s.span,{className:"hljs-title function_",children:"bind"}),"(",a(s.span,{className:"hljs-variable language_",children:"this"}),`);
  }

  `,a(s.span,{className:"hljs-title function_",children:"handleClick"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-title function_",children:"setState"}),"(",n(s.span,{className:"hljs-function",children:["(",a(s.span,{className:"hljs-params",children:"{ counter }"}),") =>"]}),` ({
      `,a(s.span,{className:"hljs-attr",children:"counter"}),": counter + ",a(s.span,{className:"hljs-number",children:"1"}),`,
    }));
  }

  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"if"})," (",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"counter"})," === ",a(s.span,{className:"hljs-number",children:"5"}),`) {
      `,a(s.span,{className:"hljs-comment",children:"// Simulate a JS error"}),`
      `,a(s.span,{className:"hljs-keyword",children:"throw"})," ",a(s.span,{className:"hljs-keyword",children:"new"})," ",a(s.span,{className:"hljs-title class_",children:"Error"}),"(",a(s.span,{className:"hljs-string",children:"'I crashed!'"}),`);
    }
    `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"})," ",a(s.span,{className:"hljs-attr",children:"onClick"}),"=",a(s.span,{className:"hljs-string",children:"{this.handleClick}"}),">"]}),"{this.state.counter}",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]})]}),`;
  }
}

`,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"App"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"p"}),">"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"b"}),">"]}),`
          This is an example of error boundaries in React 16.
          `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"br"})," />"]}),`
          `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"br"})," />"]}),`
          Click on the numbers to increase the counters.
          `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"br"})," />"]}),`
          The counter is programmed to throw when it reaches 5. This simulates a
          JavaScript error in a component.
        `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"b"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"p"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"hr"})," />"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"ErrorBoundary"}),">"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"p"}),">"]}),`
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"p"}),">"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"BuggyCounter"})," />"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"BuggyCounter"})," />"]}),`
      `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"ErrorBoundary"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"hr"})," />"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"p"}),">"]}),`
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"p"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"ErrorBoundary"}),">"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"BuggyCounter"})," />"]}),`
      `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"ErrorBoundary"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"ErrorBoundary"}),">"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"BuggyCounter"})," />"]}),`
      `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"ErrorBoundary"}),">"]}),`
    `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
  );
}

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-title class_",children:"App"}),`;
`]})})]}),`
`,a(s.h2,{children:"Render Props"}),`
`,n(s.blockquote,{children:[`
`,a(s.p,{children:"render prop 是一个用于告知组件需要渲染什么内容的函数 prop"}),`
`]}),`
`,n(s.blockquote,{children:[`
`,a(s.p,{children:a(s.a,{href:"https://react.docschina.org/docs/render-props.html",children:"https://react.docschina.org/docs/render-props.html"})}),`
`]}),`
`,a(s.h2,{children:"高阶组件"}),`
`,a(s.p,{children:"高阶组件就是一个函数 它接收一个组件 并返回一个新的组件"}),`
`,a(s.p,{children:"主要功能有"}),`
`,n(s.ul,{children:[`
`,n(s.li,{children:[`
`,a(s.p,{children:"可操作所有传入的 props"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"可操作组件的生命周期"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"可操作组件的 static 方法"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"获取 refs"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"可操作 state"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"可以渲染劫持"}),`
`]}),`
`]}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," ",a(s.span,{className:"hljs-title class_",children:"React"}),", { ",a(s.span,{className:"hljs-title class_",children:"Component"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IProps"}),` {
  theme?: `,a(s.span,{className:"hljs-built_in",children:"string"}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"IState"}),` {
  theme?: `,a(s.span,{className:"hljs-built_in",children:"string"}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"App"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IState"}),`> {
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),` = {};
  }
  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
      `,n(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:"<>"}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"HeaderWrapper"})," />"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"ArticleWrapper"})," />"]}),`
      `,a(s.span,{className:"hljs-tag",children:"</>"})]}),`
    );
  }
}

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"Header"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IState"}),`> {
  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"p"})," ",a(s.span,{className:"hljs-attr",children:"style"}),"=",a(s.span,{className:"hljs-string",children:"{{"})," ",a(s.span,{className:"hljs-attr",children:"color:"})," ",a(s.span,{className:"hljs-attr",children:"this.props.theme"})," }}>"]}),"NavBar",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"p"}),">"]})]}),`;
  }
}

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"Article"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),"<",a(s.span,{className:"hljs-title class_",children:"IProps"}),", ",a(s.span,{className:"hljs-title class_",children:"IState"}),`> {
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: IProps"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),` = {};
  }
  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"p"}),">"]}),"Article",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"p"}),">"]})]}),`;
  }
}

`,a(s.span,{className:"hljs-comment",children:"// 增强props  泛型T表示接收组件的props 因为我们需要注入新的props 所以T需要继承拥有新属性的接口"}),`
`,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title class_",children:"ThemeHOC"}),"<T ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_",children:"IProps"}),">(",a(s.span,{className:"hljs-title class_",children:"Component"}),": ",a(s.span,{className:"hljs-title class_",children:"React"}),".",a(s.span,{className:"hljs-property",children:"ComponentType"}),`<T>) {
  `,a(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"extends"})," ",a(s.span,{className:"hljs-title class_",children:"React"}),".",a(s.span,{className:"hljs-property",children:"Component"}),` {
    `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
      `,a(s.span,{className:"hljs-comment",children:"// 为组件注入theme属性"}),`
      `,a(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Component"})," {",a(s.span,{className:"hljs-attr",children:"..."}),"(",a(s.span,{className:"hljs-attr",children:"this.props"})," ",a(s.span,{className:"hljs-attr",children:"as"})," ",a(s.span,{className:"hljs-attr",children:"T"}),")} ",a(s.span,{className:"hljs-attr",children:"theme"}),"=",a(s.span,{className:"hljs-string",children:"{"}),"'",a(s.span,{className:"hljs-attr",children:"red"}),"'} />"]})}),`;
    }
  };
}

`,a(s.span,{className:"hljs-comment",children:"// 劫持生命周期方法 props state render方法"}),`
`,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title class_",children:"LifeHOC"}),"<T>(",a(s.span,{className:"hljs-title class_",children:"Component"}),": ",a(s.span,{className:"hljs-title class_",children:"React"}),".",a(s.span,{className:"hljs-property",children:"ComponentType"}),`<T>) {
  `,a(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"extends"})," ",a(s.span,{className:"hljs-title class_",children:"React"}),".",a(s.span,{className:"hljs-property",children:"Component"}),` {
    `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props: T"}),`) {
      `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);

      `,a(s.span,{className:"hljs-comment",children:"// 劫持到原组件的实例 并可以修改它"}),`
      `,a(s.span,{className:"hljs-variable language_",children:"console"}),".",a(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-variable language_",children:"this"}),`);

      `,a(s.span,{className:"hljs-comment",children:"// 可操作所有传入的props"}),`
      `,a(s.span,{className:"hljs-comment",children:"// 可操作组件的生命周期"}),`
      `,a(s.span,{className:"hljs-comment",children:"// 可操作组件的static方法"}),`
      `,a(s.span,{className:"hljs-comment",children:"// 获取refs"}),`
      `,a(s.span,{className:"hljs-comment",children:"// 可操作state"}),`
      `,a(s.span,{className:"hljs-comment",children:"// 可以渲染劫持"}),`
    }
    `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
      `,a(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Component"})," {",a(s.span,{className:"hljs-attr",children:"..."}),"(",a(s.span,{className:"hljs-attr",children:"this.props"})," ",a(s.span,{className:"hljs-attr",children:"as"})," ",a(s.span,{className:"hljs-attr",children:"T"}),")} />"]})}),`;
    }
  };
}

`,a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title class_",children:"HeaderWrapper"})," = ",a(s.span,{className:"hljs-title class_",children:"ThemeHOC"}),"(",a(s.span,{className:"hljs-title class_",children:"Header"}),`);
`,a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title class_",children:"ArticleWrapper"})," = ",a(s.span,{className:"hljs-title class_",children:"LifeHOC"}),"(",a(s.span,{className:"hljs-title class_",children:"Article"}),`);

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-title class_",children:"App"}),`;
`]})}),`
`,a(s.h2,{children:"类型检查"}),`
`,a(s.p,{children:"如果你的项目还未使用 typescript 又想约束类型的话"}),`
`,n(s.p,{children:["你大概会使用到这个库 ",a(s.code,{children:"prop-types"})]}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-jsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Component"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," ",a(s.span,{className:"hljs-title class_",children:"PropTypes"})," ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'prop-types'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"App"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),` {
  `,a(s.span,{className:"hljs-keyword",children:"static"}),` propTypes = {
    `,a(s.span,{className:"hljs-attr",children:"nickname"}),": ",a(s.span,{className:"hljs-title class_",children:"PropTypes"}),".",a(s.span,{className:"hljs-property",children:"string"}),".",a(s.span,{className:"hljs-property",children:"isRequired"}),`,
    `,a(s.span,{className:"hljs-attr",children:"age"}),": ",a(s.span,{className:"hljs-title class_",children:"PropTypes"}),".",a(s.span,{className:"hljs-property",children:"number"}),`,
  };

  `,a(s.span,{className:"hljs-keyword",children:"static"}),` defaultProps = {
    `,a(s.span,{className:"hljs-attr",children:"nickname"}),": ",a(s.span,{className:"hljs-string",children:"'nanshu'"}),`,
    `,a(s.span,{className:"hljs-attr",children:"age"}),": ",a(s.span,{className:"hljs-number",children:"18"}),`,
  };

  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
      `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"{this.props.nickname}",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"{this.props.age}",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
    );
  }
}
`]})}),`
`,n(s.p,{children:["但是",a(s.code,{children:"prop-types"}),"只做 warning 层面的警告 ⚠️ 它不会打断我们的程序"]})]})}function N(e={}){const{wrapper:s}=Object.assign({},r(),e.components);return s?a(s,Object.assign({},e,{children:a(c,e)})):c(e)}function i(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{N as default,o as frontmatter};
