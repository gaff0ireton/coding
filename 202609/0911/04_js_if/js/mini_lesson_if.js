// ===== ミニレッスン1 =====
/* 変数numに10を代入し、値が10であれば「10です」とコンソールに表示してください。*/

const num = 10;
if (num === 10) {
    console.log(`${num}です`);

}


// ===== ミニレッスン2 =====
/* 変数ageに20を代入し、値が18以上であれば「成人です」、それ以外の場合は、「未成年です」とコンソールに表示してください。*/

const age = 20;

if (age >= 18) {
    console.log('成人です');

} else {
    console.log('未成人です');

}

// note 三項演算子

let message = age >= 18 ? console.log('成人です') : console.log('未成人です');


// ===== ミニレッスン3 =====
/*
変数scoreに80を代入し、値が80以上であれば「優秀です」、60以上であれば「合格です」、
それ以外であれば「不合格です」とコンソールに表示してください。
*/

const score = 80;

if (score >= 80) {
    console.log('優秀です');

} else if (score >= 60) {
    console.log('合格です');

} else {
    console.log('不合格です');

}

// note 三項演算子

const result = score >= 80 ? console.log('優秀です') : score >= 60 ? console.log('合格です') : console.log('不合格です');

// ===== ミニレッスン4 =====
/*
変数signalに'赤'を代入し、値が「青」であれば「進んでください」、「黄」であれば「注意してください」、
「赤」であれば「止まってください」、それ以外であれば「信号の色が正しくありません」と
コンソールに表示してください（if文で実装すること）。
*/

const signal = '青';

if (signal === '青') {
    console.log('進んでください');

} else if (signal === '黄') {
    console.log('注意してください');

} else if (signal === '赤') {
    console.log('止まってください');

} else {
    console.log('信号の色が正しくありません');

}

// note 三項演算子

const res = signal === '青' ? console.log('進んでください') : signal === '黄' ? console.log('注意してください') : signal === '赤' ? console.log('止まってください') : console.log('信号の色が正しくありません');


// ===== ミニレッスン5 =====
/* ミニレッスン4と同じ処理を、switch文を使って実装してください。*/

switch (signal) {
    case '青':
        console.log('進んでください');
        break;

    case '黄':
        console.log('注意してください');
        break;

    case '赤':
        console.log('止まってください');
        break;

    default:
        console.log('信号の色が正しくありません');
        break;
}
