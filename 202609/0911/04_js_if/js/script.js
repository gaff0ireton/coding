/* ========================
   *P110 制御構造 条件分岐
======================== */

/* ========================
   *if文
======================== */
const age = 20;

if (age >= 18) {
    console.log('成人です。');

} // 成人です

/* ========================
   *if ~ else 文
======================== */
const studentAge = 16;

if (studentAge >= 18) {
    console.log('成人です。');

} else {
    console.log('未成年です。');

} // 成人です

/* ========================
   *if ~ else if ~ else 文
======================== */
const testScore = 79;

if (testScore >= 80) {
    console.log('合格です。');

} else if (testScore >= 60) {
    console.log('追試です。');

} else {
    console.log('不合格です。');

}

/* ========================
   *1.比較演算子を使う条件式
======================== */
const price = 500;

if (price >= 500) {
    console.log('500円以上の商品です。');

}

/* ========================
   *2.比較演算子と論理演算子を組み合わせる条件式
======================== */
const visitorAge = 20;
const hasTicket = true;

if (visitorAge >= 18 && hasTicket) {
    console.log('入場できます。');

}

const examScore = 65;
const attendance = 90;

if (examScore >= 70 || attendance >= 80) {
    console.log('合格です。');

}

/* ========================
   *3.値をそのまま使う条件式
======================== */

// * 変数を使ったver
const isLoggedIn = false;

if (isLoggedIn) {
    console.log('ログインしています。');

} else {
    console.log('ログインしていません。');

}

// * 関数を使ったver
function hasStock() {
    return true
}

if (hasStock()) {
    console.log('在庫があります。');

} else {
    console.log('在庫がありません。');

}

// * メソッドを使ったver
const fruits = ['りんご', 'みかん',];

if (fruits.includes('りんご')) {
    console.log('りんごがあります。');

}

// * TruthyまたはFalsyを使ったver
const enteredName = '田中';

if (enteredName) {
    console.log(enteredName + 'さんが入力されています。');
    console.log(`${enteredName}さんが入力されています。`);

}

/* ========================
   * switch ~ case ~ default 文
======================== */
const selectedFruit = 'バナナ';

switch (selectedFruit) {
    case `りんご`:
        console.log('赤い果物です。');
        break;

    case `バナナ`:
        console.log('黄色い果物です。');
        break;

    case `ぶどう`:
        console.log('紫色の果物です。');
        break;

    default:
        console.log('登録されていない果物です。');
        break;
}

const sampleValue = '1';

switch (sampleValue) {
    case '1':
        console.log('文字列の「1」です。');
        break;

    case 1:
        console.log('数字の「1」です。');
        break;

    default:
        console.log('一致しません。');

        break;
}

const today = '月曜日';

switch (today) {
    case '土曜日':
    case '日曜日':
        console.log('休日です。');

        break;

    default:
        console.log('平日です。');

        break;
}

/* ========================
   * 三項演算子
======================== */

// * 条件式に（）を使う場合の書き方
const myPoint = 350;
const message = (myPoint >= 50) ? 'ポイントが使えます。' : 'ポイントが使えません。';

console.log(message);

// *条件式に（）を使わない場合の書き方
const loggedIn = true;
const loginStatus = loggedIn ? 'ログイン中です。' : 'ログインしていません。';

console.log(loginStatus);

