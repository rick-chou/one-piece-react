import { GridMotion } from '@rickzhou/react-ui';

const items = Array.from({ length: 28 }).map(
  (_, idx) =>
    `https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/png/${idx + 1}.png`,
);

const App = () => {
  return <GridMotion items={items} />;
};

export default App;
