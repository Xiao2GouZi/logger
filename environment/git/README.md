

# 目录
   * [git config](#git-config)
   * [git clone](#git-clone)
   * [git init](#git-init)
   * [git add](#git-add)
   * [git mv](#git-mv)
   * [git restore](#git-restore)
   * [git rm](#git-rm)
   * [git bisect](#git-bisect)

   * [git diff](#git-diff)
   * [git grep](#git-grep)
   * [git log](#git-log)
   * [git show](#git-show)
   * [git status](#git-status)

   * [git branch](#git-branch)
   * [git checkout](#git-checkout)
   * [git tage](#git-tage)
   * [git pull](#git-pull)
   * [git push](#git-push)
   * [git remote](#git-remote)


## <a id="git-config"></a> `git config`
>> git config user.name  /  git config --global user.name 查询(全局)用户名
```
bank@promote logger % git config user.name
齐云猛:bank

bank@promote logger % git config --global user.name
齐云猛:bank
```

>> git config user.name XXX  /  git config --global user.name XXX  设置(全局)用户名
```
bank@promote logger % git config user.name 齐云猛:bank

bank@promote logger % git config --global user.name 齐云猛:bank
```

>> git config user.email  /  git config --global user.email  查询(全局)用户邮箱
```
bank@promote logger % git config user.email
15861097927@163.com

bank@promote logger % git config --global user.email
15861097927@163.com
```

>> git config user.email XXX  /  git config --global user.email XXX  设置(全局)用户邮箱
```
bank@promote logger % git config user.email 15861097927@163.com

bank@promote logger % git config --global user.email 15861097927@163.com
```

>> git config --list  /  git config --list --show-origin    检查配置信息/ 检查配置信息以及所在的文件
```
bank@promote logger % git config --list            
credential.helper=osxkeychain
user.name=齐云猛:bank
user.email=15861097927@163.com
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
...


bank@promote logger % git config --list --show-origin                 
file:/Applications/Xcode.app/Contents/Developer/usr/share/git-core/gitconfig    credential.helper=osxkeychain
file:/Users/bank/.gitconfig     user.name=齐云猛:bank
file:/Users/bank/.gitconfig     user.email=15861097927@163.com
file:.git/config        core.repositoryformatversion=0
file:.git/config        core.filemode=true
file:.git/config        core.bare=false
file:.git/config        core.logallrefupdates=true
file:.git/config        core.ignorecase=true
file:.git/config        core.precomposeunicode=true
file:.git/config        remote.origin.url=git@github.com:Xiao2GouZi/logger.git
file:.git/config        remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
file:.git/config        branch.master.remote=origin
...
```

## <a id="git-clone"></a> `git clone`  

## <a id="git-init"></a>  `git init`

## <a id="git-add"></a> `git add`

## <a id="git-mv"></a> `git mv`

## <a id="git-restore"></a> `git restore`

## <a id="git-rm"></a> `git rm` 

## <a id="git-bisect"></a> `git bisect`

##  <a id="git-diff"></a> `git diff`

## <a id="git-grep"></a> `git grep`

## <a id="git-log"></a> `git log`

## <a id="git-show"></a> `git show` 
## <a id="git-status"></a> `git status`

## <a id="git-branch"></a>   `git branch 分支管理`
>>git branch  
```
    bank@promote logger % git branch   
    * master
 ```
 >>git branch -r  查看远程分支  
 ```
    bank@promote logger % git branch -r
    origin/HEAD -> origin/main
    origin/main
    origin/master
 ```
 >>git branch -a 查看所有分支  
 ```
    bank@promote logger % git branch -a
    * master
    remotes/origin/HEAD -> origin/main
    remotes/origin/main
    remotes/origin/master
 ```
 >>git branch test1  创建分支 test1  
 ```
    bank@promote logger % git branch test1
 ```
 >>git branch -d test1 删除分支test1
 ```
    bank@promote logger % git branch -d test1
    Deleted branch test1 (was 49d2236).
 ```
 >>git branch -vv 查看本地分支对应的远程分支
 ```
    bank@promote logger % git branch -vv
    * master 49d2236 [origin/master] init
 ```

## <a id="git-checkout"></a> `git checkout 操作文件 操作分支`
>> git checkout filename 放弃单个文件修改
```
bank@promote logger % git checkout environment/git/README.md 
```
>> git checkout . 放弃所有文件修改
```
bank@promote logger % git checkout .
```
>>git checkout master   将分支切换到master 
```
bank@promote logger % git checkout master
```
>>git checkout -b master  如果分支存在则只切换分支，若不存在则创建并切换到master分支
```
bank@promote logger % git checkout -b master
```

>git commit 

>git merge

>git rebase

>git reset

>git switch

## <a id="git-tage"></a> `git tag 标签`

## <a id="git-pull"></a> `git pull 远程代码合并本地分支`
>> git 远程主机名 远程分支:本地分支
```
bank@promote logger % git pull origin master:master
```

## <a id="git-push"></a> `git push   本地的分支上传远程仓库` 
>> git push  如果本地分支只有一个远程分支,可以省略主机名
```
bank@promote logger % git push
``` 

>> git push 主机名 本地分支:远程分支  本地dev分支推送到主机名origin的master 分支
```
bank@promote logger % git push origin dev:master
```

>> git push --force 主机名 本地分支:远程分支   强制推送
```
bank@promote logger % git push --force origin dev:master
```

>> git push --delete 主机名 远程分支  删除origin主机的master分支   
```
bank@promote logger % git push --delete origin master
```

## <a id="git-remote"></a> `git remote 远程仓库操作`
>>git remote -v    查看远程仓库地址
```
bank@promote logger % git remote -v 
origin  git@github.com:Xiao2GouZi/logger.git (fetch)
origin  git@github.com:Xiao2GouZi/logger.git (push)
```

>> git remote show [remote]   显示某个远程仓库的信息
```
git remote show git@github.com:Xiao2GouZi/logger.git
```

>>git remote add [shortname] [url]   添加远程版本库  shortname 为本地的版本库
```
$ git remote add origin XXXX
$ git push -u origin master
```

>>git remote rm name  删除远程仓库  
```
$ git remote remove XXXXX
$ git remote
origin
```

>>git remote rename old_name new_name  修改仓库名
```
$ git remote rename pb paul
$ git remote
origin
paul
```