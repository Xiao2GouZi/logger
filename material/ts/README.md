## 开启 Typescript 

### npm 全局安装 typescript
```sh
$npm install typescript -g
```

### 注: 如何直接执行ts文件, 请看 [ts-node](https://github.com/Xiao2GouZi/logger/tree/ts/material/ts/ts-node)
### 创建tsconfig.json
```sh
$tsc init
```


## 如何正确使用 `files、include、exclude`
>### `files && include`
>>编译器将会编译 files && include 中的文件
>>```json 
>>  {
>>    "files": [
>>      "src/index.ts"
>>    ],
>>    "include": [
>>      "src/**/*"
>>    ]
>>  }
>>```
>### `files && exclude`
>>同时配置files, exclude. exclude将不起作用
>>```json
>>  {
>>    "files": [
>>      "src/index.ts"
>>    ],
>>    "exclude": [
>>      "src/index.ts"
>>    ]
>>  }
>>```
>### `include && exclude`
>>同时配置include, exclude. 编译器将编译include设置的文件,但是要除去exclude配置的文件
>>```json 
>>{
>>  "include": [
>>    "src/**/*"
>>  ],
>>  "exclude": [
>>    "src/index.ts"
>>  ]
>>}
>>```