import{u as c,j as n,a as e,F as r}from"./index-8ee1bc25.js";import"./antd-e9e8fd35.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const m={title:"Node - Express"};function l(a){const s=Object.assign({h2:"h2",p:"p",img:"img",pre:"pre",code:"code",span:"span",a:"a",h3:"h3",ul:"ul",li:"li"},c(),a.components);return e(r,{children:[n(s.h2,{children:"Express"}),`
`,n(s.p,{children:n(s.img,{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e07b34a250a74383ae5103db74dec89d~tplv-k3u1fbpfcp-watermark.image?",alt:"Screen Shot 2022-03-13 at 11.27.21.png"})}),`
`,n(s.p,{children:"通过 express 我们可以轻松的构建一个 web 服务器"}),`
`,n(s.p,{children:"例如以下代码就在 3000 端口创建了一个 web 服务器"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," express = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'express'"}),`);

`,n(s.span,{className:"hljs-keyword",children:"const"})," app = ",n(s.span,{className:"hljs-title function_",children:"express"}),`();

app.`,n(s.span,{className:"hljs-title function_",children:"listen"}),"(",n(s.span,{className:"hljs-number",children:"3000"}),", ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'start'"}),`);
});
`]})}),`
`,n(s.p,{children:"在我的理解中 express 就是一个对一系列中间件调用的函数"}),`
`,n(s.p,{children:"比如常见的处理 get 和 post 请求的方法都是中间件的调用"}),`
`,n(s.p,{children:"express 这个库导出了一个函数 查看源码"}),`
`,n(s.p,{children:"以下是入口文件 express.js 的截取代码"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-built_in",children:"exports"})," = ",n(s.span,{className:"hljs-variable language_",children:"module"}),".",n(s.span,{className:"hljs-property",children:"exports"}),` = createApplication;

`,e(s.span,{className:"hljs-comment",children:[`/**
 * Create an express application.
 *
 * `,n(s.span,{className:"hljs-doctag",children:"@return"})," {",n(s.span,{className:"hljs-type",children:"Function"}),`}
 * `,n(s.span,{className:"hljs-doctag",children:"@api"})," ",n(s.span,{className:"hljs-variable",children:"public"}),`
 */`]}),`

`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"createApplication"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"var"})," app = ",n(s.span,{className:"hljs-keyword",children:"function"})," (",n(s.span,{className:"hljs-params",children:"req, res, next"}),`) {
    app.`,n(s.span,{className:"hljs-title function_",children:"handle"}),`(req, res, next);
  };

  `,n(s.span,{className:"hljs-title function_",children:"mixin"}),"(app, ",n(s.span,{className:"hljs-title class_",children:"EventEmitter"}),".",n(s.span,{className:"hljs-property",children:n(s.span,{className:"hljs-keyword",children:"prototype"})}),", ",n(s.span,{className:"hljs-literal",children:"false"}),`);
  `,n(s.span,{className:"hljs-title function_",children:"mixin"}),"(app, proto, ",n(s.span,{className:"hljs-literal",children:"false"}),`);

  `,n(s.span,{className:"hljs-comment",children:"// expose the prototype that will get set on requests"}),`
  app.`,n(s.span,{className:"hljs-property",children:"request"})," = ",n(s.span,{className:"hljs-title class_",children:"Object"}),".",n(s.span,{className:"hljs-title function_",children:"create"}),`(req, {
    `,n(s.span,{className:"hljs-attr",children:"app"}),": { ",n(s.span,{className:"hljs-attr",children:"configurable"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),", ",n(s.span,{className:"hljs-attr",children:"enumerable"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),", ",n(s.span,{className:"hljs-attr",children:"writable"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),", ",n(s.span,{className:"hljs-attr",children:"value"}),`: app },
  });

  `,n(s.span,{className:"hljs-comment",children:"// expose the prototype that will get set on responses"}),`
  app.`,n(s.span,{className:"hljs-property",children:"response"})," = ",n(s.span,{className:"hljs-title class_",children:"Object"}),".",n(s.span,{className:"hljs-title function_",children:"create"}),`(res, {
    `,n(s.span,{className:"hljs-attr",children:"app"}),": { ",n(s.span,{className:"hljs-attr",children:"configurable"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),", ",n(s.span,{className:"hljs-attr",children:"enumerable"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),", ",n(s.span,{className:"hljs-attr",children:"writable"}),": ",n(s.span,{className:"hljs-literal",children:"true"}),", ",n(s.span,{className:"hljs-attr",children:"value"}),`: app },
  });

  app.`,n(s.span,{className:"hljs-title function_",children:"init"}),`();
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` app;
}
`]})}),`
`,n(s.p,{children:"express.js 导出了一个函数 createApplication 也就是我们 require 导入的函数"}),`
`,n(s.p,{children:"在这个函数中初始化了一个 app 的函数"}),`
`,n(s.p,{children:"拥有 req / res / next 等参数"}),`
`,n(s.p,{children:"并通过 minin 这个函数混入了很多属性到 app 中"}),`
`,e(s.p,{children:["具体的 API 可查阅 ",n(s.a,{href:"http://expressjs.com/en/4x/api.html",children:"http://expressjs.com/en/4x/api.html"})]}),`
`,n(s.h3,{children:"中间件"}),`
`,n(s.p,{children:"传递给 express 的一个回调函数 中间件位于请求和响应之间 所以它可以"}),`
`,n(s.p,{children:"• 执行任何代码"}),`
`,n(s.p,{children:"• 更改请求和响应对象"}),`
`,n(s.p,{children:"• 结束请求响应周期 res.end"}),`
`,n(s.p,{children:"• 调用下一个中间件"}),`
`,n(s.p,{children:"我们可以使用 app.use 的方法在全局注册中间件 这样所有的路由都会匹配到这个中间件"}),`
`,n(s.p,{children:"也可以在具体的路由中使用中间件 例如如下"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," middlewareA = (",e(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"req,res,next"}),")=>"]}),`{
  `,n(s.span,{className:"hljs-keyword",children:"do"}),` something...
  `,n(s.span,{className:"hljs-comment",children:"// 将执行权交给下一个中间件 不然程序会一直停留在这里"}),`
  `,n(s.span,{className:"hljs-title function_",children:"next"}),`();
})

app.`,n(s.span,{className:"hljs-title function_",children:"use"}),`(middlewareA)

app.`,n(s.span,{className:"hljs-title function_",children:"get"}),"(",n(s.span,{className:"hljs-string",children:"'/'"}),", middlewareA ,",e(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"req,res,next"}),")=>"]}),`{
  `,n(s.span,{className:"hljs-comment",children:"// do something..."}),`
})
`]})}),`
`,n(s.h3,{children:"托管静态文件"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," express = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'express'"}),`);
`,n(s.span,{className:"hljs-keyword",children:"const"})," path = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'path'"}),`);

`,n(s.span,{className:"hljs-keyword",children:"const"})," app = ",n(s.span,{className:"hljs-title function_",children:"express"}),`();

`,n(s.span,{className:"hljs-comment",children:"// 通过/static 来访问public文件夹"}),`
app.`,n(s.span,{className:"hljs-title function_",children:"use"}),"(",n(s.span,{className:"hljs-string",children:"'/static'"}),", express.",n(s.span,{className:"hljs-title function_",children:"static"}),"(path.",n(s.span,{className:"hljs-title function_",children:"join"}),"(__dirname, ",n(s.span,{className:"hljs-string",children:"'public'"}),`)));

app.`,n(s.span,{className:"hljs-title function_",children:"listen"}),"(",n(s.span,{className:"hljs-number",children:"8080"}),", ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'静态资源服务器部署成功'"}),`);
});
`]})}),`
`,n(s.p,{children:n(s.img,{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b66ca35a4af456e982c309804feeab7~tplv-k3u1fbpfcp-watermark.image?",alt:"Screen Shot 2022-03-13 at 00.33.26.png"})}),`
`,n(s.h3,{children:"get"}),`
`,n(s.p,{children:"get 请求的参数都在 url 中 我们可以通过 query 和 params 这两种形式来获取"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," express = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'express'"}),`);

`,n(s.span,{className:"hljs-keyword",children:"const"})," app = ",n(s.span,{className:"hljs-title function_",children:"express"}),`();

app.`,n(s.span,{className:"hljs-title function_",children:"get"}),"(",n(s.span,{className:"hljs-string",children:"'/query'"}),", ",e(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"req, res, next"}),") =>"]}),` {
  res.`,n(s.span,{className:"hljs-title function_",children:"json"}),"(req.",n(s.span,{className:"hljs-property",children:"query"}),`);
});

app.`,n(s.span,{className:"hljs-title function_",children:"get"}),"(",n(s.span,{className:"hljs-string",children:"'/param/:id'"}),", ",e(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"req, res, next"}),") =>"]}),` {
  res.`,n(s.span,{className:"hljs-title function_",children:"json"}),"(req.",n(s.span,{className:"hljs-property",children:"params"}),`);
});

app.`,n(s.span,{className:"hljs-title function_",children:"listen"}),"(",n(s.span,{className:"hljs-number",children:"3000"}),", ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'start'"}),`);
});
`]})}),`
`,n(s.p,{children:n(s.img,{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0319d5562764f539aa1b199b7903501~tplv-k3u1fbpfcp-watermark.image?",alt:"Screen Shot 2022-03-13 at 00.26.28.png"})}),`
`,n(s.p,{children:n(s.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05332c6859dd4c1da610bac97d460b07~tplv-k3u1fbpfcp-watermark.image?",alt:"Screen Shot 2022-03-13 at 00.27.24.png"})}),`
`,n(s.h3,{children:"post"}),`
`,n(s.p,{children:"post 请求的参数在 body 但是如果我们直接打印 body 是看不到任何结果的"}),`
`,n(s.p,{children:"这是需要引入 body-parser 这个库"}),`
`,n(s.p,{children:"这个库和不同版本的 express 集成情况如下"}),`
`,e(s.ul,{children:[`
`,e(s.li,{children:[`
`,n(s.p,{children:"3.x 内置"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"4.x 分离"}),`
`]}),`
`,e(s.li,{children:[`
`,n(s.p,{children:"4.16 内置函数"}),`
`]}),`
`]}),`
`,n(s.p,{children:"所以如果是 4.x 4.16 以前的版本 我们需要手动安装这个第三方库"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," express = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'express'"}),`);

`,n(s.span,{className:"hljs-keyword",children:"const"})," app = ",n(s.span,{className:"hljs-title function_",children:"express"}),`();

`,n(s.span,{className:"hljs-comment",children:"// 老版本写法 不推荐"}),`
`,n(s.span,{className:"hljs-comment",children:'// var bodyParser = require("body-parser");'}),`
`,n(s.span,{className:"hljs-comment",children:"// app.use(bodyParser.urlencoded({ extended: false }));"}),`
`,n(s.span,{className:"hljs-comment",children:"// app.use(bodyParser.json());"}),`

`,n(s.span,{className:"hljs-comment",children:"// 4.16以后的写法 推荐"}),`
`,n(s.span,{className:"hljs-comment",children:"// extended false 表示使用node的内置模块querystring来解析"}),`
`,n(s.span,{className:"hljs-comment",children:"// true 则表示使用第三方模块qs来解析"}),`
app.`,n(s.span,{className:"hljs-title function_",children:"use"}),"(express.",n(s.span,{className:"hljs-title function_",children:"urlencoded"}),"({ ",n(s.span,{className:"hljs-attr",children:"extended"}),": ",n(s.span,{className:"hljs-literal",children:"false"}),` }));
app.`,n(s.span,{className:"hljs-title function_",children:"use"}),"(express.",n(s.span,{className:"hljs-title function_",children:"json"}),`());

app.`,n(s.span,{className:"hljs-title function_",children:"post"}),"(",n(s.span,{className:"hljs-string",children:"'/login'"}),", ",e(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"req, res, next"}),") =>"]}),` {
  res.`,n(s.span,{className:"hljs-title function_",children:"json"}),"(req.",n(s.span,{className:"hljs-property",children:"body"}),`);
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(req.",n(s.span,{className:"hljs-property",children:"body"}),`);
});

app.`,n(s.span,{className:"hljs-title function_",children:"listen"}),"(",n(s.span,{className:"hljs-number",children:"3000"}),", ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'server start...'"}),`);
});
`]})}),`
`,n(s.p,{children:n(s.img,{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a079ac2e6d7241aa9dc0c4f7e401eb5e~tplv-k3u1fbpfcp-watermark.image?",alt:"Screen Shot 2022-03-13 at 00.22.35.png"})}),`
`,n(s.h3,{children:"文件上传"}),`
`,n(s.p,{children:"如果使用原生的方法实现文件上传 后台处理起来会非常麻烦"}),`
`,n(s.p,{children:"因为二进制流中不仅有文件的信息 还有 header 的一些相关信息"}),`
`,n(s.p,{children:"我们可以打印一些相关的数据来看一下"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," express = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'express'"}),`);

`,n(s.span,{className:"hljs-keyword",children:"const"})," app = ",n(s.span,{className:"hljs-title function_",children:"express"}),`();

app.`,n(s.span,{className:"hljs-title function_",children:"post"}),"(",n(s.span,{className:"hljs-string",children:"'/upload'"}),", ",e(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"req, res, next"}),") =>"]}),` {
  res.`,n(s.span,{className:"hljs-title function_",children:"json"}),"(req.",n(s.span,{className:"hljs-property",children:"headers"}),`);
  `,n(s.span,{className:"hljs-keyword",children:"let"})," data = ",n(s.span,{className:"hljs-string",children:"''"}),`;
  req.`,n(s.span,{className:"hljs-title function_",children:"on"}),"(",n(s.span,{className:"hljs-string",children:"'data'"}),", ",e(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"buffer"})," =>"]}),` {
    data += buffer;
  });
  req.`,n(s.span,{className:"hljs-title function_",children:"on"}),"(",n(s.span,{className:"hljs-string",children:"'end'"}),", ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
    `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(data.",n(s.span,{className:"hljs-title function_",children:"toString"}),`());
  });
});

app.`,n(s.span,{className:"hljs-title function_",children:"listen"}),"(",n(s.span,{className:"hljs-number",children:"3000"}),", ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'server start...'"}),`);
});
`]})}),`
`,n(s.p,{children:"然后我们访问 localhost:3000/upload 并上传一个文件"}),`
`,n(s.p,{children:"就可以看到 headers 信息如下"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-json",children:[n(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(s.span,{className:"hljs-attr",children:'"user-agent"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"PostmanRuntime/7.28.4"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"accept"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"*/*"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"postman-token"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"c52ac1cf-5688-438a-83e7-5ee52e694298"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"host"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"localhost:3000"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"accept-encoding"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"gzip, deflate, br"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"connection"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"keep-alive"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"content-type"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"multipart/form-data; boundary=--------------------------745445055948094794497298"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"content-length"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"22295"'}),`
`,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n(s.p,{children:"控制台的信息如下 （略去一些中间的二进制流）"}),`
`,n(s.pre,{children:n(s.code,{children:`----------------------------745445055948094794497298
Content-Disposition: form-data; name="logo"; filename="avatar.jpeg"
Content-Type: image/jpeg

�����

3V�"�QC@M�d������i�i^X�6�ʸ����p�=~�\`��U��YY�r0E�o�a�4�c��j���c ��lj��H��
----------------------------745445055948094794497298--
`})}),`
`,n(s.p,{children:n(s.img,{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/341864be73f2449493605cc9f26ced94~tplv-k3u1fbpfcp-watermark.image?",alt:"Screen Shot 2022-03-13 at 10.34.26.png"})}),`
`,n(s.p,{children:"如果仔细对比 你就会发现二进制流中包含了"}),`
`,n(s.p,{children:"header 中的 content-type 中的 boundary"}),`
`,n(s.p,{children:"还有文件的 mime 类型等"}),`
`,n(s.p,{children:"如果不加处理的直接使用 fs 模块将这个二进制流写入到文件中"}),`
`,n(s.p,{children:"那么最终文件肯定无法被正确解析"}),`
`,n(s.p,{children:"如果引入 multer 模块 那么文件上传功能就会变得很简单了"}),`
`,n(s.p,{children:"例如 我们需要用户上传头像 代码如下"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," express = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'express'"}),`);
`,n(s.span,{className:"hljs-keyword",children:"const"})," multer = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'multer'"}),`);

`,n(s.span,{className:"hljs-keyword",children:"const"})," path = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'path'"}),`);

`,n(s.span,{className:"hljs-keyword",children:"const"})," storage = multer.",n(s.span,{className:"hljs-title function_",children:"diskStorage"}),`({
  `,n(s.span,{className:"hljs-attr",children:"destination"}),": ",n(s.span,{className:"hljs-keyword",children:"function"})," (",n(s.span,{className:"hljs-params",children:"req, file, cb"}),`) {
    `,n(s.span,{className:"hljs-comment",children:"//  第一个参数为err的相关信息 node的回调函数都是错误优先的回调"}),`
    `,n(s.span,{className:"hljs-comment",children:"//  第二个参数为文件上传的目的地"}),`
    `,n(s.span,{className:"hljs-title function_",children:"cb"}),"(",n(s.span,{className:"hljs-literal",children:"null"}),", ",n(s.span,{className:"hljs-string",children:"'uploads'"}),`);
  },
  `,n(s.span,{className:"hljs-attr",children:"filename"}),": ",n(s.span,{className:"hljs-keyword",children:"function"})," (",n(s.span,{className:"hljs-params",children:"req, file, cb"}),`) {
    `,n(s.span,{className:"hljs-comment",children:"// 同样的 第一个参数为错误信息 第二个参数为文件名"}),`
    `,n(s.span,{className:"hljs-title function_",children:"cb"}),`(
      `,n(s.span,{className:"hljs-literal",children:"null"}),`,
      file.`,n(s.span,{className:"hljs-property",children:"fieldname"})," + ",n(s.span,{className:"hljs-string",children:"'-'"})," + ",n(s.span,{className:"hljs-title class_",children:"Date"}),".",n(s.span,{className:"hljs-title function_",children:"now"}),"() + path.",n(s.span,{className:"hljs-title function_",children:"extname"}),"(file.",n(s.span,{className:"hljs-property",children:"originalname"}),`),
    );
  },
});

`,n(s.span,{className:"hljs-keyword",children:"const"})," upload = ",n(s.span,{className:"hljs-title function_",children:"multer"}),`({ storage });

`,n(s.span,{className:"hljs-keyword",children:"const"})," app = ",n(s.span,{className:"hljs-title function_",children:"express"}),`();

`,n(s.span,{className:"hljs-comment",children:"// key 必须是avatar 不然会报错"}),`
app.`,n(s.span,{className:"hljs-title function_",children:"post"}),"(",n(s.span,{className:"hljs-string",children:"'/upload'"}),", upload.",n(s.span,{className:"hljs-title function_",children:"single"}),"(",n(s.span,{className:"hljs-string",children:"'avatar'"}),"), ",e(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"req, res, next"}),") =>"]}),` {
  res.`,n(s.span,{className:"hljs-title function_",children:"json"}),"(req.",n(s.span,{className:"hljs-property",children:"file"}),`);
});

app.`,n(s.span,{className:"hljs-title function_",children:"listen"}),"(",n(s.span,{className:"hljs-number",children:"3000"}),", ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'server start...'"}),`);
});
`]})}),`
`,n(s.p,{children:"key 不对应时 会报错"}),`
`,n(s.p,{children:n(s.img,{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ca3c042dd6e4a52b322f1c7f9750e2e~tplv-k3u1fbpfcp-watermark.image?",alt:"Screen Shot 2022-03-13 at 10.50.48.png"})}),`
`,n(s.p,{children:"上述方法演示的是单文件上传 req.file 中存储了文件的相关信息 如下"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-json",children:[n(s.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(s.span,{className:"hljs-attr",children:'"fieldname"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"avatar"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"originalname"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"CHOU16.jpg"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"encoding"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"7bit"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"mimetype"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"image/jpeg"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"destination"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"uploads"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"filename"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"avatar-1616384964609.jpg"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"path"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-string",children:'"uploads\\\\avatar-1616384964609.jpg"'}),n(s.span,{className:"hljs-punctuation",children:","}),`
  `,n(s.span,{className:"hljs-attr",children:'"size"'}),n(s.span,{className:"hljs-punctuation",children:":"})," ",n(s.span,{className:"hljs-number",children:"375864"}),`
`,n(s.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n(s.p,{children:"如果需要支持多文件上传 例如还需要上传用户背景图 代码可改写成如下"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:["app.",n(s.span,{className:"hljs-title function_",children:"post"}),`(
  `,n(s.span,{className:"hljs-string",children:"'/fields'"}),`,
  upload.`,n(s.span,{className:"hljs-title function_",children:"fields"}),`([
    { `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-string",children:"'avatar'"}),", ",n(s.span,{className:"hljs-attr",children:"macCount"}),": ",n(s.span,{className:"hljs-number",children:"1"}),` },
    { `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-string",children:"'bg'"}),", ",n(s.span,{className:"hljs-attr",children:"maxCount"}),": ",n(s.span,{className:"hljs-number",children:"2"}),` },
  ]),
  `,e(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"req, res, next"}),") =>"]}),` {
    `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(req.",n(s.span,{className:"hljs-property",children:"files"}),`);
  },
);

`,n(s.span,{className:"hljs-comment",children:"// {"}),`
`,n(s.span,{className:"hljs-comment",children:"//   avatar: ["}),`
`,n(s.span,{className:"hljs-comment",children:"//     {"}),`
`,n(s.span,{className:"hljs-comment",children:"//       fieldname: 'avatar',"}),`
`,n(s.span,{className:"hljs-comment",children:"//       originalname: 'CHOU1.jpg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//       encoding: '7bit',"}),`
`,n(s.span,{className:"hljs-comment",children:"//       mimetype: 'image/jpeg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//       destination: 'uploads',"}),`
`,n(s.span,{className:"hljs-comment",children:"//       filename: 'CHOU1.jpg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//       path: 'uploads/CHOU1.jpg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//       size: 646567"}),`
`,n(s.span,{className:"hljs-comment",children:"//     }"}),`
`,n(s.span,{className:"hljs-comment",children:"//   ],"}),`
`,n(s.span,{className:"hljs-comment",children:"//   bg: ["}),`
`,n(s.span,{className:"hljs-comment",children:"//     {"}),`
`,n(s.span,{className:"hljs-comment",children:"//       fieldname: 'bg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//       originalname: 'CHOU2.jpg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//       encoding: '7bit',"}),`
`,n(s.span,{className:"hljs-comment",children:"//       mimetype: 'image/jpeg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//       destination: 'uploads',"}),`
`,n(s.span,{className:"hljs-comment",children:"//       filename: 'CHOU2.jpg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//       path: 'uploads/CHOU2.jpg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//       size: 398519"}),`
`,n(s.span,{className:"hljs-comment",children:"//     }"}),`
`,n(s.span,{className:"hljs-comment",children:"//   ]"}),`
`,n(s.span,{className:"hljs-comment",children:"// }"}),`
`]})}),`
`,n(s.p,{children:"如果是需要多张背景图上传 同一个 field 则可以用 array 的写法 第二个参数为最大可上传的数量"}),`
`,n(s.p,{children:"如果超过了最大数量 multer 会返回 MulterError: Unexpected field"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:["app.",n(s.span,{className:"hljs-title function_",children:"post"}),"(",n(s.span,{className:"hljs-string",children:"'/array'"}),", upload.",n(s.span,{className:"hljs-title function_",children:"array"}),"(",n(s.span,{className:"hljs-string",children:"'bg'"}),", ",n(s.span,{className:"hljs-number",children:"3"}),"), ",e(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"req, res, next"}),") =>"]}),` {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(req.",n(s.span,{className:"hljs-property",children:"files"}),`);
});

`,n(s.span,{className:"hljs-comment",children:"// ["}),`
`,n(s.span,{className:"hljs-comment",children:"//   {"}),`
`,n(s.span,{className:"hljs-comment",children:"//     fieldname: 'bg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//     originalname: 'CHOU1.jpg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//     encoding: '7bit',"}),`
`,n(s.span,{className:"hljs-comment",children:"//     mimetype: 'image/jpeg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//     destination: 'uploads',"}),`
`,n(s.span,{className:"hljs-comment",children:"//     filename: 'CHOU1.jpg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//     path: 'uploads/CHOU1.jpg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//     size: 646567"}),`
`,n(s.span,{className:"hljs-comment",children:"//   },"}),`
`,n(s.span,{className:"hljs-comment",children:"//   {"}),`
`,n(s.span,{className:"hljs-comment",children:"//     fieldname: 'bg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//     originalname: 'CHOU2.jpg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//     encoding: '7bit',"}),`
`,n(s.span,{className:"hljs-comment",children:"//     mimetype: 'image/jpeg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//     destination: 'uploads',"}),`
`,n(s.span,{className:"hljs-comment",children:"//     filename: 'CHOU2.jpg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//     path: 'uploads/CHOU2.jpg',"}),`
`,n(s.span,{className:"hljs-comment",children:"//     size: 398519"}),`
`,n(s.span,{className:"hljs-comment",children:"//   }"}),`
`,n(s.span,{className:"hljs-comment",children:"// ]"}),`
`]})}),`
`,n(s.h3,{children:"router"}),`
`,n(s.p,{children:"如果将所有的请求处理都放在 index.js 中处理 那么 index.js 的代码就会变的很臃肿 这个时候我们可以使用路由来拆分我们的代码"}),`
`,n(s.p,{children:"例如项目中有一个用户模块 实现增删改查的功能"}),`
`,n(s.p,{children:"我们就可以新建一个 user.js 文件"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," express = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'express'"}),`);

`,n(s.span,{className:"hljs-keyword",children:"const"})," router = express.",n(s.span,{className:"hljs-title class_",children:"Router"}),`();

router.`,n(s.span,{className:"hljs-title function_",children:"get"}),"(",n(s.span,{className:"hljs-string",children:"'/add'"}),", ",e(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"req, res, next"}),") =>"]}),` {
  res.`,n(s.span,{className:"hljs-title function_",children:"end"}),"(",n(s.span,{className:"hljs-string",children:"'added'"}),`);
});

router.`,n(s.span,{className:"hljs-title function_",children:"post"}),"(",n(s.span,{className:"hljs-string",children:"'/delete'"}),", ",e(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"req, res, next"}),") =>"]}),` {
  res.`,n(s.span,{className:"hljs-title function_",children:"end"}),"(",n(s.span,{className:"hljs-string",children:"'deleted'"}),`);
});

router.`,n(s.span,{className:"hljs-title function_",children:"post"}),"(",n(s.span,{className:"hljs-string",children:"'/update'"}),", ",e(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"req, res, next"}),") =>"]}),` {
  res.`,n(s.span,{className:"hljs-title function_",children:"end"}),"(",n(s.span,{className:"hljs-string",children:"'updated'"}),`);
});

router.`,n(s.span,{className:"hljs-title function_",children:"post"}),"(",n(s.span,{className:"hljs-string",children:"'/select'"}),", ",e(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"req, res, next"}),") =>"]}),` {
  res.`,n(s.span,{className:"hljs-title function_",children:"end"}),"(",n(s.span,{className:"hljs-string",children:"'selected'"}),`);
});

`,n(s.span,{className:"hljs-variable language_",children:"module"}),".",n(s.span,{className:"hljs-property",children:"exports"}),` = router;
`]})}),`
`,n(s.p,{children:"然后在 index.js 中导入这个路由"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," express = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'express'"}),`);
`,n(s.span,{className:"hljs-keyword",children:"const"})," userRouter = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'./user'"}),`);

`,n(s.span,{className:"hljs-keyword",children:"const"})," app = ",n(s.span,{className:"hljs-title function_",children:"express"}),`();

app.`,n(s.span,{className:"hljs-title function_",children:"use"}),"(",n(s.span,{className:"hljs-string",children:"'/user'"}),`, userRouter);

app.`,n(s.span,{className:"hljs-title function_",children:"listen"}),"(",n(s.span,{className:"hljs-number",children:"3000"}),", ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'server start...'"}),`);
});
`]})}),`
`,n(s.h3,{children:"处理异步场景"}),`
`,n(s.p,{children:"使用 async / await 的语法 也能让 Express 处理异步场景"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"})," express = ",n(s.span,{className:"hljs-built_in",children:"require"}),"(",n(s.span,{className:"hljs-string",children:"'express'"}),`);

`,n(s.span,{className:"hljs-keyword",children:"const"})," app = ",n(s.span,{className:"hljs-title function_",children:"express"}),`();

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"middlewareA"})," = ",n(s.span,{className:"hljs-keyword",children:"async"})," (",n(s.span,{className:"hljs-params",children:"req, res, next"}),`) => {
  req.`,n(s.span,{className:"hljs-property",children:"message"})," = ",n(s.span,{className:"hljs-string",children:"''"}),`;
  req.`,n(s.span,{className:"hljs-property",children:"message"})," += ",n(s.span,{className:"hljs-string",children:"'A'"}),`;
  `,n(s.span,{className:"hljs-keyword",children:"await"})," ",n(s.span,{className:"hljs-title function_",children:"next"}),`();
  res.`,n(s.span,{className:"hljs-title function_",children:"end"}),"(req.",n(s.span,{className:"hljs-property",children:"message"}),`);
};

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"middlewareB"})," = ",n(s.span,{className:"hljs-keyword",children:"async"})," (",n(s.span,{className:"hljs-params",children:"req, res, next"}),`) => {
  req.`,n(s.span,{className:"hljs-property",children:"message"})," += ",n(s.span,{className:"hljs-keyword",children:"await"})," ",n(s.span,{className:"hljs-title class_",children:"Promise"}),".",n(s.span,{className:"hljs-title function_",children:"resolve"}),"(",n(s.span,{className:"hljs-string",children:"'B'"}),`);
  `,n(s.span,{className:"hljs-keyword",children:"await"})," ",n(s.span,{className:"hljs-title function_",children:"next"}),`();
};

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"middlewareC"})," = (",n(s.span,{className:"hljs-params",children:"req, res, next"}),`) => {
  req.`,n(s.span,{className:"hljs-property",children:"message"})," += ",n(s.span,{className:"hljs-string",children:"'C'"}),`;
  `,n(s.span,{className:"hljs-title function_",children:"next"}),`();
};

app.`,n(s.span,{className:"hljs-title function_",children:"use"}),`(middlewareA);
app.`,n(s.span,{className:"hljs-title function_",children:"use"}),`(middlewareB);
app.`,n(s.span,{className:"hljs-title function_",children:"use"}),`(middlewareC);

app.`,n(s.span,{className:"hljs-title function_",children:"listen"}),"(",n(s.span,{className:"hljs-number",children:"3000"}),", ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'server start...'"}),`);
});
`]})}),`
`,n(s.p,{children:"访问 3000 端口 我们可以看到 ABC 被正常输出"}),`
`,n(s.p,{children:n(s.img,{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1bada8e71e14db4bd6211e4bcfdd324~tplv-k3u1fbpfcp-watermark.image?",alt:"Screen Shot 2022-03-25 at 11.19.26.png"})})]})}function d(a={}){const{wrapper:s}=Object.assign({},c(),a.components);return s?n(s,Object.assign({},a,{children:n(l,a)})):l(a)}export{d as default,m as frontmatter};
