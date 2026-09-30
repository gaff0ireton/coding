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
