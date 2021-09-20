---
title: "Flexbox 詳解"
date: 2021-09-18T18:00:00+08:00
publishdate: 2021-09-18T19:00:00+08:00
tags: ["css", "flexbox"]
comments: true
## Custom front matter
className: css-flexbox
---

# Flexbox 詳解

Flexbox 在現代網頁設計 和 開發可以說是不可或缺的，flexbox layout 主要用於 one-dimension 的 layout 上面，意指它只能夠單獨 而不能同時控制 row 或者是 column，這跟 Grid layout 可以說是有少許不同喔。

## 基本概念

要先了解 flexbox 必先知道什麼是主軸 (main axis) 什麼是交錯軸 (cross-axis)。主軸是由`flex-direction` 屬性所控制，而交錯軸則為主軸的垂直軸。預設的主軸方向是由左至右，而交錯軸則為上至下，但如果`flex-direction` 設定為`column`，主軸和交錯軸的方向則會改變，詳情請見[此](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#the_two_axes_of_flexbox)。接下來先讓我先簡單介紹一下 flex 容器 (container) 跟 flex 元件 (item) 以用到的 css 屬性。

## 容器 (container)

```css
display: flex | inline-flex
flex-flow: <flex-direction> <flex-wrap>
justify-content: <values: flex-start>
align-items: <values: stretch>
```

Justify-content

- 預設值: `flex-start`
- 此屬性大概意思為向主軸對齊，假設主軸是由左至右，而`justify-content`的屬性為`flex-end`，flex 元件 (item)的主方向則會向右對齊。
  假設主軸受`flex-direction` 影響而變成由上至下，`flex-end`則會向下對齊，因為主軸已經改變。

Align-items

- 預設值: `stretch`，因此 flex 元件 (item) 的高度會受到該 container 最高的元件所影響
- 而`align-items`則向交錯軸對齊，假設交錯軸是由上至下，而`align-items`的屬性為`flex-end`，flex 元件 (item)的交錯方向則會向下對齊。

Flex-wrap

- 預設值: `nowrap`
- 只適用於 single-line flex container。值得一提的是，假如使用 no wrap，flex item 所設定的寬度都會被覆蓋 (e.g.: `width: 200px`)。
  而`flex-wrap: wrap` 用法為 將一行的 flex items wrap 到下一行 (前提為 flex item 的寬度不足以讓它們處於同一行)。

## 元件 (item)

```css
flex: <flex-grow: 0> <flex-shrink: 1> <flex-basis: auto>
order: <values>
align-self: <values>
align-content: <values>
```

Flex-grow

- 使 flex items 可以 按比例地 用盡主軸的所有有限空間 繼續伸展。Flex-grow 的數值不能有負數

Flex-basis
- 設定flex items 的初始值。
- 假設flex item A 的 flex-basis 為200px, 如果200px不影響之後flex item(s)的寬度 (以min-content計算) 則可以grow至200px
    - 反之: 如果影響的話，則會shrink to fit the space available 直至其他items夠位為止


Align-self

- 此屬性的值是受到`align-items`所影響，`align-items`會影響 flex container 的一整個群組，而`align-self`的目的是為了讓開發者可以額外指定某元件 (item) 的 alignment。

Align-content

- 首先此屬性只適用於 multi-line container，它可以控制行與行之間的距離。
- single-line container 應使用`align-itesm`，用來控制行與容器之間的距離。

## 參考資料

[CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
[List of all CSS properties](https://www.w3.org/Style/CSS/all-properties.en.html)
