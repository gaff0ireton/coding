# JavaScript API Practice

JSONPlaceholder を使って、JavaScript 初心者が API 取得を段階的に練習するための教材サイトです。

## ファイル構成

```text
jsonplaceholder-api-practice/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── site.js
    └── practice.js
```

## 授業での使い方

生徒が主に編集するのは `js/practice.js` だけです。

仕上げ課題（06）のHTMLには、JavaScriptから書き換える要素が分かるように課題番号付きのコメントを入れています。教材画面上にも各課題の「書き換え対象」として `id` / `class` を表示しています。

`index.html` をブラウザで開き、各レッスンに掲載されているサンプルコードをコピーして `practice.js` に貼り付けます。保存後にブラウザを再読み込みし、Console またはページ内の表示結果を確認します。

## 学習内容

1. `fetch()` を使って単一オブジェクトを取得し、`try...catch`、`throw new Error()`、`Error` オブジェクトによる例外処理も確認
2. `/users` を取得し、まず `console.log()` / `console.table()` で構造を確認してから、`map()` で必要な形に整理
3. `find()` で指定IDのユーザーを1件探し、取得した値でDOMのテキストを書き換える
4. `filter()` で必要なデータだけを抽出し、件数や内容をDOMへ表示
5. APIで取得した複数データをDOMへ一覧表示
6. API取得からDOM表示までを自分で組み立てる4つの仕上げ課題。最終問題では `/users` と `/posts` の2つを組み合わせる。課題の下部にはアコーディオン形式の回答コードを掲載

## API

- https://jsonplaceholder.typicode.com/posts
- https://jsonplaceholder.typicode.com/users
- https://jsonplaceholder.typicode.com/todos
- https://jsonplaceholder.typicode.com/comments

JSONPlaceholder は学習・テスト用のフェイクREST APIです。
