



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


