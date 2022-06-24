/*
 * @Author: Chengbotao
 * @Date: 2022-06-23 10:38:36
 */
export function throttle(
  fn: any,
  wait: number,
  options: {
    leading?: boolean;
    trailing?: boolean;
  } = {}
) {
  let previous = 0;
  let timer: ReturnType<typeof setTimeout> | null;
  const defaultOpts = Object.assign(
    {
      leading: false,
      trailing: true,
    },
    options
  );
  const lambda = function (this: any) {
    const now = Date.now();
    const args = Array.prototype.slice.call(arguments);
    if (!previous && !defaultOpts.leading) previous = now;
    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      previous = now;
      fn.apply(this, args);
      // if (!timer) args = null;
    } else if (!timer && defaultOpts.trailing) {
      timer = setTimeout(() => {
        previous = defaultOpts.leading === false ? 0 : Date.now();
        timer = null;
        const args = Array.prototype.slice.call(arguments);
        fn.apply(this, args);
        // if (!timer) args = null;
      }, remaining);
    }
  };

  // 取消功能
  lambda.cancel = function () {
    clearTimeout(timer as ReturnType<typeof setTimeout>);
    timer = null;
    previous = 0;
  };

  return lambda;
}
