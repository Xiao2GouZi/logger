
# Configuration File Types  配置文件类型

Babel 有两种并行的配置文件方式，可以一起使用，也可以单独使用

## Project-wide configuration 全项目配置
```js
babel.config.json
```
支持文件拓展: `.json, .js, .cjs, .mjs`

* 你是否采用的是单一仓库（monorepo: 可以理解为在一个项目中会有多个子工程）模式？
* 你是否需要编译 node_modules？


## File-relative configuration  文件相关配置
```js
.babelrc.json
```
支持文件拓展: `.babelrc, .js, .cjs, .mjs`
* 你的配置文件是否仅适用于项目的某个部分？
* 需要在子目录/文件中运行一些特定的转换，比如你可能不希望一些第三方库被转码







## 应用场景


```js
Project-wide configuration  "全项目配置"

babel.config.json 
babel.config.js
babel.config.cjs
babel.config.mjs
```
* 你是否采用的是单一仓库（monorepo: 可以理解为在一个项目中会有多个子工程）模式？
* 你是否需要编译 node_modules？

```js
File-relative configuration   " "

 
```
