/*
 * @Author: Chengbotao
 * @Date: 2022-06-13 13:37:06
 */
export function getValueByReference(target: any, refer: string | string[]): any {
  const refers: string[] =
    typeof refer === 'string' ? (refer as string).split('.') : (refer as string[]);

  return refers.reduce((obj, key) => {
    return obj && obj[key];
  }, target);
}
