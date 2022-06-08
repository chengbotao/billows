/*
 * @Author: Chengbotao
 * @Date: 2022-06-08 14:35:08
 */
interface DuckTyping {
  [key: string]: any;
}
export function deepClone(target: any, map = new WeakMap()): any {
  if (target === null || typeof target !== 'object') {
    return target;
  }

  if (map.get(target)) {
    return target;
  }

  const ctor = target.constructor;
  if (/^(RegExp|Date)$/i.test(ctor.name)) {
    // eslint-disable-next-line new-cap
    return new ctor(target);
  }

  map.set(target, true);

  // eslint-disable-next-line prefer-const
  let cloneResult: DuckTyping =
    Object.prototype.toString.call(target) === '[object Array]' ? [] : {};
  for (const key in target) {
    cloneResult[key] = deepClone(target[key], map);
  }
  return cloneResult;
}
