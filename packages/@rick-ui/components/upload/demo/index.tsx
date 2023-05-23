import DisplayCard from '@/docs/card';
import { Alert, Tag } from 'antd';
import { useRef } from 'react';
import Cpn, { type UploadRef } from '../';

export const Demo = () => {
  const instance = useRef<UploadRef>(null);

  return (
    <div className="grid grid-cols-1 gap-6">
      <Alert message="Open console to see output" type="info" showIcon />
      <DisplayCard title="Default">
        <Cpn
          onChange={(...arg) => {
            console.log(arg);
          }}
        />
      </DisplayCard>

      <DisplayCard title="Dir">
        <Cpn
          type="dir"
          onChange={(...arg) => {
            console.log(arg);
          }}
        />
      </DisplayCard>

      <DisplayCard title="Chunk">
        <Cpn
          chunk={{ use: true, maxSize: 10 * 1024 }}
          onChange={(...arg) => {
            console.log(arg);
          }}
        />
      </DisplayCard>

      <DisplayCard title="Instance Api">
        <Tag
          color="blue-inverse"
          className="cursor-pointer"
          onClick={() => instance.current?.upload()}>
          Upload
        </Tag>
        <Cpn
          visible={false}
          ref={instance}
          chunk={{ use: true, maxSize: 10 * 1024 }}
          onChange={(...arg) => {
            console.log(arg);
          }}
        />
      </DisplayCard>
    </div>
  );
};
