#### install

```bash
yarn add @rickzhou/react-css
```

#### config tailwindcss

```bash
echo "module.exports = require('@rickzhou/react-css').postcss" > postcss.config.cjs

echo "module.exports = require('@rickzhou/react-css').tailwind" > tailwind.config.cjs
```

#### config @emotion/react css prop

`tsconfig.json`

```json
{
	"complierOptions": {
		"jsxImportSource": "@emotion/react"
	}
}
```

`vite.config.ts`

```ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		react({
			// Add the following two lines to your vite.config.ts file
			jsxImportSource: '@emotion/react',
			babel: {
				plugins: ['@emotion/babel-plugin'],
			},
		}),
	],
});
```
