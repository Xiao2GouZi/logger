# 目录
   * [git config 设置属性](#git-config)
   * [git clone 拷贝一份远程仓库](#git-clone)
   * [git init 初始化仓库](#git-init)
   * [git add 添加文件到仓库](#git-add)
   * [git mv 移动或重命名工作区文件](#git-mv)
   * [git restore 撤销/把文件从缓存区撤销](#git-restore)
   * [git rm 删除工作区文件](#git-rm)
   * [git bisect 使用二分查找查找引入bug的提交](#git-bisect)

   * [git diff 比较文件在暂存区和工作区的差异](#git-diff)
   * [git grep 从提交历史、工作目录、甚至索引中查找一个字符串或者正则表达式](#git-grep)
   * [git log 查看历史提交记录](#git-log)
   * [git show 显示各种类型的对象](#git-show)
   * [git status 查看上次提交之后是否有对文件进行再次修改](#git-status)
   * [git stash 将更改保存在一个工作目录中](#git-stash)

   * [git branch 分支管理](#git-branch)
   * [git checkout 操作文件 操作分支](#git-checkout)
   * [git commit 命令将暂存区内容添加到本地仓库中](#git-commit) 
   * [git merge ](#git-merge) 
   * [git rebase 把一个分支的修改合并到当前分支](#git-rebase) 
   * [git reset 回退版本](#git-reset) 
   * [git switch 专门用来切换分支、创建并切换分支](#git-switch) 
   * [git tage 标签](#git-tage) 

   * [git pull 远程代码合并本地分支](#git-pull)
   * [git push 本地的分支上传远程仓库](#git-push)
   * [git remote 远程仓库查询操作](#git-remote)


## <a id="git-config"></a> `git config`
> `git config user.name  /  git config --global user.name`   查询(全局)用户名
>```sh
>$git config user.name
>XXX:XXX
>
>$git config --global user.name
>XXX:XXX
>```

> `git config user.name XXX  /  git config --global user.name XXX`  设置(全局)用户名
>```sh
>$git config user.name XX:bank
>
>$git config --global user.name XXX:bank
>```

> `git config user.email  /  git config --global user.email`  查询(全局)用户邮箱
>```sh
>$git config user.email
>15861097927@163.com
>
>$git config --global user.email
>15861097927@163.com
>```

>` git config user.email XXX  /  git config --global user.email XXX`  设置(全局)用户邮箱
>```sh
>$git config user.email 15861097927@163.com
>
>$git config --global user.email 15861097927@163.com
>```

> `git config --list  /  git config --list --show-origin`   检查配置信息/ 检查配置信息以及所在的文件
>```sh
>$git config --list            
>credential.helper=osxkeychain
>user.name=XXX:XXX
>user.email=15861097927@163.com
>core.repositoryformatversion=0
>core.filemode=true
>core.bare=false
>core.logallrefupdates=true
>...
>
>$git config --list --show-origin                 
>file:/Applications/Xcode.app/Contents/Developer/usr/share/git-core/>gitconfig    credential.helper=osxkeychain
>file:/Users/bank/.gitconfig     user.name=XXX:XXX
>file:/Users/bank/.gitconfig     user.email=15861097927@163.com
>file:.git/config        core.repositoryformatversion=0
>file:.git/config        core.filemode=true
>file:.git/config        core.bare=false
>file:.git/config        core.logallrefupdates=true
>file:.git/config        core.ignorecase=true
>file:.git/config        core.precomposeunicode=true
>file:.git/config        remote.origin.url=git@github.com:Xiao2GouZi/logger.git
>file:.git/config        remote.origin.fetch=+refs/heads/*:refs/remotes/origin/>*
>file:.git/config        branch.master.remote=origin
>...
>```

## <a id="git-clone"></a> `git clone 拷贝一份远程仓库` 
> `git clone [url]` 
>```sh
>$git clone git@github.com:Xiao2GouZi/logger.git
>Cloning into 'logger'...
>remote: Enumerating objects: 166, done.
>remote: Counting objects: 100% (166/166), done.
>remote: Compressing objects: 100% (104/104), done.
>remote: Total 166 (delta 50), reused 146 (delta 33), pack-reused 0
>Receiving objects: 100% (166/166), 161.00 KiB | 197.00 KiB/s, done.
>Resolving deltas: 100% (50/50), done.
>```

## <a id="git-init"></a>  `git init 初始化仓库` 
>`git init` 在目录中创建新的 Git 仓库
```sh
$git init
Initialized empty Git repository in /XXX/git-init-test/.git/

$ls -a
.	..	.git

```

## <a id="git-add"></a> `git add`        
> `git add [file1] [file2] / git add .` 添加一个或多个文件到暂存区
>```sh
>$git status    
>Changes not staged for commit:
>  (use "git add <file>..." to update what will be committed)
>  (use "git restore <file>..." to discard changes in working irectory)
>       modified:   environment/git/README.md
>       modified:   environment/npm/README.md
>
>no changes added to commit (use "git add" and/or "git commit -a")
>
>$git add environment/git/README.md environment/npm/README.md
>等同于
>$git add .
>$git status                                                 
>On branch git
>Your branch is up to date with 'origin/git'.
>
>Changes to be committed:
>  (use "git restore --staged <file>..." to unstage)
>       modified:   environment/git/README.md
>       modified:   environment/npm/README.md
>```

> `git add [dir]` 添加指定目录到暂存区
>```sh
>$git status
>Changes not staged for commit:
>  (use "git add <file>..." to update what will be committed)
>  (use "git restore <file>..." to discard changes in working directory)
>       modified:   environment/git/README.md
>
>Untracked files:
>  (use "git add <file>..." to include in what will be committed)
>       environment/git/test.md
>
>$git add environment/git
>$git status             
>
>Changes to be committed:
>  (use "git restore --staged <file>..." to unstage)
>       modified:   environment/git/README.md
>       new file:   environment/git/test.md
>```

## <a id="git-mv"></a> `git mv 移动或重命名工作区文件`
>`git mv [file] [newfile]`
>```sh
>$git mv operation/test.js operation/test2.js
>$git status                                 
>On branch git
>Your branch is ahead of 'origin/git' by 2 commits.
>  (use "git push" to publish your local commits)
>
>Changes to be committed:
>  (use "git restore --staged <file>..." to unstage)
>        "renamed:    operation/test.js -> operation/test2.js"
>
>```

## <a id="git-restore"></a> `git restore 撤销/把文件从缓存区撤销`  
`注意git restore命令在工作区是不会其作用的`
>`git restore <file>` 会撤销文件的修改，使文件恢复到暂存区或本地代码库（取决于文件在修改前的状态）
>```sh
>$git status
>On branch git
>Your branch is ahead of 'origin/git' by 5 commits.
>  (use "git push" to publish your local commits)
>
>Changes not staged for commit:
>  (use "git add <file>..." to update what will be committed)
>  (use "git restore <file>..." to discard changes in working directory)
>        "modified:   operation/README.md"
>        "modified:   operation/test.js"
>
>no changes added to commit (use "git add" and/or "git commit -a")
>
>$git restore operation/test.js
>
>$git status                   
>On branch git
>Your branch is ahead of 'origin/git' by 5 commits.
>  (use "git push" to publish your local commits)
>
>Changes not staged for commit:
>  (use "git add <file>..." to update what will be committed)
>  (use "git restore <file>..." to discard changes in working directory)
>        "modified:   operation/README.md"
>
>no changes added to commit (use "git add" and/or "git commit -a")
>```

>`git restore --staged <file>` 把文件从暂存区撤回到工作区，保留文件最后一次修改的内容
>```sh
>$git status
>On branch git
>Your branch is ahead of 'origin/git' by 5 commits.
>  (use "git push" to publish your local commits)
>
>Changes to be committed:
>  (use "git restore --staged <file>..." to unstage)
>        "modified:   operation/test.js"
>
>Changes not staged for commit:
>  (use "git add <file>..." to update what will be committed)
>  (use "git restore <file>..." to discard changes in working directory)
>        "modified:   operation/README.md"
>
>$git restore --staged operation/test.js
>
>$git status                            
>On branch git
>Your branch is ahead of 'origin/git' by 5 commits.
>  (use "git push" to publish your local commits)
>
>Changes not staged for commit:
>  (use "git add <file>..." to update what will be committed)
>  (use "git restore <file>..." to discard changes in working directory)
>        "modified:   operation/README.md"
>        "modified:   operation/test.js"
>
>no changes added to commit (use "git add" and/or "git commit -a")
>```

## <a id="git-rm"></a> `git rm 删除工作区文件`
>`git rm <file> -f/-cached` 将文件从暂存区和工作区中删除 -f
>> `-f` 如果删除之前修改过并且已经放到暂存区域的话，则必须要用强制删除选项 
>> `-cached` 如果想把文件从暂存区域移除，但仍然希望保留在当前工作目录中
>```sh
>$git status
>On branch git
>Your branch is ahead of 'origin/git' by 1 commit.
>  (use "git push" to publish your local commits)
>
>Changes to be committed:
>  (use "git restore --staged <file>..." to unstage)
>        "new file:   operation/test.js"
>
>$git rm -f operation/test.js
>rm 'environment/git/operation/test.js'
>
>$git status
>On branch git
>Your branch is ahead of 'origin/git' by 1 commit.
>  (use "git push" to publish your local commits)
>
>Changes to be committed:
>  (use "git restore --staged <file>..." to unstage)
>        "modified:   README.md"
>```

## <a id="git-bisect"></a> `git bisect 使用二分查找查找引入bug的提交` 
>`$ git bisect start [终点] [起点]`



##  <a id="git-diff"></a> `git diff 比较文件在暂存区和工作区的差异`
> `git diff [file]` 显示暂存区和工作区的差异
>```sh
>$git diff environment/git/README.md
>diff --git a/environment/git/README.md b/environment/git/README.md
>index b825dc2..4632413 100644
>--- a/environment/git/README.md
>+++ b/environment/git/README.md
>@@ -10,7 +10,7 @@
> 
>-   * [git diff](#git-diff)
>+   * [git diff 比较文件在暂存区和工作区的差异](#git-diff)
>...
>```

>`git diff --cached [file] / git diff --staged [file]` 显示暂存区和上一次提交(commit)的差异
>```sh
>$git diff --cached environment/git/README.md
>diff --git a/environment/git/README.md b/environment/git/README.md
>index b825dc2..06fb607 100644
>--- a/environment/git/README.md
>+++ b/environment/git/README.md
>@@ -10,7 +10,7 @@
>    * [git rm](#git-rm)
>    * [git bisect](#git-bisect)
> 
>-   * [git diff](#git-diff)
>+   * [git diff 比较文件在暂存区和工作区的差异](#git-diff)
>    * [git grep](#git-grep)
>    * [git log](#git-log)
>    * [git show](#git-show)
>```

> `git diff HEAD` 显示工作目录(已track但未add文件)和暂存区(已add但未commit文件)与最后一次commit之间的的所有不相同文件的增删改
>```sh
>$git diff aa8fe367ca428e3de5116e325b0dd70b8c03ad39
>等同于
>$git diff HEAD ...
>
>diff --git a/environment/git/README.md b/environment/git/README.md
>index b825dc2..06fb607 100644
>--- a/environment/git/README.md
>+++ b/environment/git/README.md
>@@ -10,7 +10,7 @@
>    * [git rm](#git-rm)
>    * [git bisect](#git-bisect)
> 
>-   * [git diff](#git-diff)
>+   * [git diff 比较文件在暂存区和工作区的差异](#git-diff)
>    * [git grep](#git-grep)
>    * [git log](#git-log)
>    * [git show](#git-show)
>@@ -151,7 +151,34 @@
>```

>`git diff [first-branch]...[second-branch]` 显示两次提交之间的差异
>```sh
>$git log --pretty=oneline --abbrev-commit
>aa8fe36 (HEAD -> git, origin/git) git init
>19f21e8 git init
>
>$git diff aa8fe36 19f21e8
>diff --git a/environment/git/README.md b/environment/git/README.md
>index b825dc2..2e7d08b 100644
>--- a/environment/git/README.md
>+++ b/environment/git/README.md
>@@ -14,7 +14,7 @@
>    * [git grep](#git-grep)
>    * [git log](#git-log)
>    * [git show](#git-show)
>-   * [git status 查看上次提交之后是否有对文件进行再次修改](#git-status)
>+   * [git status](#git-status)
>    * [git stash](#git-stash)
> 
>    * [git branch 分支管理](#git-branch)
>@@ -32,65 +32,66 @@
>...
>```

## <a id="git-grep"></a> `git grep 从提交历史、工作目录、甚至索引中查找一个字符串或者正则表达式`         
>`git grep`
>```sh
>$git grep git-config 
>environment/git/operation/README.md:   * [git config 设置属性](#git-config)
>environment/git/operation/README.md:## <a id="git-config"></a> `git config`
>```
>>`-n \ --line-number` 输出 Git 找到的匹配行的行号
>>```sh
>>$git grep -n git-config
>>environment/git/operation/README.md:4:   * [git config 设置属性](#git-config)
>>environment/git/operation/README.md:34:## <a id="git-config"></a> `git config`
>>```
>>`-c \ --count` 输出概述的信息,包括那些包含匹配字符串的文件,以及每个文件中包含了多少个匹配
>>```sh
>>$git grep --count git-config
>>environment/git/operation/README.md:2
>>```
>>` -p \ --show-function` 显示每一个匹配的字符串所在的方法或函数
>>```sh
>>$git grep --p git-config
>>environment/git/operation/README.md:   * [git config 设置属性](#git-config)
>>environment/git/operation/README.md:## <a id="git-config"></a> `git config`
>>```



## <a id="git-log"></a> `git log 查看历史提交记录`
>`git log`
>```sh
>$git log
>commit 8a30445edde20cd55fc2abde61eb489111c0cf66 (HEAD -> git)
>Author: 齐云猛:bank <15861097927@163.com>
>Date:   Mon Jul 12 00:24:30 2021 +0800
>
>    git init
>
>commit ee93b45d169725e3380d39003abcdae74ed7481e
>Author: 齐云猛:bank <15861097927@163.com>
>:...skipping...
>```
>
>> `--oneline` 查看历史记录的简洁的版本
>>```sh
>>$git log --oneline
>>8a30445 (HEAD -> git) git init
>>ee93b45 git init
>>0ac2675 git init
>>ca2f07e git init
>>5f2800f (origin/git) git init
>>14e6b78 git init
>>ec79cd5 git init
>>```
>
>>`--graph` 查看历史中什么时候出现了分支、合并
>>```sh
>>$git log --graph
>>* commit 8a30445edde20cd55fc2abde61eb489111c0cf66 (HEAD -> git)
>>| Author: 齐云猛:bank <15861097927@163.com>
>>| Date:   Mon Jul 12 00:24:30 2021 +0800
>>| 
>>|     git init
>>| 
>>* commit ee93b45d169725e3380d39003abcdae74ed7481e
>>| Author: 齐云猛:bank <15861097927@163.com>
>>| Date:   Mon Jul 12 00:24:06 2021 +0800
>>| 
>>|     git init
>>| 
>>* commit 0ac26754f1ef5f282c90b3765389a98e1b867537
>>| Author: 齐云猛:bank <15861097927@163.com>
>>| Date:   Mon Jul 12 00:21:42 2021 +0800
>>| 
>>|     git init
>>:...skipping...
>>```
>
>>`--reverse `逆向显示所有日志
>>```sh
>>$git log --reverse --oneline
>>8e9e9a2 Initial commit
>>bd26fdd 
>>17d85fd (origin/main, origin/HEAD) init
>>49d2236 init
>>6761c2b (tag: test1) git init
>>9dedcf9 git init
>>9f8520d init
>>86f0831 init
>>a54e0f2 (tag: v3.0, tag: v2.0, tag: v1.0, dev) init
>>fe075ea init
>>92af1a4 init
>>74cd85b (origin/master, master) init git
>>7cd4503 git init
>>7355a58 git init
>>f6447aa git init
>>90ccafe git init
>>d81c1e5 git init
>>2f6ddf8 git init
>>:...skipping...
>>```
>
>>`--author` 查找指定用户的提交日志
>>```sh
>>$git log --author=齐云猛:bank --oneline -5
>>8a30445 (HEAD -> git) git init
>>ee93b45 git init
>>0ac2675 git init
>>ca2f07e git init
>>5f2800f (origin/git) git init
>>```
>
>>`--since 和 --before，--until 和 --after` 查找指定日期内的日志
>>```sh
>>$git log --oneline --before={2021-07-10} --after={2021-07-1}            
>>5f2800f (origin/git) git init
>>14e6b78 git init
>>ec79cd5 git init
>>91e3e2c git init
>>6692b98 git init
>>6a8ac03 git init
>>...
>>```
>
>>`-p / --patch` 显示每次提交所引入的差异（按 补丁 的格式输出）
>>```sh
>>$git log -p -2
>>commit 8a30445edde20cd55fc2abde61eb489111c0cf66 (HEAD -> git)
>>Author: 齐云猛:bank <15861097927@163.com>
>>Date:   Mon Jul 12 00:24:30 2021 +0800
>>
>>--- a/environment/git/operation/README.md
>>+++ b/environment/git/operation/README.md
>>@@ -164,6 +164,18 @@ $ls -a
>> 
>> ## <a id="git-mv"></a> `git mv 移动或重命名工作区文件`
>> >`git mv [file] [newfile]`
>>+>```sh
>>+>$git mv operation/test.js operation/test2.js
>>+>$git status                                 
>>+>On branch git
>>+>Your branch is ahead of 'origin/git' by 2 commits.
>>+>  (use "git push" to publish your local commits)
>>+>
>>+>Changes to be committed:
>>+>  (use "git restore --staged <file>..." to unstage)
>>+>        "renamed:    operation/test.js -> operation/test2.js"
>>+>
>>+>
>> 
>>diff --git a/environment/git/operation/test.js b/environment/git/>>operation/test2.js
>>similarity index 100%
>>rename from environment/git/operation/test.js
>>rename to environment/git/operation/test2.js
>>```
>
>>`--stat` 查看每次提交的简略统计信息
>>```sh
>>$git log --stat
>>commit ee93b45d169725e3380d39003abcdae74ed7481e
>>Author: 齐云猛:bank <15861097927@163.com>
>>Date:   Mon Jul 12 00:24:06 2021 +0800
>>
>>    git init
>>
>> environment/git/operation/README.md             | 12 ++++++++++++
>> environment/git/operation/{test.js => test2.js} |  0
>> 2 files changed, 12 insertions(+)
>>
>>commit 0ac26754f1ef5f282c90b3765389a98e1b867537
>>Author: 齐云猛:bank <15861097927@163.com>
>>Date:   Mon Jul 12 00:21:42 2021 +0800
>>
>>    git init
>>
>> environment/git/operation/README.md | 30 ++++++++++++++++++++++++++++--
>> environment/git/operation/test.js   |  0
>> 2 files changed, 28 insertions(+), 2 deletions(-)
>>```
> `git log --pretty=oneline --abbrev-commit` 当前分支的提交记录
>>```sh
>>`$git log --pretty=oneline --abbrev-commit` 显示commit id
>>aa8fe36 (HEAD -> git, origin/git) git init
>>19f21e8 git init
>>2f6ddf8 git init
>>d81c1e5 git init
>>90ccafe git init
>>f6447aa git init
>>7355a58 git init
>>7cd4503 git init
>>...
>>```

>`git log 的常用选项`
>选项  | 说明  
>---- | -----   
>-p  | 按补丁格式显示每个提交引入的差异。
>--stat | 显示每次提交的文件修改统计信息。
>--shortstat | 只显示 --stat 中最后的行数修改添加移除统计。
>--name-only | 仅在提交信息后显示已修改的文件清单。
>--name-status | 显示新增、修改、删除的文件清单。
>--abbrev-commit | 仅显示 SHA-1 校验和所有 40 个字符中的前几个字符。
>--relative-date | 使用较短的相对时间而不是完整格式显示日期（比如“2 weeks ago”）。
>--graph | 在日志旁以 ASCII 图形显示分支与合并历史。
>--pretty | 使用其他格式显示历史提交信息。可用的选项包括 oneline、short、full、fuller 和 format（用来定>义自己的格式）。
>--oneline | --pretty=oneline --abbrev-commit 合用的简写。 

>`常见的format选项`  
>选项 | 说明  
>---- | -----  
>%H | 提交对象(commit)的完整哈希字串
>%h | 提交对象的简短哈希字串
>%T | 树对象(tree)的完整哈希字串
>%t | 树对象的简短哈希字串
>%P | 父对象(parent)的完整哈希字串
>%p | 父对象的简短哈希字串
>%an | 作者(author)的名字
>%ae | 作者的电子邮件地址
>%ad | 作者修订日期(可以用 -date= 选项定制格式)
>%ar | 作者修订日期，按多久以前的方式显示
>%cn | 提交者(committer)的名字
>%ce | 提交者的电子邮件地址
>%cd | 提交日期
>%cr | 提交日期，按多久以前的方式显示
>%s | 提交说明

## <a id="git-show"></a> `git show 显示各种类型的对象`     
>`git show [options] <object>…` 默认显示的是HEAD
>```sh
>$git log
>commit 8a30445edde20cd55fc2abde61eb489111c0cf66 (HEAD -> git)
>Author: 齐云猛:bank <15861097927@163.com>
>Date:   Mon Jul 12 00:24:30 2021 +0800
>
>    git init
>
>commit ee93b45d169725e3380d39003abcdae74ed7481e
>Author: 齐云猛:bank <15861097927@163.com>
>Date:   Mon Jul 12 00:24:06 2021 +0800
>
>    git init
>
>$git show HEAD^   #显示上个版本
>commit ee93b45d169725e3380d39003abcdae74ed7481e
>Author: 齐云猛:bank <15861097927@163.com>
>Date:   Mon Jul 12 00:24:06 2021 +0800
>
>    git init
>
>diff --git a/environment/git/operation/README.md b/environment/git/>operation/README.md
>index f300b6b..0ba33ab 100644
>--- a/environment/git/operation/README.md
>+++ b/environment/git/operation/README.md
>@@ -164,6 +164,18 @@ $ls -a
>...
>
>$git show ee93b45d169725e3380d39003abcdae74ed7481e  # 显示指定版本
>commit ee93b45d169725e3380d39003abcdae74ed7481e
>Author: 齐云猛:bank <15861097927@163.com>
>Date:   Mon Jul 12 00:24:06 2021 +0800
>
>    git init
>
>diff --git a/environment/git/operation/README.md b/environment/git/>operation/README.md
>index f300b6b..0ba33ab 100644
>--- a/environment/git/operation/README.md
>+++ b/environment/git/operation/README.md
>@@ -164,6 +164,18 @@ $ls -a
> ...
>
>
>$git show v1.0   # 查看指定tag信息
>tag v1.0
>Tagger: 齐云猛:bank <15861097927@163.com>
>Date:   Wed Jun 23 22:53:51 2021 +0800
>
>封板
>
>commit a54e0f29f0c713559df273d2d154513348888a79 (tag: v3.0, tag: v2.0, tag: v1.0, dev)
>Author: 齐云猛:bank <15861097927@163.com>
>Date:   Wed Jun 23 12:21:52 2021 +0800
>
>    init
>
>diff --git a/environment/git/README.md b/environment/git/README.md
>
>
>```

>`git show --pretty[=<format>]|--format=<format>:` 以某种格式来输出提交日志信息
>```sh
>$git show --pretty=format:"%h %s"  # 等价于 git show --format="%h %s" 
>8a30445 git init
>diff --git a/environment/git/operation/test2.js b/environment/git/operation/test2.js
>deleted file mode 100644
>index e69de29..0000000
>```



## <a id="git-status"></a> `git status 查看上次提交之后是否有对文件进行再次修改`  
>`git status / git status -s`    
>```sh
>$git status   
>On branch git
>Your branch is up to date with 'origin/git'.
>
>Changes not staged for commit:
>  (use "git add <file>..." to update what will be committed)
>  (use "git restore <file>..." to discard changes in working directory)
>        modified:   environment/git/README.md
>
>no changes added to commit (use "git add" and/or "git commit -a")
>
>$git status -s
> M environment/git/README.md
>```

## <a id="git-stash"></a> `git stash 将更改保存在一个工作目录中` 
>`git stash save 'message' `保存，save为可选项，message为本次保存的注释
>```sh
>$git stash save "git init"
>Saved working directory and index state On git: git init
>$git stash list           
>stash@{0}: On git: git init
>stash@{1}: On git: save message
>stash@{2}: On main: init
>```

> `git stash list` 查看stash列表
>```sh
>$git stash list               
>stash@{0}: On git: save message
>stash@{1}: On main: init
>```

> `git stash show stash@{num}` 显示做了哪些改动
>```sh
>$git stash list     
>stash@{0}: On git: git init
>stash@{1}: On git: save message
>stash@{2}: On main: init
>$git stash show stash@{1}
>  environment/git/operation/README.md | 7 +++++--
>  1 file changed, 5 insertions(+), 2 deletions(-)
>```

>`git stash show stash@{num} -p` 显示存储的改动
>```sh
>$git stash list
>stash@{0}: On git: git init
>stash@{1}: On git: save message
>stash@{2}: On main: init
>$git stash show stash@{0}                  
>  environment/git/operation/README.md | 12 ++++++++++--
>  1 file changed, 10 insertions(+), 2 deletions(-)
>$git stash show stash@{0} -p
>diff --git a/environment/git/operation/README.md b/environment/git/>operation/README.md
>index f4088e9..5c563c1 100644
>--- a/environment/git/operation/README.md
>+++ b/environment/git/operation/README.md
>@@ -15,7 +15,7 @@
>    * [git log](#git-log)
>    * [git show](#git-show)
>    * [git status 查看上次提交之后是否有对文件进行再次修改](#git-status)
>-  * [git stash](#git-stash)
>+  * [git stash 将更改保存在一个工作目录中](#git-stash)
> 
>    * [git branch 分支管理](#git-branch)
>    * [git checkout 操作文件 操作分支](#git-checkout)
>@@ -266,7 +266,15 @@
>```

>`git stash apply stash@{num}` 应用某个存储,但不会把存储从存储列表中删除
>```sh
>$git stash list
>stash@{0}: On git: git init2
>stash@{1}: On git: git init2
>stash@{2}: On git: git init
>stash@{3}: On git: save message
>stash@{4}: On main: init
>$git stash apply
>On branch git
>Your branch is up to date with 'origin/git'.
>
>Changes not staged for commit:
>  (use "git add <file>..." to update what will be committed)
>  (use "git restore <file>..." to discard changes in working >directory)
>        "modified:   environment/git/issue/README.md"
>
>Untracked files:
>  (use "git add <file>..." to include in what will be >committed)
>        "assets/enviroment/git/.DS_Store"
>
>no changes added to commit (use "git add" and/or "git commit >-a")
>```

>`git stash pop stash@{$num}` 恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下
>```sh
>$git stash save "test stash pop"
>Saved working directory and index state On git: test stash pop
>
>$git stash list                 
>stash@{0}: On git: test stash pop
>stash@{1}: On git: git init2
>...
>
>$git stash show  stash@{0} -p   
>diff --git a/environment/git/issue/README.md b/environment/git/issue/README.md
>index 63b8267..b53dc3c 100644
>--- a/environment/git/issue/README.md
>+++ b/environment/git/issue/README.md
>
>@ -6,4 +6,6 @@ error: Your local changes to the following files would be overwritten >by merge:
>         environment/git/operation/README.md
> Please commit your changes or stash them before you merge.
> Aborting
>-```
>\ No newline at end of file
>+```
>+
>+test git stash pop 
>\ No newline at end of file
>
>$git stash pop stash@{0}        
>On branch git
>Your branch is up to date with 'origin/git'.
>
>Changes not staged for commit:
>  (use "git add <file>..." to update what will be committed)
>  (use "git restore <file>..." to discard changes in working directory)
>        "modified:   environment/git/issue/README.md"
>
>no changes added to commit (use "git add" and/or "git commit -a")
>Dropped stash@{0} (9ce85eb67c5614fd2b963aa7ef26605c900058fb)
>
> 代码: "test git stash pop" 将会添加到 "environment/git/issue/README.md" 文件中, 并且会删除 "stash@{0}: On git: test stash pop"
>```

>`git stash drop stash@{$num}` 丢弃stash@{$num}存储，从列表中删除这个存储
```sh
$git stash list
stash@{0}: On git: git init2
stash@{1}: On git: git init
stash@{2}: On git: save message
stash@{3}: On main: init

$git stash drop stash@{0}
Dropped stash@{0} (f48b2c14c41124abc393c28c25d5660c0f75e47b)

$git stash list          
stash@{0}: On git: git init
stash@{1}: On git: save message
stash@{2}: On main: init

```

>`git stash clear` 删除所有缓存的stash
>```sh
>$git stash list
>stash@{0}: On git: git init
>stash@{1}: On git: save message
>stash@{2}: On main: init
>
>$git stash clear
>
>$git stash list 
>
>```

## <a id="git-branch"></a>   `git branch 分支管理`
> `git branch `
>```sh
>    $git branch   
>    * master
> ```

> `git branch -r`    查看远程分支  
>```sh
>   $git branch -r
>   origin/HEAD -> origin/main
>   origin/main
>   origin/master
>```

> `git branch -a` 查看所有分支  
>```sh
>   $git branch -a
>   * master
>   remotes/origin/HEAD -> origin/main
>   remotes/origin/main
>   remotes/origin/master
>```

> `git branch test1`  创建分支 test1  
>```sh
>   $git branch test1
>```

> `git branch -d test1` 删除分支test1
>```sh
>   $git branch -d test1
>   Deleted branch test1 (was 49d2236).
>```
 
> `git branch -vv` 查看本地分支对应的远程分支
>```sh
>   $git branch -vv
>   * master 49d2236 [origin/master] init
>```

## <a id="git-checkout"></a> `git checkout 操作文件 操作分支`
>` git checkout filename` 放弃单个文件修改
>```sh
>$git checkout environment/git/README.md 
>```

> `git checkout .` 放弃所有文件修改
>```sh
>$git checkout .
>```

> `git checkout master`   将分支切换到master 
>```sh
>$git checkout master
>```

> `git checkout -b dev`  如果分支存在则只切换分支，若不存在则创建并切换到dev分支
>```sh
>$git checkout -b dev
>$git push --set-upstream origin dev  推送到远程分支
>```

## <a id="git-commit"></a> `git commit`
> `git commit -m ''`  提交暂存区到本地仓库中
>```sh
>   $git add .
>   $git commit -m'init'
>   等于
>   $git commit -am"init"
>```
## <a id="git-merge"></a> `git merge`

## <a id="git-rebase"></a> `git rebase`    
`git rebase ` 取消被合并分支里的每个提交(commit)
```sh
$git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.

$git rebase git
```

`--continue` 执行git rebase之后遇到冲突,解决完冲突,git add 
```sh
$git add .
$git rebase --continue
```

`--abort` 终止合并操作, 回到最初阶段
```sh
$git add .
$git rebase --abort
```

## <a id="git-reset"></a> `git reset 回退版本`     
> `git reset git reset [--soft | --mixed | --hard] [HEAD]`
>> `--mixed `为默认 用于重置暂存区的文件与上一次的提交(commit)保持一致，工作区文件内容保持不变
>>```sh
>>$git reset HEAD^            # 回退所有内容到上一个版本  
>>$git reset HEAD^ hello.php  # 回退 hello.php 文件的版本到上一个版本  
>>$git reset 052e             # 回退到指定版本
>>```
>> `--soft` 回退到某个版本
>>```sh
>>git reset --soft HEAD
>>```
>> `--hard`  撤销工作区中所有未提交的修改内容，将暂存区与工作区都回到上一次版本，并删除之前的所有信息提交  
>>`注意：谨慎使用 –hard 参数，它会删除回退点之前的所有信息。`
>>```sh
>>$git reset –-hard HEAD~3           # 回退上上上一个版本  
>>$git reset –-hard bae128           # 回退到某个版本回退点之前的所有信息。 
>>$git reset --hard origin/master    # 将本地的状态回退到和远程的一样 
>>```

> `HEAD 说明`
>* HEAD 表示当前版本
>* HEAD^ 上一个版本
>* HEAD^^ 上上一个版本
>* HEAD^^^ 上上上一个版本
>* 以此类推 ....  
>#### `等同于`
>* HEAD~0 表示当前版本
>* HEAD~1 上一个版本
>* HEAD^2 上上一个版本
>* HEAD^3 上上上一个版本
>* 以此类推...

## <a id="git-switch"></a> `git switch 专门用来切换分支、创建并切换分支` 
>`  git switch XXX` 切换分支
>```sh
>$git switch dev        # 切换到dev分支  若分支不存在,则报错
>$git switch -c dev     # 创建一个新分支并切换到该新分支,  若分支存在,则提示分支存在错误
>$git switch -          # 切换到上一个切换的分支
>```

>` git switch --orphan <branchName>` 创建一个没有任何提交记录的分支，删除所有跟踪的文件
>```sh
>$git switch --orphan dev3
>```

## <a id="git-tage"></a> `git tag 标签 以示重要`       
>` git tage -l/--list`
>```sh
>$git tag test                     # 创建test标签
>
>$git tag -l                       # 查看已经创建的标签
>test
>
>$git tag -a v1.0 -m"1.0版本封板"   # 创建附注标签
>
>$git show v1.0                    # 查看 v1.0 标签
>
>$git push orgin v1.0              # 将本地tag v1.0上>传远程仓库 
>
>$git push origin --tags           # 将本地tag上传至远>程仓库
>
>```

> `git tag -d xxx`  删除tag
>```sh
>$git tag -d test                    # 删除本地tag
>Deleted tag 'test' (was a54e0f2)
>
>$git push origin :refs/tags/test    # 删除远程仓库的>tag
>To github.com:Xiao2GouZi/logger.git
> - [deleted]         test
>
>$git push origin --delete v1.0      # 删除远程仓库的>tag
>To github.com:Xiao2GouZi/logger.git
> - [deleted]         v1.0
>```

## <a id="git-pull"></a> `git pull 远程代码合并本地分支`
> `git 远程主机名 远程分支:本地分支`
>```sh
>$git pull origin master:master
>```

## <a id="git-push"></a> `git push   本地的分支上传远程仓库` 
> `git push`  如果本地分支只有一个远程分支,可以省略主机名
>```sh
>$git push
>``` 

> `git push` 主机名 本地分支:远程分支  本地dev分支推送到主机名origin的master 分支
>```sh
>$git push origin dev:master
>```

> `git push` --force 主机名 本地分支:远程分支   强制推送
>```sh
>$git push --force origin dev:master
>```

> `git push --delete` 主机名 远程分支  删除origin主机的master分支   
>```sh
>$git push --delete origin master
>```

## <a id="git-remote"></a> `git remote 远程仓库查询操作`
> `git remote -v`    查看远程仓库地址
>```sh
>$git remote -v 
>origin  git@github.com:Xiao2GouZi/logger.git (fetch)
>origin  git@github.com:Xiao2GouZi/logger.git (push)
>```

>` git remote show [remote]`   显示某个远程仓库的信息
>```sh
>$git remote show git@github.com:Xiao2GouZi/logger.git
>```

> `git remote add [shortname] [url]`   添加远程版本库  shortname 为本地的版本库
>```sh
>$git remote add origin XXXX
>$git push -u origin master
>```

> `git remote rm name`  删除远程仓库  
>```sh
>$git remote remove XXXXX
>$git remote
>origin
>```

> `git remote rename old_name new_name  `修改仓库名
>```sh
>$git remote rename pb paul
>$git remote
>origin
>paul
>```