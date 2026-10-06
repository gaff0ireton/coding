
async function fetchUser(json) {

    // * 結果を表示する要素を取得
    const result = document.getElementById('result');

    try {

        throw new Error('エラー');

        // * APIにリクエストを送り、レスポンスが返るまで待つ
        const response = await fetch(json);

        // * ステータスが200番台以外ならエラーを返す
        if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
        }

        // * レスポンスをJSON文字列からJavaScriptのオブジェクトに変換するまで待つ
        const user = await response.json();
        console.log(user);

        // * ユーザー情報をHTMLとして追加表示
        result.insertAdjacentHTML(
            'beforeend',
            `
            <p><strong>名前:</strong> ${user.name}</p>
            <p><strong>メール:</strong> ${user.email}</p>
            <p><strong>会社:</strong> ${user.company.name}</p>
            `);

    } catch (err) {
        console.log(err.message);

        result.insertAdjacentHTML(
            'beforeend', `<p>データの取得に失敗しました</p>`);

    }
}

fetchUser('https://jsonplaceholder.typicode.com/users/1');