# HTML5プロフェッショナル認定試験 Level.1 公式出題範囲との照合

確認日：2026年9月1日  
公式出題範囲：https://html5exam.jp/outline/objectives_lv1.html

## 1.4.1 マルチデバイス対応｜重要度7

公式の出題種別：知識問題・コードリーディング問題・記述問題

| 公式の重要な技術要素 | 教材内の対応 |
|---|---|
| スマートフォン、タブレット、PC、プリンタ | SECTION 01の端末図、SECTION 04のメディアタイプ、印刷用CSS |
| フルードグリッド | SECTION 03：定義、12列模型、割合計算、列数変更、試験判断表、模擬問題A |
| フルードイメージ | SECTION 03：max-widthとheight、実画像、模擬問題B |
| 固定レイアウト、可変レイアウト | SECTION 01：比較模型とコード |
| リセットCSS | SECTION 01：ユーザーエージェントスタイルとの違い |
| CSSスプライト | SECTION 05：1枚画像、background-position、hover模型 |
| 高解像度画面向け対応 | SECTION 05：CSSピクセル、デバイスピクセル、DPR、density |
| viewport、density、initial-scale | SECTION 02とSECTION 05 |
| ファビコン、apple-touch-icon、apple-touch-icon-precomposed | SECTION 06 |
| スタンドアローンモード | SECTION 06 |
| 電話番号へのリンク | SECTION 06：format-detection、telリンク |
| script要素、async属性、defer属性 | SECTION 06：取得／実行／解析、タイムライン、比較表 |

## 1.4.2 メディアクエリ｜重要度5

公式の出題種別：知識問題・コードリーディング問題・記述問題

| 公式の重要な技術要素 | 教材内の対応 |
|---|---|
| メディアクエリ | SECTION 04：構造分解、論理演算、ブレークポイント |
| メディアタイプ | SECTION 04：教科書掲載10種類の完全表 |
| メディア特性 | SECTION 04：教科書掲載の幅・高さ・端末幅・向き・縦横比・解像度の完全表 |
| ピクセル、dpi、dpcm | SECTION 04とSECTION 05。教科書掲載のdppxも併記 |
| エラーハンドリング | SECTION 04：不正なクエリとカンマ後の評価 |

## 今回の再検証で増補した内容

- フルードグリッドを「%指定」だけで終わらせず、格子、使用列数、12列例、割合計算、画面幅ごとの列変更まで説明
- メディアタイプ10種類を省略せず、出力先と対応づけた表に変更
- 教科書掲載のメディア特性を全件掲載
- srcset、x記述子、w記述子、sizesを用語定義から説明
- pictureの2候補と、実際に切り替わるライブ画像を同一セクションへ配置
- CSSスプライトをhover／focusで切り替えられる模型へ変更
- defer／asyncを、HTML解析、取得、実行の違いから説明
- format-detectionへtelephone、email、addressを追加

この教材は公式出題範囲と教科書第4章の範囲に限定し、試験対策に不要な追加技術へ内容を広げていません。
