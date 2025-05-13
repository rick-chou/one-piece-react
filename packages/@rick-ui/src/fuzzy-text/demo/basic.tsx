import { FuzzyText } from '@rickzhou/react-ui';
import { Space } from 'antd';

const App = () => {
  return (
    <Space direction="vertical">
      <FuzzyText color="red">🤖 ERROR</FuzzyText>
      <FuzzyText color="black" fontSize={72}>
        PAGE NOT FOUND
      </FuzzyText>
    </Space>
  );
};

export default App;
