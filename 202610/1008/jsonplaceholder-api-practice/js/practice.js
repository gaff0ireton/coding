/*
  ==========================================================
  JavaScript API Practice
  ==========================================================

  このファイルだけを編集して練習します。

  1. index.html をブラウザで開く
  2. 教材ページのコードをコピーする
  3. この下に貼り付ける
  4. 保存してブラウザを再読み込みする
  5. Console または画面の表示結果を確認する

  同じ名前の関数を複数貼り付けた場合はエラーになることがあります。
  1つのレッスンが終わったら、前のコードをコメントアウトするか削除して
  次の練習へ進んでください。
*/


// ここから下に練習コードを書いてください。

// APIから投稿一覧を取得して画面に表示する関数

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('データ取得に失敗したワン🐶')
    }

    const users = await response.json();

    users.slice(0, 3).forEach(({ name, email, address: { city }, id }) => {
      const nameElement = document.querySelector(`#practice-user-${id}-name`);
      const emailElement = document.querySelector(`#practice-user-${id}-email`);
      const cityElement = document.querySelector(`#practice-user-${id}-city`);

      nameElement.textContent = name;
      emailElement.textContent = email;
      cityElement.textContent = city;
    })

  } catch (err) {
    console.log(err);
  }

}

async function getTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    if (!response.ok) {
      throw new Error('データ取得に失敗したワン🐶')
    }

    const todos = await response.json();

    const result = todos.filter((todo) => {
      return todo.userId === 3 && !todo.completed
    });

    document.querySelector('#practice-todo-count').textContent = `${result.length}件`;

    result.slice(0, 3).forEach(({ title }, index) => {
      const list = document.querySelector(`#practice-todo-${index + 1}`);
      list.textContent = title;
    })
  } catch (err) {
    console.log(err.message);
  }
}

async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error('データ取得に失敗したワン🐶')
    }

    const posts = await response.json();

    const result = posts.filter((post) => {
      return post.userId === 4
    });

    result.slice(0, 3).forEach(({ id, title, body }, index) => {
      const idElement = document.querySelector(`#practice-post-${index + 1}-id`);
      const titleElement = document.querySelector(`#practice-post-${index + 1}-title`);
      const bodyElement = document.querySelector(`#practice-post-${index + 1}-body`);

      idElement.textContent = `POST ${id}`;
      titleElement.textContent = title;
      bodyElement.textContent = body;
    })
  } catch (err) {
    console.log(err.message);
  }
}

async function getUsersAndPosts() {
  try {
    const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!responsePosts.ok || !responseUsers) {
      throw new Error('データ取得に失敗したワン🐶')
    }

    const posts = await responsePosts.json();
    const users = await responseUsers.json();

    const user = users.find((user) => {
      return user.id === 5;
    })

    for (const [key, value] of Object.entries(user)) {
      const elements = document.querySelectorAll(`#practice-profile-${key}`);

      if (elements.length === 0) continue;


      elements.forEach((element, index) => {
        if (typeof value === 'object') {
          for (const [nestedKey, nestedValue] of Object.entries(value)) {
            element.textContent = Object.entries(value)[index][1];
          }
        } else {
          element.textContent = value;
        }
      })
    }

    const post = posts.filter((post) => {
      return post.userId === 5;
    })

    const inputs = document.querySelectorAll('[id^="practice-profile-"]');

    inputs[3].textContent = `${post.length}件`

    inputs[4].replaceChildren();
    post.forEach(({ body, title }, index) => {
      inputs[4].insertAdjacentHTML('afterbegin', `<article class="practice-post-item">
  <h4>${title}</h4>
  <p>${body}</p>
  </article>`)
    })
  } catch (err) {
    console.log(err);
  }
}

getUsers();
getTodos();
getPosts();
getUsersAndPosts();