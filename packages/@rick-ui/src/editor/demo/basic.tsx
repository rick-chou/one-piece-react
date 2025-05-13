import { Editor, Tabs } from '@rickzhou/react-ui';

const defaultValue = {
  sql: 'SELECT * FROM',
  typescript: 'console.log(1)',
  css: '.box { color: red;}',
  html: '<div><span>Editor</span></div>',
  json: '{"name": "rick.zhou"}',
};

const App = () => {
  return (
    <Tabs
      items={[
        {
          label: 'MySQL',
          key: 'MySQL',
          children: (
            <Editor
              height={200}
              language="mysql"
              defaultValue={defaultValue.sql}
            />
          ),
        },
        {
          label: 'Typescript',
          key: 'Typescript',
          children: (
            <Editor
              height={200}
              language="typescript"
              defaultValue={defaultValue.typescript}
            />
          ),
        },
        {
          label: 'Css',
          key: 'Css',
          children: (
            <Editor
              height={200}
              language="css"
              defaultValue={defaultValue.css}
            />
          ),
        },
        {
          label: 'Html',
          key: 'Html',
          children: (
            <Editor
              height={200}
              language="html"
              defaultValue={defaultValue.html}
            />
          ),
        },
        {
          label: 'Json',
          key: 'Json',
          children: (
            <Editor
              height={200}
              language="json"
              defaultValue={defaultValue.json}
            />
          ),
        },
      ]}
    />
  );
};

export default App;
