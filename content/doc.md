---
title: "Documentation"
date: 2021-03-26T11:12:00+02:00
type: "post"
isShared: true

---

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



Intellij
CTRL + SHIFT + L = Auto Format
Alt Enter = Problem Solving Shortcut
 - hover on class name and can create a test class
Ignore stepping into
 - https://stackoverflow.com/questions/20575107/how-to-force-intellij-to-only-step-into-my-source-code
 - Settings/Preferences, in the Debugger/Stepping options.


RESTful API
    - ref
        - https://blog.bearer.sh/what-is-a-rest-api/#:~:text=Before%20REST%2C%20the%20main%20approach,Wide%20Web%20Consortium%20(W3C).


Java Spring
- assertThat
    - evaluate true/false in JUNIT test case
    - combine testing with Hamcrest
    - more readable
    - ref
        - https://www.baeldung.com/java-junit-hamcrest-guide
        - https://github.com/junit-team/junit4/wiki/Matchers-and-assertthat
            - // java.lang.AssertionError: 
            - // Expected: (a string containing "color" or a string containing "colour")
            - // got: "Please choose a font"
- objectMapper
    - serialized a JAVA object to JSON/ deserialized JSON to a JAVA object



Java Spring Annotation
- @JsonIgnore
    - ref
        - https://dzone.com/articles/jackson-annotations-for-json-part-1-serialization
    
- @Test
    - https://docs.spring.io/spring-boot/docs/1.5.2.RELEASE/reference/html/boot-features-testing.html
        - `and spring-boot-test-autoconfigure supports auto-configuration for tests.`


