import { isNull } from 'isNull';
import { isUndefined } from 'isUndefined';

import { bindNot } from 'vest-utils';

export function isNullish(value: any): value is null | undefined {
  return isNull(value) || isUndefined(value);
}

export const isNotNullish = bindNot(isNullish);
