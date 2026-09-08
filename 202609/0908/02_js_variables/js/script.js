/* ========================
   *変数 let
======================== */
// ?let number; もしくは、
let number = 16;
console.log(number);

// *再代入できる
number = 100;
console.log(number);

// !再宣言はできない シンタックスエラー
// let number = 17;

// !letは再宣言はできないが、再代入は可能

/* ========================
   *定数 const
======================== */
const shareButton = '共有する';
console.log(shareButton);

// !再代入できない タイプエラー
// shareButton = 'もっと共有する';

// !constは再宣言と再代入共に不可

