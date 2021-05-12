---
title: "Git"
date: 2021-03-26T11:12:00+02:00
type: "documentation"
draft: false

---

## Intellij
> Shortcut for System.out.println("");
- type _sout_

> auto format
    
- CTRL + ALT + L

> quick code shortcut
- ALT + INSERT

> problem solving shortcut
    
- hover to the class and press ALT + ENTER

> [Ignore step into when use debug mode](https://stackoverflow.com/questions/20575107/how-to-force-intellij-to-only-step-into-my-source-code)

## [Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist#webfonts)
1. Head Tag
2. HTML
3. Webfont
4. CSS
5. Image
6. Javascript
7. Web Security 
8. SEO ...

## Git Command
    $ ssh-keygen -t ed25519 -C "mat.chan@example.com"

> For Linux/Windows Powershell use only.
>
> -t “Type” This option specifies the type of key to be created.
>
> ed25519 is an instance of the Edwards-curve Digital Signature Algorithm (EdDSA).

Generate a ssh key.

    $ eval `ssh-agent -s`

> For Linux/Windows Powershell use only.

Manually activate ssh-agent.

    $ ssh-add ~/.ssh/id_ed25519

> For Linux/Windows Powershell use only.
>
> id_ed25519 is the ssh-key name.

Add your ssh key to your ssh-agent. **_Please be awared you are in the right directory_**.

    git status

List which files are staged, unstaged, and untracked.

    git fetch all

Fetches all remote branches.

    git stash
> `git stash show [<options>] [<stash>]`
>
> `git stash drop [-q|--quiet] [<stash>]`

Stash changes. **_Stashed changes will not be reflected in Github Desktop GUI_**.

    git add .

Stage all changes for next commit.

    git commit

> `git commit -m <message>`

Commit the staged snapshot launching a text editor.

    git push

Push the local branches to the specified remote.

    git checkout -b <branch>

Create and check out a new branch named **`<branch>`**. Drop the -b flag to checkout an existing branch. The new branch will be based on current HEAD.
