import { isObject } from './checkers';

const f = (tree: Record<string, string[]>, root: string) => {
  const res: string[] = [root];
  for (const vert of tree[root]) {
    if (!tree[vert].length) {
      res.push(vert);
    } else {
      res.push(...f(tree, vert));
    }
  }
  return res;
};

const dfs = (tree: Record<string, string[]>) => {
  isObject(tree);
  return f(tree, Object.keys(tree)[0]);
};

export default dfs;
