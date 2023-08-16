import{u as c,j as a,a as n,F as h}from"./index-39a0289f.js";import"./antd-e9e8fd35.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const d={title:"React Quick Start - Props Vs State"};function l(e){const s=Object.assign({h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span",p:"p",strong:"strong",a:"a",ul:"ul",li:"li"},c(),e.components);return n(h,{children:[a(s.h2,{children:"props"}),`
`,a(s.h3,{children:"props 默认值"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-jsx",children:[a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"Address"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),` {
  `,a(s.span,{className:"hljs-keyword",children:"static"}),` defaultProps = {
    `,a(s.span,{className:"hljs-attr",children:"address"}),": ",a(s.span,{className:"hljs-string",children:"'hangzhou'"}),`,
  };

  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
      `,n(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:"<>"}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"p"}),">"]}),"{this.props.address}",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"p"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:"</>"})]}),`
    );
  }
}
`]})}),`
`,a(s.p,{children:"也可以使用 Address.defaultProps 的语法去设置默认值"}),`
`,a(s.h3,{children:"使用 propTypes 进行类型检查"}),`
`,a(s.p,{children:"propsTypes 在使用时 需要引入 prop-types 库"}),`
`,a(s.p,{children:a(s.strong,{children:"注意 在 使用时 propTypes 要以小写开头"})}),`
`,n(s.p,{children:["具体配置 官网已经写的很详细了 ",a(s.a,{href:"https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html",children:"参考"})]}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-jsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," ",a(s.span,{className:"hljs-title class_",children:"PropTypes"})," ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'prop-types'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," ",a(s.span,{className:"hljs-title class_",children:"React"}),", { ",a(s.span,{className:"hljs-title class_",children:"Component"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"Address"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),` {
  `,a(s.span,{className:"hljs-keyword",children:"static"}),` defaultProps = {
    `,a(s.span,{className:"hljs-attr",children:"address"}),": ",a(s.span,{className:"hljs-string",children:"'hangzhou'"}),`,
  };

  `,a(s.span,{className:"hljs-comment",children:"// 注意 这里的propTypes 是小驼峰"}),`
  `,a(s.span,{className:"hljs-keyword",children:"static"}),` propTypes = {
    `,a(s.span,{className:"hljs-attr",children:"address"}),": ",a(s.span,{className:"hljs-title class_",children:"PropTypes"}),".",a(s.span,{className:"hljs-property",children:"string"}),".",a(s.span,{className:"hljs-property",children:"isRequired"}),`,
  };

  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
      `,n(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:"<>"}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"p"}),">"]}),"{this.props.address}",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"p"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:"</>"})]}),`
    );
  }
}

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"Example"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),` {
  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
      `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Address"})," ",a(s.span,{className:"hljs-attr",children:"address"}),"=",a(s.span,{className:"hljs-string",children:"{"}),"'",a(s.span,{className:"hljs-attr",children:"123"}),"'} />"]}),`
      `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
    );
  }
}
`]})}),`
`,a(s.p,{children:"上述验证 我们期望 address 传入一个字符串 但是父组件传入了一个数字"}),`
`,a(s.p,{children:"控制台 就会进行警告 但是它不是报错"}),`
`,a(s.h2,{children:"state"}),`
`,a(s.p,{children:"和 props 不同的是 props 是外部数据来维护组件"}),`
`,a(s.p,{children:"而 state 是内部数据来维护组件"}),`
`,n(s.p,{children:["但是不管是 props 还是 state 都是",a(s.strong,{children:"不可变数据"})]}),`
`,a(s.p,{children:"即 我们不可以直接去修改原始数据的 props 和 state"}),`
`,a(s.p,{children:"必须 拷贝一份新的数据进行修改"}),`
`,a(s.h3,{children:"setState"}),`
`,a(s.p,{children:"setState 继承自 Component 所以我们可以在组件中直接使用 setState 方法"}),`
`,a(s.p,{children:"我们来看一下以下代码片段"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-jsx",children:[a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"Example"})," ",a(s.span,{className:"hljs-keyword",children:"extends"})," ",a(s.span,{className:"hljs-title class_ inherited__",children:"Component"}),` {
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:"props"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"super"}),`(props);

    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),` = {
      `,a(s.span,{className:"hljs-attr",children:"name"}),": ",a(s.span,{className:"hljs-string",children:"'chou'"}),`,
      `,a(s.span,{className:"hljs-attr",children:"age"}),": ",a(s.span,{className:"hljs-number",children:"18"}),`,
    };
  }

  `,a(s.span,{className:"hljs-title function_",children:"render"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
      `,n(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:"<>"}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"p"}),">"]}),"name : {this.state.name}",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"p"}),">"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"p"}),">"]}),"age : {this.state.age}",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"p"}),">"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"button"})," ",a(s.span,{className:"hljs-attr",children:"onClick"}),"=",a(s.span,{className:"hljs-string",children:"{()"})," =>"]})," this.handleNameChange()}>change name",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"button"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:"</>"})]}),`
    );
  }

  `,a(s.span,{className:"hljs-title function_",children:"handleNameChange"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-title function_",children:"setState"}),`({
      `,a(s.span,{className:"hljs-attr",children:"name"}),": ",a(s.span,{className:"hljs-string",children:"'luckychou'"}),`,
    });
  }
}
`]})}),`
`,a(s.p,{children:"我们在 state 中保存了两个状态 name 和 age"}),`
`,a(s.p,{children:"但是 在点击按钮的时候 我们只修改了 name 这一个属性"}),`
`,a(s.p,{children:"所以 在这个操作的时候 age 属性 到底会有影响嘛"}),`
`,a(s.p,{children:"但其实 React 在 setState 这一个操作中 其实是合并了前后的 state"}),`
`,a(s.p,{children:"用到了 Object.assign({},oldState,newState)"}),`
`,a(s.h3,{children:"异步 or 同步"}),`
`,a(s.p,{children:"我们修改一下刚刚的代码片段"}),`
`,a(s.p,{children:"在执行 setState 的前后 都打印一下 我们的 name 属性"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-jsx",children:["  ",a(s.span,{className:"hljs-title function_",children:"handleNameChange"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"console"}),".",a(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"name"}),`)
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-title function_",children:"setState"}),`({
      `,a(s.span,{className:"hljs-attr",children:"name"}),": ",a(s.span,{className:"hljs-string",children:"'luckychou'"}),`,
    })
    `,a(s.span,{className:"hljs-variable language_",children:"console"}),".",a(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"name"}),`)
  }
`]})}),`
`,a(s.p,{children:"我们可以惊奇的发现 两次的打印结果都是 chou 并未更新成 最新的数据"}),`
`,a(s.p,{children:"那如果我们需要拿到最新的 state 并基于最新的数据进行操作 该怎么办呢"}),`
`,a(s.p,{children:"这时 我们可以给 setState 传入第二个参数 这是一个回调函数"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-jsx",children:["  ",a(s.span,{className:"hljs-title function_",children:"handleNameChange"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"console"}),".",a(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"name"}),`)
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-title function_",children:"setState"}),`(
      {
        `,a(s.span,{className:"hljs-attr",children:"name"}),": ",a(s.span,{className:"hljs-string",children:"'luckychou'"}),`,
      },
      `,a(s.span,{className:"hljs-function",children:"() =>"}),` {
        `,a(s.span,{className:"hljs-variable language_",children:"console"}),".",a(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-string",children:"'我是最新的数据哦,name : '"}),", ",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"name"}),`)
      }
    )
    `,a(s.span,{className:"hljs-variable language_",children:"console"}),".",a(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"name"}),`)
  }
`]})}),`
`,a(s.p,{children:"对比 三次打印结果 我们可以发现 使用这种方法 我们确实可以拿到最新的 state"}),`
`,a(s.p,{children:"我们继续修改我们的代码 添加 count 状态 和 button 按钮 并为其绑定事件"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-jsx",children:["  ",a(s.span,{className:"hljs-title function_",children:"handleCountAdd"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-title function_",children:"setState"}),`({
      `,a(s.span,{className:"hljs-attr",children:"count"}),": ",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"count"})," + ",a(s.span,{className:"hljs-number",children:"1"}),`,
    })
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-title function_",children:"setState"}),`({
      `,a(s.span,{className:"hljs-attr",children:"count"}),": ",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"count"})," + ",a(s.span,{className:"hljs-number",children:"1"}),`,
    })
    `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-title function_",children:"setState"}),`({
      `,a(s.span,{className:"hljs-attr",children:"count"}),": ",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"count"})," + ",a(s.span,{className:"hljs-number",children:"1"}),`,
    })
  }
`]})}),`
`,a(s.p,{children:"那如果是这样呢"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-jsx",children:["  ",a(s.span,{className:"hljs-title function_",children:"handleCountAdd"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-built_in",children:"setTimeout"}),"(",a(s.span,{className:"hljs-function",children:"() =>"}),` {
      `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-title function_",children:"setState"}),`({
        `,a(s.span,{className:"hljs-attr",children:"count"}),": ",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"count"})," + ",a(s.span,{className:"hljs-number",children:"1"}),`,
      })
    })
    `,a(s.span,{className:"hljs-built_in",children:"setTimeout"}),"(",a(s.span,{className:"hljs-function",children:"() =>"}),` {
      `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-title function_",children:"setState"}),`({
        `,a(s.span,{className:"hljs-attr",children:"count"}),": ",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"count"})," + ",a(s.span,{className:"hljs-number",children:"1"}),`,
      })
    })
    `,a(s.span,{className:"hljs-built_in",children:"setTimeout"}),"(",a(s.span,{className:"hljs-function",children:"() =>"}),` {
      `,a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-title function_",children:"setState"}),`({
        `,a(s.span,{className:"hljs-attr",children:"count"}),": ",a(s.span,{className:"hljs-variable language_",children:"this"}),".",a(s.span,{className:"hljs-property",children:"state"}),".",a(s.span,{className:"hljs-property",children:"count"})," + ",a(s.span,{className:"hljs-number",children:"1"}),`,
      })
    })
  }
`]})}),`
`,a(s.p,{children:"未使用定时器的情况下 我们会得到超出预期的结果"}),`
`,a(s.p,{children:"虽然 事件内部执行了 三次 +1 的操作 但是点击按钮时 呈现的效果还是 只加了一次 1"}),`
`,a(s.p,{children:"而使用定时器则和我们的预期一致"}),`
`,a(s.p,{children:"OK 现在 我们来做一个总结"}),`
`,n(s.ul,{children:[`
`,n(s.li,{children:[`
`,a(s.p,{children:"setState 在合成事件(onClick)和回调函数中是异步的"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"在定时器和原生事件(通过 dom addEventListener)中是同步的"}),`
`]}),`
`]})]})}function m(e={}){const{wrapper:s}=Object.assign({},c(),e.components);return s?a(s,Object.assign({},e,{children:a(l,e)})):l(e)}export{m as default,d as frontmatter};
