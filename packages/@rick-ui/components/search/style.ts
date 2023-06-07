import { css } from '@emotion/react';

export const queryPopoverClassName = 'queryPopover';

export const containerStyle = css({
  border: '1px solid #d9d9d9',
  borderRadius: '6px',
  padding: '2px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  rowGap: '4px',
});

const baseBtnStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  font-size: 12px;
  font-weight: 600;
  height: 30px;
  text-transform: uppercase;
  padding: 0px 10px;
  transition: all 0.3s ease 0s;
  min-width: 144px;
  min-height: 32px;
  box-shadow: none;
  border-width: 0px;
  border-style: none;
  border-color: transparent;
  border-radius: 4px;
  margin-left: 0px;

  &[disable] {
    color: rgb(102, 102, 102);
    background-color: rgb(224, 224, 224);
    border-color: transparent;
    pointer-events: none;
  }
`;

export const cancelBtnStyle = css`
  ${baseBtnStyle}
  color: rgb(26, 133, 160);
  background-color: rgb(233, 246, 249);
`;

export const saveBtnStyle = css`
  ${baseBtnStyle}
  color: rgb(255, 255, 255);
  background-color: rgb(26, 133, 160);
`;

export const queryItemStyle = css`
  display: flex;
  align-items: center;
  font-size: 12px;
  height: 24px;
  background-color: rgb(240, 240, 240);
  border-radius: 3px;
  cursor: pointer;
  margin-right: 4px;

  div[role='button'] {
    height: 100%;
    width: 24px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: rgb(178, 178, 178);
      font-size: 12px;
    }
  }
`;

export const queryItemTextStyle = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px;
  padding-right: 8px;
  color: rgba(0, 0, 0, 0.85);
`;

export const addQueryItemTextStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  font-size: 12px;
  color: rgb(178, 178, 178);
  border: 1px dashed rgb(224, 224, 224);
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: rgb(247, 247, 247);
    color: rgb(178, 178, 178) !important;
    border-color: rgb(224, 224, 224) !important;
  }

  &:focus-visible {
    outline: 1px solid #ccc !important;
  }
`;

export const HiddenContainerStyles = css`
  transform: translateX(9999px);
`;
