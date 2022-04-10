## 一. AST、CST
### 1.定义
>AST: 抽象语法树（Abstract Syntax Tree，AST），或简称语法树（Syntax tree），是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。

>CST: 具体语法树 语法(程序编写规则)的树形表示
### 2. 区别
AST: 解析器不是100%与源码匹配  
CST: 解析器100%覆盖所有代码结构生成树(包括空格，标点符号，注释)

## 二. AST
>第一步，词法分析，也叫做扫描scanner。  

它读取我们的代码，然后把它们按照预定的规则合并成一个个的标识tokens。同时，它会移除空白符，注释，等。遇到空格，操作符，或者特殊符号的时候，它会认为一个话已经完成了,最后，整个代码将被分割进一个tokens列表（或者说一维数组）。

`语法单元`
* 数字：JavaScript 中的科学记数法以及普通数组都属于语法单元.
* 括号：『(』『)』只要出现,不管任何意义都算是语法单元
* 标识符：连续字符,常见的有变量,常量(例如: null true),关键字(if break)等等
* 运算符：+、-、*、/等等
* 当然还有注释,中括号等

`事例`
```js
const add = (a, b) => a + b
```
`解析结果`
```
[
  { "type": KeywordTokenType {
        "label": 'const',
    }, 
    "value": "const" 
  },
  { 
    "type": TokenType {
        label: 'name',
    }, 
    "value": "add" 
  },
  { 
    "type": TokenType {
        "label": '=',
    }, 
    "value": "=" 
  },
  ...
]
```

>第二步，语法分析，也解析器。  

它会将词法分析出来的数组转化成树形的表达形式。同时，验证语法，语法如果有错的话，抛出语法错误。

`事例`
```js
const add = (a, b) => a + b
```

`分析`
* 首先这段代码的整体是变量生命(VariableDeclaration)
* 而变量被声明为一个箭头函数表达式(ArrowFunctionExpression):
* 箭头函数表达式后面其实是一个二元运算符或者叫二元表达式(BinaryExpression):

`最终得到`
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "add"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 12,
            "end": 27,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 13,
                "end": 14,
                "name": "a"
              },
              {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "name": "b"
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 22,
              "end": 27,
              "left": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "name": "a"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "name": "b"
              }
            }
          }
        }
      ],
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```

在线转译[AST](https://astexplorer.net/)工具, 不仅仅支持JS, 支持多种语言

## 三. 应用
 * 编辑器的错误提示、代码格式化、代码高亮、代码自动补全；
 * elint、pretiier 对代码错误或风格的检查；
 * webpack 通过 babel 转译 javascript 语法；

## 四.  Node

所有节点类型都实现以下接口：

```ts
interface Node {
  type: string;
  range?: [number, number];
  loc?: SourceLocation;
}
```

该type字段是表示AST变体类型的字符串。该loc字段表示节点的源位置信息。如果解析器没有生成有关节点源位置的信息，则该字段为null;否则它是一个对象，包括一个起始位置（被解析的源区域的第一个字符的位置）和一个结束位置.

```ts
interface SourceLocation {
    start: Position;
    end: Position;
    source?: string | null;
}
```

每个Position对象由一个line数字（1索引）和一个column数字（0索引）组成：

```ts
interface Position {
    line: uint32 >= 1;
    column: uint32 >= 0;
}
```


### Programs

```ts
interface Program <: Node {
    type: "Program";
    sourceType: 'script' | 'module';
    body: StatementListItem[] | ModuleItem[];
}
```

表示一个完整的源代码树。

## Scripts and Modules

源代码数的来源包括两种，一种是script脚本，一种是modules模块

当为script时，body为`StatementListItem`。
当为modules时，body为`ModuleItem`。

类型`StatementListItem`和`ModuleItem`类型如下。

```ts
type StatementListItem = Declaration | Statement;
type ModuleItem = ImportDeclaration | ExportDeclaration | StatementListItem;
```

[详细的每个AST节点类型点击这里](https://github.com/Xiao2GouZi/logger/blob/ast/ast/base.md)




## 五. 工具
1. recast
2. [jscodeshift](https://github.com/Xiao2GouZi/logger/tree/git/ast/jscodeshift)
3. [Babylon](/babel/ast/babylon)
4. [babel-parse](https://github.com/Xiao2GouZi/logger/tree/git/ast/babel-parse)


