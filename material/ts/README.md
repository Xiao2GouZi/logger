
## `files、include、exclude`
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
>>同时配置include, exclude. 编译器将编译include设置的文件,但是要除去>exclude配置>的文件
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