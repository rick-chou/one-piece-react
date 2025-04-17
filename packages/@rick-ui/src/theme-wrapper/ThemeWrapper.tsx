import { type SerializedStyles } from '@emotion/react';
import { type PropsWithChildren } from 'react';
import { memoSVC } from '../../../@rick-utils';
import { useTheme } from '../theme-provider/hooks/useTheme';

export type ThemeWrapperProps = PropsWithChildren<{ style?: SerializedStyles }>;

const ThemeWrapper = memoSVC<ThemeWrapperProps>(({ children, style }) => {
  const { theme } = useTheme();
  return (
    <div className={theme} css={style}>
      {children}
    </div>
  );
});

export default ThemeWrapper;
