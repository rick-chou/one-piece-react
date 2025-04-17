import { Editor, FuzzyText } from '@rickzhou/react-ui';
import { Space } from 'antd';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as Error;
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <Space direction="vertical" className="w-[1200px]">
        <FuzzyText color="red">🤖 ERROR</FuzzyText>
        <Editor language="text" value={error.stack} height={300} />
      </Space>
    </div>
  );
};

export default ErrorPage;
