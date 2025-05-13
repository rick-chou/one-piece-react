import{u as c,j as a,a as n,F as h}from"./index-CjkvZd7K.js";import"./antd-DBIoRdLU.js";import"./lodash-BU0pYqsL.js";import"./prettier-DJQX7j1f.js";import"./chance-DnaHbaGl.js";const p={title:"React Quick Start - Router"};function l(e){const s=Object.assign({p:"p",blockquote:"blockquote",h2:"h2",code:"code",h3:"h3",pre:"pre",span:"span",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img",a:"a"},c(),e.components);return n(h,{children:[a(s.p,{children:"本文参考如下文档"}),`
`,n(s.blockquote,{children:[`
`,a(s.p,{children:"react-router-dom v5"}),`
`]}),`
`,n(s.blockquote,{children:[`
`,a(s.p,{children:"react-router-dom v6"}),`
`]}),`
`,a(s.h2,{children:"前端路由原理"}),`
`,n(s.p,{children:["前端路由有两种实现方式 即 URL 的 ",a(s.code,{children:"hash"})," 和 H5 的 ",a(s.code,{children:"history"})]}),`
`,a(s.h3,{children:"hash"}),`
`,n(s.p,{children:["URL 的 hash 也就是锚点(#), 本质上是改变 ",a(s.code,{children:"window.location"})," 的 href 属性"]}),`
`,n(s.p,{children:["我们可以通过直接赋值 ",a(s.code,{children:"location.hash"})," 来改变 href, 但是页面不发生刷新"]}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-html",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"})," ",a(s.span,{className:"hljs-attr",children:"id"}),"=",a(s.span,{className:"hljs-string",children:'"app"'}),">"]}),`
  `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"a"})," ",a(s.span,{className:"hljs-attr",children:"href"}),"=",a(s.span,{className:"hljs-string",children:'"#/home"'}),">"]}),"home",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"a"}),">"]}),`
  `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"a"})," ",a(s.span,{className:"hljs-attr",children:"href"}),"=",a(s.span,{className:"hljs-string",children:'"#/about"'}),">"]}),"about",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"a"}),">"]}),`
  `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"})," ",a(s.span,{className:"hljs-attr",children:"class"}),"=",a(s.span,{className:"hljs-string",children:'"router-view"'}),">"]}),n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
`,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`

`,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"script"}),">"]}),n(s.span,{className:"javascript",children:[`
  `,a(s.span,{className:"hljs-comment",children:"// 1.获取router-view"}),`
  `,a(s.span,{className:"hljs-keyword",children:"const"})," routerViewEl = ",a(s.span,{className:"hljs-variable language_",children:"document"}),".",a(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",a(s.span,{className:"hljs-string",children:"'.router-view'"}),`);

  `,a(s.span,{className:"hljs-comment",children:"// 2.监听hashchange"}),`
  `,a(s.span,{className:"hljs-variable language_",children:"window"}),".",a(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",a(s.span,{className:"hljs-string",children:"'hashchange'"}),", ",a(s.span,{className:"hljs-function",children:"() =>"}),` {
    `,a(s.span,{className:"hljs-keyword",children:"switch"})," (location.",a(s.span,{className:"hljs-property",children:"hash"}),`) {
      `,a(s.span,{className:"hljs-keyword",children:"case"})," ",a(s.span,{className:"hljs-string",children:"'#/home'"}),`:
        routerViewEl.`,a(s.span,{className:"hljs-property",children:"innerHTML"})," = ",a(s.span,{className:"hljs-string",children:"'home'"}),`;
        `,a(s.span,{className:"hljs-keyword",children:"break"}),`;
      `,a(s.span,{className:"hljs-keyword",children:"case"})," ",a(s.span,{className:"hljs-string",children:"'#/about'"}),`:
        routerViewEl.`,a(s.span,{className:"hljs-property",children:"innerHTML"})," = ",a(s.span,{className:"hljs-string",children:"'about'"}),`;
        `,a(s.span,{className:"hljs-keyword",children:"break"}),`;
      `,a(s.span,{className:"hljs-attr",children:"default"}),`:
        routerViewEl.`,a(s.span,{className:"hljs-property",children:"innerHTML"})," = ",a(s.span,{className:"hljs-string",children:"'default'"}),`;
    }
  });
`]}),n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"script"}),">"]}),`
`]})}),`
`,a(s.p,{children:"hash 的优势就是兼容性更好，在老版 IE 中都可以运行，但是缺陷是有一个# 显得不像一个真实的路径"}),`
`,a(s.h3,{children:"history"}),`
`,a(s.p,{children:"history 接口是 HTML5 新增的, 它有六种模式改变 URL 而不刷新页面"}),`
`,n(s.ul,{children:[`
`,n(s.li,{children:[`
`,a(s.p,{children:"replaceState：替换原来的路径"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"pushState：使用新的路径"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"popState：路径的回退"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"go：向前或向后改变路径"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"forward：向前改变路径"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"back：向后改变路径"}),`
`]}),`
`]}),`
`,a(s.p,{children:"我们这里来简单演示几个方法："}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-html",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"})," ",a(s.span,{className:"hljs-attr",children:"id"}),"=",a(s.span,{className:"hljs-string",children:'"app"'}),">"]}),`
  `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"a"})," ",a(s.span,{className:"hljs-attr",children:"href"}),"=",a(s.span,{className:"hljs-string",children:'"/home"'}),">"]}),"home",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"a"}),">"]}),`
  `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"a"})," ",a(s.span,{className:"hljs-attr",children:"href"}),"=",a(s.span,{className:"hljs-string",children:'"/about"'}),">"]}),"about",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"a"}),">"]}),`
  `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"})," ",a(s.span,{className:"hljs-attr",children:"class"}),"=",a(s.span,{className:"hljs-string",children:'"router-view"'}),">"]}),n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
`,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`

`,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"script"}),">"]}),n(s.span,{className:"javascript",children:[`
  `,a(s.span,{className:"hljs-comment",children:"// 1.获取router-view"}),`
  `,a(s.span,{className:"hljs-keyword",children:"const"})," routerViewEl = ",a(s.span,{className:"hljs-variable language_",children:"document"}),".",a(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",a(s.span,{className:"hljs-string",children:"'.router-view'"}),`);

  `,a(s.span,{className:"hljs-comment",children:"// 2.监听所有的a元素"}),`
  `,a(s.span,{className:"hljs-keyword",children:"const"})," aEls = ",a(s.span,{className:"hljs-variable language_",children:"document"}),".",a(s.span,{className:"hljs-title function_",children:"getElementsByTagName"}),"(",a(s.span,{className:"hljs-string",children:"'a'"}),`);
  `,a(s.span,{className:"hljs-keyword",children:"for"})," (",a(s.span,{className:"hljs-keyword",children:"let"})," aEl ",a(s.span,{className:"hljs-keyword",children:"of"}),` aEls) {
    aEl.`,a(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",a(s.span,{className:"hljs-string",children:"'click'"}),", ",n(s.span,{className:"hljs-function",children:[a(s.span,{className:"hljs-params",children:"e"})," =>"]}),` {
      e.`,a(s.span,{className:"hljs-title function_",children:"preventDefault"}),`();
      `,a(s.span,{className:"hljs-keyword",children:"const"})," href = aEl.",a(s.span,{className:"hljs-title function_",children:"getAttribute"}),"(",a(s.span,{className:"hljs-string",children:"'href'"}),`);
      `,a(s.span,{className:"hljs-variable language_",children:"console"}),".",a(s.span,{className:"hljs-title function_",children:"log"}),`(href);
      history.`,a(s.span,{className:"hljs-title function_",children:"pushState"}),"({}, ",a(s.span,{className:"hljs-string",children:"''"}),`, href);
      `,a(s.span,{className:"hljs-title function_",children:"historyChange"}),`();
    });
  }

  `,a(s.span,{className:"hljs-comment",children:"// 3.执行设置页面操作"}),`
  `,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"historyChange"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-keyword",children:"switch"})," (location.",a(s.span,{className:"hljs-property",children:"pathname"}),`) {
      `,a(s.span,{className:"hljs-keyword",children:"case"})," ",a(s.span,{className:"hljs-string",children:"'/home'"}),`:
        routerViewEl.`,a(s.span,{className:"hljs-property",children:"innerHTML"})," = ",a(s.span,{className:"hljs-string",children:"'home'"}),`;
        `,a(s.span,{className:"hljs-keyword",children:"break"}),`;
      `,a(s.span,{className:"hljs-keyword",children:"case"})," ",a(s.span,{className:"hljs-string",children:"'/about'"}),`:
        routerViewEl.`,a(s.span,{className:"hljs-property",children:"innerHTML"})," = ",a(s.span,{className:"hljs-string",children:"'about'"}),`;
        `,a(s.span,{className:"hljs-keyword",children:"break"}),`;
      `,a(s.span,{className:"hljs-attr",children:"default"}),`:
        routerViewEl.`,a(s.span,{className:"hljs-property",children:"innerHTML"})," = ",a(s.span,{className:"hljs-string",children:"'default'"}),`;
    }
  }
`]}),n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"script"}),">"]}),`
`]})}),`
`,a(s.p,{children:"虽然 history 看起来是一个正常的 url 但是如果部署到服务器上的话 还需要做额外的配置"}),`
`,n(s.p,{children:["比如 ",a(s.code,{children:"/home/article"})," 这个路径对服务器来说可能根本没有对应的目录 需要做 nginx 配置"]}),`
`,a(s.h2,{children:"react-router"}),`
`,a(s.p,{children:"了解了前端路由的实现后 我们来看看 React 中的路由"}),`
`,a(s.p,{children:"React Router 的版本从 4 开始，路由不再集中在一个包中进行管理了"}),`
`,n(s.ul,{children:[`
`,n(s.li,{children:[`
`,a(s.p,{children:"react-router 是 router 的核心部分代码"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"react-router-dom 是用于浏览器的"}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"react-router-native 是用于原生应用的"}),`
`]}),`
`]}),`
`,a(s.p,{children:"安装时 我们只需安装 react-router-dom 即可"}),`
`,a(s.p,{children:"react-router-dom 会自动帮助我们安装 react-router 的依赖"}),`
`,a(s.h2,{children:"react-router-dom V5"}),`
`,a(s.h3,{children:"Route"}),`
`,a(s.p,{children:"相当于一个路由的占位符 当路由匹配成功时 会展示对应的组件"}),`
`,a(s.p,{children:"有三种渲染方式"}),`
`,n(s.ul,{children:[`
`,n(s.li,{children:[`
`,a(s.p,{children:a(s.code,{children:"<Route component>"})}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:a(s.code,{children:"<Route render>"})}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:a(s.code,{children:"<Route children>"})}),`
`]}),`
`]}),`
`,a(s.p,{children:"分别举个 🌰 吧"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"HashRouter"})," ",a(s.span,{className:"hljs-keyword",children:"as"})," ",a(s.span,{className:"hljs-title class_",children:"Router"}),", ",a(s.span,{className:"hljs-title class_",children:"Route"}),", ",a(s.span,{className:"hljs-title class_",children:"Link"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react-router-dom'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"Home"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Home",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]})]}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"article"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Router"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Link"})," ",a(s.span,{className:"hljs-attr",children:"to"}),"=",a(s.span,{className:"hljs-string",children:'"/home"'}),">"]}),"home",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Link"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Link"})," ",a(s.span,{className:"hljs-attr",children:"to"}),"=",a(s.span,{className:"hljs-string",children:'"/user"'}),">"]}),"user",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Link"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Link"})," ",a(s.span,{className:"hljs-attr",children:"to"}),"=",a(s.span,{className:"hljs-string",children:'"/child"'}),">"]}),"child",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Link"}),">"]}),`

      {/* 匹配成功时 渲染组件component */}
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Route"})," ",a(s.span,{className:"hljs-attr",children:"component"}),"=",a(s.span,{className:"hljs-string",children:"{Home}"})," ",a(s.span,{className:"hljs-attr",children:"path"}),"=",a(s.span,{className:"hljs-string",children:'"/home"'})," />"]}),`

      {/* 匹配成功时 执行render方法 */}
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Route"})," ",a(s.span,{className:"hljs-attr",children:"render"}),"=",a(s.span,{className:"hljs-string",children:"{()"})," =>"]})," ",n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"hello nanshu",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),`} path="/user" />

      {/* 匹配成功时 match为路由信息 可通过match来动态渲染 */}
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Route"}),`
        `,a(s.span,{className:"hljs-attr",children:"children"}),"=",a(s.span,{className:"hljs-string",children:"{({"})," ",a(s.span,{className:"hljs-attr",children:"match"})," }) =>"]})," (match ? ",n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Yep",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]})," : ",n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Ops",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),`)}
        path="/child"
      />
    `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Router"}),">"]})]}),`
  );
}
`]})}),`
`,a(s.p,{children:"此外 Route 的属性还有"}),`
`,n(s.ul,{children:[`
`,n(s.li,{children:[`
`,a(s.p,{children:"path string ｜ string[]"}),`
`,n(s.ul,{children:[`
`,a(s.li,{children:"可以匹配一个 url 也可以匹配多个 url"}),`
`]}),`
`]}),`
`,n(s.li,{children:[`
`,a(s.p,{children:"exact 精确匹配（针对路由层级）"}),`
`]}),`
`]}),`
`,n(s.table,{children:[a(s.thead,{children:n(s.tr,{children:[a(s.th,{align:"center",children:"path"}),a(s.th,{align:"center",children:"location.pathname"}),a(s.th,{align:"center",children:"matches?"})]})}),n(s.tbody,{children:[n(s.tr,{children:[a(s.td,{align:"center",children:a(s.code,{children:"/one"})}),a(s.td,{align:"center",children:a(s.code,{children:"/one"})}),a(s.td,{align:"center",children:"yes"})]}),n(s.tr,{children:[a(s.td,{align:"center",children:a(s.code,{children:"/one"})}),a(s.td,{align:"center",children:a(s.code,{children:"/one/"})}),a(s.td,{align:"center",children:"no"})]}),n(s.tr,{children:[a(s.td,{align:"center",children:a(s.code,{children:"/one"})}),a(s.td,{align:"center",children:a(s.code,{children:"/one/two"})}),a(s.td,{align:"center",children:"no"})]})]})]}),`
`,n(s.ul,{children:[`
`,a(s.li,{children:"strict 严格匹配（针对路由结尾的/）"}),`
`]}),`
`,n(s.table,{children:[a(s.thead,{children:n(s.tr,{children:[a(s.th,{align:"center",children:"path"}),a(s.th,{align:"center",children:"location.pathname"}),a(s.th,{align:"center",children:"matches?"})]})}),n(s.tbody,{children:[n(s.tr,{children:[a(s.td,{align:"center",children:a(s.code,{children:"/one/"})}),a(s.td,{align:"center",children:a(s.code,{children:"/one"})}),a(s.td,{align:"center",children:"no"})]}),n(s.tr,{children:[a(s.td,{align:"center",children:a(s.code,{children:"/one/"})}),a(s.td,{align:"center",children:a(s.code,{children:"/one/"})}),a(s.td,{align:"center",children:"yes"})]}),n(s.tr,{children:[a(s.td,{align:"center",children:a(s.code,{children:"/one/"})}),a(s.td,{align:"center",children:a(s.code,{children:"/one/two"})}),a(s.td,{align:"center",children:"yes"})]})]})]}),`
`,n(s.ul,{children:[`
`,a(s.li,{children:"sensitive （针对路由的大小写）"}),`
`]}),`
`,n(s.table,{children:[a(s.thead,{children:n(s.tr,{children:[a(s.th,{align:"center",children:"path"}),a(s.th,{align:"center",children:"location.pathname"}),a(s.th,{align:"center",children:"sensitive"}),a(s.th,{align:"center",children:"matches?"})]})}),n(s.tbody,{children:[n(s.tr,{children:[a(s.td,{align:"center",children:a(s.code,{children:"/one"})}),a(s.td,{align:"center",children:a(s.code,{children:"/one"})}),a(s.td,{align:"center",children:a(s.code,{children:"true"})}),a(s.td,{align:"center",children:"yes"})]}),n(s.tr,{children:[a(s.td,{align:"center",children:a(s.code,{children:"/One"})}),a(s.td,{align:"center",children:a(s.code,{children:"/one"})}),a(s.td,{align:"center",children:a(s.code,{children:"true"})}),a(s.td,{align:"center",children:"no"})]}),n(s.tr,{children:[a(s.td,{align:"center",children:a(s.code,{children:"/One"})}),a(s.td,{align:"center",children:a(s.code,{children:"/one"})}),a(s.td,{align:"center",children:a(s.code,{children:"false"})}),a(s.td,{align:"center",children:"yes"})]})]})]}),`
`,a(s.h3,{children:"BrowserRouter / HashRouter"}),`
`,a(s.p,{children:"顾名思义 前者基于 history 实现 后者基于 hash 实现"}),`
`,a(s.h3,{children:"Link / NavLink"}),`
`,a(s.p,{children:"Link 和 NavLink 最终都会被渲染成 a 标签"}),`
`,n(s.p,{children:["区别是 NavLink 组件有两个属性 ",a(s.code,{children:"activeStyle"})," 和 ",a(s.code,{children:"activeClassName"})," 它们可以来控制选中时的样式"]}),`
`,a(s.h3,{children:"Redirect"}),`
`,a(s.p,{children:"重定向 一般用来做首页登陆校验 举个 🌰"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"BrowserRouter"})," ",a(s.span,{className:"hljs-keyword",children:"as"})," ",a(s.span,{className:"hljs-title class_",children:"Router"}),", ",a(s.span,{className:"hljs-title class_",children:"Route"}),", ",a(s.span,{className:"hljs-title class_",children:"Redirect"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react-router-dom'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"Home"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Home",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]})]}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"Login"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Login",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]})]}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"const"})," isLogin = ",a(s.span,{className:"hljs-literal",children:"true"}),`;

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"article"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Router"}),">"]}),`
      {isLogin ? (
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Route"})," ",a(s.span,{className:"hljs-attr",children:"component"}),"=",a(s.span,{className:"hljs-string",children:"{Home}"})," ",a(s.span,{className:"hljs-attr",children:"path"}),"=",a(s.span,{className:"hljs-string",children:'"/"'})," ",a(s.span,{className:"hljs-attr",children:"exact"})," />"]}),`
      ) : (
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Redirect"})," ",a(s.span,{className:"hljs-attr",children:"to"}),"=",a(s.span,{className:"hljs-string",children:'"/login"'})," />"]}),`
      )}
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Route"})," ",a(s.span,{className:"hljs-attr",children:"component"}),"=",a(s.span,{className:"hljs-string",children:"{Login}"})," ",a(s.span,{className:"hljs-attr",children:"path"}),"=",a(s.span,{className:"hljs-string",children:'"/login"'})," />"]}),`
    `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Router"}),">"]})]}),`
  );
}
`]})}),`
`,a(s.h3,{children:"Switch"}),`
`,a(s.p,{children:"只会渲染第一个匹配到的路由 举个 🌰"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"BrowserRouter"})," ",a(s.span,{className:"hljs-keyword",children:"as"})," ",a(s.span,{className:"hljs-title class_",children:"Router"}),", ",a(s.span,{className:"hljs-title class_",children:"Route"}),", ",a(s.span,{className:"hljs-title class_",children:"Switch"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react-router-dom'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"Home"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Home",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]})]}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"About"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"About",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]})]}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"NoMatch"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"404",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]})]}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"App"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Router"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Switch"}),">"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Route"})," ",a(s.span,{className:"hljs-attr",children:"component"}),"=",a(s.span,{className:"hljs-string",children:"{Home}"})," ",a(s.span,{className:"hljs-attr",children:"path"}),"=",a(s.span,{className:"hljs-string",children:'"/"'})," ",a(s.span,{className:"hljs-attr",children:"exact"})," />"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Route"})," ",a(s.span,{className:"hljs-attr",children:"component"}),"=",a(s.span,{className:"hljs-string",children:"{About}"})," ",a(s.span,{className:"hljs-attr",children:"path"}),"=",a(s.span,{className:"hljs-string",children:'"/about"'})," />"]}),`
        `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Route"})," ",a(s.span,{className:"hljs-attr",children:"component"}),"=",a(s.span,{className:"hljs-string",children:"{NoMatch}"})," />"]}),`
      `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Switch"}),">"]}),`
    `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Router"}),">"]})]}),`
  );
}
`]})}),`
`,a(s.p,{children:"上述例子 如果前面的路由都没有匹配 则会展示我们的 NoMatch 404 页面"}),`
`,a(s.h3,{children:"withRouter"}),`
`,a(s.p,{children:"withRouter 是一个高阶函数 它可以为那些不受 react-router 路由控制的组件注入 history/match/location 三个路由属性"}),`
`,a(s.p,{children:"举个 🌰"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { withRouter, ",a(s.span,{className:"hljs-title class_",children:"BrowserRouter"})," ",a(s.span,{className:"hljs-keyword",children:"as"})," ",a(s.span,{className:"hljs-title class_",children:"Router"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react-router-dom'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"Home"}),"(",n(s.span,{className:"hljs-params",children:["props: ",a(s.span,{className:"hljs-built_in",children:"any"})]}),`) {
  `,a(s.span,{className:"hljs-comment",children:"// 获取不到路由信息"}),`
  `,a(s.span,{className:"hljs-variable language_",children:"console"}),".",a(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-string",children:"'home :>> '"}),`, props);
  `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Home",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]})]}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title class_",children:"Article"})," = ",a(s.span,{className:"hljs-title function_",children:"withRouter"}),"(",n(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:["props: ",a(s.span,{className:"hljs-built_in",children:"any"})]}),") =>"]}),` {
  `,a(s.span,{className:"hljs-comment",children:"// 可以获取到路由信息"}),`
  `,a(s.span,{className:"hljs-variable language_",children:"console"}),".",a(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-string",children:"'article :>> '"}),`, props);
  `,a(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Article",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]})]}),`;
});

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"article"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Router"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Home"})," />"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Article"})," />"]}),`
    `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Router"}),">"]})]}),`
  );
}
`]})}),`
`,a(s.p,{children:"注意 withRouter 必须作为 HashRouter / BrowserRouter 的子组件使用"}),`
`,a(s.h3,{children:"hooks"}),`
`,n(s.blockquote,{children:[`
`,a(s.p,{children:"useParams / useLocation / useRouteMatch / useHistory"}),`
`]}),`
`,a(s.p,{children:"举个 🌰"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Button"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'antd'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-variable constant_",children:"FC"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"}),` {
  useParams,
  useLocation,
  useRouteMatch,
  useHistory,
} `,a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react-router-dom'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"interface"})," ",a(s.span,{className:"hljs-title class_",children:"RouteParams"}),` {
  `,a(s.span,{className:"hljs-attr",children:"id"}),": ",a(s.span,{className:"hljs-built_in",children:"string"}),`;
}

`,a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-title class_",children:"Article"}),": ",a(s.span,{className:"hljs-variable constant_",children:"FC"})," = ",a(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,a(s.span,{className:"hljs-keyword",children:"const"})," params = useParams<",a(s.span,{className:"hljs-title class_",children:"RouteParams"}),`>();
  `,a(s.span,{className:"hljs-keyword",children:"const"})," location = ",a(s.span,{className:"hljs-title function_",children:"useLocation"}),`();
  `,a(s.span,{className:"hljs-keyword",children:"const"})," match = ",a(s.span,{className:"hljs-title function_",children:"useRouteMatch"}),"(",a(s.span,{className:"hljs-string",children:"'/basic/router/v5-hook/:id'"}),`);
  `,a(s.span,{className:"hljs-keyword",children:"const"})," history = ",a(s.span,{className:"hljs-title function_",children:"useHistory"}),`();
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:"<>"}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"})," ",a(s.span,{className:"hljs-attr",children:"className"}),"=",a(s.span,{className:"hljs-string",children:'"text-4xl"'}),">"]}),"Article: {params.id}",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Button"})," ",a(s.span,{className:"hljs-attr",children:"onClick"}),"=",a(s.span,{className:"hljs-string",children:"{()"})," =>"]}),` history.push('/basic/router/v5-hook/209')}>
        Article: 209
      `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Button"}),">"]}),`
    `,a(s.span,{className:"hljs-tag",children:"</>"})]}),`
  );
};

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-title class_",children:"Article"}),`;
`]})}),`
`,a(s.p,{children:a(s.img,{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0bdac3aa015d4c5faa360ce0857d7214~tplv-k3u1fbpfcp-watermark.image?",alt:"Screen Shot 2022-04-06 at 11.00.44.png"})}),`
`,a(s.h3,{children:"react-router-config"}),`
`,n(s.p,{children:[a(s.code,{children:"react-router-config"})," 允许我们统一的管理我们的路由信息"]}),`
`,n(s.blockquote,{children:[`
`,a(s.p,{children:"注意 这个包和 V5 绑定"}),`
`]}),`
`,a(s.p,{children:"举个 🌰"}),`
`,a(s.p,{children:"我们的目录结构如下 about 下还有子路由"}),`
`,a(s.pre,{children:a(s.code,{children:`├── about/
│   ├── address/
│     ├── index.jsx
│   ├── culture/
│     ├── index.jsx
│   ├── index.jsx
├── home/
│   ├── index.jsx
`})}),`
`,a(s.p,{children:"我们便可以用一份如下的代码管理这些路由"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-keyword",children:"import"})," ",a(s.span,{className:"hljs-title class_",children:"Home"})," ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@/components/home'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," ",a(s.span,{className:"hljs-title class_",children:"About"})," ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@/components/about'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," ",a(s.span,{className:"hljs-title class_",children:"Address"})," ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@/components/about/address'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," ",a(s.span,{className:"hljs-title class_",children:"Culture"})," ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@/components/about/culture'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"const"}),` routes = [
  {
    `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'/'"}),`,
    `,a(s.span,{className:"hljs-attr",children:"exact"}),": ",a(s.span,{className:"hljs-literal",children:"true"}),`,
    `,a(s.span,{className:"hljs-attr",children:"component"}),": ",a(s.span,{className:"hljs-title class_",children:"Home"}),`,
  },
  {
    `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'/about'"}),`,
    `,a(s.span,{className:"hljs-attr",children:"component"}),": ",a(s.span,{className:"hljs-title class_",children:"About"}),`,
    `,a(s.span,{className:"hljs-attr",children:"routes"}),`: [
      {
        `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'/about/address'"}),`,
        `,a(s.span,{className:"hljs-attr",children:"component"}),": ",a(s.span,{className:"hljs-title class_",children:"Address"}),`,
      },
      {
        `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'/about/culture'"}),`,
        `,a(s.span,{className:"hljs-attr",children:"component"}),": ",a(s.span,{className:"hljs-title class_",children:"Culture"}),`,
      },
    ],
  },
];
`]})}),`
`,a(s.p,{children:"然后在需要使用的地方 引入 react-router-config"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"BrowserRouter"})," ",a(s.span,{className:"hljs-keyword",children:"as"})," ",a(s.span,{className:"hljs-title class_",children:"Router"}),", ",a(s.span,{className:"hljs-title class_",children:"Link"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react-router-dom'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { renderRoutes } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react-router-config'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { routes } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@/router'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"article"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Router"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Link"})," ",a(s.span,{className:"hljs-attr",children:"to"}),"=",a(s.span,{className:"hljs-string",children:'"/"'}),">"]}),"home",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Link"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Link"})," ",a(s.span,{className:"hljs-attr",children:"to"}),"=",a(s.span,{className:"hljs-string",children:'"/about"'}),">"]}),"about",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Link"}),">"]}),`

      {renderRoutes(routes)}
    `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Router"}),">"]})]}),`
  );
}
`]})}),`
`,a(s.p,{children:"然后在有子路由的组件 About 中使用时要注意 不能将整张路由表渲染 不然程序会卡死"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Link"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react-router-dom'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { renderRoutes } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react-router-config'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"default"})," ",a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"Article"}),"(",n(s.span,{className:"hljs-params",children:["props: ",a(s.span,{className:"hljs-built_in",children:"any"})]}),`) {
  `,a(s.span,{className:"hljs-comment",children:"// props除了有 history / location / match之外 还有一个route属性 里面有对应的子路由信息routes"}),`
  `,a(s.span,{className:"hljs-variable language_",children:"console"}),".",a(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-string",children:"'props :>> '"}),`, props);
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:"<>"}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),"About",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"h1"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Link"})," ",a(s.span,{className:"hljs-attr",children:"to"}),"=",a(s.span,{className:"hljs-string",children:'"/about/address"'}),">"]}),"address",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Link"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Link"})," ",a(s.span,{className:"hljs-attr",children:"to"}),"=",a(s.span,{className:"hljs-string",children:'"/about/culture"'}),">"]}),"culture",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Link"}),">"]}),`
      {/* 注意⚠️ 不要把整个router放在这里渲染 */}
      {renderRoutes(props.route.routes)}
    `,a(s.span,{className:"hljs-tag",children:"</>"})]}),`
  );
}
`]})}),`
`,a(s.h2,{children:"react-router-dom V6"}),`
`,a(s.p,{children:"V6 有一些破坏性的改动 目前正在致力于做 V5 的向前兼容"}),`
`,a(s.p,{children:"这里列举一些比较常用的 且有变化的改动"}),`
`,a(s.p,{children:"在项目中 目前还是使用稳定的 v5 版本"}),`
`,n(s.blockquote,{children:[`
`,n(s.p,{children:["完整的文档参考 ",a(s.a,{href:"https://reactrouter.com/docs/en/v6",children:"https://reactrouter.com/docs/en/v6"})]}),`
`]}),`
`,a(s.h3,{children:"Route"}),`
`,a(s.p,{children:"举个 🌰"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-comment",children:"// v5"}),`
<`,a(s.span,{className:"hljs-title class_",children:"BrowserRouter"}),`>
  `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Switch"}),">"]}),`
    `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Route"})," ",a(s.span,{className:"hljs-attr",children:"exact"})," ",a(s.span,{className:"hljs-attr",children:"path"}),"=",a(s.span,{className:"hljs-string",children:'"/"'})," ",a(s.span,{className:"hljs-attr",children:"component"}),"=",a(s.span,{className:"hljs-string",children:"{Home}"})," />"]}),`
    `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Route"})," ",a(s.span,{className:"hljs-attr",children:"path"}),"=",a(s.span,{className:"hljs-string",children:'"/users"'})," ",a(s.span,{className:"hljs-attr",children:"component"}),"=",a(s.span,{className:"hljs-string",children:"{Users}"})," />"]}),`
  `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Switch"}),">"]})]}),`
</`,a(s.span,{className:"hljs-title class_",children:"BrowserRouter"}),`>

`,a(s.span,{className:"hljs-comment",children:"// v6"}),`
`,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"BrowserRouter"}),">"]}),`
  `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Routes"}),">"]}),`
    `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Route"})," ",a(s.span,{className:"hljs-attr",children:"path"}),"=",a(s.span,{className:"hljs-string",children:'"/"'})," ",a(s.span,{className:"hljs-attr",children:"element"}),"=",a(s.span,{className:"hljs-string",children:"{"}),"<",a(s.span,{className:"hljs-attr",children:"Home"})," />"]}),`} />
    `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Route"})," ",a(s.span,{className:"hljs-attr",children:"path"}),"=",a(s.span,{className:"hljs-string",children:'"users/*"'})," ",a(s.span,{className:"hljs-attr",children:"element"}),"=",a(s.span,{className:"hljs-string",children:"{"}),"<",a(s.span,{className:"hljs-attr",children:"Users"})," />"]}),`} />
  `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"Routes"}),">"]}),`
`,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"BrowserRouter"}),">"]})]}),`
`]})}),`
`,a(s.h3,{children:"使用 useNavigate 代替 useHistory"}),`
`,a(s.p,{children:"举个 🌰"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-comment",children:"// v5 demo"}),`
`,a(s.span,{className:"hljs-keyword",children:"import"})," { useHistory } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react-router-dom'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"App"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"let"})," history = ",a(s.span,{className:"hljs-title function_",children:"useHistory"}),`();
  `,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"handleClick"}),"(",a(s.span,{className:"hljs-params"}),`) {
    history.`,a(s.span,{className:"hljs-title function_",children:"push"}),"(",a(s.span,{className:"hljs-string",children:"'/home'"}),`);
  }
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"button"})," ",a(s.span,{className:"hljs-attr",children:"onClick"}),"=",a(s.span,{className:"hljs-string",children:"{handleClick}"}),">"]}),"go home",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"button"}),">"]}),`
    `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
  );
}
`]})}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-tsx",children:[a(s.span,{className:"hljs-comment",children:"// v6 demo"}),`
`,a(s.span,{className:"hljs-keyword",children:"import"})," { useNavigate } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'react-router-dom'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"App"}),"(",a(s.span,{className:"hljs-params"}),`) {
  `,a(s.span,{className:"hljs-keyword",children:"let"})," navigate = ",a(s.span,{className:"hljs-title function_",children:"useNavigate"}),`();
  `,a(s.span,{className:"hljs-keyword",children:"function"})," ",a(s.span,{className:"hljs-title function_",children:"handleClick"}),"(",a(s.span,{className:"hljs-params"}),`) {
    `,a(s.span,{className:"hljs-title function_",children:"navigate"}),"(",a(s.span,{className:"hljs-string",children:"'/home'"}),`);
  }
  `,a(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,n(s.span,{className:"xml",children:[n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"button"})," ",a(s.span,{className:"hljs-attr",children:"onClick"}),"=",a(s.span,{className:"hljs-string",children:"{handleClick}"}),">"]}),"go home",n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"button"}),">"]}),`
    `,n(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
  );
}
`]})}),`
`,a(s.h3,{children:"使用 useRoutes 代替 react-router-config"}),`
`,a(s.pre,{children:n(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-title function_",children:"useRoutes"}),`([
  { `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'/'"}),", ",a(s.span,{className:"hljs-attr",children:"element"}),": ",a(s.span,{className:"xml",children:n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Home"})," />"]})}),` },
  { `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'dashboard'"}),", ",a(s.span,{className:"hljs-attr",children:"element"}),": ",a(s.span,{className:"xml",children:n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Dashboard"})," />"]})}),` },
  {
    `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'invoices'"}),`,
    `,a(s.span,{className:"hljs-attr",children:"element"}),": ",a(s.span,{className:"xml",children:n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Invoices"})," />"]})}),`,
    `,a(s.span,{className:"hljs-comment",children:"// 嵌套子路由"}),`
    `,a(s.span,{className:"hljs-attr",children:"children"}),`: [
      { `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"':id'"}),", ",a(s.span,{className:"hljs-attr",children:"element"}),": ",a(s.span,{className:"xml",children:n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"Invoice"})," />"]})}),` },
      { `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'sent'"}),", ",a(s.span,{className:"hljs-attr",children:"element"}),": ",a(s.span,{className:"xml",children:n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"SentInvoices"})," />"]})}),` },
    ],
  },
  `,a(s.span,{className:"hljs-comment",children:"// 404"}),`
  { `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'*'"}),", ",a(s.span,{className:"hljs-attr",children:"element"}),": ",a(s.span,{className:"xml",children:n(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"NotFound"})," />"]})}),` },
]);
`]})})]})}function o(e={}){const{wrapper:s}=Object.assign({},c(),e.components);return s?a(s,Object.assign({},e,{children:a(l,e)})):l(e)}export{o as default,p as frontmatter};
