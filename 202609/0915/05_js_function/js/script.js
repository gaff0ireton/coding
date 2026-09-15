/* ========================
   * P129 関数
======================== */

function greet() {
    console.log('こんにちは'); // * ②処理
    // * ③出力 戻り値なし
}

greet(); // * ①入力

function addNumbers(a, b) {
    const result = a + b; // * ②処理
    return result; // * ③出力
}

const answer = addNumbers(2, 4); // * ①入力

console.log(answer);

function CountPoint(total) {
    const point = Math.floor(total * .1); // * ②処理
    return point; // * ③出力
}

const message = `今回のお買い上げで${CountPoint(20000)}ポイント還元!`; // * ①入力
console.log(message);


/* ========================
   * 関数の呼び出し
======================== */

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDay();

console.log(`今日は${year}年${month}月${day}日です。`);

/* ========================
   * 関数の宣言・定義
======================== */

console.log(power(8)); // todo 関数の巻き上げ

function power(num) {
    const result = num * num; // * 引数numもブロックスコープ
    return result; // * ブロックスコープ
}

console.log(power(8));
/* console.log(result); */ // ? スコープ外だから呼び出しできない

if (true) {
    const hello = 'こんにちは';
    console.log(hello);

}

/* console.log(hello); */ // ? スコープ外だから呼び出しできない
