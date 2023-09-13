import{u as c,j as n,a,F as h}from"./index-3486abdc.js";import"./antd-3342c5aa.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const m={title:"JavaScript - design-patterns-subscriber"};function l(e){const s=Object.assign({h3:"h3",ul:"ul",li:"li",p:"p",pre:"pre",code:"code",span:"span"},c(),e.components);return a(h,{children:[n(s.h3,{children:"实现思路"}),`
`,a(s.ul,{children:[`
`,a(s.li,{children:[`
`,n(s.p,{children:"创建一个对象，来存储事件和监听函数之间的关系"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"把事件和对应的监听函数写入到 eventMap 里面去"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"on()：负责注册事件的监听器，指定事件触发时的回调函数"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"emit()：负责触发事件，可以通过传参使其在触发的时候携带数据"}),`
`]}),`
`,a(s.li,{children:[`
`,n(s.p,{children:"off()：负责监听器的删除"}),`
`]}),`
`]}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-comment",children:`/**
 * 实现思路
 * on 主要是维护每一个  eventType: handler[]
 * 它们共同构成一个大的 eventMap
 */`}),`

`,n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"myEventEmitter"}),` {
  `,n(s.span,{className:"hljs-title function_",children:"constructor"}),"(",n(s.span,{className:"hljs-params"}),`) {
    `,n(s.span,{className:"hljs-comment",children:"// eventMap 用来存储事件和监听函数之间的关系"}),`
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),` = {};
  }

  `,a(s.span,{className:"hljs-comment",children:[`/**
   * `,n(s.span,{className:"hljs-doctag",children:"@description"}),` 绑定事件
   * `,n(s.span,{className:"hljs-doctag",children:"@param"})," {",n(s.span,{className:"hljs-type",children:"string"}),`} type 事件类型
   * `,n(s.span,{className:"hljs-doctag",children:"@param"})," {",n(s.span,{className:"hljs-type",children:"Function"}),`} handler 事件触发函数
   */`]}),`
  `,n(s.span,{className:"hljs-title function_",children:"on"}),"(",n(s.span,{className:"hljs-params",children:"type, handler"}),`) {
    `,n(s.span,{className:"hljs-comment",children:"// handler 必须是一个函数，如果不是直接报错"}),`
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (!(handler ",n(s.span,{className:"hljs-keyword",children:"instanceof"})," ",n(s.span,{className:"hljs-title class_",children:"Function"}),`)) {
      `,n(s.span,{className:"hljs-keyword",children:"throw"})," ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"Error"}),"(",n(s.span,{className:"hljs-string",children:"'哥 打住 请传一个函数'"}),`);
    }

    `,n(s.span,{className:"hljs-comment",children:"// 判断 type 事件对应的队列是否存在"}),`
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (!",n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),`[type]) {
      `,n(s.span,{className:"hljs-comment",children:"// 若不存在，新建该队列"}),`
      `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),`[type] = [];
    }

    `,n(s.span,{className:"hljs-comment",children:"// 往队列里推入 handler"}),`
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),"[type].",n(s.span,{className:"hljs-title function_",children:"push"}),`(handler);
  }

  `,a(s.span,{className:"hljs-comment",children:[`/**
   *
   * `,n(s.span,{className:"hljs-doctag",children:"@param"})," {",n(s.span,{className:"hljs-type",children:"string"}),`} type 事件类型
   * `,n(s.span,{className:"hljs-doctag",children:"@param"})," {",n(s.span,{className:"hljs-type",children:"*"}),`} params 事件触发函数携带的参数
   */`]}),`
  `,n(s.span,{className:"hljs-title function_",children:"emit"}),"(",n(s.span,{className:"hljs-params",children:"type, ...params"}),`) {
    `,n(s.span,{className:"hljs-comment",children:"// 假设该事件是有订阅的（对应的事件队列存在）"}),`
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (",n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),`[type]) {
      `,n(s.span,{className:"hljs-comment",children:"// 将事件队列里的 handler 依次执行出队"}),`
      `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),"[type].",n(s.span,{className:"hljs-title function_",children:"forEach"}),"(",a(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"handler"})," =>"]}),` {
        `,n(s.span,{className:"hljs-comment",children:"// 注意别忘了读取 params"}),`
        `,n(s.span,{className:"hljs-title function_",children:"handler"}),`(...params);
      });
    }
  }

  `,a(s.span,{className:"hljs-comment",children:[`/**
   *
   * `,n(s.span,{className:"hljs-doctag",children:"@param"})," {",n(s.span,{className:"hljs-type",children:"string"}),`} type 事件类型
   * `,n(s.span,{className:"hljs-doctag",children:"@param"})," {",n(s.span,{className:"hljs-type",children:"Function"}),`} handler 事件触发函数
   */`]}),`
  `,n(s.span,{className:"hljs-title function_",children:"off"}),"(",n(s.span,{className:"hljs-params",children:"type, handler"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (",n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),`[type]) {
      `,n(s.span,{className:"hljs-comment",children:"// 如果没找到 -1 >>> 0 则会是很大的数 splice就不会进行操作"}),`
      `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),"[type].",n(s.span,{className:"hljs-title function_",children:"splice"}),"(",n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),"[type].",n(s.span,{className:"hljs-title function_",children:"indexOf"}),"(handler) >>> ",n(s.span,{className:"hljs-number",children:"0"}),", ",n(s.span,{className:"hljs-number",children:"1"}),`);
    }
  }
}

`,n(s.span,{className:"hljs-comment",children:"// 实例化 myEventEmitter"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," myEvent = ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title function_",children:"myEventEmitter"}),`();
`,n(s.span,{className:"hljs-comment",children:"// 编写一个简单的 handler"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," testHandler = ",n(s.span,{className:"hljs-keyword",children:"function"})," (",n(s.span,{className:"hljs-params",children:"params"}),`) {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-string",children:["`test事件被触发了,testHandler 接收到的入参是",n(s.span,{className:"hljs-subst",children:"${params}"}),"`"]}),`);
};
`,n(s.span,{className:"hljs-comment",children:"// 监听 test 事件"}),`
myEvent.`,n(s.span,{className:"hljs-title function_",children:"on"}),"(",n(s.span,{className:"hljs-string",children:"'test'"}),`, testHandler);
`,n(s.span,{className:"hljs-comment",children:"// 在触发 test 事件的同时，传入希望 testHandler 感知的参数"}),`
myEvent.`,n(s.span,{className:"hljs-title function_",children:"emit"}),"(",n(s.span,{className:"hljs-string",children:"'test'"}),", ",n(s.span,{className:"hljs-string",children:"'newState'"}),"); ",n(s.span,{className:"hljs-comment",children:"// --> test事件被触发了，testHandler 接收到的入参是newState"}),`
`]})}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"EventMap"}),` {
  [`,n(s.span,{className:"hljs-attr",children:"key"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),"]: ",n(s.span,{className:"hljs-title class_",children:"Function"}),`[];
}

`,n(s.span,{className:"hljs-keyword",children:"export"})," ",n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"myEventEmitter"}),` {
  `,n(s.span,{className:"hljs-attr",children:"eventMap"}),": ",n(s.span,{className:"hljs-title class_",children:"EventMap"}),`;

  `,n(s.span,{className:"hljs-title function_",children:"constructor"}),"(",n(s.span,{className:"hljs-params"}),`) {
    `,n(s.span,{className:"hljs-comment",children:"// eventMap 用来存储事件和监听函数之间的关系"}),`
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),` = {};
  }

  `,n(s.span,{className:"hljs-title function_",children:"on"}),"(",a(s.span,{className:"hljs-params",children:[n(s.span,{className:"hljs-keyword",children:"type"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),", handler: ",n(s.span,{className:"hljs-built_in",children:"Function"})]}),`) {
    `,n(s.span,{className:"hljs-comment",children:"// handler 必须是一个函数，如果不是直接报错"}),`
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (!(handler ",n(s.span,{className:"hljs-keyword",children:"instanceof"})," ",n(s.span,{className:"hljs-title class_",children:"Function"}),`)) {
      `,n(s.span,{className:"hljs-keyword",children:"throw"})," ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"Error"}),"(",n(s.span,{className:"hljs-string",children:"'哥 打住 请传一个函数'"}),`);
    }

    `,n(s.span,{className:"hljs-comment",children:"// 判断 type 事件对应的队列是否存在"}),`
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (!",n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),"[",n(s.span,{className:"hljs-keyword",children:"type"}),`]) {
      `,n(s.span,{className:"hljs-comment",children:"// 若不存在，新建该队列"}),`
      `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),"[",n(s.span,{className:"hljs-keyword",children:"type"}),`] = [];
    }

    `,n(s.span,{className:"hljs-comment",children:"// 往队列里推入 handler"}),`
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),"[",n(s.span,{className:"hljs-keyword",children:"type"}),"].",n(s.span,{className:"hljs-title function_",children:"push"}),`(handler);
  }

  `,n(s.span,{className:"hljs-title function_",children:"emit"}),"(",a(s.span,{className:"hljs-params",children:[n(s.span,{className:"hljs-keyword",children:"type"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),", ...params: ",n(s.span,{className:"hljs-built_in",children:"any"}),"[]"]}),`) {
    `,n(s.span,{className:"hljs-comment",children:"// 假设该事件是有订阅的（对应的事件队列存在）"}),`
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (",n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),"[",n(s.span,{className:"hljs-keyword",children:"type"}),`]) {
      `,n(s.span,{className:"hljs-comment",children:"// 将事件队列里的 handler 依次执行出队"}),`
      `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),"[",n(s.span,{className:"hljs-keyword",children:"type"}),"].",n(s.span,{className:"hljs-title function_",children:"forEach"}),"(",a(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"handler"})," =>"]}),` {
        `,n(s.span,{className:"hljs-comment",children:"// 注意别忘了读取 params"}),`
        `,n(s.span,{className:"hljs-title function_",children:"handler"}),`(...params);
      });
    }
  }

  `,n(s.span,{className:"hljs-title function_",children:"off"}),"(",a(s.span,{className:"hljs-params",children:[n(s.span,{className:"hljs-keyword",children:"type"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),", handler: ",n(s.span,{className:"hljs-built_in",children:"Function"})]}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (",n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),"[",n(s.span,{className:"hljs-keyword",children:"type"}),`]) {
      `,n(s.span,{className:"hljs-comment",children:"// 如果没找到 -1 >>> 0 则会是很大的数 splice就不会进行操作"}),`
      `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),"[",n(s.span,{className:"hljs-keyword",children:"type"}),"].",n(s.span,{className:"hljs-title function_",children:"splice"}),"(",n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"eventMap"}),"[",n(s.span,{className:"hljs-keyword",children:"type"}),"].",n(s.span,{className:"hljs-title function_",children:"indexOf"}),"(handler) >>> ",n(s.span,{className:"hljs-number",children:"0"}),", ",n(s.span,{className:"hljs-number",children:"1"}),`);
    }
  }
}

`,n(s.span,{className:"hljs-comment",children:"// 实例化 myEventEmitter"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," myEvent = ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title function_",children:"myEventEmitter"}),`();
`,n(s.span,{className:"hljs-comment",children:"// 编写一个简单的 handler"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," testHandler = ",n(s.span,{className:"hljs-keyword",children:"function"})," (",n(s.span,{className:"hljs-params",children:"params"}),`) {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",a(s.span,{className:"hljs-string",children:["`test事件被触发了,testHandler 接收到的入参是",n(s.span,{className:"hljs-subst",children:"${params}"}),"`"]}),`);
};
`,n(s.span,{className:"hljs-comment",children:"// 监听 test 事件"}),`
myEvent.`,n(s.span,{className:"hljs-title function_",children:"on"}),"(",n(s.span,{className:"hljs-string",children:"'test'"}),`, testHandler);
`,n(s.span,{className:"hljs-comment",children:"// 在触发 test 事件的同时，传入希望 testHandler 感知的参数"}),`
myEvent.`,n(s.span,{className:"hljs-title function_",children:"emit"}),"(",n(s.span,{className:"hljs-string",children:"'test'"}),", ",n(s.span,{className:"hljs-string",children:"'newState'"}),"); ",n(s.span,{className:"hljs-comment",children:"// --> test事件被触发了，testHandler 接收到的入参是newState"}),`
`]})})]})}function d(e={}){const{wrapper:s}=Object.assign({},c(),e.components);return s?n(s,Object.assign({},e,{children:n(l,e)})):l(e)}export{d as default,m as frontmatter};
