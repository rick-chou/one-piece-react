---
title: React Quick Start - Props Vs State
---

## props

### props 默认值

```jsx
class Address extends Component {
  static defaultProps = {
    address: 'hangzhou',
  };

  render() {
    return (
      <>
        <p>{this.props.address}</p>
      </>
    );
  }
}
```

也可以使用 Address.defaultProps 的语法去设置默认值

### 使用 propTypes 进行类型检查

propsTypes 在使用时 需要引入 prop-types 库

**注意 在 使用时 propTypes 要以小写开头**

具体配置 官网已经写的很详细了 [参考](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html)

```jsx
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Address extends Component {
  static defaultProps = {
    address: 'hangzhou',
  };

  // 注意 这里的propTypes 是小驼峰
  static propTypes = {
    address: PropTypes.string.isRequired,
  };

  render() {
    return (
      <>
        <p>{this.props.address}</p>
      </>
    );
  }
}

export default class Example extends Component {
  render() {
    return (
      <div>
        <Address address={'123'} />
      </div>
    );
  }
}
```

上述验证 我们期望 address 传入一个字符串 但是父组件传入了一个数字

控制台 就会进行警告 但是它不是报错

## state

和 props 不同的是 props 是外部数据来维护组件

而 state 是内部数据来维护组件

但是不管是 props 还是 state 都是**不可变数据**

即 我们不可以直接去修改原始数据的 props 和 state

必须 拷贝一份新的数据进行修改

### setState

setState 继承自 Component 所以我们可以在组件中直接使用 setState 方法

我们来看一下以下代码片段

```jsx
export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'chou',
      age: 18,
    };
  }

  render() {
    return (
      <>
        <p>name : {this.state.name}</p>
        <p>age : {this.state.age}</p>
        <button onClick={() => this.handleNameChange()}>change name</button>
      </>
    );
  }

  handleNameChange() {
    this.setState({
      name: 'luckychou',
    });
  }
}
```

我们在 state 中保存了两个状态 name 和 age

但是 在点击按钮的时候 我们只修改了 name 这一个属性

所以 在这个操作的时候 age 属性 到底会有影响嘛

但其实 React 在 setState 这一个操作中 其实是合并了前后的 state

用到了 Object.assign({},oldState,newState)

### 异步 or 同步

我们修改一下刚刚的代码片段

在执行 setState 的前后 都打印一下 我们的 name 属性

```jsx
  handleNameChange() {
    console.log(this.state.name)
    this.setState({
      name: 'luckychou',
    })
    console.log(this.state.name)
  }
```

我们可以惊奇的发现 两次的打印结果都是 chou 并未更新成 最新的数据

那如果我们需要拿到最新的 state 并基于最新的数据进行操作 该怎么办呢

这时 我们可以给 setState 传入第二个参数 这是一个回调函数

```jsx
  handleNameChange() {
    console.log(this.state.name)
    this.setState(
      {
        name: 'luckychou',
      },
      () => {
        console.log('我是最新的数据哦,name : ', this.state.name)
      }
    )
    console.log(this.state.name)
  }
```

对比 三次打印结果 我们可以发现 使用这种方法 我们确实可以拿到最新的 state

我们继续修改我们的代码 添加 count 状态 和 button 按钮 并为其绑定事件

```jsx
  handleCountAdd() {
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    })
  }
```

那如果是这样呢

```jsx
  handleCountAdd() {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      })
    })
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      })
    })
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      })
    })
  }
```

未使用定时器的情况下 我们会得到超出预期的结果

虽然 事件内部执行了 三次 +1 的操作 但是点击按钮时 呈现的效果还是 只加了一次 1

而使用定时器则和我们的预期一致

OK 现在 我们来做一个总结

- setState 在合成事件(onClick)和回调函数中是异步的

- 在定时器和原生事件(通过 dom addEventListener)中是同步的
