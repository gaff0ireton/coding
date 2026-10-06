/* ========================
   review new PromiseでPromiseオブジェクトを返す処理をつくる
======================== */

// idea ---- Promiseオブジェクトを生成し、変数に代入 ---- //

const checkPromise = new Promise((resolve, reject) => {
    const isSuccess = true;
    if (isSuccess) {
        resolve('処理に成功しました');
    } else {
        reject(new Error('処理に失敗しました'));
    }
});

checkPromise
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err.message);
    })