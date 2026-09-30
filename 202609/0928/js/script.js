// review 配列の書き方
const arr = [1, 2, 3];

// note 空の配列を作ることも可能
const arr2 = [];

// review 多次元配列 2次元-3次元
// note 配列の中に配列を格納することが可能。その階層に応じて2次元や3次元と呼称する
const arr3 = [[1, 2], [3, 4], [5, 6]];
console.log(arr3);

// note バラバラのデータ型をまとめることも可能
const arr4 = ['文字列', 2, function (arg) { return arg; }, [3, '二次元配列'],];

// review 配列の値の数を調べる方法
// idea lengthプロパティ
console.log(arr4.length);

// review 配列から値を取り出す方法
// idea 基本: 配列が代入されている変数名に[]ブラケットを後ろにつけ、[]の中にインデックス番号を記載する
// note インデックス番号は0から始まり、配列の記述順に昇順に割り振られる。0,1,2,3,4,5といった要領で順番につく。
console.log(arr[0]);

// review 最後の値を取得する方法
// idea lengthプロパティもしくは、at()メソッドを使うと簡単に取得できる。
// note インデックス番号は実際に入っている値より少ないため、lengthプロパティで配列の数を取得して、そこから1を引けば、最後のインデックス番号になる
console.log(arr[arr.length - 1]);

// note at()メソッドの場合は、lengthを扱わず、配列のインデックス番号に対して負の値を扱うことができる。そのため、直接-1と記述できる。負の値を使えば、後ろから指定することが可能。
console.log(arr.at(-1));

// review 2次元配列から値を取り出す方法
// idea 多次元配列の値と取り出す場合は、[]を2回連続記述すると2次元配列から、[]を3回連続記述すると3次元配列から値を取得することが可
console.log(arr3[1][1]);

// note 値を変数に代入することも可能
const first = arr[0];
console.log(first);

// ! 分割代入を使うと、複数の変数に配列の値をまとめて代入することが可能
// const [a, b, c, d] = arr;
// console.log(a); // * 1
// console.log(b); // * 2
// console.log(c); // * 3
// console.log(d); // * undefined

// review 配列の値を書き換える方法
// idea 基本: インデックス番号で指定をして代入演算子 = で値を指定すれば書き換えることが可能
// note constで作った変数の値は配列。配列の中の値はconstで指定していても書き換え可能。再代入とは異なるため、書き換えすることができる
const arr5 = [1, 2, 3];
arr5[1] = 4;
console.log(arr5); // * 1, 4, 3

// review 配列の値を書き換えるメソッド
// idea with()メソッド
// note オリジナルの配列は変えず、新しい配列を作って、元となる配列の値を変えたものを返す
const edited = arr5.with(2, 100);
console.log(edited); // * 1, 4, 100
console.log(arr5); // * 1, 4, 3

// todo 配列操作に関しては、オリジナルの配列を直接書き換えてしまうと、複数の処理を行う際に、値のズレやエラーが発生しやすくなる。そのため、配列操作を行う場合は、新しい配列を作って、ベースとなる配列は触らない方が良い

// note 新しいメソッドを使う場合は、古いブラウザ対策としてpollyfill(ポリフィル)を導入することで対応可能

// review 配列の値全てに対して処理を行うメソッド
// idea forEach()メソッド
// note forEachはコールバック関数を使い、引数を取る。
// todo コールバック関数とは、関数やメソッドの引数として呼び出される関数のこと。主にアロー関数や無名/即時関数で記述される
// note コールバック関数は3つの引数を受け取り、この3つは全て用途が決まっている。
// ! 第一引数は配列の値。第二引数はインデックス番号。第三引数は配列自身。
// note 基本は第二引数までしか使用しない。第一引数だけ扱うこともある。
const todos = ['キャンセルの電話をする', '企画を考える', '修理に出す'];
todos.forEach((value, index, array) => {
    console.log(`${index + 1}. ${value}`);
});

// review スプレット構文を使って、配列の値を先頭、もしくは後方にまとめて追加（結合）
// note スプレット構文は配列をコピーしたい際に使われる。
const todos2 = ['ヨーグルトを買う', ...todos, 'お昼ご飯を食べる', '住民税の支払い'];
console.log(todos2);
const todos3 = [...todos, ...todos2];
console.log(todos3);

// * 配列操作 値の追加、削除、変更
// review 値の追加
// idea push()メソッド
// note 配列名に.push()として、引数に値を入れると、配列の後ろに値を追加できる
const newLength = todos.push('Wi-fiの設定を確認');
console.log(newLength); // * pushを使って追加された値の数が代入されている
todos.push('チャイムが鳴る');
console.log(todos); // * pushによって値が追加されている

// review 配列の削除
// idea pop()メソッド
// note 配列の一番後ろの値を削除する。一番後ろしか削除できないため、引数指定は不要
todos.pop();
console.log(todos);

// review 配列の先頭に要素の追加と削除
// idea unshift()メソッド,shift()メソッド
// note 配列の先頭に値を追加する場合はunshift()、先頭を削除する場合はshift()
// ! 上記4種類は配列を直接書き換える。このような操作のことをインプレイス操作と呼称する。
// note 今回は配列todosに何度も足し引きの操作を行ったが、そうすると原本である配列の現在の値が把握しづらくなる。
// todo インプレイス操作は、軽量な処理や一度しか使わないような配列などに使う。
todos.unshift('喉が渇いた');
console.log(todos);
todos.shift();
console.log(todos);

// review 新しい配列を作って、追加・削除を行うメソッド
// idea Splliced()メソッド、もしくはtoSpliced()メソッド
// ! 第一引数は削除開始のインデックス番号、第二引数は削除する値の数、第三引数は追加する要素
const arr6 = ['a', 'b', 'c', 'd', 'e'];
const param1 = arr6.toSpliced(1, 2);
console.log(param1);

// * eだけが入っている配列を作って、定数param2に代入しなさい
const param2 = arr6.toSpliced(0, 4);
console.log(param2);

// todo toSpliced(消したい要素のインデックス番号 , 1)で、その値だけピンポイントで消すことができる。

// idea 第三引数を使って、要素（値）を追加
const param3 = arr6.toSpliced(1, 0, 'f');
console.log(param3);

// todo toSpliced(追加したい場所のインデックス番号 , 0 , 追加したい値)で、指定した場所に新しい値を追加できる
// note 複数の値を追加したい場合は、第三引数以降の引数を追加すれば、いくらでも追加可能

// ! 配列に値を追加・削除する場合は、基本はとSpliced()メソッドを使って追加・削除を行う。インプレイス操作はなるべく行わない。

// * 配列の並び替え
// review 配列の並びを逆順にする
// idea toReversed()メソッド
const reverse = arr6.toReversed();
console.log(reverse);

// review 配列の順番を昇順・降順などに並び替える
// idea toSorted()メソッド
const arr7 = ['さ', 'か', 'な', 'た', 'あ', 'は', 'ま', 'な', 'や', 'ら', 'わ',];
const sort1 = arr7.toSorted();
console.log(sort1);

const nums = [1, 4, 3, 12, 14, 100, 7, 18, 9, 10];
const sort2 = nums.toSorted((a, b) => a - b);
console.log(sort2);

// todo toSorted()メソッドを使って、数字の昇順・降順を作りたい場合は、引数として(a , b) => a - b と記述すれば昇順、(a , b) => b - a と記述すれば降順となる。

// * 配列から要素を検索する
// note 文字列操作で使っていたincludes()メソッドと、indexOf()メソッドは、同じ使い方で検索・一致の確認が可能

//review 条件を満たす要素を検索する
// idea find()メソッド
// note 条件に一致するものをインデックス番号順に探して、見つけたらその値を返す
const langs = ['Rust', 'Go', 'Ruby', 'JavaScript', 'Python',];
// ? 検索条件となる関数を作成
const evaluate = (a) => a.length >= 5; // * テスト関数。5文字以上ならtrue、そうでなければfalseを返す。
const firstMatch = langs.find(evaluate);
console.log(firstMatch);

// * 新しい配列を作る
// todo toSpliced()メソッドと、スプライド構文を覚えておくこと

// review 多次元配列を1次元浅くするメソッド
// idea flat()メソッド
// note 2次元配列を1次元配列にすることが可能。3次元配列の場合は2次元配列になり、少し扱いづらいため、主に2次元配列を1次元配列にするために扱われる。

const arr3Flat = arr3.flat();
console.log(arr3Flat);

// todo flat()メソッドは元の配列は残しつつ、新しく1次元浅くなった配列を作って返す。

// ! 配列のコピーの注意点。単純に配列をコピーするとシャローコピーになり、コピー元とコピー先が同じ配列を扱う状態になる。そのため、配列は専用のメソッドやスプレッド構文を使って、新しい配列を作る。
// ! 多次元配列をコピーする際は、ディープコピーとシャローコピーが混在するため、専用メソッドを使う。

// review 専用の配列のディープコピーメソッド
// idea structuredClone()メソッド
// note structuredClone()メソッドを使うと、配列を丸ごとディープコピーできる

// review 配列の要素を結合するメソッド
// idea join()メソッド
// note 配列に対して、区切り文字を入れて、全て繋げることが可能
const dateStr = langs.join('-');
console.log(dateStr);

// todo 配列を使ったテキストを返したい時に使う

// ! 配列の値に対してそれぞれ関数を実行する（重要）
// idea ①forEach()メソッド
// note 配列全てに同じ処理ができる

// idea ②map()メソッド
// note 配列全てに処理を行い、新しい配列を返す
// ! webAP開発する場合は必須

// idea ③filter()メソッド
// note 配列に対して条件を与え、条件を満たしたもの全てを取り出した新しい配列を作る。find()メソッドは1つのみ返すが、filter()メソッドは全て返す

// idea 次点 reduce()メソッド
// note 配列の値を合算する

// idea map()メソッド
// note map()メソッドは、引数としてコールバック関数を使う。仕組みはforEachと同じ。
// todo forEach()メソッドと動きは似ているが、新しい配列を作るためのメソッド。forEach()メソッドは全てに処理をするだけ。
const mapArr = [1, 2, 3, 4, 5];
const mapResult = mapArr.map((value) => value ** 2);
console.log(mapResult);

// idea filter()メソッド
// note filter()メソッドは、ベースとなる配列から条件を満たしているものだけを選んで、新しい配列を作るメソッド
// note 検索条件をコールバック関数で記述する。引数はforEach()メソッドと、map()メソッドと同じ。
const filterResult = langs.filter((value) => value.length <= 4);
console.log(filterResult);

