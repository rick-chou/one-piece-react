import { ReplProps } from '@/types';
import { useRef } from 'react';
import iframe from './iframe.html?raw';

const url = URL.createObjectURL(new Blob([iframe], { type: 'text/html' }));

const Preview: React.FC<ReplProps> = ({ compiler }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  compiler?.addEventListener('message', ({ data }) => {
    if (data.type === 'UPDATE_CODE') {
      iframeRef.current?.contentWindow?.postMessage(data);
    }
  });

  return (
    <div>
      <iframe
        ref={iframeRef}
        title="RICK REPL"
        src={url}
        className="block min-h-0 min-w-0 overflow-scroll p-0"
        sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
      />
    </div>
  );
};

export default Preview;
