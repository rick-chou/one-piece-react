import { useEffect, useRef } from 'react';
import Vue from 'vue2';
import { version as vue2Version } from 'vue2/package.json';
import { createApp, type defineComponent } from 'vue3';
import { version as vue3Version } from 'vue3/package.json';

type VueComponentProps = {
  vue: ReturnType<typeof defineComponent>;
  version?: 2 | 3;
};

const styles = [
  'color: green',
  'background: yellow',
  'font-size: 30px',
  'border: 1px solid red',
  'text-shadow: 2px 2px black',
  'padding: 10px',
].join(';');

const VueComponentWrapper: React.FC<VueComponentProps> = ({
  vue,
  version = 2,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(
      `%c Vue Version: ${version === 2 ? vue2Version : vue3Version}`,
      styles,
    );
    if (version === 3) {
      createApp(vue).mount(ref.current!);
    } else {
      new Vue({
        render: h => h(vue),
      }).$mount(ref.current!);
    }
  }, [vue, version]);

  return <div ref={ref} />;
};

export default VueComponentWrapper;
