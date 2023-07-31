---
title: JavaScript - debounce & throttle
---

## 函数防抖

```js
/* 
    函数防抖：一个频繁触发的函数，在规定时间内，只让函数最后一次触发 例如：
    
    - 用户输入搜索框 避免每次敲击键盘都发送请求
    - 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求
    - 调整浏览器窗口大小时，resize 次数过于频繁

    思路：关键在于清零 例如登录按钮点击一秒后发送登录请求 我们就可以创建一个定时器 每次用户点击的时候都清除这个定时器 让定时器重置
         这样就保证了这一秒内不会因为用户都频繁点击而一直发送请求 代码如下
*/

/**
 * 防抖函数
 * @param fn  要执行的函数
 * @param delay 延迟的时间
 */
function debounce(fn, delay) {
  var timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this);
    }, delay);
  };
}
```

## 函数节流

```js
/* 
    函数节流：一个函数执行一次后，只有大于设定的执行周期才会执行第二次
    适用场景：有一个频繁触发的函数，在规定时间内，只让函数触发一次 优化性能 例如

    - scroll时间 每隔1s重新计算位置 而不是一直计算
    - 浏览器播放时间 每隔1s重新计算一次播放进度

    思路：需要两个时间 lastTime 和 nowTime 来计算时间差 由此来判断是否执行事件
         先将lastTime初始化为0 然后获取系统时间 做差判断是否大于delay 如果大于则执行事件并将nowTime赋予lastTime 由此完成节流
*/

/**
 * 节流函数
 * @param fn  要执行的函数
 * @param delay 延迟的时间
 */
function throttle(fn, delay) {
  var lastTime = 0;
  return function () {
    var nowTime = Date.now();
    if (nowTime - lastTime > delay) {
      fn.call(this);
      lastTime = nowTime;
    }
  };
}
```
