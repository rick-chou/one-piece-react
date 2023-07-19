## CSS 方案

tailwindcss + @emotion/react [css in js]

复杂组件用 css in js 方案

快速布局用 tailwindcss

主题色切换用 redux + persist 持久化存储一个 theme 变量 light / dark

```ts
<Global
  styles={css(
    {
      background: themeConfig[theme].colorBg,
      color: themeConfig[theme].colorText,
    },
    css`
      :root {
        --body-font: 'Odibee Sans', 'Inter', sans-serif;
        --color-active: #bae0ff;
        --keyboard-duration: 0.3s;
        --keyboard-hue: 0;
        --keyboard-sat: 0%;

        ${theme === 'dark'
          ? `
              --color-primary-bg: #16171a;
              --color-secondary-bg: #000;
              --color-primary-bg-hover: #303133;
              --color-primary-text: #c7c7c7;
              `
          : `
              --color-primary-bg: #e0e5ec;
              --color-secondary-bg: #fff;
              --color-primary-bg-hover: #fafafa;
              --color-primary-text: #16171a;
              `}
      }
    `,
  )}
/>
```

或者在各自组件实现 `dark` 会注入 html 的 classlist

```css
div {
  background: #fff;
}

.dark {
  div {
    background: #000;
  }
}
```

## Vue in React

个人博客的主技术栈是 React ，但是为了快速的引入社区中优秀的 Vue 组件，做了 Mixin 的方案

其实在 React 中使用 Vue 相对来说还是比较简单的

> 需求 在 React 中支持使用 Vue2 / Vue3 组件

实现方案

社区上其实也有很多的方案了 例如

> [veaury](https://github.com/devilwjp/veaury)

> [vuera](https://github.com/akxcv/vuera)

但是我的需求很简单 我不需要他们之间例如通信这些 我只需要独立展示就行了

所以我们用 Vue 提供的 `createApp` 或者 `new Vue(options)` 去渲染就行了

项目需要的全部依赖如下

```json
    "vue2": "npm:vue@^2.7.14",
    "vue3": "npm:vue@^3.3.4",
    "vueCompiler2": "npm:@vue/compiler-sfc@^2.7.14",
    "vueCompiler3": "npm:@vue/compiler-sfc@^3.3.4",

    "@vitejs/plugin-vue": "^4.2.3",
    "@vitejs/plugin-vue2": "^2.2.0",
```

我们用别名的方法去区分多个版本 这样可以同时兼顾 Vue2 / Vue3

```bash
npm install vue2@npm:vue@2 # yarn add vue2@npm:vue@2
npm install vue3@npm:vue@3

npm install vueCompiler2@npm:@vue/compiler-sfc@2
npm install vueCompiler3@npm:@vue/compiler-sfc@3

npm install @vitejs/plugin-vue -D
npm install @vitejs/plugin-vue2 -D
```

然后进入 `vite.config.ts` 配置 plugin

```ts
import vue2 from '@vitejs/plugin-vue2';
import vue3 from '@vitejs/plugin-vue';
import vueCompiler2 from 'vueCompiler2';
import vueCompiler3 from 'vueCompiler3';

plugin: [
  vue2({ compiler: vueCompiler2 as any, include: 'src/**/*.v2.vue' }),
  vue3({ compiler: vueCompiler3, include: 'src/**/*.v3.vue' }),
];
```

我们用 v2.vue 结尾的文件就会使用 vue2 的 plugin v3 亦然

然后写一个 Wrapper 组件

```ts
import { useEffect, useRef } from 'react';
import Vue from 'vue2';
import { version as vue2Version } from 'vue2/package.json';
import { createApp, type defineComponent } from 'vue3';
import { version as vue3Version } from 'vue3/package.json';

type VueComponentProps = {
  vue: ReturnType<typeof defineComponent>;
  version?: 2 | 3;
};

const styles = [
  'color: green',
  'background: yellow',
  'font-size: 30px',
  'border: 1px solid red',
  'text-shadow: 2px 2px black',
  'padding: 10px',
].join(';');

const VueComponentWrapper: React.FC<VueComponentProps> = ({
  vue,
  version = 2,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(
      `%c Vue Version: ${version === 2 ? vue2Version : vue3Version}`,
      styles,
    );
    if (version === 3) {
      createApp(vue).mount(ref.current!);
    } else {
      new Vue({
        render: h => h(vue),
      }).$mount(ref.current!);
    }
  }, [vue, version]);

  return <div ref={ref} />;
};

export default VueComponentWrapper;
```
