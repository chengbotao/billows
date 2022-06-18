/*
 * @Author: Chengbotao
 * @Date: 2022-06-08 14:35:08
 */

import { DuckTyping } from '../types';

export function deepClone(target: any, map = new WeakMap()): any {
  if (target === null || typeof target !== 'object') {
    return target;
  }

  if (map.get(target)) {
    return target;
  }

  const Ctor = target.constructor;
  const ctorName = Ctor.name;
  if (/^(RegExp|Date|Number|String|Boolean|Error)$/i.test(ctorName)) {
    return new Ctor(target);
  }

  if (ctorName === 'Symbol') {
    return Object(Object.prototype.valueOf.call(target));
  }

  if (ctorName === 'Map') {
    const cloneMap = new Map();
    map.set(target, true);
    target.forEach((value: any, key: any) => {
      cloneMap.set(deepClone(key, map), deepClone(value, map));
    });
    return cloneMap;
  }

  if (ctorName === 'Set') {
    const cloneSet = new Set();
    map.set(target, true);

    target.forEach((value: any) => {
      cloneSet.add(deepClone(value, map));
    });
    return cloneSet;
  }

  map.set(target, true);

  // eslint-disable-next-line prefer-const
  let cloneResult: DuckTyping =
    Object.prototype.toString.call(target) === '[object Array]' ? [] : {};

  Object.getOwnPropertyNames(target).forEach((key) => {
    cloneResult[key] = deepClone(target[key], map);
  });

  return cloneResult;
}
