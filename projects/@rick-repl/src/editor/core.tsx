import { liftOff } from '@rickzhou/react-repl/setup';
import { type ReplProps } from '@rickzhou/react-repl/types';
import { useMount, useUnmount } from 'ahooks';
import { throttle } from 'lodash-es';
import {
  KeyCode,
  KeyMod,
  Uri,
  languages,
  editor as mEditor,
} from 'monaco-editor';
import { useMemo, useRef } from 'react';

type EditorCoreProps = {
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

const EditorCore: React.FC<EditorCoreProps> = props => {
  const editorDomRef = useRef<HTMLDivElement>(null);
  const editor = useRef<mEditor.IStandaloneCodeEditor>();
  const model = useMemo(
    () => mEditor.getModel(Uri.parse(props.url)),
    [props.url],
  );

  useMount(async () => {
    editor.current = mEditor.create(editorDomRef.current!, {
      model: null,
      scrollbar: {
        horizontalScrollbarSize: 4,
        horizontalSliderSize: 4,
        verticalScrollbarSize: 4,
        verticalSliderSize: 4,
      },
      automaticLayout: true,
      readOnly: props.disabled,
      lineDecorationsWidth: 5,
      lineNumbersMinChars: 3,
      cursorBlinking: 'smooth',
      fontLigatures: true,
      formatOnPaste: true,
      formatOnType: true,
      fontFamily: 'Fira Code',
      fontWeight: '500',
      fontSize: 14,
      showDeprecated: true,
      showUnused: true,
      showFoldingControls: 'mouseover',
      // padding: { top: 15 },
      minimap: {
        enabled: props.withMinimap,
        autohide: true,
      },
      smoothScrolling: true,
      smartSelect: {
        selectSubwords: true,
        selectLeadingAndTrailingWhitespace: true,
      },
    });

    editor.current.onDidChangeModelContent(() => {
      const code = editor.current!.getValue();
      props.onDocChange?.(code);
      runLinter(code);
    });

    editor.current.addCommand(KeyMod.CtrlCmd | KeyCode.KeyS, async () => {
      if (editor) {
        // auto-format
        await editor.current!.getAction('editor.action.formatDocument')?.run();
        // auto-fix problems
        if (props.displayErrors) {
          await editor.current!.getAction('eslint.executeAutofix')?.run();
        }

        editor.current!.focus();
      }
    });

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
      editor.current.addAction({
        id: 'eslint.executeAutofix',
        label: 'Fix all auto-fixable problems',
        contextMenuGroupId: '1_modification',
        contextMenuOrder: 3.5,
        run(ed) {
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

    if (props.linter) {
      const listener = ({ data }: any) => {
        if (props.displayErrors) {
          const { event } = data;
          if (event === 'LINT') {
            const m = model;
            if (m) {
              mEditor.setModelMarkers(m, 'eslint', data.markers);
            }
          } else if (event === 'FIX') {
            const m = model;
            if (m) {
              mEditor.setModelMarkers(m, 'eslint', data.markers);
            }

            if (data.fixed) {
              model?.setValue(data.output);
            }
          }
        }
      };

      props.linter.addEventListener('message', listener);
    }

    languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: !props.displayErrors,
      noSyntaxValidation: !props.displayErrors,
    });

    const disabled = props.disabled === true;
    editor.current.updateOptions({ readOnly: disabled });

    editor.current.setModel(model);
    mEditor.setTheme('vs-light-rick');

    await liftOff();

    props.onEditorReady?.(editor.current, { Uri, editor: mEditor });
  });

  useMount(() => {
    if (props.displayErrors) {
      // run on mount and when displayLintMessages is turned on
      runLinter(editor.current!.getValue());
    } else {
      // reset eslint markers when displayLintMessages is turned off
      const m = model;
      if (m) {
        mEditor.setModelMarkers(m, 'eslint', []);
      }
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

export default EditorCore;
