
# tsconfig.json文件里的顶级属性 
* [compilerOptions](#compilerOptions) 
* [files](#files) 
* [include](#include) 
* [exclude](#exclude) 
* [extends](#extends) 
* [compileOnSave](#compileOnSave) 
* [references](#references) 
* [watchOptions](#watchOptions) 
* [typeAcquisition](#typeAcquisition)

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
> [allowUnreachableCode](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#allowUnreachableCode) | boolen | undefined | 报告执行不到的代码错误
>[allowUnusedLabels](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#allowUnusedLabels) | boolen | undefined |  报告未使用的标签错误
>[alwaysStrict](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#alwaysStrict) | boolen | false | 指定始终以严格模式检查每个模块，并且在编译之后的js文件中加入"use strict"字符串，用来告诉浏览器该js为严格模式 
>[exactOptionalPropertyTypes](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#exactOptionalPropertyTypes) | boolen | true | 更严格的规则来处理类型或接口上的属性
>[noFallthroughCasesInSwitch](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noFallthroughCasesInSwitch) | boolen | false | 用于检查switch中是否有case没有使用break跳出switch 
>[noImplicitAny](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noImplicitAny) | boolen | false | 如果我们没有为一些值设置明确的类型，编译器会默认认为这个值为any，如果noImplicitAny的值为true的话。则没有明确的类型会报错 
>[noImplicitOverride](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noImplicitOverride) | boolen | false | 处理使用继承的类时，子类有可能在基类中重命名时与它重载的函数“不同步”
>[noImplicitReturns](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noImplicitReturns) | boolen | false | 用于检查函数是否有返回值，设为true后，如果函数没有返回值则会提示
>[noImplicitThis](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noImplicitThis) | boolen | false | 当this表达式的值为any类型的时候，生成一个错误
>[noPropertyAccessFromIndexSignature](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noPropertyAccessFromIndexSignature) | boolen | false | 确保了通过" dot " (obj.key)语法和" indexed " (obj["key"])访问字段和属性在类型中声明的方式之间的一致性  
>[noUncheckedIndexedAccess](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noUncheckedIndexedAccess) | x | x | 通过索引签名来描述那些键未知但值已知的对象
>[noUnusedLocals](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noUnusedLocals) | boolen | false |  用于检查是否有定义了但是没有使用的变量，对于这一点的检测，使用eslint可以在你书写代码的时候做提示，你可以配合使用
>[noUnusedParameters](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noUnusedParameters) | boolen | false | 用于检查是否有在函数体中没有使用的参数，这个也可以配合eslint来做检查
>[strict](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#strict) | boolen | false | 用于指定是否启动所有类型检查，如果设为true则会同时开启下面这几个严格类型检查  alwaysStrict, strictNullChecks, strictBindCallApply, strictFunctionTypes, strictPropertyInitialization, noImplicitAny, noImplicitThis, useUnknownInCatchVariab
>[strictBindCallApply](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#strictBindCallApply) | boolen | false | 会对bind、call和apply绑定的方法的参数的检测是严格检测的
>[strictFunctionTypes](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#strictFunctionTypes) | boolen | false | 用于指定是否使用函数参数双向协变检查
>[strictNullChecks](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#strictNullChecks) | boolen | false | null和undefined值不能赋给非这两种类型的值，别的类型也不能赋给他们，除了any类型。还有个例外就是undefined可以赋值给void类型
>[strictPropertyInitialization](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#strictPropertyInitialization) | boolen | false | 设为true后会检查类的非undefined属性是否已经在构造函数里初始化，如果要开启这项，需要同时开启strictNullChecks
>[useUnknownInCatchVariables](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#useUnknownInCatchVariables) | boolen | false | 允许将catch子句中变量的类型从' any '改为' unknown '的支持  

### <a id="modules"></a> Modules 模块
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>[allowUmdGlobalAccess](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#allowUmdGlobalAccess) | boolen | false | 将允许你在模块文件中以全局变量的形式访问 UMD 的导出
>[baseUrl](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#baseUrl) | string |  | baseUrl用于设置解析非相对模块名称的基本目录，相对模块不会受baseUrl的影响
>[module](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#module) | string | target === "ES6" ? "ES6" : "commonjs" | 用来指定编译后的js要使用的模块标准: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext' 
>[moduleResolution](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#moduleResolution) | node/classic | module === AMD / UMD / System / ES6 ? Classic : Node | 用于选择模块解析策略，有'node'和'classic'两种类型'  
>[noResolve](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noResolve) | boolen | false | 	不把 /// <reference``>或模块导入的文件加到编译文件列表。
>[paths](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#paths) | object |  |  指定模块的路径，和baseUrl有关联，和webpack中resolve.alias配置一样 
>[resolveJsonModule](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#resolveJsonModule) | boolen | false | 是否允许导入json文件
>[rootDir](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#rootDir) | string |  | 用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译 
>[rootDirs](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#rootDirs) | [] |  | 通过 rootDirs，你可以告诉编译器有许多“虚拟”的目录作为一个根目录。这将会允许编译器在这些“虚拟”目录中解析相对应的模块导入，就像它们被合并到同一目录中一样。用于运行时
>[typeRoots ](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#typeRoots ) | [] | node_modules/@types | typeRoots用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载; 当 typeRoots 被指定，仅有 在 typeRoots 下的包会被包含
>[types](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#types) | [] | 默认情况下，所有 可见 的 ”@types” 包都将包含在你的编译过程中 | types用来指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载进来



### <a id="emit"></a> Emit 
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>[declaration](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#declaration) | boolen | false | 用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件
>[declarationDir](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#declarationDir) |  |  | 生成.d.ts声明文件的输出路径。
>[declarationMap](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#declarationMap) | boolen | false | 指定是否为声明文件.d.ts生成map文件
>[downlevelIteration](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#downlevelIteration) | boolean | false |  当target为'ES5' or 'ES3'时，为'for-of', spread, and destructuring'中的迭代器提供完全支持
>[emitBOM](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#emitBOM) | boolen | false | 在输出文件的开头加入BOM头
>[emitDeclarationOnly](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#emitDeclarationOnly) | boolen | false | 只输出.d.ts文件,不会输出编译后的就是文件
>[importHelpers](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#importHelpers) | boolen | false | 指定是否引入tslib里的辅助工具函数
>[importsNotUsedAsValues](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#importsNotUsedAsValues) |  | remove,preserve,error | 可以来控制没被使用的导入语句将会被如何处理
>[inlineSourceMap](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#inlineSourceMap) | boolen | false | 指定是否将map文件的内容和js文件编译在同一个js文件中，如果设为true，则map的内容会以//# sourceMappingURL=然后拼接base64字符串的形式插入在js文件底部
>[inlineSources](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#inlineSources) | boolen | false | 用于指定是否进一步将.ts文件的内容也包含到输入文件中
>[mapRoot](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#mapRoot) | string | '' | mapRoot用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性
>[newLine](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#newLine) | crlf\lf |  | 当生成文件时指定行结束符： "crlf"（windows）或 "lf"（unix）
>[noEmit](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noEmit) | boolen | false | 不生成编译文件
>[noEmitHelpers](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noEmitHelpers) | boolen | false | 
>[noEmitOnError](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noEmitOnError) | boolen | false | 报错时不生成输出文件 
>[outDir](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#types) | string |  | outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹
>[outFile](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#types) | string |  | outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为"./dist/main.js"，则输出的文件为一个main.js文件。但是要注意，只有设置module的值为None,amd和system模块时才支持这个配置
>[preserveConstEnums](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#preserveConstEnums) | boolen | false | 保留 const和 enum声明
>[removeComments](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#removeComments) | boolen | false | 用于指定是否将编译后的文件中的注释删掉, 除了以 /!*开头的版权信息。 
>[sourceMap](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#types) | boolen | false | 用来指定编译时是否生成.map文件
>[sourceRoot ](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#sourceRoot ) | boolen | false | 
>[stripInternal](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#stripInternal) | boolen | false | 不对具有 /** @internal */ JSDoc注解的代码生成代码 


### <a id="javaScript-support"></a>JavaScript Support
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>[allowJs](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#allowJs) | boolen | false | 用来指定是否允许编译js文件，默认是false，即不编译js文件
>[checkJs](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#types) | boolen | false | 用来指定是否检查和报告js文件中的错误, 与 --allowJs配合使用 
>[maxNodeModuleJsDepth](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#maxNodeModuleJsDepth) | number | 0 | node_modules依赖的最大搜索深度并加载JavaScript文件。仅适用于 --allowJs。


### <a id="editor-support"></a>Editor Support 编辑器支持
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>[disableSizeLimit ](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#disableSizeLimit ) | boolen | false | 禁用JavaScript工程体积大小的限制 为了避免在处理大型JavaScript项目时可能出现的内存膨胀问题，TypeScript分配的内存有一个上限
>[plugins](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#plugins) |  |  | 可在编辑器内运行的语言服务插件列表 VS Code 可以让一个扩展 自动包含语言服务插件，所以你可以在编辑器中运行一些插件，而不需要在 tsconfig.json 中指定他们


### <a id="interop-constraints"></a>Interop Constraints 互操作约束
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>[allowSyntheticDefaultImports](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#allowSyntheticDefaultImports) | boolen | false | 用来指定允许从没有默认导出的模块中默认导入
>[esModuleInterop](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#esModuleInterop) | boolen | false | 默认情况下（未设置 `esModuleInterop` 或值为 false），TypeScript 像 ES6 模块一样对待 CommonJS/AMD/UMD
>[forceConsistentCasingInFileNames](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#forceConsistentCasingInFileNames) | boolen | false | 
>[isolatedModules](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#isolatedModules) | boolen | false | 指定是否将每个文件作为单独的模块
>[preserveSymlinks](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#preserveSymlinks) | boolen | false |  不把符号链接解析为其真实路径，具体可以了解下webpack和nodejs的symlink相关知识


### <a id="backwards-compatibility"></a>Backwards Compatibility  向后兼容
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>[charset](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#charset) |  | utf8 |  弃用
>[keyofStringsOnly](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#keyofStringsOnly) |  |  | 弃用 
>[noImplicitUseStrict](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noImplicitUseStrict) | boolen | false | 模块输出中不包含 "use strict"指令
>[noStrictGenericChecks](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noStrictGenericChecks) | boolen | false | 禁用在函数类型里对泛型签名进行严格检查
>[out](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#out) | boolen | false | 
>[suppressExcessPropertyErrors](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#suppressExcessPropertyErrors) | boolen | false | 阻止对对象字面量的额外属性检查
>[suppressImplicitAnyIndexErrors](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#suppressImplicitAnyIndexErrors) | boolen | false | 阻止 --noImplicitAny对缺少索引签名的索引对象报错



### <a id="language-and-environment"></a>Language and Environment 语言和环境
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>[emitDecoratorMetadata](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#experimentalDecorators) | boolen | false | 用于指定是否为装饰器提供元数据支持，关于元数据，也是ES6的新标准，可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引入ES2015.Reflect这个库 
>[experimentalDecorators](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#experimentalDecorators) | boolen | false | 用于指定是否启用实验性的装饰器特性
>[jsx](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#jsx) | string | Preserve | 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'.
>[jsxFactory](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#jsxFactory) |  |  | 指定生成目标为react JSX时，使用的JSX工厂函数，比如 React.createElement或 h
>[jsxFragmentFactory](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#jsxFragmentFactory) |  |  | 
>[jsxImportSource](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#jsxImportSource) |  |  | 
>[lib](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#lib) | string[] | false | lib用于指定要包含在编译中的库文件, 如果--lib没有指定默认注入的库的列表。默认注入的库为：针对于--target ES5：DOM，ES5，ScriptHost; 针对于--target ES6：DOM，ES6，DOM.Iterable，ScriptHost
>[noLib](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noLib) | boolen | false | 不包含默认的库文件, lib将被忽略
>[reactNamespace](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#reactNamespace) | string | React | 当目标为生成 "react" JSX时，指定 createElement和 __spread的调用对象
>[target](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#types) | string | ES3 | target用于指定编译后js文件里的语法应该遵循哪个JavaScript的版本的版本目标: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'.
>[useDefineForClassFields](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#useDefineForClassFields) | boolen | false | 将 class 声明中的字段语义从 [[Set]] 变更到 [[Define]]


### <a id="compiler-diagnostics"></a>Compiler Diagnostics  编译器诊断
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>[diagnostics](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#diagnostics) | boolen | false |  弃用
>[explainFiles](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#explainFiles) | boolen | false | 
>[extendedDiagnostics](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#extendedDiagnostics) | boolen | false | 显示详细的诊段信息
>[generateCpuProfile](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#generateCpuProfile) |  |  | 
>[listEmittedFiles](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#listEmittedFiles) | boolen | false | 打印出编译后生成文件的名字 
>[listFiles ](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#listFiles ) | boolen | false | 编译过程中打印文件名
>[traceResolution](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#traceResolution) | boolen | false | 生成模块解析日志信息


### <a id="projects"></a>Projects 项目 
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>[composite](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#composite) | boolen | false | 是否编译构建引用项目
>[disableReferencedProjectLoad](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#disableReferencedProjectLoad) | boolen | false | 禁用所有项目的自动加载。
>[disableSolutionSearching](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#disableSolutionSearching) | boolen | false | 在编辑器中搜索查找所有引用或跳转到定义等功能时，禁止包含复合项目，
>[disableSourceOfProjectReferenceRedirect](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#disableSourceOfProjectReferenceRedirect) | boolen | false | 是否禁用项目引用源重定向
>[incremental ](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#incremental ) | boolen | false | 是否启用增量编译，指再次编译时只编译增加的内容，
>[tsBuildInfoFile](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#tsBuildInfoFile) |  | .tsbuildinfo | 指定增量编译信息文件的位置，使用该功能时，必须开启incremental选项。



### <a id="output-formatting"></a>Output Formatting  输出格式
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>[noErrorTruncation](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#noErrorTruncation) | boolen | false | 不截短错误消息
>[preserveWatchOutput ](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#preserveWatchOutput ) | boolen | false | 保留watch模式下过时的控制台输出, 保留之前的编译日志
>[pretty](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#pretty) | boolen | true | 给错误和消息设置样式，使用颜色和上下文




### <a id="completeness"></a>Completeness 完整性
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>[skipDefaultLibCheck ](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#skipDefaultLibCheck ) | boolen | false | 忽略 库的默认声明文件的类型检查
>[skipLibCheck](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#skipLibCheck) | boolen | false | 忽略所有的声明文件（ *.d.ts）的类型检查


### <a id="watch-options"></a>Watch Options  监听选项
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>[assumeChangesOnlyAffectDirectDependencies](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/compilerOptions.md#assumeChangesOnlyAffectDirectDependencies) | boolen | false | 是否避免重新检查/重建所有真正可能受影响的文件，而只会重新检查/重建已更改的文件以及直接导入它们的文件

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



## <a id="watchOptions"></a>`Watch Options 配置 TypeScript 的 --watch工作方式`
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>[watchFile](#watchFile) |  | useFsEvents | 监视单个文件的策略
>[watchDirectory](#watchDirectory) |  | useFsEvents | 在缺乏递归文件监视功能的系统下如何监视整个目录树的策略
>[fallbackPolling](#fallbackPolling) |  | dynamicPriorityPolling | 使用文件系统事件时，此选项指定当系统用完本机文件观察器和/或不支持本机文件观察器时使用的轮询策略
>[synchronousWatchDirectory](#) | boolen | false | 在本机不支持递归观看的平台上同步调用回调，并更新目录观察者的状态
>[excludeDirectories](#) |  | useFsEvents | 使用排除目录来大幅减少 --watch 期间被监视的文件数量.
>[excludeFiles](#) |  | useFsEvents | 使用excludeFiles从被监视的文件中删除一组特定的文件。
>>
>>### <a id="watchFile"></a> `watchFile` 
>>选项  | 说明  
>>---- | ----- 
>>fixedPollingInterval | 以固定时间间隔每秒多次检查每个文件的更改。
>>priorityPollingInterval | 每秒多次检查每个文件的更改，但使用启发式方法检查某些类型的文件的频率低于其他文件。
>>dynamicPriorityPolling | 使用动态队列，其中不经常修改的文件将不那么频繁地检查。
>>useFsEvents | 尝试使用操作系统/文件系统的本机事件进行文件更改。
>>useFsEventsOnParentDirectory | 尝试使用操作系统/文件系统的本机事件来监听文件父目录的变化。
>>
>>### <a id="watchDirectory"></a> `watchDirectory` 
>>选项  | 说明  
>>---- | ----- 
>>ixedPollingInterval | 以固定时间间隔每秒多次检查每个目录的变化。
>>dynamicPriorityPolling | 使用动态队列，其中不经常修改的目录将不那么频繁地检查。
>>useFsEvents | 尝试使用操作系统/文件系统的本机事件进行目录更改。
>>
>>### <a id="fallbackPolling"></a> `fallbackPolling` 
>>选项  | 说明  
>>---- | ----- 
>>fixedPollingInterval | 以固定时间间隔每秒多次检查每个文件的更改。
>>priorityPollingInterval | 每秒多次检查每个文件的更改，但使用启发式方法检查某些类型的文件的频率低于其他文件。
>>dynamicPriorityPolling | 使用动态队列，其中不经常修改的文件将不那么频繁地检查。
>>synchronousWatchDirectory | 禁用对目录的延迟监视。

## <a id="typeAcquisition"></a>`typeAcquisition  类型获取仅对 JavaScript 项目很重要。。`
>选项 | 类型 | 默认值 | 说明  
>---- | ----- | -----  | -----
>[enable](#) | boolen | false | 提供在 JavaScript 项目中禁用类型获取的配置
>[include](#) | boolen | false | 使用 include 来指定应从绝对类型中使用哪些类型
>[exclude](#) | boolen | false | 提供用于禁用 JavaScript 项目中某个模块的类型获取的配置
>[disableFilenameBasedTypeAcquisition](#) | boolen | false | 是否禁用基于文件名的类型获取，TypeScript 的类型获取可以根据项目中的文件名推断应该添加哪些类型


