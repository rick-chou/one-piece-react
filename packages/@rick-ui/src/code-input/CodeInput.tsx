import { css } from '@emotion/react';
import { memoSVC } from '@rickzhou/react-utils';
import { type FC } from 'react';
import ReactCodeInput, { type ReactCodeInputProps } from 'react-code-input';

export type CodeInputProps = {
  /**
   * @description onComplete callback
   */
  onComplete(values: string): void;
  /**
   * @description verification code length
   * @default 4
   */
  length: ReactCodeInputProps['fields'];
  /**
   * @description key
   */
  name: ReactCodeInputProps['name'];
};

const CodeInput: FC<CodeInputProps> = memoSVC(
  ({ onComplete, length, name }) => {
    return (
      <ReactCodeInput
        css={css`
          input {
            &:focus-visible {
              caret-color: transparent;
            }
          }
        `}
        inputStyle={{
          fontFamily:
            'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
          margin: '4px',
          width: '42px',
          height: '42px',
          borderRadius: '8px',
          fontSize: '24px',
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid #86868b',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px 0px',
          boxSizing: 'border-box',
          textAlign: 'center',
          appearance: 'none',
        }}
        inputMode="numeric"
        name={name}
        fields={length}
        forceUppercase
        onChange={values => {
          if (values.length === length) {
            onComplete(values);
          }
        }}
      />
    );
  },
);

export default CodeInput;
