<!-- ELUCENIA technical documentation · osmolaridade-serica · en · no clinical/professional/rights approval -->

# Serum osmolarity and osmolar gap

[conditions, sources and permissions](https://elucenia.org/en/tools/osmolaridade-serica)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Sodium

`na`

mEq/L · range: 100–200

### Glucose

`glic`

mg/dL · range: 10–2000

### Urea

`ureia`

mg/dL · range: 5–500

### Serum ethanol

`etanol`

mg/dL · optional · range: 0–800

### Measured osmolality

`osm`

mOsm/kg · optional · range: 200–500

## Method edition

2 Na+glucose/18+urea/6 or BUN/2.8; ethanol/Purssell 2001 /3.7; tonicity excludes urea

## Documented formula

Calculated osmolarity = 2 × Na + glucose ÷ 18 + urea ÷ 6 (+ ethanol ÷ 3.7, if measured). With BUN instead of urea, use BUN ÷ 2.8.

Effective osmolarity (tonicity) = 2 × Na + glucose ÷ 18.

Osmolar gap = measured osmolality − calculated osmolarity.

## Limits and population

The osmolar gap is a clue, not specific identification of an alcohol. Its value depends on metabolic stage, baseline gap and other solutes; ketoacidosis, renal dysfunction and lactic acidosis can also raise it. The formula, units and measured osmolality must match the source; the result alone neither confirms nor excludes poisoning.

## References

- [Kraut JA, Xing SX. Approach to the evaluation of a patient with an increased serum osmolal gap and high-anion-gap metabolic acidosis. Am J Kidney Dis, 2011.](https://doi.org/10.1053/j.ajkd.2011.05.018)

- [Purssell RA et al. Derivation and validation of a formula to calculate the contribution of ethanol to the osmolal gap. Ann Emerg Med, 2001.](https://doi.org/10.1067/mem.2001.119455)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
