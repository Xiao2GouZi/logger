# 开启 Typescript  

如何安装运行[typescript](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/cli.md), 如何创建自己的声明文件[declaration](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/declaration.md),如何配置好[tsconfig](https://github.com/Xiao2GouZi/logger/blob/ts/material/ts/tsconfig/README.md)

从入门到放弃,只差那么一点点.

* [新的语法从提案到变成正式标准](#typescript-stage) 
* [基础类型](#type-base) 
* [TypeScript 断言  as ](#typescript-as) 
* [类型守卫 in typeof instance is](#typescript-in-typeof-instance-is) 
* [交叉类型](#typescript-cross-type) 
* [抽象类](#class-abstract) 
* [函数重载](#typescript-funtion-overload) 
* [访问器 getter setter](#accessor-getter-setter) 
* [ECMAScript 私有字段](#es-private) 
* [TypeScript 泛型](#typescript-genericity) 
* [TypeScript 装饰器](#typescript-decorators) 

### <a id="typescript-stage"></a> `新的语法从提案到变成正式标准`
>* Stage 0：展示阶段，仅仅是提出了讨论、想法，尚未正式提案。
>* Stage 1：征求意见阶段，提供抽象的 API 描述，讨论可行性，关键算法等。
>* Stage 2：草案阶段，使用正式的规范语言精确描述其语法和语义。
>* Stage 3：候选人阶段，语法的设计工作已完成，需要浏览器、Node.js 等环境支持，搜集用户的反馈。
>* Stage 4：定案阶段，已准备好将其添加到正式的 ECMAScript 标准中。

### <a id="type-base"></a> `基础类型`
>#### `Boolen 类型`
>```ts
>  let isTrue: boolean = true
>  //var isTrue = true;
>```
>
>#### `Number 类型`
>```ts
>  let age: number = 2
>  // var age = 2;
>```
>
>#### `Array 类型`
>```ts
>  let names: string[] = ['小明', '小黑', '小红']
>  // var names = ['小明', '小黑', '小红'];
>
>  let names: Array<string> = ['小明', '小黑', '小红']
>  // var names = ['小明', '小黑', '小红'];
>```
>
>#### `Enum 类型`
>```ts
> enum ESEX {
>   GIRL,
>   BODY
> }
> let studySex: ESEX = ESEX.BODY
> //var ESEX;
> //(function (ESEX) {
> //    ESEX[ESEX["GIRL"] = 0] = "GIRL";
> //    ESEX[ESEX["BODY"] = 1] = "BODY";
> //})(ESEX || (ESEX = {}));
> //var studySex = ESEX.BODY;
> 
> enum ESEX2 {
>   GIRL = "0",
>   BODY = "1"
> }
> let studySex2: ESEX2 = ESEX2.GIRL
> //var ESEX2;
> //(function (ESEX2) {
> //    ESEX2["GIRL"] = "0";
> //    ESEX2["BODY"] = "1";
> //})(ESEX2 || (ESEX2 = {}));
> //var studySex2 = ESEX2.GIRL;
> 
>```
>#### `Any 类型`
>```ts
> let studys: any = 12
> //var studys = 12;
>```
>#### `Unknown 类型`  
>1. 所有类型都可以赋值给 unknown
>2. unknown 类型只能被赋值给 any 类型和 unknown 类型本身
>```ts
>  let studys: unknown
>  studys = 14
>  studys = "name"
>  //var studys;
>  //studys = 14;
>  //studys = "name";
>
>  //Error   如果studys是any类型,是不会报错的
>  const age: number = studys 
>
>  //Error
>  studys.age
>```
>#### `Tuple 类型`
>元组是 TypeScript 中特有的类型
>元组可用于定义具有有限数量的未命名属性的类型
>```ts
>  enum ESEX {
>    GIRL,
>    BODY
>  }
>  type STUDYINFO = [number, string, ESEX]
>  let studyInfo: STUDYINFO = [12, '小黑', ESEX.BODY]
>  //var ESEX;
>  //(function (ESEX) {
>  //    ESEX[ESEX["GIRL"] = 0] = "GIRL";
>  //    ESEX[ESEX["BODY"] = 1] = "BODY";
>  //})(ESEX || (ESEX = {}));
>  //var studyInfo = [12, '小黑', ESEX.BODY];
>```
>#### `Void 类型`
>```ts
>  const setInfo = (name: string, age: number): void => {
>    const studyInfos = {
>      name,
>      age
>    }
>  }
>  //var setInfo = function (name, age) {
>  //    var studyInfos = {
>  //        name: name,
>  //        age: age
>  //    };
>  //};
>```
>#### `Null 和 Undefined 类型`
>```ts
>  let isUndefined: undefined = undefined
>  let isNull: null = null
>  //var isUndefined = undefined;
>  //var isNull = null;
>```
>#### `Never 类型`
>表示的是那些永不存在的值的类型
>使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。
>```ts
>  type Foo = string | number;
>
>  function controlFlowAnalysisWithNever(foo: Foo) {
>    if (typeof foo === "string") {
>      // 这里 foo 被收窄为 string 类型
>    } else if (typeof foo === "number") {
>      // 这里 foo 被收窄为 number 类型
>    } else {
>      // foo 在这里是 never
>      const check: never = foo;
>    }
>  }
>  //function controlFlowAnalysisWithNever(foo) {
>  //    if (typeof foo === "string") {
>  //    }
>  //    else if (typeof foo === "number") {
>  //    }
>  //    else {
>  //        var check = foo;
>  //    }
>  //}
>
>  //如果 type Foo = string | number | boolen;
>  //const check: never = foo; 就会把错
>```

### <a id="typescript-as"></a> `TypeScript 断言`
>#### `类型断言 尖括号、as语法`
>>```ts
>>  enum ESEX {
>>    GIRL,
>>    BODY
>>  }
>>
>>  interface ISTUDYINFO {
>>    name: string
>>    age: number
>>    sex: ESEX
>>  }
>>
>>  let studyInfos: any = [{
>>    name: "小黑",
>>    age: 12,
>>    sex: ESEX.BODY
>>  }]
>>
>>  let study1 = (studyInfos[0] as ISTUDYINFO).name
>>  // let study1 = (<ISTUDYINFO>studyInfos[0]).name
>>  study1.age
>>
>>  //var ESEX;
>>  //(function (ESEX) {
>>  //    ESEX[ESEX["GIRL"] = 0] = "GIRL";
>>  //    ESEX[ESEX["BODY"] = 1] = "BODY";
>>  //})(ESEX || (ESEX = {}));
>>  //var studyInfo = [{
>>  //        name: "小黑",
>>  //        age: 12,
>>  //        sex: ESEX.BODY
>>  //    }];
>>
>>```
>#### `非空断言 !`
>> ```ts
>>  type studentSex = "boy" | "girl" | undefined | null
>>  
>>  // 前提是 确认 sex 不可能是 undefined或者null
>>  const getStudentInfo = (sex: studentSex) => {
>>    return {
>>      name: "xiaoming",
>>      age: 12,
>>      sex: sex!
>>    }
>>  }
>>```

### <a id="typescript-in-typeof-instance-is"></a> `类型守卫 in typeof instance is`
>类型保护是可执行运行时检查的一种表达式，确保该类型在一定的范围内
>#### `in`
>>```ts
>>  enum ESEX {
>>    GIRL,
>>    BODY
>>  }
>>  
>>  interface ISTUDYSEX {
>>    name: string,
>>    sex: ESEX
>>  }
>>  
>>  interface ISTUDYAGE {
>>    name: string,
>>    age: number
>>  }
>>  
>>  type STUDYINFO = ISTUDYSEX | ISTUDYAGE
>>  
>>  const getStudyInfo = (info: STUDYINFO)=> {
>>    if ("sex" in info) {
>>      return {
>>        ...info,
>>        age: 14
>>      }
>>    }
>>    if ("age" in info) {
>>      return {
>>        ...info,
>>        sex: ESEX.BODY
>>      }
>>    }
>>  }
>>  
>>  const info = getStudyInfo({
>>    name: '小黑',
>>    sex: ESEX.GIRL
>>  })
>>  
>>  console.log('   =>   info', info)
>>  //   =>   info { name: '小黑', sex: 0, age: 14 }
>>  
>>  //var __assign = (this && this.__assign) || function () {
>>  //    __assign = Object.assign || function(t) {
>>  //        for (var s, i = 1, n = arguments.length; i < n; i++) {
>>  //            s = arguments[i];
>>  //            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
>>  //                t[p] = s[p];
>>  //        }
>>  //        return t;
>>  //    };
>>  //    return __assign.apply(this, arguments);
>>  //};
>>  //var ESEX;
>>  //(function (ESEX) {
>>  //    ESEX[ESEX["GIRL"] = 0] = "GIRL";
>>  //    ESEX[ESEX["BODY"] = 1] = "BODY";
>>  //})(ESEX || (ESEX = {}));
>>  //var getStudyInfo = function (info) {
>>  //    if ("sex" in info) {
>>  //        return __assign(__assign({}, info), { age: 14 });
>>  //    }
>>  //    if ("age" in info) {
>>  //        return __assign(__assign({}, info), { sex: ESEX.BODY });
>>  //    }
>>  //};
>>  //var info = getStudyInfo({
>>  //    name: '小黑',
>>  //    sex: ESEX.GIRL
>>  //});
>>  //console.log('   =>   info', info);
>>  //
>>```
>
>#### `typeof  "number"， "string"， "boolean" 或 "symbol"`
>>```ts
>>  const getStudyInfo = (name: string, sex: string | number, age: number) => {
>>    if (typeof sex === "number") {
>>      return {
>>        name,
>>        sex: sex === 1 ? "男" : "女",
>>        age
>>      }
>>    }
>>    if (typeof sex === "string") {
>>      return {
>>        name,
>>        sex,
>>        age
>>      }
>>    }
>>  }
>>
>>  const studyInfo = getStudyInfo("小美", 1, 12)
>>  console.log(" studyInfo ==> ", studyInfo)
>>  // studyInfo ==>  { name: '小美', sex: '男', age: 12 }
>>
>>  //var getStudyInfo = function (name, sex, age) {
>>  //    if (typeof sex === "number") {
>>  //        return {
>>  //            name: name,
>>  //            sex: sex === 1 ? "男" : "女",
>>  //            age: age
>>  //        };
>>  //    }
>>  //    if (typeof sex === "string") {
>>  //        return {
>>  //            name: name,
>>  //            sex: sex,
>>  //            age: age
>>  //        };
>>  //    }
>>  //};
>>  //var studyInfo = getStudyInfo("小美", 1, 12);
>>  //console.log(" studyInfo ==> ", studyInfo);
>>
>>```
>
>#### `instance 区分不同的class类型`
>>```ts
>>  interface IStudentInfo {
>>    name: string,
>>    age: number,
>>  }
>>  
>>  interface IStudentInfos {
>>    getStudentInfo: () => IStudentInfo
>>  }
>>  
>>  class ClassesA implements IStudentInfos {
>>    constructor() { }
>>    getStudentInfo = () => {
>>      return {
>>        name: "xiaoming",
>>        age: 12,
>>      }
>>    }
>>  }
>>  
>>  class ClassesB implements IStudentInfos {
>>    constructor() { }
>>    getStudentInfo = () => {
>>      return {
>>        name: "xiaoming",
>>        age: 12,
>>      }
>>    }
>>  }
>>  
>>  const classes = new ClassesA()
>>  
>>  if (classes instanceof ClassesA) {
>>    console.log(' ======> classesA type ClassesA')
>>  }
>>  
>>  //var ClassesA = (function () {
>>  //    function ClassesA() {
>>  //        this.getStudentInfo = function () {
>>  //            return {
>>  //                name: "xiaoming",
>>  //                age: 12,
>>  //            };
>>  //        };
>>  //    }
>>  //    return ClassesA;
>>  //}());
>>  //var ClassesB = (function () {
>>  //    function ClassesB() {
>>  //        this.getStudentInfo = function () {
>>  //            return {
>>  //                name: "xiaoming",
>>  //                age: 12,
>>  //            };
>>  //        };
>>  //    }
>>  //    return ClassesB;
>>  //}());
>>  //var classesA = new ClassesA();
>>  //if (classesA instanceof ClassesA) {
>>  //    console.log(' ======> classesA type ClassesA');
>>  //}
>>```
>
>#### `is`
>>```ts
>>  function isString(x: any): x is string {
>>    return typeof x === "string";
>>  }
>>  
>>  function example(foo: any){
>>    if(isString(foo)){
>>        // 如下代码编译和运行时都正常，因为 foo 是 string toLocaleUpperCase方法
>>        console.log(foo.toLocaleUpperCase());
>>    }
>>    // 编译不会出错，但是运行时出错   当前foo是string类型,但是string没有toExponential的方法
>>    console.log(foo.toExponential(2));
>>  }
>>  example("hello world");
>>  
>>  //function isString(x) {
>>  //    return typeof x === "string";
>>  //}
>>  //function example(foo) {
>>  //    if (isString(foo)) {
>>  //        console.log(foo.toLocaleUpperCase());
>>  //    }
>>  //    console.log(foo.toExponential(2));
>>  //}
>>  //example("hello world");
>>```
>

### <a id="typescript-cross-type"></a> `交叉类型`
>```ts
>  // 相同成员,相同基础类型
>  interface IPrimarySchoolInfo {
>    name: string,
>    year: number
>  }
>  
>  interface IMiddleSchoolInfo {
>    name: string,
>    detail: string,
>  }
>  
>  const schoolInfo: IPrimarySchoolInfo & IMiddleSchoolInfo = {
>    name: '希望学校',
>    year: 12,
>    detail: "优秀的学校"
>  }
>  
>  // 相同成员,不同基础类型
>  interface IPrimarySchoolInfo {
>    name: string,
>    year: number
>  }
>  
>  interface IMiddleSchoolInfo {
>    name: number,
>    detail: string,
>  }
>  
>  const schoolInfo: IPrimarySchoolInfo & IMiddleSchoolInfo = {
>    //  error  Type 'string' is not assignable to type 'never'.
>    name: '',
>    year: 12,
>    detail: "优秀的徐晓"
>  }
>  
>  //相同成员,不同非基础类型
>  interface IPrimarySchoolInfo {
>    otherInfo: {
>      code: string,
>    }
>  }
>  
>  interface IMiddleSchoolInfo {
>    otherInfo: {
>      id: number
>    }
>  }
>  
>  const schoolInfo: IPrimarySchoolInfo & IMiddleSchoolInfo = {
>    otherInfo: {
>      code: "XSDAD",
>      id: 98765678909876
>    }
>  }
>
>```

### <a id="class-abstract"></a> `抽象类`
>  ```ts
>  abstract class Person {
>    constructor(public name: string){}
>  
>    abstract say(words: string) :void;
>  }
>  
>  // Cannot create an instance of an abstract class.(2511)
>  const lolo = new Person(); // Error
>  
>  abstract class Person {
>    constructor(public name: string){}
>  
>    // 抽象方法
>    abstract say(words: string) :void;
>  }
>  
>  class Developer extends Person {
>    constructor(name: string) {
>      super(name);
>    }
>    
>    say(words: string): void {
>      console.log(`${this.name} says ${words}`);
>    }
>  }
>  
>  const lolo = new Developer("lolo");
>  lolo.say("I love ts!"); // lolo says I love ts!
>  
>```

### <a id="typescript-funtion-overload"></a> `函数重载`
>函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力
>```ts
>  type Combinable = string | number
>
>  class Calculator {
>    add(a: number, b: number): number;
>    add(a: string, b: string): string;
>    add(a: string, b: number): string;
>    add(a: number, b: string): string;
>    add(a: Combinable, b: Combinable) {
>      if (typeof a === "string" || typeof b === "string") {
>        return a.toString() + b.toString();
>      }
>      return a + b;
>    }
>  }
>
>  const calculator = new Calculator();
>  //add 重载了4次
>  const result = calculator.add(1, 1);
>  const result = calculator.add("1", "1");
>  const result = calculator.add("1", 1);
>  const result = calculator.add(1, "1");
>
>  //var Calculator = (function () {
>  //    function Calculator() {
>  //    }
>  //    Calculator.prototype.add = function (a, b) {
>  //        if (typeof a === "string" || typeof b === "string") {
>  //            return a.toString() + b.toString();
>  //        }
>  //        return a + b;
>  //    };
>  //    return Calculator;
>  //}());
>  //var calculator = new Calculator();
>  //var result = calculator.add("qweqwe", "vcvcv");
>```


### <a id="accessor-getter-setter"></a> `访问器 getter setter`
>```ts
>  let passcode = "Hello TypeScript";
>  
>  class Employee {
>    private _fullName: string;
>  
>    get fullName(): string {
>      return this._fullName;
>    }
>  
>    set fullName(newName: string) {
>      if (passcode && passcode == "Hello TypeScript") {
>        this._fullName = newName;
>      } else {
>        console.log("Error: Unauthorized update of employee!");
>      }
>    }
>  }
>  
>  let employee = new Employee();
>  employee.fullName = "Jack";
>  if (employee.fullName) {
>    console.log(employee.fullName);
>    console.log(employee);
>  }
>  // Jack
>  // { _fullName: 'Jack' }
>
>  //var passcode = "Hello TypeScript";
>  //var Employee = (function () {
>  //    function Employee() {
>  //        this._fullName = '2';
>  //    }
>  //    Object.defineProperty(Employee.prototype, "fullName", {
>  //        get: function () {
>  //            return this._fullName;
>  //        },
>  //        set: function (newName) {
>  //            if (passcode && passcode == "Hello TypeScript") {
>  //                this._fullName = newName;
>  //            }
>  //            else {
>  //                console.log("Error: Unauthorized update of employee!");
>  //            }
>  //        },
>  //        enumerable: false,
>  //        configurable: true
>  //    });
>  //    return Employee;
>  //}());
>  //var employee = new Employee();
>  //employee.fullName = "Semlinker";
>  //if (employee.fullName) {
>  //    console.log(employee.fullName);
>  //}
>```


### <a id="es-private"></a> `ECMAScript 私有字段`
>使用原则
>* 私有字段以 # 字符开头，有时我们称之为私有名称；
>* 每个私有字段名称都唯一地限定于其包含的类；
>* 不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）；
>* 私有字段不能在包含的类之外访问，甚至不能被检测到。
>
>与TypeScript的区别
>* ts版本需要 3.8+
>* es的版本要求在 ES2015, 要求tsconfig.json中的target配置在 ES2015+
>* private 只是TS的和编译后不存在js中
>```ts
>class School {
>  #address: string = '隔壁村'
>  constructor() {
>
>  }
>
>  getSchoolInfo = () => {
>    return {
>      address: this.#address
>    }
>  }
>}
>
>const school = new School()
>console.log(school.getSchoolInfo())
>// { address: '隔壁村' }
>
>//var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, >f) {
>//    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
>//    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new >TypeError("Cannot //read private member from an object whose class did not declare it");
>//    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
>//};
>//var _School_address;
>//class School {
>//    constructor() {
>//        _School_address.set(this, '隔壁村');
>//        this.getSchoolInfo = () => {
>//            return {
>//                address: __classPrivateFieldGet(this, _School_address, "f")
>//            };
>//        };
>//    }
>//}
>//_School_address = new WeakMap();
>//const school = new School();
>//console.log(school.getSchoolInfo());
>
>```

### <a id="typescript-genericity"></a> `TypeScript 泛型`
>允许同一个函数接受不同类型参数的一种模板
>泛型变量
>* T（Type）：表示一个 TypeScript 类型
>* K（Key）：表示对象中的键类型
>* V（Value）：表示对象中的值类型
>* E（Element）：表示元素类型
>
>`typeof 获取一个变量声明或对象的类型`
>>```ts
>>  interface IstudentInfo {
>>    name: string,
>>    age: number,
>>    sex: "男" | "女"
>>  }
>>
>>  const getstudentsInfo = (name: string, age: number, sex: "男" | " 女"): IstudentInfo => {
>>    return {
>>      name,
>>      age,
>>      sex
>>    }
>>  }
>>
>>  type classes1 = typeof getstudentsInfo
>>  //type classes1 = (name: string, age: number, sex: "男" | "女") => IstudentInfo
>>
>>  //const getstudentsInfo = (name, age, sex) => {
>>  //    return {
>>  //        name,
>>  //        age,
>>  //        sex
>>  //    };
>>  //};
>>```
>
>`keyof 可以用来一个对象中的所有 key 值`
>>```ts
>>  interface IstudentInfo {
>>    name: string,
>>    age: number,
>>    sex: "男" | "女"
>>  }
>>
>>  type studentInfoKey = keyof IstudentInfo
>>  // 等同于 type studentInfoKey = "name" | "age" | "sex"
>>
>>  const xiaoming: studentInfoKey = 'age'
>>
>>  //const xiaoming = "name";
>>```
>
>`in 用来遍历枚举类型`
>>```ts
>>  type studentInfoKey = "name" | "age" | "sex"
>>
>>  type studendInfo = {
>>    [p in studentInfoKey]: string
>>  }
>>  //等同于
>>  type studendInfo = {
>>      name: string;
>>      age: string;
>>      sex: string;
>>  }
>>  //  -----------------------------------------
>>  enum ESTUDYSEX {
>>    BOY = "boy",
>>    GIRL = "girl"
>>  }
>>
>>  type studendSex = {
>>    [p in ESTUDYSEX]: string
>>  }
>>  // 等同于
>>  type studendSex = {
>>      boy: string;
>>  }
>>    girl: string;
>>```
>
>`infer  推断 在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用`
>>```ts
>>  interface Action<T> {
>>    payload?: T;
>>    type: string;
>>  }
>>
>>  class EffectModule {
>>    count = 1;
>>    message = "hello!";
>>
>>    delay(input: Promise<number>) {
>>      return input.then(i => ({
>>        payload: `hello ${i}!`,
>>        type: 'delay'
>>      }));
>>    }
>>
>>    setMessage(action: Action<Date>) {
>>      return {
>>        payload: action.payload!.getMilliseconds(),
>>        type: "set-message"
>>      };
>>    }
>>  }
>>
>>  type Connected = {
>>    delay(input: number): Action<string>;
>>    setMessage(action: Date): Action<number>;
>>  };
>>
>>  // 修改 Connect 的类型，让 connected 的类型变成预期的类型
>>  type Connect = (module: EffectModule) => any;
>>
>>  const connect: Connect = () => ({
>>    delay: () => ({
>>      type: 'delay',
>>      payload: `hello 2`
>>    }),
>>    setMessage: (input) => ({
>>      type: "set-message",
>>      payload: input.getMilliseconds()
>>    })
>>  });
>>
>>  export const connected: Connected = connect(new EffectModule());
>>
>>  // ------------------------------------------------------------------------
>>  //  修改之后 通过 Connect 的类型和 Connected 类型一致, 通过推断直接生成
>>  interface Action<T> {
>>    payload?: T;
>>    type: string;
>>  }
>>
>>  class EffectModule {
>>    count = 1;
>>    message = "hello!";
>>
>>    delay(input: Promise<number>) {
>>      return input.then(i => ({
>>        payload: `hello ${i}!`,
>>        type: 'delay'
>>      }));
>>    }
>>
>>    setMessage(action: Action<Date>) {
>>      return {
>>        payload: action.payload!.getMilliseconds(),
>>        type: "set-message"
>>      };
>>    }
>>  }
>>
>>  type asyncMethod<T, U> = (input: Promise<T>) => Promise<Action<U>>
>>  type asyncMethodConnect<T, U> = (input: T) => Action<U>
>>  type syncMethod<T, U> = (action: Action<T>) => Action<U>
>>  type syncMethodConnect<T, U> = (action: T) => Action<U>
>>
>>  // 类型转换, 
>>  //将class中的 delay: (input: Promise<T>) => Promise<Action<U>>   ===>  (input: T) => Action<U>
>>  //将class中的 setMessage: (action: Action<T>) => Action<U>   ===>  (action: T) => Action<U>
>>  type EffectMethodAssign<T> = T extends asyncMethod<infer U, infer V> ? asyncMethodConnect<U, V> : T extends >syncMethod<infer U, infer V> ?  syncMethodConnect<U, V> : never
>>
>>  // 利用类型分发和class可以提取class方法, never类型的会被自动过滤掉
>>  type MethodName<T> = { [F in keyof T]: T[F] extends Function ? F : never }[keyof T]
>>  //type EE = MethodName<EffectModule>
>>
>>  type Connect = (module: EffectModule) => {
>>    [F in MethodName<typeof module>]: EffectMethodAssign<typeof module[F]>
>>  }
>>
>>  const connect: Connect = () => ({
>>    delay: () => ({
>>      type: 'delay',
>>      payload: `hello 2`
>>    }),
>>    setMessage: (input) => ({
>>      type: "set-message",
>>      payload: input.getMilliseconds()
>>    })
>>  });
>>
>>  export const connected = connect(new EffectModule());
>>
>>  console.log('===> setMessage', connected.setMessage(new Date()))
>>  //===> setMessage { type: 'set-message', payload: 929 }
>>  console.log('===> setMessage', connected.delay(123))
>>  //===> setMessage { type: 'delay', payload: 'hello 123' }
>>```
>
>`extends 继承某些类型`
>>```ts
>>  interface ISCHOOLINFO {
>>    address: string,
>>    name: string
>>  }
>>  
>>  interface ICOMMOMSCHOOL extends ISCHOOLINFO {
>>    awards: string[]
>>  }
>>  
>>  const getSchoolInfo: ICOMMOMSCHOOL = {
>>    address: "隔壁",
>>    name: "智慧",
>>    awards: []
>>  }
>>```
> ## 运用好 in、infer、extends、keyof、typeof 可以组装成大多数想要的泛型, Partial、Required、Readonly、Pick 等等  是TS提供的基础泛型工具, 现实工作中要写好泛型还是有很长路要走的  
>`Partial 将某个类型里的属性全部变为可选项 ?`
>>```ts
>>  /**
>>   * Make all properties in T optional
>>   */
>>  type Partial<T> = {
>>      [P in keyof T]?: T[P];
>>  };
>>  //首先通过 keyof T 拿到 T 的所有属性名，然后使用 in 进行遍历，将值赋给 P，最后通过 T[P] 取得相应的属性值。中间的 ? 号，用于将所有属性变为可选。
>>  interface ISCHOOLINFO {
>>    address: string,
>>    name: string,
>>    awards: string[]
>>  }
>>  
>>  const getSchoolInfo: ISCHOOLINFO = {
>>    name: "智慧",
>>    awards: []
>>  }
>>  //Property 'address' is missing in type '{ name: string; awards: never[]; }' but required in type 'ICOMMOMSCHOOL'.
>>  //ISCHOOLINFO 的属性都要赋值
>>  
>>  const getSchoolInfo: Partial<ISCHOOLINFO> = {
>>    name: "智慧",
>>    awards: []
>>  }
>>  // ISCHOOLINFO 中的属性都是可选类型
>>
>>```
>
>`Required 将某个类型里的属性全部变为必须的`
>>```ts
>>  /**
>>   * Make all properties in T required
>>   */
>>  type Required<T> = {
>>      [P in keyof T]-?: T[P];
>>  };
>>  //首先通过 keyof T 拿到 T 的所有属性名，然后使用 in 进行遍历，将值赋给 P，最后通过 T[P] 取得相应的属性值。中间的 -? 号，用于将所有属性变为必选。
>>  interface ISCHOOLINFO {
>>    address?: string,
>>    name: string,
>>    awards: string[]
>>  }
>>  
>>  const getSchoolInfo: Required<ISCHOOLINFO> = {
>>    name: "智慧",
>>    awards: []
>>  }
>>  // Property 'address' is missing in type '{ name: string; awards: never[]; }' but required in type 'Required<ISCHOOLINFO>'
>>```
>
>`Readonly 将某个类型里的属性全部变为只读`
>>```ts
>>  /**
>>   * Make all properties in T readonly
>>   */
>>  type Readonly<T> = {
>>      readonly [P in keyof T]: T[P];
>>  };
>>  //首先通过 keyof T 拿到 T 的所有属性名，然后使用 in 进行遍历，将值赋给 P，最后通过 T[P] 取得相应的属性值。最左边的readonly，用于将所有属性变为必选。
>>  interface ISCHOOLINFO {
>>    address?: string,
>>    name: string,
>>    awards: string[]
>>  }
>>  
>>  const getSchoolInfo: Readonly<ISCHOOLINFO> = {
>>    name: "智慧",
>>    awards: []
>>  }
>>  
>>  getSchoolInfo.awards = ["高级奖项"]
>>  //Cannot assign to 'awards' because it is a read-only property.
>>
>>```
>
>`Pick 就是从一个复合类型中，取出几个想要的类型的组合`
>>```ts
>>  /**
>>   * From T, pick a set of properties whose keys are in the union K
>>   */
>>  type Pick<T, K extends keyof T> = {
>>      [P in K]: T[P];
>>  };
>>  
>>  interface ISCHOOLINFO {
>>    address: string,
>>    name: string,
>>    awards: string[]
>>  }
>>  
>>  type pickInfo = "name" | "address"
>>  
>>  // 从ISCHOOLINFO类型中取了pickInfo的类型的组合
>>  const getSchoolInfo: Pick<ISCHOOLINFO, pickInfo> = {
>>    name: "智慧",
>>    address: "隔壁村"
>>  }
>>  
>>  getSchoolInfo.awards = ["高级奖项"]
>>  //error: Property 'awards' does not exist on type 'Pick<ISCHOOLINFO, pickInfo>'.
>>
>>```
>
>`Record 构建类型是T,属性是K的集合`
>>```ts
>>  /**
>>   * Construct a type with a set of properties K of type T
>>   */
>>  type Record<K extends keyof any, T> = {
>>      [P in K]: T;
>>  };
>>  
>>  interface IPerson {
>>    name: string,
>>    age: number
>>  }
>>  
>>  type recordInfo = "xiaoming" | "xiaofang"
>>  
>>  // 创建 key值为recordInfo, value为 IPerson的集合
>>  const getPersonInfo: Record<recordInfo, IPerson> = {
>>    "xiaofang": {
>>      name: 'xiaofang',
>>      age: 12
>>    },
>>    "xiaoming": {
>>      name: 'xiaoming',
>>      age: 14
>>    }
>>  }
>>
>>```
>
>`Exclude 用于从类型T中去除和U类型共有的成员`
>>```ts
>>  /**
>>   * Exclude from T those types that are assignable to U
>>   */
>>  type Exclude<T, U> = T extends U ? never : T;
>>  
>>  // ----- 第一中 ---------------
>>  interface IPerson {
>>    name: string,
>>    age: number
>>  }
>>  
>>  interface IPerson2 {
>>    name: string,
>>    age: number,
>>    height: number
>>  }
>>  
>>  const getPersonInfo: Exclude<IPerson, IPerson2> = {
>>    name: 'xiaoming',
>>    age: 12
>>  }
>>  
>>  // 这时候的getPersonInfo 就是never类型
>>  const getPersonInfo: Exclude<IPerson2, IPerson>
>>
>>  // ----- 第二中 ---------------
>>   type test1 = 'a' | 'b';
>>   type test2 = 'b' | 'c';
>>   type Demo = Exclude<test1, test2> 
>>   // type Demo = "a"
>>```
>
>`Extract 用于从类型T中取出可分配给U类型的成员`
>>```ts
>>  /**
>>   * Extract from T those types that are assignable to U
>>   */
>>  type Extract<T, U> = T extends U ? T : never;
>>  
>>  // ----------- 第一种 -----------------------
>>  interface IPerson {
>>    name: string,
>>    age: number,
>>    // weight: number
>>  }
>>  
>>  interface IPerson2 {
>>    name: string,
>>    age: number,
>>    height: number
>>  }
>>  
>>  // getPersonInfo  => IPerson2
>>  const getPersonInfo: Extract<IPerson2, IPerson> = {
>>    name: 'xiaoming',
>>    age: 12,
>>    height: 170
>>  }
>>  
>>  // ----------- 第二种 -----------------------
>>  type test1 = 'a' | 'b';
>>  type test2 = 'b' | 'c';
>>  // type Demo = "b"
>>  type Demo = Extract<test1, test2>
>>```
>
>`Omit 对象类型中剔除某些属性，并创建一个新的对象类型`
>>```ts
>>  /**
>>   * Construct a type with the properties of T except for those in type K.
>>   */
>>  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
>>  
>>  interface IStudentInfo {
>>    name: string,
>>    age: number,
>>    email: string,
>>    weight: number
>>  }
>>  
>>  //type person1 = {
>>  //    name: string;
>>  //    age: number;
>>  //    weight: number;
>>  //}
>>  type person1 = Omit<IStudentInfo, "email">
>>  
>>  //type person2 = {
>>  //    name: string;
>>  //    weight: number;
>>  //}
>>  type person2 = Omit<IStudentInfo, "email" | "age">
>>  
>>  //type person3 = {
>>  //    name: string;
>>  //    age: number;
>>  //    weight: number;
>>  //}
>>  type person3 = Omit<IStudentInfo, "email" | "height">
>>  
>>```
>
>`NonNullable 用于从类型T中去除undefined和null类型`
>>```ts
>>  /**
>>   * Exclude null and undefined from T
>>   */
>>  type NonNullable<T> = T extends null | undefined ? never : T;
>>  
>>  type ISex = "boy" | "girl" | null | undefined
>>  
>>  // const getPersonSex: "boy" | "girl"
>>  const getPersonSex: NonNullable<ISex> = "boy"
>>```
>
>`Parameters `
>>```ts
>>  /**
>>   * Obtain the parameters of a function type in a tuple
>>   */
>>  type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
>>  
>>  enum ESTUDYSEX {
>>    BOY = "boy",
>>    GIRL = "girl"
>>  }
>>  
>>  const getStudendsInfo = (name: string, age: number, sex: ESTUDYSEX) => {
>>    return {
>>      name,
>>      age,
>>      sex
>>    }
>>  }
>>  
>>  type paramType = Parameters<typeof getStudendsInfo>
>>  //const params: [name: string, age: number, sex: ESTUDYSEX]
>>  const params: paramType = ["xiaohei", 12, ESTUDYSEX.BOY]
>>```
>
>`ConstructorParameters 获取构造函数类型`
>>```ts
>>  /**
>>   * Obtain the parameters of a constructor function type in a tuple
>>   */
>>  type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
>>  
>>  class StudentInfo {
>>    age: number = 123
>>    name: string
>>  
>>    constructor(name: string, age: number) {
>>      this.name = name;
>>      this.age = age
>>    }
>>  
>>    getStudentInfo = () => {
>>      return {
>>        age: this.age,
>>        name: this.name
>>      }
>>    }
>>  }
>>  
>>  type StudentInfoType = ConstructorParameters<typeof StudentInfo>
>>  // const studentInfos: [name: string, age: number]
>>  const studentInfos: StudentInfoType = ["xiaoming", 12]
>>  
>>```
>
>`ReturnType 获取函数类型的返回类型`
>>```ts
>>  /**
>>   * Obtain the return type of a function type
>>   */
>>  type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
>>  
>>  interface IPerson2 {
>>    name: string,
>>    age: number,
>>    height: number
>>  }
>>  
>>  function getPersonSex(): ReturnType<() => IPerson2> {
>>    return {
>>      name: "xiaohei",
>>      age: 12,
>>      height: 180
>>    }
>>  }
>>
>>```
>
>`InstanceType 获取构造函数的实例类型`
>>```ts
>>  /**
>>   * Obtain the return type of a constructor function type
>>   */
>>  type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;
>>  
>>  class StudentInfo {
>>    age: number = 123
>>    name: string
>>  
>>    constructor(name: string) {
>>      this.name = name
>>    }
>>  
>>    getStudentInfo = () => {
>>      return {
>>        age: this.age,
>>        name: this.name
>>      }
>>    }
>>  }
>>  
>>  type StudentInfoType = InstanceType<typeof StudentInfo>
>>  //type getStudentInfo = () => {
>>  //    age: number;
>>  //    name: string;
>>  //}
>>  type getStudentInfo = StudentInfoType["getStudentInfo"]
>>```
>

### <a id="typescript-decorators"></a> `TypeScript 装饰器`
>`类装饰器`
>>```ts
>>  declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
>>     //target: TFunction - 被装饰的类
>>  
>>  function SchoolDecorator<T extends Function>(name: string) {
>>    return function (target: T) {
>>      target.prototype.setInfo = () => {
>>        target.prototype.name = name
>>        console.log(' =====> setInfo', target.prototype.name)
>>      }
>>    }
>>  }
>>  
>>  @SchoolDecorator("希望大学")
>>  class Student {
>>    name: string
>>    constructor() {
>>      this.name = '默认值'
>>    }
>>    getInfo = () => {
>>      console.log(' =====> getInfo', this.name)
>>    }
>>  }
>>  
>>  const student = new Student()
>>  student.getInfo();
>>  (student as any).setInfo()
>>
>>```
>
>`属性装饰器`
>>```ts
>>  declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
>>     // target: Object - 被装饰的类
>>     // propertyKey: string | symbol - 被装饰类的属性名
>>  
>>  function propertyDecorator (target, key) {
>>    delete target[key];
>>    const backingField = "_" + key;
>>    Object.defineProperty(target, backingField, {
>>      writable: true,
>>      enumerable: true,
>>      configurable: true
>>    });
>>  
>>    // property getter
>>    const getter = function (this) {
>>      const currVal = this[backingField];
>>      return currVal;
>>    };
>>  
>>    // property setter
>>    const setter = function (this, newVal) {
>>      this[backingField] = newVal;
>>    };
>>  
>>    // Create new property with getter and setter
>>    Object.defineProperty(target, key, {
>>      get: getter,
>>      set: setter,
>>      enumerable: true,
>>      configurable: true
>>    });
>>  
>>  }
>>  
>>  class Student {
>>    @propertyDecorator
>>    appName;
>>  
>>    constructor(name) {
>>      this.appName = name;
>>    }
>>  
>>    getInfo () {
>>      console.log(' =====> getInfo')
>>    }
>>  }
>>  
>>  const p1 = new Student("semlinker");
>>  p1.appName = "xixihaha"
>>  
>>```
>
>`方法装饰器`
>>```ts
>>  declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) =>   TypedPropertyDescriptor<T> | void;
>>      //target: Object - 被装饰的类
>>      //propertyKey: string | symbol - 方法名
>>      //descriptor: TypePropertyDescript - 属性描述符
>>  
>>  function actionDescriptor(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
>>    console.log(' ====> target', target,)
>>    //====> target Task { runTask: [Function] }
>>    console.log(' ====> propertyKey', propertyKey)
>>    //====> propertyKey runTask
>>    let originalMethod = descriptor.value;
>>    descriptor.value = function (...args: any[]) {
>>      console.log(" ====> args => 2", Array.from(args))
>>      //====> args => 2 [ 'learn ts' ]
>>      let result = originalMethod.apply(this, args);
>>      return result;
>>    };
>>  }
>>  
>>  class Task {
>>    @actionDescriptor
>>    runTask(arg: any): any {
>>      console.log(' ===> arg => 1', arg)
>>      //===> arg => 1 learn ts
>>      return "finished";
>>    }
>>  }
>>  
>>  let task = new Task();
>>  let result = task.runTask("learn ts");
>>  console.log("result: " + result);
>>  //result: finished
>>```
>
>`参数装饰器`
>>```ts
>>  declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
>>  
>>    //target: Object - 被装饰的类
>>    //propertyKey: string | symbol - 方法名
>>    //parameterIndex: number - 方法中参数的索引值
>>  
>>  function paramDescriptor(target: Function, key: string, parameterIndex: number) {
>>    console.log(' =====> target', target)
>>    console.log(' =====> key', key)
>>    console.log(' =====> parameterIndex', parameterIndex)
>>  }
>>  
>>  class Student {
>>    getName(@paramDescriptor name: string): string {
>>      console.log(' ===> arg => 1', name)
>>      return "finished";
>>    }
>>  }
>>```




<!-- ### <a id="typescript-in-typeof-instance-is"></a> `类型守卫 in typeof instance is`
### <a id="typescript-in-typeof-instance-is"></a> `类型守卫 in typeof instance is`
### <a id="typescript-in-typeof-instance-is"></a> `类型守卫 in typeof instance is`
### <a id="typescript-in-typeof-instance-is"></a> `类型守卫 in typeof instance is` -->





## 如何正确使用 `files、include、exclude`
>### `files && include`
>>编译器将会编译 files && include 中的文件
>>```json 
>>  {
>>    "files": [
>>      "src/index.ts"
>>    ],
>>    "include": [
>>      "src/**/*"
>>    ]
>>  }
>>```
>### `files && exclude`
>>同时配置files, exclude. exclude将不起作用
>>```json
>>  {
>>    "files": [
>>      "src/index.ts"
>>    ],
>>    "exclude": [
>>      "src/index.ts"
>>    ]
>>  }
>>```
>### `include && exclude`
>>同时配置include, exclude. 编译器将编译include设置的文件,但是要除去exclude配置的文件
>>```json 
>>{
>>  "include": [
>>    "src/**/*"
>>  ],
>>  "exclude": [
>>    "src/index.ts"
>>  ]
>>}
>>```