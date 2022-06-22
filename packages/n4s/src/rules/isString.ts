import { isStringValue as isString } from 'isStringValue';
import { bindNot } from 'vest-utils';

export const isNotString = bindNot(isString);
export { isString };
