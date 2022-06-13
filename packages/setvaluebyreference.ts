/*
 * @Author: Chengbotao
 * @Date: 2022-06-13 13:24:49
 */
export function setValueByReference(target: any, refer: string | string[], val: any): any {
  const refers: string[] =
    typeof refer === 'string' ? (refer as string).split('.') : (refer as string[]);

  return (
    (refers.slice(0, -1).reduce((obj, key) => {
      return (obj[key] = obj[key] || {});
    }, target)[refers.pop() as string] = val),
    target
  );
}
