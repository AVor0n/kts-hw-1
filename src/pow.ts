import { isNumber } from './checkers';

const pow = (base: number, exponent?: number) => {
  isNumber(base);

  if (exponent !== undefined) {
    isNumber(exponent);
    return base ** exponent;
  }

  return (exp: number) => {
    isNumber(exp);
    return base ** exp;
  };
};

export default pow;
