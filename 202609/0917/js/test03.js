/* ========================
   ? 初級問題
======================== */
// ? 問題1
function hello() {
    console.log('こんにちは');
}

hello();

// review アロー関数
const hello2 = () => {
    console.log('こんにちは');
}

hello2();

// ? 問題2
function greet(name = "ゲスト") {
    return `こんにちは、${name}さん`

}

console.log(greet('田中'));
console.log(greet());

// review アロー関数
const greet2 = (name = 'ゲスト') => {
    return `こんにちは、${name}さん`
}

console.log(greet2('田中'));
console.log(greet2());

// ? 問題3
function add(num1 = 0, num2 = 0) {
    return num1 + num2;
}

console.log(add(3, 5));

// review アロー関数
const add2 = (num1 = 0, num2 = 0) => {
    return num1 + num2;
}

console.log(add2(3, 5));


// ? 問題4
function getTaxPrice(price = 0, taxRate = .1) {
    return price * (1 + taxRate);
}

console.log(getTaxPrice(1000));

// review アロー関数
const getTaxPrice2 = (price = 0, taxRate = .1) => {
    return price * (1 + taxRate);
}

console.log(getTaxPrice2(1000));

/* ========================
   ? 中級問題
======================== */
// ? 問題1
function isEven(number = 0) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(8));
console.log(isEven(5));

// review アロー関数・三項演算子
const isEven2 = (number = 0) => {
    return number % 2 === 0 ? true : false;
}

console.log(isEven2(8));
console.log(isEven2(5));


// ? 問題2
function checkAge(age = 0) {
    if (age >= 18) {
        return '成人です'
    } else {
        return '未成年です'
    }
}

console.log(checkAge(20));
console.log(checkAge());

// review アロー関数・三項演算子
const checkAge2 = (age = 0) => {
    return age >= 18 ? '成人です' : '未成人です';
}

console.log(checkAge2(20));
console.log(checkAge2(0));


// ? 問題3
function getMax(num1 = 0, num2 = 0) {
    let maxNum = Math.max(num1, num2);
    return maxNum;
}

console.log(getMax(10, 7));

// review アロー関数
const getMax2 = (num1 = 0, num2 = 0) => {
    let maxNum = Math.max(num1, num2);
    return maxNum;
}

console.log(getMax2(10, 7));

// ? 問題4
function getResult(score = 0) {
    if (score >= 80) {
        return 'A';
    }
    if (score >= 60 && score < 80) {
        return 'B';
    }
    if (score < 60) {
        return 'C';
    }
}

console.log(getResult(75));

// review アロー関数・三項演算子
const getResult2 = (score = 0) => {
    return score >= 80 ? 'A' : score >= 60 && score < 80 ? 'B' : 'C';
}

console.log(getResult2(75));


/* ========================
   ? 上級問題
======================== */

// ? 問題1
function sum(...numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(10, 20, 30));
console.log(sum(1, 2, 3, 4, 5));

// review アロー関数
const sum2 = (...numbers) => {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum2(10, 20, 30));
console.log(sum2(1, 2, 3, 4, 5));

// ? 問題2
function findName(names = [], target = "") {
    // return names.includes(target);
    for (const name of names) {
        if (name === target) {
            return true;
        }
    }
    return false;
}

console.log(findName(["田中", "佐藤", "鈴木"], "佐藤"));
console.log(findName(["田中", "佐藤", "鈴木"], "山田"));

// review アロー関数
const findName2 = (names = [], target = "") => {
    // return names.includes(target);
    for (const name of names) {
        if (name === target) {
            return true;
        }
    }
    return false;
}

console.log(findName2(["田中", "佐藤", "鈴木"], "佐藤"));
console.log(findName2(["田中", "佐藤", "鈴木"], "山田"));


