/*
 * @Author: Chengbotao
 * @Date: 2022-06-10 13:58:17
 */

export declare interface DuckTyping {
  [key: string]: any;
}

export declare function typeOf(val: any): string;
export declare function instanceOf(obj: any, ctor: any): boolean;
export declare function deepClone(target: any, map?: WeakMap<object, any>): any;
