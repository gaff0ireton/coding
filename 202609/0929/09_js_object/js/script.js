/* ========================
   review P239 オブジェクト
======================== */

/* ========================
   note オブジェクトの書き方
======================== */
const userData = {
    name: '田中',
    age: 20,
    email: 'tanaka@example.com',
    isActive: 'true',
    greet: function () {
        console.log(userData.name);
    },
    // todo --- メソッドの短縮構文 --- //
    logout() {
        console.log('ログアウトしました');
    },
};

/* ========================
   note 同名の変数をプロパティにする
======================== */
const itemName = 'ペン';
const itemPrice = 150;

const itemData = {
    name: itemName, // * itemName,
    price: itemPrice // * itemPrice,
};

console.log(itemData);
console.log(Object.values(itemData));
console.log(Object.keys(itemData));

/* ========================
   note プロパティの値を参照する
======================== */
// idea --- ドット記法 --- //
console.log(userData.name);
console.log(userData.age);
console.log(`${userData.name}さんは${userData.age}歳です`);

// idea --- ブラケット記法 --- //
// ! プロパティ名にハイフンなどの記号が含まれている場合や、文字列操作や変数を用いて参照する場合によく用いられる
console.log(userData['name']);
console.log(userData['age']);
console.log(`${userData['name']}さんは${userData['age']}歳です`);

const keyName = 'email';
console.log(userData[keyName]);

/* ========================
   note プロパティの値を変数に代入する
======================== */
// idea --- 分割代入 --- //
const { name, age, email } = userData;

console.log(name);
console.log(age);
console.log(`${name}さんは${age}歳です`);

const { email: userEmail, isActive: activeStatus } = userData;

console.log(userEmail);
console.log(activeStatus);

/* ========================
   note 値を書き換える、プロパティを追加する
======================== */
// idea --- プロパティの値を書き換える --- //
userData.age = 21;
console.log(userData.age); // * 21

// idea --- プロパティの追加 --- //
userData.department = '営業部';
userData['role'] = '主任';
console.log(userData.department);
console.log(userData.role);

/* ========================
   note プロパティの値を配列やオブジェクトにする
======================== */
const weather = {
    place: {
        city: 'Tokyo',
        lat: 35.7,
        lng: 139.7,
    },
    date: '2023-05-08',
    temp: [16, 14, 14, 22, 25, 26, 21, 20],
};

console.log(weather.place.city);
console.log(weather['place']['city']);
console.log(weather.temp[3]);
console.log(weather['place']['lng']);
console.log(weather['temp'][0]);

const orderdData = {
    id: 1001,
    items: [
        {
            name: 'ペン',
            price: 150,
        },
        {
            name: 'ノート',
            price: 200,
        },
    ],
};

console.log(orderdData.items[1].name);

/* ========================
   note プロパティの値を関数にする（メソッドの作成）
======================== */
userData.greet();
userData.logout();

const petData = {
    name: 'クッキー',
    kinds: 'コーギー',
    like: 'ご主人',
    hobby: 'かみかみ',
    bark: function () {
        console.log('グルルルル・・・');
        console.log('ワンワンワンワンワンワン！');
    },
    greet() {
        console.log(`こんにちは、${this.name}だワン`);
        console.log(`犬種は${this.kinds}だワン`);
        console.log(`趣味は${this.like}を${this.hobby}することだワン`);
    }
};

petData.bark();
petData.greet();

// ! オブジェクトのメソッドでthisを使う場合は、アロー関数は使わない。アロー関数は独自のthisを持たないため。(thisがbirdDataを指さない)

/* const birdData = {
    name: 'ピーちゃん',
    introduce: () => {
        console.log(this.name);
    }
}

birdData.introduce(); */

/* ========================
   note プロパティの削除
======================== */
delete userData.role;
console.log(userData);

/* ========================
   note プロパティの個数分繰り返す処理
======================== */
const obj = {
    a: 1,
    b: 2,
    c: 3,
};

// idea --- for~of文とObject.entries()メソッドを使う方法 --- //

for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} - ${value}`);
}

// idea --- for~in文を使う方法 --- //
for (const key in obj) {
    console.log(`${key} - ${obj[key]}`);
}

/* ========================
   note オブジェクトに特定のプロパティがあるか調べる
======================== */
const video = {
    file: 'js-expert-course.mp4',
    title: '上級JavaScript演習'
};

console.log(Object.hasOwn(video, 'file'));
console.log(Object.hasOwn(video, 'price'));

/* ========================
   note オブジェクトから配列の作成
======================== */

const keys = Object.keys(video);
console.log(keys);

const values = Object.values(video);
console.log(values);

const entries = Object.entries(video);
console.log(entries);

const propertyLength = keys.length;
console.log(propertyLength);

// idea --- map --- //
const scores = new Map();
scores.set(1, 80);
scores.set('1', 90);
console.log(scores);
console.log(scores.get(1));
console.log(scores.get('1'));
console.log(scores.size);

// idea --- set --- //
// todo Setオブジェクトは配列のように値のみを複数保持できるオブジェクト。最大の特徴は重複する値を持たないこと。
const colorSet = new Set();
colorSet.add('赤');
colorSet.add('青');
colorSet.add('赤'); // ? 重複しているため含まれない
console.log(colorSet);
console.log(colorSet.size);
console.log(colorSet.has('青'));

