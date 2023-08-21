import { prettier as prettierConfig } from '@rickzhou/react-fabric';
import fs from 'fs/promises';
import _ from 'lodash';
import path from 'path';
import prettier from 'prettier';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const targetPath = path.resolve(
  __filename,
  '../../src/assets/editor-themes/index.ts',
);

const themeDirPath = path.resolve(__filename, '../../src/assets/editor-themes');

const dir = (await fs.readdir(themeDirPath)).filter(i => i !== 'index.ts');

// Empty file
await fs.truncate(targetPath, 0);

let content = '';

content += `
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */
`;

const genFileName = fileName =>
  _.upperFirst(_.camelCase(path.basename(fileName, '.json')));

// Gen theme file path
dir.forEach(async fileName => {
  const importPath = `export const ${genFileName(
    fileName,
  )} = (await import('./${fileName}')).default;\n`;
  content += importPath;
});

// Gen ThemeSet
content += '\nexport const EditorThemeSet =\n';
content += '[';
dir.forEach(async fileName => {
  content += `'${genFileName(fileName)}',\n`;
});
content += ']\n';

// Gen EditorTheme TS Def
// content += '\nexport type EditorTheme = (typeof EditorThemeSet)[number]\n';
content += '\nexport type EditorTheme =\n';
dir.forEach(async fileName => {
  content += `	| '${genFileName(fileName)}'\n`;
});

await fs.writeFile(
  targetPath,
  prettier.format(content, {
    ...prettierConfig,
    printWidth: 200,
    parser: 'typescript',
  }),
  {
    flag: 'a+',
    encoding: 'utf-8',
  },
);
