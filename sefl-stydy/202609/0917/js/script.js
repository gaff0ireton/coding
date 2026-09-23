// ① 名前を最後まで探せるように直す

// 次のコードには問題があります。下のコメントどおりの結果になるように修正してください。

// ! 考えるポイント：「今見ている名前が違った」と「配列のどこにもなかった」は、いつ分かる？

function findName(names = [], target = "") {
    for (const name of names) {
        if (name === target) {
            return true;
        }
    }
    return false;
}

// 修正後に期待する結果
console.log(findName(["田中", "佐藤", "鈴木"], "鈴木"));
// true

console.log(findName(["田中", "佐藤", "鈴木"], "山田"));
// false

console.log(findName());
// false

// ② 何度呼んでも正しく数えられるように直す

// 合格点以上の人数を返す関数です。しかし、繰り返し呼び出すと結果がおかしくなります。

// その回に渡された配列だけの合格人数を返すように修正してください。呼び出し側は変更しません。



function countPassed(scores = [], passLine = 60) {
    let count = 0;
    for (const score of scores) {
        if (score >= passLine) {
            count += 1;
        }
    }

    return count;
}

// 修正後に期待する結果
console.log(countPassed([80, 50, 60]));
// 2

console.log(countPassed([70, 40]));
// 1

console.log(countPassed());
// 0

// ③ コンソールに出る内容を予想する

// これはコードを直さず、何がどの順番で表示されるか答えてください。関数内の console.log() も含めて考えてね。

const message = "待機中";

function greet(name = "") {
    if (name === "") {
        return "名前を入力してください";
    }

    const message = `${name}さん、こんにちは！`;

    return message;

    console.log("処理完了");
}

console.log(greet("佐藤")); // 佐藤さん、こんにちは！
console.log(greet()); // undefined // ! 「名前を入力してください」が正解
console.log(message); // 待機中

// ① 次の5つの出力を、上から順に答えてください。 同じ名前の変数と仮引数が出てきます。

let userName = "田中";

function makeGreeting(userName = "ゲスト") {
    if (userName === "") {
        return "名前が空です";
    }

    userName = `${userName}さん`;

    return `こんにちは、${userName}`;
}

console.log(makeGreeting()); // こんにちは、ゲストさん
console.log(makeGreeting(undefined)); // 名前が空です
console.log(makeGreeting("")); // 名前が空です
console.log(makeGreeting(userName)); // こんにちは、田中さん
console.log(userName); //田中

// ② 次も出力予想。名前を1つ調べるたびに checkedCount を増やしています。 コードを変更せず、4つの出力を答えてください。

let checkedCount = 0;

function findName02(names = [], target = "") {
    for (const name of names) {
        checkedCount += 1;

        if (name === target) {
            return true;
        }
    }

    return false;
}

console.log(findName02(["田中", "佐藤", "鈴木"], "佐藤")); // true
console.log(checkedCount); // 2

console.log(findName02(["山田", "高橋"], "鈴木")); // false
console.log(checkedCount); // 3

// ③ 最後は実装！ 数値を先頭から足して、合計が初めて目標以上になった時点で「何個足したか」を返す関数を作ってください。

function countUntilGoal(numbers = [], goal = 10) {
    let plusCount = 0;
    let total = 0;

    for (const number of numbers) {
        total += number;
        plusCount += 1;
        if (goal <= total) {
            return plusCount;
        }
    }
    return 0;
}

// 期待する結果
console.log(countUntilGoal([3, 4, 5, 100]));
// 3（3 + 4 + 5 で目標の10以上になる）

console.log(countUntilGoal([3, 4, 5, 100], 7));
// 2

console.log(countUntilGoal([3, 4]));
// 0（全部足しても目標に届かない）

console.log(countUntilGoal());

// 問題：目標値までポイントを集計する関数

// 次の仕様を満たす関数 collectPoints を作ってください。
// 0

// ルール
// numbers は数値の配列
// goal は目標値
// numbers を先頭から for...of で1つずつ処理する
// total は 0 から開始
// count は「実際に加算した数字の個数」で、0 から開始
// 負の数は無視する
// continue を使うこと
// count にも含めない
// 0が出てきたら、その時点で処理を終了
// "0が見つかりました" を返す
// 正の数は total に加算し、count を1増やす
// 加算した結果、total >= goal になった瞬間、
// `${count}個の数字で${total}に到達しました`
// を返す
// 最後まで処理しても goal に届かなかった場合、
// `未達成です。合計は${total}です`
// を返す
// 引数が省略された場合は
// numbers = []
// goal = 10
// になるようにする

const collectPoints = (numbers = [], goal = 10) => {
    let total = 0;
    let count = 0;

    for (const number of numbers) {
        if (number < 0) {
            continue;
        }

        if (number === 0) {
            return '0が見つかりました';
        }

        total += number;
        count++;

        if (total >= goal) {
            return `${count}個の数字で${total}に到達しました`
        }
    }
    return `未達成です。合計は${total}です`

}

console.log(collectPoints([3, -5, 4, 8], 10));

console.log(collectPoints([2, -3, 4], 20));

console.log(collectPoints([4, -2, 3, 0, 100], 20));

console.log(collectPoints([5, 5, 100], 10));

// 負の数が来たら、その数だけ無視して次へ進む
// 0 が来たら、その場でループを終了する
// 正の数は total に加算し、count を1増やす
// 加算後に total >= 20 になったら、そこで関数自体を終了して
// `目標達成！合計は${total}です` を返す
// 0 でループを抜けた場合や、最後まで回って20未満だった場合は、最後の return を使う



const analyzeNumbers = (numbers = []) => {
    let total = 0;
    let count = 0;

    for (const number of numbers) {

        if (number < 0) {
            continue;
        }

        if (number === 0) {
            break;
        }

        total += number;
        count++;

        if (total >= 20) {
            return `目標達成！合計は${total}です`;
        }
    }

    return `終了しました。合計は${total}、加算した回数は${count}回です`;
};

console.log(analyzeNumbers([5, -3, 7, 0, 100]));

console.log(analyzeNumbers([5, -3, 7, 9, 0]));