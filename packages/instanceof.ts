/*
 * @Author: Chengbotao
 * @Date: 2022-06-09 14:04:42
 */
export function instanceOf(target: any, ctor: any): boolean {
  let proto = Reflect.getPrototypeOf(target);
  while (proto) {
    if (proto === ctor.prototype) {
      return true;
    }
    proto = Reflect.getPrototypeOf(proto);
  }
  return false;
}
