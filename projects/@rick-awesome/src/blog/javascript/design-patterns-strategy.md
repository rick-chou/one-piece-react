> 转载自<a href="https://www.wekic.com/article/30">Vincent</a>

## 前言

策略模式是定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。将不变的部分和变化的部分隔开是每个设计模式的主题。策略模式的目的就是使算法的使用与算法分离开来。封装的算法具有一定的独立性，不会随客户端的变化而变化。

一个策略模式的程序至少有两部分组成。第一部分是策略类，策略类封装了具体的算法，负责具体的计算过程。 第二部分是环境类`Context`，它接受了客户的要求，随后吧请求委托给某一具体的策略类。要做到这点,`Context`中要维持对摸个策略对象的引用。

## DEMO

这个 demo 是一个计算的代码段

```js
function count(type, number1, number2) {
  switch (type) {
    case 'add':
      return number1 + number2;
    case 'subtract':
      return number1 - number2;
    case 'multiply':
      return number1 * number2;
    default:
      return number1 / number2;
  }
}
// if else
function count1(type, number1, number2) {
  if (type === 'add') {
    return number1 + number2;
  } else if (type === 'subtract') {
    return number1 - number2;
  } else if (type === 'multiply') {
    return number1 * number2;
  } else {
    return number1 / number2;
  }
}
```

或者这中间的`switch`用`if...else...`来实现，但`switch`比`if...else...`更加一目了然。这段计算方法本身没有问题，但是有更加便于维护和扩展的实现方式。下面来进行改进

```js
const count = {
  add(number1, number2) {
    return number1 + number2;
  },
  subtract(number1, number2) {
    return number1 - number2;
  },
  multiply(number1, number2) {
    return number1 * number2;
  },
  divide(number1, number2) {
    return number1 / number2;
  },
};

count.add(2, 3); // 5

count.subtract(10, 3); // 7

count.multiply(2, 3); // 6

count.divide(6, 2); // 3
```

经过改造后，可以看成是一个策略模式，接下来看个复杂的例子。商场的会员分普通会员、银卡会员、金卡会员、钻石会员、至尊会员等级别，在商场消费享不同的折扣和积分。会员在同一商品的折扣分别是 98、95、9、8.8、8.5 折优惠。积分比例分别是 1、1.2、1.5、1.6、1.8。购买商品对应的会员折扣和积分获取用策略模式来实现：

```js
const priceStrategy = {
  level1(price) {
    return price * (98 / 100);
  },
  level2(price) {
    return price * (95 / 100);
  },
  level3(price) {
    return price * (90 / 100);
  },
  level4(price) {
    return price * (88 / 100);
  },
  level5(price) {
    return price * (85 / 100);
  },
};

const cumulativeScoreStrategy = {
  level1(price) {
    return Math.floor(price);
  },
  level2(price) {
    return Math.floor(price * 1.1);
  },
  level3(price) {
    return Math.floor(price * 1.2);
  },
  level4(price) {
    return Math.floor(price * 1.3);
  },
  level5(price) {
    return Math.floor(price * 1.4);
  },
};

function calculatePrice(level, price) {
  return priceStrategy[level] ? priceStrategy[level](price) : 0;
}

function calculateScore(level, price) {
  const actually = calculatePrice(level, price);
  return (
    cumulativeScoreStrategy[level] && cumulativeScoreStrategy[level](actually)
  );
}

//  一台的彩电的价格是 8888，钻石会员的折后价
calculatePrice('level4', 8888); // 7554.8
// 获得的积分
calculateScore('level4', 8888); // 10567
```

表单验证的策略模式

```js
const strategies = {
  isCorrectPassword(value, errorMsg) {
    if (!/^(?:(?=.*[A-Z])(?=.*[0-9])).\\S{7,19}$/.test(value)) {
      return errorMsg;
    }
    return null;
  },
  isNotEmpty(value, errorMsg) {
    if (value === '' || value === undefined) {
      return errorMsg;
    }
    return null;
  },
  minLength(value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
    return null;
  },
  maxLength(value, length, errorMsg) {
    if (value.length > length) {
      return errorMsg;
    }
    return null;
  },
  isMobile(value, errorMsg) {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
    return null;
  },
  isNotAllEmpty(value = [], errorMsg) {
    if (!value.some(i => !!i)) {
      return errorMsg;
    }
    return null;
  },
};

class Validator {
  constructor() {
    this.cache = [];
  }

  add(value, rules) {
    for (let i = 0, rule; (rule = rules[i++]); ) {
      const strategyArray = rule.strategy.split(':') || [];
      const { errorMsg } = rule;
      this.cache.push(() => {
        const strategy = strategyArray.shift();
        strategyArray.unshift(value);
        strategyArray.push(errorMsg);
        return strategies[strategy].apply(value, strategyArray);
      });
    }
  }

  run() {
    for (let i = 0, validatorFunc; (validatorFunc = this.cache[i++]); ) {
      const msg = validatorFunc();
      if (msg) {
        return msg;
      }
    }
    return null;
  }
}

// 使用
const validator = new Validator();
validator.add(registerForm.userName, [
  {
    strategy: 'isNonEmpty',
    errorMsg: 'userName not empty!',
  },
  {
    strategy: 'minLength:6',
    errorMsg: 'userName length should more than 6',
  },
]);
validator.add(registerForm.password, [
  {
    strategy: 'minLength:6',
    errorMsg: 'password length should more than 6',
  },
]);

const errorMsg = validator.start();

if (errorMsg) {
  console.log(errorMsg);
  return errorMsg;
}
```

> 策略模式属于对象行为型模式，主要针对一组算法，将每一个算法封装到具有共同接口的独立的类中，从而使得它们可以相互替换。策略模式使得算法可以在不影响 到客户端的情况下发生变化。通常，策略模式适用于当一个应用程序需要实现一种特定的服务或者功能，而且该程序有多种实现方式时使用。

## 策略模式的优缺点

策略模式是一种常用且有效的得设计模式，

### 优点

· 减少重复代码 策略模式利用组合、委托和多态等技术和思想，减少很多模板代码。

· 扩展性 策略模式提供了对开放-封闭原则的完美支持，将算法封装在独立的策略类里面，使它们易于切换，易于理解，易于扩展。

· 在策略模式中的算法利用组合和委托让`Context`拥有执行算法的能力，这也是继承的一种更轻便的替换方案。

### 缺点

· 使用策略模式会的程序增加了许多策略类或者策略对象，但实际上这比把他们负责的逻辑堆砌在`Context`中要更好。

· 要使用策略模式，必须了解所有的策略，必须了解各个策略之间的不同点，因为各种算法之间相互独立，对于复杂的算法处理相同的逻辑无法实现共享。
