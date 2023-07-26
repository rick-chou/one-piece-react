## 联合类型

```ts
/**
 * @tutorial 联合类型
 * @description 用 | 隔开每一个类型
 * @description 当访问属性或调用方法时 ts不确定该变量最后什么类型 所以只能是公共的类型或方法
 * @description 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
 */

function showNumber(myNumber: string | number): string | number {
  // 访问只有number拥有的属性 就会被ts⚠️
  // Property 'toFixed' does not exist on type 'string | number'.
  // Property 'toFixed' does not exist on type 'string'
  // myNumber.toFixed(3);

  return myNumber.toString(); // 只能使用string和number共有的类型
}

// 下面的例子是为我们为value设置一个左边的空格填充
// eg
// padLeft('hello', 2) -->   hello
// padLeft('hello', 'world) --> worldhello
// 我们对入参分别是string和number的情景进行判断
// 所以在这里我们使用string和number的联合类型
function padLeft(value: string, padding: string | number) {
  // 如果是number 就填充 ' '
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  // 如果是string 就填充对应的参数
  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
```

```ts
/**
 * @tutorial 可辨识联合
 * @description 联合类型中的每个元素都含有一个单例类型属性
 */
interface Square {
  kind: 'square';
  size: number;
}
interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}
interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.radius * 2;
  }
}
```

## 交叉类型

```ts
/**
 * @tutorial 交叉类型
 * @description 可以把现有的多种类型叠加到一起成为一种类型
 * @description 它包含了所需的所有类型的特性
 */
interface Props1 {
  className: string;
}

interface Props2 {
  onClick: () => void;
}

// 两者的属性都要给到 不然会报错
const combin: Props1 & Props2 = {
  onClick: () => {},
  className: 'nanshu-btn',
};

// 泛型也可以使用 &
function mixin<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}
```

## 总结

联合类型 是 交集

交叉类型 是 并集
