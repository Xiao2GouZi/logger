> git clone 

>git init

> git add

>git mv

>git restore

>git rm 

>git bisect

>git diff

>git grep

>git log  

>git show  
>git status

## git branch    分支
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

## git checkout 操作文件 操作分支
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

>git tag

>git fetch

>git pull

>git push

## git remote 远程分支
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