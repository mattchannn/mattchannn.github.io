---
title: "淺談null跟undefined"
date: 2021-04-21T11:17:14+02:00
publishdate: 2021-04-19T11:17:14+02:00
image: "/images/blog/1.jpg"
tags: ["javascript",]
comments: true
---
# Null跟Undefined的對決

今天想跟大家聊聊javascript的type check，相信各位在開發時少不免都會遇到null跟undefined。第一眼看它們確實是挺相似的，但實際上它們有著不同的特質，令你在做type checking裡面不能亂用。

### Undefined
* 變數被定義但沒被指派值

```
let newVar;
console.log(newVar); // undefined
```


### Null
* 是 空/不存在的 值
* 是assignment value (需要被指派的)
* 是讓開發者用來宣告`newVar`是沒有值的

```
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
```
console.log(typeof null) // object
console.log(typeof undefined) // "undefined"
```
但有趣的是
```
console.log(null == undefined) // true
```
背後原因是因為double equal使javascript實現type coercion，令其中一方轉換類型。例如 `<string> == <number>`，javascript會先把string的type轉至number，再比較雙方數值。
因此，在比較數值時，如果有出現mix type，會有較大機會出現unexpected result，編者會比較建議使用triple equal


&nbsp;
### 後記
把commit message寫好是一個開發者的責任，盡管那個專案只有一個人在維護(**誰能保證它不會開源?**)。再者，如果你這一刻只打一些minor update, minor fix的東西上去，將來肯定是沒有人能看得懂，包括將來的你。想一想，要重新並且仔細地看代碼，然後再推算commit的原因會有多浪費時間。



&nbsp;
### 參考資料
[ECMAScript® Language Specification](https://262.ecma-international.org/5.1/#sec-4.3.11)