import { isNumber } from './checkers';

const multiply = (a: number) => {
  isNumber(a);
  return (b) => {
    isNumber(b);
    return a * b;
  };
};

export default multiply;
