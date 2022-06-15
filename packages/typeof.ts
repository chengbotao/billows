/*
 * @Author: Chengbotao
 * @Date: 2022-06-08 14:36:02
 */
export function typeOf(operand: any): string {
  const toString = Object.prototype.toString;
  let type = toString.call(operand).split(' ')[1];
  type = type.substring(0, type.length - 1).toLowerCase();
  return type;
}
