## 背景

单页应用部署在 `Github Pages` 后 刷新 404

## 解决

`Github Pages` 在找不到页面的情况下 会默认去加载 `404.html` 利用这个特性

我们可以拷贝一份打包后的 `index.html` 重命名成 `404.html` 即可

例如在 `build` 后执行命令 `cp dist/index.html dist/404.html`
