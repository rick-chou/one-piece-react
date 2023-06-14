export const colorReverse = (color: string) => {
  color = '0x' + color.replace(/#/g, '');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const str = '000000' + (0xffffff - color).toString(16);
  return '#' + str.substring(str.length - 6, str.length);
};
