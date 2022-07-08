<!--
 * @Author: Chengbotao
 * @Date: 2022-06-13 23:52:33
-->

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/chengbotao/billows)
![GitHub](https://img.shields.io/github/license/chengbotao/billows)
![GitHub Repo stars](https://img.shields.io/github/stars/chengbotao/billows)

# Billows

**常用的工具函数集合**

## Install

```bash
npm install billows
```

## Usage

```ts
// 全量引入
import * as billows from 'billows';
billows.typeOf('chengbotao'); // "string"

// 差量使用
import { typeOf } from 'billows';
typeOf('chengbotao'); // "string"
```

| 函数名                                                                                            | 说明                                                            |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`typeOf`](https://chengbotao.github.io/chengbotao/billows/typeOf.html)                           | 返回变量类型                                                    |
| [`instanceOf`](https://chengbotao.github.io/chengbotao/billows/instanceOf.html)                   | 检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上 |
| [`setValueByReference`](https://chengbotao.github.io/chengbotao/billows/setValueByReference.html) | 通过引用设置值的函数                                            |
| [`getValueByReference`](https://chengbotao.github.io/chengbotao/billows/getValueByReference.html) | 通过引用获取值的函数                                            |
| [`deepClone`](https://chengbotao.github.io/chengbotao/billows/deepClone.html)                     | 深拷贝函数                                                      |
| [`treeToFlat`](https://chengbotao.github.io/chengbotao/billows/treeToFlat.html)                   | 树结构转扁平化结构                                              |
| [`partial`](https://chengbotao.github.io/chengbotao/billows/partial.html)                         | 偏函数                                                          |
| [`getNodeFromTree`](https://chengbotao.github.io/chengbotao/billows/getNodeFromTree.html)         | 根据唯一标志从树结构中获取节点                                  |
| [`flatToTree`](https://chengbotao.github.io/chengbotao/billows/flatToTree.html)                   | 扁平化转结构转树结构                                            |
| [`curry`](https://chengbotao.github.io/chengbotao/billows/curry.html)                             | 函数柯里化                                                      |
| [`buildURL`](https://chengbotao.github.io/chengbotao/billows/buildURL.html)                       | 由 `url` 和 `params` 生成 URL                                   |
| [`debounce`](https://chengbotao.github.io/chengbotao/billows/debounce.html)                       | 函数防抖                                                        |
| [`encodeURIComponents`](https://chengbotao.github.io/chengbotao/billows/encodeURIComponents.html) | 有过滤特殊字符功能的 `encodeURIComponent`                       |
| [`isURLSearchParams`](https://chengbotao.github.io/chengbotao/billows/isURLSearchParams.html)     | 判断是否是 `URLSearchParams`                                    |
| [`jsonp`](https://chengbotao.github.io/chengbotao/billows/jsonp.html)                             | `promise` 封装 `jsonp`                                          |
| [`throttle`](https://chengbotao.github.io/chengbotao/billows/throttle.html)                       | 函数节流                                                        |

## Docs

[文档地址](https://chengbotao.github.io/chengbotao/billows)

## License

**MIT**
