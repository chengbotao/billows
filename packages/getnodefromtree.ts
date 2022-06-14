/*
 * @Author: Chengbotao
 * @Date: 2022-06-14 11:47:34
 */

import { DuckTyping } from '../types';

export function getNodeFromTree(
  target: DuckTyping,
  mark: any,
  options = {
    id: 'id',
    children: 'children',
  }
) {
  const copyTree = Array.prototype.slice.call([target]);
  const { id, children } = options;
  while (copyTree.length) {
    const node = copyTree.shift();
    if (node[id] === mark) {
      return node;
    }
    if (node[children]) {
      Array.prototype.push.apply(copyTree, node.children);
    }
  }
  return null;
}
