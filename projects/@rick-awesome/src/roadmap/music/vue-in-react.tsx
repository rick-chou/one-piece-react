import { applyPureVueInReact, applyVueInReact } from 'veaury';
import MyVueComponent from './index.vue';

const BasicWithNormal = applyVueInReact(MyVueComponent);

const BasicWithPure = applyPureVueInReact(MyVueComponent);

export default BasicWithNormal;
// console.log('MyVueComponent', BasicWithPure);
