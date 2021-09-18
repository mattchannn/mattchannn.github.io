---
# The below config served as single page of documentation section
# Change the type to documentation if you would like to
# use custom layout stored under documentation
# By default, the layout in _default is used
title: "[Git] 指令完整列表"
type: "post"
date: 2021-03-26T11:12:00+02:00
draft: false
---

## Quick setup on .git repository - 第一次傳送到遠端

```bash
## 1. Create a remote repository on Github
## 2. Create a local folder directory
git init
git commit -m "First commit"
git remote add origin <ssh origin>
git push -u origin master</default branch>
```

---

## Config - 環境設定

```bash
$ git config --global user.name "Mat"
$ git config --global user.email mat.chan@example.com

## 打開 Git 的 color 顏色設定
$ git config --global color.ui true
```

---

## SSH Key 設定

在 Linux/Powershell 上運行， `-t` 意指， Type， 代表 key 的類別。`ed25519` 則意指 Edwards-curve Digital Signature Algorithm (EdDSA)。

```bash
$ ssh-keygen -t ed25519 -C "mat.chan@example.com"
```

人工開啟並激活 ssh-agent

```bash
$ eval `ssh-agent -s`
```

添加 ssh key 到你的 ssh-agent

```bash
## id_ed25519 是 ssh-key 的名字
$ ssh-add ~/.ssh/id_ed25519
```

---

## Git Branch - 基本操作

```bash
## 切換到 branch
git checkout <branch>

## 從 master 建立新的 feature-branch
git checkout -b <feature-branch> master

## 由現有的branch為基礎, 建立新的 feature-branch
git checkout -b feature-branch # 由現在的環境為基礎, 建立新的 branch
```

---

## Commit - 提交 (相關指令)

包含 fetch, pull, push

```bash
## 可以更新一個或多個remote branches
$ git fetch

$ git pull
$ git add .
$ git commit [-m] <commit message>
$ git push
```

---

## Stash - 暫存

注意: 用 command-line 暫存的改動在 Github Desktop 是不會顯示出來的

```bash
$ git stash
$ git stash show [<options>] [<stash>]
$ git stash drop [-q|--quiet] [<stash>]

## 列出哪個檔案是處於stage, unstage 跟 untrack階段
$ git stash list
```

---

## 參考資料

[[Git] .git 版本控制系統 – 指令速查表](https://code.yidas.com/git-commands)
