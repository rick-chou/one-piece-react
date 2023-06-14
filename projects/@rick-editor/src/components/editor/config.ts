import { EditorThemeSet } from '@/assets/editor-themes';
import { type CommandItemTypes } from '@/types';

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
