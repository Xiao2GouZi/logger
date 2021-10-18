### npm 全局安装 ts-node
```sh
$npm install typescript -g
$npm install ts-node -g
```

### 执行ts文件
```sh
$ts-node index.ts
```
`注: 默认请看下会首先在执行的当前目录中找tsconfig.json文件,如果没有回一次往上找`

### 如果执行的文件中用了alias, 需要安装tsconfig-paths配合使用
```sh
$npm i tsconfig-paths --save-dev

$ts-node -r tsconfig-paths/register index.ts
```

