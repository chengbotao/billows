/*
 * @Author: Chengbotao
 * @Date: 2022-06-24 17:39:44
 */
export function encodeURIComponents(val: string): string {
  return encodeURIComponent(val).replace(/%40/g, '@').replace(/%3A/g, ':').replace(/%24/g, '$');
}
