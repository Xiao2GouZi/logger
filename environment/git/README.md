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

>git branch

>git commit 

>git merge

>git rebase

>git reset

>git switch

>git tag

>git fetch

>git pull

>git push

>git remote -v     
#### 查看远程仓库地址
```
bank@promote logger % git remote -v 
origin  git@github.com:Xiao2GouZi/logger.git (fetch)
origin  git@github.com:Xiao2GouZi/logger.git (push)
```

> git remote show [remote]  
#### 显示某个远程仓库的信息
```
git remote show git@github.com:Xiao2GouZi/logger.git
```

>git remote add [shortname] [url]  
#### 添加远程版本库  shortname 为本地的版本库
```
$ git remote add origin git@github.com:tianqixin/runoob-git-test.git
$ git push -u origin master
```

>git remote rm name   
#### 删除远程仓库
```
$ git remote remove paul
$ git remote
origin
```

>git remote rename old_name new_name  
#### 修改仓库名
```
$ git remote rename pb paul
$ git remote
origin
paul
```