---
title: React Quick Start - Rematch
---

关于 rematch 的介绍 可以参考[传送门](https://rematch.gitbook.io/handbook/mu-de)

rematch 可以简化传统的 redux 使我们免去写 actionType actionCreator

我们用 rematch 来实现一个数字的累加操作

保存 store 的文件

```javascript
const count = {
  state: {
    num: 0,
  },
  reducers: {
    setNum(state, num) {
      return { ...state, num };
    },
  },
  effects: dispatch => ({
    async increment(payload, rootState) {
      let { num } = rootState.count;
      num += payload;
      dispatch.count.setNum(num);
    },
  }),
};

export default count;
```

model.js 在这个文件中 我们做一个聚合导出 可以让代码更加清晰

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

```javascript
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

这里 我介绍一下 useSelector 和 useDispatch

这是 react-redux 在 7.x 之后为了 hook 而推出的

useSelector 返回 Redux store 的引用

useDispatch 返回 Redux store 中对 dispatch 函数的引用
