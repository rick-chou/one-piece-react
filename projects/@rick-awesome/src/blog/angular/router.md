### 基本使用

在 angular 中构建自己的 Router System 非常简单

举个例子 这是我在 [angular-tutorial](https://github.com/rick-chou/angular-tutorial) 中的 `app-routing.module.ts` file

我将它稍作了改造 用来涵盖一些常用功能

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@component/login.component';

// 启动路由预加载 ( 因为懒加载的特性 在路由激活的时候再加载资源 会导致有短暂的白屏 )
import { CustomPreloadingStrategy } from '@views/basic-syntax/router/customPreloadingStrategy';

const routes: Routes = [
  {
    // 映射成 `/` 路径
    path: '',
    // 路由懒加载 这些资源不会被打包进入 `main.js 中` 路由激活时才会去加载这个js
    loadComponent: () =>
      import('@views/welcome/welcome.component').then(
        mod => mod.WelcomeComponent,
      ),
  },
  {
    // 映射成 `/home` 路径
    path: 'home',
    loadComponent: () =>
      import('@views/home/home.component').then(mod => mod.HomeComponent),
    children: [
      {
        // 映射成 `/home/charts` 路径 你不必在这里写完整的路径 你只需要写相对于父路由的路径就好了
        path: 'charts',
        loadComponent: () =>
          import('@views/charts/charts.component').then(
            mod => mod.ChartsComponent,
          ),
      },
    ],
  },
  {
    // 映射成 `/article/xxx` 路径
    // 可以在 ActivatedRoute 中获取
    // this.route.params.subscribe(data=>data['id']);
    path: 'article/:id',
    loadComponent: () =>
      import('@views/article/article.component').then(
        mod => mod.ArticleComponent,
      ),
  },
  {
    // 映射成 `/login` 路径
    path: 'login',
    // 不使用懒加载
    component: LoginComponent,
    // 给这个路由一些静态的参数
    // 可以在 ActivatedRoute 中获取
    // this.route.data.subscribe(data=>data['preloading']);
    data: {
      preloading: true,
    },
  },
  {
    // 映射成 `/login-out` 路径
    path: 'login-out',
    // 重定向到我们的首页
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

然后这是 `CustomPreloadingStrategy`

这是一个预加载策略 因为懒加载的特性 加载资源时会有短暂的白屏

所以我们可以使用预加载策略 当满足这个策略的条件时 就去加载对应路由的资源

简单来说就是实现 `PreloadingStrategy` 的 `preload` 方法

```ts
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

const PRELOADING = true;

@Injectable({
  providedIn: 'root',
})
// CanLoad 会阻塞预加载
export class CustomPreloadingStrategy implements PreloadingStrategy {
  // 例如用上文中的 data 中的 preloading
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (PRELOADING) {
      // 加载资源
      return fn();
    }
    // 不加载资源
    return of(null);
  }
}
```

然后在你的 html 中加入 路由占位符 `<router-outlet></router-outlet>` 就好啦

### 路由守卫

新建一个 `auth-guard` 文件 内容如下

```ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}
  // 保护子路由 例如给不同的功能模块设置权限 有权限的才可以进入
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return false;
  }
  // 保护路由 例如用户是否登录
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return false;
  }
}
```

然后在 `app-routing.module.ts` 中在需要使用路由导航的地方加入 `canActivate: [AuthGuard]` 就好啦

```ts
const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('@views/home/home.component').then(mod => mod.HomeComponent),
    children: [
      {
        path: 'charts',
        loadComponent: () =>
          import('@views/charts/charts.component').then(
            mod => mod.ChartsComponent,
          ),
      },
    ],
  },
  {
    path: 'article/:id',
    loadComponent: () =>
      import('@views/article/article.component').then(
        mod => mod.ArticleComponent,
      ),
  },
];
```

angular 有很多内置的 `router guard` 可供你实现并使用

- [canActivate](https://angular.cn/api/router/CanActivate)
- [canActivateChild](https://angular.cn/api/router/CanActivateChild)
- [canDeactivate](https://angular.cn/api/router/CanDeactivate)
- [canLoad](https://angular.cn/api/router/CanLoad)

### html 中声明路由

我们可以在 html 中用如下方法声明一个路由

routerLink 第二个参数开始 会被当成 params 依次传入

```html
<a [routerLink]="['/article', id]" [state]="{ fe: 'angular' }">More</a>
```
