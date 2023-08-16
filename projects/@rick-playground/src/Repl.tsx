import { Spin } from 'antd';
import EditorLayout from './editor/layout';
import { useInit } from './hooks/useInit';

import './index.css';

import '@rickzhou/react-playground/setup/index';

const Repl = () => {
  const { loading, compiler, formatter } = useInit();

  if (loading) {
    return (
      <Spin tip="Init Editor" className="!max-h-none">
        <div className="h-screen" />
      </Spin>
    );
  }

  return <EditorLayout compiler={compiler} formatter={formatter} />;
};

export default Repl;
