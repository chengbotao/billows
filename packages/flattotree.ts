/*
 * @Author: Chengbotao
 * @Date: 2022-06-14 11:11:57
 */

import { DuckTyping } from '../types';

export function flatToTree(
  target: any[],
  options = {
    id: 'id',
    pid: 'pid',
    children: 'children',
  }
) {
  const copyFlat = Array.prototype.slice.call(target);
  const record: DuckTyping = Object.create(null);
  const { id, pid, children } = options;
  const tree = [];
  for (let i = 0, len = copyFlat.length; i < len; i++) {
    const item = copyFlat[i];
    if (record[item[id]]) {
      item[children] = record[item[id]];
    } else {
      item[children] = record[item[id]] = [];
    }

    if (item[pid]) {
      if (!record[pid]) {
        record[pid] = [];
      }
      record[pid].push(item);
    } else {
      tree.push(item);
    }
  }
  return tree;
}
