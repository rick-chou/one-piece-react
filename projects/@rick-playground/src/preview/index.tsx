const iframe = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      window.addEventListener('message', data => {
        console.log('listen message', data);
      });
    </script>
  </body>
</html>
`;

const url = URL.createObjectURL(new Blob([iframe], { type: 'text/html' }));

const Preview = () => {
  return (
    <div>
      <iframe
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
