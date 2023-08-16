/**
 * @deprecated
 */

import { useMount, useUnmount } from 'ahooks';
import { useRef } from 'react';

const useDevtoolsSrc = () => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <meta charset="utf-8">
  <title>DevTools</title>
  <style>
    @media (prefers-color-scheme: dark) {
      body {
        background-color: rgb(41 42 45);
      }
    }
  </style>
  <meta name="referrer" content="no-referrer">
  <script src="https://unpkg.com/@ungap/custom-elements/es.js"></script>
  <script type="module" src="https://cdn.jsdelivr.net/npm/chii@1.8.0/public/front_end/entrypoints/chii_app/chii_app.js"></script>
  <body class="undocked" id="-blink-dev-tools">`;
  const devtoolsRawUrl = URL.createObjectURL(
    new Blob([html], { type: 'text/html' }),
  );

  useUnmount(() => {
    URL.revokeObjectURL(devtoolsRawUrl);
  });

  return `${devtoolsRawUrl}#?embedded=${encodeURIComponent(location.origin)}`;
};

const Debug = () => {
  const devtoolsSrc = useDevtoolsSrc();
  const devtoolsIframe = useRef<HTMLIFrameElement>(null);

  const messageListener = (event: MessageEvent) => {};

  useMount(() => {
    window.addEventListener('message', messageListener);
  });

  useUnmount(() => {
    window.removeEventListener('message', messageListener);
  });

  return (
    <div>
      <iframe
        ref={devtoolsIframe}
        title="Devtools"
        className="min-h-0 min-w-0 w-full"
        src={devtoolsSrc}
      />
    </div>
  );
};

export default Debug;
