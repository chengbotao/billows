/*
 * @Author: Chengbotao
 * @Date: 2022-06-14 11:47:34
 */

import { DuckTyping } from '../types';

export function getNodeFromTree(
  target: any[] & DuckTyping,
  mark: any,
  options?: Partial<Record<'idKey' | 'childrenKey', string>>
) {
  const copyTree =
    Object.prototype.toString.call(target) === '[object Array]'
      ? Array.prototype.slice.call(target)
      : [target];
  const defaultOpts = Object.assign(
    {
      idKey: 'id',
      childrenKey: 'children',
    },
    options
  );
  const { idKey, childrenKey } = defaultOpts;

  while (copyTree.length) {
    const node = copyTree.shift();
    if (node[idKey] === mark) {
      return node;
    }
    if (node[childrenKey]) {
      Array.prototype.push.apply(copyTree, node.children);
    }
  }

  return null;
}
