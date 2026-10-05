<!-- ELUCENIA technical documentation · osmolaridade-serica · ja · no clinical/professional/rights approval -->

# 血清浸透圧・浸透圧ギャップ

[条件・出典・許諾](https://elucenia.org/ja/tools/osmolaridade-serica)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### ナトリウム

`na`

mEq/L · 範囲: 100–200

### グルコース

`glic`

mg/dL · 範囲: 10–2000

### 尿素

`ureia`

mg/dL · 範囲: 5–500

### 血清エタノール

`etanol`

mg/dL · 任意 · 範囲: 0–800

### 実測浸透圧

`osm`

mOsm/kg · 任意 · 範囲: 200–500

## 方法の版

2 Na+グルコース/18+尿素/6またはBUN/2.8；エタノール/Purssell2001 /3.7；張度は尿素除外

## 記載された計算式

計算浸透圧濃度 = 2 × Na + グルコース ÷ 18 + 尿素 ÷ 6 (+ エタノール ÷ 3.7, 測定済みの場合). 尿素の代わりにBUNなら使用 BUN ÷ 2.8.

実効浸透圧濃度 (張度) = 2 × Na + グルコース ÷ 18.

浸透圧ギャップ = 実測重量浸透圧濃度 − 計算浸透圧濃度.

## 限界・対象集団

浸透圧ギャップは手掛かりであって、特定のアルコールを同定するものではありません。値は代謝段階、基礎のギャップ、他の溶質に依存します。ケトアシドーシス、腎機能障害、乳酸アシドーシスでも上昇し得ます。式、単位、測定された重量浸透圧濃度は出典に対応する必要があり、結果だけでは中毒を確定も除外もできません。

## 参考文献

- [Kraut JA, Xing SX. Approach to the evaluation of a patient with an increased serum osmolal gap and high-anion-gap metabolic acidosis. Am J Kidney Dis, 2011.](https://doi.org/10.1053/j.ajkd.2011.05.018)

- [Purssell RA et al. Derivation and validation of a formula to calculate the contribution of ethanol to the osmolal gap. Ann Emerg Med, 2001.](https://doi.org/10.1067/mem.2001.119455)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
