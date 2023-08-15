import{u as c,j as s,a as e,F as r}from"./index-84428b21.js";import"./antd-e9e8fd35.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const d={title:"JavaScript - debounce & throttle"};function l(a){const n=Object.assign({h2:"h2",pre:"pre",code:"code",span:"span"},c(),a.components);return e(r,{children:[s(n.h2,{children:"函数防抖"}),`
`,s(n.pre,{children:e(n.code,{className:"hljs language-js",children:[s(n.span,{className:"hljs-comment",children:`/* 
    函数防抖：一个频繁触发的函数，在规定时间内，只让函数最后一次触发 例如：
    
    - 用户输入搜索框 避免每次敲击键盘都发送请求
    - 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求
    - 调整浏览器窗口大小时，resize 次数过于频繁

    思路：关键在于清零 例如登录按钮点击一秒后发送登录请求 我们就可以创建一个定时器 每次用户点击的时候都清除这个定时器 让定时器重置
         这样就保证了这一秒内不会因为用户都频繁点击而一直发送请求 代码如下
*/`}),`

`,e(n.span,{className:"hljs-comment",children:[`/**
 * 防抖函数
 * `,s(n.span,{className:"hljs-doctag",children:"@param"}),` fn  要执行的函数
 * `,s(n.span,{className:"hljs-doctag",children:"@param"}),` delay 延迟的时间
 */`]}),`
`,s(n.span,{className:"hljs-keyword",children:"function"})," ",s(n.span,{className:"hljs-title function_",children:"debounce"}),"(",s(n.span,{className:"hljs-params",children:"fn, delay"}),`) {
  `,s(n.span,{className:"hljs-keyword",children:"var"})," timer = ",s(n.span,{className:"hljs-literal",children:"null"}),`;
  `,s(n.span,{className:"hljs-keyword",children:"return"})," ",s(n.span,{className:"hljs-keyword",children:"function"})," (",s(n.span,{className:"hljs-params"}),`) {
    `,s(n.span,{className:"hljs-built_in",children:"clearTimeout"}),`(timer);
    timer = `,s(n.span,{className:"hljs-built_in",children:"setTimeout"}),"(",s(n.span,{className:"hljs-function",children:"() =>"}),` {
      fn.`,s(n.span,{className:"hljs-title function_",children:"call"}),"(",s(n.span,{className:"hljs-variable language_",children:"this"}),`);
    }, delay);
  };
}
`]})}),`
`,s(n.h2,{children:"函数节流"}),`
`,s(n.pre,{children:e(n.code,{className:"hljs language-js",children:[s(n.span,{className:"hljs-comment",children:`/* 
    函数节流：一个函数执行一次后，只有大于设定的执行周期才会执行第二次
    适用场景：有一个频繁触发的函数，在规定时间内，只让函数触发一次 优化性能 例如

    - scroll时间 每隔1s重新计算位置 而不是一直计算
    - 浏览器播放时间 每隔1s重新计算一次播放进度

    思路：需要两个时间 lastTime 和 nowTime 来计算时间差 由此来判断是否执行事件
         先将lastTime初始化为0 然后获取系统时间 做差判断是否大于delay 如果大于则执行事件并将nowTime赋予lastTime 由此完成节流
*/`}),`

`,e(n.span,{className:"hljs-comment",children:[`/**
 * 节流函数
 * `,s(n.span,{className:"hljs-doctag",children:"@param"}),` fn  要执行的函数
 * `,s(n.span,{className:"hljs-doctag",children:"@param"}),` delay 延迟的时间
 */`]}),`
`,s(n.span,{className:"hljs-keyword",children:"function"})," ",s(n.span,{className:"hljs-title function_",children:"throttle"}),"(",s(n.span,{className:"hljs-params",children:"fn, delay"}),`) {
  `,s(n.span,{className:"hljs-keyword",children:"var"})," lastTime = ",s(n.span,{className:"hljs-number",children:"0"}),`;
  `,s(n.span,{className:"hljs-keyword",children:"return"})," ",s(n.span,{className:"hljs-keyword",children:"function"})," (",s(n.span,{className:"hljs-params"}),`) {
    `,s(n.span,{className:"hljs-keyword",children:"var"})," nowTime = ",s(n.span,{className:"hljs-title class_",children:"Date"}),".",s(n.span,{className:"hljs-title function_",children:"now"}),`();
    `,s(n.span,{className:"hljs-keyword",children:"if"}),` (nowTime - lastTime > delay) {
      fn.`,s(n.span,{className:"hljs-title function_",children:"call"}),"(",s(n.span,{className:"hljs-variable language_",children:"this"}),`);
      lastTime = nowTime;
    }
  };
}
`]})})]})}function o(a={}){const{wrapper:n}=Object.assign({},c(),a.components);return n?s(n,Object.assign({},a,{children:s(l,a)})):l(a)}export{o as default,d as frontmatter};
