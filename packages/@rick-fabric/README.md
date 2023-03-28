1. install

```bash
yarn add @rickzhou/react-fabric eslint-config-xo-typescript -D
```

2. config eslint

```bash
echo "module.exports = require('@rickzhou/react-fabric').eslint" > .eslintrc.cjs;
```

3. config prettier

```bash
echo "module.exports = require('@rickzhou/react-fabric').prettier" > .prettierrc.cjs;
```

4. config script

```bash
npm set-script lint "eslint src/**/*.{js,jsx,ts,tsx,json}"
npm set-script lint:fix "eslint --fix 'src/**/*.{js,jsx,ts,tsx,json}'"
npm set-script format "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
```
