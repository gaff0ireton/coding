let a = 3;
let b = 10;

if (a > b) {
    console.log('aのほうが大きい');

} else if (a < b) {
    console.log('bのほうが大きい');

}

const isRaining = true;

if (isRaining) {
    console.log('傘を持っていく');

} else {
    console.log('傘はいらない');

}

let score = 80;

if (score >= 60) {
    console.log('合格');

} else {
    console.log('不合格');

}

let n1 = 5;

for (let n = 1; n <= n1; n++) {
    console.log(n);

}

const arr1 = [10, 20, 30];

for (const ary of arr1) {
    console.log(ary);

}

let n2 = 4;
let total = 0;

for (let i = 1; i <= n2; i++) {
    total += i;
}

console.log(total);

function calcTaxIncluded(price, taxRate) {
    return price + price * taxRate;
}
const result = calcTaxIncluded(1000, .1);

console.log(result);

function isZero(n3) {
    return n3 === 0;
}

console.log(isZero(0));


const arr2 = [1, 2, 3];

function sumArray(arr) {
    let arrTotal = 0;
    for (const a of arr) {
        arrTotal += a;
    }
    return arrTotal;
}

console.log(sumArray(arr2));

function countPassed(scores) {
    let passedCount = 0;
    for (const score of scores) {
        if (score >= 60) {
            passedCount++;
        }
    }
    return `${passedCount}人が合格です。`;

}

console.log(countPassed([80, 10, 12, 60, 59, 100]));

