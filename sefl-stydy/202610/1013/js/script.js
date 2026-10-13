
const products = [
    { id: 1, name: 'りんご', price: 150, stock: 8 },
    { id: 2, name: 'みかん', price: 100, stock: 0 },
    { id: 3, name: 'ぶどう', price: 500, stock: 4 },
    { id: 4, name: 'バナナ', price: 120, stock: 12 },
    { id: 5, name: 'メロン', price: 1200, stock: 2 },
];

// 問題： 次の3つの条件を満たすコードを書いてね。
// 1. 在庫が1個以上ある商品だけを抽出する
// 2. 価格が500円以下の商品だけに絞る
// 3. 最終的に { name, price } だけを持つオブジェクトの配列を作る

const result = products.filter((product) => product.stock >= 1 && product.price <= 500)
    .map(({ name, price }) => ({ name, price }))
console.log(result);

const scores = [85, 42, 90, 67, 30, 100, 55];

// 問題： getPassedStudents() という関数を作ってね。
// 条件は以下のとおり。
// 1. 点数の配列を引数で受け取る
// 2. for...of を使って配列を処理する
// 3. 60点以上の人数を数える
// 4. 合格者数を return で返す
// 5. filter() などの配列メソッドは使わない

function getPassedStudents(scores) {
    let count = 0;
    for (const element of scores) {
        if (element >= 60) {
            count++;
        }
    }
    return count;
}

console.log(getPassedStudents(scores));

// 問題： JavaScriptで次の処理を実装してね。
// 1. フォームの submit イベントを監視する
// 2. フォーム送信によるページの再読み込みを防ぐ
// 3. 入力欄の値を取得し、trim() で前後の空白を除去する
// 4. 入力値が空文字なら何もせず終了する
// 5. 入力値をテキストに持つ <li> 要素を作成して、#user-list に追加する
// 6. 追加後、入力欄を空にする

const form = document.querySelector('#user-form');
const username = document.querySelector('#username');
const userList = document.querySelector('#user-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const li = document.createElement('li');
    const input = username.value.trim();

    if (!input) return;

    li.textContent = input;
    userList.append(li);

    username.value = '';
})

// 問題： getUsers() という非同期関数を作成して、次の条件を満たしてね。
// 1. async/await と fetch() を使用する
// 2. try...catch でエラーを処理する
// 3. HTTPレスポンスが正常でなければ throw new Error() する
// 4. JSONデータに変換する
// 5. 取得したユーザーのうち、最初の3人だけを表示する
// 6. 各ユーザーの name を <li> に設定し、#user-list に追加する
// 7. エラーが発生した場合は console.error() で表示する

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('データ取得できませんでした')
        }

        const users = await response.json();

        users.slice(0, 3).forEach(({ name }) => {
            const li = document.createElement('li');
            li.textContent = name;
            userList.append(li);
        })

    } catch (error) {
        console.error()
    }
}

getUsers();

const user = {
    id: 1,
    name: '田中',
    age: 25,
    city: '神戸',
};
console.log(user);


const updatedUser = { ...user };
updatedUser.age = 26;
updatedUser.email = 'tanaka@example.com';
console.log(updatedUser);

function calculateDiscount(price, discount) {
    try {
        if (price < 0) {
            throw new Error('価格が不正です')
        }

        if (discount < 0 || discount > 100) {
            throw new Error('割引率が不正です')
        }

        return price * (1 - discount / 100);

    } catch (error) {
        console.error(error)
    }
}

console.log(calculateDiscount(1000, 20));

import { add, multiply } from '../js/math.js'

console.log(add(10, 5));
console.log(multiply(10, 5));

const orders = [
    { id: 1, category: 'food', price: 500, quantity: 2 },
    { id: 2, category: 'drink', price: 200, quantity: 3 },
    { id: 3, category: 'food', price: 800, quantity: 1 },
    { id: 4, category: 'drink', price: 150, quantity: 4 },
    { id: 5, category: 'food', price: 300, quantity: 2 },
];

const total = orders.reduce((sum, order) => {
    if (order.category === 'food') {
        console.log(order);

        return sum + order.price * order.quantity;
    }
    return sum;
}, 0);

console.log(total);

// 条件は以下のとおり！
// 1. #task-list にだけ click イベントを登録する
// 2. event.target を使って、クリックされた要素を取得する
// 3. closest() を使って .delete-btn を探す
// 4. 削除ボタン以外がクリックされた場合は何もしない
// 5. closest() で親の <li> を取得し、remove() で削除する

const deleteBtns = document.querySelectorAll('.delete-btn');

deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const t = e.target;
        console.log(t);

        const li = t.closest('li');
        console.log(li);

    })
})

document.querySelector('#task-list').addEventListener('click', (e) => {
    const t = e.target;
    const btn = t.closest('.delete-btn');
    const li = t.closest('li');
    li.remove();
})

// 条件は以下のとおり！
// 1. submit イベントを監視し、デフォルトの送信を防ぐ
// 2. FormData を使って username と password を取得する
// 3. username は前後の空白を除去する
// 4. どちらかが空なら「すべて入力してください」と表示する
// 5. username が admin、password が 1234 なら「ログイン成功」と表示する
// 6. それ以外なら「ユーザー名またはパスワードが違います」と表示する
// 7. メッセージ表示には textContent を使う

const loginForm = document.querySelector('#login-form');
console.log(loginForm);
const data = new FormData(loginForm);
console.log(data.get(username));

const toggleBtn = document.querySelector('#toggle-btn');
const menu = document.querySelector('#menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('is-open');

    if (menu.classList.contains('is-open')) return toggleBtn.textContent = 'メニューを閉じる';

    return toggleBtn.textContent = 'メニューを開く';
})