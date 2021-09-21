---
# The below config served as single page of documentation section
# Change the type to documentation if you would like to
# use custom layout stored under documentation
# By default, the layout in _default is used
title: "[React] 提示表"
type: "post"
date: 2021-09-21T11:12:00+08:00
draft: false
---

## Terminology - 術語

React Composition

- 是一種開發模式，會定義 `props` / `children` prop
- 概念: **we build components from other components**

Children

- A reserve word
- 可以令 component 變成一個 wrapper
- 例子

```typescript

// Wrapper.js
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

// InnerComponent.js
function InnerComponent(props) {
  return (
    <Wrapper>
      <div className="inner-comp">
        <h2>abc</h2>
      </div>
    </Wrapper>
  );
}

```

---

## 參考資料
