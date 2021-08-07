## <a id="allowUnreachableCode"></a> `allowUnreachableCode`  
>```js
>function fn(n: number) {
>  if (n > 5) {
>    return true;
>  } else {
>    return false;
>  }
>  return true;
>}
>```
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "allowUnreachableCode": false
>  }
>}
>```
>```js
>function fn(n: number) {
>  if (n > 5) {
>    return true;
>  } else {
>    return false;
>  }
>  return true;
>  /** Unreachable code detected. */
>}
>```

## <a id="allowUnusedLabels"></a> `allowUnusedLabels`  
>```js
>function verifyAge(age: number) {
>  // Forgot 'return' statement
>  if (age > 18) {
>    verified: true;
> /** Unused label. */
>  }
>}
>```

## <a id="exactOptionalPropertyTypes"></a> `exactOptionalPropertyTypes`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "exactOptionalPropertyTypes": true
>  }
>}
>```
>```ts
>interface UserDefaults {
>  colorThemeOverride?: "dark" | "light";
>}
>
>const userInfo: UserDefaults = {
>  colorThemeOverride: "dark"
>}
>
>/** Type 'undefined' is not assignable to type '"dark" | "light"'. */
>const userInfo:UserDefaults = {
>  colorThemeOverride: undefined
>}
>```

## <a id="noFallthroughCasesInSwitch"></a> `noFallthroughCasesInSwitch`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "noFallthroughCasesInSwitch": true
>  }
>}
>```
>```ts
>const a: number = 6;
>
>switch (a) {
>  case 0:
>    console.log("even");
>  case 1:
>    console.log("odd");
>    break;
>}
>
>  // xxx - error TS7029: Fallthrough case in switch.
>  // 30   case 0:
>  //     ~~~~~~~
>
>```

## <a id="noImplicitAny"></a> `noImplicitAny`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "noImplicitAny": true
>  }
>}
>```
>```ts
>const setName = (age) => {
>  return age + 1
>}
>
>// xx - error TS7006: Parameter 'age' implicitly has an 'any' type.
>// 11 const setName = (age) => {
>//                    ~~~
>```

## <a id="noImplicitOverride"></a> `noImplicitOverride`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "noImplicitOverride": true
>  }
>}
>```
>```ts
>class Study {
>  info() { }
>}
>
>class School extends Study {
>  override sinfoetup() { }
>}
>
>class Classes extends Study {
>  info() { }
>}
>
>// xxx - error TS4114: This member must have an 'override' modifier because it overrides a member in the base >class 'Album'.
>
>//   info() { }
>//   ~~~~~
>
>```

## <a id="noImplicitReturns"></a> `noImplicitReturns`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "noImplicitReturns": true
>  }
>}
>```
>```ts
>const setName = (age: number): number => {
>  if (age > 10) {
>    return age + 1
>  }
>}
>//xxx - error TS7030: Not all code paths return a value.
>//
>//const setName = (age: number): number => {
>//                               ~~~~~~
>```

## <a id="noImplicitThis"></a> `noImplicitThis`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "noImplicitThis": true
>  }
>}
>```
>```ts
>class Study {
>  age: number
>  sex: "男" | "女"
>
>  constructor(age: number, sex: "男" | "女") {
>    this.age = age
>    this.sex = sex
>  }
>
>  getStudyInfo() {
>    return function () {
>      return {
>        age: this.age,
>        sex: this.sex
>      }
>    }
>  }
>}
>
>//xxx - error TS2683: 'this' implicitly has type 'any' because it does not have a type annotation.
>//
>//        age: this.age,
>//                ~~~~
>//
>//xxx - error TS2683: 'this' implicitly has type 'any' because it does not have a type annotation.
>//
>//         sex: this.sex
>//                ~~~~
>```

## <a id="noPropertyAccessFromIndexSignature"></a> `noPropertyAccessFromIndexSignature`
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "noPropertyAccessFromIndexSignature": true
>  }
>}
>```
>```ts
>interface StudyInfo {
>  sex: "男" | "女",
>  age: number
>  [key: string]: string | number;
>}
>
>const settings: StudyInfo = {
>  sex: "女",
>  age: 12
>}
>
>//正常
>settings["userName"] = '小明'
>
>//异常
>settings.userName = "小黑"
>//xxx - error TS4111: Property 'userName' comes from an index signature, so it must be //>accessed with ['userName'].
>//
>// settings.userName = "小黑"
>//          ~~~~~~~~
>```

## <a id="noUnusedLocals"></a> `noUnusedLocals`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "noUnusedLocals": true
>  }
>}
>```
>```ts
>class Study {
>  getStudyInfo() {
>    const nameFormat = '12'
>  }
>}
>
>//xxx - error TS6133: 'nameFormat' is declared but its value is never read.
>//
>//     const nameFormat = '12'
>//           ~~~~~~~~~~
>```

## <a id="noUnusedParameters"></a> `noUnusedParameters`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "noUnusedParameters": true
>  }
>}
>```
>```ts
>class Study {
>  age: number
>  sex: "男" | "女"
>
>  constructor(age: number, sex: "男" | "女") {
>    this.age = age
>    this.sex = sex
>  }
>
>  getStudyInfo(name: string, height: number) {
>    return {
>      age: this.age,
>      sex: this.sex,
>      name
>    }
>  }
>}
>
>//xxx - error TS6133: 'height' is declared but its value is never read.
>//
>//   getStudyInfo(name: string, height: number) {
>//                              ~~~~~~
>```

## <a id="strictBindCallApply"></a> `strictBindCallApply`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "strictBindCallApply": true
>  }
>}
>```
>```ts
>const setUserName = (name: string) => {
>  return name
>}
>
>//正常
>const studyName2 = setUserName.call('小红', undefined)
>//异常
>const studyName1 = setUserName.call('小明', false)
>
>//xxx - error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string'.
>//
>// const studyName1 = setUserName.call('小明', false)
>//                                           ~~~~~
>```

## <a id="strictFunctionTypes"></a> `strictFunctionTypes`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "strictFunctionTypes": true
>  }
>}
>```
>```ts
>function fn(x: string) {
>  console.log("Hello, " + x.toLowerCase());
>}
>
>type StringOrNumberFunc = (ns: string | number) => void;
>
>// Unsafe assignment is prevented
>let func: StringOrNumberFunc = fn;
>//xxx - error TS2322: Type '(x: string) => void' is not assignable to type 'StringOrNumberFunc'.
>//  Types of parameters 'x' and 'ns' are incompatible.
>//    Type 'string | number' is not assignable to type 'string'.
>//      Type 'number' is not assignable to type 'string'.
>//
>// let func: StringOrNumberFunc = fn;
>//     ~~~~
>```

## <a id="strictNullChecks"></a> `strictNullChecks`
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "strictNullChecks": true
>  }
>}
>```
>```ts
>const studys = [{
>  name: '小明',
>  age: 12
>}, {
>  name: '小飞',
>  age: 14
>}, {
>  name: '小白',
>  age: 10
>}]
>
>const studyInfo = studys.find(item => item.age > 15)
>studyInfo.age
>
>// - error TS2532: Object is possibly 'undefined'.
>//
>// studyInfo.age
>// ~~~~~~~~~
>```

## <a id="strictPropertyInitialization"></a> `strictPropertyInitialization`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "strictPropertyInitialization": true
>  }
>}
>```
>```ts
>class Study {
>  age: number
>  sex: "男" | "女"
>
>  constructor(sex: "男" | "女") {
>    this.sex = sex
>  }
>}
>
>//xxx - error TS2564: Property 'age' has no initializer and is not definitely assigned in the //>constructor.
>//
>//   age: number
>//   ~~~
>
>```

## <a id="useUnknownInCatchVariables"></a> `useUnknownInCatchVariables`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "strictPropertyInitialization": true
>  }
>}
>```
>``` ts
>try {
>  // ...
>} catch (err) {
>  // We have to verify err is an
>  // error before using it as one.
>  if (err instanceof Error) {
>    console.log(err.message);
>  }
>}
>```

## <a id="baseUrl"></a> `baseUrl` 
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "baseUrl": "./"
>  }
>}
>```
>```ts
>demo
>├── lib
>├── src
>│   └── index.ts
>└── tsconfig.json
> // TypeScript 将会从首先寻找与 tsconfig.json 处于相同目录的文件。
>```


## <a id="module"></a> `module`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "module": "CommonJS"
>  }
>}
>```
>```ts
>import Lodash from 'lodash'
>
>interface STUDYINFO {
>  age: number,
>  name: string
>}
>
>const getStudy = (listInfo: STUDYINFO[]) => {
>  const index = Lodash.findIndex(listInfo, (item) => {
>    return item.name === "小黑"
>  })
>  return index
>}
>
>export default getStudy
>```
>>### CommonJS
>>```js
>>"use strict";
>>var __importDefault = (this && this.__importDefault) || function (mod) {
>>    return (mod && mod.__esModule) ? mod : { "default": mod };
>>};
>>Object.defineProperty(exports, "__esModule", { value: true });
>>var lodash_1 = __importDefault(require("lodash"));
>>var getStudy = function (listInfo) {
>>    var index = lodash_1.default.findIndex(listInfo, function (item) {
>>        return item.name === "小黑";
>>    });
>>    return index;
>>};
>>exports.default = getStudy;
>>```
>>### UMD
>>```js
>>var __importDefault = (this && this.__importDefault) || function (mod) {
>>    return (mod && mod.__esModule) ? mod : { "default": mod };
>>};
>>(function (factory) {
>>    if (typeof module === "object" && typeof module.exports === "object") {
>>        var v = factory(require, exports);
>>        if (v !== undefined) module.exports = v;
>>    }
>>    else if (typeof define === "function" && define.amd) {
>>        define(["require", "exports", "lodash"], factory);
>>    }
>>})(function (require, exports) {
>>    "use strict";
>>    Object.defineProperty(exports, "__esModule", { value: true });
>>    var lodash_1 = __importDefault(require("lodash"));
>>    var getStudy = function (listInfo) {
>>        var index = lodash_1.default.findIndex(listInfo, function (item) {
>>            return item.name === "小黑";
>>        });
>>        return index;
>>    };
>>    exports.default = getStudy;
>>});
>>
>>```
>>### AMD
>>```js
>>var __importDefault = (this && this.__importDefault) || function (mod) {
>>    return (mod && mod.__esModule) ? mod : { "default": mod };
>>};
>>define(["require", "exports", "lodash"], function (require, exports, lodash_1) {
>>    "use strict";
>>    Object.defineProperty(exports, "__esModule", { value: true });
>>    lodash_1 = __importDefault(lodash_1);
>>    var getStudy = function (listInfo) {
>>        var index = lodash_1.default.findIndex(listInfo, function (item) {
>>            return item.name === "小黑";
>>        });
>>        return index;
>>    };
>>    exports.default = getStudy;
>>});
>>```
>>### System
>>```js
>>System.register(["lodash"], function (exports_1, context_1) {
>>    "use strict";
>>    var lodash_1, getStudy;
>>    var __moduleName = context_1 && context_1.id;
>>    return {
>>        setters: [
>>            function (lodash_1_1) {
>>                lodash_1 = lodash_1_1;
>>            }
>>        ],
>>        execute: function () {
>>            getStudy = function (listInfo) {
>>                var index = lodash_1.default.findIndex(listInfo, function (item) {
>>                    return item.name === "小黑";
>>                });
>>                return index;
>>            };
>>            exports_1("default", getStudy);
>>        }
>>    };
>>});
>>```
>>### ESNext
>>```js
>>import Lodash from 'lodash';
>>var getStudy = function (listInfo) {
>>    var index = Lodash.findIndex(listInfo, function (item) {
>>        return item.name === "小黑";
>>    });
>>    return index;
>>};
>>export default getStudy;
>>```
>>### es2015
>>```js
>>import Lodash from 'lodash';
>>var getStudy = function (listInfo) {
>>    var index = Lodash.findIndex(listInfo, function (item) {
>>        return item.name === "小黑";
>>    });
>>    return index;
>>};
>>export default getStudy;
>>```
>>### ES2020
>>```js
>>import Lodash from 'lodash';
>>var getStudy = function (listInfo) {
>>    var index = Lodash.findIndex(listInfo, function (item) {
>>        return item.name === "小黑";
>>    });
>>    return index;
>>};
>>export default getStudy;
>>```
>>### None
>>```js
>>"use strict";
>>var __importDefault = (this && this.__importDefault) || function (mod) {
>>    return (mod && mod.__esModule) ? mod : { "default": mod };
>>};
>>Object.defineProperty(exports, "__esModule", { value: true });
>>var lodash_1 = __importDefault(require("lodash"));
>>var getStudy = function (listInfo) {
>>    var index = lodash_1.default.findIndex(listInfo, function (item) {
>>        return item.name === "小黑";
>>    });
>>    return index;
>>};
>>exports.default = getStudy;
>>```

## <a id="paths"></a> `paths`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>    "baseUrl": "src", 
>    "paths": {
>      "common": [
>        "./common/index"
>      ]
>    }
>  }
>}
>```
>```js
>demo
>├── src
>|   └── common
>|       └── index.ts
>│   └── index.ts
>└── tsconfig.json
>
>import Common from 'common'
>
>Common.getStudy([{ age: 12, name: '122' }])
>
>```

## <a id="resolveJsonModule"></a> `resolveJsonModule`
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>     "resolveJsonModule": true
>  }
>}
>```
>如果不设置 "resolveJsonModule": true  就默认不支持
>```ts
>import StudentInfo from 'studentInfo.json'
>
>//xxx - error TS2732: Cannot find module 'studentInfo.json'. Consider using >'--resolveJsonModule' to import module with '.json' //extension.
>//
>// import StudentInfo from 'studentInfo.json'
>//                          ~~~~~~~~~~~~~~~~~~
>```

## <a id="rootDir"></a> `rootDir` 
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>     "rootDir": "./",
>     "outDir": "./dist"
>  }
>}
>``` 
>原目录
>```ts
>demo
>├── src
>|   └── common
>|       └── index.ts
>│   └── index.ts
>└── tsconfig.json
>```
>在没有设置 rootDir  编译后的目录如下 
>```ts
>demo
>├── dist
>|   └── common
>|       └── index.js
>│   └── index.js
>├── src
>|   └── common
>|       └── index.ts
>│   └── index.ts
>└── tsconfig.json
>```
>在没有设置 rootDir  编译后的目录如下 
>```ts
>demo
>├── dist
>|   └── src
>|       └── common
>|           └── index.js
>│       └── index.js
>├── src
>|   └── common
>|       └── index.ts
>│   └── index.ts
>└── tsconfig.json
>```

## <a id="rootDirs"></a> `rootDirs`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>     "rootDir": "./",
>     "rootDirs": [
>      "src/common",
>      "src/views",
>    ]
>  }
>}
>``` 
>```ts
>demo
>原目录
>├── src
>|   └── common
>|       └── common.ts
>|   └── views
>|       └── app1.ts
>|       └── app2.ts
>└── tsconfig.json
>``` 
>
>配置  "rootDirs": ["src/common", "src/views"]
>```ts
>common.ts
>
>export function name(): number {
>  return 1
>}
>
>app1.ts
>
>import * as Common from './common'
>
>console.log(' app1 ---- Common.name:', Common.name())
>
>```

## <a id="declaration"></a> `declaration`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>     "declaration": true,
>     "declarationDir": "./lib", 
>     "emitDeclarationOnly": true
>  }
>}
>``` 
>
>```ts
> index.ts
>export let name = "小飞";
>
>index.d.ts
>export declare let name: string;
>
>```

## <a id="declarationMap"></a> `declarationMap`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>     "declaration": true,
>     "declarationDir": "./lib", 
>     "declarationMap": true
>  }
>}
>``` 
>```ts
>demo
>原目录
>├── src
>|   └── index.ts
>└── tsconfig.json
>```
>设置 "declarationMap": true
>```ts
>demo
>├── dist
>│   └── index.js
>├── lib
>│   └── index.d.ts
>│   └── index.d.ts.map
>├── src
>|   └── index.ts
>└── tsconfig.json
>```
>index.ts
>```ts
>export let name = "小飞";
>
>```
>index.d.ts
>```ts
>export declare let name: string;
>
>```
>index.d.ts.map
>```ts
>{
>  "version": 3,
>  "file": "index.d.ts",
>  "sourceRoot": "",
>  "sources": [
>    "../src/index.ts"
>  ],
>  "names": [],
>  "mappings": "AAIA,eAAO,IAAI,IAAI,QAAO,CAAC"
>}
>
>```

## <a id="downlevelIteration"></a> `downlevelIteration`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>     "downlevelIteration": true
>  }
>}
>``` 
>```js
>const str = "Hello!";
>for (const s of str) {
>  console.log(s);
>}
>```
>for/of 循环将被降级为传统的 for 循环
>```js
>"use strict";
>var studyName = "xiaohei";
>for (var _i = 0, studyName_1 = studyName; _i < studyName_1.length; _i++) {
>    var s = studyName_1[_i];
>    console.log(s);
>}
>```
>配置downlevelIteration之后, 将会使用辅助函数来检查 Symbol.iterator 的实现, 如果没有实现，则将会回退到基于索引的迭代
>```js
>"use strict";
>var __values = (this && this.__values) || function(o) {
>    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
>    if (m) return m.call(o);
>    if (o && typeof o.length === "number") return {
>        next: function () {
>            if (o && i >= o.length) o = void 0;
>            return { value: o && o[i++], done: !o };
>        }
>    };
>    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
>};
>var e_1, _a;
>var studyName = "xiaohei";
>try {
>    for (var studyName_1 = __values(studyName), studyName_1_1 = studyName_1.next(); !studyName_1_1.done; studyName_1_1 = studyName_1.>next()) {
>        var s = studyName_1_1.value;
>        console.log(s);
>    }
>}
>catch (e_1_1) { e_1 = { error: e_1_1 }; }
>finally {
>    try {
>        if (studyName_1_1 && !studyName_1_1.done && (_a = studyName_1.return)) _a.call(studyName_1);
>    }
>    finally { if (e_1) throw e_1.error; }
>}
>```

## <a id="importHelpers"></a> `importHelpers`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>     "importHelpers": true,
>      "downlevelIteration": true
>  }
>}
>``` 
>index.ts
>```ts
>export function fn(arr: string[]) {
>  const names = ["小黑", "小李", "小猫"]
>  const classesName = ["小兰", ...arr]
>}
>```
>index.js
>```ts
>"use strict";
>Object.defineProperty(exports, "__esModule", { value: true });
>exports.fn = void 0;
>var tslib_1 = require("tslib");
>function fn(arr) {
>    var names = ["小黑", "小李", "小猫"];
>    var classesName = tslib_1.__spreadArray(["小兰"], tslib_1.__read(arr));
>}
>exports.fn = fn;
>```

## <a id="importsNotUsedAsValues"></a> `importsNotUsedAsValues`  
属性值 | 说明  
---- | -----
remove | 这是现在的行为 —— 丢弃这些导入语句。这仍然是默认行为，没有破坏性的更改
preserve | 它将会保留所有的语句，即使是从来没有被使用。可能导致imports/side-effects保留
error | 它将会保留所有的导入（与 preserve 选项相同）语句，但是当一个值的导入仅仅用于类型时将会抛出错误。如果你想确保没有意外导入任何值，这会是有用的，但是对于副作用，你仍然需要添加额外的导入语法。

## <a id="inlineSourceMap"></a> `inlineSourceMap`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>     "inlineSourceMap": true,
>  }
>}
>``` 
>index.ts
>```ts
>const setAge = (age: number): number => {
>  return age + 1
>}
>```
>index.js
>```ts
>"use strict";
>var setAge = function (age) {
>    return age + 1;
>};
>//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kYXNoLXRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbG9kYXNoLXRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQTZDQSxJQUFNLE1BQU0sR0FBRyxVQUFDLEdBQVc7SUFDekIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFBO0FBQ2hCLENBQUMsQ0FBQSJ9
>```

## <a id="inlineSources"></a> `inlineSources`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>     "inlineSourceMap": true,
>     "inlineSources": true
>  }
>}
>``` 
>index.ts
>```ts
>const setAge = (age: number): number => {
>  return age + 1
>}
>```
>index.js
>````ts
>"use strict";
>var setAge = function (age) {
>    return age + 1;
>};
>//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kYXNoLXRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbG9kYXNoLXRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQTZDQSxJQUFNLE1BQU0sR0FBRyxVQUFDLEdBQVc7SUFDekIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFBO0FBQ2hCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBTdHVkZW50SW5mbyBmcm9tICdzdHVkZW50SW5mby5qc29uJ1xuXG4vLyBpbXBvcnQgTG9kYXNoIGZyb20gJ2xvZGFzaCdcblxuLy8gZXhwb3J0IGxldCBuYW1lID0gXCLlsI/po55cIjtcblxuLy8gY29uc3Qgc3R1ZHlOYW1lID0gXCJ4aWFvaGVpXCI7XG4vLyBmb3IgKGNvbnN0IHMgb2Ygc3R1ZHlOYW1lKSB7XG4vLyAgIGNvbnNvbGUubG9nKHMpO1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZm4oYXJyOiBudW1iZXJbXSkge1xuLy8gICBjb25zdCBhcnIyID0gWzEsIC4uLmFycl07XG4vLyAgIGNvbnN0IG5hbWVzID0gW1wi5bCP6buRXCIsIFwi5bCP5p2OXCIsIFwi5bCP54yrXCJdXG4vLyAgIGNvbnN0IGNsYXNzZXNOYW1lID0gW1wi5bCP5YWwXCIsIC4uLm5hbWVzLF1cbi8vIH1cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZm4oYXJyOiBzdHJpbmdbXSkge1xuLy8gICBjb25zdCBuYW1lcyA9IFtcIuWwj+m7kVwiLCBcIuWwj+adjlwiLCBcIuWwj+eMq1wiXVxuLy8gICBjb25zdCBjbGFzc2VzTmFtZSA9IFtcIuWwj+WFsFwiLCAuLi5hcnJdXG4vLyB9XG5cblxuXG5cbi8vIGludGVyZmFjZSBTVFVEWUlORk8ge1xuLy8gICBhZ2U6IG51bWJlcixcbi8vICAgbmFtZTogc3RyaW5nXG4vLyB9XG5cbi8vIGNvbnN0IGdldFN0dWR5ID0gKGxpc3RJbmZvOiBTVFVEWUlORk9bXSkgPT4ge1xuLy8gICBTdHVkZW50SW5mby5pbmZvXG4vLyAgIGNvbnN0IGluZGV4ID0gTG9kYXNoLmZpbmRJbmRleChsaXN0SW5mbywgKGl0ZW0pID0+IHtcbi8vICAgICByZXR1cm4gaXRlbS5uYW1lID09PSBcIuWwj+m7kVwiXG4vLyAgIH0pXG4vLyAgIHJldHVybiBpbmRleFxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBnZXRTdHVkeVxuXG5cbi8vIExvZGFzaC5rZXlzXG5cblxuY29uc3Qgc2V0QWdlID0gKGFnZTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIGFnZSArIDFcbn1cblxuLy8gY29uc3Qgc2V0TmFtZSA9IChhZ2U6IG51bWJlcik6IG51bWJlciA9PiB7XG4vLyAgIHJldHVybiBhZ2UgKyAxXG4vLyB9XG5cbi8vIGNvbnN0IGMgPSAnMidcblxuLy8gY29uc3Qgc2V0VXNlck5hbWUgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4vLyAgIHJldHVybiBuYW1lXG4vLyB9XG5cbi8vIGNvbnN0IHN0dWR5TmFtZTEgPSBzZXRVc2VyTmFtZS5jYWxsKCflsI/mmI4nLCBmYWxzZSlcbi8vIGNvbnN0IHN0dWR5TmFtZTIgPSBzZXRVc2VyTmFtZS5jYWxsKCflsI/nuqInLCB1bmRlZmluZWQpXG4vLyBjb25zdCBzdHVkeU5hbWUzID0gc2V0VXNlck5hbWUuY2FsbCgn5bCP57qiJywgMSlcblxuXG4vLyBjb25zb2xlLmxvZyhzdHVkeU5hbWUxKVxuLy8gY29uc29sZS5sb2coc3R1ZHlOYW1lMilcblxuXG4vLyBjb25zdCBzdHVkeXMgPSBbe1xuLy8gICBuYW1lOiAn5bCP5piOJyxcbi8vICAgYWdlOiAxMlxuLy8gfSwge1xuLy8gICBuYW1lOiAn5bCP6aOeJyxcbi8vICAgYWdlOiAxNFxuLy8gfSwge1xuLy8gICBuYW1lOiAn5bCP55m9Jyxcbi8vICAgYWdlOiAxMFxuLy8gfV1cblxuLy8gY29uc3Qgc3R1ZHlJbmZvID0gc3R1ZHlzLmZpbmQoaXRlbSA9PiBpdGVtLmFnZSA+IDE1KVxuLy8gc3R1ZHlJbmZvLmFnZVxuXG5cblxuLy8gaW50ZXJmYWNlIFN0dWR5SW5mbyB7XG4vLyAgIHNleDogXCLnlLdcIiB8IFwi5aWzXCIsXG4vLyAgIGFnZTogbnVtYmVyXG4vLyAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcbi8vIH1cblxuLy8gY29uc3Qgc2V0dGluZ3M6IFN0dWR5SW5mbyA9IHtcbi8vICAgc2V4OiBcIuWls1wiLFxuLy8gICBhZ2U6IDEyXG4vLyB9XG5cbi8vIHNldHRpbmdzW1widXNlck5hbWVcIl0gPSAn5bCP5piOJ1xuXG4vLyBzZXR0aW5ncy51c2VyTmFtZSA9IFwi5bCP6buRXCJcblxuXG5cbi8vIGNsYXNzIFN0dWR5IHtcbi8vICAgc2V4OiBcIueUt1wiIHwgXCLlpbNcIlxuXG4vLyAgIGNvbnN0cnVjdG9yKHNleDogXCLnlLdcIiB8IFwi5aWzXCIpIHtcbi8vICAgICB0aGlzLnNleCA9IHNleFxuLy8gICB9XG5cbi8vICAgZ2V0U3R1ZHlJbmZvKG5hbWU6IHN0cmluZykge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBzZXg6IHRoaXMuc2V4LFxuLy8gICAgICAgbmFtZVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5cbi8vIGNsYXNzIFJlY3RhbmdsZSB7XG4vLyAgIHdpZHRoOiBudW1iZXI7XG4vLyAgIGhlaWdodDogbnVtYmVyO1xuXG4vLyAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4vLyAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuLy8gICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuLy8gICB9XG5cbi8vICAgZ2V0QXJlYUZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0O1xuLy8gICAgICAgLy8gICAgICAgJ3RoaXMnIGltcGxpY2l0bHkgaGFzIHR5cGUgJ2FueScgYmVjYXVzZSBpdCBkb2VzIG5vdCBoYXZlIGEgdHlwZSBhbm5vdGF0aW9uLlxuLy8gICAgICAgLy8gJ3RoaXMnIGltcGxpY2l0bHkgaGFzIHR5cGUgJ2FueScgYmVjYXVzZSBpdCBkb2VzIG5vdCBoYXZlIGEgdHlwZSBhbm5vdGF0aW9uLlxuLy8gICAgIH07XG4vLyAgIH1cbi8vIH1cblxuXG5cblxuLy8gaW50ZXJmYWNlIFVzZXJEZWZhdWx0cyB7XG4vLyAgIGNvbG9yVGhlbWVPdmVycmlkZT86IFwiZGFya1wiIHwgXCJsaWdodFwiO1xuLy8gfVxuXG4vLyBjb25zdCB1c2VySW5mbzogVXNlckRlZmF1bHRzID0ge1xuLy8gICBjb2xvclRoZW1lT3ZlcnJpZGU6IFwiZGFya1wiXG4vLyB9XG5cblxuLy8gY29uc3QgYTogbnVtYmVyID0gNjtcblxuLy8gc3dpdGNoIChhKSB7XG4vLyAgIGNhc2UgMDpcbi8vICAgICAvLyBGYWxsdGhyb3VnaCBjYXNlIGluIHN3aXRjaC5cbi8vICAgICBjb25zb2xlLmxvZyhcImV2ZW5cIik7XG4vLyAgIGNhc2UgMTpcbi8vICAgICBjb25zb2xlLmxvZyhcIm9kZFwiKTtcbi8vICAgICBicmVhaztcbi8vIH1cblxuXG4vLyBjbGFzcyBTdHVkeSB7XG4vLyAgIGluZm8oKSB7IH1cbi8vIH1cblxuLy8gY2xhc3MgU2Nob29sIGV4dGVuZHMgU3R1ZHkge1xuLy8gICBvdmVycmlkZSBzaW5mb2V0dXAoKSB7IH1cbi8vIH1cblxuLy8gY2xhc3MgQ2xhc3NlcyBleHRlbmRzIFN0dWR5IHtcbi8vICAgaW5mbygpIHsgfVxuLy8gfSJdfQ==
>
>```

## <a id="noEmitHelpers"></a> `noEmitHelpers`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>     "noEmitHelpers": true,
>  }
>}
>``` 
>index.ts
>```ts
>const setAge = async (age: number): Promise<number> => {
>  return age + 1
>}
>```
>noEmitHelpers: false
>```js
>"use strict";
>var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
>    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
>    return new (P || (P = Promise))(function (resolve, reject) {
>        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
>        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
>        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
>        step((generator = generator.apply(thisArg, _arguments || [])).next());
>    });
>};
>var __generator = (this && this.__generator) || function (thisArg, body) {
>    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
>    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = >function() { return this; }), g;
>    function verb(n) { return function (v) { return step([n, v]); }; }
>    function step(op) {
>        if (f) throw new TypeError("Generator is already executing.");
>        while (_) try {
>            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) >&& !(t = t.call(y, op[1])).done) return t;
>            if (y = 0, t) op = [op[0] & 2, t.value];
>            switch (op[0]) {
>                case 0: case 1: t = op; break;
>                case 4: _.label++; return { value: op[1], done: false };
>                case 5: _.label++; y = op[1]; op = [0]; continue;
>                case 7: op = _.ops.pop(); _.trys.pop(); continue;
>                default:
>                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; >}
>                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
>                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
>                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
>                    if (t[2]) _.ops.pop();
>                    _.trys.pop(); continue;
>            }
>            op = body.call(thisArg, _);
>        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
>        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
>    }
>};
>var setAge = function (age) { return __awaiter(void 0, void 0, void 0, function () {
>    return __generator(this, function (_a) {
>        return [2, age + 1];
>    });
>}); };
>
>```
>noEmitHelpers: true
>```js
>"use strict";
>var setAge = function (age) { return __awaiter(void 0, void 0, void 0, function () {
>    return __generator(this, function (_a) {
>        return [2, age + 1];
>    });
>}); };
>
> //#在全局作用域中为所使用的帮助程序提供实现, 不需要每次调用都会实现一次
>
>```

## <a id="stripInternal"></a> `stripInternal`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>     "stripInternal": true,
>  }
>}
>``` 
>index.ts
>```ts
>/**
> * 学生姓名
> * @internal
> */
>export let studyName = "小飞";
>
>/**
> * 学生性别
> */
>export let studySex = "男";
>```
>stripInternal: false  
>index.d.ts
>```ts
>export declare let studyName: string;
>export declare let studySex: string;
>```
>
>stripInternal: true  
>index.d.ts
>```ts
>export declare let studySex: string;
>```

## <a id="esModuleInterop"></a> `esModuleInterop`  
两个被证实的缺陷
* 形如 import * as moment from "moment" 这样的命名空间导入等价于 const moment = require("moment")
* 形如 import moment from "moment" 这样的默认导入等价于 const moment = require("moment").default

这种错误的行为导致了这两个问题：

* ES6 模块规范规定，命名空间导入（import * as x）只能是一个对象。TypeScript 把它处理成 = require("x") 的行为允许把导入当作一个可调用的函数，这样不符合规范。
* 虽然 TypeScript 准确实现了 ES6 模块规范，但是大多数使用 CommonJS/AMD/UMD 模块的库并没有像 TypeScript 那样严格遵守。

>tsconfig.json
>```json
>{
>  "compilerOptions": {
>     "esModuleInterop": true,
>     "allowSyntheticDefaultImports": true,
>     "importHelpers": true,
>  }
>}
>``` 
>index.ts
>```ts
>import * as fs from "fs";
>import _ from "lodash";
>
>fs.readFileSync("file.txt", "utf8");
>_.chunk(["a", "b", "c", "d"], 2);
>```
> 没有设置 "esModuleInterop"
>```js
>"use strict";
>Object.defineProperty(exports, "__esModule", { value: true });
>var fs = require("fs");
>var lodash_1 = require("lodash");
>fs.readFileSync("file.txt", "utf8");
>lodash_1.default.chunk(["a", "b", "c", "d"], 2);
>```
>设置 "esModuleInterop"
>```js
>"use strict";
>Object.defineProperty(exports, "__esModule", { value: true });
>var tslib_1 = require("tslib");
>var fs = tslib_1.__importStar(require("fs"));
>var lodash_1 = tslib_1.__importDefault(require("lodash"));
>fs.readFileSync("file.txt", "utf8");
>lodash_1.default.chunk(["a", "b", "c", "d"], 2);
>
>```

## <a id="experimentalDecorators"></a> `experimentalDecorators`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>     "emitDecoratorMetadata": true,
>     "experimentalDecorators": true,
>  }
>}
>``` 
>
>```ts
>function ClassDecorator() {
>  return function (target: any) {
>    console.log("I am class decorator", target);
>  }
>}
>
>@ClassDecorator()
>class Study {
>  sex: "男" | "女"
>
>  constructor(sex: "男" | "女") {
>    this.sex = sex
>  }
>
>  getStudyInfo(name: string) {
>    return {
>      sex: this.sex,
>      name
>    }
>  }
>}
>```
> `experimentalDecorators 默认值  直接报错, 不支持装饰器`
>```
>Experimental support for decorators is a feature that is subject to >change in a future release. Set the 'experimentalDecorators' option in >your 'tsconfig' or 'jsconfig' to remove this warning.
>
>148 class Study {
>          ~~~~~
>```
> `experimentalDecorators 设置true`
>```js
>"use strict";
>var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
>    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
>    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
>    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
>    return c > 3 && r && Object.defineProperty(target, key, r), r;
>};
>function ClassDecorator() {
>    return function (target) {
>        console.log("I am class decorator", target);
>    };
>}
>var Study = (function () {
>    function Study(sex) {
>        this.sex = sex;
>    }
>    Study.prototype.getStudyInfo = function (name) {
>        return {
>            sex: this.sex,
>            name: name
>        };
>    };
>    Study = __decorate([
>        ClassDecorator()
>    ], Study);
>    return Study;
>}());
>```
> `emitDecoratorMetadata 设置 true  编译文件中多了__metadata `
>```js
>"use strict";
>var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
>    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
>    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
>    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
>    return c > 3 && r && Object.defineProperty(target, key, r), r;
>};
>var __metadata = (this && this.__metadata) || function (k, v) {
>    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
>};
>function ClassDecorator() {
>    return function (target) {
>        console.log("I am class decorator", target);
>    };
>}
>var Study = (function () {
>    function Study(sex) {
>        this.sex = sex;
>    }
>    Study.prototype.getStudyInfo = function (name) {
>        return {
>            sex: this.sex,
>            name: name
>        };
>    };
>    Study = __decorate([
>        ClassDecorator(),
>        __metadata("design:paramtypes", [String])
>    ], Study);
>    return Study;
>}());
>```

## <a id="jsx"></a> `jsx`  
>tsconfig.json
>```json
>{
>  "compilerOptions": {
>     "jsx": "react",
>  }
>}
>``` 
>Demo index.tsx
>```ts
>import * as React from 'react'
>export const studyName = () => <span>小黑</span>;
>```
>>`jsx: react  将 JSX 改为等价的对 React.createElement 的调用并生成 .js 文件`
>>```js
>>"use strict";
>>Object.defineProperty(exports, "__esModule", { value: true });
>>exports.studyName = void 0;
>>var React = require("react");
>>var studyName = function () { return React.createElement("span", null, "\u5C0F\u9ED1"); };
>>exports.studyName = studyName;
>>```
>>`jsx: preserve 不对 JSX 进行改变并生成 .jsx 文件`
>>```js
>>"use strict";
>>Object.defineProperty(exports, "__esModule", { value: true });
>>exports.studyName = void 0;
>>var React = require("react");
>>var studyName = function () { return <span>小黑</span>; };
>>exports.studyName = studyName;
>>```
>>`jsx: react-jsx 改为 __jsx 调用并生成 .js 文件`
>>```js
>>"use strict";
>>Object.defineProperty(exports, "__esModule", { value: true });
>>exports.studyName = void 0;
>>var jsx_runtime_1 = require("react/jsx-runtime");
>>var studyName = function () { return jsx_runtime_1.jsx("span", { children: "\u5C0F\u9ED1" }, void 0); };
>>exports.studyName = studyName;
>>
>>```
>>`jsx: react-jsxdev: 改为 __jsx 调用并生成 .js 文件 `
>>```js
>>"use strict";
>>var _this = this;
>>Object.defineProperty(exports, "__esModule", { value: true });
>>exports.studyName = void 0;
>>var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
>>var _jsxFileName = "/Users/bank/Desktop/code-test/babel-test/src/lodash-test.tsx";
>>var studyName = function () { return jsx_dev_runtime_1.jsxDEV("span", { children: "\u5C0F\u9ED1" }, void 0, false, { >fileName: >_jsxFileName, lineNumber: 5, columnNumber: 31 }, _this); };
>>exports.studyName = studyName;
>>
>>```
>>`jsx: react-native: 不对 JSX 进行改变并生成 .js 文件 `
>>```js
>>"use strict";
>>Object.defineProperty(exports, "__esModule", { value: true });
>>exports.studyName = void 0;
>>var React = require("react");
>>var studyName = function () { return <span>小黑</span>; };
>>exports.studyName = studyName;
>>```

## <a id="lib"></a> `lib`  
>属性值 | 说明  
>---- | -----
>ES5 |	ES3 和 ES5 的核心功能定义
>ES2015 | ES2015 中额外提供的 API (又被称为 ES6) —— array.find， Promise，Proxy，Symbol，Map，Set，Reflect 等。
>ES6	| ES2015 的别名。
>ES2016 | ES2016 中额外提供的 API —— array.include 等。
>ES7	| ES2016 的别名。
>ES2017 | ES2017 中额外提供的 API —— Object.entries，Object.values，Atomics，SharedArrayBuffer，date.formatToParts，>typed arrays 等。
>ES2018 | ES2018 中额外提供的 API —— async iterables，promise.finally，Intl.PluralRules，rexexp.groups 等。
>ES2019 | ES2019 中额外提供的 API —— array.flat，array.flatMap，Object.fromEntries，string.trimStart，string.trimEnd 等。
>ES2020 | ES2020 中额外提供的 API —— string.matchAll 等。
>ESNext | ESNext 中额外提供的 API —— 随着 JavaScript 的发展，这些会发生变化。
>DOM	| [DOM](https://developer.mozilla.org/zh-CN/docs/Glossary/DOM) 定义 —— window，document 等。
>WebWorker	| [WebWorker](https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Using_web_workers) 上下文中存在的 >API。
>ScriptHost	| [Windows](https://wikipedia.org/wiki/Windows_Script_Host) Script Hosting System 的 API。

## <a id="composite"></a> `composite` 
* 该rootDir设置，如果没有明确设置，默认为包含tsconfig文件的目录
* 所有实现文件都必须与include模式匹配或列在files数组中。如果违反此约束，tsc将通知您未指定哪些文件
* declaration 必须开启
