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

## Quick setup on .git repository - 第一次推到遠端

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
$ ssh-keygen -t ed25519 -C "mat.chan@example.com"
```

在 Linux/Powershell 上運行， `-t` 意指， Type， 代表 key 的類別。`ed25519` 則意指 Edwards-curve Digital Signature Algorithm (EdDSA)。

```bash
$ eval `ssh-agent -s`
```

Manually activate ssh-agent.

```bash
## id_ed25519 is the name of the ssh-key
$ ssh-add ~/.ssh/id_ed25519
```

Add your ssh key to your ssh-agent.

    git status

List which files are staged, unstaged, and untracked.

    git fetch

Fetches all remote branches. You can also fetch one/multiple selected remote branches.

    git stash

> `git stash show [<options>] [<stash>]`
>
> `git stash drop [-q|--quiet] [<stash>]`

Stash changes. **_Stashed changes will not be reflected in Github Desktop GUI_**.

    git add .

Stage all changes for next commit.

    git commit

> `git commit -m <message>` // one line commit message
>
> `git commit -a` // automatically staged all tracked, modified files

Commit the staged snapshot launching a text editor.

    git push

Push the local branches to the specified remote.

    git checkout -b <branch>

Create and check out a new branch named **`<branch>`**. Drop the -b flag to checkout an existing branch. The new branch will be based on current HEAD.
