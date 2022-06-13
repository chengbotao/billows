/*
 * @Author: Chengbotao
 * @Date: 2022-06-10 14:49:25
 */
/* eslint-disable no-undef */
import { deepClone } from '../packages/deepclone';

describe('深克隆(deepClone)', () => {
  const obj = {
    name: 'chengbotao',
    age: 28,
  };

  test('deepClone(honda, Car) => true', () => {
    expect(deepClone(obj)).toEqual({ name: 'chengbotao', age: 28 });
  });
});
