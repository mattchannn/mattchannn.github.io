---
title: "RESTful API 的前世今生"
date: 2021-04-24T12:00:04+08:00
publishdate: 2021-04-24T14:00:14+08:00
tags: ["api", "rest", "server", "roy fielding", "web", ]
comments: true
---
# RESTful (Representational State Transfer) API

從1990到現在2021年，HTTP協定跟Web的架構已經與日俱增，當中最為人熟悉的為Roy Fielding所提出的一套理論框架。
在本文開始之前，編者強烈大家先看一下Roy Fielding的[論文](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)。

### 建設RESTful API

要建設RESTful API，就先要符合以下6大規範(constraints)
* 需跟隨 客戶端/服務器 架構
    - client server 就是實現Separation of Concerns的最佳例子
        - user interface concern vs data storage concern
    - 客戶端 (client)，請求服務 (perform service)
    - 服務器 (server)，提供服務 (offer a set of services)
* 無狀態 (stateless)
    - 這代表Client跟Server都不會記得之前的狀態
    - 每個新的request都是獨立的
* 可緩存性 (cacheable)
    - 緩存 (cache)，為一種暫時性的資料儲存方式
    - 遵循此規範的就必須具有設定緩存的靈活度
* 分層系統 (layered system)
    - REST讓我們在分層系統架構中能使用不同的 層 去進行活動
        - 例如: 在presentation layer呈現U.I.，在database layer存儲資料 等等。
* 統一接口
    - 通訊鏈的元件之間的一個統一通訊介面
* 可選代碼
    - 支援下載及執行程式碼
        - 例如: Flash, Javascript etc.


&nbsp;
### 參考資料
[Fielding Dissertation: CHAPTER 5 Representational State Transfer (REST)](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
[Day04 - REST 條件&原則](https://ithelp.ithome.com.tw/articles/10203755)