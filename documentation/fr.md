<!-- ELUCENIA technical documentation · osmolaridade-serica · fr · no clinical/professional/rights approval -->

# Osmolarité sérique et trou osmolaire

[conditions, sources et autorisations](https://elucenia.org/fr/outils/osmolaridade-serica)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Sodium

`na`

mEq/L · intervalle: 100–200

### Glucose

`glic`

mg/dL · intervalle: 10–2000

### Urée

`ureia`

mg/dL · intervalle: 5–500

### Éthanol sérique

`etanol`

mg/dL · facultatif · intervalle: 0–800

### Osmolalité mesurée

`osm`

mOsm/kg · facultatif · intervalle: 200–500

## Édition de la méthode

2 Na+glucose/18+urée/6 ou BUN/2,8 ; éthanol/Purssell2001 /3,7 ; tonicité sans urée

## Formule documentée

Osmolarité calculée = 2 × Na + glucose ÷ 18 + urée ÷ 6 (+ éthanol ÷ 3,7, si dosé). Avec BUN au lieu de l’urée, utiliser BUN ÷ 2,8.

Osmolarité efficace (tonicité) = 2 × Na + glucose ÷ 18.

Trou osmolaire = osmolalité mesurée − osmolarité calculée.

## Limites et population

Le trou osmolaire est un indice, pas l’identification spécifique d’un alcool. Sa valeur dépend du stade du métabolisme, du trou de base et d’autres solutés ; acidocétose, dysfonction rénale et acidose lactique peuvent aussi l’augmenter. La formule, les unités et l’osmolalité mesurée doivent correspondre à la source ; le résultat seul ne confirme ni n’exclut une intoxication.

## Références

- [Kraut JA, Xing SX. Approach to the evaluation of a patient with an increased serum osmolal gap and high-anion-gap metabolic acidosis. Am J Kidney Dis, 2011.](https://doi.org/10.1053/j.ajkd.2011.05.018)

- [Purssell RA et al. Derivation and validation of a formula to calculate the contribution of ethanol to the osmolal gap. Ann Emerg Med, 2001.](https://doi.org/10.1067/mem.2001.119455)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
