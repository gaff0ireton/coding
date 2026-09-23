/* const products = [
    { name: 'A', price: 1200, stock: 0 },
    { name: 'B', price: 800, stock: 3 },
    { name: 'C', price: 500, stock: 10 },
    { name: 'D', price: 700, stock: 2 },
]; */

// 最初に見つかった在庫ありの商品を取得する
// 在庫がある商品だけをすべて取得する
// 1000円を超える商品が1つでもあるか確認する
// すべての商品名だけの配列を作る
// すべての商品価格を100円引きした新しい配列を作る
// 600円以下の最初の商品を取得する

// products.find((product) => product.stock);
// products.filter((product) => product.stock);
// products.some((product) => product.price > 1000);
// products.map((product) => product.name);
// products.map((product) => product.price - 100);
// products.find((product) => product.price <= 600);

/* const products = [
    { name: 'A', price: 500, stock: 3 },
    { name: 'B', price: 800, stock: 1 },
    { name: 'C', price: 700, stock: 5 },
]; */

// すべての商品に在庫があるか
// すべての商品が1000円以下か

// products.every((product) => product.stock);
// products.every((product) => product.price <= 1000);

const users = [
    { name: 'A', age: 17, active: true },
    { name: 'B', age: 22, active: true },
    { name: 'C', age: 19, active: false },
    { name: 'D', age: 30, active: true },
];

// 18歳未満のユーザーが1人でもいるか確認する
// すべてのユーザーが15歳以上か確認する
// active が false のユーザーが1人でもいるか確認する
// すべてのユーザーが active か確認する
// 25歳以上のユーザーが1人でもいるか確認する
// すべてのユーザーが40歳未満か確認する

users.some((user) => user.age < 18);
users.every((user) => user.age >= 15);
users.some((user) => !user.active);
users.every((user) => user.active);
users.some((user) => user.age >= 25);
users.every((user) => user.age < 40);

const products = [
    { name: 'A', price: 1200, stock: 0, category: 'book' },
    { name: 'B', price: 800, stock: 3, category: 'game' },
    { name: 'C', price: 500, stock: 10, category: 'book' },
    { name: 'D', price: 700, stock: 2, category: 'game' },
];

// 在庫がある最初の商品を取得する
// category が "book" の商品をすべて取得する
// 1000円を超える商品が1つでもあるか確認する
// すべての商品が1500円以下か確認する
// すべての商品名だけの配列を作る
// 在庫があり、かつ800円以下の商品をすべて取得する
// すべての商品について、価格を10%引きした数値だけの配列を作る


products.find((product) => product.stock);
products.filter((product) => product.category === 'book');
products.some((product) => product.price > 1000);
products.every((product) => product.price <= 1500);
products.map((product) => product.name);
products.filter((product) => product.stock && product.price <= 800);
products.map((product) => product.price * .9);
