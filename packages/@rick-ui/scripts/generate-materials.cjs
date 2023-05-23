const fs = require('fs/promises');
const path = require('path');
const prettier = require('prettier');
const { prettier: prettierConfig } = require('@rickzhou/react-fabric');
const { camelCase, upperFirst } = require('lodash');

const FileName = 'materials.ts';
const MainName = 'index.ts';

const cpnDir = path.resolve(__dirname, '../components');
const materialsPath = path.resolve(__dirname, `../components/${FileName}`);
const mainPath = path.resolve(__dirname, `../components/index.ts`);

fs.readdir(cpnDir).then(dir => {
  fs.writeFile(
    materialsPath,
    prettier.format(
      `export const materials = ${JSON.stringify(
        dir.filter(i => ![FileName, MainName].includes(i)),
      )}`,
      {
        ...prettierConfig,
        parser: 'typescript',
      },
    ),
  );
});

fs.readdir(cpnDir).then(dir => {
  let str = ``;
  dir.forEach(i => {
    if (![FileName, MainName].includes(i)) {
      str += `
      export { default as ${upperFirst(camelCase(i))} } from './${i}';
      export type { ${upperFirst(camelCase(i))}Props } from './${i}';
      `;
    }
  });

  fs.writeFile(
    mainPath,
    prettier.format(str, {
      ...prettierConfig,
      parser: 'typescript',
    }),
  );
});
