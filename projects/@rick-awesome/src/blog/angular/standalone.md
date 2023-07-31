---
title: Angular Quick Start - Standalone Component 🔥
---

### 基本使用

> https://angular.io/guide/standalone-components

standalone 是 Angular14 推出的新特性

它可以让你的 根模块 AppModule 不至于那么臃肿

所有的 component / pipe / directive 都在被使用的时候 在对应的组件引入就好了

举个例子 这是之前的写法 我们声明一个 `Footer` 组件

然后在使用的 `Module` 中导入这个组件

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="dark:bg-gray-800 dark:text-gray-50">Footer</footer>
  `,
})
export class FooterComponent {}
```

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [HomeComponent, FooterComponent],
  exports: [],
  imports: [CommonModule],
})
export class AppModuleModule {}
```

这种写法导致我们始终无法摆脱 `NgModule`

但其实我们的意图就是在 `AppComponent` 中使用 `FooterComponent`

换成 `React` 中的写法 其实会更便于管理和理解

用上我们的新特性 `standalone`

Footer 组件就改造成这样

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  // 将该组件声明成独立组件
  standalone: true,
  template: `
    <footer class="dark:bg-gray-800 dark:text-gray-50">Footer</footer>
  `,
})
export class FooterComponent {}
```

然后比如在 Home 页面 我们就可以这样使用

```ts
import { Component } from '@angular/core';

import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  // 声明需要使用的 component / pipe / directive 但是它们也必须都是独立组件
  imports: [FooterComponent],
  template: `<app-footer></app-footer>`,
})
export class WelcomeComponent {}
```

独立组件可以直接用于懒加载 本来我们必须借助 NgModule 来实现

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomPreloadingStrategy } from '@views/basic-syntax/router/customPreloadingStrategy';

const routes: Routes = [
  {
    path: 'home',
    // 之前想要实现懒加载 这里必须是一个NgModule 现在使用独立组件也可以 并且更加简洁
    loadComponent: () =>
      import('@views/home/home.component').then(mod => mod.HomeComponent),
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
