---
title: "淺談null跟undefined"
date: 2021-04-21T11:17:14+02:00
publishdate: 2021-04-19T11:17:14+02:00
image: "/images/blog/1.jpg"
tags: ["javascript", ]
comments: true
---
# Null跟Undefined的對決

今天想跟大家聊聊javascript的null跟undefined，相信各位在開發時少不免都會遇到它們。第一眼看它們確實是挺相似的，但實際上它們有著以下的分別。

### Undefined
* 代表 變數被定義但沒被指派 任何值
* 為 一種 類型 (type)
* 為 原始值 (primitive value)
* 為 假值 (falsy value)

```bash
let newVar;
console.log(newVar); // undefined
```


### Null
* 為 一個 物件 (object)
* 是 空/不存在的 值
* 是assignment value (需要被指派的)
* 是用以宣告`newVar`是沒有值的
* 為 假值 (falsy value)

```bash
let newVar = null;
console.log(newVar); // null
```

在Javascript裡面，兩個都是falsy value
* **null**
* **undefined**
* 0
* NaN
* false
* "" (empty string)

因此，到目前為止，大家都能發現null跟undefined其實是不盡相同的。
```bash
console.log(typeof null) // object
console.log(typeof undefined) // "undefined"
```
但有趣的是
```bash
console.log(null == undefined) // true
```
WTF? null不是不等於undefined嗎? 出現這個現象是因為double equal使javascript實現[type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)，令其中一方轉換類型。例如 `<string> == <number>`，javascript會先把string (left operand) 的type轉至number，再比較雙方數值。而在type coercion的大前提下, javascript會
認定null是等於undefined，至於為什麼會有這個情況，只好問問[ECMA](https://262.ecma-international.org/5.1/#sec-11.9.3)了。因此，在比較數值時，如果有出現mix type，會有較大機會出現unexpected result，編者會比較建議使用triple equal (strict equality comparison)。

```bash
console.log(null === undefined) // false
```


&nbsp;
### 後記
其實編者與各位一樣，一開始也是分不清兩者。後來是靠著在網上找不同文章，部落格才搞懂。建議大家也上網多看一些文章喔！



&nbsp;
### 參考資料
[ECMAScript® Language Specification](https://262.ecma-international.org/5.1/#sec-4.3.11)

[Difference between Null and Undefined](https://www.javatpoint.com/null-vs-undefined)