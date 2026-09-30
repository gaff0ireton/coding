const user = {
    name: '田中',
    age: 24,
    job: 'フロントエンドエンジニア',
};

console.log(`${user.name}さん（${user.age}歳）の職種は${user.job}です`);

const cart = [
    { name: 'キーボード', price: 5000, count: 1 },
    { name: 'マウス', price: 3000, count: 2 },
    { name: 'USBケーブル', price: 1000, count: 3 },
];

let total = 0;

for (const item of cart) {
    total += item.price * item.count
}

console.log(`合計: ${total}円`);

const products = [
    { name: 'ペン', stock: 3 },
    { name: 'ノート', stock: 0 },
    { name: '消しゴム', stock: 5 },
];

for (const item of products) {
    if (item.stock) {
        console.log(item.name);
    }
}

const dog = {
    name: 'クッキー',
    kinds: 'コーギー',

    introduce() {
        console.log(`ぼくは${dog.name}、${dog.kinds}だワン！`);

    }
};

dog.introduce();

const users = [
    {
        name: '田中',
        isActive: true,
    },
    {
        name: '佐藤',
        isActive: false,
    },
    {
        name: '山田',
        isActive: true,
    },
];

for (const user of users) {
    if (user.isActive) {
        console.log(`${user.name}さんは利用中です`);

    }
}