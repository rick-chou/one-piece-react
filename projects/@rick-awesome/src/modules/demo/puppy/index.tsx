/**
 * @author
 * @link https://codepen.io/Ma5a/pen/MWBGbOb
 */

import Iframe from '@/components/iframe';

const Puppy = () => {
  return <Iframe path={new URL('./app.html', import.meta.url).href} />;
};

export default Puppy;