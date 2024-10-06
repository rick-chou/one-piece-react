import{u as e,j as n,a,F as h}from"./index-75676da6.js";import"./antd-4d5318cf.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const d={title:"React Quick Start - CRA Config"};function c(l){const s=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",ul:"ul",li:"li",pre:"pre",span:"span"},e(),l.components);return a(h,{children:[n(s.h2,{children:"配置 cra"}),`
`,a(s.p,{children:["当我们使用 ",n(s.code,{children:"cra"})," 脚手架搭建我们的项目时如果需要配置 ",n(s.code,{children:"webpack"})," 又不想运行 ",n(s.code,{children:"eject"})," 命令"]}),`
`,a(s.p,{children:["因为该命令是不可逆的 会暴露出所有的 ",n(s.code,{children:"webpack"})," 配置 这时该怎么办呢"]}),`
`,n(s.h3,{children:"Step1"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"安装 customize-cra react-app-rewired"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"yarn add customize-cra react-app-rewired -D"}),`
`]}),`
`]}),`
`,n(s.h3,{children:"Step2"}),`
`,a(s.p,{children:["根目录下新建",n(s.code,{children:"config-overrides.js"})," 内容如下 以配置路径别名为例子"]}),`
`,a(s.p,{children:["更多功能","可参考"]}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," { override, addWebpackAlias } = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'customize-cra'"}),`);
`,n(s.span,{className:"hljs-keyword",children:"const"})," path = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'path'"}),`);

`,n(s.span,{className:"hljs-variable language_",children:"module"}),".",n(s.span,{className:"hljs-property",children:"exports"})," = ",n(s.span,{className:"hljs-title function_",children:"override"}),`(
  `,n(s.span,{className:"hljs-comment",children:'// add an alias for "ag-grid-react" imports'}),`
  `,n(s.span,{className:"hljs-title function_",children:"addWebpackAlias"}),`({
    `,n(s.span,{className:"hljs-string",children:"'@'"}),": path.",n(s.span,{className:"hljs-title function_",children:"resolve"}),"(__dirname, ",n(s.span,{className:"hljs-string",children:"'./src'"}),`),
    `,n(s.span,{className:"hljs-string",children:"'@store'"}),": ",n(s.span,{className:"hljs-string",children:"'@/store'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'@components'"}),": ",n(s.span,{className:"hljs-string",children:"'@/components'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'@containers'"}),": ",n(s.span,{className:"hljs-string",children:"'@/containers'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'@hooks'"}),": ",n(s.span,{className:"hljs-string",children:"'@/hooks'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'@router'"}),": ",n(s.span,{className:"hljs-string",children:"'@/router'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'@type'"}),": ",n(s.span,{className:"hljs-string",children:"'@/type'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'@utils'"}),": ",n(s.span,{className:"hljs-string",children:"'@/utils'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'@styles'"}),": ",n(s.span,{className:"hljs-string",children:"'@/styles'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'@assets'"}),": ",n(s.span,{className:"hljs-string",children:"'@/assets'"}),`,
  }),
);
`]})}),`
`,n(s.h3,{children:"Step3"}),`
`,a(s.p,{children:["配置",n(s.code,{children:"tsconfig.json"})]}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-json",children:[n(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(s.span,{className:"hljs-attr",children:'"compilerOptions"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n(s.span,{className:"hljs-attr",children:'"baseUrl"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"."'}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"paths"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n(s.span,{className:"hljs-attr",children:'"@/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@store/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/store/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@components/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/components/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@router/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/router/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@hooks/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/hooks/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@containers/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/containers/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@type/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/type/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@utils/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/utils/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@styles/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/styles/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@assets/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/assets/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@mock/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/mock/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),`
    `,n(s.span,{className:"hljs-punctuation",children:"}"}),`
    `,n(s.span,{className:"hljs-attr",children:'"target"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"es5"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"lib"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),`
      `,n(s.span,{className:"hljs-string",children:'"dom"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-string",children:'"dom.iterable"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-string",children:'"esnext"'}),`
    `,n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"allowJs"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"skipLibCheck"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"esModuleInterop"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"allowSyntheticDefaultImports"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"strict"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"forceConsistentCasingInFileNames"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"noFallthroughCasesInSwitch"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"module"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"esnext"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"moduleResolution"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"node"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"resolveJsonModule"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"isolatedModules"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"noEmit"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"jsx"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"react-jsx"'}),`
  `,n(s.span,{className:"hljs-punctuation",children:"}"}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"include"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),`
    `,n(s.span,{className:"hljs-string",children:'"src"'}),`
  `,n(s.span,{className:"hljs-punctuation",children:"]"}),`
`,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,a(s.p,{children:["但是每次程序运行时 ",n(s.code,{children:"tsconfig.json"})," 都会被重新生成 我们配置的 paths 会消失"]}),`
`,a(s.p,{children:["可以用",n(s.code,{children:"extends"}),"字段 配置如下"]}),`
`,a(s.p,{children:["新建 ",n(s.code,{children:"path.json"})," 里面放入我们的路径配置"]}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-json",children:[n(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(s.span,{className:"hljs-attr",children:'"compilerOptions"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n(s.span,{className:"hljs-attr",children:'"baseUrl"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"."'}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"paths"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n(s.span,{className:"hljs-attr",children:'"@/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@store/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/store/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@components/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/components/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@router/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/router/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@hooks/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/hooks/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@containers/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/containers/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@type/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/type/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@utils/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/utils/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@styles/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/styles/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@assets/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/assets/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"@mock/*"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"./src/mock/*"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),`
    `,n(s.span,{className:"hljs-punctuation",children:"}"}),`
  `,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,a(s.p,{children:["然后修改 ",n(s.code,{children:"tsconfig.json"})]}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-json",children:[n(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(s.span,{className:"hljs-attr",children:'"extends"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"./path.json"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"compilerOptions"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"{"}),"......",n(s.span,{className:"hljs-punctuation",children:"}"}),`
`,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n(s.h3,{children:"Step4"}),`
`,a(s.p,{children:["将",n(s.code,{children:"package.json"}),"中 scripts 字段下的所有 ",n(s.code,{children:"react-scripts"})," 命令改成 ",n(s.code,{children:"react-app-rewired"})," 如下"]}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-string",children:'"scripts"'}),`: {
    `,n(s.span,{className:"hljs-string",children:'"start"'}),": ",n(s.span,{className:"hljs-string",children:'"react-app-rewired start"'}),`,
    `,n(s.span,{className:"hljs-string",children:'"build"'}),": ",n(s.span,{className:"hljs-string",children:'"react-app-rewired build"'}),`,
    `,n(s.span,{className:"hljs-string",children:'"test"'}),": ",n(s.span,{className:"hljs-string",children:'"react-app-rewired test"'}),`,
    `,n(s.span,{className:"hljs-string",children:'"eject"'}),": ",n(s.span,{className:"hljs-string",children:'"react-app-rewired eject"'}),`
  },
`]})})]})}function u(l={}){const{wrapper:s}=Object.assign({},e(),l.components);return s?n(s,Object.assign({},l,{children:n(c,l)})):c(l)}export{u as default,d as frontmatter};
