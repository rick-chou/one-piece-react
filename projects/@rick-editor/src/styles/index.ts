import { TabHeight } from '@rickzhou/react-editor/config/const';
import { useTabs } from '@rickzhou/react-editor/hooks/useTabs';
import { useTheme } from '@rickzhou/react-editor/hooks/useTheme';
import { colorReverse } from '@rickzhou/react-editor/utils/color';
import { css } from '@emotion/react';
import Color from 'color';

// TODO : add theme token
const themeColorToken = {};

export const cardStyle = css`
  box-shadow:
    20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
`;

/**
 * Command Modal UI
 * ----------------------------------------
 */
export const CommandModalInputStyle = css`
  background: transparent;
  border: none;
  outline: none;
  color: #e5e5e5;
  width: 100%;
  font-size: 16px;
  line-height: 1;
  padding: 16px;
`;

export const CommandModalInputDividerWrapperStyle = css`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 4px;
`;

export const CommandModalInputDividerStyle = css`
  background-color: #e5e5e514;
  height: 1px;
  border: none;
`;

export const CommandHotkeyTitleStyle = css`
  color: rgb(128, 128, 128);
  font-size: 12px;
  font-weight: 700;
  padding-top: 8px;
  padding-bottom: 8px;
  user-select: none;
  padding-left: 16px;
`;

export const CommandHotkeyItemStyle = css`
  color: rgb(229, 229, 229);
  font-size: 13px;
  height: 36px;
  padding-top: 8px;
  padding-bottom: 8px;
  user-select: none;
  padding-left: 24px;

  &:hover {
    background-color: rgba(229, 229, 229, 0.1);
  }
`;

export const CommandHotkeyStyle = css`
  border-radius: 4px;
  padding: 4px;
  line-height: 1;
  margin: 0px;
  height: 20px;
  min-width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background-color: #e5e5e51a;
  font-size: 12px;
  color: #e5e5e5;
  user-select: none;
`;

/**
 * Editor UI Start
 * ----------------------------------------
 */
export const useEditorWrapperStyle = () => {
  const { tabs } = useTabs();
  return css`
    height: ${tabs.length ? `calc(100% - ${TabHeight}px)` : '100%'};
  `;
};

/**
 * Editor Tab UI Start
 * ----------------------------------------
 */
export const useEditorTabWrapperStyle = () => {
  const { themeColor } = useTheme();
  return css`
    display: flex;
    background-color: ${themeColor};
    overflow-x: scroll;

    span {
      max-width: 150px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: inline-block;
      white-space: nowrap;
    }
  `;
};

export const useEditorTabStyle = () => {
  const { themeColor } = useTheme();
  const color = Color(colorReverse(themeColor));
  const isDark = color.isDark();
  return css`
    display: flex;
    align-items: center;
    color: ${colorReverse(themeColor)};
    font-size: 13px;
    font-weight: 400;
    user-select: none;
    height: ${TabHeight}px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 4px;

    &:hover {
      background-color: ${isDark ? color.lighten(0.8).hex() : color.darken(0.8).hex()};
      color: ${colorReverse(themeColor)};

      .tab-close-icon {
        opacity: 1;
      }
    }

    &[data-state='active'] {
      color: ${isDark ? color.lighten(0.5).hex() : color.darken(0.5).hex()};
    }
  `;
};

export const EditorTabCloseIconStyle = css`
  color: rgb(153, 153, 153);
  font-size: 10px;
  margin-left: 8px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    color: #e5e5e5;
  }
`;

/**
 * Editor Sider
 * ----------------------------------------
 */
export const useSiderTheme = () => {
  const { themeColor } = useTheme();

  return css`
    .rick-file-tree {
      height: 100%;
      overflow: scroll;
      scrollbar-color: red;
      text-overflow: ellipsis;
      color: rgb(153, 153, 153);
      font-weight: 500;
      border-radius: 0;
      background: ${themeColor};
      .ant-tree-treenode {
        padding-top: 4px;
        padding-bottom: 6px;
        min-width: 200px;
        white-space: nowrap;
      }

      .ant-tree-treenode-selected {
        &::before {
          background: #e5e5e51a !important;
          border-radius: 6px;
        }
      }
    }
  `;
};

/**
 * Welcome
 * ----------------------------------------
 */
export const useWelcomeStyle = () => {
  const { themeColor } = useTheme();
  return css`
    height: 100%;
    background-color: ${themeColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    div {
      display: flex;
      color: ${colorReverse(themeColor)};
      font-size: 2rem;
      font-weight: 700;
      font-style: italic;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;

      img {
        height: 15vw;
        width: 15vw;
      }
    }
  `;
};
