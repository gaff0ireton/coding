/* ========================
   初級問題
======================== */
// 問題1
function hello() {
    console.log('こんにちは');

}

hello();

// 問題2
function greet(name = "ゲスト") {
    console.log(`こんにちは、${name}さん`);

}

greet('田中');
greet();

//問題3
function add(num1 = 0, num2 = 0) {
    return num1 + num2;
}

console.log(add(3, 5));
console.log(add());

//問題4
function getTaxPrice(price = 0, taxRate = .1) {
    return price * (1 + taxRate);
}

console.log(getTaxPrice(1000));

/* ========================
   中級問題
======================== */
//問題1
function isEven(number = 0) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(8));
console.log(isEven(5));

//問題2
function checkAge(age = 0) {
    if (age >= 18) {
        return '成人です'
    } else {
        return '未成年です'
    }
}

console.log(checkAge(20));
console.log(checkAge());

//問題3
function getMax(num1 = 0, num2 = 0) {
    let maxNum = Math.max(num1, num2);
    return maxNum;
}

console.log(getMax(10, 7));

//問題4
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

/* ========================
   上級問題
======================== */

//問題1
function sum(...numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(10, 10, 10, 10));

//問題2
function findName(names = [], target = "") {
    if (names.includes(target)) {
        return true;
    } else {
        return false;
    }
}

console.log(findName(["田中", "佐藤", "鈴木"], "佐藤"));
console.log(findName(["田中", "佐藤", "鈴木"], "山田"));
