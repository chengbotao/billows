/*
 * @Author: Chengbotao
 * @Date: 2022-06-14 08:38:27
 */
export function curry(fn: any, ...args: any[]) {
  const len = fn.length;
  return function (this: any) {
    const lambdaArgs = Array.prototype.slice.call(arguments);
    Array.prototype.push.apply(args, lambdaArgs);
    if (args.length < len) {
      return curry.call(this, fn, ...args);
    } else {
      return fn.apply(this, args);
    }
  };
}
