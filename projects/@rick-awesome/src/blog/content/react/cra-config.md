---
title: React Quick Start - CRA Config
---

## 配置 cra

当我们使用 `cra` 脚手架搭建我们的项目时如果需要配置 `webpack` 又不想运行 `eject` 命令

因为该命令是不可逆的 会暴露出所有的 `webpack` 配置 这时该怎么办呢

### Step1

- 安装 customize-cra react-app-rewired

- yarn add customize-cra react-app-rewired -D

### Step2

根目录下新建`config-overrides.js` 内容如下 以配置路径别名为例子

更多功能<a href="https://github.com/arackaf/customize-cra">可参考</a>

```js
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  // add an alias for "ag-grid-react" imports
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
    '@store': '@/store',
    '@components': '@/components',
    '@containers': '@/containers',
    '@hooks': '@/hooks',
    '@router': '@/router',
    '@type': '@/type',
    '@utils': '@/utils',
    '@styles': '@/styles',
    '@assets': '@/assets',
  }),
);
```

### Step3

配置`tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@store/*": ["./src/store/*"],
      "@components/*": ["./src/components/*"],
      "@router/*": ["./src/router/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@containers/*": ["./src/containers/*"],
      "@type/*": ["./src/type/*"],
      "@utils/*": ["./src/utils/*"],
      "@styles/*": ["./src/styles/*"],
      "@assets/*": ["./src/assets/*"],
      "@mock/*": ["./src/mock/*"]
    }
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
```

但是每次程序运行时 `tsconfig.json` 都会被重新生成 我们配置的 paths 会消失

可以用`extends`字段 配置如下

新建 `path.json` 里面放入我们的路径配置

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@store/*": ["./src/store/*"],
      "@components/*": ["./src/components/*"],
      "@router/*": ["./src/router/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@containers/*": ["./src/containers/*"],
      "@type/*": ["./src/type/*"],
      "@utils/*": ["./src/utils/*"],
      "@styles/*": ["./src/styles/*"],
      "@assets/*": ["./src/assets/*"],
      "@mock/*": ["./src/mock/*"]
    }
  }
}
```

然后修改 `tsconfig.json`

```json
{
  "extends": "./path.json",
  "compilerOptions": {......}
}
```

### Step4

将`package.json`中 scripts 字段下的所有 `react-scripts` 命令改成 `react-app-rewired` 如下

```js
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```
