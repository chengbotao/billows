/*
 * @Author: Chengbotao
 * @Date: 2022-06-24 16:05:01
 */
export function isURLSearchParams(val: any): val is URLSearchParams {
  return typeof val !== 'undefined' && val instanceof URLSearchParams;
}

export function isFormData(val: any): val is FormData {
  return typeof val !== 'undefined' && val instanceof FormData;
}

export function isEmptyObject(val: any): boolean {
  // eslint-disable-next-line no-unreachable-loop
  for (const key in val) {
    return false;
  }
  return true;
}

export function isPlainObject(val: any): val is Object {
  return Object.prototype.toString.call(val) === '[object Object]';
}
