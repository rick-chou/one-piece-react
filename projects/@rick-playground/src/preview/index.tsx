import { ReplProps } from '@/types';
import { useRef } from 'react';

const iframe = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script
      async
      src="https://ga.jspm.io/npm:es-module-shims@1.8.0/dist/es-module-shims.js"></script>

    <script type="importmap">
      {
        "imports": {
          "react": "https://esm.sh/react",
          "react-dom": "https://esm.sh/react-dom",
          "react-dom/client": "https://esm.sh/react-dom/client"
        }
      }
    </script>

    <script>
      window.addEventListener('message', ({ data }) => {
        if(data.type === 'compiler') {
          const script = document.createElement('script');
          script.type = 'module';
          script.innerText = data.code;
          document.body.appendChild(script);
        }
      });
    </script>

    <div id="root" />
  </body>
</html>
`;

const url = URL.createObjectURL(new Blob([iframe], { type: 'text/html' }));

const Preview: React.FC<ReplProps> = ({ compiler }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  compiler?.addEventListener('message', ({ data }) => {
    iframeRef.current?.contentWindow?.postMessage({
      type: 'compiler',
      code: data,
    });
  });

  return (
    <div>
      <iframe
        ref={iframeRef}
        title="RICK REPL"
        src={url}
        className="dark:bg-other block min-h-0 min-w-0 overflow-scroll bg-white p-0"
        onLoad={() => {}}
        sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
      />
    </div>
  );
};

export default Preview;
