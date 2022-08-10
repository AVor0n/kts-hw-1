import { isArray, isString } from './checkers';
const normalize = (str: string) => str.toLowerCase().split('').sort().join('');

const removeAnagrams = (strings: string[]) => {
  isArray(strings);
  strings.every((it) => isString(it, 'INVALID_ELEMENT_IN_ARRAY'));

  const heap = {};
  strings.forEach((str) => {
    const normStr = normalize(str);
    heap[normStr] = (heap[normStr] ?? 0) + 1;
  });
  return strings.filter((it) => heap[normalize(it)] === 1);
};

export default removeAnagrams;
