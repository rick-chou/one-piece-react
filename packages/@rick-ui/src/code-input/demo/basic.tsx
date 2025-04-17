import { CodeInput } from '@rickzhou/react-ui';

const App = () => {
  return (
    <CodeInput name="advancedFeatureToggle" length={6} onComplete={alert} />
  );
};

export default App;
