/* ========================
   *Chapter3 データ型と演算子
======================== */

// !JavaScriptは動的型付言語かつ弱い型付言語
// 変数のデータ型が代入される値で変化する。
// 代表例：JavaScript , Python

// !静的型付言語かつ強い型付言語
// 変数を宣言する際にデータ型も指定するので、異なるデータ型はその変数には入らなくなる。
// 代表例：Java , C言語（C# , C++）

// *JavaScriptの弱点である動的型付け言語の部分を、静的型付け言語に変えるTypeScriptが登場した。

/* ========================
   *プリミティブ型
======================== */

// !null型
// 値がない、存在しない
const nullElm = document.querySelector('#target');
console.log(nullElm);
console.log(typeof nullElm);

// !undefined型
// 未定義、値が定義されていない
let something;
console.log(something);
console.log(typeof something);

// !Boolean型
// 真偽値と呼ばれるデータ型
// true(真)、false(偽)の2種類の値を扱う
let boolElm = true;
console.log(typeof boolElm);


// !Number型
// 数値を表すデータ型。整数・小数・正負の区別なく、すべての数値がNumber型
let numberElm = 121;
console.log(numberElm);
console.log(typeof numberElm);

// !BigInt型
// Number型では扱えない数字を扱う型。
// 必要でない場合は使わない。数字の後ろにnをつけたら、BigInt型で扱える数字になる。
let bigintElm = 99n;
console.log(bigintElm);
console.log(typeof bigintElm);

// !String型
// 文字列型、シングルクォート、もしくはダブルクォート、もしくはバックティック（バッククォート）で囲まれた0文字以上の文字の連なりをString型（文字列）という。
let stringElm = 'こんにちは';

// 半角英数字で数字をそのまま入力すれば、Number型。シングルクォート、もしくはダブルクォートで囲めば、String型になる
let stringElms = '121';
console.log(stringElm);
console.log(stringElms);
console.log(typeof stringElms);

const loginName = document.querySelector('#login-name');
const userName = '今井';
loginName.textContent = userName;
// loginName.textContent = '今井りか';

// *バックティックで囲まれた文字列の書き方をテンプレートリテラルと呼ぶ
// テンプレートで書く場合、文字列の中で変数が使える
// 変数や値を扱う場合は、${}で変数名・値を囲って記述する
// 多用するため、バックティックと${}の扱いを覚える
loginName.textContent = `${userName}りか`;

// *文字'列'と名前の通り、Number型はシングルクォート、もしくはダブルクォートで囲まれた中の文字を列として、文字ごとにインデックス番号が割り振られる。

// !インデックス番号
// 並び順。0からカウントする
console.log(userName.length);

// !Symbol型
// 他の変数やデータとは絶対に同じにならない、唯一のデータであると保証されたデータ型
const sym1 = Symbol('シンボル');
const sym2 = Symbol('シンボル');
console.log(sym1 === sym2);

/* ========================
   *オブジェクト型
======================== */

// !Object オブジェクト
const video = {
    title: '15分でできるチーズケーキ',
    file: 'cheesecake15.mp4',
    duration: '4:52',
};

console.log(video);
console.log(typeof video);
// console.log(video.title);
console.log(video.file);
console.log(video.duration);

// *オブジェクト型の中の値を上書きしたり、新しい値を追加することは再代入ではないので、constで宣言している変数に対しても書き換えが可能
video.title = '10分でできるフロランタン';
console.log(video);
console.log(video.title);

// !Array 配列
// オブジェクトと同じで複数の値を保存しておけるデータ構造
const docs = ['入会申込書', '振込口座登録書', 'チェックリスト'];
console.log(docs);
console.log(docs instanceof Array);
console.log(typeof docs);
console.log(docs.length);
// console.log(docs[0]);
// console.log(docs[0].length);
console.log(docs[1]);
const filterElm = docs.filter((doc) => doc.length <= 5);
console.log(filterElm);

// console.log(docs[2]);

// !function 関数
// なんらかの値を受け取り、その値を元に処理をして、結果を返す小さなプログラム
//TODO function 関数名(引数名) { 処理内容 };
//* 関数名や引数名は任意で名付けられる。引数は複数設定可能。
//* 引数は左から順番に、第一引数、第二引数、といったふうに順番が設定される

function add(xampp, y) {
    return xampp + y;
}
console.log(add('localhost: ', '4040'));
console.log(add(15, 9));

//* 引数は省略可能。ただし、関数が実行された際に同じ結果しかほぼ返さない関数になる
function add2() {
    return 15 + 4;
}
console.log(add2());

//* return(戻り値)も省略できる。処理だけ実行して、値を何も返す必要がない場合はreturnは不要。

function add3() {
    console.log('鳥豚キーマカレー');
    15 + 9;
}

//* 関数を実行する場合は、関数名を記述すれば実行される。関数名を書く際に、丸括弧（）をつける。
add3();

/* ========================
   *演算子
======================== */
// 四則演算は省略して、それ以外の算術演算子の説明

// ! %
// 剰余演算子。割り算における余りの値を出す演算子
console.log(15 % 6);
console.log(15 % 5);
// * 剰余演算子は余りを出す演算子ですが、割り切れるかどうか確認する際によく扱う。

// ! **
// 冪乗演算子。
console.log(2 ** 3);

// ! 文字列連結
const datePlus = '11月8日';
const messagePlus = '前売り券は' + datePlus + '発売開始です。';
const messageTemplate = `前売り券は${datePlus}発売開始です。`;
console.log(messagePlus);
console.log(messageTemplate);

// * 異なるデータ型を加算演算子を使うと、データの方を文字列型にする。基本的にはしない。
let warning = 0.1 + '以上の数字で指定してください';
console.log(warning);
console.log(typeof warning);

// ! インクリメントとデクリメント
// 前置と後置があるが、最初は後置を使う。変数名の後ろに++か、--をつける。
// TODO 使い所は、カウントアップやカウントダウン
let x = 6;
x++;
console.log(x);


/* ========================
   *比較演算子と論理演算子
======================== */

//? 比較演算子

// ! == === 等価演算子
// 左辺と右辺を比較して、一致している場合はtrueを返す。一致していない場合はfalseを返す演算子。
const numElm = 8;
const strElm = '8';
console.log(numElm == strElm); //true
console.log(numElm === strElm); //false

// ===は、値とデータの型が一致しているかをチェックする。
// ==は、値だけ一致しているかをチェックする。
// ==は、必要でないならばエラー防止も兼ねて使わない。

// ! != !== 不等価演算子
// 左辺と右辺を比較して一致していないならtrueを返す。一致している場合はfalseを返す
console.log(numElm != strElm); //false
console.log(numElm !== strElm); //true

// 　!==の厳密不等価演算子を基本扱う

// ! < > <= >= 演算子
// 大なり小なりを使った式を作り、その式が成立しているかどうかを判定する演算子
console.log(numElm < 120); //true
console.log(numElm > 120); //false
console.log(numElm <= 120); //true
console.log(numElm >= 120); //false

//! = 代入演算子
// 左辺に対して右辺の値を代入するときに使う演算子

// ? 論理演算子
// 比較演算子と組み合わせて複雑な条件式を作るための演算子

// ! && AND演算子（論理積）
// 比較演算子の式を二つ以上比較して、それぞれの指揮全てがtrueだった場合はtrueを返す
let loc = 285;
console.log((loc >= 0 && loc <= 290)); //true
console.log((loc >= 0 && loc <= 280)); //false
console.log((loc >= 0 && loc <= 299 && loc === 285)); //false

// ! || OR演算子（論理和）
// 比較演算子の指揮を二つ以上比較して、いずれかがtrueだったら、trueを返す。全部がfalseだった場合はfalseを返す。
console.log((loc >= 286 || loc <= 284 || loc === 286));

// ! 論理否定演算子
// trueもしくは、trueとみなされる値をfalseにする。falseもしくは、falseとみなされる値をtrueにする演算子。

const trElm = !something;
console.log(trElm); //true
const flElm = !numElm;
console.log(flElm); //false

// 値が正しく取れなかった時を判定したい時などに扱われる

