import {
  CloseCircleFilled,
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { css } from '@emotion/react';
import {
  Image as AntImage,
  Button,
  Card,
  Checkbox,
  Divider,
  Drawer,
  FloatButton,
  Form,
  Input,
  InputNumber,
  Space,
  Tag,
  message,
} from 'antd';
import saveAs from 'file-saver';
import { cloneDeep, isEmpty } from 'lodash';
import { useState } from 'react';

// TODO
// ico "image/x-icon"

type Data = { file: File; img: HTMLImageElement };

type Output = { width: number; height: number; name: string };

const exprotImg = async (
  data: Data,
  width: number,
  height: number,
  name: string,
) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (context) {
    canvas.width = width;
    canvas.height = height;
    context.clearRect(0, 0, width, height);
    context.drawImage(data.img, 0, 0, width, height);
    canvas.toBlob(blob => {
      saveAs(blob!, name);
    }, data.file.type);
  } else {
    await message.error('Your browser does not support this feature');
  }
};

const RickImgResize = () => {
  const [data, setData] = useState<Data[]>([]);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [form] = Form.useForm();
  const [lockingAspectRatio, setLockingAspectRatio] = useState(true);

  const uploadImg = async () => {
    const fileHandles = await window.showOpenFilePicker({
      multiple: true,
    });

    for await (const fileHandle of fileHandles) {
      const reader = new FileReader();
      const file = await fileHandle.getFile();
      reader.readAsDataURL(file);
      reader.onload = e => {
        const img = new Image();
        img.src = e.target?.result as string;
        img.title = file.name;
        img.onload = () => {
          setData(pre => [...pre, { file, img }]);
        };
      };
    }
  };

  const onSizeChange = async (index: number, type: 'width' | 'height') => {
    if (lockingAspectRatio) {
      const radio = data[idx].img.height / data[idx].img.width;
      const size: Output[] = form.getFieldValue('size');
      if (type === 'height') {
        size[index].width = Math.round(size[index].height / radio);
        form.setFieldValue('size', size);
        await form.validateFields();
      } else {
        size[index].height = Math.round(size[index].width * radio);
        form.setFieldValue('size', size);
        await form.validateFields();
      }
    }
  };

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {data.map((i, idx) => {
          return (
            <Card
              key={idx}
              className="w-[300px] img-card"
              css={css`
                &:hover {
                  .close-icon {
                    opacity: 100;
                  }
                }
              `}
              hoverable
              onClick={() => {
                setIdx(idx);
                setOpen(true);
              }}>
              <div className="flex flex-col justify-between">
                <CloseCircleFilled
                  className="absolute right-1 top-1 text-lg text-sky-400 close-icon opacity-0 duration-300 ease-in"
                  onClick={e => {
                    e.stopPropagation();
                    const _data = cloneDeep(data);
                    _data.splice(idx, 1);
                    setData(_data);
                  }}
                />
                <AntImage width={'100%'} src={i.img.src} preview={false} />
                <div className="flex items-center justify-center my-4 font-semibold">
                  {i.file.name}
                </div>
                <div className="flex items-center justify-center">
                  <Tag color="geekblue">
                    {i.img.width} x {i.img.height}
                  </Tag>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {!isEmpty(data) && (
        <Drawer
          width={'40vw'}
          title={
            <div className="flex justify-between">
              <div className="flex">
                <div className="mr-4">{data[idx].file.name}</div>
                <div>
                  <Tag color="geekblue">
                    {data[idx].img.width} x {data[idx].img.height}
                  </Tag>
                </div>
              </div>
              <div>
                <Checkbox
                  checked={lockingAspectRatio}
                  onChange={e => {
                    setLockingAspectRatio(e.target.checked);
                  }}>
                  Locking aspect ratio
                </Checkbox>
              </div>
            </div>
          }
          closable={false}
          placement="right"
          onClose={() => {
            setOpen(false);
          }}
          open={open}>
          <AntImage width={'100%'} src={data[idx].img.src} preview={true} />

          <Divider />

          <Form
            form={form}
            name="img-resize"
            style={{ maxWidth: 600 }}
            autoComplete="off">
            <Form.List name="size">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }, index) => (
                    <Space
                      key={key}
                      style={{ display: 'flex', marginBottom: 8 }}
                      align="baseline">
                      <Form.Item
                        {...restField}
                        name={[name, 'width']}
                        rules={[{ required: true, message: 'Missing Width' }]}>
                        <InputNumber
                          placeholder="Width"
                          onChange={async () => {
                            await onSizeChange(index, 'width');
                          }}
                        />
                      </Form.Item>
                      x
                      <Form.Item
                        {...restField}
                        name={[name, 'height']}
                        rules={[{ required: true, message: 'Missing Height' }]}>
                        <InputNumber
                          placeholder="Height"
                          onChange={async () => {
                            await onSizeChange(index, 'height');
                          }}
                        />
                      </Form.Item>
                      <Form.Item {...restField} name={[name, 'name']}>
                        <Input placeholder="File Name" />
                      </Form.Item>
                      <MinusCircleOutlined
                        onClick={() => {
                          remove(name);
                        }}
                      />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      block
                      icon={<PlusOutlined />}>
                      Add Size
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>

          <Divider />

          <Button
            className="w-full"
            onClick={() => {
              const size: Output[] = form.getFieldValue('size');
              size
                .filter(i => !isEmpty(i))
                .forEach(async (i, index) => {
                  await exprotImg(
                    data[idx],
                    i.width,
                    i.height,
                    i.name ?? `${index + 1}-${data[idx].file.name}`,
                  );
                });
            }}>
            Export
          </Button>
        </Drawer>
      )}

      <FloatButton
        className="animate-bounce"
        onClick={uploadImg}
        shape="circle"
        tooltip="Upload Image"
        icon={<UploadOutlined className="text-blue-500" />}
      />
    </div>
  );
};

export default RickImgResize;
