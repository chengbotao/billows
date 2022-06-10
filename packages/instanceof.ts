/*
 * @Author: Chengbotao
 * @Date: 2022-06-09 14:04:42
 */
export function instanceOf(obj: any, ctor: any): boolean {
  let proto = Reflect.getPrototypeOf(obj);
  while (proto) {
    if (proto === ctor.prototype) {
      return true;
    }
    proto = Reflect.getPrototypeOf(proto);
  }
  return false;
}
