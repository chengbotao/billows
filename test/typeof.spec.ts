/*
 * @Author: Chengbotao
 * @Date: 2022-06-08 17:04:44
 */
import { typeOf } from '../packages/typeof';

test('typeOf string', () => {
    expect(typeOf('chengbotao')).toBe('string');
});
test('typeOf number', () => {
    expect(typeOf(28)).toBe('number');
});
test('typeOf boolean', () => {
    expect(typeOf(true)).toBe('boolean');
    expect(typeOf(false)).toBe('boolean');
});
test('typeOf undefined', () => {
    expect(typeOf(undefined)).toBe('undefined');
});
test('typeOf null', () => {
    expect(typeOf(null)).toBe('null');
});
test('typeOf date', () => {
    expect(typeOf(new Date())).toBe('date');
});
test('typeOf array', () => {
    expect(typeOf([])).toBe('array');
});
test('typeOf object {}', () => {
    expect(typeOf({})).toBe('object');
});
test('typeOf function', () => {
    function fun() {}
    expect(typeOf(fun)).toBe('function');
});
test('typeOf promise', () => {
    expect(typeOf(Promise.resolve())).toBe('promise');
});
