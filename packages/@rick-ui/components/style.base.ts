import { css } from '@emotion/react';

export const baseSizeScale = 0.25;

export const WidthFull = css({
  width: '100%',
});

export const WidthScreen = css({
  width: '100vw',
});

export const HeightFull = css({
  height: '100%',
});

export const HeightScreen = css({
  height: '100%',
});

export const Hidden = css({
  display: 'none',
});

export const Visible = css({
  display: 'block',
});

export const Flex = css({
  display: 'flex',
});

export const FlexCenter = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const FontItalic = css({
  fontStyle: 'italic',
});

export const CursorPointer = css({
  cursor: 'pointer',
});

export const PaddingX = (scale: number) =>
  css({
    paddingLeft: `${baseSizeScale * scale}rem`,
    paddingRight: `${baseSizeScale * scale}rem`,
  });

export const PaddingY = (scale: number) =>
  css({
    paddingTop: `${baseSizeScale * scale}rem`,
    paddingBottom: `${baseSizeScale * scale}rem`,
  });

export const PaddingL = (scale: number) =>
  css({
    paddingLeft: `${baseSizeScale * scale}rem`,
  });

export const PaddingR = (scale: number) =>
  css({
    paddingRight: `${baseSizeScale * scale}rem`,
  });

export const PaddingT = (scale: number) =>
  css({
    paddingTop: `${baseSizeScale * scale}rem`,
  });

export const PaddingB = (scale: number) =>
  css({
    paddingBottom: `${baseSizeScale * scale}rem`,
  });

export const MarginX = (scale: number) =>
  css({
    marginLeft: `${baseSizeScale * scale}rem`,
    marginRight: `${baseSizeScale * scale}rem`,
  });

export const MarginY = (scale: number) =>
  css({
    marginTop: `${baseSizeScale * scale}rem`,
    marginBottom: `${baseSizeScale * scale}rem`,
  });

export const MarginL = (scale: number) =>
  css({
    marginLeft: `${baseSizeScale * scale}rem`,
  });

export const MarginR = (scale: number) =>
  css({
    marginRight: `${baseSizeScale * scale}rem`,
  });

export const MarginT = (scale: number) =>
  css({
    marginTop: `${baseSizeScale * scale}rem`,
  });

export const MarginB = (scale: number) =>
  css({
    marginBottom: `${baseSizeScale * scale}rem`,
  });
