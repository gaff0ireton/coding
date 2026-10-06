const copyText = document.querySelector('#copyText');
const copyButton = document.querySelector('#copyButton');
const copyResult = document.querySelector('#copyResult');

/* ========================
   review than()...catch()...finally()の場合
======================== */

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(copyText.textContent)
        .then(() => {
            // throw new Error('テスト用のエラー');
            copyResult.textContent = 'コピーしたワン！';
        })
        .catch((err) => {
            copyResult.textContent = '失敗したワン...';
            console.log(err.message);

        })
        .finally(() => {
            console.log('コピー処理が終わったワン');

        });
});