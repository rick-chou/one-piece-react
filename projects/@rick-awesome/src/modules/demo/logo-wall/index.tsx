/**
 * @author
 * @link https://codepen.io/hexagoncircle/pen/wvmjomb
 */

import Iframe from '@/components/iframe';

const LogoWall = () => {
  return <Iframe path={import.meta.resolve('./app.html')} />;
};

export default LogoWall;
