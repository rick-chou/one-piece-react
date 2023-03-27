1. install

```bash
yarn add @rickzhou/react-css
```

2. config tailwindcss

```bash
echo "module.exports = require('@rickzhou/react-css').postcss" > postcss.config.cjs

echo "module.exports = require('@rickzhou/react-css').tailwind" > tailwind.config.cjs
```

3. config @emotion/react css prop

```ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({
      // Add the following two lines to your vite.config.ts file
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
});
```

or

```ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// Add the following lines to your vite.config.ts file
import { emotion } from "@rickzhou/react-css";

export default defineConfig({
  plugins: [react(emotion)],
});
```
