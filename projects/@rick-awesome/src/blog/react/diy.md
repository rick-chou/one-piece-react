> 本篇记录一下手动搭建 React 项目过程中遇到的问题 项目分别借助当下热门 🔥 的 Webpack ｜ Vite ｜ Snowpack 来搭建

> 需要的 vscode 插件 eslint ｜ prettier

## Webpack

### typescript

安装 `typescript` 和 `ts-loader`

后者用作 webpack 的 loader 用于将 ts --> js 的转换

安装完后使用 npx tsc --init 生成 tsconfig.json 文件

我这里开启了部分的配置 具体的每一项配置 可参考官方文档的说明

> https://aka.ms/tsconfig.json

```json
{
  "include": ["src", "types"] /*  */,
  "exclude": ["node_modules"],
  "compilerOptions": {
    "target": "ESNEXT" /* 直接输出为最新的 ES 标准 */,
    "module": "ESNEXT" /* 面向未来的 ESM 模块化 */,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false /* 不允许导入js文件 */,
    "jsx": "react-jsx" /* react17后 选择这个就好了 */,
    "outDir": "./build" /* 打包路径 */,
    "strict": true /* 开启严格模式 */,
    "noImplicitAny": true /* 不能用any类型 */,
    "moduleResolution": "node" /* 模块解析策略 这里我们使用node */,
    "baseUrl": "./" /* 配置根路径 比如下面的typeRoots和最上面的include exclude都会加上这个路径 */,
    "typeRoots": [
      "node_modules/@types",
      "types/*.d.ts"
    ] /* 默认会引入@types下的类型类型声明文件 可以配置这项加入一些自己定义的类型 */,
    "allowSyntheticDefaultImports": true /* 即使一个模块没有默认导入 也可以使用默认导入 */,
    "esModuleInterop": true /* https://zhuanlan.zhihu.com/p/148081795 */,
    "experimentalDecorators": true /* 开启装饰器语法 */,
    "skipLibCheck": false /* 跳过所有.d.ts文件的类型检查 */,
    "forceConsistentCasingInFileNames": true
  }
}
```

我们新建一个 types 目录 可以定义一些我们想定义的类型 例如

```ts
/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export default classes;
}

/* CSS */
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';
declare module '*.styl';

/* IMAGES */
declare module '*.svg' {
  const ref: string;
  export default ref;
}
declare module '*.bmp' {
  const ref: string;
  export default ref;
}
declare module '*.gif' {
  const ref: string;
  export default ref;
}
declare module '*.jpg' {
  const ref: string;
  export default ref;
}
declare module '*.jpeg' {
  const ref: string;
  export default ref;
}
declare module '*.png' {
  const ref: string;
  export default ref;
}

/* CUSTOM: ADD YOUR OWN HERE */
```

### webpack

首先安装 `webpack` `webpack-cli` `webpack-dev-server`

- webpack webpack 核心功能

- webpack-cli webpack 命令行

- webpack-dev-server 开发环境使用 方便调试

然后新建一个 `config` 文件夹 来编写 `webpack` 的配置文件

我们为开发环境和生产环境创建各自的配置文件

分别为 `webpack.config.dev.js` 和 `webpack.config.prod.js`

因为项目中 css 我使用了 scss 所以提前安装下 `sass` `sass-loader` `css-loader` `style-loader`

还有构建需要的 `html-webpack-plugin` 和 `clean-webpack-plugin`

#### `webpack.config.dev.js` 的配置如下

```js
const path = require('path');
// 生成html文件 自动引入打包后的js文件
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
});

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[hash].bundle.js',
  },
  module: {
    // 由于我们是ts项目 所以直接借助ts-loader将文件编译成js 无需再使用babel转译
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // 配置scss环境 ⚠️注意 loader使用顺序为从右到左
      // 所以使用顺序为 sass-loader --> css-loader --> style-loader
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [htmlWebpackPlugin],

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
```

#### `webpack.config.prod.js` 配置如下

```js
const path = require('path');
// 生成html文件 自动引入打包后的js文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打包前 清理打包目录文件夹 因为打包后的文件带hash值 不会重名 所以不会覆盖 多次打包就会有很多bundle.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
});

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [htmlWebpackPlugin, new CleanWebpackPlugin()],

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
```

因为没有涉及到太多的场景 我们的 prod 只比 dev 的多了一个 `clean-webpack-plugin` 插件的配置

随后新增 script 命令

```
"start": "webpack-dev-server --config  ./config/webpack.config.dev.js --open",
"build": "webpack --config ./config/webpack.config.prod.js",
```

你也可以使用 `webpack-merge` 这个库去抽取一些通用的配置

> https://github.com/survivejs/webpack-merge

### eslint

eslint 可以校验我们的代码 生成统一的风格

首先安装 eslint 然后在使用 npx eslint --init 生成 eslint 的配置

下面为作者的一些选择

```sh
? How would you like to use ESLint? …
  To check syntax only
  To check syntax and find problems
❯ To check syntax, find problems, and enforce code style

? What type of modules does your project use? …
❯ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

? Which framework does your project use? …
❯ React
  Vue.js
  None of these

? Does your project use TypeScript?
❯ Yes
  No

? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯ Browser
  Node

? How would you like to define a style for your project? …
❯ Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)

? Which style guide do you want to follow? …
❯ Airbnb: https://github.com/airbnb/javascript
  Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google
  XO: https://github.com/xojs/eslint-config-xo

? What format do you want your config file to be in? …
❯ JavaScript
  YAML
  JSON

Would you like to install them now with npm?
❯ Yes
  No
```

做完这些后 项目的根目录下就会生成一个 `.eslintrc.js` 文件 内容如下

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
};
```

同时 附上上述操作后新增的依赖

```
"@typescript-eslint/eslint-plugin": "^4.31.2",
"@typescript-eslint/parser": "^4.31.2",
"eslint": "^7.32.0",
"eslint-config-airbnb": "^18.2.1",
"eslint-plugin-import": "^2.24.2",
"eslint-plugin-jsx-a11y": "^6.4.1",
"eslint-plugin-react": "^7.26.0",
"eslint-plugin-react-hooks": "^4.2.0"
```

### prettier

安装 `prettier` 新建一个 `prettier.config.js` 文件 下面是我的一些配置

```js
module.exports = {
  printWidth: 100, // 单行长度
  tabWidth: 2, // 缩进长度
  useTabs: false, // 使用空格代替tab缩进
  semi: true, // 句末使用分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 仅在必需时为对象的key添加引号
  jsxSingleQuote: true, // jsx中使用单引号
  trailingComma: 'all', // 多行时尽可能打印尾随逗号
  bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
  arrowParens: 'always', // 单参数箭头函数参数周围使用圆括号-eg: (x) => x
  requirePragma: false, // 无需顶部注释即可格式化
  insertPragma: false, // 在已被prettier格式化的文件顶部加上标注
  htmlWhitespaceSensitivity: 'ignore', // 对HTML全局空白不敏感
  endOfLine: 'lf', // 结束行形式
  embeddedLanguageFormatting: 'auto', // 对引用代码进行格式化
};
```

随后 写入一个 script 命令

```
"format": "prettier --write \"src/**/*.{js,jsx,ts,tsx}\""
```

执行这个命令 就可以格式化所有的代码 按照上述的规则

到此 我们的基本配置结束 随后安装必须的 react react-dom

然后创建如下的项目目录

```
webpack
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc.config.js
├─ config
│  ├─ webpack.config.dev.js
│  └─ webpack.config.prod.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ index.html
│  └─ pic.jpg
├─ src
│  ├─ app.module.scss
│  ├─ app.tsx
│  └─ index.tsx
├─ tsconfig.json
├─ types
│  └─ static.d.ts
└─ yarn.lock
```

### FAQ

然而 当你还没启动项目的时候 离谱的事情就发生了

#### Cannot find module './app.module.scss' or its corresponding type declarations.

原因很简单 ts 不能把 app.module.scss 当成一个模块

而且我们也没有为它编写一个类型声明文件

解决的方法有两种

第一种是为每一个 scss 文件编写.d.ts 声明文件

例如我们的 app.module.scss 有如下内容

```scss
.container {
  color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 66px;
  height: 90vh;
}
```

我们就可以编写一个 app.module.scss.d.ts 文件 为每一个选择器声明类型

```ts
export const container: string;
```

这样就消除这个报错了 而且在引入的时候 会有友善的代码提示

第二种 是为 scss 文件编写全局的声明文件 我们在上面 ts 那一部分创建了 types 文件

里面就有我们对 scss 这些类型文件的定义

我们只需要在 tsconfig.json 中配置 typeRoots 把我们的 types 加进去就好了

```
"typeRoots": ["node_modules/@types", "types/*.d.ts"]
```

#### eslint

eslint 也会有很多不兼容的地方

例如 我们的项目是 React17 版本 不必再引入 React 但是 eslint 会报错

然后一些等等的问题 我在下面罗列了

在.eslintrc.js 的 rules 中加入如下配置

```js
{
// 解决 JSX not allowed in files with extension '.tsx' 为tsx文件开启jsx语法
'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
// 解决 'React' must be in scope when using JSX 但是17后不必再引入 所以关闭这条规则
'react/react-in-jsx-scope': 'off',
// 解决 'React' was used before it was defined
'@typescript-eslint/no-use-before-define': ['error'],
'no-use-before-define': 'off',
// 解决 Missing file extension "tsx" for 'xxx'
'import/extensions': [
  'error',
  'ignorePackages',
  {
    ts: 'never',
    tsx: 'never',
  },
],
// 关闭默认导出 .d.ts中会报错
'import/prefer-default-export': 'off',
},
```

### yarn start 🎉 🎉 🎉 🎉 🎉

## Vite

### typescript

ts 安装 `typescript` 就好了 不需要 loader 了 配置同上

### scss

安装 sass 也不需要其他的 loader 了

### eslint ｜ prettier 同上

### vite

安装 `vite` `@vitejs/plugin-react`

在根目录下新建 `vite.config.ts`

内容如下

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
```

package.json 中写入 script

```
"dev": "vite",
"build": "tsc && vite build",
"serve": "vite preview",
```

### FAQ 同上

### yarn dev 🎉 🎉 🎉 🎉 🎉

## Snowpack

### snowpack

其他的基础配置都类似 这里不再赘述

snowpack 有自己的生态 首先安装以下的包

- snowpack

- @snowpack/plugin-sass

- @snowpack/plugin-react-refresh

- @snowpack/plugin-typescript

通过名称 大致就可以知道它们各自的功能

snowpack 有自己的配置文件 `snowpack.config.mjs`

详细的配置参考官方

> https://www.snowpack.dev/reference/configuration

```mjs
/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    // 静态资源路径
    public: { url: '/', static: true },
    // 打包路径
    src: { url: '/dist' },
  },
  // 配置一些插件
  plugins: [
    '@snowpack/plugin-sass',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript',
  ],
};
```

### yarn start 🎉 🎉 🎉 🎉 🎉

package.json 添加 script

```
"start": "snowpack dev",
"build": "snowpack build",
```

## Git

这里再补充一下对 git 提交信息的管控

我们需要引入 `husky` `lint-staged` 和 `commit-lint`

```sh
yarn add -D husky lint-staged @commitlint/config-conventional @commitlint/cli cz-conventional-changelog
```

接下来我们要添加 `.lintstagedrc.json`

```json
{
  "*.{js,jsx,ts,tsx}": ["eslint --cache"]
}
```

接下来添加 `commitlint.config.js`

```js
module.exports = { extends: ['@commitlint/config-conventional'] };
```

最后执行如下命令

```sh
npm set-script prepare "husky install"
npm run prepare

npx husky add .husky/pre-commit "npx --no-install lint-staged"
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

执行完毕后将.husky/commit-msg 内容修改如下

```
#!/bin/sh
. "$(dirname "$0")/\_/husky.sh"

npx --no-install commitlint --edit "$1"
```

package.json 中添加

```json
"scripts": {
  "commit": "./node_modules/.bin/git-cz"
},
```

至此 我们可以使用 yarn commit 的方式 提交 commit

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6bf5a9337c004f398d8e6f92a526b34f~tplv-k3u1fbpfcp-zoom-1.image)

也可以使用 git commit -m xxx 的形式

一但你的 commit 不规范 就会抛出异常

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0fa3dcefcd44e38a62378d49f6db906~tplv-k3u1fbpfcp-zoom-1.image)

## 🎉 🎉 🎉
