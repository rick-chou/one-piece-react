import {
  Editor as _Editor,
  type EditorProps as _EditorProps,
  type Monaco,
  useMonaco,
} from '@monaco-editor/react';
import { memoSVC } from '@rickzhou/react-utils';
import { type editor } from 'monaco-editor';
import { type FC, useEffect, useMemo, useRef } from 'react';
import { useTheme } from '../../theme-provider/hooks/useTheme';
import { EDITOR_OPTIONS } from '../common/config';
import { Loading } from './Loading';

export type EditorProps = Omit<_EditorProps, 'theme'> & {
  readOnly?: boolean;
  language: string;
};

const Editor: FC<EditorProps> = memoSVC(
  ({ readOnly = false, language, ...props }) => {
    const monaco = useMonaco();
    const { theme } = useTheme();
    const editorRef = useRef<editor.IStandaloneCodeEditor>();

    function handleEditorDidMount(
      editor: editor.IStandaloneCodeEditor,
      monaco: Monaco,
    ) {
      editorRef.current = editor;
      props?.onMount?.(editor, monaco);
      monaco.editor.setTheme(theme);
    }

    useEffect(() => {
      if (monaco) {
        monaco.editor.setTheme(theme);
      }
    }, [monaco, theme]);

    const options = useMemo(() => {
      return {
        ...EDITOR_OPTIONS,
        ...props?.options,
        readOnly,
      };
    }, [props?.options, readOnly]);

    return (
      <_Editor
        loading={<Loading />}
        {...props}
        language={language}
        options={options}
        onMount={handleEditorDidMount}
      />
    );
  },
);

export default Editor;
