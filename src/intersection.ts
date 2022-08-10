import { isArray, isNumber } from './checkers';

const intersection = (arr1: number[], arr2: number[]) => {
  if (arr1 === undefined || arr2 === undefined) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }

  [arr1, arr2].every(
    (arr) =>
      isArray(arr) &&
      arr.every((it) => isNumber(it, 'INVALID_ELEMENT_IN_ARRAY'))
  );

  return Array.from(new Set(arr1.filter((it) => arr2.includes(it))));
};

export default intersection;
