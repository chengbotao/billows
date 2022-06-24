/*
 * @Author: Chengbotao
 * @Date: 2022-06-24 16:05:01
 */
export function isURLSearchParams(val: any): val is URLSearchParams {
  return typeof val !== 'undefined' && val instanceof URLSearchParams;
}
