## React 15

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4be57790ff3244d1b666c3fedff76317~tplv-k3u1fbpfcp-zoom-1.image" />

### constructor(props)

- 组件初始化时触发

### componentWillReceiveProps(nextProps) -- 过时

- 由父组件的更新触发

### shouldComponentUpdate(nextProps, nextState)

- 返回一个 boolean 来控制组件是否更新

### componentWillMount() -- 过时

- 组件即将挂载前触发

### componentWillUpdate(nextProps, nextState) -- 过时

- 组件即将更新前触发

### componentDidUpdate()

- 组件更新后触发

### componentDidMount()

- 组件挂载完成后触发

### render()

- React 的灵魂 用于绘制 UI

### componentWillUnmount()

- 组件卸载前触发

再早些，还有 getDefaultProps 和 getInitState 这两个方法

它们都是 React.createClass() 模式下初始化数据的方法

由于这种写法在 ES6 普及后已经不常见，这里不再详细展开

> 如果你对这一块感兴趣 可以查看官网的<a href="https://reactjs.org/docs/react-without-es6.html">React Without ES6</a>

## React 16

社区的 React 生命周期图谱 👉[React16 生命周期图谱](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/751c3b8a4ad04ce8aec5961adece5cd1~tplv-k3u1fbpfcp-zoom-1.image" />

### getDerivedStateFromProps

React 为了填补 componentWillMount 的空白 便有了新的生命周期函数 getDerivedStateFromProps

```js
static getDerivedStateFromProps(props, state)
```

该生命周期的唯一用途就是使用 props 来派生/更新 state

getDerivedStateFromProps 需要一个对象格式的返回值 来更新（派生）组件的 state

并且把新增的 getDerivedStateFromProps 用 static 修饰，目的也是阻止用户在其内部使用 this

```js
// 初始化/更新时调用
static getDerivedStateFromProps(props, state) {

  console.log("getDerivedStateFromProps方法执行");

  return {

    fatherText: props.text

  }

}
```

### getSnapshotBeforeUpdate

此外 还有消失的 componentWillUpdate 与新增的 getSnapshotBeforeUpdate

它与 componentDidUpdate 组合使用如下

```js
// 组件更新时调用
getSnapshotBeforeUpdate(prevProps, prevState) {

  console.log("getSnapshotBeforeUpdate方法执行");

  return "nanshu";

}


// 组件更新后调用
componentDidUpdate(prevProps, prevState, valueFromSnapshot) {

  console.log("componentDidUpdate方法执行");

  console.log("从 getSnapshotBeforeUpdate 获取到的值是", valueFromSnapshot);

}

```

在 `React16` 前 React 采用`同步渲染`的方式

每次组件更新 都会构建一颗新的 dom 树 然后进行 diff 实现对 dom 的定向更新

但是这个过程 是一个十分耗时的递归过程

有可能在这个期间 用户都无法进行任何的操作 因为这个过程抢占了主线程 浏览器无法响应其他任何操作

而 `React16` 用 Fiber 架构重写了核心算法

将同步渲染改为了`异步渲染`

查看上图生命周期图谱左侧 可以看到生命周期又被分为了三个阶段

- render 阶段：纯净且没有副作用，可能会被 React 暂停、终止或重新启动

- pre-commit 阶段：可以读取 DOM

- commit 阶段：可以使用 DOM，运行副作用，安排更新

用户感知到是 commit 阶段 所以这个阶段始终使用同步渲染 避免任何异步渲染带来的风险

而 render 阶段则会将一个大的更新任务拆解为许多个小任务

每当执行完一个小任务时，渲染线程都会把主线程交回去，看看有没有优先级更高的工作要处理，

确保不会出现其他任务被“饿死”的情况，进而避免同步渲染带来的卡顿

因为 render 阶段的生命周期有可能被打断重新执行

所以在 render 阶段的生命周期就变得不那么”安全“了

举个 🌰 如果你在这些 unsafe 的生命周期内调用付款接口的话 emmmmmmmmmm

回过头来 看看 react15 有哪些生命周期位于 render 阶段

- componentWillMount

- componentWillUpdate

- componentWillReceiveProps

因为它们阻碍了 Fiber 架构 所以在 React16 中将其弃用
