/*
 * @Author: Chengbotao
 * @Date: 2022-06-14 11:12:30
 */

import { DuckTyping } from '../types';

export function treeToFlat(target: DuckTyping, subsetKey: string = 'children') {
  const copyTree = Array.prototype.slice.call([target]);
  const flat = [];
  while (copyTree.length) {
    const node = copyTree.shift();
    const { [subsetKey]: children, ...rest } = node;
    flat.push(rest);
    if (children) {
      Array.prototype.push.apply(copyTree, node.children);
    }
  }
  return flat;
}
