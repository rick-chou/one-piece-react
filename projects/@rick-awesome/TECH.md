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
