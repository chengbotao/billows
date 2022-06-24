/*
 * @Author: Chengbotao
 * @Date: 2022-06-24 16:16:30
 */
import { isURLSearchParams } from './isxxx';
import { typeOf } from './typeof';
import { encodeURIComponents } from './encodeuricomponents';

export function buildURL(url: string, params?: any, paramsSerializer?: (params: any) => string) {
  if (!params) return url;
  let serializerParams;
  if (paramsSerializer) {
    serializerParams = paramsSerializer(params);
  } else if (isURLSearchParams(params)) {
    serializerParams = params.toString();
  } else {
    const parts: string[] = [];
    Object.getOwnPropertyNames(params).forEach((key) => {
      const paramsVal = params[key];
      // eslint-disable-next-line no-useless-return
      if (paramsVal === null || typeof paramsVal === 'undefined') return;
      let values = [];
      if (typeOf(paramsVal) === 'array') {
        values = paramsVal;
        key += '[]';
      } else {
        values = [paramsVal];
      }

      values.forEach((val: any) => {
        if (typeOf(val) === 'date') {
          val = val.toISOString();
        } else if (typeOf(val) === 'object') {
          val = JSON.stringify(val);
        }
        parts.push(`${encodeURIComponents(key)}=${encodeURIComponents(val)}`);
      });
    });
    serializerParams = parts.join('&');
  }

  if (serializerParams) {
    const markIndex = url.indexOf('#');
    if (markIndex !== -1) {
      url = url.slice(0, markIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializerParams;
  }

  return url;
}
