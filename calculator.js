/* tool-osmolaridade-serica · Elucenia · https://github.com/Elucenia/tool-osmolaridade-serica
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"osmolaridade-serica","title":"Osmolaridade sérica e gap osmolar","fields":[["na","Sódio","num",{"min":100,"max":200,"unit":"mEq/L","ph":"140"}],["glic","Glicose","num",{"min":10,"max":2000,"unit":"mg/dL","ph":"100"}],["ureia","Ureia","num",{"min":5,"max":500,"unit":"mg/dL","ph":"30"}],["etanol","Etanol sérico","num",{"min":0,"max":800,"unit":"mg/dL","ph":"0","opt":true}],["osm","Osmolalidade medida","num",{"min":200,"max":500,"unit":"mOsm/kg","ph":"290","opt":true}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
a.def("osmolaridade-serica",function(a){var e=null==a.etanol?0:a.etanol/3.7,i=2*a.na+a.glic/18+a.ureia/6+e,r=2*a.na+a.glic/18,n=[["Osmolaridade efetiva (tonicidade)",o(r,0)+" mOsm/L"]],c={calc:i,efetiva:r};if(e&&n.push(["Contribuição do etanol",o(e,0)+" mOsm/L"]),null!=a.osm){var s=a.osm-i;return c.gap=s,n.unshift(["Gap osmolar (medida − calculada)",o(s,0)+" mOsm"]),{main:[o(s,0),"mOsm"],label:"Gap osmolar",level:s>10?"high":"low",verdict:s>10?"Gap osmolar aumentado (> 10): pesquisar metanol, etilenoglicol, etanol não informado, manitol ou outros solutos":"Gap osmolar normal (≤ 10)",rows:[["Osmolaridade calculada",o(i,0)+" mOsm/L"]].concat(n),note:"Gap normal não exclui intoxicação por álcool tóxico em fase tardia, quando o álcool já foi metabolizado em ácidos.",raw:c}}var l=i<275?["mid","Osmolaridade calculada baixa (< 275 mOsm/L)"]:i>295?["mid","Osmolaridade calculada elevada (> 295 mOsm/L)"]:["low","Osmolaridade calculada normal (275 a 295 mOsm/L)"];return{main:[o(i,0),"mOsm/L"],label:"Osmolaridade sérica calculada",level:l[0],verdict:l[1],rows:n,raw:c}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
