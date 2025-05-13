import{u as c,j as n,a as l,F as r}from"./index-CjkvZd7K.js";import"./antd-DBIoRdLU.js";import"./lodash-BU0pYqsL.js";import"./prettier-DJQX7j1f.js";import"./chance-DnaHbaGl.js";const o={title:"React Quick Start - CSS"};function a(e){const s=Object.assign({p:"p",ol:"ol",li:"li",code:"code",h2:"h2",pre:"pre",span:"span",h3:"h3",img:"img",h4:"h4",blockquote:"blockquote",a:"a"},c(),e.components);return l(r,{children:[n(s.p,{children:"本篇主要记录 📝 一下 React 中 使用 css 的一些方案"}),`
`,l(s.ol,{children:[`
`,l(s.li,{children:[`
`,n(s.p,{children:"scss + css modules + antd 样式修改的问题"}),`
`]}),`
`,l(s.li,{children:[`
`,l(s.p,{children:[n(s.code,{children:"styled-components"})," 这个库的使用"]}),`
`]}),`
`,l(s.li,{children:[`
`,n(s.p,{children:"tailwind css （ 🔥 🔥 🔥 ）"}),`
`]}),`
`]}),`
`,n(s.h2,{children:"scss + css modules"}),`
`,n(s.p,{children:"这是我之前使用的方式 在这里记录一下"}),`
`,n(s.p,{children:"我们可以为对应的组件新建一个 index.module.scss 然后在里面书写 scss 的语法"}),`
`,n(s.p,{children:"然后在组件内 我们便可以用模块的方式使用这些 css 样式了"}),`
`,n(s.p,{children:"举个 🌰"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-scss",children:[n(s.span,{className:"hljs-selector-class",children:".container"}),` {
  `,n(s.span,{className:"hljs-attribute",children:"background"}),`: yellow;
}
`]})}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-tsx",children:[n(s.span,{className:"hljs-keyword",children:"import"})," styles ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'./index.module.scss'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"App"})," = (",n(s.span,{className:"hljs-params"}),`) => {
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,l(s.span,{className:"xml",children:[l(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"div"})," ",n(s.span,{className:"hljs-attr",children:"className"}),"=",n(s.span,{className:"hljs-string",children:"{styles.container}"}),">"]}),`
      `,l(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Header",l(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"h1"}),">"]}),`
    `,l(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
  );
};

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"})," ",n(s.span,{className:"hljs-title class_",children:"App"}),`;
`]})}),`
`,l(s.p,{children:["如果 项目中使用了 TS 的话 还需要为",n(s.code,{children:"index.module.scss"}),"定义声明文件"]}),`
`,l(s.p,{children:["新建",n(s.code,{children:"index.module.scss.d.ts"})]}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"container"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
`]})}),`
`,n(s.p,{children:"当然 如果不想为每一个样式 手动编写声明文件的话"}),`
`,n(s.p,{children:"你可以试一下"}),`
`,n(s.p,{children:n(s.code,{children:"typings-for-css-modules-loader"})}),`
`,n(s.p,{children:"or"}),`
`,n(s.p,{children:n(s.code,{children:"typescript-plugin-css-modules"})}),`
`,n(s.p,{children:"前者可以自动的帮助你生成声明文件 而后者需要配合 vscode 一起使用"}),`
`,l(s.p,{children:["以下为 ",n(s.code,{children:"typescript-plugin-css-modules"})," 的配置"]}),`
`,n(s.pre,{children:n(s.code,{children:`// compilerOptions
"plugins": [{ "name": "typescript-plugin-css-modules" }]
`})}),`
`,n(s.p,{children:"然后在 vscode 的 setting.json 中"}),`
`,n(s.pre,{children:n(s.code,{children:`"typescript.tsserver.pluginPaths": ["typescript-plugin-css-modules"]
`})}),`
`,n(s.h3,{children:"修改 antd 样式"}),`
`,n(s.p,{children:"我们引入一个 antd 的 Button"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-jsx",children:[n(s.span,{className:"hljs-keyword",children:"import"})," styles ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'./index.module.scss'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"Button"})," } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'antd'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"App"})," = (",n(s.span,{className:"hljs-params"}),`) => {
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,l(s.span,{className:"xml",children:[l(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"div"})," ",n(s.span,{className:"hljs-attr",children:"className"}),"=",n(s.span,{className:"hljs-string",children:"{styles.container}"}),">"]}),`
      `,l(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Header",l(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"h1"}),">"]}),`
      `,l(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),"Antd",l(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Button"}),">"]}),`
    `,l(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
  );
};

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"})," ",n(s.span,{className:"hljs-title class_",children:"App"}),`;
`]})}),`
`,n(s.p,{children:"打开开发者调试工具 我们可以看到"}),`
`,n(s.p,{children:n(s.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/01d47901875749b796560dad084a039b~tplv-k3u1fbpfcp-zoom-1.image",alt:""})}),`
`,n(s.p,{children:"我们可以看到 我们的 container 被加上了 一串 hash 而 antd 的样式名没有加 hash"}),`
`,n(s.p,{children:"所以我们要告诉 scss 在我们书写 antd 的样式时 不要加上 hash 这样样式名才会匹配 样式才能生效"}),`
`,l(s.p,{children:["我们可以用",n(s.code,{children:":global"}),"来包裹住不想被加上 hash 的样式"]}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-scss",children:[n(s.span,{className:"hljs-selector-class",children:".container"}),` {
  `,n(s.span,{className:"hljs-attribute",children:"color"}),`: red;
}

:global {
  `,n(s.span,{className:"hljs-selector-class",children:".ant-btn"}),` {
    `,n(s.span,{className:"hljs-attribute",children:"width"}),": ",n(s.span,{className:"hljs-number",children:"300px"}),`;
  }
}
`]})}),`
`,n(s.p,{children:"这样 antd 的样式就可以被我们修改啦 😈"}),`
`,n(s.h2,{children:"styled-components"}),`
`,n(s.h3,{children:"基本使用"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"import"})," styled ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'styled-components'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"Header"})," = styled.",n(s.span,{className:"hljs-property",children:"div"}),n(s.span,{className:"hljs-string",children:`\`
  font-size: 20px;
  color: red;
\``}),`;

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"Footer"})," = styled.",n(s.span,{className:"hljs-property",children:"div"}),n(s.span,{className:"hljs-string",children:"`\n  color: yellow;\n`"}),`;
`]})}),`
`,n(s.p,{children:"用``包裹的语法 是标签字符串"}),`
`,n(s.p,{children:"styled.div 这些都是第三方库中内置的方法"}),`
`,n(s.p,{children:"通过标签字符串 我们不仅可以调用该方法 而且可以在方法内部 通过某种匹配 得到每一个样式"}),`
`,n(s.p,{children:"最后在组件中 我们可以像使用普通组件那样来使用 CSS 样式"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-jsx",children:[n(s.span,{className:"hljs-keyword",children:"import"})," ",n(s.span,{className:"hljs-title class_",children:"React"})," ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'react'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"import"})," { ",n(s.span,{className:"hljs-title class_",children:"Header"}),", ",n(s.span,{className:"hljs-title class_",children:"Footer"})," } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'./style'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"})," ",n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"App"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,l(s.span,{className:"xml",children:[l(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,l(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Header"}),">"]}),"我是Header",l(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Header"}),">"]}),`
      `,l(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Footer"}),">"]}),"我是Footer",l(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Footer"}),">"]}),`
    `,l(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
  );
}
`]})}),`
`,n(s.h3,{children:"高级用法"}),`
`,n(s.h4,{children:"添加 attrs 属性"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"HYInput"})," = styled.",n(s.span,{className:"hljs-property",children:"input"}),".",n(s.span,{className:"hljs-title function_",children:"attrs"}),`({
  `,n(s.span,{className:"hljs-attr",children:"placeholder"}),": ",n(s.span,{className:"hljs-string",children:'"请填写密码"'}),`,
})`,n(s.span,{className:"hljs-string",children:"`\n"})]})}),`
`,n(s.h4,{children:"props 穿透"}),`
`,n(s.p,{children:"props 可以被传递给 styled 组件"}),`
`,n(s.p,{children:"在组件中 我们传递 props"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-jsx",children:["<",n(s.span,{className:"hljs-title class_",children:"Header"})," color=",n(s.span,{className:"hljs-string",children:'"blue"'}),"></",n(s.span,{className:"hljs-title class_",children:"Header"}),`>
`]})}),`
`,n(s.p,{children:"在 styled 组件中 我们可以接收到 props"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-javascript",children:[n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"Header"})," = styled.",n(s.span,{className:"hljs-property",children:"div"}),l(s.span,{className:"hljs-string",children:["`\n  color: ",n(s.span,{className:"hljs-subst",children:"${props => props.color}"}),";\n}`"]}),`;
`]})}),`
`,n(s.h4,{children:"支持伪类和伪元素"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"Footer"})," = styled.",n(s.span,{className:"hljs-property",children:"div"}),n(s.span,{className:"hljs-string",children:`\`
  color: yellow;
  &:hover {
    color: blue;
  }
  &::after {
    content: '页脚';
  }
\``}),`;
`]})}),`
`,n(s.h4,{children:"支持选择器嵌套"}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"Footer"})," = styled.",n(s.span,{className:"hljs-property",children:"div"}),n(s.span,{className:"hljs-string",children:`\`
  color: yellow;

  p {
    color: red;
  }
\``}),`;
`]})}),`
`,n(s.h2,{children:"tailwind"}),`
`,n(s.p,{children:"这是作者最近一直在使用的方式 非常推荐 🔥 🔥 🔥"}),`
`,n(s.p,{children:"使用起来也非常简单"}),`
`,l(s.ol,{children:[`
`,n(s.li,{children:"安装 tailwindcss / postcss / autoprefixer"}),`
`]}),`
`,n(s.pre,{children:n(s.code,{children:`yarn add tailwindcss postcss autoprefixer -D
npx tailwindcss init
`})}),`
`,l(s.ol,{start:"2",children:[`
`,n(s.li,{children:"配置 tailwind.config 根据项目需要修改 content 内容"}),`
`]}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-variable language_",children:"module"}),".",n(s.span,{className:"hljs-property",children:"exports"}),` = {
  `,n(s.span,{className:"hljs-attr",children:"content"}),": [",n(s.span,{className:"hljs-string",children:"'./index.html'"}),", ",n(s.span,{className:"hljs-string",children:"'./src/**/*.{js,ts,jsx,tsx}'"}),`],
  `,n(s.span,{className:"hljs-attr",children:"theme"}),`: {
    `,n(s.span,{className:"hljs-attr",children:"extend"}),`: {},
  },
  `,n(s.span,{className:"hljs-attr",children:"plugins"}),`: [],
};
`]})}),`
`,l(s.ol,{start:"3",children:[`
`,n(s.li,{children:"配置 postcss.config.js"}),`
`]}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-variable language_",children:"module"}),".",n(s.span,{className:"hljs-property",children:"exports"}),` = {
  `,n(s.span,{className:"hljs-attr",children:"plugins"}),`: {
    `,n(s.span,{className:"hljs-attr",children:"tailwindcss"}),`: {},
    `,n(s.span,{className:"hljs-attr",children:"autoprefixer"}),`: {},
  },
};
`]})}),`
`,l(s.ol,{start:"4",children:[`
`,n(s.li,{children:"在主入口的 css 文件中引入"}),`
`]}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-css",children:[n(s.span,{className:"hljs-keyword",children:"@tailwind"}),` base;
`,n(s.span,{className:"hljs-keyword",children:"@tailwind"}),` components;
`,n(s.span,{className:"hljs-keyword",children:"@tailwind"}),` utilities;
`]})}),`
`,n(s.p,{children:"然后就可以在项目中使用啦 🎉 🎉 🎉"}),`
`,n(s.pre,{children:n(s.code,{children:`<div className="text-4xl">tailwind css</div>
`})}),`
`,n(s.p,{children:"具体的 css 属性对应的 tailwind 写法可以参考"}),`
`,l(s.blockquote,{children:[`
`,n(s.p,{children:n(s.a,{href:"https://tailwindcss.com/docs/installation",children:"https://tailwindcss.com/docs/installation"})}),`
`]})]})}function m(e={}){const{wrapper:s}=Object.assign({},c(),e.components);return s?n(s,Object.assign({},e,{children:n(a,e)})):a(e)}export{m as default,o as frontmatter};
