/* 問題1：有効な点数だけ集計する

calculateScore(scores = []) を作ってください。

total = 0、count = 0 から開始
負の数は無効なので continue
0 が来たら、その時点でループを終了
それ以外は total に加算して count を1増やす
加算後の total がちょうど 30 なら、その場で
`ぴったり達成！${count}回で30点です` を返す
加算後の total が30を超えた場合も、その場で
`オーバーしました。合計${total}点です` を返す
0で終了、または最後まで回って30未満だった場合は
`終了：${count}回、合計${total}点です` を返す */

const calculateScore = (scores = []) => {
    let total = 0;
    let count = 0;

    for (const score of scores) {
        if (score < 0) {
            continue;
        }

        if (score === 0) {
            break;
        }

        total += score;
        count++;

        if (total === 30) {
            return `ぴったり達成！${count}回で30点です`;
        }

        if (total >= 30) {
            return `オーバーしました。合計${total}点です`;
        }
    }

    return `終了：${count}回、合計${total}点です`;
}

console.log(calculateScore([10, -5, 8, 12, 100]));
// ぴったり達成！3回で30点です

console.log(calculateScore([10, 8, 15, 100]));
// オーバーしました。合計33点です

console.log(calculateScore([10, -5, 8, 0, 100]));
// 終了：2回、合計18点です