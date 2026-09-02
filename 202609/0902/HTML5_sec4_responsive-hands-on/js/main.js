/* ==================================================================
  第4章教材の小さな補助JavaScript

  4-18：index.htmlからscript要素のsrc属性で読み込みます。
  4-19：defer属性により、HTML解析と並行して取得し、解析後に実行します。
================================================================== */

const viewportWidth = document.querySelector("#viewportWidth");
const srcsetImage = document.querySelector("#srcsetImage");
const currentSrc = document.querySelector("#currentSrc");
const pictureDemoImage = document.querySelector("#pictureDemoImage");
const pictureCurrentSrc = document.querySelector("#pictureCurrentSrc");
const resultDialog = document.querySelector("#resultDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogMessage = document.querySelector("#dialogMessage");
const dialogHint = document.querySelector("#dialogHint");
const closeDialog = document.querySelector("#closeDialog");
const formatDetectionMeta = document.querySelector("#formatDetectionMeta");
const detectionLab = document.querySelector("#detectionLab");
const toggleTelephoneDetection = document.querySelector("#toggleTelephoneDetection");
const formatDetectionContent = document.querySelector("#formatDetectionContent");
const detectionDisabledState = detectionLab?.querySelector(".detection-state--disabled");
const detectionEnabledState = detectionLab?.querySelector(".detection-state--enabled");

/** 現在のviewport幅と、ブラウザーが選んだsrcset候補を画面へ表示します。 */
function updateResponsiveReadout() {
  if (viewportWidth) {
    viewportWidth.textContent = String(window.innerWidth);
  }

  if (srcsetImage && currentSrc) {
    const selectedUrl = new URL(srcsetImage.currentSrc || srcsetImage.src);
    currentSrc.textContent = selectedUrl.pathname.split("/").pop();
  }

  if (pictureDemoImage && pictureCurrentSrc) {
    const selectedUrl = new URL(pictureDemoImage.currentSrc || pictureDemoImage.src);
    pictureCurrentSrc.textContent = selectedUrl.pathname.split("/").pop();
  }
}

window.addEventListener("resize", updateResponsiveReadout);
window.addEventListener("load", updateResponsiveReadout);
srcsetImage?.addEventListener("load", updateResponsiveReadout);
pictureDemoImage?.addEventListener("load", updateResponsiveReadout);
updateResponsiveReadout();

/**
 * format-detectionのcontentを、カンマ区切りの値へ分解します。
 * telephoneだけを付け外しし、emailとaddressはそのまま残します。
 */
function getFormatDetectionValues() {
  return (formatDetectionMeta?.getAttribute("content") || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

/** 実際のmeta要素の内容と、教材模型の見た目を同じ状態へそろえます。 */
function updateDetectionLab() {
  if (!formatDetectionMeta || !detectionLab || !toggleTelephoneDetection) return;

  const values = getFormatDetectionValues();
  const telephoneDisabled = values.includes("telephone=no");

  detectionLab.dataset.telephoneDisabled = String(telephoneDisabled);
  if (formatDetectionContent) {
    formatDetectionContent.textContent = values.join(", ") || "（指定なし）";
  }
  if (detectionDisabledState) detectionDisabledState.hidden = !telephoneDisabled;
  if (detectionEnabledState) detectionEnabledState.hidden = telephoneDisabled;

  toggleTelephoneDetection.textContent = telephoneDisabled
    ? "telephone=noを外す"
    : "telephone=noを戻す";
  toggleTelephoneDetection.setAttribute("aria-pressed", String(!telephoneDisabled));
}

toggleTelephoneDetection?.addEventListener("click", () => {
  const values = getFormatDetectionValues();
  const telephoneIndex = values.indexOf("telephone=no");

  if (telephoneIndex >= 0) {
    values.splice(telephoneIndex, 1);
  } else {
    values.unshift("telephone=no");
  }

  formatDetectionMeta?.setAttribute("content", values.join(", "));
  updateDetectionLab();
});

updateDetectionLab();

/** 選択肢をA,Bのような比較しやすい形式へ整えます。 */
function getSelectedValues(form) {
  return [...form.querySelectorAll("input:checked")]
    .map((input) => input.value)
    .sort();
}

/** 正解・不正解・未選択の共通モーダルを表示します。 */
function showResult(state, hint = "", correctAnswers = "", explanation = "") {
  resultDialog.classList.remove("is-wrong", "is-empty");
  dialogHint.hidden = true;

  if (state === "correct") {
    dialogTitle.textContent = "正解です";
    dialogMessage.textContent = explanation
      || `正解は${correctAnswers}です。選択肢を過不足なく選べています。`;
  } else if (state === "wrong") {
    resultDialog.classList.add("is-wrong");
    dialogTitle.textContent = "もう一度考えてみましょう";
    dialogMessage.textContent = "正しい選択肢の数と、それぞれの用語の役割を確認してください。";
    dialogHint.hidden = false;
    dialogHint.querySelector("p").textContent = hint;
  } else {
    resultDialog.classList.add("is-empty");
    dialogTitle.textContent = "選択肢を選んでください";
    dialogMessage.textContent = "問題文にある選択数を確認してから、回答ボタンを押してください。";
  }

  if (typeof resultDialog.showModal === "function") {
    resultDialog.showModal();
  } else {
    resultDialog.setAttribute("open", "");
  }
}

document.querySelectorAll(".quiz").forEach((quiz) => {
  quiz.addEventListener("submit", (event) => {
    event.preventDefault();

    const selected = getSelectedValues(quiz);
    const correct = quiz.dataset.answer.split(",").sort();

    if (selected.length === 0) {
      showResult("empty");
      return;
    }

    const isCorrect = selected.length === correct.length
      && selected.every((value, index) => value === correct[index]);

    showResult(
      isCorrect ? "correct" : "wrong",
      quiz.dataset.hint,
      correct.join("・"),
      quiz.dataset.explanation
    );
  });
});

closeDialog.addEventListener("click", () => resultDialog.close());

resultDialog.addEventListener("click", (event) => {
  if (event.target === resultDialog) {
    resultDialog.close();
  }
});
