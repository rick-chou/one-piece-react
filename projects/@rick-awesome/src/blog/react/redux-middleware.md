本文参考如下文档

> <a href="https://github.com/reduxjs/redux-thunk">redux-thunk</a>

> <a href="https://redux-saga.js.org/">redux-sage</a>

> <a href="https://rematchjs.org/">rematch</a>

## 中间件

上文中 我们介绍了 Redux 的基本用法 但是我们在 Reducer 中都是同步代码

承接上文计数器的 🌰 如果我们想在 Reducer 中将用定时器将每个操作延迟 1s

代码如下

```ts
// 创建Reducer 用于管理 View 派发过来的 Action
const reducer = (store = initStore, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_COUNTER: {
      let { count } = store;
      setTimeout(() => {
        count = count + action.payload;
      });
      return { ...store, count };
    }
    case ACTION_TYPE.SUB_COUNTER:
      return { ...store, count: store.count - action.payload };
    default:
      return store;
  }
};
```

我们用定时器来模拟 真实场景下的一些 api 操作

上文中 我们提到 Redux 有三大原则 它们都只为做一件事

让 Redux 的每一步操作都变得`可预测`

但是我们无法确定 我们在 Reducer 中书写的异步操作会在什么时候触发 从而改变 Store

这将会是 Redux 的 Store 变得难以预测

我们再来回顾一下 Redux 中的数据流

> UI —————> action（plain）—————> reducer —————> state —————> UI

**其实 action 是一个原始 js 对象（plain object）且 reducer 是一个纯函数**

所以 如果想要实现异步操作 这些具有副作用的行为时

就需要在 action 和 reducer 中间再架设一层处理异步逻辑的中间层

这就是中间件 加入中间件后 Redux 数据流如下

> UI —————> action(side function) —————> middleware —————> action(plain) —————> reducer —————> state —————> UI

既然 知道了数据流 我们就可以手动来实现一个中间层

## diy middleware

我们可以 dispatch(中间件函数) 然后在中间件函数中处理数据 最后 return 一个干净的纯函数

举个 🌰 以下是我新建的一个 middleware.ts

```ts
import { addCounter } from './store';
import { wait } from '@/utils';

export const addCounterAsync = (payload: number) => {
  wait(1000);
  return addCounter(payload);
};
```

wait 是我写的一个工具函数 用来暂停程序 模拟异步请求

```ts
const wait = (delay: number) => {
  var start = new Date().getTime();
  while (new Date().getTime() - start < delay) {
    continue;
  }
};
```

然后在组件中 我们就可以用 `addCounterAsync` 代替 `addCounter` 即可

```tsx
<Button onClick={() => dispatch(addCounterAsync(payload))}>+</Button>
```

当然 社区上早已有了很多处理异步 action 的库

下面主要介绍两种中间件 **redux-thunk** 和 **redux-saga** 然后安利一下**rematch**

## redux-thunk

改造后的代码如下 省去无关代码

```ts
// 导入核心API 创建Store
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

export const _subCounter = (payload: number) => ({
  type: ACTION_TYPE.SUB_COUNTER,
  payload,
});

export const subCounter = (payload: number) => {
  return (dispatch: any, getState: any) =>
    setTimeout(() => {
      let { count } = getState();
      count = count + payload;
      dispatch(_subCounter(count));
    }, 1000);
};

// 创建一个初始化的Store
const initStore: IStore = {
  count: 0,
};

// 创建Reducer 用于管理 View 派发过来的 Action
const reducer = (store = initStore, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPE.SUB_COUNTER:
      return { ...store, count: action.payload };
    default:
      return store;
  }
};

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

// 创建 Store 这里我们还开启了 Redux DEVTools
export const store = createStore(reducer, enhancer);
```

其他地方正常使用即可

通过 thunk 我们可以在 dispatch 前拦截 action

然后进行网络请求等异步操作 最后让 action 带上我们需要的数据 变成原始的 action(plain object) 再 dispatch 出去

但是这种方法的缺点也很明显 就是将异步请求的操作和 actionCreator 杂糅在了一起

对于每一个需要异步操作的 action 我们都需要在 actionCreator 中写一个对应的函数 这样会使 actionCreator 变的越来越大 不易于管理

所以对应的 又有一种中间件 **saga**

## redux-saga

在 saga 中 side effect 都移到了 saga.js 文件中 不再和 actionCreator 杂糅在一起

saga 的体系庞大完整 但是也相对复杂 还是用一个计数器的 🌰 来康康 saga 的使用

首先是我们的 store 文件

```ts
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

export interface IStore {
  count: number;
}

export interface IAction {
  type: string;
  [key: string]: any;
}

// 定义我们的 Action Type
export enum ACTION_TYPE {
  ADD_COUNTER = 'ADD_COUNTER',
  SUB_COUNTER = 'SUB_COUNTER',
  ADD_COUNTER_ASYNC = 'ADD_COUNTER_ASYNC',
  SUB_COUNTER_ASYNC = 'SUB_COUNTER_ASYNC',
}

// 注意这边的type类型 和saga文件中takeEvery函数中的类型一致
export const increment = (payload: number) => ({
  type: ACTION_TYPE.ADD_COUNTER_ASYNC,
  payload,
});

export const decrement = (payload: number) => ({
  type: ACTION_TYPE.SUB_COUNTER_ASYNC,
  payload,
});

// 创建一个初始化的Store
const initStore: IStore = {
  count: 0,
};

const reducer = (store = initStore, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_COUNTER:
      return { ...store, count: store.count + action.payload };
    case ACTION_TYPE.SUB_COUNTER:
      return { ...store, count: store.count - action.payload };
    default:
      return store;
  }
};

// 启用redux devtools
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 创建saga中间件对象
const sagaMiddleware = createSagaMiddleware();

// 注册中间件
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// 创建 Store 这里我们还开启了 Redux DEVTools
export const store = createStore(reducer, enhancer);

// 必须放在createStore后 再启动saga
sagaMiddleware.run(mySaga);
```

然后是 saga 文件

```ts
import { takeEvery, put, delay } from 'redux-saga/effects';
import { ACTION_TYPE } from './store';

// 执行副作用的函数
function* increment(action: any) {
  // 延迟一秒 模拟异步 可以在这里用try catch语法块返回成功/失败的action
  yield delay(1000);
  yield put({
    type: ACTION_TYPE.ADD_COUNTER,
    payload: action.payload,
  });
}

function* decrement(action: any) {
  yield delay(1000);
  yield put({
    type: ACTION_TYPE.SUB_COUNTER,
    payload: action.payload,
  });
}

function* mySaga() {
  // 组件中发起action的type应该和这里的一致
  yield takeEvery(ACTION_TYPE.ADD_COUNTER_ASYNC, increment);
  yield takeEvery(ACTION_TYPE.SUB_COUNTER_ASYNC, decrement);
}

export default mySaga;
```

## rematch

关于 rematch 的介绍 可以参考[传送门](https://rematch.gitbook.io/handbook/mu-de)

rematch 可以简化传统的 redux 使我们免去写 actionType actionCreator

我们用 rematch 来实现计数器的 🌰

首先是 store

```js
const count = {
  state: {
    count: 0,
  },
  reducers: {
    setCount(state, count) {
      return { ...state, count };
    },
  },
  // 可以在这里处理副作用 例如发起网络请求
  effects: dispatch => ({
    async increment(payload, rootState) {
      let { count } = rootState.count;
      count += payload;
      dispatch.count.setCount(count);
    },
  }),
};

export default count;
```

如果我们有多个 store 我们就可以在一个文件中统一管理我们的 store

```javascript
export { default as count } from './count';
export { default as total } from './total';
export ...
```

init 函数会帮助我们创建一个 store 同时它会帮助我们自动开启 redux devtools 调试工具

```javascript
import { init } from '@rematch/core';
import * as models from './model';

export const store = init({ models });
```

业务组件

```jsx
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './models';

const Counter = () => {
  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <div>{counter.num}</div>
      <button onClick={() => dispatch.count.increment(1)}>+1</button>
      <button onClick={() => dispatch.count.increment(10)}>+10</button>
    </>
  );
};

export default function View() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```
