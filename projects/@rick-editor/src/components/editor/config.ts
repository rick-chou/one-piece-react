import { EditorThemeSet } from '@rickzhou/react-editor/assets/editor-themes';
import { type CommandItemTypes } from '@rickzhou/react-editor/types';

export const genCommandItems = () => {
  const commands: CommandItemTypes[] = [];
  commands.push({
    type: 'theme',
    mode: 'title',
    title: 'EditorTheme',
    hotkey: [],
  });
  EditorThemeSet.forEach(theme => {
    commands.push({
      type: 'theme',
      mode: 'item',
      title: theme,
      hotkey: [],
    });
  });
  return commands;
};
