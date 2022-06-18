/*
 * @Author: Chengbotao
 * @Date: 2022-06-14 11:11:57
 */

import { DuckTyping } from '../types';

export function flatToTree(
  target: any[],
  options?: Partial<Record<'idKey' | 'pidKey' | 'childrenKey' | 'topVal', string>>
) {
  const copyFlat = Array.prototype.slice.call(target);
  const record: DuckTyping = Object.create(null);
  const defaultOpts = Object.assign(
    {
      idKey: 'id',
      pidKey: 'pid',
      childrenKey: 'children',
      topVal: '',
    },
    options
  );
  const { idKey, pidKey, childrenKey, topVal } = defaultOpts;
  const tree = [];
  for (let i = 0, len = copyFlat.length; i < len; i++) {
    const item = copyFlat[i];
    const { [idKey]: idVal, [pidKey]: pidVal } = item;
    if (record[idVal]) {
      item[childrenKey] = record[idVal];
    } else {
      item[childrenKey] = record[idVal] = [];
    }

    if (pidVal && pidVal !== topVal) {
      if (!record[pidVal]) {
        record[pidVal] = [];
      }
      record[pidVal].push(item);
    } else {
      tree.push(item);
    }
  }
  return tree;
}
