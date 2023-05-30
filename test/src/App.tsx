import { Loading, Upload } from '@rickzhou/react-ui';
import { parseZip } from '@rickzhou/react-utils';

function App() {
  return (
    <div className="App">
      <Upload
        onChange={async filelist => {
          console.log(await parseZip(Array.from(filelist)[0]));
        }}
      />

      <Loading />
    </div>
  );
}

export default App;
