import{u as c,j as n,a,F as i}from"./index-54e45a6e.js";import"./antd-4d5318cf.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const d={title:"JavaScript - decorate"};function e(l){const s=Object.assign({h2:"h2",pre:"pre",code:"code",span:"span",p:"p",ul:"ul",li:"li"},c(),l.components);return a(i,{children:[n(s.h2,{children:"配置装饰器环境"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-json",children:[n(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(s.span,{className:"hljs-attr",children:'"name"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"decorator"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"version"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"1.0.0"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"main"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"index.js"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"license"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"MIT"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"dependencies"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n(s.span,{className:"hljs-attr",children:'"@babel/cli"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"^7.13.16"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"@babel/core"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"^7.13.16"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"@babel/plugin-proposal-class-properties"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"^7.13.0"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"@babel/plugin-proposal-decorators"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"^7.13.15"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"@babel/preset-env"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"^7.13.15"'}),`
  `,n(s.span,{className:"hljs-punctuation",children:"}"}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"scripts"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n(s.span,{className:"hljs-attr",children:'"start"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"npx babel src/index.js --out-dir dist && node dist/index.js"'}),`
  `,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,a(s.p,{children:["新建 ",n(s.code,{children:"package.json"})," 文件 复制如上内容 然后安装依赖"]}),`
`,a(s.p,{children:["然后在根目录 创建文件",n(s.code,{children:".babelrc"})," 配置如下内容"]}),`
`,n(s.p,{children:"因为最新版的 babel 插件是可拔插的 仅仅安装是不会生效的 还需配置"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-json",children:[n(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(s.span,{className:"hljs-attr",children:'"presets"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"@babel/preset-env"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"plugins"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),`
    `,n(s.span,{className:"hljs-punctuation",children:"["}),`
      `,n(s.span,{className:"hljs-string",children:'"@babel/plugin-proposal-decorators"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-punctuation",children:"{"}),`
        `,n(s.span,{className:"hljs-attr",children:'"legacy"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})}),`
      `,n(s.span,{className:"hljs-punctuation",children:"}"}),`
    `,n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-punctuation",children:"["}),n(s.span,{className:"hljs-string",children:'"@babel/plugin-proposal-class-properties"'}),n(s.span,{className:"hljs-punctuation",children:"]"}),`
  `,n(s.span,{className:"hljs-punctuation",children:"]"}),`
`,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,a(s.p,{children:["最后创建 ",n(s.code,{children:"jsconfig.json"})," 文件 写下如下配置来开启装饰器 不然编译器会给我们警告"]}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-json",children:[n(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(s.span,{className:"hljs-attr",children:'"compilerOptions"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"{"}),`
    `,n(s.span,{className:"hljs-attr",children:'"target"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"es6"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-attr",children:'"experimentalDecorators"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-literal",children:n(s.span,{className:"hljs-keyword",children:"true"})}),`
  `,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,a(s.p,{children:["然后新建 src 目录 在里面创建 ",n(s.code,{children:"index.js"})," 文件 随后我们就在这个文件内书写我们的代码"]}),`
`,n(s.h2,{children:"修饰类"}),`
`,n(s.p,{children:"参数就是被装饰器修饰的类"}),`
`,n(s.h2,{children:"修饰成员变量"}),`
`,n(s.p,{children:"有三个参数"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"target 对于静态成员来说是构造函数 对于实例成员来说是原型对象"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"name 被修饰成员的名字"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"descriptor 被修饰成员的属性描述符"}),`
`]}),`
`]}),`
`,n(s.p,{children:"具体代码如下"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-js",children:[`@logClassSelf
`,n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"Programmer"}),` {
  `,n(s.span,{className:"hljs-title function_",children:"constructor"}),"(",n(s.span,{className:"hljs-params",children:"nickname"}),`) {
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"nickname"}),` = nickname;
  }
  @logClassMember
  `,n(s.span,{className:"hljs-keyword",children:"static"})," department = ",n(s.span,{className:"hljs-string",children:"'FE'"}),`;

  @logClassMember
  `,n(s.span,{className:"hljs-title function_",children:"coding"}),"(",n(s.span,{className:"hljs-params"}),`) {
    `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'bug fix......'"}),`);
  }
}

`,a(s.span,{className:"hljs-comment",children:[`/**
 *
 * `,n(s.span,{className:"hljs-doctag",children:"@param"})," {",n(s.span,{className:"hljs-type",children:"*"}),`} target 被修饰的类
 */`]}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"logClassSelf"}),"(",n(s.span,{className:"hljs-params",children:"target"}),`) {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'target'"}),", target); ",n(s.span,{className:"hljs-comment",children:"// target [Function: Programmer]"}),`
  target.`,n(s.span,{className:"hljs-property",children:n(s.span,{className:"hljs-keyword",children:"prototype"})}),".",n(s.span,{className:"hljs-property",children:"logger"})," = ",n(s.span,{className:"hljs-function",children:"() =>"})," ",n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-string",children:["`我是",n(s.span,{className:"hljs-subst",children:"${target.name}"}),"类`"]}),`);
}

`,a(s.span,{className:"hljs-comment",children:[`/**
 *
 * `,n(s.span,{className:"hljs-doctag",children:"@param"})," {",n(s.span,{className:"hljs-type",children:"*"}),`} target 对于静态成员来说是构造函数 对于实例成员来说是原型对象
 * `,n(s.span,{className:"hljs-doctag",children:"@param"})," {",n(s.span,{className:"hljs-type",children:"*"}),`} name 被修饰成员的名字
 * `,n(s.span,{className:"hljs-doctag",children:"@param"})," {",n(s.span,{className:"hljs-type",children:"*"}),`} descriptor 被修饰成员的属性描述符 enumerable & configurable & writable | initializer
 */`]}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"logClassMember"}),"(",n(s.span,{className:"hljs-params",children:"target, name, descriptor"}),`) {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'target:'"}),`, target);
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'name:'"}),`, name);
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'descriptor:'"}),`, descriptor);
}
`]})}),`
`,n(s.p,{children:"借助装饰器 我们就有能力改变类内部的方法和变量"})]})}function m(l={}){const{wrapper:s}=Object.assign({},c(),l.components);return s?n(s,Object.assign({},l,{children:n(e,l)})):e(l)}export{m as default,d as frontmatter};
