/* ========================
   review then()...catch() を利用した場合
======================== */
fetch('./data/users.json')

    // * HTTPステータスが成功していない場合は、エラーを返す
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
        }

        return response.json(); // * JSONとして解析をして、JavaScriptのデータに変換する
    })
    .then((users) => {
        console.log(users);
        console.log(users[0].name);

    })
    .catch((err) => {
        console.log('データを取得できませんでした');
        console.log(err.message);
    })

function loadData(json) {
    fetch(json)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTPエラー: ${response.status}`);
            }

            return response.json();
        })
        .then((users) => {
            for (const user of users) {
                console.log(user.name);
            }

        })
        .catch((err) => {
            console.log('データを取得できませんでした');
            console.log(err.message);
        })
}

loadData('./data/users.json');
loadData('./api/products.json');