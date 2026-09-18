// === DOM要素の取得 ===
const dateTxt = document.querySelector('#dateText');
const clockTxt = document.querySelector('#clockText');
const result = document.querySelector('#omikujiResult');
const placeholder = document.querySelector('.omikuji_placeholder');
const btn = document.querySelector('#drawBtn');

// =========================================================
// 時計の処理
// =========================================================

// 曜日は数値（0〜6）で取得できるので、日本語に変換する対応表を用意する
const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'];


// 現在時刻を取得して画面に表示する

const toDoubleDigit = (number) => {
    return String(number).padStart(2, '0');
}

const updateClock = () => {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();
    const day = now.getDate();
    const dayOfWeek = now.getDay();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    dateTxt.textContent = `${year}年${toDoubleDigit(month)}月${toDoubleDigit(day)}日（${WEEKDAYS[dayOfWeek]}）`;
    clockTxt.textContent = `${toDoubleDigit(hour)}:${toDoubleDigit(minutes)}:${toDoubleDigit(seconds)}`;
}

setInterval(updateClock, 1000); // ! 1000ms毎にupdateClock関数を呼び出す

// =========================================================
// おみくじの処理
// =========================================================

// 出現しうる結果の一覧
const OMIKUJI_RESULTS = ['大吉', '中吉', '小吉', '吉', '末吉', '凶'];

// インデックス番号は0~5を利用する
console.log(OMIKUJI_RESULTS[0]);
console.log(OMIKUJI_RESULTS[1]);
console.log(OMIKUJI_RESULTS[2]);
console.log(OMIKUJI_RESULTS[3]);
console.log(OMIKUJI_RESULTS[4]);
console.log(OMIKUJI_RESULTS[5]);

for (const item of OMIKUJI_RESULTS) {
    console.log(item);
}

// 配列の長さ（要素数）は6
console.log(OMIKUJI_RESULTS.length);

//　配列からランダムに選んで、結果を表示する
const drawOmikuji = () => {
    const number = Math.floor(Math.random() * OMIKUJI_RESULTS.length);
    placeholder.textContent = `${OMIKUJI_RESULTS[number]}です！`;
}


btn.addEventListener("click", drawOmikuji);

// btn.addEventListener("click", () => {
//     drawOmikuji();
// });