/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  ClearOutlined,
  CloseOutlined,
  PlusOutlined,
  RightOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button, Form, Popover } from 'antd';
import { useForm } from 'antd/es/form/Form';
import to from 'await-to-js';
import { first, isEmpty, last } from 'lodash';
import { useEffect, useState } from 'react';
import { Flex } from '../style.base';
import {
  defaultFormat,
  defaultLogicOperators,
  defaultOperators,
  genValue,
  getDataType,
  initCache,
  updateCache,
} from './config';
import {
  type DateDateType,
  type FieldType,
  type QueryItem,
  type SearchProps,
  type TimeDateType,
} from './interface';
import { Query } from './query';
import {
  addQueryItemTextStyle,
  containerStyle,
  queryItemStyle,
  queryItemTextStyle,
  queryPopoverClassName,
} from './style';

export type { SearchProps } from './interface';

const Search: React.FC<SearchProps> = props => {
  const {
    id,
    options,
    defaultOperator,
    defaultLogicOperator,
    onSearch,
    query = [],
  } = props;

  useEffect(() => {
    initCache(options, id);
  }, [id, options]);

  const [queryForm] = useForm<QueryItem>();
  const key = Form.useWatch<QueryItem['field']>('field', { form: queryForm });
  const [querySet, setQuerySet] = useState<QueryItem[]>(query);
  const [queryIdx, setQueryIdx] = useState(-1);
  const [currentField, setCurrentField] = useState<FieldType>();
  const [queryOpen, setQueryOpen] = useState([false]);

  const hiddenQueryPopover = () => {
    const _queryOpen = querySet.map(i => false);
    _queryOpen.unshift(false);
    setQueryOpen(_queryOpen);
  };

  const showQueryPopover = (idx: number) => {
    const _queryOpen = queryOpen.map((_, id) => id === idx + 1);
    setQueryOpen(_queryOpen);
  };

  const remove = (idx: number) => {
    const _querySet = [...querySet];
    _querySet.splice(idx, 1);
    if (isEmpty(_querySet)) {
      onSearch?.('');
    }

    setQuerySet(_querySet);
  };

  const onSave = (val: QueryItem) => {
    updateCache(options, val.field, id);
    if (queryIdx === -1) {
      setQuerySet(pre => [...pre, val]);
    } else {
      const _querySet = [...querySet];
      _querySet.splice(queryIdx, 1, val);
      setQuerySet(_querySet);
    }

    hiddenQueryPopover();
  };

  const beforeSave = async () => {
    const [err, val] = await to(queryForm.validateFields());
    if (isEmpty(err) && !isEmpty(val)) {
      const _operator = val.operator ?? defaultOperator;
      const _logicOperator = val.logicOperator ?? defaultLogicOperator;
      onSave({
        ...val,
        operator: _operator,
        logicOperator: _logicOperator,
        value: val[getDataType(currentField!)],
      });
    }
  };

  const onBeforeSearch = () => {
    const express: string[] = [];
    const _querySet: QueryItem[] = [];
    querySet.forEach(i => {
      const dataType = getDataType(options[i.field]);
      const field = options[i.field];
      const format = (field as TimeDateType).format ?? defaultFormat;

      switch (dataType) {
        case 'time': {
          express.push(`${i.field} ${i.operator} ${i.time.format(format)}`);
          _querySet.push({ ...i, value: i.time.format(format) });
          break;
        }

        case 'date': {
          const field = options[i.field] as DateDateType;
          [first, last].forEach(fn => {
            express.push(
              `${fn(field.key)!} ${i.operator} ${fn(i.date)!.format(format)}`,
            );
            _querySet.push({
              ...i,
              field: fn(field.key)!,
              value: fn(i.date)!.format(format),
            });
          });
          break;
        }

        default: {
          express.push(genValue(i, options, 'search'));
          _querySet.push(i);
        }
      }
    });
    const str = _querySet.map((i, idx) => {
      if (idx) {
        return `${i.logicOperator ?? ''} ${express[idx]}`;
      }

      return express[idx];
    });
    onSearch?.(str.join(' ').trim(), _querySet);
  };

  const QueryWrapper = () => (
    <Query
      {...props}
      queryIdx={queryIdx}
      querySet={querySet}
      field={key}
      queryForm={queryForm}
      dateType={getDataType(currentField!)}
      onCancel={hiddenQueryPopover}
      onSave={beforeSave}
      onFieldChange={v => {
        queryForm.setFieldValue('operator', undefined);
        queryForm.setFieldValue('value', undefined);
        setCurrentField(options[v]);
      }}
    />
  );

  return (
    <div css={Flex}>
      <div css={containerStyle}>
        {querySet.map((i, idx) => {
          const showQuery = () => {
            setQueryIdx(idx);
            setCurrentField(options[i.field]);
            queryForm.resetFields();
            queryForm.setFieldsValue(i);
            showQueryPopover(idx);
          };

          return (
            <Popover
              open={queryOpen[idx + 1]}
              overlayClassName={queryPopoverClassName}
              key={idx}
              placement="right"
              title={null}
              trigger="click"
              content={<QueryWrapper />}>
              <div css={queryItemStyle}>
                <div
                  role="button"
                  onClick={() => {
                    remove(idx);
                  }}>
                  <CloseOutlined />
                </div>
                <div css={queryItemTextStyle} onClick={showQuery}>
                  {genValue(i, options)}
                </div>
                <div role="button" onClick={showQuery}>
                  <RightOutlined />
                </div>
              </div>
            </Popover>
          );
        })}

        <Popover
          open={first(queryOpen)}
          overlayClassName={queryPopoverClassName}
          placement="right"
          title={null}
          content={<QueryWrapper />}
          trigger="click">
          <Button
            className="mr-2"
            type="dashed"
            css={addQueryItemTextStyle}
            onClick={() => {
              showQueryPopover(-1);
              setQueryIdx(-1);
              queryForm.resetFields();
            }}>
            <PlusOutlined />
            {isEmpty(querySet) && <span>Add new query</span>}
          </Button>
        </Popover>

        <Button
          type="dashed"
          css={addQueryItemTextStyle}
          onClick={onBeforeSearch}>
          <SearchOutlined />
        </Button>

        {querySet.length > 1 && (
          <Button
            type="dashed"
            className="ml-2"
            css={addQueryItemTextStyle}
            onClick={() => {
              setQuerySet([]);
              onSearch?.('');
            }}>
            <ClearOutlined />
          </Button>
        )}
      </div>
    </div>
  );
};

Search.defaultProps = {
  operator: defaultOperators,
  logicOperator: defaultLogicOperators,
  query: [],
};

export default Search;
