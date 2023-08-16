import { prettier as prettierConfig } from '@rickzhou/react-fabric/package.json';
import { type Config } from 'prettier';
import pluginsBabel from 'prettier/plugins/babel';
import pluginEstree from 'prettier/plugins/estree';
import prettier from 'prettier/standalone';

async function format(code: string) {
  return prettier.format(code, {
    ...(prettierConfig as Config),
    parser: 'babel-ts',
    plugins: [pluginsBabel, pluginEstree],
  });
}

self.addEventListener('message', async ({ data }) => {
  const { event, code } = data;

  switch (event) {
    case 'FORMAT':
      self.postMessage({
        event: 'FORMAT',
        code: await format(code),
      });
      break;
    default:
      break;
  }
});
