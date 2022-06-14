/*
 * @Author: Chengbotao
 * @Date: 2022-06-14 11:47:34
 */

import { DuckTyping } from '../types';

export function getNodeFromTree(
  target: any[] & DuckTyping,
  mark: any,
  options = {
    id: 'id',
    children: 'children',
  }
) {
  const copyTree =
    Object.prototype.toString.call(target) === '[object Array]'
      ? Array.prototype.slice.call(target)
      : [target];
  const { id, children } = options;
  for (let i = 0, len = copyTree.length; i < len; i++) {
    const record = [copyTree[i]];

    while (record.length) {
      const node = record.shift();
      if (node[id] === mark) {
        return node;
      }
      if (node[children]) {
        Array.prototype.push.apply(record, node.children);
      }
    }
  }
  return null;
}
