---
# The below config served as single page of documentation section
# Change the type to documentation if you would like to 
# use custom layout stored under documentation
# By default, the layout in _default is used
title: "IntelliJ"
type: "post"
date: 2021-05-28T11:12:00+06:00
draft: false

---

## Intellij
> Shortcut for System.out.println("");
- type _sout_

> Auto format
    
- CTRL + ALT + L

> Quick code shortcut
- ALT + INSERT

> Set up Test root and Test Resources in Project Structure
1. Go to File, Project Structure
2. Under Project Settings, click Modules and then open the Sources tab on the right.
3. Right-click the test folder and select New Folder. Name the folder `resources`.
4. Right-click the new folder and select `Test Resources`.
```
If Test Class can't be compiled?
Please make sure that you need to have test folder not as a sub-folder of src source root 
but in a separate directory marked as a test source root. 
And then the Test compile scope will work.
```

> Problem solving shortcut (such as creating a test class)
- hover to the class and press ALT + ENTER

> [Ignore step into when use debug mode](https://stackoverflow.com/questions/20575107/how-to-force-intellij-to-only-step-into-my-source-code)
