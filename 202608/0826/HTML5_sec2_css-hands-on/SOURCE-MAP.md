# 教材対応表

## 編集方針

- 学習対象は `２章CSS_記述学習したい内容リスト.pdf` の全項目です。
- 説明の基準は `HTML5教科書.pdf` 第2章（PDF P57–P134）です。
- 出題観点はHTML5プロフェッショナル認定試験 Level.1 Ver2.5の公式出題範囲と公式サンプル問題で照合しました。
- 第6章模擬問題は、CSS関連設問の「見分け方」を抽出するために参照し、問題文の転載はしていません。
- 最新仕様への置換は行わず、教科書が明示している補足だけを「教科書上の注意」として区別しました。

## セクションと対応項目

| 学習セクション | 教科書項目 | 重要度の核 | 主な試験観点 |
|---|---|---:|---|
| 1. CSSを置く場所とセレクタ | 2-2〜2-10、2-35、2-64〜2-66 | ★★★ | 適用先、結合子、疑似クラス、優先順位、無効な宣言 |
| 2. 色と見た目 | 2-12、2-13、2-22、2-59〜2-61 | ★★★ | 色指定、角丸順序、影、グラデーション、透明度 |
| 3. 時間による変化 | 2-30〜2-34 | ★★★ | transitionとanimationの違い、@keyframes、繰り返し・方向 |
| 4. 配置・表・段組み | 2-27、2-28、2-53、2-54、2-62、2-63 | ★★★ | float、overflow、表、caption、writing-mode、段組み |
| 5. フォント | 2-18、2-19、2-37、2-39、2-40 | ★★ | @font-face、font短縮、総称ファミリ、太さ・斜体 |
| 6. 文字の装飾 | 2-41、2-42、2-44〜2-47 | ★★ | 大小文字、字下げ、字間、装飾、双方向、影・行高・縦位置 |
| 7. リスト・カウンタ・引用符 | 2-15、2-16、2-71 | ★ | マーカー、counter-reset/increment、quotes |

## セクション末の記述問題

| 問題 | 自分で記述する内容 | index.html内の完成例 |
|---|---|---|
| PRACTICE 01 | 属性セレクタ、背景色、文字色、枠線、角丸 | `.answer-live.practice-selector` |
| PRACTICE 02 | グラデーション、角丸、影、正円 | `.answer-live.practice-visual-card` |
| PRACTICE 03 | `:hover`と`transition` | `.answer-live .practice-motion-button` |
| PRACTICE 04 | `column-count`、`column-gap`、`column-rule`、`column-span` | `.answer-live.practice-columns` |
| PRACTICE 05 | `font`短縮形 | `.answer-live.practice-font-card` |
| PRACTICE 06 | `text-transform`、文字間隔、字下げ、行高 | `.answer-live.practice-text-card` |
| PRACTICE 07 | CSSカウンタと疑似要素 | `.answer-live.practice-counter` |

問題用の未完成CSSは`css/style.css`、完成例の解答は`css/answer.css`へ分離しています。`answer.css`は`.answer-live`内だけへ適用されるため、未完成問題には影響しません。

## 使用したオンライン一次資料

- HTML5プロフェッショナル認定試験 Level.1 Ver2.5 出題範囲
  - https://html5exam.jp/outline/objectives_lv1.html
- HTML5プロフェッショナル認定試験 Level.1 サンプル問題
  - https://html5exam.jp/measures/lv1_2.html
- Pantone Color of the Year 2026（Cloud Dancer）
  - https://www.pantone.com/color-of-the-year/2026
- LINE Seed JP
  - https://seed.line.me/index_jp.html

## 配色について

背景はPANTONE 11-4201 Cloud Dancerの「空気感のある白」をデザインの起点にしています。CSSの16進数は教材用のWeb近似色であり、Pantone公式の色変換値を表すものではありません。
