import { isString } from './checkers';

const sort = (message: string) => {
  isString(message);
  return message
    .toLowerCase()
    .split(' ')
    .map((word) => word.split('').sort().join(''))
    .sort((word1, word2) => word1.length - word2.length)
    .join(' ');
};

export default sort;
