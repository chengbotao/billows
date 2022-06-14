/*
 * @Author: Chengbotao
 * @Date: 2022-06-14 11:12:30
 */

import { DuckTyping } from '../types';

export function treeToFlat(target: any[] & DuckTyping, subsetKey: string = 'children') {
  const copyTree = typeof target === 'object' ? [target] : Array.prototype.slice.call(target);
  const flat = [];
  for (let i = 0, len = copyTree.length; i < len; i++) {
    const record = [copyTree[i]];
    while (record.length) {
      const node = record.shift();
      const { [subsetKey]: children, ...rest } = node;
      flat.push(rest);
      if (children) {
        Array.prototype.push.apply(record, node.children);
      }
    }
  }
  return flat;
}
