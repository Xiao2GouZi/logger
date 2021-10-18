
* [declare var 声明全局变量](#declare-var)
* [declare function 声明全局方法](#declare-function)
* [declare class 声明全局类](#declare-class)
* [declare enum 声明全局枚举类型](#declare-enum)
* [declare namespace 声明（含有子属性的）全局对象](#declare-namespace)
* [interface 和 type 声明全局类型](#interface-type)

* [npm 包 export 导出变量](#npm-export)
* [npm 包 export namespace 导出（含有子属性的）对象](#npm-export-namespace)
* [npm 包 export default ES6 默认导出](#npm-export-default-ES6)
* [npm 包 export = commonjs 导出模块](#npm-export-commonjs)

* [export as namespace UMD 库声明全局变量](#typescript-stage)
* [declare global 扩展全局变量](#typescript-stage)
* [declare module 扩展模块](#typescript-stage)
* [/// <reference /> 三斜线指令](#typescript-stage)

### <a id="declare-var"></a> `declare var 声明全局变量`
```ts
//global.d.ts
declare var studentInfo: {
  name: string,
  address: string
}

// index.ts
studentInfo.name = "人名小学"

```

### <a id="declare-function"></a> `declare function 声明全局方法`
```ts
//global.d.ts
declare function getStudentInfo(name: string, address: string): {
  name: string,
  address: string
}

//index.ts
const primaryStudentInfo = getStudentInfo("人名小学", "隔壁村")
console.log(primaryStudentInfo.address)
```

### <a id="declare-class"></a> `declare class 声明全局类`
```ts
//global.d.ts
interface IStudentInfo {
  name: string,
  sex: string
}

declare class Student {
  constructor(name: string)
  setStudentInfo(sex: string): IStudentInfo
}

//index.ts
const schoolInfo = new Student("小明")
schoolInfo.setStudentInfo("男")

```

### <a id="declare-enum"></a> `declare enum 声明全局枚举类型`
```ts
//global.d.ts
interface IStudentInfo {
  name: string,
  sex: ESex
}

declare class Student {
  constructor(name: string)
  setStudentInfo(sex: ESex): IStudentInfo
}

declare enum ESex {
  Boy = "男",
  Girl = "女"
}

//index.ts
const schoolInfo = new Student("小明")
schoolInfo.setStudentInfo(ESex.Boy)
```


### <a id="declare-namespace"></a> `declare namespace 声明（含有子属性的）全局对象`
```ts
//namespace 是 ts 早期时为了解决模块化而创造的关键字，中文称为命名空间
```

### <a id="interface-type"></a> `interface 和 type 声明全局类型`
```ts

```


### 注:在 npm 包的声明文件中，使用 declare 不再会声明一个全局变量，而只会在当前文件中声明一个局部变量。只有在声明文件中使用 export 导出，然后在使用方 import 导入后，才会应用到这些类型声明
### <a id="npm-export"></a> `npm 包 export 导出变量`
```ts
//type/student/index.d.ts
export interface IStudentInfo {
  name: string,
  sex: ESex
}

export declare class Student {
  constructor(name: string)
  setStudentInfo(sex: ESex): IStudentInfo
}

export declare enum ESex {
  Boy = "男",
  Girl = "女"
}

// npm install @types/student --save-dev
//index.ts
import { IStudentInfo, Student, ESex } from "student"

```

### <a id="npm-export-namespace"></a> `npm 包 export namespace 导出（含有子属性的）对象`
```ts
//type/student/index.d.ts
export namespace student {
    const name: string;
    namespace studentInfo {
        function getStudentName(): string;
    }
}

// npm install @types/student --save-dev
//index.ts
import { student } from "student"
student.name
student.studentInfo.getStudentName()
```

### <a id="npm-export-default-ES6"></a> `npm 包 export default ES6 默认导出`
```ts
//type/student/index.d.ts
export default function getStudentName(): string

// npm install @types/student --save-dev
//index.ts
import GetStudentName from "student"
getStudentName()
```

### <a id="npm-export-commonjs"></a> `npm 包 export = commonjs 导出模块`
```ts

```

### <a id="declare-function"></a> `declare function 声明全局方法`
```ts

```

### <a id="declare-function"></a> `declare function 声明全局方法`
```ts

```