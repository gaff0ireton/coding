const numbers = [5, 10, 15, 20];

// すべての数字の合計を求める
// すべての数字を掛け合わせた結果を求める

/* const total = numbers.reduce((acc, current) => {
    return acc + current;
}, 0); */

const multi = numbers.reduce((acc, current) => {
    return acc * current;
}, 1);

// console.log(total);
console.log(multi);

// const products = [
//     { name: 'A', price: 500 },
//     { name: 'B', price: 800 },
//     { name: 'C', price: 1200 },
// ];

// const total = products.reduce((acc, current) => {
//     return acc + current.price;
// }, 0);

// console.log(total);

const products = [
    { name: 'A', price: 500, stock: 0, category: 'book' },
    { name: 'B', price: 800, stock: 3, category: 'game' },
    { name: 'C', price: 1200, stock: 2, category: 'book' },
    { name: 'D', price: 700, stock: 5, category: 'game' },
    { name: 'E', price: 1000, stock: 1, category: 'game' },
];

// category が "game"
// かつ stock > 0
// の商品だけ残す
// その商品の価格を 10%引き に変換する
// 最後に、割引後価格の合計を求める

products.filter((product) => product.category === 'game' && product.stock).map((product) => product.price * .9).reduce((acc, current) => {
    return acc + current
}, 0);

console.log(products.filter((product) => product.category === 'game' && product.stock).map((product) => product.price * .9));

console.log(products.filter((product) => product.category === 'game' && product.stock).map((product) => product.price * .9).reduce((acc, current) => {
    return acc + current
}, 0));



const total = products.reduce((acc, current) => {
    if (current.stock) {
        return acc + current.price;
    }

    return acc;
}, 0);

const stockItem = products.reduce((acc, current) => {
    if (current.stock) {
        return acc + 1;
    }

    return acc;
}, 0);

const item = products.reduce((acc, current) => {
    if (current.stock) {
        return {
            total: acc + current.price,
            count: acc + 1
        };
    }

    return acc;
}, {
    total: 0,
    count: 0
});

const itemFilter = products
    .filter((product) => product.category === 'game')
    .reduce((acc, current) => {
        return acc + current.price;
    }, 0);

console.log(itemFilter);


// console.log(total);
// console.log(stockItem);
console.log(item);

const students = [
    { name: 'A', score: 80, passed: true },
    { name: 'B', score: 45, passed: false },
    { name: 'C', score: 70, passed: true },
    { name: 'D', score: 50, passed: false },
];

const test = students.reduce((acc, current) => {
    if (current.passed) {
        return {
            totalScore: acc.totalScore + current.score,
            count: acc.count + 1
        }
    }

    return acc;

}, {
    totalScore: 0,
    count: 0
});

console.log(test);

const users = [
    { name: 'A', age: 17, active: true, score: 80 },
    { name: 'B', age: 22, active: true, score: 70 },
    { name: 'C', age: 25, active: false, score: 90 },
    { name: 'D', age: 30, active: true, score: 40 },
];

// active === true のユーザーだけ残す
// そのユーザーの score だけの配列に変換する
// score >= 60 のものだけ残す
// 最後に合計する

users.filter((user) => user.active).map((user) => user.score).filter((user) => user >= 60).reduce((acc, current) => {
    return acc + current;
}, 0);

console.log(users.filter((user) => user.active).map((user) => user.score).filter((user) => user >= 60).reduce((acc, current) => {
    return acc + current;
}, 0));


// 「18歳以上かつ active が true のユーザーだけを対象にして、score の合計を求める」

users.filter((user) => user.age >= 18 && user.active).reduce((acc, current) => {
    return acc + current.score
}, 0);

console.log(users.filter((user) => user.age >= 18 && user.active).reduce((acc, current) => {
    return acc + current.score
}, 0));
