import { Item, RightSlot } from 'react-contexify';

export const Hotkey = {
  Shift: '⇧',
  Meta: '⌘',
  Ctrl: '⌃',
  Alt: '⌥',

  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
  H: 'H',
  I: 'I',
  J: 'J',
  K: 'K',
  L: 'L',
  M: 'M',
  N: 'N',
  O: 'O',
  P: 'P',
  Q: 'Q',
  R: 'R',
  S: 'S',
  T: 'T',
  U: 'U',
  V: 'V',
  W: 'W',
  X: 'X',
  Y: 'Y',
  Z: 'Z',
};

const SiderHotkey = {
  newFile: [Hotkey.Meta, Hotkey.Shift, Hotkey.N],
  newDir: [Hotkey.Meta, Hotkey.Shift, Hotkey.M],
  uploadFiles: [Hotkey.Meta, Hotkey.Shift, Hotkey.F],
  uploadZip: [Hotkey.Meta, Hotkey.Shift, Hotkey.Z],
  uploadDir: [Hotkey.Meta, Hotkey.Shift, Hotkey.D],
};

const EditorHotkey = {
  format: [Hotkey.Shift, Hotkey.Alt, Hotkey.F],
  cmd: [Hotkey.Shift, Hotkey.Meta, Hotkey.P],
};

export const RickHotKey = {
  ...SiderHotkey,
  ...EditorHotkey,
};

export const CtxMenu: React.FC<{
  hotkey: string[];
  title: string;
  onClick: () => void;
}> = ({ hotkey = [], title = '', onClick }) => {
  const matchShortcut = (e: KeyboardEvent) => {
    const specialKeys: boolean[] = [];
    if (hotkey.includes(Hotkey.Meta)) {
      specialKeys.push(e.metaKey);
    }

    if (hotkey.includes(Hotkey.Alt)) {
      specialKeys.push(e.altKey);
    }

    if (hotkey.includes(Hotkey.Shift)) {
      specialKeys.push(e.shiftKey);
    }

    if (hotkey.includes(Hotkey.Ctrl)) {
      specialKeys.push(e.ctrlKey);
    }

    specialKeys.push(e.key === hotkey.at(-1)!.toLowerCase());

    return specialKeys.every(i => i);
  };

  return (
    <Item id={title} keyMatcher={matchShortcut} onClick={onClick}>
      <span className="text-sm">{title}</span>
      <RightSlot>
        <span className="text-sm">{hotkey.join(' ')}</span>
      </RightSlot>
    </Item>
  );
};
