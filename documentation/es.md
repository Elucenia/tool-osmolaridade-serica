<!-- ELUCENIA technical documentation · osmolaridade-serica · es · no clinical/professional/rights approval -->

# Osmolaridad sérica y brecha osmolar

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/osmolaridade-serica)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Sodio

`na`

mEq/L · intervalo: 100–200

### Glucosa

`glic`

mg/dL · intervalo: 10–2000

### Urea

`ureia`

mg/dL · intervalo: 5–500

### Etanol sérico

`etanol`

mg/dL · opcional · intervalo: 0–800

### Osmolalidad medida

`osm`

mOsm/kg · opcional · intervalo: 200–500

## Edición del método

2 Na+glucosa/18+urea/6 o BUN/2,8; etanol/Purssell2001 /3,7; tonicidad sin urea

## Fórmula documentada

Osmolaridad calculada = 2 × Na + glucosa ÷ 18 + urea ÷ 6 (+ etanol ÷ 3,7, si medido). Con BUN en lugar de urea, use BUN ÷ 2,8.

Osmolaridad efectiva (tonicidad) = 2 × Na + glucosa ÷ 18.

Brecha osmolar = osmolalidad medida − osmolaridad calculada.

## Límites y población

La brecha osmolar es un indicio, no una identificación específica de un alcohol. Su valor depende de la etapa de metabolismo, la brecha basal y otros solutos; la cetoacidosis, la disfunción renal y la acidosis láctica también pueden elevarlo. La fórmula, las unidades y la osmolalidad medida deben corresponder a la fuente; el resultado aislado no confirma ni excluye intoxicación.

## Referencias

- [Kraut JA, Xing SX. Approach to the evaluation of a patient with an increased serum osmolal gap and high-anion-gap metabolic acidosis. Am J Kidney Dis, 2011.](https://doi.org/10.1053/j.ajkd.2011.05.018)

- [Purssell RA et al. Derivation and validation of a formula to calculate the contribution of ethanol to the osmolal gap. Ann Emerg Med, 2001.](https://doi.org/10.1067/mem.2001.119455)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
