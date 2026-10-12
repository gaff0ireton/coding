// const scores = [45, 80, 62, 95, 30, 78];

// const result = scores.filter((score) => { return score >= 70 }).map((score) => { return score + 10 })

// const users = [
//     { id: 1, name: "田中", age: 25 },
//     { id: 2, name: "佐藤", age: 17 },
//     { id: 3, name: "鈴木", age: 32 },
//     { id: 4, name: "山田", age: 19 },
// ];

// const result = users.filter((user) => user.age >= 20).map((user) => user.name)

import { add } from "./math.js";

// const result = add(5, 3);


function divide(a, b) {
    if (b === 0) {
        throw new Error('0では割れません')
    } else {
        return a / b;
    }
}

try {
    divide(10, 0)
} catch (error) {
    console.log(error.message);
}

const toggleBtn = document.querySelector('#toggleBtn');
const menu = document.querySelector('#menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('is-open')
    if (menu.classList.contains('is-open')) {
        toggleBtn.textContent = 'メニューを閉じる'
    } else {
        toggleBtn.textContent = 'メニューを開く'
    }
})

const form = document.querySelector('#contactForm');
const username = document.querySelector('#username');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = username.value.trim();

    if (input === '') {
        message.textContent = 'ユーザー名を入力してください'
    } else {
        message.textContent = `こんにちは、${input}さん！`
    }

})

function getMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("データ取得完了！");
        }, 1000);
    });
}

async function showMessage() {
    const result = await getMessage();
    console.log(result);
}

showMessage();

async function getUsers() {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('ユーザー情報の取得ができません')
        }

        const users = await response.json();
        users.forEach((user => console.log(user.name)))

    } catch (error) {
        console.log(error.message);
    }

}

getUsers();

const products = [
    { id: 1, name: "りんご", price: 150, stock: 10 },
    { id: 2, name: "みかん", price: 100, stock: 0 },
    { id: 3, name: "ぶどう", price: 500, stock: 5 },
    { id: 4, name: "バナナ", price: 200, stock: 8 },
    { id: 5, name: "いちご", price: 400, stock: 0 },
];

function getAvailableProducts(products) {
    const result = products.filter((product) => product.stock >= 1).map((product) => ({
        name: product.name,
        price: product.price * 1.1
    }));

    return result;
}
// const result = getAvailableProducts(products);
// console.log(result);

const decrease = document.querySelector('#decrease');
const increase = document.querySelector('#increase');
const reset = document.querySelector('#reset');
const result = document.querySelector('#count');
let count = 0;

function updateDisplay() {
    result.textContent = count;
}

decrease.addEventListener('click', () => {
    if (count === 0) {
        return;
    }

    count -= 1;

    if (count < 5) {
        result.classList.remove('is-high');
    }

    updateDisplay();
})

increase.addEventListener('click', () => {
    count += 1;

    if (count >= 5) {
        result.classList.add('is-high');
    }

    updateDisplay();
})

reset.addEventListener('click', () => {
    count = 0;

    if (count < 5) {
        result.classList.remove('is-high');
    }

    updateDisplay();
})

const loadBtn = document.querySelector('#loadBtn');
const status = document.querySelector('#status');
const userList = document.querySelector('#userList');

async function loadUsers() {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        status.textContent = '読み込み中...'; // ! fetch前に書く必要がある。通信が完了するまで表示されないから

        if (!response.ok) {
            throw new Error('取得に失敗しました')
        }


        const users = await response.json();
        userList.replaceChildren();
        users.forEach((user) => userList.insertAdjacentHTML('afterbegin', `<li>${user.name}</li>`));
        // ! afterbeginの場合は要素の先頭に追加するため、表示の順番が逆になる。今回はbeforeendを使うが正解。
        // ! APIのデータをHTML文字列に埋め込む場合は、HTMLとして解釈される点にも注意。ユーザー名のようなテキストは textContent で設定する方が安全

        status.textContent = '取得完了！';

    } catch (error) {
        status.textContent = error.message; // ! Failed to fetchなどと表示される可能性もあるため、'取得に失敗しました'を代入するが確実
    }
}

loadBtn.addEventListener('click', () => {
    loadUsers();
})

const taskForm = document.querySelector('#taskForm');
const taskInput = document.querySelector('#taskInput');
const errorMessage = document.querySelector('#errorMessage');
const taskList = document.querySelector('#taskList');
const task = [];

function renderTasks(tasks) {
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task.title;
        taskList.append(li);
    })
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = taskInput.value.trim();
    const now = Date.now();

    if (input === '') {
        return errorMessage.textContent = 'タスクを入力してください';
    }

    const result = {
        id: Date.now(),
        title: input,
        completed: false
    }

    task.push(result);
    renderTasks(task);

    taskInput.value = '';
    errorMessage.textContent = '';

})

const tasks01 = [
    { id: 1, title: "HTMLの復習", completed: true },
    { id: 2, title: "CSSの復習", completed: false },
    { id: 3, title: "JSの復習", completed: false },
    { id: 4, title: "ポートフォリオ制作", completed: true },
];

function toggleTask(tasks, id) {
    const result = tasks.filter((task) => task.id === id).map((task) => ({
        id: task.id,
        title: task.title,
        completed: (task.completed) ? false : true
    }))

    return result;
}

const result01 = toggleTask(tasks01, 2);
console.log(result01);
