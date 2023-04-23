#### install

```bash
yarn add @rickzhou/react-test -D
```

#### config babel

```bash
echo "module.exports = require('@rickzhou/react-test').babel" > babel.config.js;
```

#### config jest

```bash
echo "module.exports = require('@rickzhou/react-test').jest" > jest.config.cjs;
```

#### config script

```bash
npm set-script test "jest"
npm set-script badges "npx istanbul-badges-readme --coverageDir='./coverage'"
```

#### add at least one of the below coverage hashes in your README file:

```md
![Statements](#statements#)
![Branches](#branches#)
![Functions](#functions#)
![Lines](#lines#)
```

E.g.

![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat)
![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat)
![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat)
![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat)
