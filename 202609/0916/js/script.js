// note 関数宣言
// function mintia(引数) { 処理; 戻り値(return) }

// * 関数宣言の丸括弧の中に入れる引数 = 仮引数
function log(a, b) {
    console.log(`${a}が${b}`);
}

// 関数は実行されない限り、中の処理は動かない。実行する場合は、関数名と()を書く。

const functions = [log];

// * 関数を実行する際に()の中に入れる引数 = 実引数
functions.forEach((func) => func('ドラえもん', '現れた'));
log('ちいかわ', '泣いちゃった')

// todo 関数は実行される際の引数に応じて異なる結果を出力できるように設計していくのが基本

// note ブロックスコープ
// 関数や変数が宣言された場所を囲む{}の内での参照範囲

// ! ブロックスコープの外側で宣言された変数や関数は中から参照できる
// note グローバルスコープ
// どこからでも参照できる最大のスコープ。{}やモジュールの中ではない場所に作られた変数や関数はグローバルスコープの扱いになる
const fukuro = 'ふくろー';

function power(num) {
    const result = num * num;
    const namu = 'なむ';
    console.log(namu);
    console.log(fukuro);
    return result;
}

// ! ブロックスコープの外側から呼び出すことはできない。
// console.log(result);
// console.log(namu);

console.log(power(10));

/* ================================================ */

// review 関数の定義方法の種類
// note 関数式
// 変数に関数を代入する形で定義する関数のことを関数式という
// todo 関数式は関数の巻き上げが起きないので、呼び出す前に宣言する必要がある

const fullName = function (firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log(fullName('今井', 'りか'));
console.log(fullName());

// note アロー関数
// 関数の定義を短くシンプルに書くための記法がアロー関数。アロー関数は基本関数式で記述する
// todo 引数が一つしかない場合は()を省略できる。処理がreturnの一行しか存在しないならば、returnも{}も省略できる。
const plus2 = (x) => {
    return x + 2;
}; // const plus2 = x => x + 2;

// idea アロー関数の基本
// (引数) => {処理}

console.log(plus2(5));

// todo 通常の関数宣言と関数式によるアロー関数がある。短い関数、処理が短い関数はアロー関数で作る。複数の処理や引数を扱う関数は通常の関数宣言で作る。
// * 最初の条件はこの条件で使い分ける

// review 引数について
// 引数はデフォルト値を設定できる。// * デフォルト値の設定は仮引数の後ろに=をつけて、初期値を書く。

const fullName2 = function (firstName = "創造", lastName = "太郎") {
    return `${firstName} ${lastName}`;
}

console.log(fullName2('今井', 'りか'));
console.log(fullName2());

// note 数を指定しない（可変長）引数を受け取る方法
// 可変長の引数を受け取る場合はスプレット構文を書く。// todo スプレット構文の書き方は、...と、ドットを三つ書き、その後ろに引数名を書く。
// review スプレット構文の引数を使った場合、配列で値が代入される

function multiParams(...rest) {
    console.log(rest);

}

multiParams(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100);

// idea 可変長引数と通常の引数は混在できるので、最低限必要な引数は通常の引数で指定をし、余剰分はスプレット構文で受け取れるようにすることができる。
// review このように、数を決めないで引数を受け取れるようにする方法を、残余引数という。
function multiParams2(a, b, ...args) {
    console.log(a + b);
    console.log(args);

}

multiParams2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100);

// 関数側の引数の数が、呼び出し側が渡してきた引数の数よりも少ない場合、関数側の引数超過分は無視される。エラーは起きない。
function twoParam(a, b) {
    console.log(a, b);
}

twoParam(1, 2, 3);

// 関数側の引数の数が、呼び出し側が渡してきた引数の数よりも多い場合、不足分はundefinedが渡される。エラーは起きない。// todo ただし、処理の中でエラーの原因にはなるため、足りない状態は避けるべき
function threeParam(a, b, c) {
    console.log(a, b, c);

}

threeParam(1, 2);

// 問1
// twoParamの関数は実行の引数が超過分消えてしまう。残すにはどうするべきか
function twoParam2(a, b, ...rest) {
    console.log(a, b, ...rest);
}

twoParam2(1, 2, 3);

// 問2
// threeParamの関数は実行時に足りない引数分、undefinedが出てしまう。引数は増やさずに、undefinedが出ないようにするにはどうするべきか
// 例として、Cには6が表示されるようにしてください

function threeParam2(a, b, c = a + b) {

    console.log(a, b, c);

}

threeParam2(2, 4);

/* ========================
   引数まとめ
======================== */
// 引数の値は、呼び出し側が正しく入力されないケースも想定される。// ! その場合に備えて、残余引数やデフォルト値などを設定しておき、想定外のエラーを未然に防ぐことができる。