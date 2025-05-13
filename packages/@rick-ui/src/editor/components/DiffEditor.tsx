import {
  DiffEditor as _DiffEditor,
  useMonaco,
  type DiffEditorProps as _DiffEditorProps,
  type Monaco,
} from '@monaco-editor/react';
import { memoSVC } from '@rickzhou/react-utils';
import { type editor } from 'monaco-editor';
import { useEffect, useMemo, type FC } from 'react';
import { useTheme } from '../../theme-provider/hooks/useTheme';
import { DIFF_EDITOR_OPTIONS } from '../common/config';
import { Loading } from './Loading';

export type DiffEditorProps = Omit<_DiffEditorProps, 'theme'> & {
  readOnly?: boolean;
  language: string;
};

const DiffEditor: FC<DiffEditorProps> = memoSVC(
  ({ readOnly = false, ...props }) => {
    const options = useMemo(() => {
      return {
        ...DIFF_EDITOR_OPTIONS,
        ...props?.options,
        readOnly,
      };
    }, [props?.options, readOnly]);

    const monaco = useMonaco();
    const { theme } = useTheme();

    function handleEditorDidMount(
      editor: editor.IStandaloneDiffEditor,
      monaco: Monaco,
    ) {
      props?.onMount?.(editor, monaco);
      monaco.editor.setTheme(theme);
    }

    useEffect(() => {
      if (monaco) {
        monaco.editor.setTheme(theme);
      }
    }, [monaco, theme]);

    return (
      <_DiffEditor
        loading={<Loading />}
        {...props}
        options={options}
        onMount={handleEditorDidMount}
      />
    );
  },
);

export default DiffEditor;
