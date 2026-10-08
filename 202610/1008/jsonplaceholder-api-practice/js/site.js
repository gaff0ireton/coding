// ==========================================================
// 教材サイト全体で使うJavaScript
// ==========================================================
//
// このファイルでは、教材ページそのものを使いやすくするための
// 次のような機能を動かしています。
//
// ・サンプルコードをコピーする機能
// ・「コピーできました！」という通知
// ・スマートフォン用のドロワーメニュー
//
// API取得の練習コードは js/practice.js に記述します。
// ==========================================================


// ----------------------------------------------------------
// HTMLから必要な要素を取得する
// ----------------------------------------------------------

// すべての「コピー」ボタンを取得する
const copyButtons = document.querySelectorAll(".copy-button");

// コピー完了時に表示するメッセージを取得する
const copyToast = document.querySelector(".copy-toast");

// ドロワーメニューを開閉するボタンを取得する
const menuButton = document.querySelector(".menu-button");

// 右側から表示されるドロワーメニュー本体を取得する
const drawerMenu = document.querySelector(".drawer-menu");

// ドロワー表示中に背景へ表示する半透明の要素を取得する
const drawerOverlay = document.querySelector("[data-drawer-overlay]");

// ドロワーメニュー内のリンクをすべて取得する
const drawerLinks = document.querySelectorAll(".drawer-nav a");


// ----------------------------------------------------------
// コピー完了メッセージで使用するタイマー
// ----------------------------------------------------------

// setTimeout() のタイマーIDを保存するための変数
let toastTimer;


// ----------------------------------------------------------
// Clipboard APIが使えない場合のコピー処理
// ----------------------------------------------------------

function fallbackCopy(text) {
  // 一時的にtextarea要素を作る
  const textarea = document.createElement("textarea");

  // コピーしたい文字列をtextareaに入れる
  textarea.value = text;

  // ユーザーが編集できないようにする
  textarea.setAttribute("readonly", "");

  // 画面には見えない位置に配置する
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";

  // bodyの中へ一時的に追加する
  document.body.appendChild(textarea);

  // textarea内の文字列を選択する
  textarea.select();

  // 選択した文字列をクリップボードへコピーする
  document.execCommand("copy");

  // コピーが終わったのでtextareaを削除する
  textarea.remove();
}


// ----------------------------------------------------------
// 「コピーできました！」というメッセージを表示する
// ----------------------------------------------------------

function showCopyToast() {
  // すでにタイマーが動いている場合は一度解除する
  clearTimeout(toastTimer);

  // CSSのクラスを追加してメッセージを表示する
  copyToast.classList.add("is-visible");

  // 1.8秒後にメッセージを非表示にする
  toastTimer = setTimeout(() => {
    copyToast.classList.remove("is-visible");
  }, 1800);
}


// ----------------------------------------------------------
// 「コピー」ボタンを押したときの処理
// ----------------------------------------------------------

// すべてのコピーボタンにクリックイベントを設定する
copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    // ボタンの次にあるpre要素からコード全体を取得する
    const code = button.nextElementSibling.textContent;

    try {
      // Clipboard APIが利用できる場合はこちらを使ってコピーする
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
      } else {
        // Clipboard APIが使えない場合は予備のコピー処理を使う
        fallbackCopy(code);
      }

      // コピーが成功したことを画面下部に表示する
      showCopyToast();

      // ボタンの文字も一時的に「コピー済み」へ変更する
      button.textContent = "コピー済み";
      button.classList.add("copied");

      // 1.4秒後に元のボタン表示へ戻す
      setTimeout(() => {
        button.textContent = "コピー";
        button.classList.remove("copied");
      }, 1400);
    } catch (error) {
      // コピー処理に失敗した場合はConsoleにエラーを表示する
      console.error("コピーに失敗しました", error);

      // ボタンにも失敗したことを表示する
      button.textContent = "コピー失敗";
    }
  });
});


// ----------------------------------------------------------
// ドロワーメニューを開く処理
// ----------------------------------------------------------

function openDrawer() {
  // メニュー本体を画面内へ表示する
  drawerMenu.classList.add("is-open");

  // アクセシビリティ用の状態も「表示中」に変更する
  drawerMenu.setAttribute("aria-hidden", "false");

  // ボタンが開いている状態であることを示す
  // CSSではこの値を使って3本線をXへアニメーションさせる
  menuButton.setAttribute("aria-expanded", "true");

  // ボタンの説明を「メニューを閉じる」に変更する
  menuButton.setAttribute("aria-label", "メニューを閉じる");

  // 背景の半透明オーバーレイを表示する
  drawerOverlay.hidden = false;

  // メニュー表示中はbodyのスクロールを止める
  document.body.classList.add("drawer-open");
}


// ----------------------------------------------------------
// ドロワーメニューを閉じる処理
// ----------------------------------------------------------

function closeDrawer() {
  // メニュー本体を画面の外へ戻す
  drawerMenu.classList.remove("is-open");

  // アクセシビリティ用の状態も「非表示」に戻す
  drawerMenu.setAttribute("aria-hidden", "true");

  // ボタンを閉じている状態へ戻す
  // 3本線の見た目にも戻る
  menuButton.setAttribute("aria-expanded", "false");

  // ボタンの説明を「メニューを開く」に戻す
  menuButton.setAttribute("aria-label", "メニューを開く");

  // 背景のオーバーレイを非表示にする
  drawerOverlay.hidden = true;

  // bodyを再びスクロールできるようにする
  document.body.classList.remove("drawer-open");
}


// ----------------------------------------------------------
// ハンバーガーボタンを押したときの処理
// ----------------------------------------------------------

menuButton.addEventListener("click", () => {
  // 現在ドロワーメニューが開いているか調べる
  const isOpen = drawerMenu.classList.contains("is-open");

  if (isOpen) {
    // 開いている場合は閉じる
    closeDrawer();
  } else {
    // 閉じている場合は開く
    openDrawer();
  }
});


// ----------------------------------------------------------
// 背景をクリックしたらドロワーを閉じる
// ----------------------------------------------------------

drawerOverlay.addEventListener("click", closeDrawer);


// ----------------------------------------------------------
// メニュー内のリンクを押したらドロワーを閉じる
// ----------------------------------------------------------

drawerLinks.forEach((link) => {
  link.addEventListener("click", closeDrawer);
});


// ----------------------------------------------------------
// Escキーを押したらドロワーを閉じる
// ----------------------------------------------------------

document.addEventListener("keydown", (event) => {
  // 押されたキーがEscapeで、なおかつメニューが開いている場合
  if (event.key === "Escape" && drawerMenu.classList.contains("is-open")) {
    closeDrawer();
  }
});


// ----------------------------------------------------------
// 画面幅が広くなった場合の処理
// ----------------------------------------------------------

window.addEventListener("resize", () => {
  // PCサイズに戻ったときにドロワーが開いていたら閉じる
  if (window.innerWidth > 900 && drawerMenu.classList.contains("is-open")) {
    closeDrawer();
  }
});
