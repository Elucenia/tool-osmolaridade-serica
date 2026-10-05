<!-- ELUCENIA technical documentation · osmolaridade-serica · de · no clinical/professional/rights approval -->

# Serumosmolarität und osmolare Lücke

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/osmolaridade-serica)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Natrium

`na`

mEq/L · Bereich: 100–200

### Glukose

`glic`

mg/dL · Bereich: 10–2000

### Harnstoff

`ureia`

mg/dL · Bereich: 5–500

### Serumethanol

`etanol`

mg/dL · optional · Bereich: 0–800

### Gemessene Osmolalität

`osm`

mOsm/kg · optional · Bereich: 200–500

## Fassung der Methode

2 Na+Glucose/18+Harnstoff/6 oder BUN/2,8; Ethanol/Purssell2001 /3,7; Tonizität ohne Harnstoff

## Dokumentierte Formel

Berechnete Osmolarität = 2 × Na + Glucose ÷ 18 + Harnstoff ÷ 6 (+ Ethanol ÷ 3,7, falls gemessen). Bei BUN statt Harnstoff verwenden BUN ÷ 2,8.

Effektive Osmolarität (Tonizität) = 2 × Na + Glucose ÷ 18.

Osmolare Lücke = gemessene Osmolalität − berechnete Osmolarität.

## Grenzen und Population

Die osmotische Lücke ist ein Hinweis, kein spezifischer Alkoholnachweis. Ihr Wert hängt von Stoffwechselstadium, Ausgangslücke und weiteren gelösten Stoffen ab; Ketoazidose, Nierenfunktionsstörung und Laktatazidose können sie ebenfalls erhöhen. Formel, Einheiten und gemessene Osmolalität müssen zur Quelle passen; das Ergebnis allein bestätigt oder verneint keine Vergiftung.

## Referenzen

- [Kraut JA, Xing SX. Approach to the evaluation of a patient with an increased serum osmolal gap and high-anion-gap metabolic acidosis. Am J Kidney Dis, 2011.](https://doi.org/10.1053/j.ajkd.2011.05.018)

- [Purssell RA et al. Derivation and validation of a formula to calculate the contribution of ethanol to the osmolal gap. Ann Emerg Med, 2001.](https://doi.org/10.1067/mem.2001.119455)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
