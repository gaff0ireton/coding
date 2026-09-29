import { add } from "./math.js";
import { num, arr } from "./variables.js";

console.log(add(2, 10));

// num += 10; // * プリミティブ型
console.log(num);

arr[0] = 100; // * オブジェクト型
console.log(arr);