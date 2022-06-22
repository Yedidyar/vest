import { bindNot } from 'vest-utils';

export function isNull(value: unknown): value is null {
  return value === null;
}

export const isNotNull = bindNot(isNull);
