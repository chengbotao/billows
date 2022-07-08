/*
 * @Author: Chengbotao
 * @Date: 2022-06-24 14:18:02
 */

import { JsonpOpts } from '../types';
import { buildURL } from './buildurl';

export function jsonp(options: JsonpOpts) {
  const { url, callbackName, params, paramsSerializer } = options;
  return new Promise((resolve, reject) => {
    const scriptEl = document.createElement('script');
    scriptEl.src = `${buildURL(url, params, paramsSerializer)}&callback=${callbackName}`;
    document.body.appendChild(scriptEl);
    (<any>window)[callbackName] = (data: any) => {
      resolve(data);
      document.removeChild(scriptEl);
    };
  });
}
