/*
 * @Author: Chengbotao
 * @Date: 2022-06-10 13:58:17
 */

declare interface DuckTyping {
  [key: string]: any;
}

declare function typeOf(val: any): string;
declare function instanceOf(obj: any, ctor: any): boolean;
declare function deepClone(target: any, map?: WeakMap<object, any>): any;
