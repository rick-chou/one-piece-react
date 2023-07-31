---
title: Node - Express
---

## Express

![Screen Shot 2022-03-13 at 11.27.21.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e07b34a250a74383ae5103db74dec89d~tplv-k3u1fbpfcp-watermark.image?)

通过 express 我们可以轻松的构建一个 web 服务器

例如以下代码就在 3000 端口创建了一个 web 服务器

```js
const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('start');
});
```

在我的理解中 express 就是一个对一系列中间件调用的函数

比如常见的处理 get 和 post 请求的方法都是中间件的调用

express 这个库导出了一个函数 查看源码

以下是入口文件 express.js 的截取代码

```js
exports = module.exports = createApplication;

/**
 * Create an express application.
 *
 * @return {Function}
 * @api public
 */

function createApplication() {
  var app = function (req, res, next) {
    app.handle(req, res, next);
  };

  mixin(app, EventEmitter.prototype, false);
  mixin(app, proto, false);

  // expose the prototype that will get set on requests
  app.request = Object.create(req, {
    app: { configurable: true, enumerable: true, writable: true, value: app },
  });

  // expose the prototype that will get set on responses
  app.response = Object.create(res, {
    app: { configurable: true, enumerable: true, writable: true, value: app },
  });

  app.init();
  return app;
}
```

express.js 导出了一个函数 createApplication 也就是我们 require 导入的函数

在这个函数中初始化了一个 app 的函数

拥有 req / res / next 等参数

并通过 minin 这个函数混入了很多属性到 app 中

具体的 API 可查阅 <a href="http://expressjs.com/en/4x/api.html">http://expressjs.com/en/4x/api.html</a>

### 中间件

传递给 express 的一个回调函数 中间件位于请求和响应之间 所以它可以

• 执行任何代码

• 更改请求和响应对象

• 结束请求响应周期 res.end

• 调用下一个中间件

我们可以使用 app.use 的方法在全局注册中间件 这样所有的路由都会匹配到这个中间件

也可以在具体的路由中使用中间件 例如如下

```js
const middlewareA = ((req,res,next)=>{
  do something...
  // 将执行权交给下一个中间件 不然程序会一直停留在这里
  next();
})

app.use(middlewareA)

app.get('/', middlewareA ,(req,res,next)=>{
  // do something...
})
```

### 托管静态文件

```js
const express = require('express');
const path = require('path');

const app = express();

// 通过/static 来访问public文件夹
app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(8080, () => {
  console.log('静态资源服务器部署成功');
});
```

![Screen Shot 2022-03-13 at 00.33.26.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b66ca35a4af456e982c309804feeab7~tplv-k3u1fbpfcp-watermark.image?)

### get

get 请求的参数都在 url 中 我们可以通过 query 和 params 这两种形式来获取

```js
const express = require('express');

const app = express();

app.get('/query', (req, res, next) => {
  res.json(req.query);
});

app.get('/param/:id', (req, res, next) => {
  res.json(req.params);
});

app.listen(3000, () => {
  console.log('start');
});
```

![Screen Shot 2022-03-13 at 00.26.28.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0319d5562764f539aa1b199b7903501~tplv-k3u1fbpfcp-watermark.image?)

![Screen Shot 2022-03-13 at 00.27.24.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05332c6859dd4c1da610bac97d460b07~tplv-k3u1fbpfcp-watermark.image?)

### post

post 请求的参数在 body 但是如果我们直接打印 body 是看不到任何结果的

这是需要引入 body-parser 这个库

这个库和不同版本的 express 集成情况如下

- 3.x 内置

- 4.x 分离

- 4.16 内置函数

所以如果是 4.x 4.16 以前的版本 我们需要手动安装这个第三方库

```js
const express = require('express');

const app = express();

// 老版本写法 不推荐
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// 4.16以后的写法 推荐
// extended false 表示使用node的内置模块querystring来解析
// true 则表示使用第三方模块qs来解析
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/login', (req, res, next) => {
  res.json(req.body);
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('server start...');
});
```

![Screen Shot 2022-03-13 at 00.22.35.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a079ac2e6d7241aa9dc0c4f7e401eb5e~tplv-k3u1fbpfcp-watermark.image?)

### 文件上传

如果使用原生的方法实现文件上传 后台处理起来会非常麻烦

因为二进制流中不仅有文件的信息 还有 header 的一些相关信息

我们可以打印一些相关的数据来看一下

```js
const express = require('express');

const app = express();

app.post('/upload', (req, res, next) => {
  res.json(req.headers);
  let data = '';
  req.on('data', buffer => {
    data += buffer;
  });
  req.on('end', () => {
    console.log(data.toString());
  });
});

app.listen(3000, () => {
  console.log('server start...');
});
```

然后我们访问 localhost:3000/upload 并上传一个文件

就可以看到 headers 信息如下

```json
{
  "user-agent": "PostmanRuntime/7.28.4",
  "accept": "*/*",
  "postman-token": "c52ac1cf-5688-438a-83e7-5ee52e694298",
  "host": "localhost:3000",
  "accept-encoding": "gzip, deflate, br",
  "connection": "keep-alive",
  "content-type": "multipart/form-data; boundary=--------------------------745445055948094794497298",
  "content-length": "22295"
}
```

控制台的信息如下 （略去一些中间的二进制流）

```
----------------------------745445055948094794497298
Content-Disposition: form-data; name="logo"; filename="avatar.jpeg"
Content-Type: image/jpeg

�����

3V�"�QC@M�d������i�i^X�6�ʸ����p�=~�`��U��YY�r0E�o�a�4�c��j���c ��lj��H��
----------------------------745445055948094794497298--
```

![Screen Shot 2022-03-13 at 10.34.26.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/341864be73f2449493605cc9f26ced94~tplv-k3u1fbpfcp-watermark.image?)

如果仔细对比 你就会发现二进制流中包含了

header 中的 content-type 中的 boundary

还有文件的 mime 类型等

如果不加处理的直接使用 fs 模块将这个二进制流写入到文件中

那么最终文件肯定无法被正确解析

如果引入 multer 模块 那么文件上传功能就会变得很简单了

例如 我们需要用户上传头像 代码如下

```js
const express = require('express');
const multer = require('multer');

const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //  第一个参数为err的相关信息 node的回调函数都是错误优先的回调
    //  第二个参数为文件上传的目的地
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    // 同样的 第一个参数为错误信息 第二个参数为文件名
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});

const upload = multer({ storage });

const app = express();

// key 必须是avatar 不然会报错
app.post('/upload', upload.single('avatar'), (req, res, next) => {
  res.json(req.file);
});

app.listen(3000, () => {
  console.log('server start...');
});
```

key 不对应时 会报错

![Screen Shot 2022-03-13 at 10.50.48.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ca3c042dd6e4a52b322f1c7f9750e2e~tplv-k3u1fbpfcp-watermark.image?)

上述方法演示的是单文件上传 req.file 中存储了文件的相关信息 如下

```json
{
  "fieldname": "avatar",
  "originalname": "CHOU16.jpg",
  "encoding": "7bit",
  "mimetype": "image/jpeg",
  "destination": "uploads",
  "filename": "avatar-1616384964609.jpg",
  "path": "uploads\\avatar-1616384964609.jpg",
  "size": 375864
}
```

如果需要支持多文件上传 例如还需要上传用户背景图 代码可改写成如下

```js
app.post(
  '/fields',
  upload.fields([
    { name: 'avatar', macCount: 1 },
    { name: 'bg', maxCount: 2 },
  ]),
  (req, res, next) => {
    console.log(req.files);
  },
);

// {
//   avatar: [
//     {
//       fieldname: 'avatar',
//       originalname: 'CHOU1.jpg',
//       encoding: '7bit',
//       mimetype: 'image/jpeg',
//       destination: 'uploads',
//       filename: 'CHOU1.jpg',
//       path: 'uploads/CHOU1.jpg',
//       size: 646567
//     }
//   ],
//   bg: [
//     {
//       fieldname: 'bg',
//       originalname: 'CHOU2.jpg',
//       encoding: '7bit',
//       mimetype: 'image/jpeg',
//       destination: 'uploads',
//       filename: 'CHOU2.jpg',
//       path: 'uploads/CHOU2.jpg',
//       size: 398519
//     }
//   ]
// }
```

如果是需要多张背景图上传 同一个 field 则可以用 array 的写法 第二个参数为最大可上传的数量

如果超过了最大数量 multer 会返回 MulterError: Unexpected field

```js
app.post('/array', upload.array('bg', 3), (req, res, next) => {
  console.log(req.files);
});

// [
//   {
//     fieldname: 'bg',
//     originalname: 'CHOU1.jpg',
//     encoding: '7bit',
//     mimetype: 'image/jpeg',
//     destination: 'uploads',
//     filename: 'CHOU1.jpg',
//     path: 'uploads/CHOU1.jpg',
//     size: 646567
//   },
//   {
//     fieldname: 'bg',
//     originalname: 'CHOU2.jpg',
//     encoding: '7bit',
//     mimetype: 'image/jpeg',
//     destination: 'uploads',
//     filename: 'CHOU2.jpg',
//     path: 'uploads/CHOU2.jpg',
//     size: 398519
//   }
// ]
```

### router

如果将所有的请求处理都放在 index.js 中处理 那么 index.js 的代码就会变的很臃肿 这个时候我们可以使用路由来拆分我们的代码

例如项目中有一个用户模块 实现增删改查的功能

我们就可以新建一个 user.js 文件

```js
const express = require('express');

const router = express.Router();

router.get('/add', (req, res, next) => {
  res.end('added');
});

router.post('/delete', (req, res, next) => {
  res.end('deleted');
});

router.post('/update', (req, res, next) => {
  res.end('updated');
});

router.post('/select', (req, res, next) => {
  res.end('selected');
});

module.exports = router;
```

然后在 index.js 中导入这个路由

```js
const express = require('express');
const userRouter = require('./user');

const app = express();

app.use('/user', userRouter);

app.listen(3000, () => {
  console.log('server start...');
});
```

### 处理异步场景

使用 async / await 的语法 也能让 Express 处理异步场景

```js
const express = require('express');

const app = express();

const middlewareA = async (req, res, next) => {
  req.message = '';
  req.message += 'A';
  await next();
  res.end(req.message);
};

const middlewareB = async (req, res, next) => {
  req.message += await Promise.resolve('B');
  await next();
};

const middlewareC = (req, res, next) => {
  req.message += 'C';
  next();
};

app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);

app.listen(3000, () => {
  console.log('server start...');
});
```

访问 3000 端口 我们可以看到 ABC 被正常输出

![Screen Shot 2022-03-25 at 11.19.26.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1bada8e71e14db4bd6211e4bcfdd324~tplv-k3u1fbpfcp-watermark.image?)
