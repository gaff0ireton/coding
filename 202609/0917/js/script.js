// note 関数
// 関数の引数はプリミティブ型のみではなく、オブジェクト型も渡すことが可能

const student = {
    id: 231006,
    grade: 1,
    firstname: '花子',
    lastname: '田中',
};

const showStudentInfo = (info) => {
    const infoText = `ID: ${info.id} / 学年: ${info.grade}`;
    return infoText;
}

console.log(showStudentInfo(student));

const arr = [1, 2, 3, 4];

function showArrInfo(info) {

    for (const i of info) {
        const result = i * i * i;
        return result;

    }

    // return info[0] * info[2] * info[3];
}
showArrInfo(arr);
console.log(showArrInfo(arr));

// review 値渡し

const plusOne = (num) => {
    num += 1;
    return num;
}

let number = 10;
const result = plusOne(number);
console.log(result);
console.log(number);

// review 返り値(return)を返す・受け取る
// 1.返り値を返す（処理結果を返す）
// ! 2.returnが実行されると、その時点で関数の処理が終了される
// ! return実行後よりも下の行の処理は一切実行されない
// * 3.返す値はどんなものでも良い。プリミティブでもオブジェクトでも返すことが可能。
// ! 4.返せる値は1個だけ(オブジェクト型も返せるので、複数返したい場合はオブジェクト型を使う)

// オブジェクト型も返せる
// 関数を返すことも可能。// todo 再帰関数
const returnArr = (num) => {
    return [num, num + 1, num + 2];
}

console.log(returnArr(6));
// 変数の値として関数の実行結果（return）を代入できる
const arrVar = returnArr(10);
console.log(arrVar);

// review コールバック関数
// 関数の引数として渡す関数をコールバック関数と呼称する
// element.addEventListener("click", () => {

// });

