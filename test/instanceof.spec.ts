/*
 * @Author: Chengbotao
 * @Date: 2022-06-10 14:25:20
 */
/* eslint-disable no-undef */
import { instanceOf } from '../packages/instanceof';

describe('实例(instanceOf)', () => {
  class Car {
    public make: any;
    public model: any;
    public year: any;
    constructor(make: any, model: any, year: any) {
      this.make = make;
    }
  }
  const honda = new Car('Honda', 'Accord', 1998);

  test('instanceOf(honda, Car) => true', () => {
    expect(instanceOf(honda, Car)).toBeTruthy();
  });
});
