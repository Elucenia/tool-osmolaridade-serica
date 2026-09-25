# Osmolaridade sérica e gap osmolar

Identificador: `osmolaridade-serica`. Pacote independente da interface ELUCENIA, para navegador e Node.js.

## Situação

- Revisão: **needs-review**. Revisão documental e clínica independente pendente.
- Execução: **disponível para reprodução técnica da fórmula**.
- Validação clínica independente: **não realizada**. Os testes abaixo verificam aritmética e transporte dos campos.
- Fonte importada: Panorama Médico; arquivo `app/content/ferramentas/urgencia.php`.
- 4/4 casos de referência conferidos na importação. 1 casos independentes desta ferramenta.
- Dados: o exemplo funciona localmente, sem rede, armazenamento ou identificação de pacientes.

## Uso no Node.js

```js
const { calculate } = require('./calculator.js');
const example = require('./examples.json')[0];
console.log(calculate(example.input));
```

Execute `node test.cjs` (ou `npm test`) para conferir os exemplos. Abra `index.html` para usar a versão local do navegador. Não há dependências npm.

## Contrato

`calculate(input)` recebe um objeto, devolve `{id, main, label, raw, clinicalValidation}` ou `{error, code, field?}`. Consulte `tool.json` e `metadata.fields` para nomes, unidades, opções e intervalos. Números aceitam valores finitos ou strings numéricas; opções precisam corresponder às chaves documentadas. Campos obrigatórios vazios, booleanos inválidos, valores fora de intervalo e resultados não finitos são rejeitados. Somente checkbox omitido representa falso; um campo numérico ou uma opção obrigatória nunca é preenchido automaticamente.

Interpretações, ordens terapêuticas e tabelas herdadas não são retornadas pelo adaptador. Classificações e valores ainda dependem da população e das limitações da fonte.

## Fórmula / versão

Osmolaridade calculada = 2 × Na + glicose ÷ 18 + ureia ÷ 6 (+ etanol ÷ 3,7, se dosado). Com BUN no lugar da ureia, use BUN ÷ 2,8.Osmolaridade efetiva (tonicidade) = 2 × Na + glicose ÷ 18.Gap osmolar = osmolalidade medida − osmolaridade calculada.

A transcrição acima documenta o acervo de origem e pode requerer atualização. 

## Condições e limites

Calcula a osmolaridade plasmática a partir de sódio, glicose e ureia; com a osmolalidade medida, o gap osmolar ajuda a detectar álcoois tóxicos e outros solutos não medidos.

Confirme população, exclusões, unidades, versão e diretriz aplicável ao país e serviço. O resultado não deve ser utilizado isoladamente para diagnóstico, alta ou prescrição. O pacote não representa certificação clínica, aprovação regulatória ou indicação para toda população. Veja a revisão completa em `tool.json`.

## Fontes originais

- [Kraut JA, Xing SX. Approach to the evaluation of a patient with an increased serum osmolal gap and high-anion-gap metabolic acidosis. Am J Kidney Dis, 2011.](https://doi.org/10.1053/j.ajkd.2011.05.018)
- [Purssell RA et al. Derivation and validation of a formula to calculate the contribution of ethanol to the osmolal gap. Ann Emerg Med, 2001.](https://doi.org/10.1067/mem.2001.119455)

## Exemplos e rastreabilidade

`examples.json` preserva `originalInput`, expectativa e entrada explícita do exemplo. Não foi necessário expandir opções zero nos exemplos.

## Direitos e repositório

Este pacote integra o acervo privado de desenvolvimento da ELUCENIA. A publicação externa depende de liberação expressa. A licença MIT (arquivo LICENSE) cobre o código de integração, preservando o aviso de autoria e a licença; não transfere direitos sobre instrumentos, traduções, questionários, artigos, marcas ou outros materiais de terceiros. Consulte NOTICE.md e as condições de cada titular. O acesso a este adaptador não publica nem licencia automaticamente o restante da plataforma ELUCENIA.

## Acesso ao repositório

Repositório privado da organização ELUCENIA. A abertura pública depende de liberação expressa.
