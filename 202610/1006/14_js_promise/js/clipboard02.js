const copyText = document.querySelector('#copyText');
const copyButton = document.querySelector('#copyButton');
const copyResult = document.querySelector('#copyResult');

/* ========================
   review async / await の場合
======================== */

copyButton.addEventListener('click', async () => {
    try {
        // throw new Error('テスト用のエラー');
        await navigator.clipboard.writeText(copyText.textContent);
        copyResult.textContent = 'コピーしたワン！';
    } catch (err) {
        copyResult.textContent = '失敗したワン...';
        console.log(err.message);
    } finally {
        console.log('コピー処理が終わったワン');
    }
});