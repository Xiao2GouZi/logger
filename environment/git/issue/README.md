loading...

```sh
$git stash apply stash@{0}
error: Your local changes to the following files would be overwritten by merge:
        environment/git/operation/README.md
Please commit your changes or stash them before you merge.
Aborting
```
### 解决
首先commit以后再 git stash apply stash@{0}


```sh
$git rm environment/git/issue/README.md
error: the following file has local modifications:
    environment/git/issue/README.md
(use --cached to keep the file, or -f to force removal)
```

### 解决
本地有改动 选择commit, 或者 git rm -f environment/git/issue/README.md
