/* buyItems(prices = [], budget = 1000) を作ってください。

spent = 0、count = 0 から開始
値段が 0 以下の商品は無効なのでスキップ
値段が 500以上 の商品が現れたら、その商品は購入せずにループ自体を終了
それ以外の商品について、購入すると予算を超えてしまう場合は、その場で
`予算オーバーです。${count}個購入済みです` を返す
購入できる場合だけ spent に値段を加算して count を1増やす
最後まで処理するか、500以上の商品によってループを終了した場合は
`${count}個購入し、${spent}円使いました` を返す */

const buyItems = (prices = [], budget = 1000) => {
    let spent = 0;
    let count = 0;

    for (const price of prices) {

        if (price <= 0) {
            continue;
        }

        if (price >= 500) {
            break;
        }

        spent += price;

        if (spent > budget) {
            return `予算オーバーです。${count}個購入済みです`;
        }

        count++;

    }

    return `${count}個購入し、${spent}円使いました`;
};

console.log(buyItems([200, -100, 300, 500, 100], 1000));
// 2個購入し、500円使いました

console.log(buyItems([400, 350, 300], 1000));
// 予算オーバーです。2個購入済みです

console.log(buyItems([0, 200, 300], 1000));
// 2個購入し、500円使いました

// 問題3：最終試験 😈🔥

// processNumbers(numbers = [], limit = 20) を作ってください。

// total = 0、count = 0 から開始
// 負の数はスキップ
// 0 が来たらループを終了
// 偶数だけを total に加算する
// 奇数は加算せず、そのまま次の周回へ
// 実際に加算したときだけ count を1増やす
// 加算後、total === limit なら
// `ジャスト！${count}回の加算で${total}です` を返す
// 加算後、total > limit なら
// `超過！合計は${total}です` を返す
// どちらにもならずループが終了した場合は
// `未達成：合計${total}、加算${count}回です` を返す

const processNumbers = (numbers = [], limit = 20) => {
    let total = 0;
    let count = 0;
    for (const number of numbers) {
        if (number < 0) {
            continue;
        }

        if (number === 0) {
            break;
        }

        if (number % 2 === 0) {
            total += number;
            count++;
        }

        if (total === limit) {
            return `ジャスト！${count}回の加算で${total}です`;
        }

        if (total > limit) {
            return `超過！合計は${total}です`;
        }
    }

    return `未達成：合計${total}、加算${count}回です`;
};

console.log(processNumbers([3, 4, -2, 5, 6, 10], 20));
// ジャスト！3回の加算で20です

console.log(processNumbers([2, 3, 8, 12], 20));
// 超過！合計は22です

console.log(processNumbers([4, 3, -8, 6, 0, 100], 20));
// 未達成：合計10、加算2回です

// const users = [
//     { name: 'A', age: 17 },
//     { name: 'B', age: 22 },
//     { name: 'C', age: 15 },
// ];

// ① 20歳以上の最初のユーザーを取得する

// const userFind = users.find((user) => user.age >= 20);
// console.log(userFind);


// ② 18歳未満のユーザーが1人でもいるか確認する

// const userSome = users.some((user) => user.age < 18);
// console.log(userSome);

// const products = [
//     { name: 'A', price: 1200, stock: 0 },
//     { name: 'B', price: 800, stock: 3 },
//     { name: 'C', price: 500, stock: 10 },
// ];

// find() で「在庫がある最初の商品」
// some() で「1000円を超える商品が1つでもあるか」

// const proFind = products.find((product) => product.stock > 0);
// console.log(proFind);

// const proSome = products.some((product) => product.price > 1000);
// console.log(proSome);

// 「在庫があり、かつ700円以下の商品が1つでもあるか」

// const proSome02 = products.some((product) => product.stock > 0 && product.price <= 700);
// console.log(proSome02);

const users = [
    { name: 'A', age: 17, active: false },
    { name: 'B', age: 22, active: true },
    { name: 'C', age: 19, active: true },
    { name: 'D', age: 30, active: false },
];

// 20歳以上で active が true の最初のユーザーを取得する
// 18歳未満のユーザーが1人でもいるか確認する
// active が false のユーザーが1人でもいるか確認する
// 25歳以上の最初のユーザーを取得する

users.find((user) => user.age >= 20 && user.active);
console.log(users.find((user) => user.age >= 20 && user.active));

users.some((user) => user.age < 18);
console.log(users.some((user) => user.age < 18));

users.some((user) => !user.active);
console.log(users.some((user) => !user.active));

users.find((user) => user.age >= 25);
console.log(users.find((user) => user.age >= 25));

const products = [
    { name: 'A', price: 1200, stock: 0 },
    { name: 'B', price: 800, stock: 3 },
    { name: 'C', price: 500, stock: 10 },
    { name: 'D', price: 700, stock: 2 },
];

// 在庫がある最初の商品を取得する
// 1000円以下の商品をすべて取得する
// 在庫切れの商品が1つでもあるか確認する
// 在庫があり、かつ800円以下の商品をすべて取得する
// 600円未満の最初の商品を取得する

products.find((product) => !product.stock);
console.log(products.find((product) => !product.stock));

products.filter((product) => product.price <= 1000);
console.log(products.filter((product) => product.price <= 1000));

products.some((product) => !product.stock);
console.log(products.some((product) => !product.stock));

products.filter((product) => product.stock && product.price <= 800);
console.log(products.filter((product) => product.stock && product.price <= 800));

products.find((product) => product.price < 600);
console.log(products.find((product) => product.price < 600));

