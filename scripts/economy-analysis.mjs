// Deterministic expected-value calculation, not Monte Carlo or combat balance.
export function analyze(mode,accuracy){
 const full=mode==='full',waves=full?100:40;let dist=Array(21).fill(0);dist[0]=1;
 let study=0,pool=0,pops=0,clear=0,attempts=0;
 const mult=s=>s>=20?1.2:s>=10?1.15:s>=5?1.1:s>=3?1.05:1;
 for(let wave=1;wave<=waves;wave++){
  const boss=wave%(full?20:10)===0;
  const q=full?[5,7,9,11,12][Math.floor((wave-1)/20)]+(boss?3:0):(wave<=20?2:3)+(boss?2:0);
  const B=250*Math.pow(full?1.03:1.04,wave-1)*(boss?(full?1.2:1.15):1);
  attempts+=q;pool+=B;pops+=.37*B;clear+=.06*B;
  for(let j=0;j<q;j++){
   const next=Array(21).fill(0);
   for(let s=0;s<=20;s++){
    const k=Math.min(20,s+1),correct=dist[s]*accuracy;
    study+=correct*(B/q)*mult(k);next[k]+=correct;next[0]+=dist[s]*(1-accuracy);
   }dist=next;
  }
 }
 return {mode,accuracy,waves,attempts,studyPool:pool,expectedStudy:study,fullClearPopUpperBound:pops,fullClearWaveBonusUpperBound:clear,totalConditionalIncome:study+pops+clear,studyShare:study/(study+pops+clear)};
}
if(process.argv[1]?.endsWith('economy-analysis.mjs'))console.log(JSON.stringify({method:'Exact finite-state expected value under independent answer accuracy; all waves hypothetically cleared',exclusions:['No combat simulation','No costs/purchases/leaks','No Scholar/Fisher bonuses','No proof of affordability or victory'],results:['quick','full'].flatMap(m=>[0,.6,.8,.95,1].map(p=>analyze(m,p)))},null,2));
