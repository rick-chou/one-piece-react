/// <reference types="vite/client" />

import '@emotion/react/jsx-runtime';

declare module '@emotion/react/jsx-runtime' {
  namespace JSX {
    type ElementType = React.JSX.ElementType;
  }
}
