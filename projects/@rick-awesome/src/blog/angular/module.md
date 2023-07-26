`NgModule` 是 `Angular` 用来组织内部模块的一种方式

例如我们的根模块 如下

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  // 引入其他 NgModule
  imports: [BrowserModule],
  // 在全局服务中生效的一些Provider
  providers: [Logger],
  // 引入组件 / 指令 / 管道
  declarations: [AppComponent],
  // 导入组件 / 指令 / 管道  在declarations引入的模版中就可以使用这些
  exports: [AppComponent],
  // 应用的主视图 只有根模块才可以使用
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### 路由模块

我们可以把功能相近的一组路由声明在一起 例如

```ts
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpInterceptorService } from './http/http-interceptor';

const routes: Routes = [
  {
    path: 'basic-syntax',
    loadComponent: () =>
      import('@basic-syntax/index.component').then(
        mod => mod.BasicSyntaxComponent,
      ),
    children: [
      {
        path: 'directive',
        loadComponent: () =>
          import('@basic-syntax/directive.component').then(
            mod => mod.DirectiveComponent,
          ),
      },
      {
        path: 'pipe',
        loadComponent: () =>
          import('@basic-syntax/pipe.component').then(mod => mod.PipeComponent),
      },
    ],
  },
];

@NgModule({
  // 只有在根组件中 才用 `forRoot`
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // 路由的拦截器
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
})
export class BasicSyntaxModule {}
```

上面演示了一个简单的路由模块

然后在你的 `AppModule` 中的 `imports` 字段中引入这个模块 这段路由就会生效了

### 共享模块 ( Sharing modules )

举个例子 如果

A 模块用到了 `HeaderComponent`

B 模块也用到了 `HeaderComponent`

那么如果在 A 模块 B 模块 的 declarations 字段都引入 `HeaderComponent` 的话

程序就会报错说 `HeaderComponent` 在多处被引入了

这个时候可以 新建一个 `ShareModuleModule`

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/component/header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule],
})
export class ShareModuleModule {}
```

然后在 A / B 模块中 不引入 `HeaderComponent` 改成引入 `ShareModuleModule` 就好了

> PS: 好吧 感觉确实有点套娃 🪆 但是一切都运行起来了 Fine ～

### Tips

我们在使用 Angular 的一些功能的时候 需要引入对应的 Module

最最最常用的例如

- 一些指令 `*ngIf` 这些 来自 `CommonModule`
- `ngModal` 双向绑定 来自 `FormsModule`
- 路由 来自 `RouterModule`
- http 来自 `HttpClientModule`
