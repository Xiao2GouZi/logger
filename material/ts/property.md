
# tsconfig.json文件里的顶级属性  [compilerOptions](#compilerOptions) 、 [files](#files) 、 [include](#include) 、 [exclude](#exclude) 、 [extends](#extends) 、 [compileOnSave](#compileOnSave) 、 [references](#references)






## <a id="compilerOptions"></a> `compilerOptions`


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

