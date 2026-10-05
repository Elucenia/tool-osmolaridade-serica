<!-- ELUCENIA technical documentation · osmolaridade-serica · pt-BR · no clinical/professional/rights approval -->

# Osmolaridade sérica e gap osmolar

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/osmolaridade-serica)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Sódio

`na`

mEq/L · intervalo: 100–200

### Glicose

`glic`

mg/dL · intervalo: 10–2000

### Ureia

`ureia`

mg/dL · intervalo: 5–500

### Etanol sérico

`etanol`

mg/dL · opcional · intervalo: 0–800

### Osmolalidade medida

`osm`

mOsm/kg · opcional · intervalo: 200–500

## Edição do método

2 Na+glicose/18+ureia/6 ou BUN/2,8; etanol/Purssell 2001 /3,7; tonicidade semureia

## Fórmula documentada

Osmolaridade calculada = 2 × Na + glicose ÷ 18 + ureia ÷ 6 (+ etanol ÷ 3,7, se dosado). Com BUN no lugar da ureia, use BUN ÷ 2,8.

Osmolaridade efetiva (tonicidade) = 2 × Na + glicose ÷ 18.

Gap osmolar = osmolalidade medida − osmolaridade calculada.

## Limites e população

O gap osmolar é um indício, não identificação específica de um álcool. Seu valor depende do estágio de metabolismo, gap basal e outros solutos; cetoacidose, disfunção renal e acidose láctica também podem elevá-lo. Fórmula, unidades e osmolalidade medida devem corresponder à fonte; o resultado isolado não confirma ou exclui intoxicação.

## Referências

- [Kraut JA, Xing SX. Approach to the evaluation of a patient with an increased serum osmolal gap and high-anion-gap metabolic acidosis. Am J Kidney Dis, 2011.](https://doi.org/10.1053/j.ajkd.2011.05.018)

- [Purssell RA et al. Derivation and validation of a formula to calculate the contribution of ethanol to the osmolal gap. Ann Emerg Med, 2001.](https://doi.org/10.1067/mem.2001.119455)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
