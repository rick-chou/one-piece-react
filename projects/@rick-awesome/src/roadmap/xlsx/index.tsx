import { useMount } from 'ahooks';
import { useRef, useState } from 'react';
import CanvasDatagrid from 'canvas-datagrid';

type President = {
  Name: string;
  Index: number;
};

const XlsxPreview = () => {
  const [pres, setPres] = useState<any[]>([]);
  const targetNode = useRef();

  // useEffect(() => {
  //   (async () => {
  //     /* Download from https://sheetjs.com/pres.numbers */
  //     const f = await fetch('/Sample_Excel_Sheet_muxx6s.xlsx');
  //     const ab = await f.arrayBuffer();

  //     const wb = read(ab);

  //     /* generate array of presidents from the first worksheet */
  //     const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
  //     const data: President[] = utils.sheet_to_json<President>(ws); // generate objects

  //     console.log('data', data);

  //     /* update state */
  //     setPres(data); // update state
  //   })();
  // }, []);

  useMount(() => {
    console.log('targetNode', targetNode);
    CanvasDatagrid({
      parentNode: targetNode.current,
      data: [
        { col1: 'a', col2: 23, col3: 'a' },
        { col1: 'b', col2: 12, col3: 'b' },
      ],
      schema: [
        {
          name: 'col1',
        },
        {
          name: 'col2',
          type: 'number',
        },
        {
          name: 'col3',
        },
      ],
    });

    console.log('targetNode', targetNode);
  });

  return <div className="App" ref={targetNode} />;
};

export default XlsxPreview;
