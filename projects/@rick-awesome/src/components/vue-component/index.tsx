import { useEffect, useRef } from 'react';
import { createApp, type defineComponent } from 'vue';

type VueComponentProps = {
  vue: ReturnType<typeof defineComponent>;
};

const VueComponentWrapper: React.FC<VueComponentProps> = ({ vue }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.onload = () => {
      createApp(vue).mount(ref.current!);
    };
  }, [vue]);

  return <div ref={ref} />;
};

export default VueComponentWrapper;
