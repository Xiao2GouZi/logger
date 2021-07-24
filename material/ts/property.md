
# tsconfig.json文件里的顶级属性  [compilerOptions](#compilerOptions) 、 [files](#files) 、 [include](#include) 、 [exclude](#exclude) 、 [extends](#extends) 、 [compileOnSave](#compileOnSave) 、 [references](#references)

## <a id="compilerOptions"></a> `compilerOptions`
  * [Type Checking 类型检查](#type-checking) 
  * [Modules 模块](#modules) 
  * [Emit](#emit) 
  * [JavaScript Support](#javaScript-support) 
  * [Editor Support 编辑器支持](#editor-support) 
  * [Interop Constraints 互操作约束](#interop-constraints) 
  * [Backwards Compatibility  向后兼容](#backwards-compatibility) 
  * [Language and Environment 语言和环境](#language-and-environment) 
  * [Compiler Diagnostics  编译器诊断](#compiler-diagnostics) 
  * [Projects 项目 ](#projects) 
  * [Output Formatting  输出格式](#output-formatting) 
  * [Completeness 完整性](#completeness) 
  * [Watch Options  监听选项](#watch-options) 


### <a id="type-checking"></a> Type Checking  类型检查
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
> [allowUnreachableCode](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#downlevelIteration) | boolen | undefined | 报告执行不到的代码错误
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  



### <a id="modules"></a> Modules 模块
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>module | string | target === "ES6" ? "ES6" : "commonjs" | 用来指定编译后的js要使用的模块标准: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'.
>rootDir | string |  |  用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译
>lib |  |  |  



### <a id="emit"></a> Emit 
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>declaration | boolen | false |  用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件。但是declaration和allowJs不能同时设为true
>declarationDir | string |  |  生成声明文件的输出路径。
>sourceMap | boolen | false |  用来指定编译时是否生成.map文件
>outFile | string |  |  outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为"./dist/main.js"，则输出的文件为一个main.js文件。但是要注意，只有设置module的值为amd和system模块时才支持这个配置
>outDir | string |  |  outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹
>removeComments | boolean | false | 用于指定是否将编译后的文件中的注释删掉, 除了以 /!*开头的版权信息。  
>noEmit | boolean | false |  不生成编译文件
>importHelpers | boolean | false |  指定是否引入tslib里的辅助工具函数
>[downlevelIteration](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#downlevelIteration) | boolean | false |  当target为'ES5' or 'ES3'时，为'for-of', spread, and destructuring'中的迭代器提供完全支持
>lib |  |  |  



### <a id="javaScript-support"></a>JavaScript Support
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>allowJs | boolen | false | 用来指定是否允许编译js文件，默认是false，即不编译js文件
>checkJs | boolen | false | 用来指定是否检查和报告js文件中的错误, 与 --allowJs配合使用  
>lib |  |  |  



### <a id="editor-support"></a>Editor Support 编辑器支持
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>lib |  |  |  


### <a id="interop-constraints"></a>Interop Constraints 互操作约束
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>allowSyntheticDefaultImports | boolen |  | 用来指定允许从没有默认导出的模块中默认导入
>isolatedModules | boolean | false |  指定是否将每个文件作为单独的模块
>lib |  |  |  




### <a id="backwards-compatibility"></a>Backwards Compatibility  向后兼容
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>lib |  |  |  


### <a id="language-and-environment"></a>Language and Environment 语言和环境
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>target | string | ES3 | target用于指定编译后js文件里的语法应该遵循哪个JavaScript的版本的版本目标: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'.
>lib | string[] |  | lib用于指定要包含在编译中的库文件, 如果--lib没有指定默认注入的库的列表。默认注入的库为：针对于--target ES5：DOM，ES5，ScriptHost; 针对于--target ES6：DOM，ES6，DOM.Iterable，ScriptHost
>jsx | string | Preserve | 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'.
>lib |  |  |  




### <a id="compiler-diagnostics"></a>Compiler Diagnostics  编译器诊断
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>lib |  |  |  



### <a id="projects"></a>Projects 项目 
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>lib |  |  |  


### <a id="output-formatting"></a>Output Formatting  输出格式
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>lib |  |  |  


### <a id="completeness"></a>Completeness 完整性
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>lib |  |  |  



### <a id="watch-options"></a>Watch Options  监听选项
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>lib |  |  |  








tsc --project ./src   编译src目录下项目,并且src目录下要包含 tsconfig.json 文件 否则报错


## <a id="files"></a> `files`
>`files可以配置一个数组列表，里面包含指定文件的相对或绝对路径，编译器在编译的时候只会编译包含在files中列出的文件，如果不指定，则取决于有没有设置include选项，如果没有include选项，则默认会编译根目录以及所有子目录中的文件。这里列出的路径必须是指定文件，而不是某个文件夹，而且不能使用* ? **/ 等通配符`
>```json
>{
>  "files": [
>    "src/index.ts"
>  ]
>}
>```
>这样只会编译src/index.ts文件 

## <a id="include"></a> `include`
>`include也可以指定要编译的路径列表，但是和files的区别在于，这里的路径可以是文件夹，也可以是文件，可以使用相对和绝对路径，而且可以使用通配符，比如"./src"即表示要编译src文件夹下的所有文件以及子文件夹的文件`
>```json
>{
>  "include": [
>    "src/**/*"
>  ]
>}
>```
>编译编译src目录下所有的ts文件

## <a id="exclude"></a> `exclude`
>`exclude表示要排除的、不编译的文件，它也可以指定一个列表，规则和include一样，可以是文件或文件夹，可以是相对路径或绝对路径，可以使用通配符`
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
>编译器编译src目录下除去index.ts文件外的所有ts文件

## <a id="extends"></a> `extends`
>`extends可以通过指定一个其他的tsconfig.json文件路径，来继承这个配置文件里的配置，继承来的文件的配置会覆盖当前文件定义的配置。TS在3.2版本开始，支持继承一个来自Node.js包的tsconfig.json配置文件`
>### ts/config.json
>```json
>{
>  "compilerOptions": {
>
>  },
>  "files": [
>    
>  ]
>}
>```
>### tsconfig.json
>```json
>{
>  "extends": "./ts/config",
>  "exclude": []
>}
>```
>在原文件里的配置先被加载，然后被来至继承文件里的配置重写。 如果发现循环引用，则会报错


## <a id="compileOnSave"></a> `compileOnSave`
>`compileOnSave的值是true或false，如果设为true，在我们编辑了项目中的文件保存的时候，编辑器会根据tsconfig.json中的配置重新生成文件，不过这个要编辑器支持`
>```json
>{
>  "compileOnSave": true
>}
>```

## <a id="references"></a> `references`
>`一个对象数组，指定要引用的项目`

