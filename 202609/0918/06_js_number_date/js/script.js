/* ========================
    review P161 Numberオブジェクト
======================== */

// * 数値に関する便利な機能を提供するオブジェクト

/* ========================
   note 1. Number関数で数値に変換する
======================== */
const inputPrice = '1000';
console.log(typeof inputPrice);

const price = Number(inputPrice);
console.log(typeof price);
console.log(price + 500);

console.log(Number('こんにちは')); // idea NaN
console.log(Number('1200px')); // idea NaN

/* ========================
   note 2.文字列を整数・小数に変換する
======================== */
// idea 整数に変換
console.log(Number.parseInt('1200px', 10)); // ! 第二引数は基数を入れる(2,10,16)

// todo Number.parseInt(文字列,基数);

console.log(Number.parseInt('12.5kg', 10)); // ! 文字列内に小数が含まれていても、整数に変換

// idea 小数に変換
console.log(Number.parseFloat('12.5kg'));

/* ========================
   note 3.NaNを判定する
======================== */
const result = Number('こんにちは');
console.log(result); // idea NaN
console.log(Number.isNaN(result)); // idea true

console.log(NaN === NaN); // idea false

/* ========================
   note 4.正数か判定する
======================== */
console.log(Number.isInteger(10)); // idea true
console.log(Number.isInteger(10.5)); // idea false

/* ========================
    review P177 Mathオブジェクト
======================== */
// * さまざまな算術演算が可能。数学的に意味のある数字を調べることが可能なオブジェクト

/* ========================
   note 5.Mathオブジェクトを使って、小数を丸める
======================== */
console.log(Math.floor(12.8)); // ! 切り捨て
console.log(Math.ceil(12.2)); // ! 切り上げ
console.log(Math.round(12.5)); // ! 四捨五入
console.log(Math.trunc(12.8)); // ! 小数部分を取り除く

// todo 正の数
console.log(Math.floor(12.8)); // idea 12
console.log(Math.trunc(12.8)); // idea 12

// todo 負の数
console.log(Math.floor(-12.8)); // idea -13
console.log(Math.trunc(-12.8)); // idea -12

/* ========================
   note 6.乱数を発生させる
======================== */
console.log(Math.random()); // ! 0以上1未満のランダムな小数を返す

// おみくじ実装で扱う
console.log(Math.random() * 5); // idea 0以上5未満のランダムな数字を返す
console.log(Math.floor(Math.random() * 5)); // idea 小数は切り捨てた0以上5未満のランダムな数字（整数）を返す

/* ========================
   note 7.最大値と最小値を求める
======================== */
console.log(Math.max(10, 3, 212)); // ! 最大値を返す
console.log(Math.min(10, 3, 212)); // ! 最小値を返す

/* ========================
   review P186 Dateオブジェクト
======================== */

// * 日時・時刻に関する便利な機能を提供するオブジェクト
// * 日付・時刻を扱うときは、まずDateオブジェクトを作る

/* ========================
   note 1.現在の時刻を取得する
======================== */
const now = new Date();
console.log(now);

/* ========================
   note 2.指定した日付を作る
======================== */
const birthday = new Date(2000, 1 - 1, 21);
console.log(birthday);

/* ========================
   note 3.年・月・日を取得する
======================== */
const date = new Date();

const year = date.getFullYear(); // ! dateから年を取得
console.log(year);

const month = date.getMonth() + 1; // ! dateから月を取得するが、+1する必要がある
console.log(month);

const day = date.getDate(); // ! dateから日を取得
console.log(day);

console.log(`${year}年${month}月${day}日`); // idea 2026年9月18日
console.log(`${year}年${String(month).padStart(2, '0')}月${String(day).padStart(2, '0')}日`); // idea 2026年09月18日

/* ========================
   note 4.時・分・秒を取得する
======================== */
const hour = date.getHours(); // ! dateから時を取得
console.log(hour);

const minutes = date.getMinutes(); // ! dateから分を取得
console.log(minutes);

const seconds = date.getSeconds(); // ! dateから秒を取得
console.log(seconds);

/* ========================
   note 5.曜日の取得
======================== */
const days = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
const dayNum = date.getDay(); // ! dateから曜日(0,1,2,3,4,5,6)を取得
console.log(days[dayNum]); // idea 当日の曜日が取得

/* ========================
   note 6.日付を変更する
======================== */
const onWeekLater = new Date();
onWeekLater.setDate(onWeekLater.getDate() + 7);
console.log(onWeekLater);

/* ========================
   note 7.日付を比較する
======================== */
const date01 = new Date(2026, 8, 18); // 2026/9/18
const date02 = new Date(2000, 0, 18); // 2000/1/21

console.log(date01 < date02);

const delta = date01.getTime() - date02.getTime(); // ! 日付の差をミリ秒に変換
console.log(delta);

// 日数に変換
const dt = Math.trunc(delta / 1000 / 60 / 60 / 24);

console.log(`${dt}日`);

/* ========================
   note 8.日付を読みやすく表示する
======================== */
console.log(date.toLocaleDateString('ja-JP')); // idea yyyy/m/dd
console.log(date.toLocaleTimeString('ja-JP')); // idea hh:mm:ss
console.log(date.toLocaleString('ja-JP')); // idea yyyy/m/dd hh:mm:ss
