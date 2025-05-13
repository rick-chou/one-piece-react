import{u as c,j as n,a as e,F as r}from"./index-CjkvZd7K.js";import"./antd-DBIoRdLU.js";import"./lodash-BU0pYqsL.js";import"./prettier-DJQX7j1f.js";import"./chance-DnaHbaGl.js";const m={title:"React Quick Start - Webpack ｜ Vite ｜ Snowpack"};function a(l){const s=Object.assign({blockquote:"blockquote",p:"p",h2:"h2",h3:"h3",code:"code",a:"a",pre:"pre",span:"span",ul:"ul",li:"li",h4:"h4",img:"img"},c(),l.components);return e(r,{children:[e(s.blockquote,{children:[`
`,n(s.p,{children:"本篇记录一下手动搭建 React 项目过程中遇到的问题 项目分别借助当下热门 🔥 的 Webpack ｜ Vite ｜ Snowpack 来搭建"}),`
`]}),`
`,e(s.blockquote,{children:[`
`,n(s.p,{children:"需要的 vscode 插件 eslint ｜ prettier"}),`
`]}),`
`,n(s.h2,{children:"Webpack"}),`
`,n(s.h3,{children:"typescript"}),`
`,e(s.p,{children:["安装 ",n(s.code,{children:"typescript"})," 和 ",n(s.code,{children:"ts-loader"})]}),`
`,n(s.p,{children:"后者用作 webpack 的 loader 用于将 ts --> js 的转换"}),`
`,n(s.p,{children:"安装完后使用 npx tsc --init 生成 tsconfig.json 文件"}),`
`,n(s.p,{children:"我这里开启了部分的配置 具体的每一项配置 可参考官方文档的说明"}),`
`,e(s.blockquote,{children:[`
`,n(s.p,{children:n(s.a,{href:"https://aka.ms/tsconfig.json",children:"https://aka.ms/tsconfig.json"})}),`
`]}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-json",children:[n(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(s.span,{className:"hljs-attr",children:'"include"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"src"'}),n(s.span,{className:"hljs-punctuation",children:","})," ",n(s.span,{className:"hljs-string",children:'"types"'}),n(s.span,{className:"hljs-punctuation",children:"]"})," ",n(s.span,{className:"hljs-comment",children:"/*  */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"exclude"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"node_modules"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"compilerOptions"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n(s.span,{className:"hljs-attr",children:'"target"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"ESNEXT"'})," ",n(s.span,{className:"hljs-comment",children:"/* 直接输出为最新的 ES 标准 */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"module"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"ESNEXT"'})," ",n(s.span,{className:"hljs-comment",children:"/* 面向未来的 ESM 模块化 */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"lib"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"DOM"'}),n(s.span,{className:"hljs-punctuation",children:","})," ",n(s.span,{className:"hljs-string",children:'"DOM.Iterable"'}),n(s.span,{className:"hljs-punctuation",children:","})," ",n(s.span,{className:"hljs-string",children:'"ESNext"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"allowJs"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"false"})})," ",n(s.span,{className:"hljs-comment",children:"/* 不允许导入js文件 */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"jsx"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"react-jsx"'})," ",n(s.span,{className:"hljs-comment",children:"/* react17后 选择这个就好了 */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"outDir"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"./build"'})," ",n(s.span,{className:"hljs-comment",children:"/* 打包路径 */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"strict"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})})," ",n(s.span,{className:"hljs-comment",children:"/* 开启严格模式 */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"noImplicitAny"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})})," ",n(s.span,{className:"hljs-comment",children:"/* 不能用any类型 */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"moduleResolution"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"node"'})," ",n(s.span,{className:"hljs-comment",children:"/* 模块解析策略 这里我们使用node */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"baseUrl"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"./"'})," ",n(s.span,{className:"hljs-comment",children:"/* 配置根路径 比如下面的typeRoots和最上面的include exclude都会加上这个路径 */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"typeRoots"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),`
      `,n(s.span,{className:"hljs-string",children:'"node_modules/@types"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-string",children:'"types/*.d.ts"'}),`
    `,n(s.span,{className:"hljs-punctuation",children:"]"})," ",n(s.span,{className:"hljs-comment",children:"/* 默认会引入@types下的类型类型声明文件 可以配置这项加入一些自己定义的类型 */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"allowSyntheticDefaultImports"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})})," ",n(s.span,{className:"hljs-comment",children:"/* 即使一个模块没有默认导入 也可以使用默认导入 */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"esModuleInterop"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})})," ",n(s.span,{className:"hljs-comment",children:"/* https://zhuanlan.zhihu.com/p/148081795 */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"experimentalDecorators"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})})," ",n(s.span,{className:"hljs-comment",children:"/* 开启装饰器语法 */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"skipLibCheck"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"false"})})," ",n(s.span,{className:"hljs-comment",children:"/* 跳过所有.d.ts文件的类型检查 */"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"forceConsistentCasingInFileNames"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})}),`
  `,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n(s.p,{children:"我们新建一个 types 目录 可以定义一些我们想定义的类型 例如"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-comment",children:"/* Use this file to declare any custom file extensions for importing */"}),`
`,n(s.span,{className:"hljs-comment",children:"/* Use this folder to also add/extend a package d.ts file, if needed. */"}),`

`,n(s.span,{className:"hljs-comment",children:"/* CSS MODULES */"}),`
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.module.css'"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"classes"}),": { [",n(s.span,{className:"hljs-attr",children:"key"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),"]: ",n(s.span,{className:"hljs-built_in",children:"string"}),` };
  `,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"}),` classes;
}
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.module.scss'"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"classes"}),": { [",n(s.span,{className:"hljs-attr",children:"key"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),"]: ",n(s.span,{className:"hljs-built_in",children:"string"}),` };
  `,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"}),` classes;
}
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.module.sass'"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"classes"}),": { [",n(s.span,{className:"hljs-attr",children:"key"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),"]: ",n(s.span,{className:"hljs-built_in",children:"string"}),` };
  `,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"}),` classes;
}
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.module.less'"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"classes"}),": { [",n(s.span,{className:"hljs-attr",children:"key"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),"]: ",n(s.span,{className:"hljs-built_in",children:"string"}),` };
  `,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"}),` classes;
}
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.module.styl'"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"classes"}),": { [",n(s.span,{className:"hljs-attr",children:"key"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),"]: ",n(s.span,{className:"hljs-built_in",children:"string"}),` };
  `,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"}),` classes;
}

`,n(s.span,{className:"hljs-comment",children:"/* CSS */"}),`
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.css'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.scss'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.sass'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.less'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.styl'"}),`;

`,n(s.span,{className:"hljs-comment",children:"/* IMAGES */"}),`
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.svg'"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"ref"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"}),` ref;
}
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.bmp'"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"ref"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"}),` ref;
}
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.gif'"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"ref"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"}),` ref;
}
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.jpg'"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"ref"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"}),` ref;
}
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.jpeg'"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"ref"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"}),` ref;
}
`,n(s.span,{className:"hljs-keyword",children:"declare"})," ",n(s.span,{className:"hljs-variable language_",children:"module"})," ",n(s.span,{className:"hljs-string",children:"'*.png'"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"ref"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"}),` ref;
}

`,n(s.span,{className:"hljs-comment",children:"/* CUSTOM: ADD YOUR OWN HERE */"}),`
`]})}),`
`,n(s.h3,{children:"webpack"}),`
`,e(s.p,{children:["首先安装 ",n(s.code,{children:"webpack"})," ",n(s.code,{children:"webpack-cli"})," ",n(s.code,{children:"webpack-dev-server"})]}),`
`,e(s.ul,{children:[`
`,e(s.li,{children:[`
`,n(s.p,{children:"webpack webpack 核心功能"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"webpack-cli webpack 命令行"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"webpack-dev-server 开发环境使用 方便调试"}),`
`]}),`
`]}),`
`,e(s.p,{children:["然后新建一个 ",n(s.code,{children:"config"})," 文件夹 来编写 ",n(s.code,{children:"webpack"})," 的配置文件"]}),`
`,n(s.p,{children:"我们为开发环境和生产环境创建各自的配置文件"}),`
`,e(s.p,{children:["分别为 ",n(s.code,{children:"webpack.config.dev.js"})," 和 ",n(s.code,{children:"webpack.config.prod.js"})]}),`
`,e(s.p,{children:["因为项目中 css 我使用了 scss 所以提前安装下 ",n(s.code,{children:"sass"})," ",n(s.code,{children:"sass-loader"})," ",n(s.code,{children:"css-loader"})," ",n(s.code,{children:"style-loader"})]}),`
`,e(s.p,{children:["还有构建需要的 ",n(s.code,{children:"html-webpack-plugin"})," 和 ",n(s.code,{children:"clean-webpack-plugin"})]}),`
`,e(s.h4,{children:[n(s.code,{children:"webpack.config.dev.js"})," 的配置如下"]}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," path = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'path'"}),`);
`,n(s.span,{className:"hljs-comment",children:"// 生成html文件 自动引入打包后的js文件"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"HtmlWebpackPlugin"})," = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'html-webpack-plugin'"}),`);

`,n(s.span,{className:"hljs-keyword",children:"const"})," htmlWebpackPlugin = ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"HtmlWebpackPlugin"}),`({
  `,n(s.span,{className:"hljs-attr",children:"template"}),": path.",n(s.span,{className:"hljs-title function_",children:"resolve"}),"(__dirname, ",n(s.span,{className:"hljs-string",children:"'../public/index.html'"}),`),
});

`,n(s.span,{className:"hljs-variable language_",children:"module"}),".",n(s.span,{className:"hljs-property",children:"exports"}),` = {
  `,n(s.span,{className:"hljs-attr",children:"mode"}),": ",n(s.span,{className:"hljs-string",children:"'development'"}),`,
  `,n(s.span,{className:"hljs-attr",children:"entry"}),": path.",n(s.span,{className:"hljs-title function_",children:"resolve"}),"(__dirname, ",n(s.span,{className:"hljs-string",children:"'../src/index.tsx'"}),`),
  `,n(s.span,{className:"hljs-attr",children:"output"}),`: {
    `,n(s.span,{className:"hljs-attr",children:"path"}),": path.",n(s.span,{className:"hljs-title function_",children:"resolve"}),"(__dirname, ",n(s.span,{className:"hljs-string",children:"'../build'"}),`),
    `,n(s.span,{className:"hljs-attr",children:"filename"}),": ",n(s.span,{className:"hljs-string",children:"'js/[name].[hash].bundle.js'"}),`,
  },
  `,n(s.span,{className:"hljs-attr",children:"module"}),`: {
    `,n(s.span,{className:"hljs-comment",children:"// 由于我们是ts项目 所以直接借助ts-loader将文件编译成js 无需再使用babel转译"}),`
    `,n(s.span,{className:"hljs-attr",children:"rules"}),`: [
      {
        `,n(s.span,{className:"hljs-attr",children:"test"}),": ",n(s.span,{className:"hljs-regexp",children:"/\\.tsx?$/"}),`,
        `,n(s.span,{className:"hljs-attr",children:"use"}),": ",n(s.span,{className:"hljs-string",children:"'ts-loader'"}),`,
        `,n(s.span,{className:"hljs-attr",children:"exclude"}),": ",n(s.span,{className:"hljs-regexp",children:"/node_modules/"}),`,
      },
      `,n(s.span,{className:"hljs-comment",children:"// 配置scss环境 ⚠️注意 loader使用顺序为从右到左"}),`
      `,n(s.span,{className:"hljs-comment",children:"// 所以使用顺序为 sass-loader --> css-loader --> style-loader"}),`
      {
        `,n(s.span,{className:"hljs-attr",children:"test"}),": ",n(s.span,{className:"hljs-regexp",children:"/\\.s[ac]ss$/i"}),`,
        `,n(s.span,{className:"hljs-attr",children:"use"}),`: [
          `,n(s.span,{className:"hljs-comment",children:"// 将 JS 字符串生成为 style 节点"}),`
          `,n(s.span,{className:"hljs-string",children:"'style-loader'"}),`,
          `,n(s.span,{className:"hljs-comment",children:"// 将 CSS 转化成 CommonJS 模块"}),`
          `,n(s.span,{className:"hljs-string",children:"'css-loader'"}),`,
          `,n(s.span,{className:"hljs-comment",children:"// 将 Sass 编译成 CSS"}),`
          `,n(s.span,{className:"hljs-string",children:"'sass-loader'"}),`,
        ],
      },
    ],
  },

  `,n(s.span,{className:"hljs-attr",children:"plugins"}),`: [htmlWebpackPlugin],

  `,n(s.span,{className:"hljs-attr",children:"resolve"}),`: {
    `,n(s.span,{className:"hljs-attr",children:"extensions"}),": [",n(s.span,{className:"hljs-string",children:"'.tsx'"}),", ",n(s.span,{className:"hljs-string",children:"'.ts'"}),", ",n(s.span,{className:"hljs-string",children:"'.js'"}),`],
  },
};
`]})}),`
`,e(s.h4,{children:[n(s.code,{children:"webpack.config.prod.js"})," 配置如下"]}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," path = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'path'"}),`);
`,n(s.span,{className:"hljs-comment",children:"// 生成html文件 自动引入打包后的js文件"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"HtmlWebpackPlugin"})," = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'html-webpack-plugin'"}),`);
`,n(s.span,{className:"hljs-comment",children:"// 打包前 清理打包目录文件夹 因为打包后的文件带hash值 不会重名 所以不会覆盖 多次打包就会有很多bundle.js"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," { ",n(s.span,{className:"hljs-title class_",children:"CleanWebpackPlugin"})," } = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'clean-webpack-plugin'"}),`);

`,n(s.span,{className:"hljs-keyword",children:"const"})," htmlWebpackPlugin = ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"HtmlWebpackPlugin"}),`({
  `,n(s.span,{className:"hljs-attr",children:"template"}),": path.",n(s.span,{className:"hljs-title function_",children:"resolve"}),"(__dirname, ",n(s.span,{className:"hljs-string",children:"'../public/index.html'"}),`),
});

`,n(s.span,{className:"hljs-variable language_",children:"module"}),".",n(s.span,{className:"hljs-property",children:"exports"}),` = {
  `,n(s.span,{className:"hljs-attr",children:"mode"}),": ",n(s.span,{className:"hljs-string",children:"'production'"}),`,
  `,n(s.span,{className:"hljs-attr",children:"entry"}),": path.",n(s.span,{className:"hljs-title function_",children:"resolve"}),"(__dirname, ",n(s.span,{className:"hljs-string",children:"'../src/index.tsx'"}),`),
  `,n(s.span,{className:"hljs-attr",children:"output"}),`: {
    `,n(s.span,{className:"hljs-attr",children:"path"}),": path.",n(s.span,{className:"hljs-title function_",children:"resolve"}),"(__dirname, ",n(s.span,{className:"hljs-string",children:"'../build'"}),`),
    `,n(s.span,{className:"hljs-attr",children:"filename"}),": ",n(s.span,{className:"hljs-string",children:"'js/[name].[hash].bundle.js'"}),`,
  },
  `,n(s.span,{className:"hljs-attr",children:"module"}),`: {
    `,n(s.span,{className:"hljs-attr",children:"rules"}),`: [
      {
        `,n(s.span,{className:"hljs-attr",children:"test"}),": ",n(s.span,{className:"hljs-regexp",children:"/\\.tsx?$/"}),`,
        `,n(s.span,{className:"hljs-attr",children:"use"}),": ",n(s.span,{className:"hljs-string",children:"'ts-loader'"}),`,
        `,n(s.span,{className:"hljs-attr",children:"exclude"}),": ",n(s.span,{className:"hljs-regexp",children:"/node_modules/"}),`,
      },
      {
        `,n(s.span,{className:"hljs-attr",children:"test"}),": ",n(s.span,{className:"hljs-regexp",children:"/\\.s[ac]ss$/i"}),`,
        `,n(s.span,{className:"hljs-attr",children:"use"}),`: [
          `,n(s.span,{className:"hljs-comment",children:"// 将 JS 字符串生成为 style 节点"}),`
          `,n(s.span,{className:"hljs-string",children:"'style-loader'"}),`,
          `,n(s.span,{className:"hljs-comment",children:"// 将 CSS 转化成 CommonJS 模块"}),`
          `,n(s.span,{className:"hljs-string",children:"'css-loader'"}),`,
          `,n(s.span,{className:"hljs-comment",children:"// 将 Sass 编译成 CSS"}),`
          `,n(s.span,{className:"hljs-string",children:"'sass-loader'"}),`,
        ],
      },
    ],
  },

  `,n(s.span,{className:"hljs-attr",children:"plugins"}),": [htmlWebpackPlugin, ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"CleanWebpackPlugin"}),`()],

  `,n(s.span,{className:"hljs-attr",children:"resolve"}),`: {
    `,n(s.span,{className:"hljs-attr",children:"extensions"}),": [",n(s.span,{className:"hljs-string",children:"'.tsx'"}),", ",n(s.span,{className:"hljs-string",children:"'.ts'"}),", ",n(s.span,{className:"hljs-string",children:"'.js'"}),`],
  },
};
`]})}),`
`,e(s.p,{children:["因为没有涉及到太多的场景 我们的 prod 只比 dev 的多了一个 ",n(s.code,{children:"clean-webpack-plugin"})," 插件的配置"]}),`
`,n(s.p,{children:"随后新增 script 命令"}),`
`,n(s.pre,{children:n(s.code,{children:`"start": "webpack-dev-server --config  ./config/webpack.config.dev.js --open",
"build": "webpack --config ./config/webpack.config.prod.js",
`})}),`
`,e(s.p,{children:["你也可以使用 ",n(s.code,{children:"webpack-merge"})," 这个库去抽取一些通用的配置"]}),`
`,e(s.blockquote,{children:[`
`,n(s.p,{children:n(s.a,{href:"https://github.com/survivejs/webpack-merge",children:"https://github.com/survivejs/webpack-merge"})}),`
`]}),`
`,n(s.h3,{children:"eslint"}),`
`,n(s.p,{children:"eslint 可以校验我们的代码 生成统一的风格"}),`
`,n(s.p,{children:"首先安装 eslint 然后在使用 npx eslint --init 生成 eslint 的配置"}),`
`,n(s.p,{children:"下面为作者的一些选择"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-sh",children:[`? How would you like to use ESLint? …
  To check syntax only
  To check syntax and find problems
❯ To check syntax, find problems, and enforce code style

? What `,n(s.span,{className:"hljs-built_in",children:"type"}),` of modules does your project use? …
❯ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

? Which framework does your project use? …
❯ React
  Vue.js
  None of these

? Does your project use TypeScript?
❯ Yes
  No

? Where does your code run? …  (Press <space> to `,n(s.span,{className:"hljs-keyword",children:"select"}),`, <a> to toggle all, <i> to invert selection)
❯ Browser
  Node

? How would you like to define a style `,n(s.span,{className:"hljs-keyword",children:"for"}),` your project? …
❯ Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)

? Which style guide `,n(s.span,{className:"hljs-keyword",children:"do"}),` you want to follow? …
❯ Airbnb: https://github.com/airbnb/javascript
  Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google
  XO: https://github.com/xojs/eslint-config-xo

? What format `,n(s.span,{className:"hljs-keyword",children:"do"})," you want your config file to be ",n(s.span,{className:"hljs-keyword",children:"in"}),`? …
❯ JavaScript
  YAML
  JSON

Would you like to install them now with npm?
❯ Yes
  No
`]})}),`
`,e(s.p,{children:["做完这些后 项目的根目录下就会生成一个 ",n(s.code,{children:".eslintrc.js"})," 文件 内容如下"]}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-variable language_",children:"module"}),".",n(s.span,{className:"hljs-property",children:"exports"}),` = {
  `,n(s.span,{className:"hljs-attr",children:"env"}),`: {
    `,n(s.span,{className:"hljs-attr",children:"browser"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),`,
    `,n(s.span,{className:"hljs-attr",children:"es2021"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),`,
  },
  `,n(s.span,{className:"hljs-attr",children:"extends"}),": [",n(s.span,{className:"hljs-string",children:"'plugin:react/recommended'"}),", ",n(s.span,{className:"hljs-string",children:"'airbnb'"}),`],
  `,n(s.span,{className:"hljs-attr",children:"parser"}),": ",n(s.span,{className:"hljs-string",children:"'@typescript-eslint/parser'"}),`,
  `,n(s.span,{className:"hljs-attr",children:"parserOptions"}),`: {
    `,n(s.span,{className:"hljs-attr",children:"ecmaFeatures"}),`: {
      `,n(s.span,{className:"hljs-attr",children:"jsx"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),`,
    },
    `,n(s.span,{className:"hljs-attr",children:"ecmaVersion"}),": ",n(s.span,{className:"hljs-number",children:"12"}),`,
    `,n(s.span,{className:"hljs-attr",children:"sourceType"}),": ",n(s.span,{className:"hljs-string",children:"'module'"}),`,
  },
  `,n(s.span,{className:"hljs-attr",children:"plugins"}),": [",n(s.span,{className:"hljs-string",children:"'react'"}),", ",n(s.span,{className:"hljs-string",children:"'@typescript-eslint'"}),`],
  `,n(s.span,{className:"hljs-attr",children:"rules"}),`: {},
};
`]})}),`
`,n(s.p,{children:"同时 附上上述操作后新增的依赖"}),`
`,n(s.pre,{children:n(s.code,{children:`"@typescript-eslint/eslint-plugin": "^4.31.2",
"@typescript-eslint/parser": "^4.31.2",
"eslint": "^7.32.0",
"eslint-config-airbnb": "^18.2.1",
"eslint-plugin-import": "^2.24.2",
"eslint-plugin-jsx-a11y": "^6.4.1",
"eslint-plugin-react": "^7.26.0",
"eslint-plugin-react-hooks": "^4.2.0"
`})}),`
`,n(s.h3,{children:"prettier"}),`
`,e(s.p,{children:["安装 ",n(s.code,{children:"prettier"})," 新建一个 ",n(s.code,{children:"prettier.config.js"})," 文件 下面是我的一些配置"]}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-variable language_",children:"module"}),".",n(s.span,{className:"hljs-property",children:"exports"}),` = {
  `,n(s.span,{className:"hljs-attr",children:"printWidth"}),": ",n(s.span,{className:"hljs-number",children:"100"}),", ",n(s.span,{className:"hljs-comment",children:"// 单行长度"}),`
  `,n(s.span,{className:"hljs-attr",children:"tabWidth"}),": ",n(s.span,{className:"hljs-number",children:"2"}),", ",n(s.span,{className:"hljs-comment",children:"// 缩进长度"}),`
  `,n(s.span,{className:"hljs-attr",children:"useTabs"}),": ",n(s.span,{className:"hljs-literal",children:"false"}),", ",n(s.span,{className:"hljs-comment",children:"// 使用空格代替tab缩进"}),`
  `,n(s.span,{className:"hljs-attr",children:"semi"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),", ",n(s.span,{className:"hljs-comment",children:"// 句末使用分号"}),`
  `,n(s.span,{className:"hljs-attr",children:"singleQuote"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),", ",n(s.span,{className:"hljs-comment",children:"// 使用单引号"}),`
  `,n(s.span,{className:"hljs-attr",children:"quoteProps"}),": ",n(s.span,{className:"hljs-string",children:"'as-needed'"}),", ",n(s.span,{className:"hljs-comment",children:"// 仅在必需时为对象的key添加引号"}),`
  `,n(s.span,{className:"hljs-attr",children:"jsxSingleQuote"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),", ",n(s.span,{className:"hljs-comment",children:"// jsx中使用单引号"}),`
  `,n(s.span,{className:"hljs-attr",children:"trailingComma"}),": ",n(s.span,{className:"hljs-string",children:"'all'"}),", ",n(s.span,{className:"hljs-comment",children:"// 多行时尽可能打印尾随逗号"}),`
  `,n(s.span,{className:"hljs-attr",children:"bracketSpacing"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),", ",n(s.span,{className:"hljs-comment",children:"// 在对象前后添加空格-eg: { foo: bar }"}),`
  `,n(s.span,{className:"hljs-attr",children:"arrowParens"}),": ",n(s.span,{className:"hljs-string",children:"'always'"}),", ",n(s.span,{className:"hljs-comment",children:"// 单参数箭头函数参数周围使用圆括号-eg: (x) => x"}),`
  `,n(s.span,{className:"hljs-attr",children:"requirePragma"}),": ",n(s.span,{className:"hljs-literal",children:"false"}),", ",n(s.span,{className:"hljs-comment",children:"// 无需顶部注释即可格式化"}),`
  `,n(s.span,{className:"hljs-attr",children:"insertPragma"}),": ",n(s.span,{className:"hljs-literal",children:"false"}),", ",n(s.span,{className:"hljs-comment",children:"// 在已被prettier格式化的文件顶部加上标注"}),`
  `,n(s.span,{className:"hljs-attr",children:"htmlWhitespaceSensitivity"}),": ",n(s.span,{className:"hljs-string",children:"'ignore'"}),", ",n(s.span,{className:"hljs-comment",children:"// 对HTML全局空白不敏感"}),`
  `,n(s.span,{className:"hljs-attr",children:"endOfLine"}),": ",n(s.span,{className:"hljs-string",children:"'lf'"}),", ",n(s.span,{className:"hljs-comment",children:"// 结束行形式"}),`
  `,n(s.span,{className:"hljs-attr",children:"embeddedLanguageFormatting"}),": ",n(s.span,{className:"hljs-string",children:"'auto'"}),", ",n(s.span,{className:"hljs-comment",children:"// 对引用代码进行格式化"}),`
};
`]})}),`
`,n(s.p,{children:"随后 写入一个 script 命令"}),`
`,n(s.pre,{children:n(s.code,{children:`"format": "prettier --write \\"src/**/*.{js,jsx,ts,tsx}\\""
`})}),`
`,n(s.p,{children:"执行这个命令 就可以格式化所有的代码 按照上述的规则"}),`
`,n(s.p,{children:"到此 我们的基本配置结束 随后安装必须的 react react-dom"}),`
`,n(s.p,{children:"然后创建如下的项目目录"}),`
`,n(s.pre,{children:n(s.code,{children:`webpack
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc.config.js
├─ config
│  ├─ webpack.config.dev.js
│  └─ webpack.config.prod.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ index.html
│  └─ pic.jpg
├─ src
│  ├─ app.module.scss
│  ├─ app.tsx
│  └─ index.tsx
├─ tsconfig.json
├─ types
│  └─ static.d.ts
└─ yarn.lock
`})}),`
`,n(s.h3,{children:"FAQ"}),`
`,n(s.p,{children:"然而 当你还没启动项目的时候 离谱的事情就发生了"}),`
`,n(s.h4,{children:"Cannot find module './app.module.scss' or its corresponding type declarations."}),`
`,n(s.p,{children:"原因很简单 ts 不能把 app.module.scss 当成一个模块"}),`
`,n(s.p,{children:"而且我们也没有为它编写一个类型声明文件"}),`
`,n(s.p,{children:"解决的方法有两种"}),`
`,n(s.p,{children:"第一种是为每一个 scss 文件编写.d.ts 声明文件"}),`
`,n(s.p,{children:"例如我们的 app.module.scss 有如下内容"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-scss",children:[n(s.span,{className:"hljs-selector-class",children:".container"}),` {
  `,n(s.span,{className:"hljs-attribute",children:"color"}),`: skyblue;
  `,n(s.span,{className:"hljs-attribute",children:"display"}),`: flex;
  `,n(s.span,{className:"hljs-attribute",children:"justify-content"}),`: center;
  `,n(s.span,{className:"hljs-attribute",children:"align-items"}),`: center;
  `,n(s.span,{className:"hljs-attribute",children:"font-size"}),": ",n(s.span,{className:"hljs-number",children:"66px"}),`;
  `,n(s.span,{className:"hljs-attribute",children:"height"}),": ",n(s.span,{className:"hljs-number",children:"90vh"}),`;
}
`]})}),`
`,n(s.p,{children:"我们就可以编写一个 app.module.scss.d.ts 文件 为每一个选择器声明类型"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"container"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
`]})}),`
`,n(s.p,{children:"这样就消除这个报错了 而且在引入的时候 会有友善的代码提示"}),`
`,n(s.p,{children:"第二种 是为 scss 文件编写全局的声明文件 我们在上面 ts 那一部分创建了 types 文件"}),`
`,n(s.p,{children:"里面就有我们对 scss 这些类型文件的定义"}),`
`,n(s.p,{children:"我们只需要在 tsconfig.json 中配置 typeRoots 把我们的 types 加进去就好了"}),`
`,n(s.pre,{children:n(s.code,{children:`"typeRoots": ["node_modules/@types", "types/*.d.ts"]
`})}),`
`,n(s.h4,{children:"eslint"}),`
`,n(s.p,{children:"eslint 也会有很多不兼容的地方"}),`
`,n(s.p,{children:"例如 我们的项目是 React17 版本 不必再引入 React 但是 eslint 会报错"}),`
`,n(s.p,{children:"然后一些等等的问题 我在下面罗列了"}),`
`,n(s.p,{children:"在.eslintrc.js 的 rules 中加入如下配置"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[`{
`,n(s.span,{className:"hljs-comment",children:"// 解决 JSX not allowed in files with extension '.tsx' 为tsx文件开启jsx语法"}),`
`,n(s.span,{className:"hljs-string",children:"'react/jsx-filename-extension'"}),": [",n(s.span,{className:"hljs-number",children:"2"}),", { ",n(s.span,{className:"hljs-attr",children:"extensions"}),": [",n(s.span,{className:"hljs-string",children:"'.js'"}),", ",n(s.span,{className:"hljs-string",children:"'.jsx'"}),", ",n(s.span,{className:"hljs-string",children:"'.ts'"}),", ",n(s.span,{className:"hljs-string",children:"'.tsx'"}),`] }],
`,n(s.span,{className:"hljs-comment",children:"// 解决 'React' must be in scope when using JSX 但是17后不必再引入 所以关闭这条规则"}),`
`,n(s.span,{className:"hljs-string",children:"'react/react-in-jsx-scope'"}),": ",n(s.span,{className:"hljs-string",children:"'off'"}),`,
`,n(s.span,{className:"hljs-comment",children:"// 解决 'React' was used before it was defined"}),`
`,n(s.span,{className:"hljs-string",children:"'@typescript-eslint/no-use-before-define'"}),": [",n(s.span,{className:"hljs-string",children:"'error'"}),`],
`,n(s.span,{className:"hljs-string",children:"'no-use-before-define'"}),": ",n(s.span,{className:"hljs-string",children:"'off'"}),`,
`,n(s.span,{className:"hljs-comment",children:`// 解决 Missing file extension "tsx" for 'xxx'`}),`
`,n(s.span,{className:"hljs-string",children:"'import/extensions'"}),`: [
  `,n(s.span,{className:"hljs-string",children:"'error'"}),`,
  `,n(s.span,{className:"hljs-string",children:"'ignorePackages'"}),`,
  {
    `,n(s.span,{className:"hljs-attr",children:"ts"}),": ",n(s.span,{className:"hljs-string",children:"'never'"}),`,
    `,n(s.span,{className:"hljs-attr",children:"tsx"}),": ",n(s.span,{className:"hljs-string",children:"'never'"}),`,
  },
],
`,n(s.span,{className:"hljs-comment",children:"// 关闭默认导出 .d.ts中会报错"}),`
`,n(s.span,{className:"hljs-string",children:"'import/prefer-default-export'"}),": ",n(s.span,{className:"hljs-string",children:"'off'"}),`,
},
`]})}),`
`,n(s.h3,{children:"yarn start 🎉 🎉 🎉 🎉 🎉"}),`
`,n(s.h2,{children:"Vite"}),`
`,n(s.h3,{children:"typescript"}),`
`,e(s.p,{children:["ts 安装 ",n(s.code,{children:"typescript"})," 就好了 不需要 loader 了 配置同上"]}),`
`,n(s.h3,{children:"scss"}),`
`,n(s.p,{children:"安装 sass 也不需要其他的 loader 了"}),`
`,n(s.h3,{children:"eslint ｜ prettier 同上"}),`
`,n(s.h3,{children:"vite"}),`
`,e(s.p,{children:["安装 ",n(s.code,{children:"vite"})," ",n(s.code,{children:"@vitejs/plugin-react"})]}),`
`,e(s.p,{children:["在根目录下新建 ",n(s.code,{children:"vite.config.ts"})]}),`
`,n(s.p,{children:"内容如下"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"import"})," { defineConfig } ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'vite'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"import"})," react ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:"'@vitejs/plugin-react'"}),`;
`,n(s.span,{className:"hljs-comment",children:"// https://vitejs.dev/config/"}),`
`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"})," ",n(s.span,{className:"hljs-title function_",children:"defineConfig"}),`({
  `,n(s.span,{className:"hljs-attr",children:"plugins"}),": [",n(s.span,{className:"hljs-title function_",children:"react"}),`()],
});
`]})}),`
`,n(s.p,{children:"package.json 中写入 script"}),`
`,n(s.pre,{children:n(s.code,{children:`"dev": "vite",
"build": "tsc && vite build",
"serve": "vite preview",
`})}),`
`,n(s.h3,{children:"FAQ 同上"}),`
`,n(s.h3,{children:"yarn dev 🎉 🎉 🎉 🎉 🎉"}),`
`,n(s.h2,{children:"Snowpack"}),`
`,n(s.h3,{children:"snowpack"}),`
`,n(s.p,{children:"其他的基础配置都类似 这里不再赘述"}),`
`,n(s.p,{children:"snowpack 有自己的生态 首先安装以下的包"}),`
`,e(s.ul,{children:[`
`,e(s.li,{children:[`
`,n(s.p,{children:"snowpack"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"@snowpack/plugin-sass"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"@snowpack/plugin-react-refresh"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"@snowpack/plugin-typescript"}),`
`]}),`
`]}),`
`,n(s.p,{children:"通过名称 大致就可以知道它们各自的功能"}),`
`,e(s.p,{children:["snowpack 有自己的配置文件 ",n(s.code,{children:"snowpack.config.mjs"})]}),`
`,n(s.p,{children:"详细的配置参考官方"}),`
`,e(s.blockquote,{children:[`
`,n(s.p,{children:n(s.a,{href:"https://www.snowpack.dev/reference/configuration",children:"https://www.snowpack.dev/reference/configuration"})}),`
`]}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-mjs",children:[e(s.span,{className:"hljs-comment",children:["/** ",n(s.span,{className:"hljs-doctag",children:"@type"})," {",n(s.span,{className:"hljs-type",children:'import("snowpack").SnowpackUserConfig '}),"} */"]}),`
`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"default"}),` {
  `,n(s.span,{className:"hljs-attr",children:"mount"}),`: {
    `,n(s.span,{className:"hljs-comment",children:"// 静态资源路径"}),`
    `,n(s.span,{className:"hljs-attr",children:"public"}),": { ",n(s.span,{className:"hljs-attr",children:"url"}),": ",n(s.span,{className:"hljs-string",children:"'/'"}),", ",n(s.span,{className:"hljs-attr",children:"static"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),` },
    `,n(s.span,{className:"hljs-comment",children:"// 打包路径"}),`
    `,n(s.span,{className:"hljs-attr",children:"src"}),": { ",n(s.span,{className:"hljs-attr",children:"url"}),": ",n(s.span,{className:"hljs-string",children:"'/dist'"}),` },
  },
  `,n(s.span,{className:"hljs-comment",children:"// 配置一些插件"}),`
  `,n(s.span,{className:"hljs-attr",children:"plugins"}),`: [
    `,n(s.span,{className:"hljs-string",children:"'@snowpack/plugin-sass'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'@snowpack/plugin-react-refresh'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'@snowpack/plugin-typescript'"}),`,
  ],
};
`]})}),`
`,n(s.h3,{children:"yarn start 🎉 🎉 🎉 🎉 🎉"}),`
`,n(s.p,{children:"package.json 添加 script"}),`
`,n(s.pre,{children:n(s.code,{children:`"start": "snowpack dev",
"build": "snowpack build",
`})}),`
`,n(s.h2,{children:"Git"}),`
`,n(s.p,{children:"这里再补充一下对 git 提交信息的管控"}),`
`,e(s.p,{children:["我们需要引入 ",n(s.code,{children:"husky"})," ",n(s.code,{children:"lint-staged"})," 和 ",n(s.code,{children:"commit-lint"})]}),`
`,n(s.pre,{children:n(s.code,{className:"hljs language-sh",children:`yarn add -D husky lint-staged @commitlint/config-conventional @commitlint/cli cz-conventional-changelog
`})}),`
`,e(s.p,{children:["接下来我们要添加 ",n(s.code,{children:".lintstagedrc.json"})]}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-json",children:[n(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(s.span,{className:"hljs-attr",children:'"*.{js,jsx,ts,tsx}"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"eslint --cache"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),`
`,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,e(s.p,{children:["接下来添加 ",n(s.code,{children:"commitlint.config.js"})]}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-variable language_",children:"module"}),".",n(s.span,{className:"hljs-property",children:"exports"})," = { ",n(s.span,{className:"hljs-attr",children:"extends"}),": [",n(s.span,{className:"hljs-string",children:"'@commitlint/config-conventional'"}),`] };
`]})}),`
`,n(s.p,{children:"最后执行如下命令"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-sh",children:["npm set-script prepare ",n(s.span,{className:"hljs-string",children:'"husky install"'}),`
npm run prepare

npx husky add .husky/pre-commit `,n(s.span,{className:"hljs-string",children:'"npx --no-install lint-staged"'}),`
npx husky add .husky/commit-msg `,n(s.span,{className:"hljs-string",children:`'npx --no-install commitlint --edit "$1"'`}),`
`]})}),`
`,n(s.p,{children:"执行完毕后将.husky/commit-msg 内容修改如下"}),`
`,n(s.pre,{children:n(s.code,{children:`#!/bin/sh
. "$(dirname "$0")/\\_/husky.sh"

npx --no-install commitlint --edit "$1"
`})}),`
`,n(s.p,{children:"package.json 中添加"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-json",children:[n(s.span,{className:"hljs-attr",children:'"scripts"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(s.span,{className:"hljs-attr",children:'"commit"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"./node_modules/.bin/git-cz"'}),`
`,n(s.span,{className:"hljs-punctuation",children:"}"}),n(s.span,{className:"hljs-punctuation",children:","}),`
`]})}),`
`,n(s.p,{children:"至此 我们可以使用 yarn commit 的方式 提交 commit"}),`
`,n(s.p,{children:n(s.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6bf5a9337c004f398d8e6f92a526b34f~tplv-k3u1fbpfcp-zoom-1.image",alt:""})}),`
`,n(s.p,{children:"也可以使用 git commit -m xxx 的形式"}),`
`,n(s.p,{children:"一但你的 commit 不规范 就会抛出异常"}),`
`,n(s.p,{children:n(s.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0fa3dcefcd44e38a62378d49f6db906~tplv-k3u1fbpfcp-zoom-1.image",alt:""})}),`
`,n(s.h2,{children:"🎉 🎉 🎉"})]})}function o(l={}){const{wrapper:s}=Object.assign({},c(),l.components);return s?n(s,Object.assign({},l,{children:n(a,l)})):a(l)}export{o as default,m as frontmatter};
