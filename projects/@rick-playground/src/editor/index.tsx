import { liftOff } from '@/setup';
import { ReplProps } from '@/types';
import { useMount, useUnmount } from 'ahooks';
import { throttle } from 'lodash';
import {
  KeyCode,
  KeyMod,
  Uri,
  languages,
  editor as mEditor,
} from 'monaco-editor';
import { useMemo, useRef } from 'react';

type EditorProps = {
  url: string;
  disabled?: true;
  isDark?: boolean;
  withMinimap?: boolean;
  displayErrors?: boolean;
  onDocChange?: (code: string) => void;
  onEditorReady?: (
    editor: mEditor.IStandaloneCodeEditor,
    monaco: {
      Uri: typeof Uri;
      editor: typeof mEditor;
    },
  ) => void;
} & ReplProps;

const Editor: React.FC<EditorProps> = props => {
  const editorDomRef = useRef<HTMLDivElement>(null);
  const editor = useRef<mEditor.IStandaloneCodeEditor>();
  const model = useMemo(
    () => mEditor.getModel(Uri.parse(props.url)),
    [props.url],
  );

  useMount(() => {
    editor.current = mEditor.create(editorDomRef.current!, {
      model: null,
      automaticLayout: true,
      readOnly: props.disabled,
      lineDecorationsWidth: 5,
      lineNumbersMinChars: 3,
      padding: { top: 15 },
      minimap: {
        enabled: props.withMinimap,
      },
    });

    editor.current.onDidChangeModelContent(() => {
      const code = editor.current!.getValue();
      props.onDocChange?.(code);
      runLinter(code);
    });

    editor.current.addCommand(KeyMod.CtrlCmd | KeyCode.KeyS, () => {
      if (editor) {
        // auto-format
        editor.current!.getAction('editor.action.formatDocument')?.run();
        // auto-fix problems
        props.displayErrors &&
          editor.current!.getAction('eslint.executeAutofix')?.run();
        editor.current!.focus();
      }
    });

    if (props.linter) {
      editor.current.addAction({
        id: 'eslint.executeAutofix',
        label: 'Fix all auto-fixable problems',
        contextMenuGroupId: '1_modification',
        contextMenuOrder: 3.5,
        run: ed => {
          const code = ed.getValue();
          if (code) {
            props.linter?.postMessage({
              event: 'FIX',
              code,
            });
          }
        },
      });
    }

    if (props.formatter) {
      languages.registerDocumentFormattingEditProvider('typescript', {
        async provideDocumentFormattingEdits(model) {
          props.formatter!.postMessage({
            event: 'FORMAT',
            code: model.getValue(),
            pos: editor.current!.getPosition(),
          });

          return new Promise(resolve => {
            props.formatter!.addEventListener(
              'message',
              ({ data: { code } }) => {
                resolve([
                  {
                    range: model.getFullModelRange(),
                    text: code,
                  },
                ]);
              },
              { once: true },
            );
          });
        },
      });
    }

    if (props.linter) {
      const listener = ({ data }: any) => {
        if (props.displayErrors) {
          const { event } = data;
          if (event === 'LINT') {
            const m = model;
            m && mEditor.setModelMarkers(m, 'eslint', data.markers);
          } else if (event === 'FIX') {
            const m = model;
            m && mEditor.setModelMarkers(m, 'eslint', data.markers);
            data.fixed && model?.setValue(data.output);
          }
        }
      };
      props.linter.addEventListener('message', listener);
    }

    languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: !props.displayErrors,
      noSyntaxValidation: !props.displayErrors,
    });

    const disabled = props.disabled == true ? true : false;
    editor.current.updateOptions({ readOnly: disabled });

    editor.current!.setModel(model);
    mEditor.setTheme('vs-light-rick');

    liftOff();

    props.onEditorReady?.(editor.current, { Uri, editor: mEditor });
  });

  useMount(() => {
    if (props.displayErrors) {
      // run on mount and when displayLintMessages is turned on
      runLinter(editor.current!.getValue());
    } else {
      // reset eslint markers when displayLintMessages is turned off
      const m = model;
      m && mEditor.setModelMarkers(m, 'eslint', []);
    }
  });

  useUnmount(() => {
    editor.current?.dispose();
  });

  const runLinter = throttle((code: string) => {
    if (props.linter && props.displayErrors) {
      props.linter.postMessage({
        event: 'LINT',
        code,
      });
    }
  }, 250);

  return <div className="h-[calc(100vh-55px)]" ref={editorDomRef} />;
};

export default Editor;
