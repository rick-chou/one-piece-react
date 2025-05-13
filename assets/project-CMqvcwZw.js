import{u as c,j as s,a,F as i}from"./index-CjkvZd7K.js";import"./antd-DBIoRdLU.js";import"./lodash-BU0pYqsL.js";import"./prettier-DJQX7j1f.js";import"./chance-DnaHbaGl.js";const o={title:"Angular Quick Start - Project"};function e(l){const n=Object.assign({p:"p",blockquote:"blockquote",a:"a",code:"code",h3:"h3",pre:"pre",span:"span",ol:"ol",li:"li",img:"img"},c(),l.components);return a(i,{children:[s(n.p,{children:"由于最近工作的转变 技术栈也由 React 向 Angular 进行了切换"}),`
`,s(n.p,{children:"用了两/三个月的 Angular 打算写一些文章 也好有个积累"}),`
`,s(n.p,{children:"具体的用法官方文档那边都很详细了"}),`
`,a(n.blockquote,{children:[`
`,s(n.p,{children:s(n.a,{href:"https://angular.io/",children:"https://angular.io/"})}),`
`]}),`
`,a(n.blockquote,{children:[`
`,s(n.p,{children:s(n.a,{href:"https://angular.cn/",children:"https://angular.cn/"})}),`
`]}),`
`,s(n.p,{children:"我这边主要是从业务出发 写一些能快速上手/结合业务的用法"}),`
`,s(n.p,{children:"后续在业务中遇到的问题 我都会抽象出来记录在这里"}),`
`,a(n.blockquote,{children:[`
`,a(n.p,{children:["ps 我会一直维护这个教学项目 ",s(n.a,{href:"https://github.com/rick-chou/angular-tutorial",children:"https://github.com/rick-chou/angular-tutorial"})]}),`
`]}),`
`,a(n.p,{children:["下面进入正题 这节主要介绍 ",s(n.code,{children:"Angular"})," 的项目配置"]}),`
`,s(n.h3,{children:"初始化 Angular 项目"}),`
`,s(n.p,{children:"首先安装 Angular CLI"}),`
`,s(n.pre,{children:s(n.code,{className:"hljs language-sh",children:`npm install -g @angular/cli
`})}),`
`,a(n.p,{children:["然后运行 ",s(n.code,{children:"ng new xxx"})," 就可以快速创建一个 angular 项目了"]}),`
`,s(n.h3,{children:"引入 eslint"}),`
`,a(n.blockquote,{children:[`
`,a(n.p,{children:["参考 ",s(n.a,{href:"https://github.com/angular-eslint/angular-eslint",children:"https://github.com/angular-eslint/angular-eslint"})]}),`
`]}),`
`,a(n.p,{children:["执行 ",s(n.code,{children:"ng add @angular-eslint/schematics"})," 就好了"]}),`
`,a(n.p,{children:["下面我主要介绍两个文件 一个是 ",s(n.code,{children:"angular.json"})," 还有一个是 ",s(n.code,{children:"environment"})," 文件"]}),`
`,s(n.h3,{children:"angular.json"}),`
`,s(n.p,{children:"这是 angular 项目的配置文件 我摘取了一些比较重要的配置"}),`
`,s(n.pre,{children:a(n.code,{className:"hljs language-json",children:[s(n.span,{className:"hljs-attr",children:'"architect"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-punctuation",children:"{"}),`
  `,s(n.span,{className:"hljs-attr",children:'"build"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,s(n.span,{className:"hljs-attr",children:'"builder"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-string",children:'"@angular-devkit/build-angular:browser"'}),s(n.span,{className:"hljs-punctuation",children:","}),`
    `,s(n.span,{className:"hljs-attr",children:'"configurations"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-punctuation",children:"{"}),`
      `,s(n.span,{className:"hljs-attr",children:'"production"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-punctuation",children:"{"}),`
        `,s(n.span,{className:"hljs-comment",children:"// ..."}),`
      `,s(n.span,{className:"hljs-punctuation",children:"}"}),s(n.span,{className:"hljs-punctuation",children:","}),`
      `,s(n.span,{className:"hljs-attr",children:'"development"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-punctuation",children:"{"}),`
        `,s(n.span,{className:"hljs-comment",children:"// ..."}),`
      `,s(n.span,{className:"hljs-punctuation",children:"}"}),`
    `,s(n.span,{className:"hljs-punctuation",children:"}"}),s(n.span,{className:"hljs-punctuation",children:","}),`
    `,s(n.span,{className:"hljs-attr",children:'"defaultConfiguration"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-string",children:'"production"'}),`
  `,s(n.span,{className:"hljs-punctuation",children:"}"}),s(n.span,{className:"hljs-punctuation",children:","}),`
  `,s(n.span,{className:"hljs-attr",children:'"serve"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,s(n.span,{className:"hljs-attr",children:'"builder"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-string",children:'"@angular-devkit/build-angular:dev-server"'}),s(n.span,{className:"hljs-punctuation",children:","}),`
    `,s(n.span,{className:"hljs-attr",children:'"configurations"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-punctuation",children:"{"}),`
      `,s(n.span,{className:"hljs-attr",children:'"production"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-punctuation",children:"{"}),`
        `,s(n.span,{className:"hljs-attr",children:'"browserTarget"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-string",children:'"ng-tutorial:build:production"'}),`
      `,s(n.span,{className:"hljs-punctuation",children:"}"}),s(n.span,{className:"hljs-punctuation",children:","}),`
      `,s(n.span,{className:"hljs-attr",children:'"development"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-punctuation",children:"{"}),`
        `,s(n.span,{className:"hljs-attr",children:'"browserTarget"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-string",children:'"ng-tutorial:build:development"'}),`
      `,s(n.span,{className:"hljs-punctuation",children:"}"}),`
    `,s(n.span,{className:"hljs-punctuation",children:"}"}),s(n.span,{className:"hljs-punctuation",children:","}),`
    `,s(n.span,{className:"hljs-attr",children:'"defaultConfiguration"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-string",children:'"development"'}),`
  `,s(n.span,{className:"hljs-punctuation",children:"}"}),s(n.span,{className:"hljs-punctuation",children:","}),`
  `,s(n.span,{className:"hljs-attr",children:'"test"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,s(n.span,{className:"hljs-attr",children:'"builder"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-string",children:'"@angular-devkit/build-angular:karma"'}),s(n.span,{className:"hljs-punctuation",children:","}),`
  `,s(n.span,{className:"hljs-punctuation",children:"}"}),`
`,s(n.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,s(n.p,{children:"这是 package.json 中的配置 可以对照着来看"}),`
`,s(n.pre,{children:a(n.code,{className:"hljs language-json",children:[s(n.span,{className:"hljs-attr",children:'"scripts"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-punctuation",children:"{"}),`
  `,s(n.span,{className:"hljs-attr",children:'"ng"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-string",children:'"ng"'}),s(n.span,{className:"hljs-punctuation",children:","}),`
  `,s(n.span,{className:"hljs-attr",children:'"start"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-string",children:'"ng serve"'}),s(n.span,{className:"hljs-punctuation",children:","}),`
  `,s(n.span,{className:"hljs-attr",children:'"build"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-string",children:'"ng build"'}),s(n.span,{className:"hljs-punctuation",children:","}),`
  `,s(n.span,{className:"hljs-attr",children:'"watch"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-string",children:'"ng build --watch --configuration development"'}),s(n.span,{className:"hljs-punctuation",children:","}),`
  `,s(n.span,{className:"hljs-attr",children:'"test"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-string",children:'"ng test"'}),`
`,s(n.span,{className:"hljs-punctuation",children:"}"}),s(n.span,{className:"hljs-punctuation",children:","}),`
`]})}),`
`,s(n.p,{children:"可以看到 start / build / test 这三个命令和 angular.json 中 architect 下的三个字段是对应上的"}),`
`,s(n.p,{children:"这就是这三个字段就是启动命令的一些配置信息"}),`
`,s(n.p,{children:"一般的我们的项目 通常有 development / production 两个环境"}),`
`,s(n.p,{children:"当我们启动项目的时候通常会走命令配置告诉项目用哪个配置"}),`
`,a(n.p,{children:["我们可以在命令行中输入 ",s(n.code,{children:"ng serve --help"})]}),`
`,s(n.p,{children:"然后你会看到这个命令中有一个 option 是 -c, --configuration"}),`
`,s(n.pre,{children:s(n.code,{className:"hljs language-text",children:` -c, --configuration       One or more named builder configurations as a comma-separated list as specified in the
                            "configurations" section in angular.json.
                            The builder uses the named configurations to run the given target.
                            For more information, see
                            https://angular.io/guide/workspace-config#alternate-build-configurations.
`})}),`
`,a(n.p,{children:["所以我们启动项目的时候 其实应该是 ",s(n.code,{children:"ng server -c development"})," 启动 dev mode 或者是 ",s(n.code,{children:"ng server -c production"})," 启动 prod mode"]}),`
`,s(n.p,{children:"但是我们看到 script 中的命令并没有带上任何 option 来指定环境"}),`
`,a(n.p,{children:["这时候再看会 ",s(n.code,{children:"angular.json"})," 可以看到在每一个指令的 Object 下都有一个 ",s(n.code,{children:"defaultConfiguration"})," 来指定默认的 option"]}),`
`,a(n.p,{children:["所以开发环境的 ",s(n.code,{children:"ng server"})," 默认启用的是 development 模式 而构建项目的 ",s(n.code,{children:"ng build"})," 则默认是 production 模式"]}),`
`,s(n.p,{children:"注意 -c 后面的字段要和 angular.json 中的字段对齐 不能想当然的简写成 dev"}),`
`,s(n.h3,{children:"environment"}),`
`,a(n.p,{children:["同样的也是 ",s(n.code,{children:"angular.json"})," 中的配置 我们看到有一条是"]}),`
`,s(n.pre,{children:a(n.code,{className:"hljs language-json",children:[s(n.span,{className:"hljs-attr",children:'"production"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-punctuation",children:"{"}),`
  `,s(n.span,{className:"hljs-attr",children:'"fileReplacements"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-punctuation",children:"["}),`
    `,s(n.span,{className:"hljs-punctuation",children:"{"}),`
      `,s(n.span,{className:"hljs-attr",children:'"replace"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-string",children:'"src/environments/environment.ts"'}),s(n.span,{className:"hljs-punctuation",children:","}),`
      `,s(n.span,{className:"hljs-attr",children:'"with"'}),s(n.span,{className:"hljs-punctuation",children:":"})," ",s(n.span,{className:"hljs-string",children:'"src/environments/environment.prod.ts"'}),`
    `,s(n.span,{className:"hljs-punctuation",children:"}"}),`
  `,s(n.span,{className:"hljs-punctuation",children:"]"}),s(n.span,{className:"hljs-punctuation",children:","}),`
`,s(n.span,{className:"hljs-punctuation",children:"}"}),s(n.span,{className:"hljs-punctuation",children:","}),`
`]})}),`
`,a(n.p,{children:["即在 production 模式下把 ",s(n.code,{children:"environment.ts"})," 替换成 ",s(n.code,{children:"environment.prod.t"})]}),`
`,a(n.p,{children:["所以平时在使用的时候 我们只需要引入",s(n.code,{children:"environment.t"}),"这个文件就好了 然后更具启动项配置去做到引入不同的 environment 文件"]}),`
`,s(n.h3,{children:"proxy"}),`
`,a(n.p,{children:["新建 ",s(n.code,{children:"proxy.conf.json"})," 然后修改 ",s(n.code,{children:"angular.json"})]}),`
`,a(n.p,{children:["修改 ",s(n.code,{children:"angular.json"})," 或者 ",s(n.code,{children:"proxy.conf.json"})," 这些 config 文件 需要 reload 项目 才能生效"]}),`
`,s(n.pre,{children:a(n.code,{className:"hljs language-ts",children:[s(n.span,{className:"hljs-string",children:'"serve"'}),`: {
    `,s(n.span,{className:"hljs-string",children:'"builder"'}),": ",s(n.span,{className:"hljs-string",children:'"@angular-devkit/build-angular:dev-server"'}),`,
    `,s(n.span,{className:"hljs-string",children:'"options"'}),`: {
      `,s(n.span,{className:"hljs-string",children:'"proxyConfig"'}),": ",s(n.span,{className:"hljs-string",children:'"proxy.conf.json"'}),`
    },
  },
`]})}),`
`,s(n.p,{children:"文件内容如下 你可以将它当成一份模版 运用于自己的项目中"}),`
`,a(n.blockquote,{children:[`
`,s(n.p,{children:"注意 这仅会在 dev 本地开发时 生效"}),`
`]}),`
`,s(n.pre,{children:a(n.code,{className:"hljs language-ts",children:[`{
  `,s(n.span,{className:"hljs-string",children:'"/api"'}),`: {
    `,s(n.span,{className:"hljs-string",children:'"target"'}),": ",s(n.span,{className:"hljs-string",children:'"http://124.223.71.181"'}),`,
    `,s(n.span,{className:"hljs-string",children:'"secure"'}),": ",s(n.span,{className:"hljs-literal",children:"true"}),`,
    `,s(n.span,{className:"hljs-string",children:'"logLevel"'}),": ",s(n.span,{className:"hljs-string",children:'"debug"'}),`,
    `,s(n.span,{className:"hljs-string",children:'"changeOrigin"'}),": ",s(n.span,{className:"hljs-literal",children:"true"}),`,
    `,s(n.span,{className:"hljs-string",children:'"headers"'}),`: {
      `,s(n.span,{className:"hljs-string",children:'"Origin"'}),": ",s(n.span,{className:"hljs-string",children:'"http://124.223.71.181"'}),`
    },
    `,s(n.span,{className:"hljs-string",children:'"pathRewrite"'}),`: {
      `,s(n.span,{className:"hljs-string",children:'"^/api"'}),": ",s(n.span,{className:"hljs-string",children:'""'}),`
    }
  }
}
`]})}),`
`,s(n.h3,{children:"引入 tailwind css"}),`
`,a(n.blockquote,{children:[`
`,a(n.p,{children:["reference ",s(n.a,{href:"https://tailwindcss.com/docs/guides/angular",children:"https://tailwindcss.com/docs/guides/angular"})]}),`
`]}),`
`,a(n.ol,{children:[`
`,s(n.li,{children:"引入依赖"}),`
`]}),`
`,s(n.pre,{children:s(n.code,{className:"hljs language-sh",children:`npm install -D tailwindcss postcss autoprefixer
`})}),`
`,a(n.ol,{start:"2",children:[`
`,s(n.li,{children:"生成 tailwind 配置文件并修改"}),`
`]}),`
`,s(n.pre,{children:s(n.code,{className:"hljs language-sh",children:`npx tailwindcss init
`})}),`
`,s(n.pre,{children:a(n.code,{className:"hljs language-js",children:[s(n.span,{className:"hljs-variable language_",children:"module"}),".",s(n.span,{className:"hljs-property",children:"exports"}),` = {
  `,s(n.span,{className:"hljs-attr",children:"content"}),": [",s(n.span,{className:"hljs-string",children:"'./src/**/*.{html,ts}'"}),`],
  `,s(n.span,{className:"hljs-attr",children:"theme"}),`: {
    `,s(n.span,{className:"hljs-attr",children:"extend"}),`: {},
  },
  `,s(n.span,{className:"hljs-attr",children:"plugins"}),`: [],
};
`]})}),`
`,a(n.ol,{start:"3",children:[`
`,s(n.li,{children:"在 styles.css 全局 css 入口处加入"}),`
`]}),`
`,s(n.pre,{children:a(n.code,{className:"hljs language-css",children:[s(n.span,{className:"hljs-keyword",children:"@tailwind"}),` base;
`,s(n.span,{className:"hljs-keyword",children:"@tailwind"}),` components;
`,s(n.span,{className:"hljs-keyword",children:"@tailwind"}),` utilities;
`]})}),`
`,s(n.h3,{children:"🎉"}),`
`,s(n.p,{children:"angular-tutorial demo 已经上线了 可以在线查看啦 （ 功能就一丢丢 还在补充中 👨‍💻 ）"}),`
`,a(n.blockquote,{children:[`
`,s(n.p,{children:s(n.a,{href:"https://rick-chou.github.io/angular-tutorial/",children:"https://rick-chou.github.io/angular-tutorial/"})}),`
`]}),`
`,s(n.p,{children:s(n.img,{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/adcb15fc3b344ae4a5d976d3c8402341~tplv-k3u1fbpfcp-watermark.image?",alt:"Screen Shot 2022-08-12 at 11.27.03.png"})}),`
`,s(n.p,{children:"Get Start 可以查看一些 library 在 angular 中 demo"}),`
`,s(n.p,{children:"例如 monaco-editor"}),`
`,s(n.p,{children:s(n.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05a8d92fc4494c38ac4a921082b5fbf6~tplv-k3u1fbpfcp-watermark.image?",alt:"Screen Shot 2022-10-21 at 18.12.15.png"})}),`
`,s(n.p,{children:"Basic Syntax 可以看到一些基础语法的用法"}),`
`,s(n.p,{children:s(n.img,{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a120c32f14a846239d618fcf32dfeead~tplv-k3u1fbpfcp-watermark.image?",alt:"Screen Shot 2022-08-12 at 11.23.04.png"})})]})}function u(l={}){const{wrapper:n}=Object.assign({},c(),l.components);return n?s(n,Object.assign({},l,{children:s(e,l)})):e(l)}export{u as default,o as frontmatter};
