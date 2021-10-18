

# tsc cli option 文件里的顶级属性 
* [npm 全局安装 typescript](#npm-i-typescript) 
* [CLI Commands](#CLI-Commands) 
* [Build Options](#Build-Options) 
* [Watch Options](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/tsconfig/README.md#watchOptions) 
* [Compiler Flags](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/tsconfig/README.md) 


### <a id="npm-i-typescript"></a> `npm 全局安装 typescript`
>```sh
>$npm install typescript -g
>```
>
> 注: 可以通过[ts-node](https://github.com/Xiao2GouZi/logger/tree/ts/material/ts/ts-node)直接编译执行ts,而不需要先编译成js文件在执行


## <a id="CLI-Commands"></a> `CLI Commands`
>选项 | 类型  | 说明  
>---- | ----- | -----
>--all | boolen | 显示所有编译器选项。
>--generateTrace| string | 生成事件跟踪和类型列表。
>--help | boolen | 提供本地信息以获取有关 CLI 的帮助。
>--init | boolen | 初始化一个 TypeScript 项目并创建一个 tsconfig.json 文件。
>--listFilesOnly | boolen | 打印编译部分的文件名，然后停止处理。
>--locale | string | 从TypeScript设置消息的语言。这并不影响emit。
>--project | string | 默认从当前目录开始编译，编译所有 .ts 文件，并且从当前目录开始查找 tsconfig.json 文件，并逐级向上级目录搜索。
>--showConfig | boolen | 打印最终配置而不是构建。
>--version | boolen | 打印编译器的版本。
>
>`注: tsc 的命令行选项具有优先级，会覆盖 tsconfig.json 中的同名选项`


## <a id="Build-Options"></a> `Build Options`
>选项 | 类型  | 说明  
>---- | ----- | -----
>--build | boolen | 构建一个或多个项目及其依赖项
>--clean | boolen | 删除指定项目的输出（可以与 结合--dry） 
>--dry | boolen | 显示将要完成的操作，但实际上并未构建任何内容  
>--force | boolen | 就好像所有项目都过时一样  
>--verbose | boolen | 打印详细日志以解释正在发生的事情（可以与任何其他标志结合使用）  



