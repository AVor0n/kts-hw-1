import { isObject } from './checkers';

const getNumProps = (obj: object) => {
  const res: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'number') {
      res.push(key);
    } else if (value !== null && typeof value === 'object') {
      res.push(...getNumProps(value));
    }
  }
  return res;
};

const getNumberProps = (obj: object) => {
  isObject(obj);
  return getNumProps(obj).sort();
};

export default getNumberProps;
