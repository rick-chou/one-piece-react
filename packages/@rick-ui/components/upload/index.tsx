import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useImperativeHandle, useRef } from 'react';

const maxSize = 10 * 1024 * 1024;

export type UploadProps = {
  visible?: boolean;
  type?: 'file' | 'dir';
  accept?: string[];
  multiple?: boolean;
  chunk?: {
    use?: boolean;
    maxSize?: number;
  };
  onChange?: (filelist: FileList, chunk?: FormData[]) => void;
};

const createFileChunk = (file: File | Blob, size: number): Blob[] => {
  const fileChunkList: Blob[] = [];
  let cur = 0;
  while (cur < file.size) {
    fileChunkList.push(file.slice(cur, cur + size, file.type));
    cur += size;
  }

  return fileChunkList;
};

const getFormDataList = (
  fileList: File[] | Blob[],
  maxSize: number,
): FormData[] => {
  const formDataStack: FormData[] = [];
  fileList.forEach(file => {
    createFileChunk(file, maxSize).forEach(chunk => {
      const formData = new FormData();
      formData.append('file', chunk, file.name);
      formDataStack.push(formData);
    });
  });
  return formDataStack;
};

const InternalUpload: React.ForwardRefRenderFunction<UploadRef, UploadProps> = (
  {
    visible = true,
    type = 'file',
    accept,
    multiple,
    onChange,
    chunk = { use: false, maxSize },
  },
  ref,
) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const dirRef = useRef<HTMLInputElement>(null);

  const upload = () => {
    if (type === 'dir') {
      dirRef.current?.click();
    } else {
      fileRef.current?.click();
    }
  };

  useImperativeHandle(ref, () => ({
    upload,
  }));

  const onFileChange = (filelist: FileList) => {
    onChange?.(
      filelist,
      chunk.use ? getFormDataList(Array.from(filelist), chunk.maxSize!) : [],
    );
  };

  return (
    <div className={visible ? '' : 'translate-x-[9999px]'}>
      <Button icon={<UploadOutlined />} onClick={upload}>
        Click to Upload
      </Button>
      {/* file */}
      <input
        className="hidden"
        ref={fileRef}
        type="file"
        multiple={multiple}
        accept={accept?.toString()}
        onChange={async e => {
          onFileChange(e.target.files!);
        }}
      />
      {/* dir */}
      <input
        className="hidden"
        ref={dirRef}
        type="file"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        webkitdirectory=""
        onChange={async e => {
          onFileChange(e.target.files!);
        }}
      />
    </div>
  );
};

export type UploadRef = {
  upload: () => void;
};

const Upload = React.forwardRef<UploadRef, UploadProps>(InternalUpload);

export default Upload;
