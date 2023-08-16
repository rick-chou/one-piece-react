import {
  verify,
  verifyAndFix,
} from '@rickzhou/react-playground/plugins/eslint-react-standalone';
import { type Linter } from 'eslint';
import type { editor } from 'monaco-editor';

export type LinterWorkerPayload = {
  event: 'LINT' | 'FIX';
  code: string;
  ruleSeverityOverrides?: Record<string, Linter.Severity>;
};

const messagesToMarkers = (
  messages: Linter.LintMessage[],
): editor.IMarkerData[] => {
  if (messages.some(m => m.fatal)) return []; // no need for any extra highlights on parse errors
  return messages.map(m => ({
    startLineNumber: m.line,
    endLineNumber: m.endLine ?? m.line,
    startColumn: m.column,
    endColumn: m.endColumn ?? m.column,
    message: `${m.message}\neslint(${m.ruleId})`,
    severity: m.severity === 2 ? 8 /* error */ : 4 /* warning */,
  }));
};

self.addEventListener(
  'message',
  ({ data }: MessageEvent<LinterWorkerPayload>) => {
    const { event } = data;
    console.log('data', data);
    try {
      if (event === 'LINT') {
        const { code, ruleSeverityOverrides } = data;
        self.postMessage({
          event: 'LINT' as const,
          markers: messagesToMarkers(verify(code, ruleSeverityOverrides)),
        });
      } else if (event === 'FIX') {
        const { code, ruleSeverityOverrides } = data;
        const fixReport = verifyAndFix(code, ruleSeverityOverrides);
        self.postMessage({
          event: 'FIX' as const,
          markers: messagesToMarkers(fixReport.messages),
          output: fixReport.output,
          fixed: fixReport.fixed,
        });
      }
    } catch (e) {
      console.error(e);
      self.postMessage({ event: 'ERROR' as const, error: e });
    }
  },
);
