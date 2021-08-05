import * as fs from 'fs';

Cannot find module 'fs' or its corresponding type declarations.

I have already tried to use npm install  @types/node --save-dev and add in to the file tsconfig.json inside compilerOptions "types": ["node"],"typeRoots": ["node_modules/@types"], So, if someone can give me an help to troubleshooting this error or give me a different solution I will be glad.





## files && include
>编译器将会编译 files && include 中的文件
>```json 
>  {
>    "files": [
>      "src/index.ts"
>    ],
>    "include": [
>      "src/**/*"
>    ]
>  }
>```

## files && exclude
>同时配置files, exclude. exclude将不起作用
>```json
>  {
>    "files": [
>      "src/index.ts"
>    ],
>    "exclude": [
>      "src/index.ts"
>    ]
>  }
>```

## include && exclude
>同时配置include, exclude. 编译器将编译include设置的文件,但是要除去>exclude配置的文件
>```json 
>{
>  "include": [
>    "src/**/*"
>  ],
>  "exclude": [
>    "src/index.ts"
>  ]
>}
>```