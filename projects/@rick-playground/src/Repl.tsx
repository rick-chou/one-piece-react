import { Spin } from 'antd';
import EditorLayout from './editor/layout';
import { useInit } from './hooks/useInit';

const Repl = () => {
  const { loading, compiler } = useInit();

  if (loading) {
    return (
      <Spin tip="Init Editor" className="!max-h-none">
        <div className="h-screen" />
      </Spin>
    );
  }

  return <EditorLayout compiler={compiler} />;
};

export default Repl;
