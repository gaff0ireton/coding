console.log('Hello World!!');
console.log(typeof 'Hello World!!');

console.log(14 % 2);


/* ========================
   *P97 代入演算子
======================== */
let number = 10; // 単純代入演算子

number = 20; // 20を再代入
number += 5; // 25　 //? number = number + 5
console.log(number);

number -= 5 //20　 //? number = number - 5
console.log(number);

/* ========================
   *P100 分割代入
======================== */

// 配列
const arr = ['first', 'second', 'third'];

const [a, b] = arr; // 分割代入(配列)

console.log(a); // first
console.log(b); // second

// オブジェクト
const imageData = {
    id: 138,
    path: '/images/item1.jpg',
    alt: '空気清浄機',
};

const { id, path } = imageData; // 分割代入(オブジェクト)
console.log(id); // 138
console.log(path); // /images/item1.jpg



// *if文と三項演算子

let message;

function msg(age) {
    if (age >= 20) {
        message = '成人です';
    } else {
        message = '未成人です'
    }
    // const message = age >= 20 ? "成人です" : "未成年です"; // ! 三項演算子
    return message;
}

console.log(msg(20));


