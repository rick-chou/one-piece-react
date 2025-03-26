- Core Lib

  - monaco-editor [Code Editor]
  - @babel/standalone [Code Compiler]
  - prettier [Code Formatter]

  - react
  - vite

- Skill

  - monaco-editor的基本使用
  - 给monaco-editor添加第三方库语法支持
  - React代码编译
  - React代码格式化
  - worker的使用
  - iframe 通信
  - script tag [ type = importmap ]
  - `URL.createObjectURL` / `URL.revokeObjectURL` Api

> 本文的代码地址在 https://github.com/rick-chou/one-piece-react/tree/main/projects/@rick-repl

> 下文的示例代码 仅围绕要介绍的Api/知识点展开 如果想看完整的代码 可参考上述笔者仓库

> 灵感来自于 `https://playground.solidjs.com/`

## 引入 Monaco-Editor

这里先说一嘴 在 React 社区其实已经有了非常好用的 monaco-editor 封装库 例如下面两个

> https://github.com/suren-atoyan/monaco-react

> https://github.com/react-monaco-editor/react-monaco-editor

但是他们内置了很多我不需要的功能 所以我就只引入了monaco-editor来定制我的REPL

> https://microsoft.github.io/monaco-editor/playground.html?source=v0.41.0#example-creating-the-editor-hello-world

用官网的一段代码来简单介绍一下monaco-editor

```jsx
const value = /* set from `myEditor.getModel()`: */ `function hello() {
	alert('Hello world!');
}`;

// Hover on each property to see its docs!
const myEditor = monaco.editor.create(document.getElementById('container'), {
  value,
  language: 'javascript',
  automaticLayout: true,
});
```

通过官网的第一个例子 我们就创建了一个在线的Editor 非常简单

接下来来思考一个问题

Q: 如果实现 切换多文件

我们通过切换 model 来实现切换文件的效果

```js
// 创建 model
const model = monaco.editor.createModel(
  content /* init value */,
  undefined /* language */,
  Uri.parse(path) /* eg. path = file:///app.tsx */,
);

// 创建的 model 可以通过下述api获取
monaco.editor.getModels(); // get all
monaco.editor.getModel(Uri.parse(path)); // get specific one 这里和参数和创建时候的第三个参数对应

// 切换model
monaco.editor.setModel(model);
```

补充一点 创建 model 的时候 需要传递三个参数

我们可以用第二个参数 直接传递一个 languageId 给 monaco

也可以用第三个参数 通过路径后缀的方式告诉 monaco 我这是什么文件

笔者在实现过程中就是用了后者

## 如果实现第三方库的语法提示

有一个 api `monaco.languages.registerCompletionItemProvider`

> 官网 demo https://microsoft.github.io/monaco-editor/playground.html?source=v0.41.0#example-extending-language-services-completion-provider-example

但我估计你不会这么去用 实现每一个api的语法提示

除此之外 monaco-editor 还提供了一个api `languages.typescript.typescriptDefaults.addExtraLib`

相信市面上大多的在线IDE的代码提示方案用的都是这个

反之 我们可以用 `languages.typescript.typescriptDefaults.getExtraLibs` 去验证

> 例如 https://stackblitz.com/
> 很多地方都会把monaco挂在全局变量window上 在stackblitz中创建一个editor然后
> 输入 `window.monaco.languages.typescript.typescriptDefaults.getExtraLibs()` 就可以看到他绑定的一些第三方库

例如 下述方法就是笔者为monaco注入第三方库语法提示的实现

```tsx
const initExtraLibs = () => {
  /**
   * Inject Syntax Hints
   * @api languages.typescript.javascriptDefaults.addExtraLib
   * @api languages.typescript.javascriptDefaults.getExtraLibs
   */
  const types = import.meta.glob(
    [
      // react
      '/node_modules/{react,react-dom}/**/*.{d.ts,json}',
      '/node_modules/@types/{react,react-dom}/**/*.{d.ts,json}',

      // emotion
      '/node_modules/@emotion/**/*.{d.ts,json}',

      // antd
      '/node_modules/antd/**/*.{d.ts,json}',
    ],
    { eager: true, query: 'raw' },
  );

  Object.keys(types).forEach(path => {
    languages.typescript.typescriptDefaults.addExtraLib(
      types[path],
      `file://${path}`,
    );
    languages.typescript.javascriptDefaults.addExtraLib(
      types[path],
      `file://${path}`,
    );
  });
};
```

## Worker进程

我们都知道js是一个单进程的语言

所以后续 如果我们在实现 compiler / formatter 的功能时

如果都把任务交给主进程去运行 那么它就有可能会导致页面的freeze

所以 我们需要引入 worker 来帮助我们处理这些任务

我们创建一个 hello.worker.ts

```js
self.addEventListener('message', async ({ data }) => {
  // This is a message from main process
});

// post message to main process
self.postMessage({
  event: 'HELLO, I AM WORKER',
});
```

然后我们引入这个worker

```ts
// this is vite syntax
import HelloWorker from './hello.worker?worker';

const helloWorker = new HelloWorker();

helloWorker.addEventListener('message', ({ data }) => {
  // output
  // { event : 'HELLO, I AM WORKER' }
});

helloWorker.postMessage({} /* pass data to worker */);
```

ok, 介绍完worker后 我们就要引入代码提示最重要的一步

就是引入每一个language所需要的worker

```ts
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
  getWorker(_, label) {
    switch (label) {
      case 'json':
        return new JsonWorker();
      case 'css':
      case 'scss':
      case 'less':
        return new CssWorker();
      case 'html':
        return new HtmlWorker();
      case 'typescript':
      case 'javascript':
        return new TsWorker();
      case 'tailwindcss':
        return new TailwindcssWorker();
      default:
        return new EditorWorker();
    }
  },
};
```

这些worker就会帮助我们完成代码的智能提示

## 格式化代码

我们编写一个 `formatter.worker.ts` 来处理formatter的逻辑

```ts
import { prettier as prettierConfig } from '@rickzhou/react-stylelint';
import { type Config } from 'prettier';
import pluginsBabel from 'prettier/plugins/babel';
import pluginEstree from 'prettier/plugins/estree';
import prettier from 'prettier/standalone';

async function format(code: string) {
  return prettier.format(code, {
    ...(prettierConfig as Config),
    parser: 'babel-ts',
    plugins: [pluginsBabel, pluginEstree],
  });
}

self.addEventListener('message', async ({ data }) => {
  const { event, code } = data;

  switch (event) {
    case 'FORMAT':
      self.postMessage({
        event: 'FORMAT',
        code: await format(code),
      });
      break;
    default:
      break;
  }
});
```

## 编译JSX语法

到了最重要的一环了 就是怎么编译代码到呈现UI

其实单文件的话非常简单 直接用 `@babel/standalone` 的 `transform` api 就可以了

```ts
const babelTransform = (filename: string, code: string, tabs: Tab[]) => {
  let _code = code;
  if (filename.endsWith('.tsx')) {
    _code = `import React from 'react';\n${code}`;
  }

  return transform(_code, {
    presets: ['react', 'typescript'],
    filename,
    plugins: [],
  }).code!;
};
```

多文件的话稍微麻烦一点 例如我们有一个 `main.tsx` 引入了 `const.tsx` 中的内容

```tsx
import { key } from './const';
```

我们该如何解析

这里补充一下 我们的每一个 model 都是通过下面这种数据结构存在了 `localStorage` 里

所以每次刷新页面 我们都可以重新初始化 model 恢复上次的值

```ts
type ModelTab = {
  path: string;
  content: string;
};
```

所以当我们解析到 `import { key } from './const';` 这一行时

我们可以通过 比如 `./const` 或 `react` 是不是 `.` 开头的就可以区分出是第三方库还是内部文件

第三方库的处理一会再说 先说内部模块的

如果是内部模块 我们就可以拿到这个内部模块的文件内容

然后通过上面单文件的处理方式拿到编译后的代码

然后我们用

```ts
const url = URL.createObjectURL(
  new Blob([compiledCode /* 传递编译后的代码 */], {
    type: 'application/javascript',
  }),
);
```

我们可以用这种方法 构造出一个新的url 然后用它来替换原来的导入路径

举个例子 它的格式 blob:http://localhost:5173/d0800581-55ad-46df-bac8-619a3e0bd426

它会存在于我们的内存之中 所以一般可以用来反爬虫

当然我们也要及时的清理或者说是释放它 来保持程序的稳定 `URL.revokeObjectURL(url)`

补充一下 如果是样式文件的话 我们创建一个立即执行函数 去呈现UI的地方 create 一个 style 标签

然后我们来介绍一下怎么处理外部文件

这里我的实现是通过 script标签的 type = importmap

> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap

所以我们就提取所有的外部模块 然后在最终呈现UI的地方注入一个 script[type=importmap] 标签

总结一下 简单的说 就是我们把入口文件传递给 `@babel/standalone` 的 `transform` api

然后再从中遍历递归所有内部/外部文件 贴一下完整的代码

```tsx
const babelTransform = (filename: string, code: string, tabs: Tab[]) => {
  let _code = code;
  if (filename.endsWith('.tsx')) {
    _code = `import React from 'react';\n${code}`;
  }

  return transform(_code, {
    presets: ['react', 'typescript'],
    filename,
    plugins: [
      // Babel plugin to get file import names
      function importGetter() {
        return {
          visitor: {
            ImportDeclaration(path: any) {
              const module: string = path.node.source.value;
              if (module.startsWith('.')) {
                const _module = getInternalModule(tabs, module);
                // handle style file
                if (_module.path.endsWith('.css')) {
                  const js = `
                  (() => {
                    let stylesheet = document.getElementById('${_module.path}');
                    if (!stylesheet) {
                      stylesheet = document.createElement('style')
                      stylesheet.setAttribute('id', '${_module.path}')
                      document.head.appendChild(stylesheet)
                    }
                    const styles = document.createTextNode(\`${_module.content}\`)
                    stylesheet.innerHTML = ''
                    stylesheet.appendChild(styles)
                  })()
                  `;
                  path.node.source.value = URL.createObjectURL(
                    new Blob([js], { type: 'application/javascript' }),
                  );
                } else {
                  // handle ts file
                  path.node.source.value = URL.createObjectURL(
                    new Blob(
                      [babelTransform(_module.path, _module.content, tabs)],
                      {
                        type: 'application/javascript',
                      },
                    ),
                  );
                }
              } else {
                // Third-party modules
                if (!importmap[module]) {
                  importmap[module] = `https://esm.sh/${module}`;
                }
              }
            },
          },
        };
      },
    ],
  }).code!;
};
```

## 呈现UI

这一步其实就非常简单了 我们用iframe去承载UI

在 iframe 中 通过addEventListener('message') 去监听编译后的代码和importmap的内容

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Preview</title>
  </head>
  <body>
    <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
    <script
      async
      src="https://ga.jspm.io/npm:es-module-shims@1.8.0/dist/es-module-shims.js"></script>
    <script>
      window.addEventListener('message', ({ data }) => {
        if (data.type === 'UPDATE_CODE') {
          /**
           * --- UPDATE IMPROTMAP ---
           */
          const importmapTag = document.querySelector(
            'script[type="importmap"]',
          );
          importmapTag.innerHTML = JSON.stringify({
            imports: data.data.importmap,
          });

          /**
           * --- UPDATE APPSRC ---
           * DON'T USE THIS WAY !!!
           * note : not work by change src attribute
           */
          // const appsrcTag = document.querySelector('#appsrc');
          // const oldSrc = appsrcTag.getAttribute('src');
          // const newSrc = URL.createObjectURL(
          //   new Blob([data.data.compileCode], {
          //     type: 'application/javascript',
          //   }),
          // );
          // appsrcTag.setAttribute('src', newSrc);
          // URL.revokeObjectURL(oldSrc);

          const appsrcTag = document.querySelector('#appsrc');
          const oldSrc = appsrcTag.getAttribute('src');
          appsrcTag.remove();
          const script = document.createElement('script');
          const newSrc = URL.createObjectURL(
            new Blob([data.data.compileCode], {
              type: 'application/javascript',
            }),
          );
          script.src = newSrc;
          script.id = 'appsrc';
          script.type = 'module';
          document.body.appendChild(script);
          URL.revokeObjectURL(oldSrc);
        }
      });
    </script>
    <script type="importmap"></script>
    <script type="module" id="appsrc"></script>
    <div id="root"></div></div>
  </body>
</html>
```

## TODO

对于 linter, 笔者尝试了 `eslint-plugin-react` 但似乎无法独立运行在浏览器端

如果你有好的方法 欢迎在评论区提出
