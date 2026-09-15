// console.log(123);

/* ========================
   *初級
======================== */

// 問題1
const number = 8;

if (number % 2 === 0) {
    console.log('偶数です。');

}


// 問題2
const password = 'abc123';

if (password.length >= 6) {
    console.log('使用できます。');

} else {
    console.log('6文字以上で入力してください。');

}

// 問題3
const num = 0;
if (num > 0) {
    console.log('正の数です。');

} else if (num < 0) {
    console.log('負の数です。');

} else {
    console.log('0です。');

}


// 問題4
const price = 3500;
const shipping = price >= 3000 ? 0 : 500;
console.log(shipping);

// 問題5
const color = 'yellow';

switch (color) {
    case 'red':
        console.log('止まってください。');
        break;

    case 'yellow':
        console.log('注意してください。');
        break;

    case 'green':
        console.log('進むことができます。');
        break;

    default:
        console.log('信号の色を確認できません。');
        break;
}


/* ========================
   *中級
======================== */

// 問題1
const temperature = 25;
const isBadWeather = true;

if (temperature > 20 && !isBadWeather) {
    console.log('外に干せます。');

} else {
    console.log('部屋に干します。');

}

// 問題2
const day = '日曜日';
if (day === '土曜日' || day === '日曜日') {
    console.log('休日です。');

} else {
    console.log('休日以外の内容です。');

}


// 問題3
const text = '';
if (!text) {
    console.log('文字を入力してください。');

} else {
    console.log('入力されています。');

}


// 問題4
const email = 'sample@example.com';
if (email.includes('@')) {
    console.log('メールアドレスの形式です。');

} else {
    console.log('@を入力してください');

}


// 問題5
const age = 15;
const discountDay = '水曜日';

if (age < 18 || discountDay === '水曜日') {
    console.log('割引料金です。');

} else {
    console.log('通常料金です。');

}