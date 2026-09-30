const student = {
    id: 2025,
    name: "ケビン・モジョジョージョ",
    age: 18,
    isActive: true,
    scores: [85, 92, 78, 88],
    contact: {
        email: "kebin@mojojo-jo.com",
        phone: "080-1234-5678",
    },
    hobbies: ["散歩", "ゲーム", "コーディング"],
    address: {
        city: "東京",
        zip: "105-0011",
        geo: {
            lat: 35.6586,
            lng: 139.7454,
        },
    },
    greet: function () {
        return `こんにちは！私の名前は${this.name}です。${this.address.city}に住んでいます。`;
    },
    updateScore: function (newScore) {
        this.scores.push(newScore);
        return this.scores;
    },
    favoriteFoods: ["スパイスカレー", "陣太鼓", "チョコミント"],
    enrolledCourses: {
        math: "D",
        english: "E",
        programming: "S",
    },
};

const studentName = student.name;
console.log(studentName);

const mail = student.contact.email;
console.log(`メールアドレス: ${mail}`);

console.log(student.scores.toSpliced(2).join(','));

console.log(student.hobbies.toSpliced(1, 1));

console.log(student.favoriteFoods.with(1, 'ラーメン'));

console.log(student.greet());

console.log(student.scores.toSorted((a, b) => a - b));

console.log(student.scores.map((item) => item / 2))

Object.defineProperty(student, 'birthday', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: '2007-05-05'
})

console.log(student.birthday);

console.log(Object.hasOwn(student, 'id'))
console.log(Object.hasOwn(student.address, 'geo'))
console.log(Object.hasOwn(student, 'geo'))

Object.values(student.enrolledCourses).forEach((item) => {
    console.log(item);

})

console.log(Object.keys(student.address));

Object.entries(student.contact).forEach((item) => {
    console.log(`${item[0]}: ${item[1]}`);
})

student.graduated = false;
console.log(student.graduated);

student.graduated = true;
console.log(student.graduated);

const copy = { ...student };


copy.age += 1;
console.log(copy);
console.log(student);
copy.contact = {
    email: 'naughty@mojojo-jo.com'
}
console.log(student.age);
console.log(copy.age);
console.log(student.contact.email);
console.log(copy.contact.email);

let max = student.scores[0];
let min = student.scores[0];

student.scores.forEach((num) => {
    max = Math.max(max, num);
    min = Math.min(min, num);
})

console.log(`最大値: ${max}`);
console.log(`最小値: ${min}`);

const even = student.scores.filter((num) => num % 2 === 0);

console.log(even);

student.addScore = function (newScore) {
    this.scores = this.scores.toSpliced(this.scores.length, 0, newScore);
    return this.scores;
}

console.log(student.addScore(95));

const copy02 = [...student.hobbies];

const item = copy02.toSpliced(copy02.length, 0, '映画鑑賞');

console.log(item);

Object.entries(student.enrolledCourses).map((item) => {
    console.log(`${item[0]}: ${item[1]}`)

})


