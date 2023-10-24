import Http from '@/assets/pdf/http.pdf';
import { useRef, useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { ContentWrapper } from '@/theme';
import { useHover } from 'ahooks';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const width = screen.availWidth * 0.25;
const firstPageNum = 1;

const PdfPreview = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  const ref = useRef<HTMLDivElement>(null);
  const isHovering = useHover(ref);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(firstPageNum);
  }

  const btn = (type: 'left' | 'right') => {
    const invalidPage = type === 'left' ? firstPageNum : numPages;
    return (
      <button
        className="w-11 h-11 border-0 text-xs rounded-sm flex items-center justify-center hover:bg-slate-300"
        style={{
          background: pageNumber === invalidPage ? '#FFF' : '',
          color: pageNumber === invalidPage ? '#ccc' : 'inherit',
        }}
        disabled={pageNumber === invalidPage}
        onClick={() => {
          setPageNumber(pre => (type === 'left' ? pre - 1 : pre + 1));
        }}>
        {type === 'left' ? '‹' : '›'}
      </button>
    );
  };

  return (
    <ContentWrapper>
      <div style={{ width }} ref={ref}>
        <Document file={Http} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={width} />
          <div
            className="absolute bottom-4 flex rounded overflow-hidden bg-white shadow-2xl transition-opacity duration-500 right-1/2 translate-x-[50%] z-50"
            style={{ opacity: isHovering ? 1 : 0 }}>
            {btn('left')}
            <span className="text-xs font-thin font-serif flex items-center justify-center px-2">
              {pageNumber} of {numPages}
            </span>
            {btn('right')}
          </div>
        </Document>
      </div>
    </ContentWrapper>
  );
};

export default PdfPreview;
