/* ========================
   ? 初級問題
======================== */

// * --- 問題1 --- //
const bookData = {
    title: 'JavaScript入門',
    price: 2500,
    isStock: true
}

console.log(bookData);

// * --- 問題2 --- //
const studentData = {
    name: '田中',
    score: 85,
    course: 'Web制作',
};
console.log(studentData.name);
console.log(studentData['score']);
console.log(studentData.course);

// * --- 問題3 --- //
const productData = {
    name: 'ノート',
    price: 200,
};

productData.price = 250;
productData.stock = 10;
console.log(productData);

// * --- 問題4 --- //
const profileData = {
    userName: '佐藤',
    age: 24,
    city: '横浜市',
};

const { userName, age, city: userCity } = profileData;
console.log(userName);
console.log(age);
console.log(userCity);

// * --- 問題5 --- //
const classData = {
    name: 'Aクラス',
    students: ['鈴木', '高橋', '伊藤'],
    teacher: {
        name: '山田',
        subject: 'JavaScript',
    },
};

console.log(classData.students[1]);
console.log(classData.teacher.name);
console.log(classData.teacher.subject);

/* ========================
   ? 中級問題
======================== */

// * --- 問題1 --- //
const accountData = {
    name: '中村',
    email: 'nakamura@example.com',
    role: '管理者',
};

const selectedKey = 'email';
const selectedorder = accountData[selectedKey];

console.log(selectedorder);

// * --- 問題2 --- //

const petData = {
    name: 'ポチ',
    type: '犬',
    introduce() {
        console.log(`${this.name}は${this.type}です`);

    }
}

petData.introduce();

// * --- 問題3 --- //
const pcData = {
    maker: 'ABC',
    price: 80000,
    color: '黒',
};

for (const [key, order] of Object.entries(pcData)) {
    console.log(`${key}: ${order}`);
}

// * --- 問題4 --- //
const scoreData = {
    国語: 75,
    数学: 90,
    英語: 82,
};

for (const subject in scoreData) {
    if (scoreData[subject] >= 80) {
        console.log(`${subject}: ${scoreData[subject]}`);
    }
}

// * --- 問題5 --- //
const orderList = [
    { name: 'ペン', price: 150, count: 2 },
    { name: 'ノート', price: 200, count: 3 },
    { name: '消しゴム', price: 100, count: 1 },
];

let totalPrice = 0;

for (const order of orderList) {

    totalPrice += order.count * order.price;
}

console.log(`合計: ${totalPrice}円`);