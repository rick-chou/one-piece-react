import{u as c,j as n,a,F as h}from"./index-8ee1bc25.js";import"./antd-e9e8fd35.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const p={title:"JavaScript - PWA"};function e(l){const s=Object.assign({h2:"h2",p:"p",blockquote:"blockquote",a:"a",ul:"ul",li:"li",pre:"pre",code:"code",span:"span",ol:"ol",h3:"h3",h4:"h4"},c(),l.components);return a(h,{children:[n(s.h2,{children:"PWA 定义"}),`
`,n(s.p,{children:"首先 带大家看一下什么是 PWA"}),`
`,n(s.p,{children:"这里给大家推荐几个接入 PWA 的站点"}),`
`,a(s.blockquote,{children:[`
`,n(s.p,{children:n(s.a,{href:"https://www.yuque.com/dashboard",children:"https://www.yuque.com/dashboard"})}),`
`]}),`
`,a(s.blockquote,{children:[`
`,n(s.p,{children:n(s.a,{href:"https://cn.vuejs.org/index.html",children:"https://cn.vuejs.org/index.html"})}),`
`]}),`
`,n(s.p,{children:"分别是语雀和 Vue 的官网"}),`
`,n(s.p,{children:"如果你用 PC 端点开后 可以发现 浏览器的 url 一栏多了一个按钮 效果如下"}),`
`,`
`,n(s.p,{children:"如果你是 android 手机的话 也许你会看到如下的效果"}),`
`,`
`,`
`,n(s.p,{children:"如果是 iphone 手机的话 需要手动添加到桌面"}),`
`,`
`,n(s.p,{children:"至此 你的桌面端就会多一个 PWA 版本的 Web App 点开它就可以拥有类似 Native App 的体验"}),`
`,n(s.p,{children:"OK 现在说回什么是 PWA 下面 👇 引用 MDN 上的解释"}),`
`,a(s.blockquote,{children:[`
`,n(s.p,{children:"PWA(progressing web app)，渐进式网页应用程序，是 Google 在 2016 年 GoogleI/O 大会上提出的下一代 web 应用模型，并在随后的日子里迅速发展。 一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用. 随后借助于 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能"}),`
`]}),`
`,n(s.p,{children:"总的来说 PWA 是为了让 Web App 可以有 Native APP 效果的一组技术的实现 它包含"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"manifest"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"service worker"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"cache"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"消息推送"}),`
`]}),`
`]}),`
`,n(s.p,{children:"下面我们一个一个来讲"}),`
`,n(s.h2,{children:"Manifest"}),`
`,n(s.p,{children:"简单来说 manifest 就是一个描述 web app 模拟 native app 行为的 json 配置文件"}),`
`,n(s.p,{children:"它大致上长这样"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-json",children:[n(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(s.span,{className:"hljs-attr",children:'"name"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"OS - PWA"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"short-name"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"OS"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"start_url"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"/"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"icons"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-punctuation",children:"["}),`
    `,n(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n(s.span,{className:"hljs-attr",children:'"src"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"images/logo48.png"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"sizes"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"48x48"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"type"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"image/png"'}),`
    `,n(s.span,{className:"hljs-punctuation",children:"}"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n(s.span,{className:"hljs-attr",children:'"src"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"images/logo64.png"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"sizes"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"64x64"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"type"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"image/png"'}),`
    `,n(s.span,{className:"hljs-punctuation",children:"}"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n(s.span,{className:"hljs-attr",children:'"src"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"images/logo128.png"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"sizes"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"128x128"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"type"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"image/png"'}),`
    `,n(s.span,{className:"hljs-punctuation",children:"}"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n(s.span,{className:"hljs-attr",children:'"src"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"images/logo144.png"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"sizes"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"144x144"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"type"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"image/png"'}),`
    `,n(s.span,{className:"hljs-punctuation",children:"}"}),n(s.span,{className:"hljs-punctuation",children:","}),`
    `,n(s.span,{className:"hljs-punctuation",children:"{"}),`
      `,n(s.span,{className:"hljs-attr",children:'"src"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"images/logo200.png"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"sizes"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"200x200"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
      `,n(s.span,{className:"hljs-attr",children:'"type"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"image/png"'}),`
    `,n(s.span,{className:"hljs-punctuation",children:"}"}),`
  `,n(s.span,{className:"hljs-punctuation",children:"]"}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"background_color"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"yellow"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"theme_color"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"yellow"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"display"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"standalone"'}),`
`,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n(s.p,{children:"具体的每一项配置 可以参考 MDN 的说明"}),`
`,a(s.blockquote,{children:[`
`,n(s.p,{children:n(s.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/Manifest",children:"https://developer.mozilla.org/zh-CN/docs/Web/Manifest"})}),`
`]}),`
`,n(s.p,{children:"然后在我们的 index.html 中引入 manifest.json 文件即可"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-html",children:[a(s.span,{className:"hljs-meta",children:["<!DOCTYPE ",n(s.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"html"})," ",n(s.span,{className:"hljs-attr",children:"lang"}),"=",n(s.span,{className:"hljs-string",children:'"en"'}),">"]}),`
  `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"meta"})," ",n(s.span,{className:"hljs-attr",children:"charset"}),"=",n(s.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"meta"})," ",n(s.span,{className:"hljs-attr",children:"http-equiv"}),"=",n(s.span,{className:"hljs-string",children:'"X-UA-Compatible"'})," ",n(s.span,{className:"hljs-attr",children:"content"}),"=",n(s.span,{className:"hljs-string",children:'"IE=edge"'})," />"]}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"meta"})," ",n(s.span,{className:"hljs-attr",children:"name"}),"=",n(s.span,{className:"hljs-string",children:'"viewport"'})," ",n(s.span,{className:"hljs-attr",children:"content"}),"=",n(s.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"title"}),">"]}),"Manifest",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"title"}),">"]}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"link"})," ",n(s.span,{className:"hljs-attr",children:"rel"}),"=",n(s.span,{className:"hljs-string",children:'"manifest"'})," ",n(s.span,{className:"hljs-attr",children:"href"}),"=",n(s.span,{className:"hljs-string",children:'"manifest.json"'})," />"]}),`
  `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Hello Manifest",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"h1"}),">"]}),`
  `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"body"}),">"]}),`
`,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,n(s.p,{children:"打开浏览器的调试工具 如果 manifest 一项显示如下 则表示你配置正确了"}),`
`,`
`,n(s.p,{children:"然而 现实是骨感的 你在 android 上或许可以看到开屏动画这些 但是在 iphone 上 你可能看不到一点效果"}),`
`,a(s.p,{children:["打开 ",n(s.a,{href:"https://caniuse.com/?search=manifest",children:"https://caniuse.com/?search=manifest"})]}),`
`,n(s.p,{children:"可以看到 manifest 的兼容性目前还不是很好 iphone 上基本可以说是红红火火了"}),`
`,n(s.p,{children:"我们需要在 html 的 meta 标签中加入 针对 iphone 的属性 如下 👇"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-html",children:[a(s.span,{className:"hljs-meta",children:["<!DOCTYPE ",n(s.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"html"})," ",n(s.span,{className:"hljs-attr",children:"lang"}),"=",n(s.span,{className:"hljs-string",children:'"en"'}),">"]}),`
  `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"meta"})," ",n(s.span,{className:"hljs-attr",children:"charset"}),"=",n(s.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"meta"})," ",n(s.span,{className:"hljs-attr",children:"http-equiv"}),"=",n(s.span,{className:"hljs-string",children:'"X-UA-Compatible"'})," ",n(s.span,{className:"hljs-attr",children:"content"}),"=",n(s.span,{className:"hljs-string",children:'"IE=edge"'})," />"]}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"meta"})," ",n(s.span,{className:"hljs-attr",children:"name"}),"=",n(s.span,{className:"hljs-string",children:'"viewport"'})," ",n(s.span,{className:"hljs-attr",children:"content"}),"=",n(s.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"title"}),">"]}),"Manifest",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"title"}),">"]}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"link"})," ",n(s.span,{className:"hljs-attr",children:"rel"}),"=",n(s.span,{className:"hljs-string",children:'"manifest"'})," ",n(s.span,{className:"hljs-attr",children:"href"}),"=",n(s.span,{className:"hljs-string",children:'"./manifest.json"'})," />"]}),`
    `,n(s.span,{className:"hljs-comment",children:"<!-- 兼容ios -->"}),`
    `,n(s.span,{className:"hljs-comment",children:"<!-- 是否隐藏safari地址栏 -->"}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"meta"})," ",n(s.span,{className:"hljs-attr",children:"name"}),"=",n(s.span,{className:"hljs-string",children:'"apple-mobile-web-app-capable"'})," ",n(s.span,{className:"hljs-attr",children:"content"}),"=",n(s.span,{className:"hljs-string",children:'"yes"'})," />"]}),`
    `,n(s.span,{className:"hljs-comment",children:"<!-- 指定应用名称 -->"}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"meta"})," ",n(s.span,{className:"hljs-attr",children:"name"}),"=",n(s.span,{className:"hljs-string",children:'"apple-mobile-web-app-title"'})," ",n(s.span,{className:"hljs-attr",children:"content"}),"=",n(s.span,{className:"hljs-string",children:'"南树-PWA"'})," />"]}),`
    `,n(s.span,{className:"hljs-comment",children:"<!-- 修改ios状态栏颜色 -->"}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"meta"})," ",n(s.span,{className:"hljs-attr",children:"name"}),"=",n(s.span,{className:"hljs-string",children:'"apple-mobile-web-app-status-bar-style"'})," ",n(s.span,{className:"hljs-attr",children:"content"}),"=",n(s.span,{className:"hljs-string",children:'"yellow"'})," />"]}),`
    `,n(s.span,{className:"hljs-comment",children:"<!-- 配置ios icon -->"}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"link"})," ",n(s.span,{className:"hljs-attr",children:"rel"}),"=",n(s.span,{className:"hljs-string",children:'"apple-touch-icon"'})," ",n(s.span,{className:"hljs-attr",children:"sizes"}),"=",n(s.span,{className:"hljs-string",children:'"48x48"'})," ",n(s.span,{className:"hljs-attr",children:"href"}),"=",n(s.span,{className:"hljs-string",children:'"images/logo48.png"'})," />"]}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"link"})," ",n(s.span,{className:"hljs-attr",children:"rel"}),"=",n(s.span,{className:"hljs-string",children:'"apple-touch-icon"'})," ",n(s.span,{className:"hljs-attr",children:"sizes"}),"=",n(s.span,{className:"hljs-string",children:'"144x144"'})," ",n(s.span,{className:"hljs-attr",children:"href"}),"=",n(s.span,{className:"hljs-string",children:'"images/logo144.png"'})," />"]}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"link"})," ",n(s.span,{className:"hljs-attr",children:"rel"}),"=",n(s.span,{className:"hljs-string",children:'"apple-touch-icon"'})," ",n(s.span,{className:"hljs-attr",children:"sizes"}),"=",n(s.span,{className:"hljs-string",children:'"200x200"'})," ",n(s.span,{className:"hljs-attr",children:"href"}),"=",n(s.span,{className:"hljs-string",children:'"images/logo200.png"'})," />"]}),`
  `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Hello Manifest",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"h1"}),">"]}),`
  `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"body"}),">"]}),`
`,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,n(s.p,{children:"虽然达不到 android 的效果 但是勉强 iPhone 上也可以看到一些 PWA 的痕迹了"}),`
`,n(s.h2,{children:"Service Worker"}),`
`,`
`,`
`,n(s.p,{children:"从上面的图可知 Service Worker 其实一个代理服务器的概念"}),`
`,n(s.p,{children:"它可以拦截页面的请求 然后决定是访问缓存还是发起 API 请求"}),`
`,n(s.p,{children:"下面的图则表明 Service Worker 其实是一种特殊的 Web Worker"}),`
`,n(s.p,{children:"因为和 UI 主线程的宿主环境不同 Service Worker 不能直接操作 DOM"}),`
`,n(s.p,{children:"除此之外 它还有以下特性"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"需要时直接唤醒 不需要时自动休眠"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"离线缓存内容开发者可控"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"一旦被安装永久存活 除非手动卸载"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"必须在 Https 环境上（localhost 除外）"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"大量使用 promise"}),`
`]}),`
`]}),`
`,n(s.p,{children:"有关 Service Worker 的生命周期可以参考下图"}),`
`,`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"install 事件会在 service worker 注册成功时触发 主要用于缓存资源"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"activate 事件会在 service worker 激活的时候触发 主要用于删除旧的资源"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"fetch 事件会在发送请求的时候触发 主要用于缓存或者读取网络资源"}),`
`]}),`
`]}),`
`,n(s.p,{children:"在页面中注册一个 service worker 很简单"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-comment",children:"// 1. 在网页加载完成的时候 注册service worker"}),`
`,n(s.span,{className:"hljs-variable language_",children:"window"}),".",n(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",n(s.span,{className:"hljs-string",children:"'load'"}),", ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-comment",children:"// 2. 兼容旧版本"}),`
  `,n(s.span,{className:"hljs-keyword",children:"if"})," (",n(s.span,{className:"hljs-string",children:"'serviceWorker'"})," ",n(s.span,{className:"hljs-keyword",children:"in"}),` navigator) {
    navigator.`,n(s.span,{className:"hljs-property",children:"serviceWorker"}),`
      .`,n(s.span,{className:"hljs-title function_",children:"register"}),"(",n(s.span,{className:"hljs-string",children:"'./sw.js'"}),`)
      .`,n(s.span,{className:"hljs-title function_",children:"then"}),"(",a(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"registration"})," =>"]}),` {
        `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'注册成功'"}),`, registration);
      })
      .`,n(s.span,{className:"hljs-title function_",children:"catch"}),"(",a(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"err"})," =>"]}),` {
        `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"`注册失败`"}),`, err);
      });
  }
});
`]})}),`
`,n(s.p,{children:"这样便完成了一个注册 打开浏览器的调试工具 这次你可以在 service worker1 一栏中看到内容"}),`
`,`
`,n(s.p,{children:"接下来 说几个 service worker 的注意点"}),`
`,a(s.ol,{children:[`
`,n(s.li,{children:"如果 sw.js 发生的变化 install 事件会重新触发"}),`
`,n(s.li,{children:"activate 事件会在 install 事件后触发 但是如果已经存在 service worker 那么就会处于等待状态 直到当前 service worker 终止"}),`
`,n(s.li,{children:"可以通过 self.skipWaiting()方法跳过等待 返回一个 promise 对象"}),`
`,n(s.li,{children:"可以通过 event.waitUntil()方法防止浏览器在异步操作之前就停止了生命周期"}),`
`,n(s.li,{children:"service worker 激活后 会在下一次刷新页面的时候生效 可以通过 self.clients.claim()立即获取控制权"}),`
`]}),`
`,n(s.p,{children:"代码如下"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-comment",children:"// install 事件会在service worker注册成功时触发 主要用于缓存资源"}),`
self.`,n(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",n(s.span,{className:"hljs-string",children:"'install'"}),", ",a(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"event"})," =>"]}),` {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"`install`"}),`, event);
  `,n(s.span,{className:"hljs-comment",children:"// 让service worker跳过等待 直接进入activate状态 返回一个promise对象"}),`
  `,n(s.span,{className:"hljs-comment",children:"// self.skipWaiting();"}),`
  `,n(s.span,{className:"hljs-comment",children:"// 等待self.skipWaiting()执行结束 再进入activate事件"}),`
  event.`,n(s.span,{className:"hljs-title function_",children:"waitUntil"}),"(self.",n(s.span,{className:"hljs-title function_",children:"skipWaiting"}),`());
});

`,n(s.span,{className:"hljs-comment",children:"// activate 事件会在service worker激活的时候触发 主要用于删除旧的资源"}),`
self.`,n(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",n(s.span,{className:"hljs-string",children:"'activate'"}),", ",a(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"event"})," =>"]}),` {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"`activate`"}),`, event);
  `,n(s.span,{className:"hljs-comment",children:"// 当一个sw注册时 页面在下次加载时才会使用它 claim方法会立即控制这些页面"}),`
  `,n(s.span,{className:"hljs-comment",children:"// self.clients.claim();"}),`
  event.`,n(s.span,{className:"hljs-title function_",children:"waitUntil"}),"(self.",n(s.span,{className:"hljs-property",children:"clients"}),".",n(s.span,{className:"hljs-title function_",children:"claim"}),`());
});

`,n(s.span,{className:"hljs-comment",children:"// fetch 事件会在发送请求的时候触发 主要用于缓存或者读取网络资源"}),`
self.`,n(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",n(s.span,{className:"hljs-string",children:"'fetch'"}),", ",a(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"event"})," =>"]}),` {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"`fetch`"}),`, event);
});
`]})}),`
`,n(s.h2,{children:"Cache"}),`
`,n(s.p,{children:"接下来 讲讲 Cache"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"cacheStorage 接口表示 Cache 对象的存储 配合 sw 来实现资源的缓存"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"cache api 类似于数据库的操作"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:`cache.open(cacheName).then((cache)=>{}) 用于打开缓存 返回一个匹配 cacheName 的
cache 对象的 promise 类似于连接数据库`}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"cache.keys()返回一个 promise 对象 包括所有缓存的 key"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"cache.delete(key) 根据 key 删除对应的缓存"}),`
`]}),`
`]}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"cache 对象常用的方法"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"cache.put(req,res) 把请求当成 key 把对应的响应存储起来"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"cache.add(url) 根据 url 发起请求 并且把结果存储起来"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"cache.addAll(urls) 抓取一个 url 数组 并且把结果都存储起来"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"cache.match(req) 获取 req 对应的 response"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n(s.p,{children:"配合 service worker 的代码如下"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-variable constant_",children:"CACHE_NAME"})," = ",n(s.span,{className:"hljs-string",children:"'cache_v1'"}),`;

`,n(s.span,{className:"hljs-comment",children:"// 缓存内容"}),`
self.`,n(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",n(s.span,{className:"hljs-string",children:"'install'"}),", ",n(s.span,{className:"hljs-keyword",children:"async"}),` event => {
  `,n(s.span,{className:"hljs-comment",children:"// 开启一个cache 得到一个cache对象"}),`
  `,n(s.span,{className:"hljs-keyword",children:"const"})," cache = ",n(s.span,{className:"hljs-keyword",children:"await"})," caches.",n(s.span,{className:"hljs-title function_",children:"open"}),"(",n(s.span,{className:"hljs-variable constant_",children:"CACHE_NAME"}),`);
  `,n(s.span,{className:"hljs-keyword",children:"await"})," cache.",n(s.span,{className:"hljs-title function_",children:"addAll"}),`([
    `,n(s.span,{className:"hljs-string",children:"'/'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'/static/img1.jpg'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'/static/img2.jpg'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'/static/img3.jpg'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'/manifest.json'"}),`,
    `,n(s.span,{className:"hljs-string",children:"'/index.css'"}),`,
  ]);
  `,n(s.span,{className:"hljs-keyword",children:"await"})," self.",n(s.span,{className:"hljs-title function_",children:"skipWaiting"}),`();
});

`,n(s.span,{className:"hljs-comment",children:"// 清除旧的缓存"}),`
self.`,n(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",n(s.span,{className:"hljs-string",children:"'activate'"}),", ",n(s.span,{className:"hljs-keyword",children:"async"}),` event => {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," keys = ",n(s.span,{className:"hljs-keyword",children:"await"})," caches.",n(s.span,{className:"hljs-title function_",children:"keys"}),`();
  keys.`,n(s.span,{className:"hljs-title function_",children:"forEach"}),"(",a(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"key"})," =>"]}),` {
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (key !== ",n(s.span,{className:"hljs-variable constant_",children:"CACHE_NAME"}),`) {
      caches.`,n(s.span,{className:"hljs-title function_",children:"delete"}),`(key);
    }
  });
  event.`,n(s.span,{className:"hljs-title function_",children:"waitUntil"}),"(self.",n(s.span,{className:"hljs-property",children:"clients"}),".",n(s.span,{className:"hljs-title function_",children:"claim"}),`());
});

`,n(s.span,{className:"hljs-comment",children:"// fetch 事件会在发送请求的时候触发 主要用于缓存或者读取网络资源"}),`
`,n(s.span,{className:"hljs-comment",children:"// 判断资源能否请求成功 请求成功 --> 响应成功的结果 请求失败 --> 读取caches缓存"}),`
self.`,n(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",n(s.span,{className:"hljs-string",children:"'fetch'"}),", ",a(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"event"})," =>"]}),` {
  `,n(s.span,{className:"hljs-comment",children:"// 请求对象"}),`
  `,n(s.span,{className:"hljs-keyword",children:"const"})," req = event.",n(s.span,{className:"hljs-property",children:"request"}),`;
  `,n(s.span,{className:"hljs-comment",children:"// 浏览器响应"}),`
  event.`,n(s.span,{className:"hljs-title function_",children:"respondWith"}),"(",n(s.span,{className:"hljs-title function_",children:"networkFirst"}),`(req));
});

`,n(s.span,{className:"hljs-comment",children:"// 网络优先策略"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"networkFirst"})," = ",n(s.span,{className:"hljs-keyword",children:"async"}),` req => {
  `,n(s.span,{className:"hljs-keyword",children:"try"}),` {
    `,n(s.span,{className:"hljs-comment",children:"// 先从网络读取资源"}),`
    `,n(s.span,{className:"hljs-keyword",children:"const"})," fresh = ",n(s.span,{className:"hljs-keyword",children:"await"})," ",n(s.span,{className:"hljs-title function_",children:"fetch"}),`(req);
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` fresh;
  } `,n(s.span,{className:"hljs-keyword",children:"catch"}),` (e) {
    `,n(s.span,{className:"hljs-keyword",children:"const"})," cache = ",n(s.span,{className:"hljs-keyword",children:"await"})," caches.",n(s.span,{className:"hljs-title function_",children:"open"}),"(",n(s.span,{className:"hljs-variable constant_",children:"CACHE_NAME"}),`);
    `,n(s.span,{className:"hljs-keyword",children:"const"})," cached = ",n(s.span,{className:"hljs-keyword",children:"await"})," cache.",n(s.span,{className:"hljs-title function_",children:"match"}),`(req);
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` cached;
  }
};
`]})}),`
`,n(s.p,{children:"打开浏览器的开发者工具 我们可以看到我们想要缓存的文件都在里面了"}),`
`,`
`,n(s.h3,{children:"缓存策略"}),`
`,n(s.p,{children:"上述示例代码中 我们用到了网络优先策略"}),`
`,n(s.p,{children:"但其实缓存策略还有很多"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"Cache only"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"Network only"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"Cache falling back to network"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"Network falling back to cache"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"Cache & network race"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"Cache then network"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"Generic fallback"}),`
`]}),`
`]}),`
`,n(s.h4,{children:"Cache only"}),`
`,`
`,n(s.h4,{children:"Network only"}),`
`,`
`,n(s.h4,{children:"Cache falling back to network"}),`
`,`
`,n(s.h4,{children:"Cache & network race"}),`
`,`
`,n(s.h4,{children:"Cache then network"}),`
`,`
`,n(s.h4,{children:"Generic fallback"}),`
`,`
`,n(s.h2,{children:"消息推送"}),`
`,n(s.p,{children:"因为引入 PWA 后 用户可能访问的是过期的缓存内容"}),`
`,n(s.p,{children:"所以我们可以调用消息推送的 API 来告诉用户"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-comment",children:"// 提示授权"}),`
`,n(s.span,{className:"hljs-keyword",children:"if"})," (",n(s.span,{className:"hljs-title class_",children:"Notification"}),".",n(s.span,{className:"hljs-property",children:"permission"})," === ",n(s.span,{className:"hljs-string",children:"'default'"}),`) {
  `,n(s.span,{className:"hljs-title class_",children:"Notification"}),".",n(s.span,{className:"hljs-title function_",children:"requestPermission"}),`();
}

`,n(s.span,{className:"hljs-keyword",children:"if"})," (!navigator.",n(s.span,{className:"hljs-property",children:"onLine"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"Notification"}),"(",n(s.span,{className:"hljs-string",children:"'提示'"}),", { ",n(s.span,{className:"hljs-attr",children:"body"}),": ",n(s.span,{className:"hljs-string",children:"'你当前没有网络，访问的是缓存'"}),` });
}

`,n(s.span,{className:"hljs-variable language_",children:"window"}),".",n(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",n(s.span,{className:"hljs-string",children:"'online'"}),", ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"Notification"}),"(",n(s.span,{className:"hljs-string",children:"'提示'"}),`, {
    `,n(s.span,{className:"hljs-attr",children:"body"}),": ",n(s.span,{className:"hljs-string",children:"'你已经连上网络，请刷新页面，访问最新的数据'"}),`,
  });
});
`]})}),`
`,n(s.h2,{children:"PWA 应用"}),`
`,n(s.p,{children:"最后简单 说一下 PWA 可以有哪些应用"}),`
`,n(s.p,{children:"例如 APP Shell 和 APP Skeleton"}),`
`,n(s.p,{children:"就是运用了上述的 Cache then network 缓存策略"}),`
`,n(s.p,{children:"在网络不好的情况下 可以先给用户呈现 Web App 大致的样子 而不是白屏"})]})}function m(l={}){const{wrapper:s}=Object.assign({},c(),l.components);return s?n(s,Object.assign({},l,{children:n(e,l)})):e(l)}export{m as default,p as frontmatter};
