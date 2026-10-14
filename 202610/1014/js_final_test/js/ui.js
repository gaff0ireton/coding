/*
  このコードはサイトのデザイン・操作用に入っているコードです。
  ここには問題の回答は書かないでください。

  テストの解答は js/main.js や、問題文で指定されたファイルに記述してください。

  テストを終えて時間がある場合は、このファイルを読みながら、
  ドロワーメニューがどのように動いているのか確認してみてください。
*/

// ドロワーメニューの開閉に必要なHTML要素を取得しています。
// drawerButton：画面右上に表示されるメニューボタン
// drawer：問題一覧が入っているサイドバー
// drawerBackdrop：ドロワーを開いたときに画面の後ろへ表示する半透明の背景
const drawerButton = document.getElementById("drawer-toggle");
const drawer = document.getElementById("question-drawer");
const drawerBackdrop = document.getElementById("drawer-backdrop");

// matchMedia()を使って、画面幅が820px以下かどうかを判定しています。
// CSSのメディアクエリと似た条件をJavaScript側でも扱うことができます。
const mobileQuery = window.matchMedia("(max-width: 820px)");

// ドロワーメニューを閉じる処理です。
// bodyからdrawer-openクラスを削除し、ボタンやメニューのaria属性も閉じた状態へ戻します。
const closeDrawer = () => {
  document.body.classList.remove("drawer-open");
  drawerButton.setAttribute("aria-expanded", "false");
  drawerButton.setAttribute("aria-label", "問題一覧を開く");
  drawer.setAttribute("aria-hidden", mobileQuery.matches ? "true" : "false");
};

// ドロワーメニューを開く処理です。
// 820px以下の画面でだけ動作し、bodyへdrawer-openクラスを追加します。
// aria属性も変更し、現在メニューが開いていることをブラウザへ伝えています。
const openDrawer = () => {
  if (!mobileQuery.matches) return;

  document.body.classList.add("drawer-open");
  drawerButton.setAttribute("aria-expanded", "true");
  drawerButton.setAttribute("aria-label", "問題一覧を閉じる");
  drawer.setAttribute("aria-hidden", "false");
};

// 画面幅が820pxをまたいで変化したときに、ドロワーの状態を一度リセットします。
// PC表示からスマートフォン表示へ切り替えた場合などに、開閉状態が残らないようにしています。
const syncDrawer = () => {
  closeDrawer();
};

// 右上のメニューボタンがクリックされたときの処理です。
// bodyにdrawer-openクラスが付いているかを確認し、開いていれば閉じ、閉じていれば開きます。
drawerButton.addEventListener("click", () => {
  const isOpen = document.body.classList.contains("drawer-open");
  isOpen ? closeDrawer() : openDrawer();
});

// ドロワーの後ろにある半透明の背景をクリックした場合も、メニューを閉じます。
drawerBackdrop.addEventListener("click", closeDrawer);

// 問題一覧のリンクをクリックしたあと、スマートフォン表示ではドロワーを閉じます。
// closest("a") を使い、クリックされた要素がリンク自身またはリンク内の要素かを確認しています。
drawer.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeDrawer();
});

// キーボードのEscapeキーでもドロワーを閉じられるようにしています。
// マウス以外でも操作できるようにするための処理です。
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDrawer();
});

// 画面幅が820px以下／以上へ切り替わったときにsyncDrawer()を実行します。
mobileQuery.addEventListener("change", syncDrawer);

// ページを最初に読み込んだ時点でも、一度ドロワーの状態を整えます。
syncDrawer();
