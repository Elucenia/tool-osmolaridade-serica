<!-- ELUCENIA technical documentation · osmolaridade-serica · zh · no clinical/professional/rights approval -->

# 血清渗透浓度与渗透间隙

[条件、来源与许可](https://elucenia.org/zh/tools/osmolaridade-serica)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 钠

`na`

mEq/L · 范围: 100–200

### 葡萄糖

`glic`

mg/dL · 范围: 10–2000

### 尿素

`ureia`

mg/dL · 范围: 5–500

### 血清乙醇

`etanol`

mg/dL · 选填 · 范围: 0–800

### 实测渗透压浓度

`osm`

mOsm/kg · 选填 · 范围: 200–500

## 方法版本

2 Na+葡萄糖/18+尿素/6或BUN/2.8；乙醇/Purssell2001 /3.7；张力不含尿素

## 已记录的公式

计算渗透摩尔浓度 = 2 × Na + 葡萄糖 ÷ 18 + 尿素 ÷ 6 (+ 乙醇 ÷ 3.7, 若检测). 以BUN代尿素时使用 BUN ÷ 2.8.

有效渗透摩尔浓度 (张力) = 2 × Na + 葡萄糖 ÷ 18.

渗透间隙 = 实测渗透质量摩尔浓度 − 计算渗透摩尔浓度.

## 限制与适用人群

渗透间隙是一项线索，不能特异性识别某种醇。其值取决于代谢阶段、基础间隙及其他溶质；酮症酸中毒、肾功能障碍和乳酸性酸中毒也可使其升高。公式、单位及实测质量渗透浓度须与来源一致；单独结果不能确认或排除中毒。

## 参考文献

- [Kraut JA, Xing SX. Approach to the evaluation of a patient with an increased serum osmolal gap and high-anion-gap metabolic acidosis. Am J Kidney Dis, 2011.](https://doi.org/10.1053/j.ajkd.2011.05.018)

- [Purssell RA et al. Derivation and validation of a formula to calculate the contribution of ethanol to the osmolal gap. Ann Emerg Med, 2001.](https://doi.org/10.1067/mem.2001.119455)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
