---
title: "Git Message 如何做好 Version Control"
date: 2021-01-15T11:17:14+02:00
publishdate: 2021-01-15T11:17:14+02:00
image: "/images/blog/1.jpg"
tags: ["github", "commit",]
comments: false
---
# 如何做好Message Control

Update, Minor Update, Fix... 這個就是我工作時看到commit message的日常。然而，一個有水準的軟件工程師，除了代碼要寫的好，也要讓將來接替你位置的人，看得懂你的**遺產**，避免造成太多[技術負債](https://medium.com/@p5d12000/%E5%B7%A5%E7%A8%8B%E5%B8%AB%E6%87%89%E8%A9%B2%E6%94%BE%E5%BF%83%E5%A4%A7%E8%86%BD%E5%9C%B0%E5%89%B5%E9%80%A0%E6%8A%80%E8%A1%93%E8%B2%A0%E5%82%B5-a8022d85810)。

根據國外AngularJS團隊所提出的[Git Commit Message Convention](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#)，commit message的格式如下：
```
Header: <commit type>(<scope>): <subject>
<BLANK LINE>
Body:
<BLANK LINE>
Footer:


請注意 所有git commit message都不能超過100個字元，因為是為了讓git使用者可以更容易看懂你的commit。
```
&nbsp;
### 規範
首先從Header說起，commit type可以分為數項
* feat (feature)
* fix (bug fix)
* docs (documentation)
* styles (formatting, code syntax fix etc.)
* refactor (revamp a specific part of function)

Scope則可以描述是次commit會影響到的地方(impact area)，例如是 發信息 功能等等，但單單一個微改動一般都會影響到好幾個地方，小編覺得它的重要性有待相確，所以這次就先忽略不講。

至於subject，根據大神所定下的規範，它們必須具有以下要素
* 須具有描述性 (基於大部份工具都只顯示第一句commit message，使你的subject變得異常重要)
* 必須使用現在式 (present tense)
* 必須使用祈使語氣 (imperative)
    * 例如: Fix bug 而不是Fixes bug
* 不能使用大寫
* 句末不需要加句點

Body方面則有幾項要點
* 限制於50字內
* 句末不需要加句點
* 必須使用現在式 (present tense)
* 必須使用祈使語氣 (imperative)

&nbsp;
### 後記
把commit message寫好是一個開發者的責任，盡管那個專案只有一個人在維護(**誰能保證它不會開源?**)。再者，如果你這一刻只打一些minor update, minor fix的東西上去，將來肯定是沒有人能看得懂，包括將來的你。想一想，要重新並且仔細地看代碼，然後再推算commit的原因會有多浪費時間。



&nbsp;
### 參考資料
[Git Commit Message 這樣寫會更好](https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html)

[Writing Git commit messages](https://365git.tumblr.com/post/3308646748/writing-git-commit-messages)

[How to Write Good Commit Messages: A Practical Git Guide](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/)

[A Note About Git Commit Messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)