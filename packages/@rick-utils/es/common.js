import { isEmpty } from 'lodash';
/**
 * @since 1.0.0
 */
export const isEmptyValue = (value) => {
    if (typeof value === 'object')
        return isEmpty(value);
    if (typeof value === 'undefined')
        return false;
    if (typeof value === 'boolean')
        return !value;
    return true;
};
