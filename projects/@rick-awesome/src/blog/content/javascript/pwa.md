---
title: JavaScript - PWA
---

## PWA 定义

首先 带大家看一下什么是 PWA

这里给大家推荐几个接入 PWA 的站点

> https://www.yuque.com/dashboard

> https://cn.vuejs.org/index.html

分别是语雀和 Vue 的官网

如果你用 PC 端点开后 可以发现 浏览器的 url 一栏多了一个按钮 效果如下

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08bbf622f92542c0a987ae75944f8cf5~tplv-k3u1fbpfcp-zoom-1.image" width="100%"/>

如果你是 android 手机的话 也许你会看到如下的效果

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3502f74ded644c5a8ab47dfed56d089e~tplv-k3u1fbpfcp-zoom-1.image" width="45%" />

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3948190817514e739cfe3680cc2f6386~tplv-k3u1fbpfcp-zoom-1.image" width="45%"/>

如果是 iphone 手机的话 需要手动添加到桌面

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13c8121974ea41f783ec3f5becad8120~tplv-k3u1fbpfcp-zoom-1.image" width="50vw"/>

至此 你的桌面端就会多一个 PWA 版本的 Web App 点开它就可以拥有类似 Native App 的体验

OK 现在说回什么是 PWA 下面 👇 引用 MDN 上的解释

> PWA(progressing web app)，渐进式网页应用程序，是 Google 在 2016 年 GoogleI/O 大会上提出的下一代 web 应用模型，并在随后的日子里迅速发展。 一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用. 随后借助于 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能

总的来说 PWA 是为了让 Web App 可以有 Native APP 效果的一组技术的实现 它包含

- manifest

- service worker

- cache

- 消息推送

下面我们一个一个来讲

## Manifest

简单来说 manifest 就是一个描述 web app 模拟 native app 行为的 json 配置文件

它大致上长这样

```json
{
  "name": "OS - PWA",
  "short-name": "OS",
  "start_url": "/",
  "icons": [
    {
      "src": "images/logo48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "images/logo64.png",
      "sizes": "64x64",
      "type": "image/png"
    },
    {
      "src": "images/logo128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "images/logo144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "images/logo200.png",
      "sizes": "200x200",
      "type": "image/png"
    }
  ],
  "background_color": "yellow",
  "theme_color": "yellow",
  "display": "standalone"
}
```

具体的每一项配置 可以参考 MDN 的说明

> https://developer.mozilla.org/zh-CN/docs/Web/Manifest

然后在我们的 index.html 中引入 manifest.json 文件即可

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manifest</title>
    <link rel="manifest" href="manifest.json" />
  </head>
  <body>
    <h1>Hello Manifest</h1>
  </body>
</html>
```

打开浏览器的调试工具 如果 manifest 一项显示如下 则表示你配置正确了

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ec03541ff7c454bb4d9b31784d28c7d~tplv-k3u1fbpfcp-zoom-1.image" />

然而 现实是骨感的 你在 android 上或许可以看到开屏动画这些 但是在 iphone 上 你可能看不到一点效果

打开 https://caniuse.com/?search=manifest

可以看到 manifest 的兼容性目前还不是很好 iphone 上基本可以说是红红火火了

我们需要在 html 的 meta 标签中加入 针对 iphone 的属性 如下 👇

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manifest</title>
    <link rel="manifest" href="./manifest.json" />
    <!-- 兼容ios -->
    <!-- 是否隐藏safari地址栏 -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <!-- 指定应用名称 -->
    <meta name="apple-mobile-web-app-title" content="南树-PWA" />
    <!-- 修改ios状态栏颜色 -->
    <meta name="apple-mobile-web-app-status-bar-style" content="yellow" />
    <!-- 配置ios icon -->
    <link rel="apple-touch-icon" sizes="48x48" href="images/logo48.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="images/logo144.png" />
    <link rel="apple-touch-icon" sizes="200x200" href="images/logo200.png" />
  </head>
  <body>
    <h1>Hello Manifest</h1>
  </body>
</html>
```

虽然达不到 android 的效果 但是勉强 iPhone 上也可以看到一些 PWA 的痕迹了

## Service Worker

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3b403544eec42f88a85b0146305aaac~tplv-k3u1fbpfcp-zoom-1.image" />

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f2cdb6f6ee1478e94b417656aee55b9~tplv-k3u1fbpfcp-zoom-1.image" />

从上面的图可知 Service Worker 其实一个代理服务器的概念

它可以拦截页面的请求 然后决定是访问缓存还是发起 API 请求

下面的图则表明 Service Worker 其实是一种特殊的 Web Worker

因为和 UI 主线程的宿主环境不同 Service Worker 不能直接操作 DOM

除此之外 它还有以下特性

- 需要时直接唤醒 不需要时自动休眠

- 离线缓存内容开发者可控

- 一旦被安装永久存活 除非手动卸载

- 必须在 Https 环境上（localhost 除外）

- 大量使用 promise

有关 Service Worker 的生命周期可以参考下图

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1cda9bb25ca84fe99b8b79012b8b33ef~tplv-k3u1fbpfcp-zoom-1.image" />

- install 事件会在 service worker 注册成功时触发 主要用于缓存资源

- activate 事件会在 service worker 激活的时候触发 主要用于删除旧的资源

- fetch 事件会在发送请求的时候触发 主要用于缓存或者读取网络资源

在页面中注册一个 service worker 很简单

```js
// 1. 在网页加载完成的时候 注册service worker
window.addEventListener('load', () => {
  // 2. 兼容旧版本
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js')
      .then(registration => {
        console.log('注册成功', registration);
      })
      .catch(err => {
        console.log(`注册失败`, err);
      });
  }
});
```

这样便完成了一个注册 打开浏览器的调试工具 这次你可以在 service worker1 一栏中看到内容

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c341497612b4ba8ac80250f3444ee70~tplv-k3u1fbpfcp-zoom-1.image" />

接下来 说几个 service worker 的注意点

1. 如果 sw.js 发生的变化 install 事件会重新触发
2. activate 事件会在 install 事件后触发 但是如果已经存在 service worker 那么就会处于等待状态 直到当前 service worker 终止
3. 可以通过 self.skipWaiting()方法跳过等待 返回一个 promise 对象
4. 可以通过 event.waitUntil()方法防止浏览器在异步操作之前就停止了生命周期
5. service worker 激活后 会在下一次刷新页面的时候生效 可以通过 self.clients.claim()立即获取控制权

代码如下

```js
// install 事件会在service worker注册成功时触发 主要用于缓存资源
self.addEventListener('install', event => {
  console.log(`install`, event);
  // 让service worker跳过等待 直接进入activate状态 返回一个promise对象
  // self.skipWaiting();
  // 等待self.skipWaiting()执行结束 再进入activate事件
  event.waitUntil(self.skipWaiting());
});

// activate 事件会在service worker激活的时候触发 主要用于删除旧的资源
self.addEventListener('activate', event => {
  console.log(`activate`, event);
  // 当一个sw注册时 页面在下次加载时才会使用它 claim方法会立即控制这些页面
  // self.clients.claim();
  event.waitUntil(self.clients.claim());
});

// fetch 事件会在发送请求的时候触发 主要用于缓存或者读取网络资源
self.addEventListener('fetch', event => {
  console.log(`fetch`, event);
});
```

## Cache

接下来 讲讲 Cache

- cacheStorage 接口表示 Cache 对象的存储 配合 sw 来实现资源的缓存

- cache api 类似于数据库的操作

  - cache.open(cacheName).then((cache)=>{}) 用于打开缓存 返回一个匹配 cacheName 的
    cache 对象的 promise 类似于连接数据库

  - cache.keys()返回一个 promise 对象 包括所有缓存的 key

  - cache.delete(key) 根据 key 删除对应的缓存

- cache 对象常用的方法

  - cache.put(req,res) 把请求当成 key 把对应的响应存储起来

  - cache.add(url) 根据 url 发起请求 并且把结果存储起来

  - cache.addAll(urls) 抓取一个 url 数组 并且把结果都存储起来

  - cache.match(req) 获取 req 对应的 response

配合 service worker 的代码如下

```js
const CACHE_NAME = 'cache_v1';

// 缓存内容
self.addEventListener('install', async event => {
  // 开启一个cache 得到一个cache对象
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll([
    '/',
    '/static/img1.jpg',
    '/static/img2.jpg',
    '/static/img3.jpg',
    '/manifest.json',
    '/index.css',
  ]);
  await self.skipWaiting();
});

// 清除旧的缓存
self.addEventListener('activate', async event => {
  const keys = await caches.keys();
  keys.forEach(key => {
    if (key !== CACHE_NAME) {
      caches.delete(key);
    }
  });
  event.waitUntil(self.clients.claim());
});

// fetch 事件会在发送请求的时候触发 主要用于缓存或者读取网络资源
// 判断资源能否请求成功 请求成功 --> 响应成功的结果 请求失败 --> 读取caches缓存
self.addEventListener('fetch', event => {
  // 请求对象
  const req = event.request;
  // 浏览器响应
  event.respondWith(networkFirst(req));
});

// 网络优先策略
const networkFirst = async req => {
  try {
    // 先从网络读取资源
    const fresh = await fetch(req);
    return fresh;
  } catch (e) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    return cached;
  }
};
```

打开浏览器的开发者工具 我们可以看到我们想要缓存的文件都在里面了

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8179f0c3942d4154a80a13a0bbe65de2~tplv-k3u1fbpfcp-zoom-1.image" />

### 缓存策略

上述示例代码中 我们用到了网络优先策略

但其实缓存策略还有很多

- Cache only

- Network only

- Cache falling back to network

- Network falling back to cache

- Cache & network race

- Cache then network

- Generic fallback

#### Cache only

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77ddb12cd1ac483c89873fc964c0da6c~tplv-k3u1fbpfcp-zoom-1.image" width="90%" />

#### Network only

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4229477d9f8b4012ba484ed8d405e745~tplv-k3u1fbpfcp-zoom-1.image" width="90%" />

#### Cache falling back to network

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbca693df01747789a19ab3f3af2e6c3~tplv-k3u1fbpfcp-zoom-1.image" width="90%" />

#### Cache & network race

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/01946db2cfce4eae97208f50648d9638~tplv-k3u1fbpfcp-zoom-1.image" width="90%" />

#### Cache then network

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/463782688e694a2999b759d718d6990e~tplv-k3u1fbpfcp-zoom-1.image" width="90%" />

#### Generic fallback

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19d00ed9203a4a01936a96866e3bb16c~tplv-k3u1fbpfcp-zoom-1.image" width="90%" />

## 消息推送

因为引入 PWA 后 用户可能访问的是过期的缓存内容

所以我们可以调用消息推送的 API 来告诉用户

```js
// 提示授权
if (Notification.permission === 'default') {
  Notification.requestPermission();
}

if (!navigator.onLine) {
  new Notification('提示', { body: '你当前没有网络，访问的是缓存' });
}

window.addEventListener('online', () => {
  new Notification('提示', {
    body: '你已经连上网络，请刷新页面，访问最新的数据',
  });
});
```

## PWA 应用

最后简单 说一下 PWA 可以有哪些应用

例如 APP Shell 和 APP Skeleton

就是运用了上述的 Cache then network 缓存策略

在网络不好的情况下 可以先给用户呈现 Web App 大致的样子 而不是白屏
