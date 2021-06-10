https://astexplorer.net/

## 一. 区别 AST、CST
AST 抽象语法树  
CST 具体语法树  
#TODO: 完善AST与CST的区别
### AST与CST的区别
AST: 解析器不是100%与源码匹配  
CST: 解析器100%覆盖所有代码结构生成树


## 二. AST、CST
>第一步，词法分析，也叫做扫描scanner。  

它读取我们的代码，然后把它们按照预定的规则合并成一个个的标识tokens。同时，它会移除空白符，注释，等。最后，整个代码将被分割进一个tokens列表（或者说一维数组）。

```

```

>第二步，语法分析，也解析器。  

它会将词法分析出来的数组转化成树形的表达形式。同时，验证语法，语法如果有错的话，抛出语法错误。

```


```

## 三. 工具
1. recast
2. jscodeshift
3. Babylon
4. babel-parse


