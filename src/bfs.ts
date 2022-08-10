import { isObject } from './checkers';

const bfs = (tree: Record<string, string[]>) => {
  isObject(tree);
  const res = [Object.keys(tree)[0]];
  for (const vert of res) {
    res.push(...tree[vert]);
  }
  return res;
};

export default bfs;
