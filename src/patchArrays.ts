// @ts-nocheck

import { isNumber } from './checkers';

const patchArrays = (): void => {
  Object.assign(Array.prototype, {
    count() {
      return this.length;
    },
    insert(pos: number, value: unknown) {
      isNumber(pos);
      const idx = pos < 0 ? 0 : pos > this.length ? this.length : pos;
      this.splice(idx, 0, value);
      return this;
    },
    remove(value: unknown) {
      const idx = this.findIndex((it) => it === value);
      idx !== -1 && this.splice(idx, 1);
      return this;
    },
  });
};
export default patchArrays;
