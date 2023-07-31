import {
  CloseCircleFilled,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { css } from '@emotion/react';
import { Empty } from '@rickzhou/react-ui';
import {
  Image as AntImage,
  Button,
  Card,
  Checkbox,
  Divider,
  Drawer,
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
import { HiOutlineTrash, HiUpload } from 'react-icons/hi';

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

  const renderBtn = () => {
    return (
      <div className="flex justify-center items-center">
        <Button
          className="flex items-center justify-center"
          onClick={uploadImg}>
          <HiUpload />
          <span className="mx-1">Upload Image</span>
        </Button>

        <Divider type="vertical" />

        <Button
          className="flex items-center justify-center"
          onClick={() => {
            setData([]);
          }}>
          <HiOutlineTrash />
          <span className="mx-1">Clear All</span>
        </Button>
      </div>
    );
  };

  return (
    <div className="p-8 pr-0">
      <div className="flex items-center justify-between pr-8">
        <div className="flex items-center">
          <div className="font-bold text-xl mr-8">Image Transform</div>
        </div>
        <div>{renderBtn()}</div>
      </div>

      <div className="pr-8">
        <Divider />
      </div>

      <div className="grid gap-4 grid-cols-2 max-h-[70vh] overflow-auto">
        {isEmpty(data) ? (
          <div className="col-span-2">
            <Empty height="60vh" desc="Please upload image" />
          </div>
        ) : (
          data.map((i, idx) => {
            return (
              <Card
                key={idx}
                className="w-[300px]"
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
                    className="absolute right-2 top-2 text-lg text-sky-400 dark:text-sky-200 close-icon opacity-0 duration-300 ease-in"
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
          })
        )}
      </div>

      {!isEmpty(data) && (
        <Drawer
          width={'25vw'}
          title={
            <div>
              <div className="mr-4">{data[idx]?.file.name}</div>
              <div className="flex justify-between mt-4">
                <Tag color="geekblue">
                  {data[idx]?.img.width} x {data[idx]?.img.height}
                </Tag>
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

          <Form form={form} name="img-resize" autoComplete="off">
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
    </div>
  );
};

export default RickImgResize;
