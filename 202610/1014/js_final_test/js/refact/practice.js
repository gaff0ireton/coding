

/////////////////////////// 12 ///////////////////////////////
const q12Image = document.querySelector('#q12-image');
const q12Caption = document.querySelector('#q12-caption');
const q12CatButton = document.querySelector('#q12-cat-button');
const q12DogButton = document.querySelector('#q12-dog-button');

function changeImage(button) {
    button.addEventListener('click', (e) => {
        const t = e.target;

        if (t.textContent === '猫を表示') {
            q12Image.src = './images/cat.jpg';
            q12Image.alt = '猫の写真';
            q12Caption.textContent = '猫';
        } else {
            q12Image.src = './images/dog.jpg';
            q12Image.alt = '犬の写真';
            q12Caption.textContent = '犬';
        }
    })
}

changeImage(q12CatButton);
changeImage(q12DogButton);

/////////////////////////// 14 ///////////////////////////////

const q14Button = document.getElementById("q14-button");

async function fetchUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("ユーザー情報の取得に失敗しました");
        }

        const users = await response.json();

        // ここから解答
        users.slice(0, 3).forEach(({ id, name, email, address: { city } }) => {
            const element = document.getElementById(`q14-user-${id}`);
            element.textContent = `${name} : ${email} : ${city}`
        })
    } catch (error) {
        console.error(error);
    }
}

q14Button.addEventListener("click", fetchUsers);

/////////////////////////// 15 ///////////////////////////////
const q15Button = document.getElementById("q15-button");

async function fetchPosts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
            throw new Error("投稿データの取得に失敗しました");
        }

        const posts = await response.json();

        // ここから解答
        posts.slice(0, 3).forEach(({ id, title }) => {
            const element = document.getElementById(`q15-post-${id}`);
            element.textContent = `POST ${id}：${title}`;
        })

    } catch (error) {
        console.error(error);
    }
}

q15Button.addEventListener("click", fetchPosts);