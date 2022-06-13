/*
 * @Author: Chengbotao
 * @Date: 2022-06-13 23:52:57
 */

export function partial(fn: any) {
  const args = Array.prototype.slice.call(arguments, 1);
  return function (this: any) {
    const anonArgs = Array.prototype.slice.call(arguments);
    Array.prototype.push.apply(args, anonArgs);
    return fn.apply(this, args);
  };
}
