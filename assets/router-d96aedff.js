import{u as c,j as a,a as l,F as r}from"./index-1d7c24d6.js";import"./antd-3342c5aa.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const m={title:"Angular Quick Start - Router"};function e(n){const s=Object.assign({h3:"h3",p:"p",a:"a",code:"code",pre:"pre",span:"span",ul:"ul",li:"li"},c(),n.components);return l(r,{children:[a(s.h3,{children:"基本使用"}),`
`,a(s.p,{children:"在 angular 中构建自己的 Router System 非常简单"}),`
`,l(s.p,{children:["举个例子 这是我在 ",a(s.a,{href:"https://github.com/rick-chou/angular-tutorial",children:"angular-tutorial"})," 中的 ",a(s.code,{children:"app-routing.module.ts"})," file"]}),`
`,a(s.p,{children:"我将它稍作了改造 用来涵盖一些常用功能"}),`
`,a(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"NgModule"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"RouterModule"}),", ",a(s.span,{className:"hljs-title class_",children:"Routes"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@angular/router'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"LoginComponent"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@component/login.component'"}),`;

`,a(s.span,{className:"hljs-comment",children:"// 启动路由预加载 ( 因为懒加载的特性 在路由激活的时候再加载资源 会导致有短暂的白屏 )"}),`
`,a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"CustomPreloadingStrategy"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@views/basic-syntax/router/customPreloadingStrategy'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-attr",children:"routes"}),": ",a(s.span,{className:"hljs-title class_",children:"Routes"}),` = [
  {
    `,a(s.span,{className:"hljs-comment",children:"// 映射成 `/` 路径"}),`
    `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"''"}),`,
    `,a(s.span,{className:"hljs-comment",children:"// 路由懒加载 这些资源不会被打包进入 `main.js 中` 路由激活时才会去加载这个js"}),`
    `,a(s.span,{className:"hljs-attr",children:"loadComponent"}),": ",a(s.span,{className:"hljs-function",children:"() =>"}),`
      `,a(s.span,{className:"hljs-keyword",children:"import"}),"(",a(s.span,{className:"hljs-string",children:"'@views/welcome/welcome.component'"}),").",a(s.span,{className:"hljs-title function_",children:"then"}),`(
        `,l(s.span,{className:"hljs-function",children:[a(s.span,{className:"hljs-params",children:"mod"})," =>"]})," mod.",a(s.span,{className:"hljs-property",children:"WelcomeComponent"}),`,
      ),
  },
  {
    `,a(s.span,{className:"hljs-comment",children:"// 映射成 `/home` 路径"}),`
    `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'home'"}),`,
    `,a(s.span,{className:"hljs-attr",children:"loadComponent"}),": ",a(s.span,{className:"hljs-function",children:"() =>"}),`
      `,a(s.span,{className:"hljs-keyword",children:"import"}),"(",a(s.span,{className:"hljs-string",children:"'@views/home/home.component'"}),").",a(s.span,{className:"hljs-title function_",children:"then"}),"(",l(s.span,{className:"hljs-function",children:[a(s.span,{className:"hljs-params",children:"mod"})," =>"]})," mod.",a(s.span,{className:"hljs-property",children:"HomeComponent"}),`),
    `,a(s.span,{className:"hljs-attr",children:"children"}),`: [
      {
        `,a(s.span,{className:"hljs-comment",children:"// 映射成 `/home/charts` 路径 你不必在这里写完整的路径 你只需要写相对于父路由的路径就好了"}),`
        `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'charts'"}),`,
        `,a(s.span,{className:"hljs-attr",children:"loadComponent"}),": ",a(s.span,{className:"hljs-function",children:"() =>"}),`
          `,a(s.span,{className:"hljs-keyword",children:"import"}),"(",a(s.span,{className:"hljs-string",children:"'@views/charts/charts.component'"}),").",a(s.span,{className:"hljs-title function_",children:"then"}),`(
            `,l(s.span,{className:"hljs-function",children:[a(s.span,{className:"hljs-params",children:"mod"})," =>"]})," mod.",a(s.span,{className:"hljs-property",children:"ChartsComponent"}),`,
          ),
      },
    ],
  },
  {
    `,a(s.span,{className:"hljs-comment",children:"// 映射成 `/article/xxx` 路径"}),`
    `,a(s.span,{className:"hljs-comment",children:"// 可以在 ActivatedRoute 中获取"}),`
    `,a(s.span,{className:"hljs-comment",children:"// this.route.params.subscribe(data=>data['id']);"}),`
    `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'article/:id'"}),`,
    `,a(s.span,{className:"hljs-attr",children:"loadComponent"}),": ",a(s.span,{className:"hljs-function",children:"() =>"}),`
      `,a(s.span,{className:"hljs-keyword",children:"import"}),"(",a(s.span,{className:"hljs-string",children:"'@views/article/article.component'"}),").",a(s.span,{className:"hljs-title function_",children:"then"}),`(
        `,l(s.span,{className:"hljs-function",children:[a(s.span,{className:"hljs-params",children:"mod"})," =>"]})," mod.",a(s.span,{className:"hljs-property",children:"ArticleComponent"}),`,
      ),
  },
  {
    `,a(s.span,{className:"hljs-comment",children:"// 映射成 `/login` 路径"}),`
    `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'login'"}),`,
    `,a(s.span,{className:"hljs-comment",children:"// 不使用懒加载"}),`
    `,a(s.span,{className:"hljs-attr",children:"component"}),": ",a(s.span,{className:"hljs-title class_",children:"LoginComponent"}),`,
    `,a(s.span,{className:"hljs-comment",children:"// 给这个路由一些静态的参数"}),`
    `,a(s.span,{className:"hljs-comment",children:"// 可以在 ActivatedRoute 中获取"}),`
    `,a(s.span,{className:"hljs-comment",children:"// this.route.data.subscribe(data=>data['preloading']);"}),`
    `,a(s.span,{className:"hljs-attr",children:"data"}),`: {
      `,a(s.span,{className:"hljs-attr",children:"preloading"}),": ",a(s.span,{className:"hljs-literal",children:"true"}),`,
    },
  },
  {
    `,a(s.span,{className:"hljs-comment",children:"// 映射成 `/login-out` 路径"}),`
    `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'login-out'"}),`,
    `,a(s.span,{className:"hljs-comment",children:"// 重定向到我们的首页"}),`
    `,a(s.span,{className:"hljs-attr",children:"redirectTo"}),": ",a(s.span,{className:"hljs-string",children:"''"}),`,
  },
];

`,a(s.span,{className:"hljs-meta",children:"@NgModule"}),`({
  `,a(s.span,{className:"hljs-attr",children:"imports"}),`: [
    `,a(s.span,{className:"hljs-title class_",children:"RouterModule"}),".",a(s.span,{className:"hljs-title function_",children:"forRoot"}),`(routes, {
      `,a(s.span,{className:"hljs-attr",children:"preloadingStrategy"}),": ",a(s.span,{className:"hljs-title class_",children:"CustomPreloadingStrategy"}),`,
    }),
  ],
  `,a(s.span,{className:"hljs-attr",children:"exports"}),": [",a(s.span,{className:"hljs-title class_",children:"RouterModule"}),`],
})
`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"AppRoutingModule"}),` {}
`]})}),`
`,l(s.p,{children:["然后这是 ",a(s.code,{children:"CustomPreloadingStrategy"})]}),`
`,a(s.p,{children:"这是一个预加载策略 因为懒加载的特性 加载资源时会有短暂的白屏"}),`
`,a(s.p,{children:"所以我们可以使用预加载策略 当满足这个策略的条件时 就去加载对应路由的资源"}),`
`,l(s.p,{children:["简单来说就是实现 ",a(s.code,{children:"PreloadingStrategy"})," 的 ",a(s.code,{children:"preload"})," 方法"]}),`
`,a(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Injectable"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Route"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@angular/router'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"PreloadingStrategy"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@angular/router'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Observable"}),", ",a(s.span,{className:"hljs-keyword",children:"of"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'rxjs'"}),`;

`,a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-variable constant_",children:"PRELOADING"})," = ",a(s.span,{className:"hljs-literal",children:"true"}),`;

`,a(s.span,{className:"hljs-meta",children:"@Injectable"}),`({
  `,a(s.span,{className:"hljs-attr",children:"providedIn"}),": ",a(s.span,{className:"hljs-string",children:"'root'"}),`,
})
`,a(s.span,{className:"hljs-comment",children:"// CanLoad 会阻塞预加载"}),`
`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"CustomPreloadingStrategy"})," ",a(s.span,{className:"hljs-keyword",children:"implements"})," ",a(s.span,{className:"hljs-title class_",children:"PreloadingStrategy"}),` {
  `,a(s.span,{className:"hljs-comment",children:"// 例如用上文中的 data 中的 preloading"}),`
  `,a(s.span,{className:"hljs-title function_",children:"preload"}),"(",a(s.span,{className:"hljs-attr",children:"route"}),": ",a(s.span,{className:"hljs-title class_",children:"Route"}),", ",a(s.span,{className:"hljs-attr",children:"fn"}),": ",a(s.span,{className:"hljs-function",children:"() =>"})," ",a(s.span,{className:"hljs-title class_",children:"Observable"}),"<",a(s.span,{className:"hljs-built_in",children:"any"}),">): ",a(s.span,{className:"hljs-title class_",children:"Observable"}),"<",a(s.span,{className:"hljs-built_in",children:"any"}),`> {
    `,a(s.span,{className:"hljs-keyword",children:"if"})," (",a(s.span,{className:"hljs-variable constant_",children:"PRELOADING"}),`) {
      `,a(s.span,{className:"hljs-comment",children:"// 加载资源"}),`
      `,a(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"hljs-title function_",children:"fn"}),`();
    }
    `,a(s.span,{className:"hljs-comment",children:"// 不加载资源"}),`
    `,a(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"hljs-title function_",children:"of"}),"(",a(s.span,{className:"hljs-literal",children:"null"}),`);
  }
}
`]})}),`
`,l(s.p,{children:["然后在你的 html 中加入 路由占位符 ",a(s.code,{children:"<router-outlet></router-outlet>"})," 就好啦"]}),`
`,a(s.h3,{children:"路由守卫"}),`
`,l(s.p,{children:["新建一个 ",a(s.code,{children:"auth-guard"})," 文件 内容如下"]}),`
`,a(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Injectable"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"}),` {
  `,a(s.span,{className:"hljs-title class_",children:"CanActivate"}),`,
  `,a(s.span,{className:"hljs-title class_",children:"Router"}),`,
  `,a(s.span,{className:"hljs-title class_",children:"ActivatedRouteSnapshot"}),`,
  `,a(s.span,{className:"hljs-title class_",children:"RouterStateSnapshot"}),`,
  `,a(s.span,{className:"hljs-title class_",children:"CanActivateChild"}),`,
  `,a(s.span,{className:"hljs-title class_",children:"UrlTree"}),`,
} `,a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'@angular/router'"}),`;
`,a(s.span,{className:"hljs-keyword",children:"import"})," { ",a(s.span,{className:"hljs-title class_",children:"Observable"})," } ",a(s.span,{className:"hljs-keyword",children:"from"})," ",a(s.span,{className:"hljs-string",children:"'rxjs'"}),`;

`,a(s.span,{className:"hljs-meta",children:"@Injectable"}),`({
  `,a(s.span,{className:"hljs-attr",children:"providedIn"}),": ",a(s.span,{className:"hljs-string",children:"'root'"}),`,
})
`,a(s.span,{className:"hljs-keyword",children:"export"})," ",a(s.span,{className:"hljs-keyword",children:"class"})," ",a(s.span,{className:"hljs-title class_",children:"AuthGuard"})," ",a(s.span,{className:"hljs-keyword",children:"implements"})," ",a(s.span,{className:"hljs-title class_",children:"CanActivate"}),", ",a(s.span,{className:"hljs-title class_",children:"CanActivateChild"}),` {
  `,a(s.span,{className:"hljs-title function_",children:"constructor"}),"(",l(s.span,{className:"hljs-params",children:[a(s.span,{className:"hljs-keyword",children:"private"})," router: Router"]}),`) {}
  `,a(s.span,{className:"hljs-comment",children:"// 保护子路由 例如给不同的功能模块设置权限 有权限的才可以进入"}),`
  `,a(s.span,{className:"hljs-title function_",children:"canActivateChild"}),`(
    `,a(s.span,{className:"hljs-attr",children:"childRoute"}),": ",a(s.span,{className:"hljs-title class_",children:"ActivatedRouteSnapshot"}),`,
    `,a(s.span,{className:"hljs-attr",children:"state"}),": ",a(s.span,{className:"hljs-title class_",children:"RouterStateSnapshot"}),`,
  ):
    | `,a(s.span,{className:"hljs-built_in",children:"boolean"}),`
    | `,a(s.span,{className:"hljs-title class_",children:"UrlTree"}),`
    | `,a(s.span,{className:"hljs-title class_",children:"Observable"}),"<",a(s.span,{className:"hljs-built_in",children:"boolean"})," | ",a(s.span,{className:"hljs-title class_",children:"UrlTree"}),`>
    | `,a(s.span,{className:"hljs-title class_",children:"Promise"}),"<",a(s.span,{className:"hljs-built_in",children:"boolean"})," | ",a(s.span,{className:"hljs-title class_",children:"UrlTree"}),`> {
    `,a(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"hljs-literal",children:"false"}),`;
  }
  `,a(s.span,{className:"hljs-comment",children:"// 保护路由 例如用户是否登录"}),`
  `,a(s.span,{className:"hljs-title function_",children:"canActivate"}),`(
    `,a(s.span,{className:"hljs-attr",children:"route"}),": ",a(s.span,{className:"hljs-title class_",children:"ActivatedRouteSnapshot"}),`,
    `,a(s.span,{className:"hljs-attr",children:"state"}),": ",a(s.span,{className:"hljs-title class_",children:"RouterStateSnapshot"}),`,
  ):
    | `,a(s.span,{className:"hljs-built_in",children:"boolean"}),`
    | `,a(s.span,{className:"hljs-title class_",children:"UrlTree"}),`
    | `,a(s.span,{className:"hljs-title class_",children:"Observable"}),"<",a(s.span,{className:"hljs-built_in",children:"boolean"})," | ",a(s.span,{className:"hljs-title class_",children:"UrlTree"}),`>
    | `,a(s.span,{className:"hljs-title class_",children:"Promise"}),"<",a(s.span,{className:"hljs-built_in",children:"boolean"})," | ",a(s.span,{className:"hljs-title class_",children:"UrlTree"}),`> {
    `,a(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"hljs-literal",children:"false"}),`;
  }
}
`]})}),`
`,l(s.p,{children:["然后在 ",a(s.code,{children:"app-routing.module.ts"})," 中在需要使用路由导航的地方加入 ",a(s.code,{children:"canActivate: [AuthGuard]"})," 就好啦"]}),`
`,a(s.pre,{children:l(s.code,{className:"hljs language-ts",children:[a(s.span,{className:"hljs-keyword",children:"const"})," ",a(s.span,{className:"hljs-attr",children:"routes"}),": ",a(s.span,{className:"hljs-title class_",children:"Routes"}),` = [
  {
    `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'home'"}),`,
    `,a(s.span,{className:"hljs-attr",children:"canActivate"}),": [",a(s.span,{className:"hljs-title class_",children:"AuthGuard"}),`],
    `,a(s.span,{className:"hljs-attr",children:"loadComponent"}),": ",a(s.span,{className:"hljs-function",children:"() =>"}),`
      `,a(s.span,{className:"hljs-keyword",children:"import"}),"(",a(s.span,{className:"hljs-string",children:"'@views/home/home.component'"}),").",a(s.span,{className:"hljs-title function_",children:"then"}),"(",l(s.span,{className:"hljs-function",children:[a(s.span,{className:"hljs-params",children:"mod"})," =>"]})," mod.",a(s.span,{className:"hljs-property",children:"HomeComponent"}),`),
    `,a(s.span,{className:"hljs-attr",children:"children"}),`: [
      {
        `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'charts'"}),`,
        `,a(s.span,{className:"hljs-attr",children:"loadComponent"}),": ",a(s.span,{className:"hljs-function",children:"() =>"}),`
          `,a(s.span,{className:"hljs-keyword",children:"import"}),"(",a(s.span,{className:"hljs-string",children:"'@views/charts/charts.component'"}),").",a(s.span,{className:"hljs-title function_",children:"then"}),`(
            `,l(s.span,{className:"hljs-function",children:[a(s.span,{className:"hljs-params",children:"mod"})," =>"]})," mod.",a(s.span,{className:"hljs-property",children:"ChartsComponent"}),`,
          ),
      },
    ],
  },
  {
    `,a(s.span,{className:"hljs-attr",children:"path"}),": ",a(s.span,{className:"hljs-string",children:"'article/:id'"}),`,
    `,a(s.span,{className:"hljs-attr",children:"loadComponent"}),": ",a(s.span,{className:"hljs-function",children:"() =>"}),`
      `,a(s.span,{className:"hljs-keyword",children:"import"}),"(",a(s.span,{className:"hljs-string",children:"'@views/article/article.component'"}),").",a(s.span,{className:"hljs-title function_",children:"then"}),`(
        `,l(s.span,{className:"hljs-function",children:[a(s.span,{className:"hljs-params",children:"mod"})," =>"]})," mod.",a(s.span,{className:"hljs-property",children:"ArticleComponent"}),`,
      ),
  },
];
`]})}),`
`,l(s.p,{children:["angular 有很多内置的 ",a(s.code,{children:"router guard"})," 可供你实现并使用"]}),`
`,l(s.ul,{children:[`
`,a(s.li,{children:a(s.a,{href:"https://angular.cn/api/router/CanActivate",children:"canActivate"})}),`
`,a(s.li,{children:a(s.a,{href:"https://angular.cn/api/router/CanActivateChild",children:"canActivateChild"})}),`
`,a(s.li,{children:a(s.a,{href:"https://angular.cn/api/router/CanDeactivate",children:"canDeactivate"})}),`
`,a(s.li,{children:a(s.a,{href:"https://angular.cn/api/router/CanLoad",children:"canLoad"})}),`
`]}),`
`,a(s.h3,{children:"html 中声明路由"}),`
`,a(s.p,{children:"我们可以在 html 中用如下方法声明一个路由"}),`
`,a(s.p,{children:"routerLink 第二个参数开始 会被当成 params 依次传入"}),`
`,a(s.pre,{children:l(s.code,{className:"hljs language-html",children:[l(s.span,{className:"hljs-tag",children:["<",a(s.span,{className:"hljs-name",children:"a"})," [",a(s.span,{className:"hljs-attr",children:"routerLink"}),"]=",a(s.span,{className:"hljs-string",children:`"['/article', id]"`})," [",a(s.span,{className:"hljs-attr",children:"state"}),"]=",a(s.span,{className:"hljs-string",children:`"{ fe: 'angular' }"`}),">"]}),"More",l(s.span,{className:"hljs-tag",children:["</",a(s.span,{className:"hljs-name",children:"a"}),">"]}),`
`]})})]})}function o(n={}){const{wrapper:s}=Object.assign({},c(),n.components);return s?a(s,Object.assign({},n,{children:a(e,n)})):e(n)}export{o as default,m as frontmatter};
