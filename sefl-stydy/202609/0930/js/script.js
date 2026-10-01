import { calcPrice, tax } from "./math.js";

calcPrice(1000);

import { userName, age, showUser } from "./user.js";

showUser(userName, age);

import { applicationVersion as version } from "./math.js";

console.log(version);

import aoc from './circle.js'

console.log(aoc(5));

// import sh, { productName, price } from './product.js'

// console.log(sh(productName, price))

import { siteName } from "./config.js";
import { showMessage } from "./message.js";

console.log(showMessage(siteName));

try {
    console.log(userName);
} catch (err) {
    console.log('エラーが発生しました');
    console.log(err);
}

try {
    console.log('処理開始');

    throw new Error('失敗しました');

} catch (err) {
    console.log(err);

} finally {
    console.log('処理終了');

}

try {
    function divide(a, b) {
        if (b === 0) {
            throw new Error('0では割れません')
        } else {
            return a / b;
        }
    }
    console.log(divide(10, 0));
} catch (err) {
    console.log(err);
}

import { itemName, price } from "./items.js";
import calcTotal from "./calculator.js";

const count = 3;

try {
    console.log(`${itemName}を${count}個購入します\n合計金額: ${calcTotal(price, count)}円`);
} catch (err) {
    console.log(err);

}


