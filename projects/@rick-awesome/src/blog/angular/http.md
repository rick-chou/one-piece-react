### 基本用法

用 Angular 提供的 HttpClient 可以很轻松的实现 API 接口的访问

举个例子 新建一个 `http.service.ts`

```ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  public echoCode(
    method: 'get' | 'post' | 'delete' | 'put' | 'patch' = 'get',
    params: { code: number },
  ) {
    switch (method) {
      case 'get':
      case 'delete':
        return this.http[method](`${environment.backend}/echo-code`, {
          params,
        });
      case 'patch':
      case 'put':
      case 'post':
        return this.http[method](`${environment.backend}/echo-code`, params);
    }
  }
}
```

然后在业务中 我们就可以这样使用

```ts
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'http',
  standalone: true,
  templateUrl: './http.component.html',
})
export class HttpComponent implements OnInit {
  constructor(private http: HttpService) {}
  ngOnInit(): void {
    this.http.echoCode('get', { code: 200 }).subscribe(console.log);
    this.http.echoCode('post', { code: 200 }).subscribe(console.log);
    this.http.echoCode('delete', { code: 301 }).subscribe(console.log);
    this.http.echoCode('put', { code: 403 }).subscribe(console.log);
    this.http.echoCode('patch', { code: 500 }).subscribe(console.log);
  }
}
```

这看起来非常简单 类似 `Axios`

下面介绍一下一些常用的用法

### 错误处理

```ts
this.http
  .echoCode('get', { code: 200 })
  .pipe(catchError((err: HttpErrorResponse) => of(err)))
  .subscribe(x => {
    if (x instanceof HttpErrorResponse) {
      // do something
    } else {
      // do something
    }
  });
```

### 请求拦截

请求拦截是比较常用的

例如 你可以在这里判断 cookie 是否有效 / 全局错误处理 ...

新建 `http-interceptor.ts` 文件 （ 文件名可以随意 ）

最主要的是要实现 `HttpInterceptor` 的 `intercept` 方法

```ts
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { filter, catchError } from 'rxjs/operators';
import { HttpEvent } from '@angular/common/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(filter(event => event instanceof HttpResponse))
      .pipe(
        catchError(error => {
          console.log('catch error', error);
          return of(error);
        }),
      );
  }
}
```

然后在 module 中的 providers 中使用 这个拦截器就生效了

```ts
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
})
export class XXXModule {}
```
