本文参考如下文档

> <a href="https://v5.reactrouter.com/web/guides/quick-start">react-router-dom v5</a>

> <a href="https://reactrouter.com/docs/en/v6/getting-started/overview">react-router-dom v6</a>

## 前端路由原理

前端路由有两种实现方式 即 URL 的 `hash` 和 H5 的 `history`

### hash

URL 的 hash 也就是锚点(#), 本质上是改变 `window.location` 的 href 属性

我们可以通过直接赋值 `location.hash` 来改变 href, 但是页面不发生刷新

```html
<div id="app">
  <a href="#/home">home</a>
  <a href="#/about">about</a>
  <div class="router-view"></div>
</div>

<script>
  // 1.获取router-view
  const routerViewEl = document.querySelector('.router-view');

  // 2.监听hashchange
  window.addEventListener('hashchange', () => {
    switch (location.hash) {
      case '#/home':
        routerViewEl.innerHTML = 'home';
        break;
      case '#/about':
        routerViewEl.innerHTML = 'about';
        break;
      default:
        routerViewEl.innerHTML = 'default';
    }
  });
</script>
```

hash 的优势就是兼容性更好，在老版 IE 中都可以运行，但是缺陷是有一个# 显得不像一个真实的路径

### history

history 接口是 HTML5 新增的, 它有六种模式改变 URL 而不刷新页面

- replaceState：替换原来的路径

- pushState：使用新的路径

- popState：路径的回退

- go：向前或向后改变路径

- forward：向前改变路径

- back：向后改变路径

我们这里来简单演示几个方法：

```html
<div id="app">
  <a href="/home">home</a>
  <a href="/about">about</a>
  <div class="router-view"></div>
</div>

<script>
  // 1.获取router-view
  const routerViewEl = document.querySelector('.router-view');

  // 2.监听所有的a元素
  const aEls = document.getElementsByTagName('a');
  for (let aEl of aEls) {
    aEl.addEventListener('click', e => {
      e.preventDefault();
      const href = aEl.getAttribute('href');
      console.log(href);
      history.pushState({}, '', href);
      historyChange();
    });
  }

  // 3.执行设置页面操作
  function historyChange() {
    switch (location.pathname) {
      case '/home':
        routerViewEl.innerHTML = 'home';
        break;
      case '/about':
        routerViewEl.innerHTML = 'about';
        break;
      default:
        routerViewEl.innerHTML = 'default';
    }
  }
</script>
```

虽然 history 看起来是一个正常的 url 但是如果部署到服务器上的话 还需要做额外的配置

比如 `/home/article` 这个路径对服务器来说可能根本没有对应的目录 需要做 nginx 配置

## react-router

了解了前端路由的实现后 我们来看看 React 中的路由

React Router 的版本从 4 开始，路由不再集中在一个包中进行管理了

- react-router 是 router 的核心部分代码

- react-router-dom 是用于浏览器的

- react-router-native 是用于原生应用的

安装时 我们只需安装 react-router-dom 即可

react-router-dom 会自动帮助我们安装 react-router 的依赖

## react-router-dom V5

### Route

相当于一个路由的占位符 当路由匹配成功时 会展示对应的组件

有三种渲染方式

- `<Route component>`

- `<Route render>`

- `<Route children>`

分别举个 🌰 吧

```tsx
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

export default function article() {
  return (
    <Router>
      <Link to="/home">home</Link>
      <Link to="/user">user</Link>
      <Link to="/child">child</Link>

      {/* 匹配成功时 渲染组件component */}
      <Route component={Home} path="/home" />

      {/* 匹配成功时 执行render方法 */}
      <Route render={() => <h1>hello nanshu</h1>} path="/user" />

      {/* 匹配成功时 match为路由信息 可通过match来动态渲染 */}
      <Route
        children={({ match }) => (match ? <h1>Yep</h1> : <h1>Ops</h1>)}
        path="/child"
      />
    </Router>
  );
}
```

此外 Route 的属性还有

- path string ｜ string[]

  - 可以匹配一个 url 也可以匹配多个 url

- exact 精确匹配（针对路由层级）

|  path  | location.pathname | matches? |
| :----: | :---------------: | :------: |
| `/one` |      `/one`       |   yes    |
| `/one` |      `/one/`      |    no    |
| `/one` |    `/one/two`     |    no    |

- strict 严格匹配（针对路由结尾的/）

|  path   | location.pathname | matches? |
| :-----: | :---------------: | :------: |
| `/one/` |      `/one`       |    no    |
| `/one/` |      `/one/`      |   yes    |
| `/one/` |    `/one/two`     |   yes    |

- sensitive （针对路由的大小写）

|  path  | location.pathname | sensitive | matches? |
| :----: | :---------------: | :-------: | :------: |
| `/one` |      `/one`       |  `true`   |   yes    |
| `/One` |      `/one`       |  `true`   |    no    |
| `/One` |      `/one`       |  `false`  |   yes    |

### BrowserRouter / HashRouter

顾名思义 前者基于 history 实现 后者基于 hash 实现

### Link / NavLink

Link 和 NavLink 最终都会被渲染成 a 标签

区别是 NavLink 组件有两个属性 `activeStyle` 和 `activeClassName` 它们可以来控制选中时的样式

### Redirect

重定向 一般用来做首页登陆校验 举个 🌰

```tsx
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function Login() {
  return <h1>Login</h1>;
}

const isLogin = true;

export default function article() {
  return (
    <Router>
      {isLogin ? (
        <Route component={Home} path="/" exact />
      ) : (
        <Redirect to="/login" />
      )}
      <Route component={Login} path="/login" />
    </Router>
  );
}
```

### Switch

只会渲染第一个匹配到的路由 举个 🌰

```tsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function NoMatch() {
  return <h1>404</h1>;
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}
```

上述例子 如果前面的路由都没有匹配 则会展示我们的 NoMatch 404 页面

### withRouter

withRouter 是一个高阶函数 它可以为那些不受 react-router 路由控制的组件注入 history/match/location 三个路由属性

举个 🌰

```tsx
import { withRouter, BrowserRouter as Router } from 'react-router-dom';

function Home(props: any) {
  // 获取不到路由信息
  console.log('home :>> ', props);
  return <h1>Home</h1>;
}

const Article = withRouter((props: any) => {
  // 可以获取到路由信息
  console.log('article :>> ', props);
  return <h1>Article</h1>;
});

export default function article() {
  return (
    <Router>
      <Home />
      <Article />
    </Router>
  );
}
```

注意 withRouter 必须作为 HashRouter / BrowserRouter 的子组件使用

### hooks

> useParams / useLocation / useRouteMatch / useHistory

举个 🌰

```tsx
import { Button } from 'antd';
import { FC } from 'react';
import {
  useParams,
  useLocation,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

interface RouteParams {
  id: string;
}

const Article: FC = () => {
  const params = useParams<RouteParams>();
  const location = useLocation();
  const match = useRouteMatch('/basic/router/v5-hook/:id');
  const history = useHistory();
  return (
    <>
      <div className="text-4xl">Article: {params.id}</div>
      <Button onClick={() => history.push('/basic/router/v5-hook/209')}>
        Article: 209
      </Button>
    </>
  );
};

export default Article;
```

![Screen Shot 2022-04-06 at 11.00.44.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0bdac3aa015d4c5faa360ce0857d7214~tplv-k3u1fbpfcp-watermark.image?)

### react-router-config

`react-router-config` 允许我们统一的管理我们的路由信息

> 注意 这个包和 V5 绑定

举个 🌰

我们的目录结构如下 about 下还有子路由

```
├── about/
│   ├── address/
│     ├── index.jsx
│   ├── culture/
│     ├── index.jsx
│   ├── index.jsx
├── home/
│   ├── index.jsx
```

我们便可以用一份如下的代码管理这些路由

```ts
import Home from '@/components/home';
import About from '@/components/about';
import Address from '@/components/about/address';
import Culture from '@/components/about/culture';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about/address',
        component: Address,
      },
      {
        path: '/about/culture',
        component: Culture,
      },
    ],
  },
];
```

然后在需要使用的地方 引入 react-router-config

```tsx
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from '@/router';

export default function article() {
  return (
    <Router>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>

      {renderRoutes(routes)}
    </Router>
  );
}
```

然后在有子路由的组件 About 中使用时要注意 不能将整张路由表渲染 不然程序会卡死

```tsx
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default function Article(props: any) {
  // props除了有 history / location / match之外 还有一个route属性 里面有对应的子路由信息routes
  console.log('props :>> ', props);
  return (
    <>
      <h1>About</h1>
      <Link to="/about/address">address</Link>
      <Link to="/about/culture">culture</Link>
      {/* 注意⚠️ 不要把整个router放在这里渲染 */}
      {renderRoutes(props.route.routes)}
    </>
  );
}
```

## react-router-dom V6

V6 有一些破坏性的改动 目前正在致力于做 V5 的向前兼容

这里列举一些比较常用的 且有变化的改动

在项目中 目前还是使用稳定的 v5 版本

> 完整的文档参考 https://reactrouter.com/docs/en/v6

### Route

举个 🌰

```tsx
// v5
<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={Users} />
  </Switch>
</BrowserRouter>

// v6
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="users/*" element={<Users />} />
  </Routes>
</BrowserRouter>
```

### 使用 useNavigate 代替 useHistory

举个 🌰

```tsx
// v5 demo
import { useHistory } from 'react-router-dom';

function App() {
  let history = useHistory();
  function handleClick() {
    history.push('/home');
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}
```

```tsx
// v6 demo
import { useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/home');
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}
```

### 使用 useRoutes 代替 react-router-config

```ts
useRoutes([
  { path: '/', element: <Home /> },
  { path: 'dashboard', element: <Dashboard /> },
  {
    path: 'invoices',
    element: <Invoices />,
    // 嵌套子路由
    children: [
      { path: ':id', element: <Invoice /> },
      { path: 'sent', element: <SentInvoices /> },
    ],
  },
  // 404
  { path: '*', element: <NotFound /> },
]);
```
