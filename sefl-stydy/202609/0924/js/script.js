/* | 正規表現     | 意味        | 例                      |
| -------- | --------- | ---------------------- |
| `.`      | 何か1文字     | `/a.c/` → `abc`, `axc` |
| `\d`     | 数字        | `0〜9`                  |
| `\D`     | 数字以外      |                        |
| `\w`     | 英数字・`_`   |                        |
| `\W`     | `\w`以外    |                        |
| `\s`     | 空白        | スペース、改行など              |
| `[abc]`  | a,b,cのどれか |                        |
| `[a-z]`  | a〜z       |                        |
| `[0-9]`  | 0〜9       | `\d`とほぼ同じ              |
| `[^0-9]` | 数字以外      | `^`が`[]`内だと否定          |
| `+`      | 1回以上      | `\d+`                  |
| `*`      | 0回以上      |                        |
| `?`      | 0回または1回   |                        |
| `{3}`    | ちょうど3回    | `\d{3}`                |
| `{2,4}`  | 2〜4回      |                        |
| `^`      | 文字列の先頭    |                        |
| `$`      | 文字列の末尾    |                        |
| `()`     | グループ化     |                        |
| `\|`     | または       | `cat\|dog`             | */



// const regex = /\d+/;

// console.log(regex.test("abc123def"));
// // true

// 「英小文字だけで、3文字以上6文字以下」の文字列に一致させたい

// const regex = /[a-z]{3,6}/;

// console.log(regex.test("abc"));      // true
// console.log(regex.test("abcdef"));   // true
// console.log(regex.test("ab"));       // false
// console.log(regex.test("abcdefg"));  // false
// console.log(regex.test("abc123"));   // false

// const regex = /^\d{4}$/;

// regex.test("1234");   // true
// regex.test("123");    // false
// regex.test("12345");  // false
// regex.test("a1234");  // false

// **「cat または dog のどちらかに完全一致」**させたい場合

// const regex = /^[cat|dog]$/;

// regex.test("cat");     // true
// regex.test("dog");     // true
// regex.test("catdog");  // false
// regex.test("bird");    // false

// const regex = /^(apple|banana|orange)$/;

// const regex = /^[a-z]\d{2}$/;

// console.log(regex.test("a12"));

// 「英小文字2文字 + ハイフン + 数字3桁」

// const regex = /^[a-z]{2}-\d{3}$/;

// console.log(regex.test("ab-1234"));

// const regex = /^[A-Z]{1}[a-z]{2,4}$/;

// console.log(regex.test("Abc"));

// 数字3桁、ハイフンはあってもなくてもOK、数字4桁

// const regex = /^\d{3}-?\d{4}$/;

// console.log(regex.test("2131234"));

// 英小文字 a で始まり、その後に数字が0文字以上続く

// const regex = /^[a]+\d*$/;

// console.log(regex.test("a124"));

// const regex = /^a\d+$/;

// console.log(regex.test("a1"));

// const regex = /^[abc]\d{2}$/;

// console.log(regex.test("c12"));

// const regex = /^[^0-9]\d{2}$/;

// const regex = /^\w{5,8}$/;
// ! const regex = /^[A-Za-z0-9]{5,8}$/;

// console.log(regex.test("A1b2C3"));

// 英小文字または数字だけで、6文字ちょうど。ただし先頭は必ず英小文字

// const regex = /^[a-z]{1}[A-Za-z0-9]{5}$/;

// 先頭は英大文字、その後は英小文字または数字を3〜5文字

// const regex = /^[A-Z][a-z0-9]{3,5}$/;

// const regex = /^https?:\/\//;

// const regex = /(jpg|png)$/;

// console.log(regex.test("photo.jpg"));

// const regex = /^example\.com$/;

// console.log(regex.test("example.com"));

// const regex = /^user-\d+$/;

// console.log(regex.test("admin-1"))

// 英小文字3文字 + - + 数字2〜4桁、ただしハイフンは省略可能

const regex = /^[a-z]{3}-?\d{2,4}$/;

console.log(regex.test("ab-12"))