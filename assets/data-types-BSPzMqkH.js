import{u as c,j as n,a,F as h}from"./index-CjkvZd7K.js";import"./antd-DBIoRdLU.js";import"./lodash-BU0pYqsL.js";import"./prettier-DJQX7j1f.js";import"./chance-DnaHbaGl.js";const p={title:"TypeScript - data type"};function e(l){const s=Object.assign({h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span",p:"p"},c(),l.components);return a(h,{children:[n(s.h2,{children:"类型系统"}),`
`,n(s.h3,{children:"基本数据类型"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-comment",children:"// boolean"}),`
`,n(s.span,{className:"hljs-keyword",children:"let"})," ",n(s.span,{className:"hljs-attr",children:"isDone"}),": ",n(s.span,{className:"hljs-built_in",children:"boolean"}),`;

`,n(s.span,{className:"hljs-comment",children:"// number"}),`
`,n(s.span,{className:"hljs-keyword",children:"let"})," ",n(s.span,{className:"hljs-attr",children:"count"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;

`,n(s.span,{className:"hljs-comment",children:"// string"}),`
`,n(s.span,{className:"hljs-keyword",children:"let"})," ",n(s.span,{className:"hljs-attr",children:"username"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;

`,n(s.span,{className:"hljs-comment",children:"// symbol"}),`
`,n(s.span,{className:"hljs-keyword",children:"let"})," ",n(s.span,{className:"hljs-attr",children:"unique"}),": ",n(s.span,{className:"hljs-built_in",children:"symbol"}),`;

`,n(s.span,{className:"hljs-comment",children:"// bigint"}),`
`,n(s.span,{className:"hljs-keyword",children:"let"})," ",n(s.span,{className:"hljs-attr",children:"bigBigBigNum"}),": ",n(s.span,{className:"hljs-built_in",children:"bigint"}),`;

`,n(s.span,{className:"hljs-comment",children:`/**
 * 默认情况下null和undefined是所有类型的子类型
 * 就是说你可以把null和undefined赋值给number类型的变量
 * 指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
 */`}),`

`,n(s.span,{className:"hljs-comment",children:"// undefined"}),`
`,n(s.span,{className:"hljs-keyword",children:"let"})," ",n(s.span,{className:"hljs-attr",children:"u"}),": ",n(s.span,{className:"hljs-literal",children:"undefined"}),`;

`,n(s.span,{className:"hljs-comment",children:"// null"}),`
`,n(s.span,{className:"hljs-keyword",children:"let"})," ",n(s.span,{className:"hljs-attr",children:"n"}),": ",n(s.span,{className:"hljs-literal",children:"null"}),`;

`,n(s.span,{className:"hljs-comment",children:`/**
 * never类型是任何类型的子类型，也可以赋值给任何类型
 * 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）
 * 即使any也不可以赋值给never
 */`}),`

`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"error"}),"(",a(s.span,{className:"hljs-params",children:["message: ",n(s.span,{className:"hljs-built_in",children:"string"})]}),"): ",n(s.span,{className:"hljs-built_in",children:"never"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"throw"})," ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"Error"}),`(message);
}
`]})}),`
`,n(s.h3,{children:"数组"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-comment",children:"// 数组"}),`
`,n(s.span,{className:"hljs-keyword",children:"let"})," ",n(s.span,{className:"hljs-attr",children:"arr1"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`[];

`,n(s.span,{className:"hljs-comment",children:"// 数组泛型"}),`
`,n(s.span,{className:"hljs-keyword",children:"let"})," ",n(s.span,{className:"hljs-attr",children:"arr2"}),": ",n(s.span,{className:"hljs-title class_",children:"Array"}),"<",n(s.span,{className:"hljs-built_in",children:"number"}),`>;

`,n(s.span,{className:"hljs-comment",children:"// 元组 可以限制元素的类型和个数"}),`
`,n(s.span,{className:"hljs-keyword",children:"let"})," ",n(s.span,{className:"hljs-attr",children:"arr3"}),": [",n(s.span,{className:"hljs-built_in",children:"number"}),", ",n(s.span,{className:"hljs-built_in",children:"string"}),`];

`,n(s.span,{className:"hljs-comment",children:"// 最令人熟知的可能就是React的useState 它返回了一个元组"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," [state, useState] = ",n(s.span,{className:"hljs-title class_",children:"React"}),".",n(s.span,{className:"hljs-title function_",children:"useState"}),"(",n(s.span,{className:"hljs-literal",children:"null"}),`);
`]})}),`
`,n(s.h3,{children:"函数"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-comment",children:"// 为函数定义类型"}),`
`,n(s.span,{className:"hljs-comment",children:"// 不能使用interface 因为interface只能定义对象"}),`
`,n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"Add"})," = ",a(s.span,{className:"hljs-function",children:["(",a(s.span,{className:"hljs-params",children:["x: ",n(s.span,{className:"hljs-built_in",children:"number"}),", y: ",n(s.span,{className:"hljs-built_in",children:"number"})]}),") =>"]})," ",n(s.span,{className:"hljs-built_in",children:"number"}),`;

`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"add1"}),"(",a(s.span,{className:"hljs-params",children:["x: ",n(s.span,{className:"hljs-built_in",children:"number"}),", y: ",n(s.span,{className:"hljs-built_in",children:"number"})]}),"): ",n(s.span,{className:"hljs-built_in",children:"number"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` x + y;
}

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"add2"}),": ",n(s.span,{className:"hljs-title class_",children:"Add"})," = (",n(s.span,{className:"hljs-attr",children:"x"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),", ",n(s.span,{className:"hljs-attr",children:"y"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),"): ",a(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"number"})," =>"]}),` {
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` x + y;
};

`,n(s.span,{className:"hljs-comment",children:"// 剩余参数"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"add3"}),"(",a(s.span,{className:"hljs-params",children:["x: ",n(s.span,{className:"hljs-built_in",children:"number"}),", ...y: ",n(s.span,{className:"hljs-built_in",children:"Array"}),"<",n(s.span,{className:"hljs-built_in",children:"number"}),">"]}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"return"})," x + y.",n(s.span,{className:"hljs-title function_",children:"reduce"}),"(",a(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"x, y"}),") =>"]}),` x + y);
}

`,n(s.span,{className:"hljs-comment",children:"// 默认参数"}),`
`,n(s.span,{className:"hljs-comment",children:"// 如果你想要默认参数生效的话 就把默认参数放在参数序列的最后一项吧"}),`
`,n(s.span,{className:"hljs-comment",children:"// 如下定义 就会造成歧义 编译器不知道传入一个参数的时候 到底想表达的是哪一个值"}),`
`,n(s.span,{className:"hljs-comment",children:"// 最终 我们如果想避免程序报错的话 就不得不乖乖的传入第二个参数 这样我们的默认参数就失效了"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"add4"}),"(",a(s.span,{className:"hljs-params",children:["x: ",n(s.span,{className:"hljs-built_in",children:"number"})," = ",n(s.span,{className:"hljs-number",children:"2"}),", y: ",n(s.span,{className:"hljs-built_in",children:"number"})]}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` x + y;
}
`,n(s.span,{className:"hljs-title function_",children:"add4"}),"(",n(s.span,{className:"hljs-number",children:"3"}),", ",n(s.span,{className:"hljs-number",children:"5"}),`);

`,n(s.span,{className:"hljs-comment",children:"// 可选参数"}),`
`,n(s.span,{className:"hljs-comment",children:"// 可选参数必须放在参数序列的最后一项"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"add5"}),"(",a(s.span,{className:"hljs-params",children:["x: ",n(s.span,{className:"hljs-built_in",children:"number"}),", y?: ",n(s.span,{className:"hljs-built_in",children:"number"})]}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` x + y;
}

`,n(s.span,{className:"hljs-comment",children:"// 函数重载"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"showType"}),"(",a(s.span,{className:"hljs-params",children:["x: ",n(s.span,{className:"hljs-built_in",children:"any"})]}),"): ",n(s.span,{className:"hljs-built_in",children:"any"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"if"})," (",n(s.span,{className:"hljs-keyword",children:"typeof"})," x === ",n(s.span,{className:"hljs-string",children:"'number'"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-string",children:"'number'"}),`;
  } `,n(s.span,{className:"hljs-keyword",children:"else"})," ",n(s.span,{className:"hljs-keyword",children:"if"})," (",n(s.span,{className:"hljs-keyword",children:"typeof"})," x === ",n(s.span,{className:"hljs-string",children:"'string'"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-string",children:"'string'"}),`;
  } `,n(s.span,{className:"hljs-keyword",children:"else"}),` {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-string",children:`"I don't know"`}),`;
  }
}
`]})}),`
`,n(s.h3,{children:"枚举"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-comment",children:`/**
 * 默认情况下，从0开始为元素编号
 * 也可以手动为某个枚举值赋值 下一个枚举值为前一个枚举值 + 1
 */`}),`

`,n(s.span,{className:"hljs-keyword",children:"enum"})," ",n(s.span,{className:"hljs-title class_",children:"Color"}),` {
  `,n(s.span,{className:"hljs-title class_",children:"Red"}),`,
  `,n(s.span,{className:"hljs-title class_",children:"Green"}),`,
  `,n(s.span,{className:"hljs-title class_",children:"Blue"}),`,
}

`,n(s.span,{className:"hljs-title class_",children:"Color"}),".",n(s.span,{className:"hljs-property",children:"Blue"}),"; ",n(s.span,{className:"hljs-comment",children:"// -->2"}),`

`,n(s.span,{className:"hljs-keyword",children:"enum"})," ",n(s.span,{className:"hljs-title class_",children:"Count"}),` {
  one = `,n(s.span,{className:"hljs-number",children:"1"}),`,
  two,
  three,
}

`,n(s.span,{className:"hljs-title class_",children:"Count"}),".",n(s.span,{className:"hljs-property",children:"three"}),"; ",n(s.span,{className:"hljs-comment",children:"// --> 3"}),`

`,n(s.span,{className:"hljs-comment",children:"// 减少魔法数字"}),`
`,n(s.span,{className:"hljs-keyword",children:"enum"})," ",n(s.span,{className:"hljs-variable constant_",children:"STATUS"}),` {
  `,n(s.span,{className:"hljs-variable constant_",children:"READY"})," = ",n(s.span,{className:"hljs-number",children:"0"}),`,
  `,n(s.span,{className:"hljs-variable constant_",children:"OK"})," = ",n(s.span,{className:"hljs-number",children:"1"}),`
  `,n(s.span,{className:"hljs-variable constant_",children:"FAILED"})," = -",n(s.span,{className:"hljs-number",children:"1"}),`
}

`,n(s.span,{className:"hljs-comment",children:"// 字符串枚举"}),`
`,n(s.span,{className:"hljs-keyword",children:"enum"})," ",n(s.span,{className:"hljs-title class_",children:"Lang"}),` {
  js = `,n(s.span,{className:"hljs-string",children:"'javascript'"}),`,
  ts = `,n(s.span,{className:"hljs-string",children:"'typescript'"}),`,
  jsx = `,n(s.span,{className:"hljs-string",children:"'react'"}),`,
  py = `,n(s.span,{className:"hljs-string",children:"'python'"}),`,
}
`]})}),`
`,n(s.p,{children:"如果你感兴趣它是如何实现的话 你可以在 babel 官网去转换它们"}),`
`,n(s.p,{children:"大致它们被 babel 转换成如下"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-meta",children:"'use strict'"}),`;

`,n(s.span,{className:"hljs-keyword",children:"var"})," ",n(s.span,{className:"hljs-title class_",children:"Color"}),`;

(`,n(s.span,{className:"hljs-keyword",children:"function"})," (",n(s.span,{className:"hljs-params",children:"Color"}),`) {
  `,n(s.span,{className:"hljs-title class_",children:"Color"}),"[(",n(s.span,{className:"hljs-title class_",children:"Color"}),"[",n(s.span,{className:"hljs-string",children:"'Red'"}),"] = ",n(s.span,{className:"hljs-number",children:"0"}),")] = ",n(s.span,{className:"hljs-string",children:"'Red'"}),`;
  `,n(s.span,{className:"hljs-title class_",children:"Color"}),"[(",n(s.span,{className:"hljs-title class_",children:"Color"}),"[",n(s.span,{className:"hljs-string",children:"'Green'"}),"] = ",n(s.span,{className:"hljs-number",children:"1"}),")] = ",n(s.span,{className:"hljs-string",children:"'Green'"}),`;
  `,n(s.span,{className:"hljs-title class_",children:"Color"}),"[(",n(s.span,{className:"hljs-title class_",children:"Color"}),"[",n(s.span,{className:"hljs-string",children:"'Blue'"}),"] = ",n(s.span,{className:"hljs-number",children:"2"}),")] = ",n(s.span,{className:"hljs-string",children:"'Blue'"}),`;
})(`,n(s.span,{className:"hljs-title class_",children:"Color"})," || (",n(s.span,{className:"hljs-title class_",children:"Color"}),` = {}));

`,n(s.span,{className:"hljs-keyword",children:"var"})," ",n(s.span,{className:"hljs-title class_",children:"Count"}),`;

(`,n(s.span,{className:"hljs-keyword",children:"function"})," (",n(s.span,{className:"hljs-params",children:"Count"}),`) {
  `,n(s.span,{className:"hljs-title class_",children:"Count"}),"[(",n(s.span,{className:"hljs-title class_",children:"Count"}),"[",n(s.span,{className:"hljs-string",children:"'one'"}),"] = ",n(s.span,{className:"hljs-number",children:"1"}),")] = ",n(s.span,{className:"hljs-string",children:"'one'"}),`;
  `,n(s.span,{className:"hljs-title class_",children:"Count"}),"[(",n(s.span,{className:"hljs-title class_",children:"Count"}),"[",n(s.span,{className:"hljs-string",children:"'two'"}),"] = ",n(s.span,{className:"hljs-number",children:"2"}),")] = ",n(s.span,{className:"hljs-string",children:"'two'"}),`;
  `,n(s.span,{className:"hljs-title class_",children:"Count"}),"[(",n(s.span,{className:"hljs-title class_",children:"Count"}),"[",n(s.span,{className:"hljs-string",children:"'three'"}),"] = ",n(s.span,{className:"hljs-number",children:"3"}),")] = ",n(s.span,{className:"hljs-string",children:"'three'"}),`;
})(`,n(s.span,{className:"hljs-title class_",children:"Count"})," || (",n(s.span,{className:"hljs-title class_",children:"Count"}),` = {}));

`,n(s.span,{className:"hljs-keyword",children:"var"})," ",n(s.span,{className:"hljs-title class_",children:"Lang"}),`;

(`,n(s.span,{className:"hljs-keyword",children:"function"})," (",n(s.span,{className:"hljs-params",children:"Lang"}),`) {
  `,n(s.span,{className:"hljs-title class_",children:"Lang"}),"[",n(s.span,{className:"hljs-string",children:"'js'"}),"] = ",n(s.span,{className:"hljs-string",children:"'javascript'"}),`;
  `,n(s.span,{className:"hljs-title class_",children:"Lang"}),"[",n(s.span,{className:"hljs-string",children:"'ts'"}),"] = ",n(s.span,{className:"hljs-string",children:"'typescript'"}),`;
  `,n(s.span,{className:"hljs-title class_",children:"Lang"}),"[",n(s.span,{className:"hljs-string",children:"'jsx'"}),"] = ",n(s.span,{className:"hljs-string",children:"'react'"}),`;
  `,n(s.span,{className:"hljs-title class_",children:"Lang"}),"[",n(s.span,{className:"hljs-string",children:"'py'"}),"] = ",n(s.span,{className:"hljs-string",children:"'python'"}),`;
})(`,n(s.span,{className:"hljs-title class_",children:"Lang"})," || (",n(s.span,{className:"hljs-title class_",children:"Lang"}),` = {}));
`]})}),`
`,n(s.h3,{children:"类"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-comment",children:"// 类继承接口"}),`
`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"IPerson"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"readonly"})," ",n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
}

`,n(s.span,{className:"hljs-comment",children:"// Person类中需要定义所有IPerson接口中的成员"}),`
`,n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"Person"})," ",n(s.span,{className:"hljs-keyword",children:"implements"})," ",n(s.span,{className:"hljs-title class_",children:"IPerson"}),` {
  `,n(s.span,{className:"hljs-comment",children:"// 公开 和不加修饰符 效果一样 表示在任意位置都可以访问"}),`
  `,n(s.span,{className:"hljs-keyword",children:"public"})," ",n(s.span,{className:"hljs-attr",children:"nickname"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-comment",children:"// 只读 只能读取 不能赋值"}),`
  `,n(s.span,{className:"hljs-keyword",children:"readonly"})," ",n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"})," = ",n(s.span,{className:"hljs-string",children:"'花匠'"}),`;
  `,n(s.span,{className:"hljs-comment",children:"// 受保护的 protected成员在派生类中仍然可以访问"}),`
  `,n(s.span,{className:"hljs-keyword",children:"protected"})," ",n(s.span,{className:"hljs-attr",children:"gender"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  `,n(s.span,{className:"hljs-comment",children:"// 私有 不能在声明它的类的外部访问"}),`
  `,n(s.span,{className:"hljs-keyword",children:"private"})," ",n(s.span,{className:"hljs-attr",children:"_age"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
  `,n(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:["nickname: ",n(s.span,{className:"hljs-built_in",children:"string"}),", gender: ",n(s.span,{className:"hljs-built_in",children:"string"}),", age: ",n(s.span,{className:"hljs-built_in",children:"number"})]}),`) {
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"nickname"}),` = nickname;
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"gender"}),` = gender;
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"_age"}),` = age;
  }
  `,n(s.span,{className:"hljs-comment",children:"// 静态方法 使用类型.调用"}),`
  `,n(s.span,{className:"hljs-keyword",children:"static"})," ",n(s.span,{className:"hljs-title function_",children:"sayHi"}),"(",n(s.span,{className:"hljs-params"}),`) {
    `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"name"}),`);
  }
  `,n(s.span,{className:"hljs-comment",children:"// getters/setters 存取器件"}),`
  `,n(s.span,{className:"hljs-keyword",children:"set"})," ",n(s.span,{className:"hljs-title function_",children:"age"}),"(",a(s.span,{className:"hljs-params",children:["age: ",n(s.span,{className:"hljs-built_in",children:"number"})]}),`) {
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"_age"}),` = age;
  }
  `,n(s.span,{className:"hljs-keyword",children:"get"})," ",n(s.span,{className:"hljs-title function_",children:"age"}),"(): ",n(s.span,{className:"hljs-built_in",children:"number"}),` {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"_age"}),`;
  }
}

`,n(s.span,{className:"hljs-keyword",children:"const"})," person = ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"Person"}),"(",n(s.span,{className:"hljs-string",children:"'nanshu'"}),", ",n(s.span,{className:"hljs-string",children:"'man'"}),", ",n(s.span,{className:"hljs-number",children:"18"}),`);
person.`,n(s.span,{className:"hljs-property",children:"name"}),"; ",n(s.span,{className:"hljs-comment",children:"// --> 花匠"}),`
person.`,n(s.span,{className:"hljs-property",children:"nickname"}),"; ",n(s.span,{className:"hljs-comment",children:"// --> nanshu"}),`

`,n(s.span,{className:"hljs-comment",children:"// 不能访问gender 因为gender是protected 只能在声明的类和派生类中访问"}),`
`,n(s.span,{className:"hljs-comment",children:"// person.gender;  Property 'gender' is protected and only accessible within class 'Person' and its subclasses."}),`

`,n(s.span,{className:"hljs-comment",children:"// 不能访问gender 因为age是private 只能在声明的类中访问"}),`
`,n(s.span,{className:"hljs-comment",children:"// stu.age;  Property 'age' is private and only accessible within class 'Student'"}),`

`,n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"Student"})," ",n(s.span,{className:"hljs-keyword",children:"extends"})," ",n(s.span,{className:"hljs-title class_ inherited__",children:"Person"}),` {
  `,n(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:["nickname: ",n(s.span,{className:"hljs-built_in",children:"string"}),", gender: ",n(s.span,{className:"hljs-built_in",children:"string"}),", age: ",n(s.span,{className:"hljs-built_in",children:"number"})]}),`) {
    `,n(s.span,{className:"hljs-variable language_",children:"super"}),`(nickname, gender, age);
    `,n(s.span,{className:"hljs-comment",children:"// 不能访问父类中的私有成员"}),`
    `,n(s.span,{className:"hljs-comment",children:"// super.age; Property 'age' is private and only accessible within class 'Person'."}),`
    
    `,n(s.span,{className:"hljs-comment",children:"// public protected readonly修饰的成员都可以访问"}),`
    `,n(s.span,{className:"hljs-variable language_",children:"super"}),".",n(s.span,{className:"hljs-property",children:"name"}),`;
    `,n(s.span,{className:"hljs-variable language_",children:"super"}),".",n(s.span,{className:"hljs-property",children:"nickname"}),`;
    `,n(s.span,{className:"hljs-variable language_",children:"super"}),".",n(s.span,{className:"hljs-property",children:"gender"}),`;
  }
}

`,n(s.span,{className:"hljs-comment",children:"// 和接口不同 接口不能包含成员的实现细节 且不能包含修饰符"}),`
`,n(s.span,{className:"hljs-comment",children:"// 但是抽象类可以包含成员的实现细节 并且可以包含访问修饰符"}),`
`,n(s.span,{className:"hljs-keyword",children:"abstract"})," ",n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"Animal"}),` {
  `,n(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:[n(s.span,{className:"hljs-keyword",children:"public"})," name: ",n(s.span,{className:"hljs-built_in",children:"string"})]}),`) {
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"name"}),` = name;
  }
  `,n(s.span,{className:"hljs-keyword",children:"abstract"})," ",n(s.span,{className:"hljs-title function_",children:"makeSound"}),"(): ",n(s.span,{className:"hljs-built_in",children:"void"}),`;
  `,n(s.span,{className:"hljs-title function_",children:"move"}),"(): ",n(s.span,{className:"hljs-built_in",children:"void"}),` {
    `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'moving...'"}),`);
  }
}

`,n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"Dog"})," ",n(s.span,{className:"hljs-keyword",children:"extends"})," ",n(s.span,{className:"hljs-title class_ inherited__",children:"Animal"}),` {
  `,n(s.span,{className:"hljs-title function_",children:"makeSound"}),"(",n(s.span,{className:"hljs-params"}),`) {
    `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(",n(s.span,{className:"hljs-string",children:"'make sound'"}),`);
  }
}

`,n(s.span,{className:"hljs-keyword",children:"const"})," dog = ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"Dog"}),"(",n(s.span,{className:"hljs-string",children:"'小花'"}),`);
dog.`,n(s.span,{className:"hljs-property",children:"name"}),"; ",n(s.span,{className:"hljs-comment",children:"// --> 小花"}),`
dog.`,n(s.span,{className:"hljs-title function_",children:"move"}),"(); ",n(s.span,{className:"hljs-comment",children:"// --> moving"}),`
dog.`,n(s.span,{className:"hljs-title function_",children:"move"}),"(); ",n(s.span,{className:"hljs-comment",children:"// --> make sound"}),`

`,n(s.span,{className:"hljs-comment",children:"// 类当作接口使用"}),`
`,n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"Point"}),` {
  `,n(s.span,{className:"hljs-attr",children:"x"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
  `,n(s.span,{className:"hljs-attr",children:"y"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"pointA"}),": ",n(s.span,{className:"hljs-title class_",children:"Point"})," = { ",n(s.span,{className:"hljs-attr",children:"x"}),": ",n(s.span,{className:"hljs-number",children:"7"}),", ",n(s.span,{className:"hljs-attr",children:"y"}),": ",n(s.span,{className:"hljs-number",children:"10"}),` };

`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"Point3D"})," ",n(s.span,{className:"hljs-keyword",children:"extends"})," ",n(s.span,{className:"hljs-title class_",children:"Point"}),` {
  `,n(s.span,{className:"hljs-attr",children:"z"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"pointB"}),": ",n(s.span,{className:"hljs-title class_",children:"Point3D"})," = { ",n(s.span,{className:"hljs-attr",children:"x"}),": ",n(s.span,{className:"hljs-number",children:"7"}),", ",n(s.span,{className:"hljs-attr",children:"y"}),": ",n(s.span,{className:"hljs-number",children:"1"}),", ",n(s.span,{className:"hljs-attr",children:"z"}),": ",n(s.span,{className:"hljs-number",children:"10"}),` };
`]})}),`
`,n(s.h3,{children:"泛型"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-comment",children:"// 泛型函数"}),`
`,n(s.span,{className:"hljs-comment",children:"// 如果我们想实现一个函数 类似shell中的echo 输入什么就返回什么"}),`
`,n(s.span,{className:"hljs-comment",children:"// 但是 我们不知道用户在实际使用的时候 会传入什么类型 当然我们可以使用any 但是这🧐好像很随意"}),`
`,n(s.span,{className:"hljs-comment",children:"// 或者我们可以使用函数重载 为每一个类型具体定义 这好像又🤨"}),`
`,n(s.span,{className:"hljs-comment",children:"// 这个时候我们就可以使用泛型 "}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," echo<T>(",n(s.span,{className:"hljs-attr",children:"arg"}),`: T): T {
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` arg;
}

`,n(s.span,{className:"hljs-comment",children:"// 泛型类"}),`
`,n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"GenericNumber"}),`<T> {
  `,n(s.span,{className:"hljs-attr",children:"zeroValue"}),`: T;
  `,n(s.span,{className:"hljs-attr",children:"add"}),": ",a(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"x: T, y: T"}),") =>"]}),` T;
}

`,n(s.span,{className:"hljs-comment",children:"// 泛型约束"}),`
`,n(s.span,{className:"hljs-comment",children:"// 因为编译器不知道泛型 T 中拥有哪些方法 所以如下调用会会被ts警告⚠️"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," loggingIdentity1<T>(",n(s.span,{className:"hljs-attr",children:"arg"}),`: T): T {
  `,n(s.span,{className:"hljs-comment",children:"// console.log(arg.length);  Property 'length' does not exist on type 'T'."}),`
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` arg;
}

`,n(s.span,{className:"hljs-comment",children:"// 我们可以定义一个接口 让泛型继承这个接口 这样我们就可以安全的使用lenght属性了"}),`
`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"Lengthwise"}),` {
  `,n(s.span,{className:"hljs-attr",children:"length"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"function"})," loggingIdentity2<T ",n(s.span,{className:"hljs-keyword",children:"extends"})," ",n(s.span,{className:"hljs-title class_",children:"Lengthwise"}),">(",n(s.span,{className:"hljs-attr",children:"arg"}),`: T): T {
  `,n(s.span,{className:"hljs-comment",children:"// 这个时候就不会被ts警告⚠️了"}),`
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),"(arg.",n(s.span,{className:"hljs-property",children:"length"}),`);
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` arg;
}
`]})}),`
`,n(s.h3,{children:"接口"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-comment",children:`/**
 * 无法声明基本数据类型 只能声明对象
 * 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
 * 做为变量使用的话用const，若做为属性则使用readonly
 */`}),`

`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"IPerson"}),` {
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
  height?: `,n(s.span,{className:"hljs-built_in",children:"number"}),`;
  `,n(s.span,{className:"hljs-keyword",children:"readonly"})," ",n(s.span,{className:"hljs-attr",children:"age"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-comment",children:"//  多个interface会合并"}),`
`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"IPerson"}),` {
  `,n(s.span,{className:"hljs-attr",children:"weight"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"person"}),": ",n(s.span,{className:"hljs-title class_",children:"IPerson"}),` = {
  `,n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-string",children:"'nanshu'"}),`,
  `,n(s.span,{className:"hljs-attr",children:"height"}),": ",n(s.span,{className:"hljs-number",children:"181"}),`,
  `,n(s.span,{className:"hljs-attr",children:"weight"}),": ",n(s.span,{className:"hljs-number",children:"140"}),`,
  `,n(s.span,{className:"hljs-attr",children:"age"}),": ",n(s.span,{className:"hljs-number",children:"18"}),`,
};

`,n(s.span,{className:"hljs-comment",children:"// 索引签名"}),`

`,n(s.span,{className:"hljs-comment",children:"// 表示这个对象接受 任意string的键 any的值"}),`
`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"LooseObj"}),` {
  [`,n(s.span,{className:"hljs-attr",children:"k"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),"]: ",n(s.span,{className:"hljs-built_in",children:"any"}),`;
}

`,n(s.span,{className:"hljs-comment",children:"// 你也可以设置这个索引签名为只读"}),`
`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"ReadOnlyLooseObj"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"readonly"})," [",n(s.span,{className:"hljs-attr",children:"k"}),": ",n(s.span,{className:"hljs-built_in",children:"string"}),"]: ",n(s.span,{className:"hljs-built_in",children:"any"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"interface"})," ",n(s.span,{className:"hljs-title class_",children:"LooseArr"}),` {
  [`,n(s.span,{className:"hljs-attr",children:"k"}),": ",n(s.span,{className:"hljs-built_in",children:"number"}),"]: ",n(s.span,{className:"hljs-built_in",children:"any"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"arr"}),": ",n(s.span,{className:"hljs-title class_",children:"LooseArr"})," = [",n(s.span,{className:"hljs-number",children:"1"}),", ",n(s.span,{className:"hljs-string",children:"'1'"}),", ",n(s.span,{className:"hljs-literal",children:"true"}),`];
`]})}),`
`,n(s.h3,{children:"类型别名"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-ts",children:[n(s.span,{className:"hljs-comment",children:"// 类型别名用来给类型起一个新的名字"}),`
`,n(s.span,{className:"hljs-comment",children:"// 起别名不会新建一个类型 --> 它创建了一个新名字来引用那个类型"}),`
`,n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"Name"})," = ",n(s.span,{className:"hljs-built_in",children:"string"}),`;
`,n(s.span,{className:"hljs-keyword",children:"type"})," ",n(s.span,{className:"hljs-title class_",children:"NameResolver"})," = ",n(s.span,{className:"hljs-function",children:"() =>"})," ",n(s.span,{className:"hljs-built_in",children:"string"}),`;

`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"nickname"}),": ",n(s.span,{className:"hljs-title class_",children:"Name"})," = ",n(s.span,{className:"hljs-string",children:"'nanshu'"}),`;
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-attr",children:"handleNameResolver"}),": ",n(s.span,{className:"hljs-title class_",children:"NameResolver"})," = ",n(s.span,{className:"hljs-function",children:"() =>"})," ",n(s.span,{className:"hljs-string",children:"'nanshu'"}),`;

`,n(s.span,{className:"hljs-comment",children:"// 不同与interface type不能重复命名 但是type可以声明基本数据类型"}),`
`,n(s.span,{className:"hljs-comment",children:"// type Name = number;  Duplicate identifier 'Name'."}),`
`]})})]})}function j(l={}){const{wrapper:s}=Object.assign({},c(),l.components);return s?n(s,Object.assign({},l,{children:n(e,l)})):e(l)}export{j as default,p as frontmatter};
