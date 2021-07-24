


## <a id="compilerOptions"></a> `compilerOptions`
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>allowJs | boolen | false | 用来指定是否允许编译js文件，默认是false，即不编译js文件
>allowSyntheticDefaultImports | boolen |  | 用来指定允许从没有默认导出的模块中默认导入
>target | string | ES3 | target用于指定编译后js文件里的语法应该遵循哪个JavaScript的版本的版本目标: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'.
>module | string | target === "ES6" ? "ES6" : "commonjs" | 用来指定编译后的js要使用的模块标准: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'.
>lib | string[] |  | lib用于指定要包含在编译中的库文件, 如果--lib没有指定默认注入的库的列表。默认注入的库为：针对于--target ES5：DOM，ES5，ScriptHost; 针对于--target ES6：DOM，ES6，DOM.Iterable，ScriptHost
>checkJs | boolen | false | 用来指定是否检查和报告js文件中的错误, 与 --allowJs配合使用  
>jsx | string | Preserve | 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'.
>declaration | boolen | false |  用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件。但是declaration和allowJs不能同时设为true
>declarationDir | string |  |  生成声明文件的输出路径。
>sourceMap | boolen | false |  用来指定编译时是否生成.map文件
>outFile | string |  |  outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为"./dist/main.js"，则输出的文件为一个main.js文件。但是要注意，只有设置module的值为amd和system模块时才支持这个配置
>outDir | string |  |  outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹
>rootDir | string |  |  用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译
>removeComments | boolean | false | 用于指定是否将编译后的文件中的注释删掉, 除了以 /!*开头的版权信息。  
>noEmit | boolean | false |  不生成编译文件
>importHelpers | boolean | false |  指定是否引入tslib里的辅助工具函数
>[downlevelIteration](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#downlevelIteration) | boolean | false |  当target为'ES5' or 'ES3'时，为'for-of', spread, and destructuring'中的迭代器提供完全支持
>isolatedModules | boolean | false |  指定是否将每个文件作为单独的模块
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
## <a id="compilerOptions"></a> `compilerOptions`
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>allowJs | boolen | false | 用来指定是否允许编译js文件，默认是false，即不编译js文件
>allowSyntheticDefaultImports | boolen |  | 用来指定允许从没有默认导出的模块中默认导入
>target | string | ES3 | target用于指定编译后js文件里的语法应该遵循哪个JavaScript的版本的版本目标: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'.
>module | string | target === "ES6" ? "ES6" : "commonjs" | 用来指定编译后的js要使用的模块标准: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'.
>lib | string[] |  | lib用于指定要包含在编译中的库文件, 如果--lib没有指定默认注入的库的列表。默认注入的库为：针对于--target ES5：DOM，ES5，ScriptHost; 针对于--target ES6：DOM，ES6，DOM.Iterable，ScriptHost
>checkJs | boolen | false | 用来指定是否检查和报告js文件中的错误, 与 --allowJs配合使用  
>jsx | string | Preserve | 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'.
>declaration | boolen | false |  用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件。但是declaration和allowJs不能同时设为true
>declarationDir | string |  |  生成声明文件的输出路径。
>sourceMap | boolen | false |  用来指定编译时是否生成.map文件
>outFile | string |  |  outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为"./dist/main.js"，则输出的文件为一个main.js文件。但是要注意，只有设置module的值为amd和system模块时才支持这个配置
>outDir | string |  |  outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹
>rootDir | string |  |  用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译
>removeComments | boolean | false | 用于指定是否将编译后的文件中的注释删掉, 除了以 /!*开头的版权信息。  
>noEmit | boolean | false |  不生成编译文件
>importHelpers | boolean | false |  指定是否引入tslib里的辅助工具函数
>[downlevelIteration](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#downlevelIteration) | boolean | false |  当target为'ES5' or 'ES3'时，为'for-of', spread, and destructuring'中的迭代器提供完全支持
>isolatedModules | boolean | false |  指定是否将每个文件作为单独的模块
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
## <a id="compilerOptions"></a> `compilerOptions`
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>allowJs | boolen | false | 用来指定是否允许编译js文件，默认是false，即不编译js文件
>allowSyntheticDefaultImports | boolen |  | 用来指定允许从没有默认导出的模块中默认导入
>target | string | ES3 | target用于指定编译后js文件里的语法应该遵循哪个JavaScript的版本的版本目标: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'.
>module | string | target === "ES6" ? "ES6" : "commonjs" | 用来指定编译后的js要使用的模块标准: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'.
>lib | string[] |  | lib用于指定要包含在编译中的库文件, 如果--lib没有指定默认注入的库的列表。默认注入的库为：针对于--target ES5：DOM，ES5，ScriptHost; 针对于--target ES6：DOM，ES6，DOM.Iterable，ScriptHost
>checkJs | boolen | false | 用来指定是否检查和报告js文件中的错误, 与 --allowJs配合使用  
>jsx | string | Preserve | 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'.
>declaration | boolen | false |  用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件。但是declaration和allowJs不能同时设为true
>declarationDir | string |  |  生成声明文件的输出路径。
>sourceMap | boolen | false |  用来指定编译时是否生成.map文件
>outFile | string |  |  outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为"./dist/main.js"，则输出的文件为一个main.js文件。但是要注意，只有设置module的值为amd和system模块时才支持这个配置
>outDir | string |  |  outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹
>rootDir | string |  |  用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译
>removeComments | boolean | false | 用于指定是否将编译后的文件中的注释删掉, 除了以 /!*开头的版权信息。  
>noEmit | boolean | false |  不生成编译文件
>importHelpers | boolean | false |  指定是否引入tslib里的辅助工具函数
>[downlevelIteration](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#downlevelIteration) | boolean | false |  当target为'ES5' or 'ES3'时，为'for-of', spread, and destructuring'中的迭代器提供完全支持
>isolatedModules | boolean | false |  指定是否将每个文件作为单独的模块
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  
>lib |  |  |  




















































## <a id="downlevelIteration"></a> `downlevelIteration`  
```js
const str = "Hello!";
for (const s of str) {
  console.log(s);
}
```

```js
"use strict";
var str = "Hello!";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var s = str_1[_i];
    console.log(s);
}
```


