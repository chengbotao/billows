<!--
 * @Author: Chengbotao
 * @Date: 2022-06-15 09:27:24
-->

## 1.0.4 (2022-07-11)


### Features

- **parseUrl:** 解析 URL 参数 ([1cb5a20](https://github.com/chengbotao/billows/commit/1cb5a20f4db4fc38df7e9dab61b0151fcab84454))

# 1.0.3 (2022-06-24)

### Features

- **buildURL:** 由 `url` 和 `params` 生成 URL ([bbeda5c](https://github.com/chengbotao/billows/commit/bbeda5cf111c0bf2ad41071178081f6ecbb2aca9))
- **debounce:** 函数防抖 ([7bab330](https://github.com/chengbotao/billows/commit/7bab330422433e78176013b11660f032302f6ea9))
- **encodeURIC:** 有过滤特殊字符功能的 `encodeURIComponent` ([723c04a](https://github.com/chengbotao/billows/commit/723c04af531a40297b1f13db0e2a7e6b2402ec5a))
- **isURLSearchParams:** 判断是否是 `URLSearchParams` ([75e7e34](https://github.com/chengbotao/billows/commit/75e7e344eabac10996fd4a78a2f611e6d55ec1a5))
- **jsonp:** `promise` 封装 `jsonp` ([9d5a2e0](https://github.com/chengbotao/billows/commit/9d5a2e018214bba7fd4d40bf00ad34acdbefe23e))
- **throttle:** 函数节流 ([01d8fc7](https://github.com/chengbotao/billows/commit/01d8fc75ce0db8b7c1fc20375928e5b05b5f6820))

# 1.0.2 (2022-06-18)

### Refactor

- **deepClone**: 深克隆函数,对内置对象的处理 ([3c300a2](https://github.com/chengbotao/billows/commit/3c300a2))
- **getNodeFromTree**: 重构获取树结构中节点函数 ([f049b7c](https://github.com/chengbotao/billows/commit/f049b7c))
- **instanceOf**: 更新 instanceof 函数参数命名 ([b1ca43b](https://github.com/chengbotao/billows/commit/b1ca43b))
- **treeToFlat**: 树结构转扁平化结构代码重构 ([8694df2](https://github.com/chengbotao/billows/commit/8694df2))
- **treeToFlat**: 重构树结构转扁平化结构 ([d53c498](https://github.com/chengbotao/billows/commit/d53c498))
- **typeOf**: 修改参数命名 ([c9bce64](https://github.com/chengbotao/billows/commit/c9bce64))

# 1.0.1 (2022-06-14)

### Features

- **curry:** 函数柯里化 ([df88a1a](https://github.com/chengbotao/billows/commit/df88a1afef0a8e426a12767754f348ab03dd336a))
- **flatToTree:** 扁平化转结构转树结构 ([5be1ccc](https://github.com/chengbotao/billows/commit/5be1ccc5328b1d0e5c143d82dbfcb7c085d30e55))
- **getNodeFromTree:** 根据唯一标志从树结构中获取节点 ([08f1552](https://github.com/chengbotao/billows/commit/08f1552ab1e7a888dbb0761ad4398868894f6d47))
- **partial:** 偏函数 ([ab8fa1f](https://github.com/chengbotao/billows/commit/ab8fa1fe253b7bd7e96d5c5a2f88240ea2d05eab))
- **treeToFlat:** 树结构转扁平化结构 ([0ecdb1b](https://github.com/chengbotao/billows/commit/0ecdb1b56f677e6f3d29703ddd45dfc3aca53097))

# 1.0.0 (2022-06-13)

### Features

- **deepClone:** 深拷贝函数 ([232ff63](https://github.com/chengbotao/billows/commit/232ff63435dc6b16707d43fd5f978aff40765051))
- **getValueByReference:** 通过引用获取值的函数 ([55fe9e6](https://github.com/chengbotao/billows/commit/55fe9e65b5dd932ac5906e8fae84e2ef8104f276))
- **instanceOf:** instanceof 函数 ([18c1674](https://github.com/chengbotao/billows/commit/18c1674a67935029f04d29552cb92c5a3e0d8007))
- **setValueByReference:** 通过引用设置值的函数 ([ccff921](https://github.com/chengbotao/billows/commit/ccff921713d956442822da1a165d0301daccf1a3))
- **typeOf:** 类型判断函数 ([e653076](https://github.com/chengbotao/billows/commit/e653076a1c5d12a8092f2b8db8f9755ce04addd2))
