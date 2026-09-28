// review エスケープシーケンス
// キーボードで入力しずらい文字、文字として表示されない文字を文字列に含めたい時に扱う。

console.log('\tインデント\nします');
console.log('インデントしてない');
console.log('\xF7');

// review テンプレートリテラル
// 文字列を扱う際の記法。文字列の途中で改行が可能。埋め込み式が使えるので、文字列の中に変数や式、関数が使える。

// review 埋め込み式
// ${}の中に変数名・引数名・式・関数の実行などを書くと、その値が文字列に入る
// * ${}の中はJavaScriptの入り口
const radius = Math.floor((Math.random() * 10) + 1);
const result = `半径${radius}の円の面積は、${Math.floor(Math.PI * radius ** 2)}です。`;
console.log(result);

// review 文字列の操作
// ! .lengthプロパティ
// 文字列の文字数を数えたり、配列の値の数を調べることができる。for文や、値全てに対して処理をする場合によく用いられる。

const str = '今日もまたプログラミングが楽しいな';
console.log(str.length);
console.log('お前の苦労をずっと見ていたぞ'.length);
console.log('お前のことが好きだったんだよ'.length);

// idea 文字列は[]ブラケット記法で、インデックス番号での取り出しが可能
console.log(str[0]);

// idea at()メソッド
console.log(str.at(0));

// []ブラケット記法ではできない、負の値の指定ができる。一番後ろの文字を取得したり、後ろからカウントしたい場合に使う
console.log(str.at(-1));

// idea startWith()メソッド
// 文字列の中に特定の文字列が含まれているかどうか調べる
// 初期値は先頭からチェックして、先頭から探したい文字列がなければfalseになる
// 第二引数にチェックを始めるインデックス番号を入れると、その箇所から調べ始める
if (str.startsWith('プログラミング', 5)) {
    console.log('プログラミングと書かれています');

} else {
    console.log('プログラミングと書かれていません');

}

// idea includes()メソッド
// 文字列の中に指定した文字列があれば、trueを返す。なければfalseを返す。シンプルに文字をあるかないかを探す際に便利
console.log(str.includes('楽しい'));


// idea indexOf()メソッド
// 該当する文字列が始めるインデックス番号を調べる（返す）メソッド
console.log(str.indexOf('楽しい'));
console.log(str.lastIndexOf('楽しい'));

// review 文字列を整形して、新しい文字列を作るメソッド
// idea slice()メソッド
// 文字列の一部分から新しい文字列を作る（切り抜き）
// 第二引数の取り出し終わりのインデックス番号の文字自体は含まれない
// 4, 16と書いた場合は、インデックス番号4から15番目までの文字が切り抜かれる
const cssColor = 'rgb(29, 144, 255)';
const colorNum = cssColor.slice(4, 16);
console.log(colorNum);
const colorNum02 = cssColor.slice(4, cssColor.length - 1);
console.log(colorNum02);

// idea 桁埋め padStart()メソッド
// 指定した桁数になるまで、指定した文字を足す
const files = [];

for (let index = 1; index <= 10; index++) {
    files.push(`img_${String(index).padStart(2, '0')}.jpg`);
}

console.log(files);

// idea trim()メソッド
// 文字列内の前後の空白を削除する。前だけ消したい場合は、trimStart()、後ろだけ消したい場合はtrimEnd()を扱う。// ! このメソッドは引数を扱わない（取らない）
// ユーザーの入力した文字から余白を消したり、データベースの中の文字から余白を消したり、こちらからでは操作できない場所の余白を消す際に使う機会がある

const trimmed = '　　先頭に全角スペースがあるテキスト'.trim();
console.log(trimmed);

// review 正規表現（レギュラーエクスプレッション）
const hours = '営業時間 10:00〜23:00';

// * 通常の文字列による検索
console.log(hours.includes('10:00'));
console.log(hours.includes('21:00'));

// * 正規表現による検索
// まず、正規表現パターンとなる変数を作る。これを正規表現オブジェクトと呼称する
const re = /\d\d:\d\d/g;
const matchs = hours.match(re);
console.log(matchs);

// * 正規表現実践編
const word = 'わたしのWebサイトは「https://studio947.net」です。';
const re01 = /Webサイト/;
const re02 = /[W|w]ebサイト/; // todo []の中で大文字のWと小文字のwの両方を対象とする
const re03 = /https?:\/\//g; // todo httpでもhttpsでもマッチする
// idea \/ = /という文字を探す際に\(バックスラッシュ)を入れることで、記号の/を正しくマッチする対象にする。
// idea ? = 直前の文字があってもなくてもマッチさせる記号

// note URLにマッチさせる
const re04 = /https?:\/\/[\w.-]+\.[\w.-]+[\/|\?|#]?/g;
// idea この正規表現によって、「https://xxx.com」のような文字列をマッチできるようなパターンになっている

// review 正規表現パターンを使った一致
// idea test()メソッド

const testResult = re01.test(word);
console.log(testResult);

// review マッチした文字列を取得する
// idea match()メソッド

const matchResult = word.match(re04);
console.log(matchResult);

