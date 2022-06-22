import { bindNot } from 'vest-utils';

export function isUndefined(value?: unknown): value is undefined {
  return value === undefined;
}

export const isNotUndefined = bindNot(isUndefined);
