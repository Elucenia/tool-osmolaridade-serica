<!-- ELUCENIA technical documentation · osmolaridade-serica · it · no clinical/professional/rights approval -->

# Osmolarità sierica e gap osmolare

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/osmolaridade-serica)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Sodio

`na`

mEq/L · intervallo: 100–200

### Glucosio

`glic`

mg/dL · intervallo: 10–2000

### Urea

`ureia`

mg/dL · intervallo: 5–500

### Etanolo sierico

`etanol`

mg/dL · facoltativo · intervallo: 0–800

### Osmolalità misurata

`osm`

mOsm/kg · facoltativo · intervallo: 200–500

## Edizione del metodo

2 Na+glucosio/18+urea/6 o BUN/2,8; etanolo/Purssell2001 /3,7; tonicità senza urea

## Formula documentata

Osmolarità calcolata = 2 × Na + glucosio ÷ 18 + urea ÷ 6 (+ etanolo ÷ 3,7, se dosato). Con BUN invece dell’urea, usare BUN ÷ 2,8.

Osmolarità efficace (tonicità) = 2 × Na + glucosio ÷ 18.

Gap osmolare = osmolalità misurata − osmolarità calcolata.

## Limiti e popolazione

Il gap osmolare è un indizio, non l’identificazione specifica di un alcol. Il suo valore dipende dalla fase del metabolismo, dal gap basale e da altri soluti; chetoacidosi, disfunzione renale e acidosi lattica possono anch’esse aumentarlo. Formula, unità e osmolalità misurata devono corrispondere alla fonte; il risultato da solo non conferma né esclude un’intossicazione.

## Riferimenti

- [Kraut JA, Xing SX. Approach to the evaluation of a patient with an increased serum osmolal gap and high-anion-gap metabolic acidosis. Am J Kidney Dis, 2011.](https://doi.org/10.1053/j.ajkd.2011.05.018)

- [Purssell RA et al. Derivation and validation of a formula to calculate the contribution of ethanol to the osmolal gap. Ann Emerg Med, 2001.](https://doi.org/10.1067/mem.2001.119455)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
