import { Upload } from '@rickzhou/react-ui';
import { parseZip } from '@rickzhou/react-utils/file';

function App() {
  return (
    <div className="bg-blue-100">
      <Upload
        onChange={async filelist => {
          console.log(await parseZip(Array.from(filelist)[0]));
        }}
      />
    </div>
  );
}

export default App;
