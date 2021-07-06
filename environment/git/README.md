

# 目录
   * [git config 设置属性](#git-config)
   * [git clone](#git-clone)
   * [git init](#git-init)
   * [git add 添加文件到仓库](#git-add)
   * [git mv](#git-mv)
   * [git restore](#git-restore)
   * [git rm](#git-rm)
   * [git bisect](#git-bisect)

   * [git diff 比较文件在暂存区和工作区的差异](#git-diff)
   * [git grep](#git-grep)
   * [git log](#git-log)
   * [git show](#git-show)
   * [git status 查看上次提交之后是否有对文件进行再次修改](#git-status)
   * [git stash](#git-stash)

   * [git branch 分支管理](#git-branch)
   * [git checkout 操作文件 操作分支](#git-checkout)
   * [git commit 命令将暂存区内容添加到本地仓库中](#git-commit) 
   * [git merge ](#git-merge) 
   * [git rebase ](#git-rebase) 
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
>齐云猛:bank
>
>$git config --global user.name
>齐云猛:bank
>```

> `git config user.name XXX  /  git config --global user.name XXX`  设置(全局)用户名
>```sh
>$git config user.name 齐云猛:bank
>
>$git config --global user.name 齐云猛:bank
>```

`> git config user.email  /  git config --global user.email`  查询(全局)用户邮箱
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
>user.name=齐云猛:bank
>user.email=15861097927@163.com
>core.repositoryformatversion=0
>core.filemode=true
>core.bare=false
>core.logallrefupdates=true
>...
>
>$git config --list --show-origin                 
>file:/Applications/Xcode.app/Contents/Developer/usr/share/git-core/>gitconfig    credential.helper=osxkeychain
>file:/Users/bank/.gitconfig     user.name=齐云猛:bank
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

## <a id="git-clone"></a> `git clone`    //TODO: -----


## <a id="git-init"></a>  `git init`     //TODO: -----

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

## <a id="git-mv"></a> `git mv`          //TODO: -----

## <a id="git-restore"></a> `git restore`  //TODO: -----

## <a id="git-rm"></a> `git rm`            //TODO: -----

## <a id="git-bisect"></a> `git bisect`    //TODO: -----

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

## <a id="git-grep"></a> `git grep`         //TODO: -----

## <a id="git-log"></a> `git log`           //TODO: -----
> `git log --pretty=oneline --abbrev-commit` 当前分支的提交记录
>```sh
>$git log --pretty=oneline --abbrev-commit
>aa8fe36 (HEAD -> git, origin/git) git init
>19f21e8 git init
>2f6ddf8 git init
>d81c1e5 git init
>90ccafe git init
>f6447aa git init
>7355a58 git init
>7cd4503 git init
>...
>```

## <a id="git-show"></a> `git show`         //TODO: -----
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

## <a id="git-stash"></a> `git stash`      //TODO: -----

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
## <a id="git-merge"></a> `git merge`    //TODO: -----

## <a id="git-rebase"></a> `git rebase`     //TODO: -----

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