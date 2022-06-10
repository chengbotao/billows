/*
 * @Author: Chengbotao
 * @Date: 2022-06-08 17:04:44
 */

/* eslint-disable no-undef */
import { typeOf } from '../packages/typeof';

describe('类型(typeOf)', () => {
    test('typeOf("chengbotao") => "string"', () => {
        expect(typeOf('chengbotao')).toBe('string');
    });
    test('typeOf(28) => "number"', () => {
        expect(typeOf(28)).toBe('number');
    });
    test('typeOf(true) => "boolean"', () => {
        expect(typeOf(true)).toBe('boolean');
        expect(typeOf(false)).toBe('boolean');
    });
    test('typeOf(undefined) => "undefined"', () => {
        expect(typeOf(undefined)).toBe('undefined');
    });
    test('typeOf(null) => "null"', () => {
        expect(typeOf(null)).toBe('null');
    });
    test('typeOf(new Date()) => "date"', () => {
        expect(typeOf(new Date())).toBe('date');
    });
    test('typeOf([]) => "array"', () => {
        expect(typeOf([])).toBe('array');
    });
    test('typeOf({}) => "object"', () => {
        expect(typeOf({})).toBe('object');
    });
    test('typeOf(function fun() {}) => "function', () => {
        function fun() {}
        expect(typeOf(fun)).toBe('function');
    });
    test('typeOf(Promise.resolve()) => "promise"', () => {
        expect(typeOf(Promise.resolve())).toBe('promise');
    });
});
