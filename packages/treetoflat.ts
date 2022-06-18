/*
 * @Author: Chengbotao
 * @Date: 2022-06-14 11:12:30
 */

import { DuckTyping } from '../types';

export function treeToFlat(target: any[] & DuckTyping, subsetKey: string = 'children') {
  const copyTree =
    Object.prototype.toString.call(target) === '[object Array]'
      ? Array.prototype.slice.call(target)
      : [target];
  const flat = [];
  while (copyTree.length) {
    const node = copyTree.shift();
    const { [subsetKey]: children, ...rest } = node;
    flat.push(rest);
    if (children) {
      Array.prototype.push.apply(copyTree, node.children);
      // Array.prototype.unshift.apply(copyTree, node.children);
    }
  }
  return flat;
}
