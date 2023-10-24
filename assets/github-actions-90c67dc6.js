import{u as c,j as n,a as l,F as h}from"./index-54e45a6e.js";import"./antd-4d5318cf.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const p={title:"Github actions"};function e(a){const s=Object.assign({blockquote:"blockquote",p:"p",a:"a",pre:"pre",code:"code",span:"span"},c(),a.components);return l(h,{children:[l(s.blockquote,{children:[`
`,n(s.p,{children:n(s.a,{href:"https://docs.github.com/cn/actions/quickstart",children:"https://docs.github.com/cn/actions/quickstart"})}),`
`]}),`
`,n(s.pre,{children:l(s.code,{className:"hljs language-yml",children:[n(s.span,{className:"hljs-comment",children:"# 当前 workflow 的名称"}),`
`,n(s.span,{className:"hljs-attr",children:"name:"})," ",n(s.span,{className:"hljs-string",children:"Frontend"})," ",n(s.span,{className:"hljs-string",children:"Weekly"}),`

`,n(s.span,{className:"hljs-comment",children:"# 指定 workflow 触发的 event"}),`
`,n(s.span,{className:"hljs-attr",children:"on:"}),`
  `,n(s.span,{className:"hljs-attr",children:"push:"}),`
    `,n(s.span,{className:"hljs-attr",children:"branches:"}),`
      `,n(s.span,{className:"hljs-bullet",children:"-"})," ",n(s.span,{className:"hljs-string",children:"main"}),`

`,n(s.span,{className:"hljs-comment",children:"# 一个 workflow 由一个或多个 job 组成"}),`
`,n(s.span,{className:"hljs-attr",children:"jobs:"}),`
  `,n(s.span,{className:"hljs-comment",children:"# job id: 是 job 的唯一标识"}),`
  `,n(s.span,{className:"hljs-attr",children:"build_and_deploy:"}),`
  	`,n(s.span,{className:"hljs-comment",children:"# 在 Github 中显示的 job 名称"}),`
    `,n(s.span,{className:"hljs-attr",children:"name:"})," ",n(s.span,{className:"hljs-string",children:"Build"})," ",n(s.span,{className:"hljs-string",children:"and"})," ",n(s.span,{className:"hljs-string",children:"Deploy"}),`
    `,n(s.span,{className:"hljs-comment",children:"# job 运行的环境配置"}),`
    `,n(s.span,{className:"hljs-attr",children:"runs-on:"})," ",n(s.span,{className:"hljs-string",children:"ubuntu-latest"}),`
    `,n(s.span,{className:"hljs-comment",children:"# 一个 job 由多个 step 组成"}),`
    `,n(s.span,{className:"hljs-attr",children:"steps:"}),`
      `,n(s.span,{className:"hljs-comment",children:"# 当前 step 的名字"}),`
      `,n(s.span,{className:"hljs-bullet",children:"-"})," ",n(s.span,{className:"hljs-attr",children:"name:"})," ",n(s.span,{className:"hljs-string",children:"Checkout"}),`
        `,n(s.span,{className:"hljs-comment",children:"# checkout action 主要用于向 github 仓库拉取源代码"}),`
        `,n(s.span,{className:"hljs-comment",children:"# https://github.com/actions/checkout"}),`
        `,n(s.span,{className:"hljs-attr",children:"uses:"})," ",n(s.span,{className:"hljs-string",children:"actions/checkout@v2"}),`
        `,n(s.span,{className:"hljs-attr",children:"with:"}),`
          `,n(s.span,{className:"hljs-attr",children:"ref:"})," ",n(s.span,{className:"hljs-string",children:"main"}),`
      `,n(s.span,{className:"hljs-bullet",children:"-"})," ",n(s.span,{className:"hljs-attr",children:"name:"})," ",n(s.span,{className:"hljs-string",children:"Cache"}),`
        `,n(s.span,{className:"hljs-comment",children:"# cache 在这里主要用于缓存 npm，提升构建速率"}),`
        `,n(s.span,{className:"hljs-comment",children:"# https://github.com/actions/cache"}),`
        `,n(s.span,{className:"hljs-attr",children:"uses:"})," ",n(s.span,{className:"hljs-string",children:"actions/cache@v2"}),`
        `,n(s.span,{className:"hljs-comment",children:"# npm 缓存的路径可查看 https://docs.npmjs.com/cli/cache#cache"}),`
        `,n(s.span,{className:"hljs-comment",children:"# 由于这里 runs-on 是 ubuntu-latest，因此配置 ~/.npm"}),`
        `,n(s.span,{className:"hljs-attr",children:"with:"}),`
          `,n(s.span,{className:"hljs-attr",children:"path:"})," ",n(s.span,{className:"hljs-string",children:"~/.npm"}),`
          `,n(s.span,{className:"hljs-attr",children:"key:"})," ",n(s.span,{className:"hljs-string",children:"${{"})," ",n(s.span,{className:"hljs-string",children:"runner.os"})," ",n(s.span,{className:"hljs-string",children:"}}-node-${{"})," ",n(s.span,{className:"hljs-string",children:"hashFiles('**/package-lock.json')"})," ",n(s.span,{className:"hljs-string",children:"}}"}),`
          `,n(s.span,{className:"hljs-attr",children:"restore-keys:"})," ",n(s.span,{className:"hljs-string",children:`|
            \${{ runner.os }}-node-
`}),"      ",n(s.span,{className:"hljs-bullet",children:"-"})," ",n(s.span,{className:"hljs-attr",children:"name:"})," ",n(s.span,{className:"hljs-string",children:"Use"})," ",n(s.span,{className:"hljs-string",children:"Node.js"}),`
      	`,n(s.span,{className:"hljs-comment",children:"# 配置 Node 执行环境（当前构建的服务器默认没有 Node 环境，可以通过 Action 安装 Node）"}),`
      	`,n(s.span,{className:"hljs-comment",children:"# https://github.com/actions/setup-node"}),`
        `,n(s.span,{className:"hljs-attr",children:"uses:"})," ",n(s.span,{className:"hljs-string",children:"actions/setup-node@v1"}),`
        `,n(s.span,{className:"hljs-attr",children:"with:"}),`
          `,n(s.span,{className:"hljs-attr",children:"node-version:"})," ",n(s.span,{className:"hljs-number",children:"14"}),`
      `,n(s.span,{className:"hljs-bullet",children:"-"})," ",n(s.span,{className:"hljs-attr",children:"name:"})," ",n(s.span,{className:"hljs-string",children:"Build"}),`
      	`,n(s.span,{className:"hljs-comment",children:"# 安装 Node 之后就可以执行构建脚本"}),`
        `,n(s.span,{className:"hljs-attr",children:"run:"})," ",n(s.span,{className:"hljs-string",children:`|
          npm install yarn -g
          yarn
          yarn build
`}),"      ",n(s.span,{className:"hljs-bullet",children:"-"})," ",n(s.span,{className:"hljs-attr",children:"name:"})," ",n(s.span,{className:"hljs-string",children:"Deploy"}),`
      	`,n(s.span,{className:"hljs-comment",children:"# 将构建产物 commit 到一个分支上，用于发布静态站点资源"}),`
      	`,n(s.span,{className:"hljs-comment",children:"# https://github.com/peaceiris/actions-gh-pages"}),`
        `,n(s.span,{className:"hljs-attr",children:"uses:"})," ",n(s.span,{className:"hljs-string",children:"peaceiris/actions-gh-pages@v3"}),`
        `,n(s.span,{className:"hljs-attr",children:"with:"}),`
          `,n(s.span,{className:"hljs-comment",children:"# Github 会在 workflow 中自动生成 GIHUBT_TOKEN，用于认证 workflow 的运行"}),`
          `,n(s.span,{className:"hljs-attr",children:"github_token:"})," ",n(s.span,{className:"hljs-string",children:"${{"})," ",n(s.span,{className:"hljs-string",children:"secrets.GITHUB_TOKEN"})," ",n(s.span,{className:"hljs-string",children:"}}"}),`
          `,n(s.span,{className:"hljs-comment",children:"# 静态资源目录设置"}),`
          `,n(s.span,{className:"hljs-attr",children:"publish_dir:"})," ",n(s.span,{className:"hljs-string",children:"./build"}),`
          `,n(s.span,{className:"hljs-comment",children:"# 默认发布到 gh-pages 分支上，可以指定特定的发布分支（不能选拉取代码的分支）"}),`
          `,n(s.span,{className:"hljs-attr",children:"publish_branch:"})," ",n(s.span,{className:"hljs-string",children:"gh-pages"}),`
          `,n(s.span,{className:"hljs-attr",children:"full_commit_message:"})," ",n(s.span,{className:"hljs-string",children:"${{"})," ",n(s.span,{className:"hljs-string",children:"github.event.head_commit.message"})," ",n(s.span,{className:"hljs-string",children:"}}"}),`
`]})})]})}function d(a={}){const{wrapper:s}=Object.assign({},c(),a.components);return s?n(s,Object.assign({},a,{children:n(e,a)})):e(a)}export{d as default,p as frontmatter};
