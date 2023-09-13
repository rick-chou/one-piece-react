import{u as c,j as n,a as t,F as a}from"./index-109c6b2d.js";import"./antd-3342c5aa.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const d={title:"Network - http header referer"};function s(r){const e=Object.assign({h2:"h2",p:"p",strong:"strong",pre:"pre",code:"code",span:"span"},c(),r.components);return t(a,{children:[n(e.h2,{children:"背景"}),`
`,n(e.p,{children:"前段日子 在自学做项目的时候发现 明明在项目中引用了线上存在的图片 但是在自己的项目中却怎么也显示出来"}),`
`,t(e.p,{children:["查阅资料后发现是这些第三方网站设置了",n(e.strong,{children:"防盗链"})]}),`
`,n(e.h2,{children:"破解防盗链"}),`
`,n(e.p,{children:"先说说防盗链的原理，http 协议中，如果从一个网页跳到另一个网页，http 头字段里面会带个 Referer。"}),`
`,n(e.p,{children:"这里的 Referer 是由于历史原因导致了拼写错误 后来也就一直沿用。"}),`
`,n(e.p,{children:"图片服务器通过检测 Referer 是否来自规定域名，来进行防盗链。"}),`
`,n(e.p,{children:"如果盗用网站是 https 的 protocol，而图片链接是 http 的话，"}),`
`,n(e.p,{children:"则从 https 向 http 发起的请求会因为安全性的规定，而不带 referer，从而实现防盗链的绕过。"}),`
`,n(e.p,{children:"官方输出图片的时候，判断了来源(Referer)，就是从哪个网站访问这个图片，"}),`
`,n(e.p,{children:"如果是你的网站去加载这个图片，那么 Referer 就是：你的网站地址；"}),`
`,n(e.p,{children:"你网站地址，肯定没在官方的白名单内，所以就看不到图片了。"}),`
`,n(e.p,{children:"因此，若不发送 Referer，也就是没有来源。那么官方那边，就认为是从浏览器直接访问的，所以就能加载正常的图片了。"}),`
`,n(e.pre,{children:t(e.code,{className:"hljs language-html",children:[t(e.span,{className:"hljs-tag",children:["<",n(e.span,{className:"hljs-name",children:"meta"})," ",n(e.span,{className:"hljs-attr",children:"name"}),"=",n(e.span,{className:"hljs-string",children:'"referrer"'})," ",n(e.span,{className:"hljs-attr",children:"content"}),"=",n(e.span,{className:"hljs-string",children:'"never"'})," />"]}),`
`]})}),`
`,n(e.p,{children:"比如在掘金上 查看我的一篇文章中一张图片的 Request Headers 就可以看到 Referer"})]})}function o(r={}){const{wrapper:e}=Object.assign({},c(),r.components);return e?n(e,Object.assign({},r,{children:n(s,r)})):s(r)}export{o as default,d as frontmatter};
