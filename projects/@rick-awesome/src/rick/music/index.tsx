import { applyPureVueInReact, applyVueInReact } from 'veaury';
import MyVueComponent from './index.vue';

const BasicWithNormal = applyVueInReact(MyVueComponent);

const BasicWithPure = applyPureVueInReact(MyVueComponent);

console.log('MyVueComponent', BasicWithPure);

export default () => (
 <BasicWithNormal />
);
