const product = {
    name: 'ノート',
    price: 250,
    stock: 10,
};

console.log(product.name);
console.log(product.price);

const user = {
    name: '佐藤',
    email: 'sato@example.com',
};

const key = 'email';

console.log(user[key]);

const book = {
    title: 'JavaScript入門',
    price: 3000,
    pages: 350,
};

const { title, price, pages } = book;

console.log(`${title}は${price}円です`);

const member = {
    name: '山田',
    age: 25,
};

const { name: userName, age: userAge } = member;

console.log(userName);
console.log(userAge);

const item = {
    name: 'ペン',
    price: 150,
};

item.price = 180;
item.stock = 5;

console.log(item);

const shop = {
    name: 'わんわんショップ',
    address: {
        prefecture: '兵庫県',
        city: '神戸',
    },
};

console.log(shop.address.city);

const petData = {
    owner: '田中',
    pets: ['柴犬', 'コーギー', 'ラブラドール'],
};

console.log(petData.pets[1]);

const order = {
    items: [
        {
            name: 'ペン',
            price: 150,
        },
        {
            name: 'ノート',
            price: 200,
        },
        {
            name: '消しゴム',
            price: 100,
        },
    ],
};

console.log(order.items[1].name);

const dog = {
    name: 'ポチ',

    greet() {
        console.log(`こんにちは、${this.name}です`);

    }
};

dog.greet();

const account = {
    id: 1001,
    name: '田中',
    password: 'abc123',
};

delete account.password;

console.log(account);

const game = {
    title: 'RPG',
    price: 6000,
    platform: 'PC',
};

Object.keys(game);
Object.values(game);
Object.entries(game);

const pen = {
    name: 'ペン',
    price: 150,
    stock: 5,
};

for (const key in pen) {
    console.log(`${key} - ${pen[key]}`);
}

for (const [key, value] of Object.entries(pen)) {
    console.log(`${key} - ${value}`);

}

const profile = {
    name: '佐藤',
    age: 30,
};

console.log(Object.hasOwn(profile, 'name'));
console.log(Object.hasOwn(profile, 'email'));

const orderList = [
    {
        name: 'ペン',
        price: 150,
        count: 2,
    },
    {
        name: 'ノート',
        price: 200,
        count: 3,
    },
    {
        name: '消しゴム',
        price: 100,
        count: 1,
    },
];

let total = 0;

for (const item of orderList) {
    total += item.price * item.count;
}

console.log(`合計: ${total}円`);
