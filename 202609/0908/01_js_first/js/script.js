// alert('alert()はダイアログを表示するメソッド');
// alert('Hello.World!');
console.log('外部JSファイルが読み込まれました');

/* ========================
   !Date練習
======================== */

const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate() + 1).padStart(2, "0");
const formattedDate = `${year}/${month}/${day}`;
console.log(formattedDate);

// alert(`今は${formattedDate}です。`);

/* ========================
   P24 ブール値
======================== */

const content = document.querySelector('.is-inview');

const forHere = confirm('犬は好き？🐕');
console.log(forHere);

if (forHere) {
    content.classList.add('is-view');
    console.log('nice...');
} else {
    console.log('get out...');
}

/*
[OK]クリック→true
[キャンセル]クリック→false
*/

// const headtxt = document.querySelector('h1');

/* ========================
   !P27 関数
======================== */
function calc(here) {
    let tax = 1.08;
    if (here) {
        tax = 1.1;
    }
    return tax;
}

const taxRate = calc(forHere);
console.log(`消費税:${taxRate}`);


/* ========================
   !パターン１：引数なし、戻り値なし
======================== */
function greet() {
    console.log('hello');
}

greet();

/* ========================
   パターン２：引数あり、戻り値なし
======================== */
function dog(kind) {
    console.log(`このワンちゃんの種類は${kind}です`);

}

dog('コーギー');

/* ========================
   !パターン３：引数なし、戻り値あり
======================== */
function dogGreeting() {
    return 'ワン！';
}

const message = dogGreeting();
console.log(message);

/* ========================
   !パターン４：引数あり、戻り値あり
======================== */
function dogAdd(a, b) {
    return a + b;
}

const result = dogAdd(2, 4);
console.log(result);

const total = document.querySelector('#total');
total.textContent = calc(forHere) * 600;



/* ========================
   !api練習
======================== */

const response = await fetch("https://dog.ceo/api/breeds/image/random");
const data = await response.json();

console.log(data);

const img = document.querySelector('.dog-img img');

const btn = document.querySelector('.dog-btn');

img.src = data.message;

btn.addEventListener('click', async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    img.src = data.message;

});