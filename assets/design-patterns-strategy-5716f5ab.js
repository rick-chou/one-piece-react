import{u as r,j as n,a as e,F as c}from"./index-cd28c823.js";import"./antd-e9e8fd35.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const m={title:"JavaScript - design-patterns-strategy"};function a(l){const s=Object.assign({blockquote:"blockquote",p:"p",h2:"h2",code:"code",pre:"pre",span:"span",h3:"h3"},r(),l.components);return e(c,{children:[e(s.blockquote,{children:[`
`,e(s.p,{children:["转载自","Vincent"]}),`
`]}),`
`,n(s.h2,{children:"前言"}),`
`,n(s.p,{children:"策略模式是定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。将不变的部分和变化的部分隔开是每个设计模式的主题。策略模式的目的就是使算法的使用与算法分离开来。封装的算法具有一定的独立性，不会随客户端的变化而变化。"}),`
`,e(s.p,{children:["一个策略模式的程序至少有两部分组成。第一部分是策略类，策略类封装了具体的算法，负责具体的计算过程。 第二部分是环境类",n(s.code,{children:"Context"}),"，它接受了客户的要求，随后吧请求委托给某一具体的策略类。要做到这点,",n(s.code,{children:"Context"}),"中要维持对摸个策略对象的引用。"]}),`
`,n(s.h2,{children:"DEMO"}),`
`,n(s.p,{children:"这个 demo 是一个计算的代码段"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"count"}),"(",n(s.span,{className:"hljs-params",children:"type, number1, number2"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"switch"}),` (type) {
    `,n(s.span,{className:"hljs-keyword",children:"case"})," ",n(s.span,{className:"hljs-string",children:"'add'"}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` number1 + number2;
    `,n(s.span,{className:"hljs-keyword",children:"case"})," ",n(s.span,{className:"hljs-string",children:"'subtract'"}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` number1 - number2;
    `,n(s.span,{className:"hljs-keyword",children:"case"})," ",n(s.span,{className:"hljs-string",children:"'multiply'"}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` number1 * number2;
    `,n(s.span,{className:"hljs-attr",children:"default"}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` number1 / number2;
  }
}
`,n(s.span,{className:"hljs-comment",children:"// if else"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"count1"}),"(",n(s.span,{className:"hljs-params",children:"type, number1, number2"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"if"})," (type === ",n(s.span,{className:"hljs-string",children:"'add'"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` number1 + number2;
  } `,n(s.span,{className:"hljs-keyword",children:"else"})," ",n(s.span,{className:"hljs-keyword",children:"if"})," (type === ",n(s.span,{className:"hljs-string",children:"'subtract'"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` number1 - number2;
  } `,n(s.span,{className:"hljs-keyword",children:"else"})," ",n(s.span,{className:"hljs-keyword",children:"if"})," (type === ",n(s.span,{className:"hljs-string",children:"'multiply'"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` number1 * number2;
  } `,n(s.span,{className:"hljs-keyword",children:"else"}),` {
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` number1 / number2;
  }
}
`]})}),`
`,e(s.p,{children:["或者这中间的",n(s.code,{children:"switch"}),"用",n(s.code,{children:"if...else..."}),"来实现，但",n(s.code,{children:"switch"}),"比",n(s.code,{children:"if...else..."}),"更加一目了然。这段计算方法本身没有问题，但是有更加便于维护和扩展的实现方式。下面来进行改进"]}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"}),` count = {
  `,n(s.span,{className:"hljs-title function_",children:"add"}),"(",n(s.span,{className:"hljs-params",children:"number1, number2"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` number1 + number2;
  },
  `,n(s.span,{className:"hljs-title function_",children:"subtract"}),"(",n(s.span,{className:"hljs-params",children:"number1, number2"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` number1 - number2;
  },
  `,n(s.span,{className:"hljs-title function_",children:"multiply"}),"(",n(s.span,{className:"hljs-params",children:"number1, number2"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` number1 * number2;
  },
  `,n(s.span,{className:"hljs-title function_",children:"divide"}),"(",n(s.span,{className:"hljs-params",children:"number1, number2"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` number1 / number2;
  },
};

count.`,n(s.span,{className:"hljs-title function_",children:"add"}),"(",n(s.span,{className:"hljs-number",children:"2"}),", ",n(s.span,{className:"hljs-number",children:"3"}),"); ",n(s.span,{className:"hljs-comment",children:"// 5"}),`

count.`,n(s.span,{className:"hljs-title function_",children:"subtract"}),"(",n(s.span,{className:"hljs-number",children:"10"}),", ",n(s.span,{className:"hljs-number",children:"3"}),"); ",n(s.span,{className:"hljs-comment",children:"// 7"}),`

count.`,n(s.span,{className:"hljs-title function_",children:"multiply"}),"(",n(s.span,{className:"hljs-number",children:"2"}),", ",n(s.span,{className:"hljs-number",children:"3"}),"); ",n(s.span,{className:"hljs-comment",children:"// 6"}),`

count.`,n(s.span,{className:"hljs-title function_",children:"divide"}),"(",n(s.span,{className:"hljs-number",children:"6"}),", ",n(s.span,{className:"hljs-number",children:"2"}),"); ",n(s.span,{className:"hljs-comment",children:"// 3"}),`
`]})}),`
`,n(s.p,{children:"经过改造后，可以看成是一个策略模式，接下来看个复杂的例子。商场的会员分普通会员、银卡会员、金卡会员、钻石会员、至尊会员等级别，在商场消费享不同的折扣和积分。会员在同一商品的折扣分别是 98、95、9、8.8、8.5 折优惠。积分比例分别是 1、1.2、1.5、1.6、1.8。购买商品对应的会员折扣和积分获取用策略模式来实现："}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"}),` priceStrategy = {
  `,n(s.span,{className:"hljs-title function_",children:"level1"}),"(",n(s.span,{className:"hljs-params",children:"price"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," price * (",n(s.span,{className:"hljs-number",children:"98"})," / ",n(s.span,{className:"hljs-number",children:"100"}),`);
  },
  `,n(s.span,{className:"hljs-title function_",children:"level2"}),"(",n(s.span,{className:"hljs-params",children:"price"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," price * (",n(s.span,{className:"hljs-number",children:"95"})," / ",n(s.span,{className:"hljs-number",children:"100"}),`);
  },
  `,n(s.span,{className:"hljs-title function_",children:"level3"}),"(",n(s.span,{className:"hljs-params",children:"price"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," price * (",n(s.span,{className:"hljs-number",children:"90"})," / ",n(s.span,{className:"hljs-number",children:"100"}),`);
  },
  `,n(s.span,{className:"hljs-title function_",children:"level4"}),"(",n(s.span,{className:"hljs-params",children:"price"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," price * (",n(s.span,{className:"hljs-number",children:"88"})," / ",n(s.span,{className:"hljs-number",children:"100"}),`);
  },
  `,n(s.span,{className:"hljs-title function_",children:"level5"}),"(",n(s.span,{className:"hljs-params",children:"price"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," price * (",n(s.span,{className:"hljs-number",children:"85"})," / ",n(s.span,{className:"hljs-number",children:"100"}),`);
  },
};

`,n(s.span,{className:"hljs-keyword",children:"const"}),` cumulativeScoreStrategy = {
  `,n(s.span,{className:"hljs-title function_",children:"level1"}),"(",n(s.span,{className:"hljs-params",children:"price"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-title class_",children:"Math"}),".",n(s.span,{className:"hljs-title function_",children:"floor"}),`(price);
  },
  `,n(s.span,{className:"hljs-title function_",children:"level2"}),"(",n(s.span,{className:"hljs-params",children:"price"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-title class_",children:"Math"}),".",n(s.span,{className:"hljs-title function_",children:"floor"}),"(price * ",n(s.span,{className:"hljs-number",children:"1.1"}),`);
  },
  `,n(s.span,{className:"hljs-title function_",children:"level3"}),"(",n(s.span,{className:"hljs-params",children:"price"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-title class_",children:"Math"}),".",n(s.span,{className:"hljs-title function_",children:"floor"}),"(price * ",n(s.span,{className:"hljs-number",children:"1.2"}),`);
  },
  `,n(s.span,{className:"hljs-title function_",children:"level4"}),"(",n(s.span,{className:"hljs-params",children:"price"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-title class_",children:"Math"}),".",n(s.span,{className:"hljs-title function_",children:"floor"}),"(price * ",n(s.span,{className:"hljs-number",children:"1.3"}),`);
  },
  `,n(s.span,{className:"hljs-title function_",children:"level5"}),"(",n(s.span,{className:"hljs-params",children:"price"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-title class_",children:"Math"}),".",n(s.span,{className:"hljs-title function_",children:"floor"}),"(price * ",n(s.span,{className:"hljs-number",children:"1.4"}),`);
  },
};

`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"calculatePrice"}),"(",n(s.span,{className:"hljs-params",children:"level, price"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"return"})," priceStrategy[level] ? priceStrategy[level](price) : ",n(s.span,{className:"hljs-number",children:"0"}),`;
}

`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"calculateScore"}),"(",n(s.span,{className:"hljs-params",children:"level, price"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," actually = ",n(s.span,{className:"hljs-title function_",children:"calculatePrice"}),`(level, price);
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    cumulativeScoreStrategy[level] && cumulativeScoreStrategy[level](actually)
  );
}

`,n(s.span,{className:"hljs-comment",children:"//  一台的彩电的价格是 8888，钻石会员的折后价"}),`
`,n(s.span,{className:"hljs-title function_",children:"calculatePrice"}),"(",n(s.span,{className:"hljs-string",children:"'level4'"}),", ",n(s.span,{className:"hljs-number",children:"8888"}),"); ",n(s.span,{className:"hljs-comment",children:"// 7554.8"}),`
`,n(s.span,{className:"hljs-comment",children:"// 获得的积分"}),`
`,n(s.span,{className:"hljs-title function_",children:"calculateScore"}),"(",n(s.span,{className:"hljs-string",children:"'level4'"}),", ",n(s.span,{className:"hljs-number",children:"8888"}),"); ",n(s.span,{className:"hljs-comment",children:"// 10567"}),`
`]})}),`
`,n(s.p,{children:"表单验证的策略模式"}),`
`,n(s.pre,{children:e(s.code,{className:"hljs language-js",children:[n(s.span,{className:"hljs-keyword",children:"const"}),` strategies = {
  `,n(s.span,{className:"hljs-title function_",children:"isCorrectPassword"}),"(",n(s.span,{className:"hljs-params",children:"value, errorMsg"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (!",n(s.span,{className:"hljs-regexp",children:"/^(?:(?=.*[A-Z])(?=.*[0-9])).\\\\S{7,19}$/"}),".",n(s.span,{className:"hljs-title function_",children:"test"}),`(value)) {
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` errorMsg;
    }
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-literal",children:"null"}),`;
  },
  `,n(s.span,{className:"hljs-title function_",children:"isNotEmpty"}),"(",n(s.span,{className:"hljs-params",children:"value, errorMsg"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (value === ",n(s.span,{className:"hljs-string",children:"''"})," || value === ",n(s.span,{className:"hljs-literal",children:"undefined"}),`) {
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` errorMsg;
    }
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-literal",children:"null"}),`;
  },
  `,n(s.span,{className:"hljs-title function_",children:"minLength"}),"(",n(s.span,{className:"hljs-params",children:"value, length, errorMsg"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (value.",n(s.span,{className:"hljs-property",children:"length"}),` < length) {
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` errorMsg;
    }
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-literal",children:"null"}),`;
  },
  `,n(s.span,{className:"hljs-title function_",children:"maxLength"}),"(",n(s.span,{className:"hljs-params",children:"value, length, errorMsg"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (value.",n(s.span,{className:"hljs-property",children:"length"}),` > length) {
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` errorMsg;
    }
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-literal",children:"null"}),`;
  },
  `,n(s.span,{className:"hljs-title function_",children:"isMobile"}),"(",n(s.span,{className:"hljs-params",children:"value, errorMsg"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (!",n(s.span,{className:"hljs-regexp",children:"/(^1[3|5|8][0-9]{9}$)/"}),".",n(s.span,{className:"hljs-title function_",children:"test"}),`(value)) {
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` errorMsg;
    }
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-literal",children:"null"}),`;
  },
  `,n(s.span,{className:"hljs-title function_",children:"isNotAllEmpty"}),"(",n(s.span,{className:"hljs-params",children:"value = [], errorMsg"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"if"})," (!value.",n(s.span,{className:"hljs-title function_",children:"some"}),"(",e(s.span,{className:"hljs-function",children:[n(s.span,{className:"hljs-params",children:"i"})," =>"]}),` !!i)) {
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` errorMsg;
    }
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-literal",children:"null"}),`;
  },
};

`,n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"Validator"}),` {
  `,n(s.span,{className:"hljs-title function_",children:"constructor"}),"(",n(s.span,{className:"hljs-params"}),`) {
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"cache"}),` = [];
  }

  `,n(s.span,{className:"hljs-title function_",children:"add"}),"(",n(s.span,{className:"hljs-params",children:"value, rules"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"for"})," (",n(s.span,{className:"hljs-keyword",children:"let"})," i = ",n(s.span,{className:"hljs-number",children:"0"}),`, rule; (rule = rules[i++]); ) {
      `,n(s.span,{className:"hljs-keyword",children:"const"})," strategyArray = rule.",n(s.span,{className:"hljs-property",children:"strategy"}),".",n(s.span,{className:"hljs-title function_",children:"split"}),"(",n(s.span,{className:"hljs-string",children:"':'"}),`) || [];
      `,n(s.span,{className:"hljs-keyword",children:"const"}),` { errorMsg } = rule;
      `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"cache"}),".",n(s.span,{className:"hljs-title function_",children:"push"}),"(",n(s.span,{className:"hljs-function",children:"() =>"}),` {
        `,n(s.span,{className:"hljs-keyword",children:"const"})," strategy = strategyArray.",n(s.span,{className:"hljs-title function_",children:"shift"}),`();
        strategyArray.`,n(s.span,{className:"hljs-title function_",children:"unshift"}),`(value);
        strategyArray.`,n(s.span,{className:"hljs-title function_",children:"push"}),`(errorMsg);
        `,n(s.span,{className:"hljs-keyword",children:"return"})," strategies[strategy].",n(s.span,{className:"hljs-title function_",children:"apply"}),`(value, strategyArray);
      });
    }
  }

  `,n(s.span,{className:"hljs-title function_",children:"run"}),"(",n(s.span,{className:"hljs-params"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"for"})," (",n(s.span,{className:"hljs-keyword",children:"let"})," i = ",n(s.span,{className:"hljs-number",children:"0"}),", validatorFunc; (validatorFunc = ",n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"cache"}),`[i++]); ) {
      `,n(s.span,{className:"hljs-keyword",children:"const"})," msg = ",n(s.span,{className:"hljs-title function_",children:"validatorFunc"}),`();
      `,n(s.span,{className:"hljs-keyword",children:"if"}),` (msg) {
        `,n(s.span,{className:"hljs-keyword",children:"return"}),` msg;
      }
    }
    `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-literal",children:"null"}),`;
  }
}

`,n(s.span,{className:"hljs-comment",children:"// 使用"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," validator = ",n(s.span,{className:"hljs-keyword",children:"new"})," ",n(s.span,{className:"hljs-title class_",children:"Validator"}),`();
validator.`,n(s.span,{className:"hljs-title function_",children:"add"}),"(registerForm.",n(s.span,{className:"hljs-property",children:"userName"}),`, [
  {
    `,n(s.span,{className:"hljs-attr",children:"strategy"}),": ",n(s.span,{className:"hljs-string",children:"'isNonEmpty'"}),`,
    `,n(s.span,{className:"hljs-attr",children:"errorMsg"}),": ",n(s.span,{className:"hljs-string",children:"'userName not empty!'"}),`,
  },
  {
    `,n(s.span,{className:"hljs-attr",children:"strategy"}),": ",n(s.span,{className:"hljs-string",children:"'minLength:6'"}),`,
    `,n(s.span,{className:"hljs-attr",children:"errorMsg"}),": ",n(s.span,{className:"hljs-string",children:"'userName length should more than 6'"}),`,
  },
]);
validator.`,n(s.span,{className:"hljs-title function_",children:"add"}),"(registerForm.",n(s.span,{className:"hljs-property",children:"password"}),`, [
  {
    `,n(s.span,{className:"hljs-attr",children:"strategy"}),": ",n(s.span,{className:"hljs-string",children:"'minLength:6'"}),`,
    `,n(s.span,{className:"hljs-attr",children:"errorMsg"}),": ",n(s.span,{className:"hljs-string",children:"'password length should more than 6'"}),`,
  },
]);

`,n(s.span,{className:"hljs-keyword",children:"const"})," errorMsg = validator.",n(s.span,{className:"hljs-title function_",children:"start"}),`();

`,n(s.span,{className:"hljs-keyword",children:"if"}),` (errorMsg) {
  `,n(s.span,{className:"hljs-variable language_",children:"console"}),".",n(s.span,{className:"hljs-title function_",children:"log"}),`(errorMsg);
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` errorMsg;
}
`]})}),`
`,e(s.blockquote,{children:[`
`,n(s.p,{children:"策略模式属于对象行为型模式，主要针对一组算法，将每一个算法封装到具有共同接口的独立的类中，从而使得它们可以相互替换。策略模式使得算法可以在不影响 到客户端的情况下发生变化。通常，策略模式适用于当一个应用程序需要实现一种特定的服务或者功能，而且该程序有多种实现方式时使用。"}),`
`]}),`
`,n(s.h2,{children:"策略模式的优缺点"}),`
`,n(s.p,{children:"策略模式是一种常用且有效的得设计模式，"}),`
`,n(s.h3,{children:"优点"}),`
`,n(s.p,{children:"· 减少重复代码 策略模式利用组合、委托和多态等技术和思想，减少很多模板代码。"}),`
`,n(s.p,{children:"· 扩展性 策略模式提供了对开放-封闭原则的完美支持，将算法封装在独立的策略类里面，使它们易于切换，易于理解，易于扩展。"}),`
`,e(s.p,{children:["· 在策略模式中的算法利用组合和委托让",n(s.code,{children:"Context"}),"拥有执行算法的能力，这也是继承的一种更轻便的替换方案。"]}),`
`,n(s.h3,{children:"缺点"}),`
`,e(s.p,{children:["· 使用策略模式会的程序增加了许多策略类或者策略对象，但实际上这比把他们负责的逻辑堆砌在",n(s.code,{children:"Context"}),"中要更好。"]}),`
`,n(s.p,{children:"· 要使用策略模式，必须了解所有的策略，必须了解各个策略之间的不同点，因为各种算法之间相互独立，对于复杂的算法处理相同的逻辑无法实现共享。"})]})}function p(l={}){const{wrapper:s}=Object.assign({},r(),l.components);return s?n(s,Object.assign({},l,{children:n(a,l)})):a(l)}export{p as default,m as frontmatter};
