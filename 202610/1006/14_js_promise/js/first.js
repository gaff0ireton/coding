/* ========================
   review 同期処理: 処理が終わるまでまってから、次へ進む
======================== */
console.log('// ---- 同期処理の例 ---- //');

console.log('A');
console.log('B');
console.log('C');

/* ========================
   review 非同期処理: 処理の完了を待たずに、次へ進む
======================== */
console.log('// ---- 非同期処理の例 ---- //');

console.log('A');

// * 非同期処理
setTimeout(() => {
    console.log('B');
}, 1000);

console.log('C');

// idea ---- データの取得の例: async / await の利用 ---- //

// todo Promiseオブジェクト: 非同期処理の「結果を後で受け取る約束」を表すオブジェクト。3つの状態を持つ。
// ? Pending(処理中) -> Fulfilled(成功)、またはPending(処理中) -> Rejected(失敗)のどちらかの状態になる。
// note fetch()やresponse.json()は、すぐに結果を返すのではなく、Promiseで返す

// todo async: 非同期処理を扱う関数であることを宣言するキーワード。async関数は、必ずPromiseを返す。

// todo await: Promiseの処理が完了するまで、async関数内の続きの処理を一時停止する。ただし、待っている間も、JavaScript全体の処理尾が停止するわけではない。


async function loadData(json) {
    console.log('// ---- 開始行 ---- //');

    const response = await fetch(json); // * データの取得
    const data = await response.json(); // * 取得したデータをJavaScriptの配列やオブジェクトの形式に変換
    console.log(data);

    console.log('// ---- 終了行 ---- //');
}


loadData('/api/products.json');
// loadData('https://dog.ceo/api/breeds/image/random');

console.log('loadData()メソッドは、awaitで待っている間に呼び出し元に戻る。そのためこの行が実行される');
