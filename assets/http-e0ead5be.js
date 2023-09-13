import{u as c,j as e,a as l,F as r}from"./index-3486abdc.js";import"./antd-3342c5aa.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const d={title:"Angular Quick Start - Http"};function n(a){const s=Object.assign({h3:"h3",p:"p",code:"code",pre:"pre",span:"span"},c(),a.components);return l(r,{children:[e(s.h3,{children:"基本用法"}),`
`,e(s.p,{children:"用 Angular 提供的 HttpClient 可以很轻松的实现 API 接口的访问"}),`
`,l(s.p,{children:["举个例子 新建一个 ",e(s.code,{children:"http.service.ts"})]}),`
`,e(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"HttpClient"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/common/http'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Injectable"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { environment } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@env'"}),`;

`,e(s.span,{className:"hljs-meta",children:"@Injectable"}),"({ ",e(s.span,{className:"hljs-attr",children:"providedIn"}),": ",e(s.span,{className:"hljs-string",children:"'root'"}),` })
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"HttpService"}),` {
  `,e(s.span,{className:"hljs-title function_",children:"constructor"}),"(",l(s.span,{className:"hljs-params",children:[e(s.span,{className:"hljs-keyword",children:"private"})," http: HttpClient"]}),`) {}

  `,e(s.span,{className:"hljs-keyword",children:"public"})," ",e(s.span,{className:"hljs-title function_",children:"echoCode"}),"(",l(s.span,{className:"hljs-params",children:[`
    method: `,e(s.span,{className:"hljs-string",children:"'get'"})," | ",e(s.span,{className:"hljs-string",children:"'post'"})," | ",e(s.span,{className:"hljs-string",children:"'delete'"})," | ",e(s.span,{className:"hljs-string",children:"'put'"})," | ",e(s.span,{className:"hljs-string",children:"'patch'"})," = ",e(s.span,{className:"hljs-string",children:"'get'"}),`,
    params: { code: `,e(s.span,{className:"hljs-built_in",children:"number"}),` },
  `]}),`) {
    `,e(s.span,{className:"hljs-keyword",children:"switch"}),` (method) {
      `,e(s.span,{className:"hljs-keyword",children:"case"})," ",e(s.span,{className:"hljs-string",children:"'get'"}),`:
      `,e(s.span,{className:"hljs-keyword",children:"case"})," ",e(s.span,{className:"hljs-string",children:"'delete'"}),`:
        `,e(s.span,{className:"hljs-keyword",children:"return"})," ",e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"http"}),"[method](",l(s.span,{className:"hljs-string",children:["`",e(s.span,{className:"hljs-subst",children:"${environment.backend}"}),"/echo-code`"]}),`, {
          params,
        });
      `,e(s.span,{className:"hljs-keyword",children:"case"})," ",e(s.span,{className:"hljs-string",children:"'patch'"}),`:
      `,e(s.span,{className:"hljs-keyword",children:"case"})," ",e(s.span,{className:"hljs-string",children:"'put'"}),`:
      `,e(s.span,{className:"hljs-keyword",children:"case"})," ",e(s.span,{className:"hljs-string",children:"'post'"}),`:
        `,e(s.span,{className:"hljs-keyword",children:"return"})," ",e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"http"}),"[method](",l(s.span,{className:"hljs-string",children:["`",e(s.span,{className:"hljs-subst",children:"${environment.backend}"}),"/echo-code`"]}),`, params);
    }
  }
}
`]})}),`
`,e(s.p,{children:"然后在业务中 我们就可以这样使用"}),`
`,e(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Component"}),", ",e(s.span,{className:"hljs-title class_",children:"OnInit"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"HttpService"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'./http.service'"}),`;

`,e(s.span,{className:"hljs-meta",children:"@Component"}),`({
  `,e(s.span,{className:"hljs-attr",children:"selector"}),": ",e(s.span,{className:"hljs-string",children:"'http'"}),`,
  `,e(s.span,{className:"hljs-attr",children:"standalone"}),": ",e(s.span,{className:"hljs-literal",children:"true"}),`,
  `,e(s.span,{className:"hljs-attr",children:"templateUrl"}),": ",e(s.span,{className:"hljs-string",children:"'./http.component.html'"}),`,
})
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"HttpComponent"})," ",e(s.span,{className:"hljs-keyword",children:"implements"})," ",e(s.span,{className:"hljs-title class_",children:"OnInit"}),` {
  `,e(s.span,{className:"hljs-title function_",children:"constructor"}),"(",l(s.span,{className:"hljs-params",children:[e(s.span,{className:"hljs-keyword",children:"private"})," http: HttpService"]}),`) {}
  `,e(s.span,{className:"hljs-title function_",children:"ngOnInit"}),"(): ",e(s.span,{className:"hljs-built_in",children:"void"}),` {
    `,e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"http"}),".",e(s.span,{className:"hljs-title function_",children:"echoCode"}),"(",e(s.span,{className:"hljs-string",children:"'get'"}),", { ",e(s.span,{className:"hljs-attr",children:"code"}),": ",e(s.span,{className:"hljs-number",children:"200"})," }).",e(s.span,{className:"hljs-title function_",children:"subscribe"}),"(",e(s.span,{className:"hljs-variable language_",children:"console"}),".",e(s.span,{className:"hljs-property",children:"log"}),`);
    `,e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"http"}),".",e(s.span,{className:"hljs-title function_",children:"echoCode"}),"(",e(s.span,{className:"hljs-string",children:"'post'"}),", { ",e(s.span,{className:"hljs-attr",children:"code"}),": ",e(s.span,{className:"hljs-number",children:"200"})," }).",e(s.span,{className:"hljs-title function_",children:"subscribe"}),"(",e(s.span,{className:"hljs-variable language_",children:"console"}),".",e(s.span,{className:"hljs-property",children:"log"}),`);
    `,e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"http"}),".",e(s.span,{className:"hljs-title function_",children:"echoCode"}),"(",e(s.span,{className:"hljs-string",children:"'delete'"}),", { ",e(s.span,{className:"hljs-attr",children:"code"}),": ",e(s.span,{className:"hljs-number",children:"301"})," }).",e(s.span,{className:"hljs-title function_",children:"subscribe"}),"(",e(s.span,{className:"hljs-variable language_",children:"console"}),".",e(s.span,{className:"hljs-property",children:"log"}),`);
    `,e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"http"}),".",e(s.span,{className:"hljs-title function_",children:"echoCode"}),"(",e(s.span,{className:"hljs-string",children:"'put'"}),", { ",e(s.span,{className:"hljs-attr",children:"code"}),": ",e(s.span,{className:"hljs-number",children:"403"})," }).",e(s.span,{className:"hljs-title function_",children:"subscribe"}),"(",e(s.span,{className:"hljs-variable language_",children:"console"}),".",e(s.span,{className:"hljs-property",children:"log"}),`);
    `,e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"http"}),".",e(s.span,{className:"hljs-title function_",children:"echoCode"}),"(",e(s.span,{className:"hljs-string",children:"'patch'"}),", { ",e(s.span,{className:"hljs-attr",children:"code"}),": ",e(s.span,{className:"hljs-number",children:"500"})," }).",e(s.span,{className:"hljs-title function_",children:"subscribe"}),"(",e(s.span,{className:"hljs-variable language_",children:"console"}),".",e(s.span,{className:"hljs-property",children:"log"}),`);
  }
}
`]})}),`
`,l(s.p,{children:["这看起来非常简单 类似 ",e(s.code,{children:"Axios"})]}),`
`,e(s.p,{children:"下面介绍一下一些常用的用法"}),`
`,e(s.h3,{children:"错误处理"}),`
`,e(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"http"}),`
  .`,e(s.span,{className:"hljs-title function_",children:"echoCode"}),"(",e(s.span,{className:"hljs-string",children:"'get'"}),", { ",e(s.span,{className:"hljs-attr",children:"code"}),": ",e(s.span,{className:"hljs-number",children:"200"}),` })
  .`,e(s.span,{className:"hljs-title function_",children:"pipe"}),"(",e(s.span,{className:"hljs-title function_",children:"catchError"}),"(",l(s.span,{className:"hljs-function",children:["(",e(s.span,{className:"hljs-params",children:"err: HttpErrorResponse"}),") =>"]})," ",e(s.span,{className:"hljs-title function_",children:"of"}),`(err)))
  .`,e(s.span,{className:"hljs-title function_",children:"subscribe"}),"(",l(s.span,{className:"hljs-function",children:[e(s.span,{className:"hljs-params",children:"x"})," =>"]}),` {
    `,e(s.span,{className:"hljs-keyword",children:"if"})," (x ",e(s.span,{className:"hljs-keyword",children:"instanceof"})," ",e(s.span,{className:"hljs-title class_",children:"HttpErrorResponse"}),`) {
      `,e(s.span,{className:"hljs-comment",children:"// do something"}),`
    } `,e(s.span,{className:"hljs-keyword",children:"else"}),` {
      `,e(s.span,{className:"hljs-comment",children:"// do something"}),`
    }
  });
`]})}),`
`,e(s.h3,{children:"请求拦截"}),`
`,e(s.p,{children:"请求拦截是比较常用的"}),`
`,e(s.p,{children:"例如 你可以在这里判断 cookie 是否有效 / 全局错误处理 ..."}),`
`,l(s.p,{children:["新建 ",e(s.code,{children:"http-interceptor.ts"})," 文件 （ 文件名可以随意 ）"]}),`
`,l(s.p,{children:["最主要的是要实现 ",e(s.code,{children:"HttpInterceptor"})," 的 ",e(s.code,{children:"intercept"})," 方法"]}),`
`,e(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-keyword",children:"import"}),` {
  `,e(s.span,{className:"hljs-title class_",children:"HttpInterceptor"}),`,
  `,e(s.span,{className:"hljs-title class_",children:"HttpRequest"}),`,
  `,e(s.span,{className:"hljs-title class_",children:"HttpHandler"}),`,
  `,e(s.span,{className:"hljs-title class_",children:"HttpResponse"}),`,
  `,e(s.span,{className:"hljs-title class_",children:"HttpErrorResponse"}),`,
} `,e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/common/http'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Injectable"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Observable"}),", ",e(s.span,{className:"hljs-keyword",children:"of"}),", throwError } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'rxjs'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { filter, catchError } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'rxjs/operators'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"HttpEvent"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/common/http'"}),`;

`,e(s.span,{className:"hljs-meta",children:"@Injectable"}),`()
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"HttpInterceptorService"})," ",e(s.span,{className:"hljs-keyword",children:"implements"})," ",e(s.span,{className:"hljs-title class_",children:"HttpInterceptor"}),` {
  `,e(s.span,{className:"hljs-title function_",children:"constructor"}),"(",e(s.span,{className:"hljs-params"}),`) {}
  `,e(s.span,{className:"hljs-title function_",children:"intercept"}),`(
    `,e(s.span,{className:"hljs-attr",children:"req"}),": ",e(s.span,{className:"hljs-title class_",children:"HttpRequest"}),"<",e(s.span,{className:"hljs-built_in",children:"any"}),`>,
    `,e(s.span,{className:"hljs-attr",children:"next"}),": ",e(s.span,{className:"hljs-title class_",children:"HttpHandler"}),`,
  ): `,e(s.span,{className:"hljs-title class_",children:"Observable"}),"<",e(s.span,{className:"hljs-title class_",children:"HttpEvent"}),"<",e(s.span,{className:"hljs-built_in",children:"any"}),`>> {
    `,e(s.span,{className:"hljs-keyword",children:"return"}),` next
      .`,e(s.span,{className:"hljs-title function_",children:"handle"}),`(req)
      .`,e(s.span,{className:"hljs-title function_",children:"pipe"}),"(",e(s.span,{className:"hljs-title function_",children:"filter"}),"(",l(s.span,{className:"hljs-function",children:[e(s.span,{className:"hljs-params",children:"event"})," =>"]})," event ",e(s.span,{className:"hljs-keyword",children:"instanceof"})," ",e(s.span,{className:"hljs-title class_",children:"HttpResponse"}),`))
      .`,e(s.span,{className:"hljs-title function_",children:"pipe"}),`(
        `,e(s.span,{className:"hljs-title function_",children:"catchError"}),"(",l(s.span,{className:"hljs-function",children:[e(s.span,{className:"hljs-params",children:"error"})," =>"]}),` {
          `,e(s.span,{className:"hljs-variable language_",children:"console"}),".",e(s.span,{className:"hljs-title function_",children:"log"}),"(",e(s.span,{className:"hljs-string",children:"'catch error'"}),`, error);
          `,e(s.span,{className:"hljs-keyword",children:"return"})," ",e(s.span,{className:"hljs-title function_",children:"of"}),`(error);
        }),
      );
  }
}
`]})}),`
`,e(s.p,{children:"然后在 module 中的 providers 中使用 这个拦截器就生效了"}),`
`,e(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-meta",children:"@NgModule"}),`({
  `,e(s.span,{className:"hljs-attr",children:"imports"}),": [",e(s.span,{className:"hljs-title class_",children:"RouterModule"}),".",e(s.span,{className:"hljs-title function_",children:"forChild"}),`(routes)],
  `,e(s.span,{className:"hljs-attr",children:"exports"}),": [",e(s.span,{className:"hljs-title class_",children:"RouterModule"}),`],
  `,e(s.span,{className:"hljs-attr",children:"providers"}),`: [
    {
      `,e(s.span,{className:"hljs-attr",children:"provide"}),": ",e(s.span,{className:"hljs-variable constant_",children:"HTTP_INTERCEPTORS"}),`,
      `,e(s.span,{className:"hljs-attr",children:"useClass"}),": ",e(s.span,{className:"hljs-title class_",children:"HttpInterceptorService"}),`,
      `,e(s.span,{className:"hljs-attr",children:"multi"}),": ",e(s.span,{className:"hljs-literal",children:"true"}),`,
    },
  ],
})
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"XXXModule"}),` {}
`]})})]})}function m(a={}){const{wrapper:s}=Object.assign({},c(),a.components);return s?e(s,Object.assign({},a,{children:e(n,a)})):n(a)}export{m as default,d as frontmatter};
