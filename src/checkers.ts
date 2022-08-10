export const checkType = (
  value: unknown,
  typeChecker: ((_: unknown) => boolean) | string,
  errorMessage?: string
): boolean => {
  if (
    (typeof typeChecker === 'string' && typeof value !== typeChecker) ||
    (typeof typeChecker === 'function' && !typeChecker(value))
  ) {
    throw new Error(errorMessage ?? 'INVALID_ARGUMENT');
  }
  return true;
};

export const isNumber = (value: number, errorMessage?: string) =>
  checkType(value, 'number', errorMessage);
export const isString = (value: string, errorMessage?: string) =>
  checkType(value, 'string', errorMessage);
export const isBoolean = (value: boolean, errorMessage?: string) =>
  checkType(value, 'boolean', errorMessage);
export const isArray = (value: unknown[], errorMessage?: string) =>
  checkType(value, Array.isArray, errorMessage);

export const checkCountArgs = (args: unknown[], count: number) => {
  if (args.length < count) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  return true;
};

export const isObject = (obj: object, errorMessage?: string) => {
  if (
    obj === null ||
    Object.getPrototypeOf(obj) !== Object.getPrototypeOf({})
  ) {
    throw new Error(errorMessage ?? 'INVALID_ARGUMENT');
  }
  return true;
};
