import { checkType, isNumber } from './checkers';

const planEvent = (f, timeout) => {
  checkType(f, 'function');
  isNumber(timeout);
  return new Promise((res) =>
    setTimeout(() => {
      res(f());
    }, timeout)
  );
};

export default planEvent;
