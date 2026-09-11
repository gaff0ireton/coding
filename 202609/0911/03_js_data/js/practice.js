// console.log(123);

// 問題1 //* 正解
const num1 = 12;
const num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// 問題2 //* 正解
const price = 500;
let quantity = 3;
console.log(price * quantity);

// 問題3 //* 正解
let count = 5;
console.log(++count);
console.log(--count);

// 問題4 //* 正解
const strElm = 'JavaScript';
const numElm = 100;
const boolElm = true;
let undElm;

console.log(typeof strElm);
console.log(typeof numElm);
console.log(typeof boolElm);
console.log(typeof undElm);

// 問題5 //* 正解
const userName = '田中';
const age = '20';
console.log(userName + 'さんは' + age + '歳です。');
console.log(`${userName}さんは${age}歳です。`);

// 問題6 //* 正解
const score = 80;
console.log(score >= 70);
console.log(score === 80);
console.log(score === '80');

// 問題7 //* 正解
const visitorAge = 20;
const hasTicket = true;
console.log(visitorAge >= 18 && hasTicket);

// 問題8 //* 正解
const testScore = 64;
const attendance = 90;
console.log(testScore >= 70 || attendance >= 80);

// 問題9
let loginName;
console.log(!loginName);
console.log(loginName ?? 'ゲスト');