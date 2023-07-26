## 背景

在 React 16.8 之前 函数式组件又被称为无状态组件

因为函数在每次执行执行的时候 都会重新执行内部的代码 导致函数无法维护自身内部的状态 例如

```js
function add(n) {
  const result = 0;
  return result + 1;
}

add(1); // --> 1
add(1); // --> 1
```

我们无法在函数中保存 result 的状态 因为每一次执行函数时 都会重新初始化 result

我们来看看 16.8 之前 类组件和函数式组件有哪些差别

- 类组件需要继承 class `React.Component`，函数组件不需要

- 类组件可以访问生命周期方法，控制组件不同阶段的状态，函数组件不能

- 类组件中可以获取到实例化后的 this，并基于这个 this 做各种各样的事情，而函数组件不可以

- 类组件中可以定义并维护 state（状态），而函数组件不可以

- ......

而类组件的状态 一般由组件内部维护 这样就会造成组件的复用性很差

前几章中 我提到了 HOC 和 Render Props

究其根本 它们都是尽可能的为了优雅的实现代码的复用

但是 这些名词的背后无疑是繁重的学习成本

而函数式组件 又无法保存状态

这个时候 hooks 就横空出世了 它想要解决的问题就是

让函数式组件拥有类似类组件的功能

我们来看一个简单的 demo

```jsx
import React, { Component } from 'react';

class ProfilePageClassComponent extends Component {
  showMessage = () => {
    alert('Followed ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}

function ProfilePageFunComponent(props) {
  const showMessage = () => {
    alert('Followed ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return <button onClick={handleClick}>Follow</button>;
}

export default class App extends React.Component {
  state = {
    user: 'nanshu',
  };
  render() {
    return (
      <>
        <label>
          <b>Choose profile to view: </b>
          <select
            value={this.state.user}
            onChange={(e) => this.setState({ user: e.target.value })}
          >
            <option value="nanshu">nanshu</option>
            <option value="chou">chou</option>
          </select>
        </label>
        <h1>Welcome to {this.state.user}’s profile!</h1>
        <p>
          <ProfilePageFunComponent user={this.state.user} />
          <b> (function)</b>
        </p>
        <p>
          <ProfilePageClassComponent user={this.state.user} />
          <b> (class)</b>
        </p>
        <p>Can you spot the difference in the behavior?</p>
      </>
    );
  }
}
```

代码有点长 但是它做的事情很简单

不管是类组件还是函数式组件都只是输出父组件给它的 props

但是我们通过 setTimeout 将预期中的渲染推迟了 3s，打破了 this.props 和渲染动作之间的这种时机上的关联

进而导致类组件在渲染时捕获到的是一个错误的、修改后的 this.props

**因为虽然 props 本身是不可变的，但 this 却是可变的，this 上的数据是可以被修改的**

this.props 的调用每次都会获取最新的 props 确保数据实时性

**而函数式组件可以确保在任何时机下读取到的 props，都是最初捕获到的那个 props**

所以函数组件是一个更加匹配其设计理念、也更有利于逻辑拆分与重用的组件表达形式

了解了为什么需要 hook 后 我们来看看 👀 有哪些 React 已经帮我们封装好的 hooks 吧

<hr />

## useState

- useState 填补了函数式组件内部不能保存状态的空白

- 更新 useState 中保存的状态时 都是走的异步更新 对同一个属性的多次更新 会被合并 只取最新的一次

- 使用回调函数更新状态时 可以拿到最新的 state

我们来对比一下类组件中的 setState

假如我们执行了一次 this.setState 那么组件大概会走如下流程

> setState --> shouldComponentUpdate --> componentWillUpdate --> render --> componentDidUpdate

设想一下 如果我们每次执行 this.setState React 都要做出上述响应

那么 大概没有几次 你的页面就会出现卡顿了 

所以 React 做了批量更新 也就是多个 setState 会被合并 

请记住 React 中所有更新状态的操作都是异步的

然而在 类组件中 如果你使用 setTimeout / Promise 这些异步的方法包裹 setState 的话 

它会让这些更新摆脱 React 的控制 从而看上去表现出了同步的样子

**但是请注意 ⚠️ 无论是在函数式组件还是类组件中 更新状态永远是异步的**

**这意味着你无法马上获取到最新的状态 如果需要的话 请使用回调函数的方式**

关于批量更新 可以参考 github 上的<a href="https://github.com/reactwg/react-18/discussions/21">📝 discussions</a>

文中提到了在即将到来的 React18 中将会默认开始批量更新

包括在类组件中 如果我们使用 setTimeout / Promise 的这些情况 

现在 React 也都能对它们进行控制 从而使类组件和函数式组件的表现趋于一致

具体有关 setState 和 useState 的介绍可以移步  Sticky Note（TODO）

👇 下面是 `useState` 的基础用法

```tsx
import React, { useState } from 'react';
import { Button } from 'antd';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // 普通调用
  const addCount = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  // 回调函数
  const addCountWithCallback = () => {
    setCount((preState) => preState + 1);
    setCount((preState) => preState + 1);
  };

  return (
    <>
      <h1>{`count:${count}`}</h1>

      {/* 会合并成一个 每次只 +1 */}
      <Button onClick={addCount}>我要打两个</Button>

      {/* 每次都会取到最新的值 每次 +2  */}
      <Button onClick={addCountWithCallback}>我也要打两个</Button>
    </>
  );
};

export default Counter;
```

## useReducer

说完 useState 再来看看 useReducer

两者都是函数式组件中对状态管理的手段

前者可看成是后者的一种实现

- 和 redux 没有关系 组件之间不共享数据

- 是 useState 的一种替代方案

- 对于复杂的业务 使用 useReducer 比 useState 会有更好的可读性

```tsx
import { useReducer } from 'react';
import { Button } from 'antd';

enum Actions {
  ADD_COUNT_VALUE = 'ADD_COUNT_VALUE',
  SUB_COUNT_VALUE = 'SUB_COUNT_VALUE',
}

interface IState {
  count: number;
}

interface IAction {
  type: Actions;
  payload?: number;
}

const myReducers = (state: IState, action: IAction) => {
  const { payload = 1 } = action;
  switch (action.type) {
    case Actions.ADD_COUNT_VALUE:
      return {
        ...state,
        count: state.count + payload,
      };
    case Actions.SUB_COUNT_VALUE:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
};

const Count = () => {
  const [state, dispatch] = useReducer(myReducers, { count: 0 });

  return (
    <div>
      <h1>当前计数：{state.count}</h1>
      <Button
        onClick={() => dispatch({ type: Actions.ADD_COUNT_VALUE, payload: 2 })}
      >
        +2
      </Button>
      <Button onClick={() => dispatch({ type: Actions.SUB_COUNT_VALUE })}>
        -1
      </Button>
    </div>
  );
};

export default function App() {
  return (
    <>
      <Count />
      <Count />
    </>
  );
}
```

执行代码后 你会发现 不同组件之间的 state 互不影响

两个 Count 组件各自维护一份自己的count

## useEffect

- 允许函数组件执行副作用操作 在一定程度上弥补了没有生命周期的缺陷

- 可以模拟类似 componentDidMount / shouldComponentUpdate / componentWillUnmount 的作用

- 可以接收两个参数，分别是回调函数与依赖数组 useEffect(callBack, [])

- 第一个参数 是一个回调函数  它可以返回一个函数用来消除副作用 类似 componentWillUnmount 可以做一些事件的解绑 定时器的关闭等

- 第二个参数 是一个数组 表示依赖项 当其中的某个值更新时 会重新执行callback

```tsx
import { FC, useEffect, useState } from 'react';

import { Button, message } from 'antd';

const Even = () => {
  useEffect(() => {
    return () => {
      message.info('奇数');
    };
  }, []);
  return <Button>偶数</Button>;
};

const Odd = () => {
  useEffect(() => {
    return () => {
      message.info('偶数');
    };
  }, []);
  return <Button>奇数</Button>;
};

const App: FC = () => {
  const [state, setState] = useState<number>(0);

  return (
    <>
      <Button onClick={() => setState(state + 1)}>{state}</Button>
      {state % 2 === 0 ? <Even /> : <Odd />}
    </>
  );
};

export default App;
```

## useContext

- 可以在子组件之间共享数据

1. 在组件外创建 context 对象 const AppContext = React.createContext({})

2. 父组件内使用 context 对象下的 Provider 并赋值

3. 在子组件内使用 context 对象 React.useContext(AppContext)

```tsx
import React from 'react';

interface ITheme {
  theme: string;
}

const AppContext = React.createContext<ITheme>({
  theme: 'red',
});

const NavBar = () => {
  const { theme } = React.useContext(AppContext);
  return <h2 style={{ color: theme }}>NavBar</h2>;
};

const Message = () => {
  const { theme } = React.useContext(AppContext);
  return <h2 style={{ color: theme }}>Message</h2>;
};

export default function App() {
  return (
    <AppContext.Provider value={{ theme: 'red' }}>
      <NavBar />
      <Message />
    </AppContext.Provider>
  );
}
```

## useRef

- 获取元素结点

- 保存数据 （永远指向最初的那个值）

```tsx
import { FC, useRef, useState } from 'react';
import { Button } from 'antd';

const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  const numRef = useRef<number>(count);
  const domRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <input defaultValue="useRef" ref={domRef} />
      <p>count : {count}</p>
      {/* numRef的值始终引用最初的那个count 不会随着count的变化而变化*/}
      <p>numRef : {numRef.current}</p>
      <Button onClick={() => setCount(count + 1)}>count+1</Button>
    </div>
  );
};

export default App;
```

## useCallback && useMemo

在函数式组件中使用 memo 包裹我们的组件 可以帮助我们对前后的 props 进行一个浅比较

```jsx
const App = memo((props) => {
  return 'UI';
});
```

但是如果 props 是引用类型 那么此时 memo 就会失效

我们可以使用 useCallBack 和下面提到 useMemo 来使我们的引用类型变成可记忆的

两者的关系如下 useMemo 的能力边界大于 useCallBack 但是两者在某些情况下可以相互转换

> useCallback(fn, deps) is equivalent to useMemo(() => fn, deps) -- React 官网

`useCallback(() => {}, [])`

useCallback 接受两个如参

第一个参数 是一个函数

第二个参数 是一个数组 是这个函数的依赖项 只有依赖项更新 函数才会重新执行

```tsx
import { useState, useCallback, useEffect } from 'react';
import { Button, message } from 'antd';

interface IProps {
  getSum: () => number;
}

const ComponentWithoutUseCallback = ({ getSum }: IProps) => {
  useEffect(() => {
    message.info('ComponentWithoutUseCallback');
  }, [getSum]);

  return null;
};

const ComponentWithUseCallback = ({ getSum }: IProps) => {
  useEffect(() => {
    message.info('ComponentWithUseCallback');
  }, [getSum]);

  return null;
};

const Parent = () => {
  const [num, setNum] = useState(0);
  const [max, setMax] = useState(100);

  // 只要父组件更新 子组件就会更新
  const methodsWithoutUseCallback = () => {
    message.info('methodsWithoutUseCallback');
    return max;
  };

  // 只有当max更新时 函数才会重新执行 子组件才会更新
  const methodsWithUseCallback = useCallback(() => {
    message.info('methodsWithUseCallback');
    return max;
  }, [max]);

  return (
    <div>
      <p>num : {num}</p>
      <Button onClick={() => setNum(num + 1)}>change num</Button>
      <Button onClick={() => setMax((pre) => pre * 2)}>change max</Button>
      <ComponentWithoutUseCallback getSum={methodsWithoutUseCallback} />
      <ComponentWithUseCallback getSum={methodsWithUseCallback} />
    </div>
  );
};

export default Parent;
```

## 自定义 hook

自定义 hook 的函数名 必须以 use 开头 比如下面是一个打印组件创建/销毁的 useLogger hook

```tsx
import { useEffect, useState } from 'react';

const useLogger = (componentName: string) => {
  useEffect(() => {
    console.log(`${componentName}组件被创建了`);

    return () => {
      console.log(`${componentName}组件被销毁了`);
    };
  }, []);
};

const Header = () => {
  useLogger('Header');

  return <h2>Header</h2>;
};

const Footer = () => {
  useLogger('Footer');

  return <h2>Footer</h2>;
};

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? 'hidden' : 'show'}</button>
      {show && <Header />}
      {show && <Footer />}
    </div>
  );
}
```

## Hooks 使用注意点

hook 的本质是链表 React 在执行 hook 的时候 是按顺序执行的

如果将 hook 放在条件/判断语句中 那么就会打破它的执行顺序 产生意想不到的结果

所以 请将你的 hook 放在最顶层进行使用

但是 一般项目中都继承了eslint 如果你非要这样的话 大概率是会被⚠️一番

## 总结

- 告别难以理解的 Class

  - this

  - 生命周期

- 解决业务逻辑难以拆分的问题

  - 逻辑一度与生命周期耦合在一起

```jsx
componentDidMount() {
// 1. 这里发起异步调用
// 2. 这里从 props 里获取某个数据，根据这个数据更新 DOM
// 3. 这里设置一个订阅
// 4. 这里随便干点别的什么
// ...
}
componentWillUnMount() {
  // 在这里卸载订阅
}
componentDidUpdate() {
  // 1. 在这里根据 DidMount 获取到的异步数据更新 DOM
  // 2. 这里从 props 里获取某个数据，根据这个数据更新 DOM（和 DidMount 的第2步一样）
}
```

- 使状态逻辑复用变得简单可行

  - HOC（高阶组件）

  - Render Props
  
<hr />

最后补充一下 无论是函数式还是类组件 都没有谁优谁劣之分

两者是思维模式上的转变

类组件是面向对象的模式

而函数式组件是函数式编程的模式

还记得那个著名的公式吗

> React = render(UI)

React 就是一个吃进数据 吐出 UI 的函数

所以函数组件从设计思想上来看，更加契合 React 的理念

但是目前来看 类组件的能力边界还是强于函数组件的

例如 在上一讲提到的处理错误边界的 `componentDidCatch`  就强依赖于类组件
