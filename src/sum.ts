import { checkCountArgs, isNumber } from './checkers';

const sum = (...args: number[]) => {
  checkCountArgs(args, 2);
  args.every((it) => isNumber(it));

  return args.reduce((acc, it) => acc + it, 0);
};

export default sum;
