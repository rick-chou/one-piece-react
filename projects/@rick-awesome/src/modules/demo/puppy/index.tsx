/**
 * @author
 * @link https://codepen.io/Ma5a/pen/MWBGbOb
 */

import Iframe from '@/components/iframe';

const Puppy = () => {
  return <Iframe path={import.meta.resolve('./app.html')} />;
};

export default Puppy;
