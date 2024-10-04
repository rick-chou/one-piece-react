/**
 * @author
 * @link https://codepen.io/hexagoncircle/pen/wvmjomb
 */

import Iframe from '@/components/iframe';

const LogoWall = () => {
  return <Iframe path={new URL('./app.html', import.meta.url).href} />;
};

export default LogoWall;
