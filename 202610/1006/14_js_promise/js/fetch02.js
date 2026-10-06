/* ========================
   review async / await を利用した場合
======================== */
async function showUsers() {
    try {
        // * レスポンスを受け取るまで待つ
        // const response = await fetch('./data/users.json');
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // * HTTPステータスが成功していない場合は、エラーを返す
        if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
        }

        // * JSONの解析が完了するまで待つ
        const users = await response.json();

        console.log(users);
        console.log(users[0].name);

    } catch (err) {
        console.log('データを取得できませんでした');
        console.log(err.message);
    }
}

showUsers();